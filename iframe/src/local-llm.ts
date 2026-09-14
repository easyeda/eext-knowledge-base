import type { InferenceOptions } from './inference-client';
import { InferenceClient } from './inference-client';

export type LocalLLMOptions = Omit<InferenceOptions, 'kind'>;

export class LocalLLM {
	private client: InferenceClient;
	constructor(options: LocalLLMOptions = {}) {
		this.client = new InferenceClient({
			...options,
			kind: 'text-generation',
			modelName: options.modelName || 'onnx-community/Qwen2.5-0.5B-Instruct',
			dtype: options.dtype || 'q8',
			onProgress: message => options.onProgress?.(eda.sys_I18n.text(message)),
		});
	}

	get isLoaded(): boolean { return this.client.isLoaded; }
	async generate(messages: Array<{ role: string; content: string }>, onToken?: (text: string) => void): Promise<string> {
		let text = '';
		await this.client.run('generate', { messages }, (token) => {
			text += token;
			onToken?.(token);
		});
		return text;
	}

	abort(): void { this.client.dispose(); }
	dispose(): void { this.client.dispose(); }
}
