import type { ExecutionDevice, InferenceDevice } from './inference-device';
import type { ImportedModel, ImportedModelKind } from './model-store';
// @ts-expect-error esbuild text loader
import workerCode from '../local-llm-worker.bundle.txt';
import { normalizeDevice } from './inference-device';

export interface InferenceOptions {
	device?: InferenceDevice;
	kind: ImportedModelKind;
	modelName?: string;
	modelMirror?: string;
	dtype?: string;
	importedModel?: ImportedModel;
	onProgress?: (message: string) => void;
}

export class InferenceClient {
	private worker: Worker | undefined;
	private backend: ExecutionDevice | undefined;
	private initialized = false;
	private cpuFallback = false;
	private sequence = 0;
	private epoch = 0;
	private pendingReject: ((error: Error) => void) | undefined;
	private queue: Promise<unknown> = Promise.resolve();

	constructor(private options: InferenceOptions) {}

	get isLoaded(): boolean { return this.initialized; }

	private destroy(): void {
		this.worker?.terminate();
		this.worker = undefined;
		this.initialized = false;
		this.backend = undefined;
	}

	dispose(): void {
		this.epoch++;
		this.pendingReject?.(new DOMException('Inference canceled', 'AbortError'));
		this.destroy();
	}

	private makeWorker(): Worker {
		const url = URL.createObjectURL(new Blob([workerCode], { type: 'text/javascript' }));
		try {
			return new Worker(url, { type: 'module', name: 'easyeda-knowledge-onnx' });
		}
		finally { URL.revokeObjectURL(url); }
	}

	private request(type: string, payload: Record<string, unknown>, onToken?: (text: string) => void): Promise<any> {
		const worker = this.worker!;
		const id = ++this.sequence;
		return new Promise((resolve, reject) => {
			const cleanup = () => {
				// eslint-disable-next-line ts/no-use-before-define -- Handlers are installed before cleanup can run.
				worker.removeEventListener('message', message);
				// eslint-disable-next-line ts/no-use-before-define -- Handlers are installed before cleanup can run.
				worker.removeEventListener('error', error);
				// eslint-disable-next-line ts/no-use-before-define -- Handlers are installed before cleanup can run.
				worker.removeEventListener('messageerror', messageError);
				this.pendingReject = undefined;
			};
			const fail = (value: Error) => {
				cleanup();
				reject(value);
			};
			const message = (event: MessageEvent) => {
				const data = event.data;
				if (data.id !== id)
					return;
				if (data.backend)
					this.backend = data.backend;
				if (data.type === 'progress') {
					this.options.onProgress?.(data.message);
				}
				else if (data.type === 'token') {
					onToken?.(data.text);
				}
				else if (data.type === 'error') {
					fail(Object.assign(new Error(data.message), { name: data.name || 'Error' }));
				}
				else if (data.type === 'done') {
					cleanup();
					resolve(data);
				}
			};
			const error = (event: ErrorEvent) => fail(new Error(event.message || 'Inference Worker failed'));
			const messageError = () => fail(new Error('Inference Worker message could not be decoded'));
			this.pendingReject = fail;
			worker.addEventListener('message', message);
			worker.addEventListener('error', error);
			worker.addEventListener('messageerror', messageError);
			try {
				worker.postMessage({ id, type, payload });
			}
			catch (error) {
				fail(error as Error);
			}
		});
	}

	/** Serialize requests; only auto mode retries, always in a fresh Worker. */
	run(type?: 'generate' | 'embed', payload: Record<string, unknown> = {}, onToken?: (text: string) => void): Promise<any> {
		const epoch = this.epoch;
		const task = async () => {
			if (epoch !== this.epoch)
				throw new DOMException('Inference canceled', 'AbortError');
			let streamed = false;
			const attempt = async () => {
				if (epoch !== this.epoch)
					throw new DOMException('Inference canceled', 'AbortError');
				if (!this.worker)
					this.worker = this.makeWorker();
				if (!this.initialized) {
					const { onProgress: _onProgress, ...options } = this.options;
					await this.request('init', { ...options, device: this.cpuFallback ? 'cpu' : options.device });
					if (epoch !== this.epoch)
						throw new DOMException('Inference canceled', 'AbortError');
					this.initialized = true;
					this.options.onProgress?.(this.backend === 'webgpu' ? 'Using GPU (WebGPU)' : 'Using CPU (WASM)');
				}
				return type
					? this.request(type, payload, (text) => {
							if (text)
								streamed = true;
							onToken?.(text);
						})
					: undefined;
			};
			try {
				return await attempt();
			}
			catch (error) {
				const retry = normalizeDevice(this.options.device) === 'auto' && !this.cpuFallback
					&& this.backend !== 'wasm' && !streamed && epoch === this.epoch
					&& !['AbortError', 'ModelDownloadError', 'ModelCacheError'].includes((error as Error).name);
				this.destroy();
				if (!retry)
					throw error;
				this.cpuFallback = true;
				this.options.onProgress?.('GPU failed. Restarting inference on CPU.');
				try {
					return await attempt();
				}
				catch (cpuError) {
					this.destroy();
					throw cpuError;
				}
			}
		};
		const result = this.queue.then(task);
		this.queue = result.catch(() => {});
		return result;
	}
}
