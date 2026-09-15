import type { ExecutionDevice } from './inference-device';

export const DEFAULT_CHAT_MODEL = 'JasonYANG170/Qwen2.5-0.5B-Instruct-ONNX';
export const DEFAULT_EMBEDDING_MODEL = 'JasonYANG170/bge-large-zh-v1.5-ONNX';

export function chatModelName(name?: string): string {
	return !name || name === 'onnx-community/Qwen2.5-0.5B-Instruct' ? DEFAULT_CHAT_MODEL : name;
}

export function embeddingModelName(name?: string): string {
	return !name || name === 'Xenova/bge-large-zh-v1.5' ? DEFAULT_EMBEDDING_MODEL : name;
}

export function remoteModelDtype(name: string, dtype: string | undefined, backend: ExecutionDevice): string {
	if (name === DEFAULT_CHAT_MODEL || name === 'JasonYANG170/bge-base-zh-v1.5-ONNX') {
		// These repositories contain FP16/FP32 only. Re-evaluate after CPU fallback.
		return dtype === 'fp32' || dtype === 'fp16' ? dtype : backend === 'webgpu' ? 'fp16' : 'fp32';
	}
	return dtype || 'q8';
}
