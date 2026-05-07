import type { FeatureExtractionPipeline } from '@huggingface/transformers';
import type { EmbeddingsParams } from '@langchain/core/embeddings';
import { env, pipeline } from '@huggingface/transformers';
import { Embeddings } from '@langchain/core/embeddings';

const MODEL_NAME = 'Xenova/bge-small-zh-v1.5';

/** 让出主线程，允许浏览器处理 UI 事件 */
function yieldToMain(): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, 0));
}

/** 格式化字节数为可读格式 */
function formatBytes(bytes: number): string {
	if (bytes < 1024)
		return `${bytes} B`;
	if (bytes < 1024 * 1024)
		return `${(bytes / 1024).toFixed(1)} KB`;
	if (bytes < 1024 * 1024 * 1024)
		return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
	return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

/** 格式化网速 */
function formatSpeed(bytesPerSecond: number): string {
	if (bytesPerSecond < 1024)
		return `${bytesPerSecond} B/s`;
	if (bytesPerSecond < 1024 * 1024)
		return `${(bytesPerSecond / 1024).toFixed(1)} KB/s`;
	return `${(bytesPerSecond / (1024 * 1024)).toFixed(1)} MB/s`;
}

/** 进度跟踪器 */
class ProgressTracker {
	startTime: number = 0;
	private lastLoaded: number = 0;
	private lastTime: number = 0;
	private speeds: number[] = [];

	start(): void {
		this.startTime = Date.now();
		this.lastTime = this.startTime;
		this.speeds = [];
	}

	getSpeed(loaded: number): number {
		const now = Date.now();
		const elapsed = (now - this.lastTime) / 1000;
		if (elapsed > 0) {
			const currentSpeed = (loaded - this.lastLoaded) / elapsed;
			this.speeds.push(currentSpeed);
			// 保留最近5个速度值用于平滑
			if (this.speeds.length > 5) {
				this.speeds.shift();
			}
			this.lastLoaded = loaded;
			this.lastTime = now;
		}
		// 返回平均速度
		return this.speeds.length > 0
			? this.speeds.reduce((a, b) => a + b, 0) / this.speeds.length
			: 0;
	}

	reset(): void {
		this.startTime = 0;
		this.lastLoaded = 0;
		this.lastTime = 0;
		this.speeds = [];
	}
}

export class LocalEmbeddings extends Embeddings {
	private extractor: FeatureExtractionPipeline | null = null;
	private loading: Promise<FeatureExtractionPipeline> | null = null;
	private onProgress: ((info: string) => void) | null = null;
	private progressTracker: ProgressTracker = new ProgressTracker();

	constructor(params?: EmbeddingsParams & { onProgress?: (info: string) => void; modelMirror?: string }) {
		super(params ?? {});
		this.onProgress = params?.onProgress ?? null;

		// 优先使用本地模型，本地不存在时允许从远端下载
		env.allowLocalModels = true;
		env.localModelPath = '/iframe/models/';
		env.allowRemoteModels = true;

		// 设置模型镜像站，默认使用 hf-mirror.com
		env.remoteHost = params?.modelMirror || 'https://hf-mirror.com';
		env.remotePathTemplate = '{model}/resolve/{revision}/';
	}

	private async getExtractor(): Promise<FeatureExtractionPipeline> {
		if (this.extractor) {
			return this.extractor;
		}
		if (this.loading) {
			return this.loading;
		}

		if (this.onProgress) {
			this.onProgress('正在加载内置 Embedding 模型...');
		}

		// 重置进度追踪器
		this.progressTracker.reset();

		this.loading = pipeline('feature-extraction', MODEL_NAME, {
			dtype: 'q8',
			progress_callback: (p: any) => {
				if (!this.onProgress) {
					return;
				}
				if (p.status === 'ready') {
					this.onProgress('Embedding 模型加载完成');
				}
				else if (p.status === 'initiate') {
					this.onProgress(`正在初始化模型: ${p.file || '...'}`);
				}
				else if (p.status === 'download') {
					// 首次进入下载状态时初始化追踪器
					if (this.progressTracker.startTime === 0) {
						this.progressTracker.start();
					}
					const loaded = p.loaded || 0;
					const total = p.total || 0;
					// 将 Xenova/bge-small-zh-v1.5/... 简化为 bge-small-zh-v1.5/...
					const file = (p.file || '未知文件').replace(/^Xenova\//, '');
					if (total > 0) {
						const percent = Math.round((loaded / total) * 100);
						const speed = this.progressTracker.getSpeed(loaded);
						this.onProgress(`下载 ${file}: ${percent}% (${formatBytes(loaded)}/${formatBytes(total)}, ${formatSpeed(speed)})`);
					}
					else {
						const speed = this.progressTracker.getSpeed(loaded);
						this.onProgress(`下载 ${file}: ${formatBytes(loaded)} (${formatSpeed(speed)})`);
					}
				}
				else if (p.status === 'progress') {
					// progress 状态也用于下载进度
					if (this.progressTracker.startTime === 0) {
						this.progressTracker.start();
					}
					const loaded = p.loaded || 0;
					const total = p.total || 0;
					// 将 Xenova/bge-small-zh-v1.5/... 简化为 bge-small-zh-v1.5/...
					const file = (p.file || '未知文件').replace(/^Xenova\//, '');
					if (total > 0) {
						const percent = Math.round((loaded / total) * 100);
						const speed = this.progressTracker.getSpeed(loaded);
						this.onProgress(`下载 ${file}: ${percent}% (${formatBytes(loaded)}/${formatBytes(total)}, ${formatSpeed(speed)})`);
					}
					else {
						const speed = this.progressTracker.getSpeed(loaded);
						this.onProgress(`下载 ${file}: ${formatBytes(loaded)} (${formatSpeed(speed)})`);
					}
				}
				else if (p.status === 'done') {
					const file = p.file || '文件';
					this.onProgress(`已完成: ${file}`);
				}
			},
		}).then((ext) => {
			this.extractor = ext;
			if (this.onProgress) {
				this.onProgress('Embedding 模型就绪');
			}
			return ext;
		});

		return this.loading;
	}

	async embedDocuments(documents: string[]): Promise<number[][]> {
		const extractor = await this.getExtractor();
		const results: number[][] = [];
		const batchSize = 4;
		for (let i = 0; i < documents.length; i += batchSize) {
			const batch = documents.slice(i, i + batchSize);
			const output = await extractor(batch, { pooling: 'mean', normalize: true });
			for (let j = 0; j < batch.length; j++) {
				results.push(Array.from((output as any)[j].data));
			}
			// 每个批次之间让出主线程，避免长时间阻塞 UI
			if (i + batchSize < documents.length) {
				await yieldToMain();
			}
		}
		return results;
	}

	async embedQuery(query: string): Promise<number[]> {
		const extractor = await this.getExtractor();
		const output = await extractor([query], { pooling: 'mean', normalize: true });
		return Array.from((output as any)[0].data);
	}
}
