import type { DataType, FeatureExtractionPipeline, TextGenerationPipeline } from '@huggingface/transformers';
import type { ExecutionDevice } from './inference-device';
import type { ImportedModel } from './model-store';
import { env, pipeline, TextStreamer } from '@huggingface/transformers';
import { selectDevice } from './inference-device';
import { fitLocalPrompt, LOCAL_OUTPUT_TOKENS, localInputTokens } from './local-prompt';
import { createImportedModelCache } from './model-store';
import { setupOrtRuntime } from './ort-runtime';
import { remoteModelDtype } from './remote-models';

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
				dtype: (imported ? imported.selectedDtype || 'auto' : remoteModelDtype(modelName, payload.dtype, backend)) as DataType,
				local_files_only: !!imported,
				progress_callback: (progress: any) => {
					if (progress.status === 'progress' && progress.total > 0) {
						post('progress', { message: `Loading model file ${progress.file}: ${Math.round(progress.loaded / progress.total * 100)}%` });
					}
				},
			};
			if (payload.kind === 'feature-extraction') {
				extractor = await pipeline('feature-extraction', modelName, options);
				post('progress', { message: '向量模型文件已加载，正在预热计算会话…' });
				await extractor(['ready'], { pooling: 'mean', normalize: true, truncation: true } as any);
			}
			else {
				generator = await pipeline('text-generation', modelName, options) as TextGenerationPipeline;
				post('progress', { message: '对话模型文件已加载，正在预热计算会话…' });
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
			const tokenizer = generator.tokenizer;
			const countTokens = (messages: Array<{ role: string; content: string }>) => tokenizer.encode(tokenizer.apply_chat_template(messages, { tokenize: false, add_generation_prompt: true }) as string, { add_special_tokens: false }).length;
			const configuredLimit = localInputTokens(payload.localMaxInputTokens);
			const modelContext = Number(generator.model.config.max_position_embeddings);
			const effectiveLimit = Number.isSafeInteger(modelContext) && modelContext > LOCAL_OUTPUT_TOKENS
				? Math.min(configuredLimit, modelContext - LOCAL_OUTPUT_TOKENS)
				: configuredLimit;
			const messages = fitLocalPrompt(payload.messages, countTokens, effectiveLimit);
			if (JSON.stringify(messages) !== JSON.stringify(payload.messages))
				post('progress', { message: '已缩减历史和检索上下文，以限制本地推理内存占用。' });
			post('progress', { message: `正在预填充提示词：${countTokens(messages)} tokens，${backend === 'webgpu' ? 'GPU' : 'CPU'}。首次输出前需要等待。` });
			let generatedTokens = 0;
			const streamer = new TextStreamer(generator.tokenizer, {
				skip_prompt: true,
				token_callback_function: () => {
					generatedTokens++;
					post('progress', { message: `正在生成回答：${generatedTokens} tokens` });
				},
				callback_function: (text: string) => post('token', { text }),
			});
			await generator(messages, { max_new_tokens: LOCAL_OUTPUT_TOKENS, do_sample: false, streamer });
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
