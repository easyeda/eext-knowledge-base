import type { VectorEntry } from './builtin-docs';

export interface TextEntry {
	text: string;
	source: string;
}

export async function buildIncrementalVectors(
	entries: TextEntry[],
	cached: VectorEntry[],
	embed: (texts: string[]) => Promise<number[][]>,
	checkpoint: (vectors: VectorEntry[]) => Promise<void>,
	onProgress?: (done: number, total: number) => void,
	batchSize = 32,
	signal?: AbortSignal,
): Promise<VectorEntry[]> {
	const byText = new Map<string, number[]>();
	let dimensions: number | undefined;
	for (const entry of cached) {
		if (!entry || typeof entry.text !== 'string' || !Array.isArray(entry.vector) || entry.vector.length === 0
			|| !entry.vector.every(value => typeof value === 'number' && Number.isFinite(value))
			|| entry.vector.every(value => value === 0)) {
			continue;
		}
		dimensions ??= entry.vector.length;
		if (entry.vector.length === dimensions) {
			byText.set(entry.text, entry.vector);
		}
	}
	const uniqueEntries = [...new Map(entries.map(entry => [entry.text, entry])).values()];
	const pending = uniqueEntries.filter(entry => !byText.has(entry.text));
	onProgress?.(uniqueEntries.length - pending.length, uniqueEntries.length);
	for (let offset = 0; offset < pending.length; offset += batchSize) {
		if (signal?.aborted) {
			throw new DOMException('Preparation canceled', 'AbortError');
		}
		const batch = pending.slice(offset, offset + batchSize);
		const vectors = await embed(batch.map(entry => entry.text));
		if (vectors.length !== batch.length) {
			throw new Error('Embedding returned an invalid number of vectors.');
		}
		for (const vector of vectors) {
			if (!Array.isArray(vector)) {
				throw new TypeError('Embedding returned an invalid vector.');
			}
			dimensions ??= vector.length;
			if (vector.length !== dimensions || vector.length === 0 || !vector.every(value => typeof value === 'number' && Number.isFinite(value)) || vector.every(value => value === 0)) {
				throw new Error('Incompatible embedding vectors. Rebuild the knowledge base vectors in Settings.');
			}
		}
		batch.forEach((entry, index) => byText.set(entry.text, vectors[index]));
		await checkpoint(batch.map((entry, index) => ({ ...entry, vector: vectors[index] })));
		onProgress?.(uniqueEntries.length - pending.length + offset + batch.length, uniqueEntries.length);
	}
	if (signal?.aborted) {
		throw new DOMException('Preparation canceled', 'AbortError');
	}
	return entries.map(entry => ({ ...entry, vector: byText.get(entry.text)! }));
}
