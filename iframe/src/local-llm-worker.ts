import type { TextGenerationPipeline } from '@huggingface/transformers';
import type { ImportedModel } from './model-store';
import { env, pipeline, TextStreamer } from '@huggingface/transformers';
import { createImportedModelCache } from './model-store';

const DEFAULT_MODEL_NAME = 'onnx-community/Qwen2.5-0.5B-Instruct';

// 尝试启用多线程
const numCores = navigator.hardwareConcurrency || 4;
(env as any).backends ??= {};
(env as any).backends.onnx ??= {};
(env as any).backends.onnx.wasm ??= {};
(env as any).backends.onnx.wasm.numThreads = numCores;

let generator: TextGenerationPipeline | null = null;
let aborted = false;

globalThis.onmessage = async (e: MessageEvent) => {
	const { type, payload } = e.data;

	if (type === 'abort') {
		aborted = true;
		return;
	}

	if (type === 'init') {
		try {
			const importedModel = payload.importedModel as ImportedModel | undefined;
			const modelName = importedModel ? `imported/${importedModel.id}` : payload.modelName || DEFAULT_MODEL_NAME;
			const dtype = importedModel ? importedModel.selectedDtype || 'auto' : payload.dtype || 'q8';

			if (importedModel) {
				env.allowLocalModels = true;
				env.allowRemoteModels = false;
				env.useBrowserCache = false;
				env.useCustomCache = true;
				env.customCache = createImportedModelCache(importedModel) as Cache;
			}
			else {
				env.allowLocalModels = false;
				env.allowRemoteModels = true;
				env.useBrowserCache = true;
				env.useCustomCache = false;
				env.customCache = null;
				env.remoteHost = payload.modelMirror || 'https://hf-mirror.com';
				env.remotePathTemplate = '{model}/resolve/{revision}/';
			}

			globalThis.postMessage({ type: 'progress', message: 'Loading local AI model...' });

			generator = await pipeline('text-generation', modelName, {
				dtype: dtype as any,
				local_files_only: !!importedModel,
				progress_callback: (p: any) => {
					if (p.status === 'ready') {
						globalThis.postMessage({ type: 'progress', message: 'Local AI model loaded' });
					}
					else if (p.status === 'initiate') {
						globalThis.postMessage({ type: 'progress', message: `Initializing: ${p.file || '...'}` });
					}
					else if (p.status === 'progress') {
						const loaded = p.loaded || 0;
						const total = p.total || 0;
						const file = (p.file || '').replace(/^onnx-community\//, '');
						if (total > 0) {
							const percent = Math.round((loaded / total) * 100);
							globalThis.postMessage({ type: 'progress', message: `Downloading ${file}: ${percent}%` });
						}
					}
				},
			}) as TextGenerationPipeline;

			globalThis.postMessage({ type: 'progress', message: 'Local AI model ready' });
			globalThis.postMessage({ type: 'init_done' });
		}
		catch (err: any) {
			globalThis.postMessage({ type: 'error', message: err.message || String(err) });
		}
	}
	else if (type === 'generate') {
		if (!generator) {
			globalThis.postMessage({ type: 'error', message: 'Model not loaded' });
			return;
		}

		aborted = false;

		try {
			const streamer = new TextStreamer(generator.tokenizer, {
				skip_prompt: true,
				callback_function: (text: string) => {
					if (aborted)
						return false;
					globalThis.postMessage({ type: 'token', text });
				},
			});

			await generator(payload.messages as any, {
				max_new_tokens: 2048,
				temperature: 0.7,
				do_sample: true,
				streamer,
			});

			if (aborted) {
				globalThis.postMessage({ type: 'generate_done' });
			}
			else {
				globalThis.postMessage({ type: 'generate_done' });
			}
		}
		catch (err: any) {
			if (!aborted) {
				globalThis.postMessage({ type: 'error', message: err.message || String(err) });
			}
			else {
				globalThis.postMessage({ type: 'generate_done' });
			}
		}
	}
};
