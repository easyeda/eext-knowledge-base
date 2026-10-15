import { PREBUILT_VECTOR_MODEL_NAME } from './prebuilt-vector-info';

export interface EmbeddingAPIConfig {
	apiKey: string;
	baseURL: string;
	model: string;
}

export interface ProviderConfig {
	chatUseAPI?: boolean;
	embeddingUseAPI?: boolean;
	embeddingApiKey?: string;
	embeddingBaseURL?: string;
	embeddingApiModel?: string;
	localImportedModelsEnabled?: boolean;
	textModelSource?: 'remote' | 'imported';
	embeddingModelSource?: 'remote' | 'imported';
	usePrebuiltVectors?: boolean;
}

export function normalizeProviders(config: ProviderConfig) {
	return {
		chatUseAPI: config.chatUseAPI !== false,
		embeddingUseAPI: config.embeddingUseAPI === true,
		textModelSource: config.chatUseAPI === undefined && !config.localImportedModelsEnabled ? 'remote' as const : config.textModelSource || 'remote',
		embeddingModelSource: config.embeddingUseAPI === undefined && !config.localImportedModelsEnabled ? 'remote' as const : config.embeddingModelSource || 'remote',
	};
}

export function canUsePrebuiltVectors(config: ProviderConfig, modelName: string): boolean {
	return !config.embeddingUseAPI && config.embeddingModelSource !== 'imported'
		&& config.usePrebuiltVectors !== false && modelName === PREBUILT_VECTOR_MODEL_NAME;
}

export function apiVectorCacheKey(config: EmbeddingAPIConfig): string {
	return `api-${JSON.stringify([config.baseURL.trim().replace(/\/+$/, ''), config.model.trim()])}`;
}
