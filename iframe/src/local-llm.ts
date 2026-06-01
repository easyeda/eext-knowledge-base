// @ts-expect-error esbuild text loader
import workerCode from '../../iframe/local-llm-worker.bundle.txt';

export interface LocalLLMOptions {
	onProgress?: (info: string) => void;
	modelMirror?: string;
	modelName?: string;
	dtype?: string;
}

export class LocalLLM {
	private worker: Worker | null = null;
	private onProgress: ((info: string) => void) | null = null;
	private modelMirror: string;
	private modelName: string;
	private dtype: string;
	private initPromise: Promise<void> | null = null;

	constructor(opts?: LocalLLMOptions) {
		this.onProgress = opts?.onProgress ?? null;
		this.modelMirror = opts?.modelMirror || 'https://hf-mirror.com';
		this.modelName = opts?.modelName || 'onnx-community/Qwen2.5-0.5B-Instruct';
		this.dtype = opts?.dtype || 'q8';
	}

	get isLoaded(): boolean {
		return this.worker !== null && this.initPromise === null;
	}

	private ensureWorker(): Promise<void> {
		if (this.initPromise) {
			return this.initPromise;
		}

		this.initPromise = new Promise<void>((resolve, reject) => {
			const blob = new Blob([workerCode], { type: 'application/javascript' });
			const url = URL.createObjectURL(blob);
			this.worker = new Worker(url, { type: 'module' });

			this.worker.onmessage = (e: MessageEvent) => {
				const { type, message } = e.data;
				if (type === 'progress' && this.onProgress) {
					this.onProgress(message);
				}
				else if (type === 'init_done') {
					resolve();
				}
				else if (type === 'error') {
					reject(new Error(message));
				}
			};

			this.worker.postMessage({
				type: 'init',
				payload: { modelMirror: this.modelMirror, modelName: this.modelName, dtype: this.dtype },
			});
		});

		return this.initPromise;
	}

	async generate(
		messages: Array<{ role: string; content: string }>,
		onToken?: (token: string) => void,
	): Promise<string> {
		await this.ensureWorker();

		return new Promise<string>((resolve, reject) => {
			let fullText = '';

			this.worker!.onmessage = (e: MessageEvent) => {
				const { type, text, message } = e.data;
				if (type === 'token') {
					fullText += text;
					if (onToken) {
						onToken(text);
					}
				}
				else if (type === 'generate_done') {
					resolve(fullText);
				}
				else if (type === 'error') {
					reject(new Error(message));
				}
				else if (type === 'progress' && this.onProgress) {
					this.onProgress(message);
				}
			};

			this.worker!.postMessage({
				type: 'generate',
				payload: { messages },
			});
		});
	}

	abort(): void {
		if (this.worker) {
			this.worker.postMessage({ type: 'abort' });
		}
	}

	dispose(): void {
		if (this.worker) {
			this.worker.terminate();
			this.worker = null;
		}
		this.initPromise = null;
	}
}
