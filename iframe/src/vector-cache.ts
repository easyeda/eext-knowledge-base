import type { VectorEntry } from './builtin-docs';
import { DEFAULT_EMBEDDING_MODEL } from './embedding-defaults';

const VECTOR_CACHE_NAME = 'eext-ai-vector-cache-v1';
const VECTOR_CACHE_PATH = '/__eext_vectors__';
const VECTOR_CACHE_BATCH_SIZE = 64;

interface VectorCacheManifest {
	version: 2;
	generation: string;
	chunks: number;
}

function snapshotPrefix(key: string): string {
	return `${location.origin}${VECTOR_CACHE_PATH}/snapshot/${encodeURIComponent(key)}/`;
}

function snapshotRequest(key: string, generation: string, index: number): Request {
	return new Request(`${snapshotPrefix(key)}${generation}/${index}.json`);
}

export interface CachedUserDocumentVectors {
	contentHash: string;
	vectors: VectorEntry[];
}

export interface UserVectorCache {
	version: 1;
	documents: Record<string, CachedUserDocumentVectors>;
}

function cacheRequest(key: string): Request {
	return new Request(`${location.origin}${VECTOR_CACHE_PATH}/${encodeURIComponent(key)}.json`);
}

export function importedVectorCacheKey(modelId: string, dtype?: string): string {
	return `imported-${modelId}-${dtype || 'auto'}`;
}

export function remoteVectorCacheKey(modelName?: string): string {
	return `remote-${modelName || DEFAULT_EMBEDDING_MODEL}`;
}

export function userVectorCacheKey(modelKey: string): string {
	return `user-documents-${modelKey}`;
}

export async function hashVectorDocument(content: string): Promise<string> {
	const bytes = new TextEncoder().encode(content);
	const digest = await crypto.subtle.digest('SHA-256', bytes);
	return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
}

export async function readVectorCache(key: string): Promise<VectorEntry[] | null> {
	const cache = await caches.open(VECTOR_CACHE_NAME);
	const response = await cache.match(cacheRequest(key));
	if (!response) {
		return null;
	}
	try {
		const parsed = await response.json();
		if (Array.isArray(parsed)) {
			return parsed;
		}
		const manifest = parsed as VectorCacheManifest;
		if (manifest?.version !== 2 || typeof manifest.generation !== 'string'
			|| !/^[\w-]+$/.test(manifest.generation) || !Number.isSafeInteger(manifest.chunks) || manifest.chunks < 0) {
			return null;
		}
		const entries: VectorEntry[] = [];
		for (let index = 0; index < manifest.chunks; index++) {
			const chunk = await cache.match(snapshotRequest(key, manifest.generation, index));
			if (!chunk) {
				return null;
			}
			const batch = await chunk.json();
			if (!Array.isArray(batch)) {
				return null;
			}
			for (const entry of batch) {
				entries.push(entry);
			}
		}
		return entries;
	}
	catch {
		return null;
	}
}

export async function hasVectorCache(key: string, allowEmpty = false): Promise<boolean> {
	const cache = await caches.open(VECTOR_CACHE_NAME);
	const response = await cache.match(cacheRequest(key));
	if (!response) {
		return false;
	}
	try {
		const parsed = await response.json();
		if (Array.isArray(parsed)) {
			return allowEmpty || parsed.length > 0;
		}
		if (parsed?.version === 2) {
			return Number.isSafeInteger(parsed.chunks) && parsed.chunks >= 0 && (allowEmpty || parsed.chunks > 0);
		}
		if (parsed?.version === 1 && parsed.documents && typeof parsed.documents === 'object') {
			return Object.values(parsed.documents as UserVectorCache['documents']).some(document => Array.isArray(document?.vectors) && document.vectors.length > 0);
		}
	}
	catch { /* Invalid or empty legacy caches must not trigger a new automatic full build. */ }
	return false;
}

export async function writeVectorCache(key: string, entries: VectorEntry[]): Promise<void> {
	const cache = await caches.open(VECTOR_CACHE_NAME);
	const previousChunks = (await cache.keys()).filter(request => request.url.startsWith(snapshotPrefix(key)));
	const manifest: VectorCacheManifest = {
		version: 2,
		generation: crypto.randomUUID(),
		chunks: Math.ceil(entries.length / VECTOR_CACHE_BATCH_SIZE),
	};
	const written: Request[] = [];
	try {
		for (let index = 0; index < manifest.chunks; index++) {
			const request = snapshotRequest(key, manifest.generation, index);
			const batch = entries.slice(index * VECTOR_CACHE_BATCH_SIZE, (index + 1) * VECTOR_CACHE_BATCH_SIZE);
			await cache.put(request, new Response(JSON.stringify(batch), {
				headers: { 'content-type': 'application/json' },
			}));
			written.push(request);
		}
		// Publish only after every chunk is durable, preserving the previous snapshot on failure.
		await cache.put(cacheRequest(key), new Response(JSON.stringify(manifest), {
			headers: { 'content-type': 'application/json' },
		}));
	}
	catch (error) {
		for (const request of written) {
			await cache.delete(request).catch(cleanupError => console.warn('[AI-Assistant] Failed to remove incomplete vector cache:', cleanupError));
		}
		throw error;
	}
	for (const request of previousChunks) {
		await cache.delete(request).catch(error => console.warn('[AI-Assistant] Failed to remove old vector cache:', error));
	}
}

export async function deleteVectorCache(key: string): Promise<void> {
	const cache = await caches.open(VECTOR_CACHE_NAME);
	await cache.delete(cacheRequest(key));
	for (const request of await cache.keys()) {
		if (request.url.startsWith(snapshotPrefix(key))) {
			await cache.delete(request);
		}
	}
}

function journalPrefix(key: string): string {
	return `${location.origin}${VECTOR_CACHE_PATH}/journal/${encodeURIComponent(key)}/`;
}

export async function readVectorJournal(key: string): Promise<VectorEntry[]> {
	const cache = await caches.open(VECTOR_CACHE_NAME);
	const requests = (await cache.keys()).filter(request => request.url.startsWith(journalPrefix(key)));
	const entries: VectorEntry[] = [];
	for (const request of requests) {
		const response = await cache.match(request);
		if (!response) {
			continue;
		}
		try {
			const batch = await response.json();
			if (Array.isArray(batch)) {
				entries.push(...batch);
			}
		}
		catch {
			continue;
		}
	}
	return entries;
}

export async function writeVectorBatch(key: string, entries: VectorEntry[]): Promise<void> {
	const cache = await caches.open(VECTOR_CACHE_NAME);
	await cache.put(new Request(`${journalPrefix(key)}${crypto.randomUUID()}.json`), new Response(JSON.stringify(entries), {
		headers: { 'content-type': 'application/json' },
	}));
}

export async function deleteVectorJournal(key: string): Promise<void> {
	const cache = await caches.open(VECTOR_CACHE_NAME);
	for (const request of await cache.keys()) {
		if (request.url.startsWith(journalPrefix(key))) {
			await cache.delete(request);
		}
	}
}

export async function readUserVectorCache(key: string): Promise<UserVectorCache | null> {
	const cache = await caches.open(VECTOR_CACHE_NAME);
	const response = await cache.match(cacheRequest(key));
	if (!response) {
		return null;
	}
	try {
		const parsed = await response.json() as UserVectorCache;
		return parsed?.version === 1 && parsed.documents && typeof parsed.documents === 'object' ? parsed : null;
	}
	catch {
		return null;
	}
}

export async function writeUserVectorCache(key: string, value: UserVectorCache): Promise<void> {
	const cache = await caches.open(VECTOR_CACHE_NAME);
	await cache.put(cacheRequest(key), new Response(JSON.stringify(value), {
		headers: { 'content-type': 'application/json' },
	}));
}
