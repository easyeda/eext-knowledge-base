import type { FeatureExtractionPipeline } from '@huggingface/transformers';
import type { EmbeddingsParams } from '@langchain/core/embeddings';
import type { ImportedModel } from './model-store';
import { env, pipeline } from '@huggingface/transformers';
import { Embeddings } from '@langchain/core/embeddings';
import { createImportedModelCache } from './model-store';
import { PREBUILT_VECTOR_DTYPE, PREBUILT_VECTOR_MODEL_NAME } from './prebuilt-vector-info';

const DEFAULT_MODEL_NAME = PREBUILT_VECTOR_MODEL_NAME;

/** 让出主线程，允许浏览器处理 UI 事件 */
function yieldToMain(): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, 0));
}

export class LocalEmbeddings extends Embeddings {
	private extractor: FeatureExtractionPipeline | null = null;
	private loading: Promise<FeatureExtractionPipeline> | null = null;
	private onProgress: ((info: string) => void) | null = null;
	private modelName: string;
	private importedModel: ImportedModel | undefined;

	constructor(params?: EmbeddingsParams & { onProgress?: (info: string) => void; modelMirror?: string; modelName?: string; importedModel?: ImportedModel }) {
		super(params ?? {});
		this.onProgress = params?.onProgress ?? null;
		this.importedModel = params?.importedModel;
		this.modelName = params?.importedModel ? `imported/${params.importedModel.id}` : params?.modelName || DEFAULT_MODEL_NAME;

		if (params?.importedModel) {
			env.allowLocalModels = true;
			env.allowRemoteModels = false;
			env.useBrowserCache = false;
			env.useCustomCache = true;
			env.customCache = createImportedModelCache(params.importedModel) as Cache;
		}
		else {
			env.allowLocalModels = false;
			env.allowRemoteModels = true;
			env.useBrowserCache = true;
			env.useCustomCache = false;
			env.customCache = null;
			env.remoteHost = params?.modelMirror || 'https://hf-mirror.com';
			env.remotePathTemplate = '{model}/resolve/{revision}/';
		}
	}

	private async getExtractor(): Promise<FeatureExtractionPipeline> {
		if (this.extractor) {
			return this.extractor;
		}
		if (this.loading) {
			return this.loading;
		}

		if (this.onProgress) {
			this.onProgress(eda.sys_I18n.text('Loading built-in Embedding model...'));
		}

		this.loading = pipeline('feature-extraction', this.modelName, {
			dtype: this.importedModel ? this.importedModel.selectedDtype || 'auto' : PREBUILT_VECTOR_DTYPE,
			local_files_only: !env.allowRemoteModels,
			progress_callback: (p: any) => {
				if (!this.onProgress) {
					return;
				}
				if (p.status === 'ready') {
					this.onProgress(eda.sys_I18n.text('Embedding model loaded'));
				}
				else if (p.status === 'initiate') {
					// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder
					this.onProgress(eda.sys_I18n.text('Initializing model: ${1}', undefined, undefined, p.file || '...'));
				}
				else if (p.status === 'progress') {
					const loaded = p.loaded || 0;
					const total = p.total || 0;
					const file = (p.file || '').replace(/^Xenova\//, '');
					if (total > 0) {
						const percent = Math.round((loaded / total) * 100);
						// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder
						this.onProgress(eda.sys_I18n.text('Downloading ${1}: ${2}%', undefined, undefined, file, String(percent)));
					}
				}
			},
		}).then((ext) => {
			this.extractor = ext;
			if (this.onProgress) {
				this.onProgress(eda.sys_I18n.text('Embedding model ready'));
			}
			return ext;
		}).catch((error) => {
			this.loading = null;
			throw error;
		});

		return this.loading;
	}

	async prepare(): Promise<void> {
		const extractor = await this.getExtractor();
		await extractor(['ready'], { pooling: 'mean', normalize: true, truncation: true } as any);
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
