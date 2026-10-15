import type { EmbeddingAPIConfig } from './model-config';
import { Embeddings } from '@langchain/core/embeddings';

declare const eda: any;

interface EmbeddingResponse {
	data?: Array<{ index: number; embedding: number[] }>;
}

export class APIEmbeddings extends Embeddings {
	private dimensions?: number;

	constructor(private config: EmbeddingAPIConfig) {
		super({});
	}

	async prepare(): Promise<void> {
		if (!this.config.baseURL || !this.config.model) {
			throw new Error('Configure the Embedding API URL and model in Settings.');
		}
		const url = new URL(this.config.baseURL);
		if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) {
			throw new Error('Invalid Embedding API URL.');
		}
	}

	async embedDocuments(documents: string[], signal?: AbortSignal): Promise<number[][]> {
		await this.prepare();
		const vectors: number[][] = [];
		for (let offset = 0; offset < documents.length; offset += 32) {
			if (signal?.aborted) {
				throw new DOMException('Embedding canceled', 'AbortError');
			}
			const input = documents.slice(offset, offset + 32);
			const body = JSON.stringify({ model: this.config.model, input, encoding_format: 'float' });
			const headers: Record<string, string> = { 'Content-Type': 'application/json' };
			if (this.config.apiKey) {
				headers.Authorization = `Bearer ${this.config.apiKey}`;
			}
			const url = `${this.config.baseURL.trim().replace(/\/+$/, '')}/embeddings`;
			const response: Response = typeof eda !== 'undefined' && eda.sys_ClientUrl
				? await eda.sys_ClientUrl.request(url, 'POST', body, { headers })
				: await fetch(url, { method: 'POST', headers, body, signal });
			if (!response.ok) {
				const error = await response.json().catch(() => null);
				let message = typeof error?.error?.message === 'string' ? error.error.message : '';
				if (this.config.apiKey) {
					message = message.replaceAll(this.config.apiKey, '[redacted]');
				}
				throw new Error(`Embedding API error (${response.status})${message ? `: ${message.slice(0, 1000)}` : ''}`);
			}
			const data = await response.json() as EmbeddingResponse;
			if (!Array.isArray(data.data) || data.data.length !== input.length) {
				throw new Error('Embedding API returned an invalid number of vectors.');
			}
			const ordered = data.data.slice().sort((first, second) => first.index - second.index);
			for (const [index, entry] of ordered.entries()) {
				const vector = entry.embedding;
				if (entry.index !== index || !Array.isArray(vector) || vector.length === 0
					|| !vector.every(value => typeof value === 'number' && Number.isFinite(value))
					|| vector.every(value => value === 0)) {
					throw new Error('Embedding API returned an invalid vector.');
				}
				this.dimensions ??= vector.length;
				if (vector.length !== this.dimensions) {
					throw new Error('Embedding API returned inconsistent vector dimensions.');
				}
				vectors.push(vector);
			}
		}
		return vectors;
	}

	async embedQuery(query: string): Promise<number[]> {
		return (await this.embedDocuments([query]))[0];
	}
}
