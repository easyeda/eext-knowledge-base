import type { FeatureExtractionPipeline } from '@huggingface/transformers';
import type { EmbeddingsParams } from '@langchain/core/embeddings';
import { env, pipeline } from '@huggingface/transformers';
import { Embeddings } from '@langchain/core/embeddings';

const MODEL_NAME = 'Xenova/bge-small-zh-v1.5';

export class LocalEmbeddings extends Embeddings {
	private extractor: FeatureExtractionPipeline | null = null;
	private loading: Promise<FeatureExtractionPipeline> | null = null;
	private onProgress: ((info: string) => void) | null = null;

	constructor(modelHost: string, params?: EmbeddingsParams & { onProgress?: (info: string) => void }) {
		super(params ?? {});
		this.onProgress = params?.onProgress ?? null;
		env.remoteHost = modelHost;
	}

	private async getExtractor(): Promise<FeatureExtractionPipeline> {
		if (this.extractor) {
			return this.extractor;
		}
		if (this.loading) {
			return this.loading;
		}

		if (this.onProgress) {
			this.onProgress('正在加载 Embedding 模型...');
		}

		this.loading = pipeline('feature-extraction', MODEL_NAME, {
			dtype: 'q8',
			progress_callback: (p: any) => {
				if (!this.onProgress) {
					return;
				}
				if (p.status === 'download' && p.file) {
					const name = p.file.split('/').pop() || p.file;
					this.onProgress(`正在下载模型文件: ${name}`);
				}
				else if (p.status === 'progress' && p.file) {
					const name = p.file.split('/').pop() || p.file;
					const pct = Math.round(p.progress || 0);
					const loaded = p.loaded ? `${(p.loaded / 1024 / 1024).toFixed(1)}MB` : '';
					const total = p.total ? `/${(p.total / 1024 / 1024).toFixed(1)}MB` : '';
					this.onProgress(`下载 ${name}: ${pct}% ${loaded}${total}`);
				}
				else if (p.status === 'done' && p.file) {
					const name = p.file.split('/').pop() || p.file;
					this.onProgress(`已下载: ${name}`);
				}
				else if (p.status === 'ready') {
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
		}
		return results;
	}

	async embedQuery(query: string): Promise<number[]> {
		const extractor = await this.getExtractor();
		const output = await extractor([query], { pooling: 'mean', normalize: true });
		return Array.from((output as any)[0].data);
	}
}
