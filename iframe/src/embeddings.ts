import type { EmbeddingsParams } from '@langchain/core/embeddings';
import type { InferenceOptions } from './inference-client';
import { Embeddings } from '@langchain/core/embeddings';
import { InferenceClient } from './inference-client';
import { PREBUILT_VECTOR_DTYPE, PREBUILT_VECTOR_MODEL_NAME } from './prebuilt-vector-info';

export class LocalEmbeddings extends Embeddings {
	private client: InferenceClient;
	constructor(params?: EmbeddingsParams & Omit<InferenceOptions, 'kind'>) {
		super(params ?? {});
		this.client = new InferenceClient({
			...params,
			kind: 'feature-extraction',
			modelName: params?.modelName || PREBUILT_VECTOR_MODEL_NAME,
			dtype: PREBUILT_VECTOR_DTYPE,
			onProgress: message => params?.onProgress?.(eda.sys_I18n.text(message)),
		});
	}

	async prepare(): Promise<void> { await this.client.run(); }
	async embedDocuments(documents: string[]): Promise<number[][]> {
		const vectors: number[][] = [];
		for (let index = 0; index < documents.length; index += 4) {
			const result = await this.client.run('embed', { documents: documents.slice(index, index + 4) });
			vectors.push(...result.vectors);
		}
		return vectors;
	}

	async embedQuery(query: string): Promise<number[]> { return (await this.embedDocuments([query]))[0]; }
	dispose(): void { this.client.dispose(); }
}
