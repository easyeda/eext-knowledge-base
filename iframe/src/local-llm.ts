import type { InferenceOptions } from './inference-client';
import { InferenceClient } from './inference-client';
import { chatModelName } from './remote-models';

export type LocalLLMOptions = Omit<InferenceOptions, 'kind'>;

export class LocalLLM {
	private localMaxInputTokens?: number;
	private client: InferenceClient;
	private onProgress?: (message: string) => void;
	constructor(options: LocalLLMOptions = {}) {
		this.localMaxInputTokens = options.localMaxInputTokens;
		this.onProgress = options.onProgress;
		this.client = new InferenceClient({
			...options,
			kind: 'text-generation',
			modelName: chatModelName(options.modelName),
			dtype: options.dtype,
			onProgress: message => this.onProgress?.(eda.sys_I18n.text(message)),
		});
	}

	setProgressHandler(handler: (message: string) => void): void { this.onProgress = handler; }

	get isLoaded(): boolean { return this.client.isLoaded; }
	async generate(messages: Array<{ role: string; content: string }>, onToken?: (text: string) => void): Promise<string> {
		let text = '';
		await this.client.run('generate', { messages, localMaxInputTokens: this.localMaxInputTokens }, (token) => {
			text += token;
			onToken?.(token);
		});
		return text;
	}

	abort(): void { this.client.dispose(); }
	dispose(): void { this.client.dispose(); }
}
