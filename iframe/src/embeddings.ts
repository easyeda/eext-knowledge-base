import type { FeatureExtractionPipeline } from '@huggingface/transformers';
import type { EmbeddingsParams } from '@langchain/core/embeddings';
import { env, pipeline } from '@huggingface/transformers';
import { Embeddings } from '@langchain/core/embeddings';

const MODEL_NAME = 'Xenova/bge-small-zh-v1.5';

/** 让出主线程，允许浏览器处理 UI 事件 */
function yieldToMain(): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, 0));
}

export class LocalEmbeddings extends Embeddings {
	private extractor: FeatureExtractionPipeline | null = null;
	private loading: Promise<FeatureExtractionPipeline> | null = null;
	private onProgress: ((info: string) => void) | null = null;

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
					this.onProgress('正在初始化模型...');
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
