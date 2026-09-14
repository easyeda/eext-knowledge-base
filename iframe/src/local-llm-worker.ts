import type { DataType, FeatureExtractionPipeline, TextGenerationPipeline } from '@huggingface/transformers';
import type { ExecutionDevice } from './inference-device';
import type { ImportedModel } from './model-store';
import { env, pipeline, TextStreamer } from '@huggingface/transformers';
import { selectDevice } from './inference-device';
import { createImportedModelCache } from './model-store';
import { setupOrtRuntime } from './ort-runtime';

let generator: TextGenerationPipeline | undefined;
let extractor: FeatureExtractionPipeline | undefined;
let backend: ExecutionDevice | undefined;
const fetchResource = globalThis.fetch.bind(globalThis);
const fetchRemoteModel: typeof env.fetch = async (input, init) => {
	try {
		return await fetchResource(input, init);
	}
	catch (cause) {
		const url = new URL(String(input));
		url.username = '';
		url.password = '';
		url.search = '';
		url.hash = '';
		const error = new Error(`Model download failed: ${url.href}. Check the mirror/network, or select another model mirror in Settings and reopen the assistant. (${(cause as Error).message})`);
		error.name = 'ModelDownloadError';
		throw error;
	}
};

globalThis.onmessage = async (event: MessageEvent) => {
	const { id, type, payload = {} } = event.data;
	const post = (type: string, data: Record<string, unknown> = {}) => globalThis.postMessage({ id, type, backend, ...data });
	try {
		if (type === 'init') {
			backend = await selectDevice(payload.device);
			post('progress', { message: backend === 'webgpu' ? 'Using GPU (WebGPU)' : 'Using CPU (WASM)' });
			setupOrtRuntime();
			const imported = payload.importedModel as ImportedModel | undefined;
			env.allowLocalModels = !!imported;
			env.allowRemoteModels = !imported;
			env.useBrowserCache = !imported;
			env.useCustomCache = !!imported;
			if (imported) {
				const cache = createImportedModelCache(imported);
				await cache.prepare();
				env.customCache = cache as unknown as Cache;
				// Local fallback requests must also resolve from Cache Storage, never the network.
				env.fetch = async input => await cache.match(input) || new Response(null, { status: 404 });
			}
			else {
				env.customCache = null;
				env.fetch = fetchRemoteModel;
			}
			env.remoteHost = (payload.modelMirror || 'https://huggingface.co').trim().replace(/\/+$/, '');
			env.remotePathTemplate = '{model}/resolve/{revision}/';
			const modelName = imported ? `imported/${imported.id}` : payload.modelName;
			const options = {
				device: backend,
				dtype: (imported ? imported.selectedDtype || 'auto' : payload.dtype || 'q8') as DataType,
				local_files_only: !!imported,
				session_options: { executionProviders: backend === 'webgpu' ? ['webgpu', 'wasm'] : ['wasm'] },
				progress_callback: (progress: any) => {
					if (progress.status === 'progress' && progress.total > 0) {
						post('progress', { message: `Downloading ${progress.file}: ${Math.round(progress.loaded / progress.total * 100)}%` });
					}
				},
			};
			if (payload.kind === 'feature-extraction') {
				extractor = await pipeline('feature-extraction', modelName, options);
				await extractor(['ready'], { pooling: 'mean', normalize: true, truncation: true } as any);
			}
			else {
				generator = await pipeline('text-generation', modelName, options) as TextGenerationPipeline;
				await generator('Hello', { max_new_tokens: 1, do_sample: false });
			}
			post('done');
		}
		else if (type === 'embed') {
			if (!extractor)
				throw new Error('Embedding model is not initialized');
			const output = await extractor(payload.documents, { pooling: 'mean', normalize: true, truncation: true } as any);
			const vectors = payload.documents.map((_: string, index: number) => Array.from((output as any)[index].data));
			post('done', { vectors });
		}
		else if (type === 'generate') {
			if (!generator)
				throw new Error('Chat model is not initialized');
			const streamer = new TextStreamer(generator.tokenizer, {
				skip_prompt: true,
				callback_function: (text: string) => post('token', { text }),
			});
			await generator(payload.messages, { max_new_tokens: 2048, temperature: 0.7, do_sample: true, streamer });
			post('done');
		}
		else {
			throw new Error('Unknown inference request');
		}
	}
	catch (error) {
		post('error', { message: (error as Error).message || String(error), name: (error as Error).name });
	}
};
