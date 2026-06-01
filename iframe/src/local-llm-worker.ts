import type { TextGenerationPipeline } from '@huggingface/transformers';
import { env, pipeline, TextStreamer } from '@huggingface/transformers';

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
			const modelName = payload.modelName || DEFAULT_MODEL_NAME;
			const dtype = payload.dtype || 'q8';

			env.allowLocalModels = false;
			env.allowRemoteModels = true;
			env.remoteHost = payload.modelMirror || 'https://hf-mirror.com';
			env.remotePathTemplate = '{model}/resolve/{revision}/';

			globalThis.postMessage({ type: 'progress', message: '正在加载本地 AI 模型...' });

			generator = await pipeline('text-generation', modelName, {
				dtype: dtype as any,
				progress_callback: (p: any) => {
					if (p.status === 'ready') {
						globalThis.postMessage({ type: 'progress', message: '本地 AI 模型加载完成' });
					}
					else if (p.status === 'initiate') {
						globalThis.postMessage({ type: 'progress', message: `正在初始化: ${p.file || '...'}` });
					}
					else if (p.status === 'progress') {
						const loaded = p.loaded || 0;
						const total = p.total || 0;
						const file = (p.file || '').replace(/^onnx-community\//, '');
						if (total > 0) {
							const percent = Math.round((loaded / total) * 100);
							globalThis.postMessage({ type: 'progress', message: `下载 ${file}: ${percent}%` });
						}
					}
				},
			}) as TextGenerationPipeline;

			globalThis.postMessage({ type: 'progress', message: '本地 AI 模型就绪' });
			globalThis.postMessage({ type: 'init_done' });
		}
		catch (err: any) {
			globalThis.postMessage({ type: 'error', message: err.message || String(err) });
		}
	}
	else if (type === 'generate') {
		if (!generator) {
			globalThis.postMessage({ type: 'error', message: '模型未加载' });
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
