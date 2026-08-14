import type { FeatureExtractionPipeline, TextGenerationPipeline } from '@huggingface/transformers';
import type { ImportedModel, ImportedModelKind } from './model-store';
import { env, pipeline } from '@huggingface/transformers';
import { commitImportedModel, createImportedModelCache, deleteImportedModel, formatBytes, listImportedModels, stageImportedModel, updateImportedModel } from './model-store';
import { PREBUILT_VECTOR_DTYPE, PREBUILT_VECTOR_MODEL_NAME } from './prebuilt-vector-info';
import { deleteVectorCache, importedVectorCacheKey } from './vector-cache';

/* eslint-disable no-template-curly-in-string -- EasyEDA i18n placeholders use ${1}, ${2}. */

declare const eda: any;

const CONFIG_KEY = 'ai_assistant_config';

interface AssistantConfig {
	[key: string]: unknown;
	textModelSource?: 'remote' | 'imported';
	textModelId?: string;
	embeddingModelSource?: 'remote' | 'imported';
	embeddingModelId?: string;
	embeddingVectorRebuildToken?: string;
	localImportedModelsEnabled?: boolean;
	usePrebuiltVectors?: boolean;
}

function readConfig(): AssistantConfig {
	try {
		return JSON.parse(localStorage.getItem(CONFIG_KEY) || '{}');
	}
	catch {
		return {};
	}
}

function writeConfig(config: AssistantConfig): void {
	localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
	window.dispatchEvent(new CustomEvent('ai-assistant-config-updated'));
}

function t(tag: string, ...args: string[]): string {
	try {
		if (typeof eda !== 'undefined' && eda.sys_I18n?.text) {
			return eda.sys_I18n.text(tag, undefined, undefined, ...args);
		}
	}
	catch {
		// Fall back to the tag text outside EasyEDA.
	}
	return args.reduce((text, arg, index) => text.replaceAll(`\${${index + 1}}`, arg), tag);
}

function setStatus(message: string, error = false): void {
	const status = document.getElementById('model-status')!;
	status.textContent = message;
	status.classList.toggle('error', error);
}

function showToast(message: string, type: number | string = 0): void {
	try {
		if (typeof eda !== 'undefined' && eda.sys_Message?.showToastMessage) {
			eda.sys_Message.showToastMessage(message, type, 3);
		}
	}
	catch {
		// Allows the settings iframe to be previewed outside EasyEDA.
	}
}

async function confirmAction(message: string, title: string, okText: string, cancelText: string): Promise<boolean> {
	try {
		if (typeof eda !== 'undefined' && eda.sys_Dialog?.showConfirmationMessage) {
			return await new Promise<boolean>((resolve) => {
				let settled = false;
				const done = (value: unknown) => {
					if (!settled) {
						settled = true;
						resolve(!!value);
					}
				};
				try {
					const maybeResult = eda.sys_Dialog.showConfirmationMessage(message, title, okText, cancelText, done);
					if (maybeResult && typeof maybeResult.then === 'function') {
						maybeResult.then(done).catch(() => done(false));
					}
					else if (typeof maybeResult === 'boolean') {
						done(maybeResult);
					}
				}
				catch {
					done(false);
				}
			});
		}
	}
	catch {
		// Fall through to browser confirm when EasyEDA dialog is unavailable.
	}
	// eslint-disable-next-line no-alert -- Browser fallback for previewing the settings page outside EasyEDA.
	return window.confirm(message);
}

function selectedFiles(): File[] {
	const input = document.getElementById('model-folder') as HTMLInputElement;
	return Array.from(input.files || []);
}

async function validateModel(model: ImportedModel): Promise<void> {
	env.allowLocalModels = true;
	env.allowRemoteModels = false;
	env.useBrowserCache = false;
	env.useCustomCache = true;
	env.customCache = createImportedModelCache(model) as Cache;
	const modelPath = `imported/${model.id}`;
	const dtype = model.selectedDtype || 'auto';
	setStatus(t('Validating model by loading it offline...'));
	if (model.kind === 'text-generation') {
		const instance = await pipeline('text-generation', modelPath, { dtype, local_files_only: true }) as TextGenerationPipeline;
		await instance.dispose();
	}
	else {
		const instance = await pipeline('feature-extraction', modelPath, { dtype, local_files_only: true }) as FeatureExtractionPipeline;
		await instance(['model check'], { pooling: 'mean', normalize: true, truncation: true } as any);
		await instance.dispose();
	}
}

function sourceLabel(kind: ImportedModelKind): string {
	return kind === 'text-generation' ? t('Chat') : t('Embedding');
}

function renderModels(): void {
	const container = document.getElementById('model-list')!;
	const models = listImportedModels().sort((a, b) => b.importedAt - a.importedAt);
	const config = readConfig();
	container.replaceChildren();
	if (models.length === 0) {
		container.textContent = t('No imported models.');
		container.className = 'model-list empty';
		return;
	}
	container.className = 'model-list';
	for (const model of models) {
		const selected = model.kind === 'text-generation'
			? config.textModelSource === 'imported' && config.textModelId === model.id
			: config.embeddingModelSource === 'imported' && config.embeddingModelId === model.id;
		const active = !!config.localImportedModelsEnabled && selected;
		const row = document.createElement('div');
		row.className = 'model-row';
		const info = document.createElement('div');
		info.className = 'model-info';
		const name = document.createElement('strong');
		name.textContent = model.name;
		const meta = document.createElement('span');
		meta.textContent = `${sourceLabel(model.kind)} | ${formatBytes(model.size)} | ${t('${1} files', String(model.fileCount))}${active ? ` | ${t('Active')}` : selected ? ` | ${t('Selected')}` : ''}`;
		info.append(name, meta);
		const actions = document.createElement('div');
		const dtypeSelect = document.createElement('select');
		dtypeSelect.className = 'model-dtype';
		for (const option of model.onnxFiles || []) {
			const opt = document.createElement('option');
			opt.value = option.dtype;
			opt.textContent = option.label;
			opt.selected = option.dtype === model.selectedDtype;
			dtypeSelect.append(opt);
		}
		dtypeSelect.disabled = !model.onnxFiles || model.onnxFiles.length <= 1;
		dtypeSelect.addEventListener('change', () => {
			const selected = model.onnxFiles?.find(file => file.dtype === dtypeSelect.value);
			model.selectedDtype = dtypeSelect.value;
			model.selectedOnnxFile = selected?.path;
			updateImportedModel(model);
			const latestConfig = readConfig();
			if (model.kind === 'feature-extraction' && latestConfig.localImportedModelsEnabled && latestConfig.usePrebuiltVectors === false && latestConfig.embeddingModelSource === 'imported' && latestConfig.embeddingModelId === model.id) {
				latestConfig.embeddingVectorRebuildToken = String(Date.now());
			}
			writeConfig(latestConfig);
			setStatus(t('${1} precision set to ${2}. Reopen the assistant to apply.', model.name, dtypeSelect.value));
			renderModels();
		});
		const useButton = document.createElement('button');
		useButton.type = 'button';
		useButton.className = 'btn btn-small';
		useButton.textContent = active ? t('Active') : t('Use');
		useButton.disabled = active;
		useButton.addEventListener('click', () => activateModel(model));
		const deleteButton = document.createElement('button');
		deleteButton.type = 'button';
		deleteButton.className = 'btn btn-small btn-danger';
		deleteButton.textContent = t('Delete');
		deleteButton.addEventListener('click', () => removeModel(model));
		actions.append(dtypeSelect, useButton, deleteButton);
		row.append(info, actions);
		container.append(row);
	}
}

function renderPrebuiltVectorInfo(): void {
	const el = document.getElementById('prebuilt-vector-info');
	if (el) {
		el.textContent = t('Prebuilt Vector Build Info', PREBUILT_VECTOR_MODEL_NAME, PREBUILT_VECTOR_DTYPE);
	}
}

function activateModel(model: ImportedModel): void {
	const config = readConfig();
	if (model.kind === 'text-generation') {
		config.textModelSource = 'imported';
		config.textModelId = model.id;
	}
	else {
		config.embeddingModelSource = 'imported';
		config.embeddingModelId = model.id;
		config.embeddingIndexVersion = model.id;
		if (config.localImportedModelsEnabled && config.usePrebuiltVectors === false) {
			config.embeddingVectorRebuildToken = String(Date.now());
		}
	}
	writeConfig(config);
	if (!config.localImportedModelsEnabled) {
		setStatus(t('Imported model selected. Enable local imported models to use it.'));
	}
	else if (model.kind === 'feature-extraction' && config.usePrebuiltVectors !== false) {
		setStatus(t('Embedding model selected. Prebuilt vectors stay enabled; this model will embed queries and imported docs.'));
	}
	else {
		setStatus(t('${1} selected. Reopen the assistant to apply the change.', model.name));
	}
	renderModels();
}

async function requestVectorRebuild(): Promise<void> {
	const config = readConfig();
	if (config.usePrebuiltVectors !== false) {
		setStatus(t('Prebuilt vectors are enabled. Built-in vectors are reused; the active Embedding model still handles queries and imported docs.'));
		return;
	}
	if (!config.localImportedModelsEnabled) {
		setStatus(t('Enable local imported models before rebuilding imported vectors.'), true);
		return;
	}
	if (config.embeddingModelSource !== 'imported' || !config.embeddingModelId) {
		setStatus(t('Select an imported Embedding model before rebuilding vectors.'), true);
		return;
	}
	const model = listImportedModels().find(item => item.id === config.embeddingModelId);
	if (!model) {
		setStatus(t('The active imported Embedding model was not found.'), true);
		return;
	}
	const confirmMessage = t('Rebuild vectors for "${1}" (${2}) on next assistant open?', model.name, model.selectedDtype || 'auto');
	setStatus(t('Waiting for vector rebuild confirmation...'));
	const confirmed = await confirmAction(confirmMessage, t('Rebuild vectors'), t('Rebuild'), t('Cancel'));
	if (!confirmed) {
		setStatus(t('Vector rebuild canceled.'));
		return;
	}
	config.embeddingVectorRebuildToken = String(Date.now());
	writeConfig(config);
	setStatus(t('Vector rebuild requested for ${1}. Reopen the assistant to rebuild with progress.', model.name));
	showToast(t('Vector rebuild requested'), 0);
}

async function removeModel(model: ImportedModel): Promise<void> {
	try {
		setStatus(t('Waiting for delete confirmation for ${1}...', model.name));
		const confirmed = await confirmAction(t('Delete imported model "${1}"?', model.name), t('Delete imported model'), t('Delete'), t('Cancel'));
		if (!confirmed) {
			setStatus(t('Delete canceled.'));
			return;
		}
		const config = readConfig();
		if (config.textModelId === model.id) {
			config.textModelSource = 'remote';
			delete config.textModelId;
		}
		if (config.embeddingModelId === model.id) {
			config.embeddingModelSource = 'remote';
			delete config.embeddingModelId;
			delete config.embeddingIndexVersion;
			delete config.embeddingVectorRebuildToken;
		}
		writeConfig(config);
		for (const option of model.onnxFiles || []) {
			await deleteVectorCache(importedVectorCacheKey(model.id, option.dtype));
		}
		await deleteVectorCache(importedVectorCacheKey(model.id, model.selectedDtype));
		await deleteImportedModel(model.id);
		setStatus(t('${1} deleted.', model.name));
		showToast(t('Model deleted'), 0);
		renderModels();
	}
	catch (error) {
		setStatus(error instanceof Error ? error.message : String(error), true);
	}
}

async function importSelectedModel(): Promise<void> {
	const input = document.getElementById('model-folder') as HTMLInputElement;
	const kind = (document.getElementById('model-kind') as HTMLSelectElement).value as ImportedModelKind;
	const files = selectedFiles();
	if (files.length === 0) {
		setStatus(t('Select a model folder first.'), true);
		return;
	}
	const button = document.getElementById('import-model-btn') as HTMLButtonElement;
	button.disabled = true;
	let staged: ImportedModel | undefined;
	try {
		setStatus(t('Preparing to import ${1} files...', String(files.length)));
		staged = await stageImportedModel(files, kind, (written, total, path) => {
			setStatus(t('Importing ${1}: ${2}%', path, String(Math.round((written / total) * 100))));
		});
		await validateModel(staged);
		commitImportedModel(staged);
		input.value = '';
		setStatus(t('${1} imported and validated.', staged.name));
		showToast(t('Model imported successfully'), 0);
		renderModels();
	}
	catch (error) {
		if (staged) {
			await deleteImportedModel(staged.id);
		}
		setStatus(error instanceof Error ? error.message : String(error), true);
	}
	finally {
		button.disabled = false;
	}
}

document.getElementById('import-model-btn')?.addEventListener('click', importSelectedModel);
document.getElementById('rebuild-vectors-btn')?.addEventListener('click', () => {
	void requestVectorRebuild();
});
document.getElementById('model-folder')?.addEventListener('change', () => {
	const files = selectedFiles();
	if (files.length === 0) {
		setStatus(t('No folder selected.'), true);
		return;
	}
	const firstPath = files[0].webkitRelativePath || files[0].name;
	setStatus(t('Selected ${1} files from ${2}. Click Import folder to continue.', String(files.length), firstPath.split('/')[0]));
});
renderModels();
renderPrebuiltVectorInfo();
setStatus(t('Local model importer ready. Select a model folder to import.'));
