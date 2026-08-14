import type { VectorEntry } from './builtin-docs';
import { PREBUILT_VECTOR_MODEL_NAME } from './prebuilt-vector-info';

const VECTOR_CACHE_NAME = 'eext-ai-vector-cache-v1';
const VECTOR_CACHE_PATH = '/__eext_vectors__';

function cacheRequest(key: string): Request {
	return new Request(`${location.origin}${VECTOR_CACHE_PATH}/${encodeURIComponent(key)}.json`);
}

export function importedVectorCacheKey(modelId: string, dtype?: string): string {
	return `imported-${modelId}-${dtype || 'auto'}`;
}

export function remoteVectorCacheKey(modelName?: string): string {
	return `remote-${modelName || PREBUILT_VECTOR_MODEL_NAME}`;
}

export async function readVectorCache(key: string): Promise<VectorEntry[] | null> {
	const cache = await caches.open(VECTOR_CACHE_NAME);
	const response = await cache.match(cacheRequest(key));
	if (!response) {
		return null;
	}
	try {
		const parsed = await response.json();
		return Array.isArray(parsed) ? parsed : null;
	}
	catch {
		return null;
	}
}

export async function writeVectorCache(key: string, entries: VectorEntry[]): Promise<void> {
	const cache = await caches.open(VECTOR_CACHE_NAME);
	await cache.put(cacheRequest(key), new Response(JSON.stringify(entries), {
		headers: { 'content-type': 'application/json' },
	}));
}

export async function deleteVectorCache(key: string): Promise<void> {
	const cache = await caches.open(VECTOR_CACHE_NAME);
	await cache.delete(cacheRequest(key));
}
