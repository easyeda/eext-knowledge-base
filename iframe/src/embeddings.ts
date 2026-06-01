import type { FeatureExtractionPipeline } from '@huggingface/transformers';
import type { EmbeddingsParams } from '@langchain/core/embeddings';
import { env, pipeline } from '@huggingface/transformers';
import { Embeddings } from '@langchain/core/embeddings';

const DEFAULT_MODEL_NAME = 'Xenova/bge-large-zh-v1.5';

/** 让出主线程，允许浏览器处理 UI 事件 */
function yieldToMain(): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, 0));
}

export class LocalEmbeddings extends Embeddings {
	private extractor: FeatureExtractionPipeline | null = null;
	private loading: Promise<FeatureExtractionPipeline> | null = null;
	private onProgress: ((info: string) => void) | null = null;
	private modelName: string;

	constructor(params?: EmbeddingsParams & { onProgress?: (info: string) => void; modelMirror?: string; modelName?: string }) {
		super(params ?? {});
		this.onProgress = params?.onProgress ?? null;
		this.modelName = params?.modelName || DEFAULT_MODEL_NAME;

		env.allowLocalModels = false;
		env.allowRemoteModels = true;
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

		this.loading = pipeline('feature-extraction', this.modelName, {
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
				else if (p.status === 'progress') {
					const loaded = p.loaded || 0;
					const total = p.total || 0;
					const file = (p.file || '').replace(/^Xenova\//, '');
					if (total > 0) {
						const percent = Math.round((loaded / total) * 100);
						this.onProgress(`下载 ${file}: ${percent}%`);
					}
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
			const output = await extractor(batch, { pooling: 'mean', normalize: true, truncation: true } as any);
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
		const output = await extractor([query], { pooling: 'mean', normalize: true, truncation: true } as any);
		return Array.from((output as any)[0].data);
	}
}
