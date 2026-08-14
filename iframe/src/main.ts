import type { RAGConfig } from './rag';
import { marked } from 'marked';
import { builtinVectors, PREBUILT_VECTOR_MODEL_NAME } from './builtin-docs';
import { LocalLLM } from './local-llm';
import { getImportedModel } from './model-store';
import { RAGEngine } from './rag';
import { deleteVectorCache, importedVectorCacheKey, readVectorCache, remoteVectorCacheKey, writeVectorCache } from './vector-cache';

declare const eda: any;

// ============================================================
// 閰嶇疆
// ============================================================
const STORAGE_KEY = 'ai_assistant_config';
const KB_STATE_KEY = 'ai_assistant_kb_state';

/** 鐭ヨ瘑搴撶姸鎬佹寔涔呭寲 */
interface KBState {
	/** 宸插垹闄ょ殑鍐呯疆鐭ヨ瘑搴?source keys */
	deletedSources: string[];
	/** 鐢ㄦ埛瀵煎叆鐨勬枃妗ｏ紙source key -> content锛? */
	userDocuments: Record<string, string>;
	/** 瀵煎叆璁℃暟鍣? */
	importCounter: number;
}

function loadKBState(): KBState {
	try {
		const raw = localStorage.getItem(KB_STATE_KEY);
		if (raw) {
			return JSON.parse(raw);
		}
	}
	catch { /* ignore */ }
	return { deletedSources: [], userDocuments: {}, importCounter: 1 };
}

function saveKBState(state: KBState): void {
	try {
		localStorage.setItem(KB_STATE_KEY, JSON.stringify(state));
	}
	catch { /* ignore */ }
}

let kbState = loadKBState();

function loadConfig(): RAGConfig & { embeddingModel?: string; localModel?: string; localDtype?: string; localImportedModelsEnabled?: boolean; usePrebuiltVectors?: boolean; textModelSource?: 'remote' | 'imported'; textModelId?: string; embeddingModelSource?: 'remote' | 'imported'; embeddingModelId?: string; embeddingVectorRebuildToken?: string } {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const obj = JSON.parse(raw);
			return {
				apiType: obj.apiType || 'openai',
				apiKey: obj.apiKey || '',
				model: obj.model || '',
				baseURL: obj.baseURL || '',
				modelMirror: obj.modelMirror || '',
				embeddingModel: obj.embeddingModel || '',
				localModel: obj.localModel || '',
				localDtype: obj.localDtype || '',
				localImportedModelsEnabled: !!obj.localImportedModelsEnabled,
				usePrebuiltVectors: obj.usePrebuiltVectors !== false,
				textModelSource: obj.textModelSource || 'remote',
				textModelId: obj.textModelId || '',
				embeddingModelSource: obj.embeddingModelSource || 'remote',
				embeddingModelId: obj.embeddingModelId || '',
				embeddingVectorRebuildToken: obj.embeddingVectorRebuildToken || '',
				enableThinking: !!obj.enableThinking,
				historyRounds: obj.historyRounds !== undefined ? obj.historyRounds : 3,
			};
		}
	}
	catch { /* ignore */ }
	return { apiType: 'openai', apiKey: '', model: '', baseURL: '', modelMirror: '', embeddingModel: '', localModel: '', localDtype: '', localImportedModelsEnabled: false, usePrebuiltVectors: true, textModelSource: 'remote', textModelId: '', embeddingModelSource: 'remote', embeddingModelId: '', embeddingVectorRebuildToken: '', enableThinking: false, historyRounds: 3 };
}

function saveConfig(config: ReturnType<typeof loadConfig>): void {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}

// ============================================================
// 鏍戝舰鏂囦欢澶规暟鎹粨鏋?
// ============================================================
interface DocNode {
	name: string;
	/** 瀹屾暣璺緞锛岀敤浜?source key 鍓嶇紑 */
	path: string;
	collapsed: boolean;
	children: DocNode[];
	files: string[];
}

const rootNodes: DocNode[] = [];
let importCounter = 1;

/** 鏍囪 source 涓哄凡鍒犻櫎 */
function markSourceDeleted(source: string): void {
	if (!kbState.deletedSources.includes(source)) {
		kbState.deletedSources.push(source);
		saveKBState(kbState);
	}
}

/** 淇濆瓨鐢ㄦ埛鏂囨。 */
function saveUserDocument(sourceKey: string, content: string): void {
	kbState.userDocuments[sourceKey] = content;
	saveKBState(kbState);
}

/** 鍒犻櫎鐢ㄦ埛鏂囨。 */
function removeUserDocument(sourceKey: string): void {
	delete kbState.userDocuments[sourceKey];
	saveKBState(kbState);
}

function getSourceKey(folderPath: string, file: string): string {
	return `${folderPath}/${file}`;
}

/** 閫掑綊缁熻鑺傜偣涓嬫墍鏈夋枃浠舵暟 */
function countFiles(node: DocNode): number {
	let count = node.files.length;
	for (const child of node.children) {
		count += countFiles(child);
	}
	return count;
}

/** 閫掑綊缁熻鎵€鏈夋牴鑺傜偣涓嬬殑鏂囦欢鎬绘暟 */
function countAllFiles(): number {
	let total = 0;
	for (const node of rootNodes) {
		total += countFiles(node);
	}
	return total;
}

/** 閫掑綊鏀堕泦鑺傜偣涓嬫墍鏈?source key */
function collectSourceKeys(node: DocNode): string[] {
	const keys: string[] = [];
	for (const file of node.files) {
		keys.push(getSourceKey(node.path, file));
	}
	for (const child of node.children) {
		keys.push(...collectSourceKeys(child));
	}
	return keys;
}

/** 鏍规嵁璺緞娈靛湪鏍戜腑鏌ユ壘鎴栧垱寤哄瓙鏂囦欢澶硅妭鐐? */
function ensureFolder(parent: DocNode[], parentPath: string, segments: string[]): DocNode {
	if (segments.length === 0) {
		throw new Error('segments must not be empty');
	}
	const name = segments[0];
	const fullPath = parentPath ? `${parentPath}/${name}` : name;
	let node = parent.find(n => n.name === name);
	if (!node) {
		node = { name, path: fullPath, collapsed: true, children: [], files: [] };
		parent.push(node);
	}
	if (segments.length === 1) {
		return node;
	}
	return ensureFolder(node.children, fullPath, segments.slice(1));
}

// ============================================================
// 鐘舵€?
// ============================================================
const config = loadConfig();
const usePrebuiltVectors = config.usePrebuiltVectors !== false;
const importedEmbeddingModel = config.localImportedModelsEnabled && config.embeddingModelSource === 'imported' ? getImportedModel(config.embeddingModelId) : undefined;
const embeddingModelName = importedEmbeddingModel ? '' : usePrebuiltVectors ? PREBUILT_VECTOR_MODEL_NAME : config.embeddingModel;
const engine = new RAGEngine((msg) => {
	addSystemMessage(`【Think】${msg}`);
}, config.modelMirror, embeddingModelName, importedEmbeddingModel);

// ============================================================
// DOM
// ============================================================
const fileInput = document.getElementById('file-input') as HTMLInputElement;
const docList = document.getElementById('doc-list')!;
const docStats = document.getElementById('doc-stats')!;
const clearKbBtn = document.getElementById('clear-kb') as HTMLButtonElement;
const chatMessages = document.getElementById('chat-messages')!;
const userInput = document.getElementById('user-input') as HTMLTextAreaElement;
const sendBtn = document.getElementById('send-btn') as HTMLButtonElement;
const stopBtn = document.getElementById('stop-btn') as HTMLButtonElement;
const modeApiBtn = document.getElementById('mode-api') as HTMLButtonElement;
const modeLocalBtn = document.getElementById('mode-local') as HTMLButtonElement;
const modeIndexBtn = document.getElementById('mode-index') as HTMLButtonElement;
const rebuildIndexBtn = document.getElementById('rebuild-index') as HTMLButtonElement;
const vectorProgress = document.getElementById('vector-progress')!;
const vectorProgressText = vectorProgress.querySelector('.vector-progress-text') as HTMLElement;
const vectorProgressBar = vectorProgress.querySelector('.vector-progress-bar') as HTMLElement;
const previewModal = document.getElementById('preview-modal')!;
const previewTitle = document.getElementById('preview-title')!;
const previewBody = document.getElementById('preview-body')!;
const previewClose = document.getElementById('preview-close') as HTMLButtonElement;
const previewVisit = document.getElementById('preview-visit') as HTMLAnchorElement;

// ============================================================
// 妯″紡绠＄悊
// ============================================================
type SearchMode = 'api' | 'local' | 'index';
let currentMode: SearchMode = 'api';

function setMode(mode: SearchMode): void {
	currentMode = mode;
	modeApiBtn.classList.toggle('active', mode === 'api');
	modeLocalBtn.classList.toggle('active', mode === 'local');
	modeIndexBtn.classList.toggle('active', mode === 'index');
	rebuildIndexBtn.style.display = mode === 'index' ? 'inline-block' : 'none';
	userInput.placeholder = mode === 'api'
		? eda.sys_I18n.text('Input your question...')
		: mode === 'local'
			? eda.sys_I18n.text('Input your question (local AI)...')
			: eda.sys_I18n.text('Input keywords to search knowledge base...');

	// 棣栨鍒囧埌鍏抽敭璇嶆绱㈡ā寮忔椂锛屽脊绐楁彁绀洪渶瑕佸垱寤虹储寮?
	if (mode === 'index') {
		showIndexBuildDialogIfNeeded();
	}
}

/** 璁板綍鏄惁宸插脊绐楁彁绀鸿繃锛堟湰娆′細璇濆唴鍙彁绀轰竴娆★級 */
let indexDialogShown = false;

function showIndexBuildDialogIfNeeded(): void {
	if (indexDialogShown) {
		return;
	}
	indexDialogShown = true;

	eda.sys_Dialog.showConfirmationMessage(
		eda.sys_I18n.text('Keyword search uses a local index. First use or after document changes, the index needs to be created, which may take a moment. Build index now?'),
		eda.sys_I18n.text('Build Search Index'),
		eda.sys_I18n.text('Build'),
		eda.sys_I18n.text('Cancel'),
		(confirmed: boolean) => {
			if (confirmed) {
				rebuildSearchIndex();
			}
		},
	);
}

/** 閲嶅缓鎼滅储绱㈠紩 */
function rebuildSearchIndex(): void {
	if (engine.documentCount === 0) {
		addSystemMessage(eda.sys_I18n.text('Knowledge base is empty, nothing to index.'));
		return;
	}
	eda.sys_Message.showToastMessage(eda.sys_I18n.text('Building index, please wait...'), 1, 3);
	// 鐢?setTimeout 璁?UI 鍏堟洿鏂?
	setTimeout(() => {
		const start = Date.now();
		engine.buildSearchIndex();
		const elapsed = ((Date.now() - start) / 1000).toFixed(1);
		// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder
		addSystemMessage(eda.sys_I18n.text('Search index built (${1} chunks, ${2}s).', undefined, undefined, String(engine.documentCount), elapsed));
		eda.sys_Message.showToastMessage(eda.sys_I18n.text('Index built'), 0, 2);
	}, 50);
}

function setVectorProgress(message: string, done = 0, total = 0): void {
	vectorProgress.style.display = '';
	vectorProgressText.textContent = message;
	const percent = total > 0 ? Math.round((done / total) * 100) : 0;
	vectorProgressBar.style.width = `${percent}%`;
}

function hideVectorProgress(): void {
	vectorProgress.style.display = 'none';
	vectorProgressBar.style.width = '0%';
}

function acknowledgeVectorRebuildRequest(): void {
	const latest = loadConfig();
	if (!latest.embeddingVectorRebuildToken) {
		return;
	}
	latest.embeddingVectorRebuildToken = '';
	saveConfig(latest);
}

// ============================================================
// 鍒濆鍖?
// ============================================================
addSystemMessage(eda.sys_I18n.text('Welcome to AI Knowledge Base Assistant'));
if (!config.apiKey || !config.model || !config.baseURL) {
	addSystemMessage(eda.sys_I18n.text('Please configure API Key, model name and API URL in the Settings menu'));
}

// 鍏堝姞杞界敤鎴锋枃妗ｏ紙宸插湪鍐呭瓨涓級锛屽啀鍔犺浇鍐呯疆鐭ヨ瘑搴?
loadUserDocuments();
loadBuiltinDocs();

fileInput.addEventListener('change', handleFileUpload);
sendBtn.addEventListener('click', handleSend);
clearKbBtn.addEventListener('click', handleClearKB);
userInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter' && !e.shiftKey) {
		e.preventDefault();
		handleSend();
	}
});

// 妯″紡鍒囨崲浜嬩欢
modeApiBtn.addEventListener('click', () => setMode('api'));
modeLocalBtn.addEventListener('click', () => setMode('local'));
modeIndexBtn.addEventListener('click', () => setMode('index'));
rebuildIndexBtn.addEventListener('click', () => {
	eda.sys_Dialog.showConfirmationMessage(
		eda.sys_I18n.text('Rebuild search index? This may take a moment.'),
		eda.sys_I18n.text('Rebuild Search Index'),
		eda.sys_I18n.text('Rebuild'),
		eda.sys_I18n.text('Cancel'),
		(confirmed: boolean) => {
			if (confirmed) {
				rebuildSearchIndex();
			}
		},
	);
});

// 棰勮寮圭獥鍏抽棴浜嬩欢
previewClose.addEventListener('click', closePreviewModal);
previewModal.addEventListener('click', (e) => {
	if (e.target === previewModal) {
		closePreviewModal();
	}
});

// ESC 鍏抽棴棰勮寮圭獥
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && previewModal.classList.contains('show')) {
		closePreviewModal();
	}
});

// ============================================================
// 鍐呯疆鐭ヨ瘑搴?
// ============================================================
async function loadBuiltinDocs(): Promise<void> {
	if (builtinVectors.length === 0) {
		return;
	}
	// 杩囨护鎺夊凡鍒犻櫎鐨勫唴缃枃妗?
	const filteredVectors = builtinVectors.filter(v => !kbState.deletedSources.includes(v.source));
	const filteredSources = new Set(filteredVectors.map(v => v.source));

	try {
		if (filteredVectors.length > 0) {
			let count: number;
			if (usePrebuiltVectors) {
				count = await engine.loadPrebuiltVectors(filteredVectors);
				acknowledgeVectorRebuildRequest();
			}
			else if (importedEmbeddingModel) {
				const cacheKey = importedVectorCacheKey(importedEmbeddingModel.id, importedEmbeddingModel.selectedDtype);
				const forceRebuild = !!config.embeddingVectorRebuildToken;
				if (forceRebuild) {
					await deleteVectorCache(cacheKey);
				}
				let cachedVectors = forceRebuild ? null : await readVectorCache(cacheKey);
				if (cachedVectors) {
					cachedVectors = cachedVectors.filter(v => filteredSources.has(v.source));
					setVectorProgress(`Loaded cached vectors for ${importedEmbeddingModel.name}`, cachedVectors.length, cachedVectors.length);
				}
				else {
					setVectorProgress(`Building vectors with ${importedEmbeddingModel.name}...`, 0, filteredVectors.length);
					cachedVectors = await engine.embedAndLoadChunks(filteredVectors.map(v => ({ text: v.text, source: v.source })), (done, total) => {
						setVectorProgress(`Building vectors with ${importedEmbeddingModel.name}: ${done}/${total}`, done, total);
					});
					await writeVectorCache(cacheKey, cachedVectors);
				}
				setVectorProgress(`Loading vectors for ${importedEmbeddingModel.name}...`, cachedVectors.length, cachedVectors.length);
				await engine.loadPrebuiltVectors(cachedVectors);
				if (forceRebuild) {
					acknowledgeVectorRebuildRequest();
				}
				count = cachedVectors.length;
				setTimeout(hideVectorProgress, 1200);
			}
			else {
				const modelName = config.embeddingModel || PREBUILT_VECTOR_MODEL_NAME;
				const cacheKey = remoteVectorCacheKey(modelName);
				let cachedVectors = await readVectorCache(cacheKey);
				if (cachedVectors) {
					cachedVectors = cachedVectors.filter(v => filteredSources.has(v.source));
					setVectorProgress(eda.sys_I18n.text('Loaded cached vectors'), cachedVectors.length, cachedVectors.length);
				}
				else {
					setVectorProgress(eda.sys_I18n.text('Building vectors...'), 0, filteredVectors.length);
					cachedVectors = await engine.embedAndLoadChunks(filteredVectors.map(v => ({ text: v.text, source: v.source })), (done, total) => {
						// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder
						setVectorProgress(eda.sys_I18n.text('Building vectors: ${1}/${2}', undefined, undefined, String(done), String(total)), done, total);
					});
					await writeVectorCache(cacheKey, cachedVectors);
				}
				await engine.loadPrebuiltVectors(cachedVectors);
				count = cachedVectors.length;
				setTimeout(hideVectorProgress, 1200);
			}
			// 鎸夎矾寰勫垎缁勫埌鏍戝舰缁撴瀯
			for (const v of filteredVectors) {
				const parts = v.source.split('/');
				const file = parts.pop()!;
				const folderSegments = parts.length > 0 ? parts : [eda.sys_I18n.text('Built-in Knowledge Base')];
				const folder = ensureFolder(rootNodes, '', folderSegments);
				if (!folder.files.includes(file)) {
					folder.files.push(file);
				}
			}
			// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder
			addSystemMessage(eda.sys_I18n.text('Loaded built-in knowledge base (${1} chunks). You can import more documents.', undefined, undefined, String(count)));
		}
		else {
			addSystemMessage(eda.sys_I18n.text('Built-in knowledge base is empty. Import documents to build a custom knowledge base.'));
		}
		renderDocList();
	}
	catch {
		addSystemMessage(eda.sys_I18n.text('Failed to load built-in knowledge base'));
	}
}

// ============================================================
// 鐢ㄦ埛鏂囨。
// ============================================================
async function loadUserDocuments(): Promise<void> {
	const entries = Object.entries(kbState.userDocuments);
	if (entries.length === 0) {
		return;
	}

	// 鎸?source key 璺緞鍒嗙粍
	const folderMap = new Map<string, Array<{ file: string; content: string }>>();
	for (const [sourceKey, content] of entries) {
		const parts = sourceKey.split('/');
		const file = parts.pop()!;
		const folderPath = parts.join('/');
		if (!folderMap.has(folderPath)) {
			folderMap.set(folderPath, []);
		}
		folderMap.get(folderPath)!.push({ file, content });
	}

	// 鍔犺浇姣忎釜鏂囦欢澶?
	for (const [folderPath, files] of folderMap) {
		const folderSegments = folderPath.split('/').filter(Boolean);
		const folder = ensureFolder(rootNodes, '', folderSegments);

		for (const { file, content } of files) {
			try {
				const sourceKey = getSourceKey(folderPath, file);
				await engine.addDocument(sourceKey, content);
				if (!folder.files.includes(file)) {
					folder.files.push(file);
				}
			}
			catch {
				// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder
				addSystemMessage(eda.sys_I18n.text('Failed to load user document: ${1}', undefined, undefined, file));
			}
		}
	}

	renderDocList();
	importCounter = kbState.importCounter;
}

// ============================================================
// 鏂囦欢涓婁紶 鈥?鍒涘缓鏂版枃浠跺す
// ============================================================
async function handleFileUpload(e: Event): Promise<void> {
	const target = e.target as HTMLInputElement;
	const files = Array.from(target.files || []);
	if (!files.length) {
		return;
	}

	const folderName = `瀵煎叆 ${importCounter++}`;
	const folder: DocNode = { name: folderName, path: folderName, collapsed: false, children: [], files: [] };

	let totalChunks = 0;
	for (const file of files) {
		try {
			const text = await file.text();
			const sourceKey = getSourceKey(folderName, file.name);
			const chunks = await engine.addDocument(sourceKey, text);
			folder.files.push(file.name);
			totalChunks += chunks;
			// 鎸佷箙鍖栫敤鎴锋枃妗?
			saveUserDocument(sourceKey, text);
		}
		catch {
			addSystemMessage(`璇诲彇鏂囦欢澶辫触: ${file.name}`);
		}
	}

	if (folder.files.length > 0) {
		rootNodes.push(folder);
	}

	// 淇濆瓨瀵煎叆璁℃暟鍣?
	kbState.importCounter = importCounter;
	saveKBState(kbState);

	renderDocList();
	// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder
	addSystemMessage(eda.sys_I18n.text('Imported ${1} files to "${2}", total ${3} chunks.', undefined, undefined, String(files.length), folderName, String(totalChunks)));
	fileInput.value = '';
}

// ============================================================
// 鏂囦欢澶规搷浣?
// ============================================================
function toggleNode(node: DocNode): void {
	node.collapsed = !node.collapsed;
	renderDocList();
}

function renameNode(node: DocNode, headerEl: HTMLElement): void {
	const oldName = node.name;
	const oldPath = node.path;

	const nameEl = headerEl.querySelector('.folder-name') as HTMLElement;
	if (!nameEl) {
		return;
	}

	const input = document.createElement('input');
	input.className = 'folder-name-input';
	input.value = oldName;
	nameEl.replaceWith(input);
	input.focus();
	input.select();

	const commit = async () => {
		const newName = input.value.trim() || oldName;
		if (newName !== oldName) {
			// 鏇存柊璺緞
			const newPath = oldPath.endsWith(oldName)
				? oldPath.slice(0, -oldName.length) + newName
				: newName;
			// 鏀堕泦鏃?source keys
			const oldKeys = collectSourceKeys(node);
			// 鏇存柊鑺傜偣
			node.name = newName;
			updateNodePaths(node, newPath);
			// 鏇存柊 engine 涓殑 source keys
			const newKeys = collectSourceKeys(node);
			for (let i = 0; i < oldKeys.length; i++) {
				await engine.renameSource(oldKeys[i], newKeys[i]);
			}
		}
		renderDocList();
	};

	input.addEventListener('blur', commit);
	input.addEventListener('keydown', (ev) => {
		if (ev.key === 'Enter') {
			input.blur();
		}
		if (ev.key === 'Escape') {
			input.value = oldName;
			input.blur();
		}
	});
}

/** 閫掑綊鏇存柊鑺傜偣鍙婂瓙鑺傜偣鐨?path */
function updateNodePaths(node: DocNode, newPath: string): void {
	node.path = newPath;
	for (const child of node.children) {
		updateNodePaths(child, `${newPath}/${child.name}`);
	}
}

function deleteNode(node: DocNode, parentArray: DocNode[]): void {
	const fileCount = countFiles(node);
	eda.sys_Dialog.showConfirmationMessage(
		// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder
		eda.sys_I18n.text('Delete folder "${1}" and its ${2} files?', undefined, undefined, node.name, String(fileCount)),
		eda.sys_I18n.text('Confirm Delete'),
		eda.sys_I18n.text('Delete'),
		eda.sys_I18n.text('Cancel'),
		async (confirmed: boolean) => {
			if (!confirmed) {
				return;
			}
			eda.sys_Message.showToastMessage(eda.sys_I18n.text('Deleting, please do not close the page or browser...'), 1, 3);
			const sourceKeys = collectSourceKeys(node);
			if (sourceKeys.length > 0) {
				await engine.removeDocuments(sourceKeys);
			}
			// 鏍囪涓哄凡鍒犻櫎锛堢敤浜庡唴缃煡璇嗗簱锛夋垨浠庣敤鎴锋枃妗ｄ腑绉婚櫎
			for (const key of sourceKeys) {
				if (kbState.userDocuments[key]) {
					removeUserDocument(key);
				}
				else {
					markSourceDeleted(key);
				}
			}
			const idx = parentArray.indexOf(node);
			if (idx >= 0) {
				parentArray.splice(idx, 1);
			}
			renderDocList();
			// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder syntax
			eda.sys_Message.showToastMessage(eda.sys_I18n.text('Deleted folder "${1}"', undefined, undefined, node.name), 0, 3);
		},
	);
}

function removeFileFromNode(node: DocNode, fileIdx: number, parentArray: DocNode[]): void {
	const file = node.files[fileIdx];
	eda.sys_Dialog.showConfirmationMessage(
		// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder
		eda.sys_I18n.text('Delete "${1}"?', undefined, undefined, file),
		eda.sys_I18n.text('Confirm Delete'),
		eda.sys_I18n.text('Delete'),
		eda.sys_I18n.text('Cancel'),
		async (confirmed: boolean) => {
			if (!confirmed) {
				return;
			}
			eda.sys_Message.showToastMessage(eda.sys_I18n.text('Deleting, please do not close the page or browser...'), 1, 3);
			const sourceKey = getSourceKey(node.path, file);
			await engine.removeDocuments([sourceKey]);
			// 鏍囪涓哄凡鍒犻櫎锛堢敤浜庡唴缃煡璇嗗簱锛夋垨浠庣敤鎴锋枃妗ｄ腑绉婚櫎
			if (kbState.userDocuments[sourceKey]) {
				removeUserDocument(sourceKey);
			}
			else {
				markSourceDeleted(sourceKey);
			}
			node.files.splice(fileIdx, 1);
			// 濡傛灉鏂囦欢澶圭┖浜嗭紙鏃犳枃浠朵篃鏃犲瓙鏂囦欢澶癸級锛岀Щ闄よ妭鐐?
			if (node.files.length === 0 && node.children.length === 0) {
				const idx = parentArray.indexOf(node);
				if (idx >= 0) {
					parentArray.splice(idx, 1);
				}
			}
			renderDocList();
			// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder syntax
			eda.sys_Message.showToastMessage(eda.sys_I18n.text('Deleted "${1}"', undefined, undefined, file), 0, 3);
		},
	);
}

// ============================================================
// RAG 闂瓟
// ============================================================
let currentAbortController: AbortController | null = null;
let stopped = false;
let localLLM: LocalLLM | null = null;

stopBtn.addEventListener('click', () => {
	stopped = true;
	if (currentAbortController) {
		currentAbortController.abort();
		currentAbortController = null;
	}
	if (localLLM) {
		localLLM.dispose();
		localLLM = null;
	}
	stopBtn.style.display = 'none';
	sendBtn.disabled = false;
});

async function handleSend(): Promise<void> {
	const question = userInput.value.trim();
	if (!question) {
		return;
	}

	userInput.value = '';
	sendBtn.disabled = true;
	stopBtn.style.display = '';
	stopped = false;
	currentAbortController = new AbortController();
	addMessage('user', question);

	const statusDiv = document.createElement('div');
	statusDiv.className = 'message system';
	statusDiv.textContent = eda.sys_I18n.text('Searching knowledge base...');
	chatMessages.appendChild(statusDiv);
	chatMessages.scrollTop = chatMessages.scrollHeight;

	try {
		if (currentMode === 'index') {
			await handleIndexSearch(question, statusDiv);
		}
		else if (currentMode === 'local') {
			await handleLocalQuery(question, statusDiv);
		}
		else {
			await handleApiQuery(question, statusDiv);
		}
	}
	catch (err: any) {
		if (err.name !== 'AbortError') {
			statusDiv.remove();
			addMessage('system', `[ERROR] ${err.message || err}`);
		}
	}
	finally {
		currentAbortController = null;
		stopBtn.style.display = 'none';
		sendBtn.disabled = false;
		userInput.focus();
	}
}

/** 绱㈠紩妯″紡锛氫娇鐢ㄦ湰鍦板€掓帓绱㈠紩妫€绱? */
async function handleIndexSearch(question: string, statusDiv: HTMLElement): Promise<void> {
	// 濡傛灉绱㈠紩杩囨湡锛堟枃妗ｆ湁澧炲垹锛夛紝鍏堟彁绀?
	if (engine.isIndexStale) {
		statusDiv.textContent = eda.sys_I18n.text('Building index, please wait...');
	}

	const results = engine.keywordSearch(question, 10);
	statusDiv.remove();

	if (results.length === 0) {
		addMessage('system', eda.sys_I18n.text('No matching document fragments found. Try other keywords or import more documents.'));
		return;
	}

	// 鍒涘缓妫€绱㈢粨鏋滃鍣?
	const resultDiv = document.createElement('div');
	resultDiv.className = 'message assistant';

	const headerDiv = document.createElement('div');
	// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder
	headerDiv.innerHTML = `<strong>${eda.sys_I18n.text('Found ${1} matching fragments', undefined, undefined, String(results.length))}</strong>`;
	resultDiv.appendChild(headerDiv);

	const listDiv = document.createElement('div');
	listDiv.className = 'search-results';

	for (let i = 0; i < results.length; i++) {
		const result = results[i];
		// 鑾峰彇鏂囨。鏍囬
		const title = engine.getDocumentTitle(result.source);
		const titleHtml = title ? `<span class="search-result-title">${escapeHtml(title)}</span>` : '';

		const itemDiv = document.createElement('div');
		itemDiv.className = 'search-result-item';
		itemDiv.innerHTML = `
			<div class="search-result-header">
				<div class="search-result-info">
					${titleHtml}
					<span class="search-result-source">${escapeHtml(result.source)}</span>
				</div>
				<span class="search-result-score">score: ${result.score.toFixed(3)}</span>
				<span class="search-result-link">${eda.sys_I18n.text('Click to preview')} -></span>
			</div>
			<div class="search-result-content">${highlightText(escapeHtml(result.content), question)}</div>
		`;

		// 鐐瑰嚮鎵撳紑棰勮 - 浼犲叆source鍜岀敤鎴疯緭鍏ョ殑question鐢ㄤ簬楂樹寒
		itemDiv.addEventListener('click', () => {
			openPreviewModal(result.source, question);
		});

		listDiv.appendChild(itemDiv);
	}

	resultDiv.appendChild(listDiv);
	chatMessages.appendChild(resultDiv);
	chatMessages.scrollTop = chatMessages.scrollHeight;
}

/** API 妯″紡锛氳皟鐢ㄥ湪绾?API */
async function handleApiQuery(question: string, statusDiv: HTMLElement): Promise<void> {
	const cfg = loadConfig();
	if (!cfg.apiKey || !cfg.model || !cfg.baseURL) {
		statusDiv.remove();
		addMessage('system', eda.sys_I18n.text('Please configure API Key, model name and API URL in the Settings menu first'));
		return;
	}

	const origOnStatus = engine.onStatus;
	engine.onStatus = (msg: string) => {
		statusDiv.textContent = `[Think] ${msg}`;
		chatMessages.scrollTop = chatMessages.scrollHeight;
	};

	const msgDiv = document.createElement('div');
	msgDiv.className = 'message assistant';

	let streamStarted = false;
	let fullContent = '';

	const { sources } = await engine.ask(question, cfg, (chunk) => {
		if (stopped)
			return;
		if (!streamStarted) {
			statusDiv.remove();
			chatMessages.appendChild(msgDiv);
			streamStarted = true;
		}
		fullContent += chunk;
		msgDiv.innerHTML = renderMarkdown(fullContent);
		chatMessages.scrollTop = chatMessages.scrollHeight;
	}, currentAbortController?.signal);

	if (!streamStarted) {
		statusDiv.remove();
		chatMessages.appendChild(msgDiv);
	}

	if (sources.length > 0) {
		const srcDiv = document.createElement('div');
		srcDiv.className = 'sources';
		srcDiv.textContent = eda.sys_I18n.text('AI Generated Sources', undefined, undefined, sources.join(', '));
		msgDiv.appendChild(srcDiv);
	}

	engine.onStatus = origOnStatus;
}

async function handleLocalQuery(question: string, statusDiv: HTMLElement): Promise<void> {
	const cfg = loadConfig();
	const importedTextModel = cfg.localImportedModelsEnabled && cfg.textModelSource === 'imported'
		? getImportedModel(cfg.textModelId)
		: undefined;

	if (!localLLM) {
		localLLM = new LocalLLM({
			onProgress: (msg) => {
				statusDiv.textContent = `[Model] ${msg}`;
				chatMessages.scrollTop = chatMessages.scrollHeight;
			},
			modelMirror: cfg.modelMirror,
			modelName: cfg.localModel,
			dtype: cfg.localDtype,
			importedModel: importedTextModel,
		});
	}

	statusDiv.textContent = eda.sys_I18n.text('Thinking...');

	const msgDiv = document.createElement('div');
	msgDiv.className = 'message assistant';

	let streamStarted = false;
	let fullContent = '';

	const generateFn = (messages: Array<{ role: string; content: string }>, onToken?: (token: string) => void) => {
		return localLLM!.generate(messages, onToken);
	};

	const { sources } = await engine.askLocal(question, generateFn, (chunk) => {
		if (stopped)
			return;
		if (!streamStarted) {
			statusDiv.remove();
			chatMessages.appendChild(msgDiv);
			streamStarted = true;
		}
		fullContent += chunk;
		msgDiv.innerHTML = renderMarkdown(fullContent);
		chatMessages.scrollTop = chatMessages.scrollHeight;
	}, cfg.historyRounds);

	if (!streamStarted) {
		statusDiv.remove();
		chatMessages.appendChild(msgDiv);
	}

	if (sources.length > 0) {
		const srcDiv = document.createElement('div');
		srcDiv.className = 'sources';
		srcDiv.textContent = eda.sys_I18n.text('Local AI Generated Sources', undefined, undefined, sources.join(', '));
		msgDiv.appendChild(srcDiv);
	}
}

// ============================================================
// 宸ュ叿鍑芥暟
// ============================================================

/** HTML 杞箟 */
function escapeHtml(text: string): string {
	const div = document.createElement('div');
	div.textContent = text;
	return div.innerHTML;
}

/** 楂樹寒鍏抽敭璇? */
function highlightText(text: string, keyword: string): string {
	if (!keyword.trim()) {
		return text;
	}
	// 鍒嗚瘝骞惰浆涔夋鍒欑壒娈婂瓧绗?
	const words = keyword.split(/\s+/).filter(w => w.length > 0);
	if (words.length === 0) {
		return text;
	}

	let result = text;
	for (const word of words) {
		const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const regex = new RegExp(escaped, 'gi');
		result = result.replace(regex, '<span class="highlight">$&</span>');
	}
	return result;
}

/** 鎵撳紑棰勮寮圭獥 */
function openPreviewModal(source: string, highlightKeyword: string): void {
	previewTitle.textContent = source;

	// 璁剧疆鍦ㄧ嚎鏂囨。閾炬帴
	const onlineUrl = getSourceOnlineUrl(source);
	if (onlineUrl) {
		previewVisit.href = onlineUrl;
		previewVisit.style.display = 'inline';
	}
	else {
		previewVisit.style.display = 'none';
	}

	// 鑾峰彇璇ユ潵婧愮殑瀹屾暣鏂囨。鍐呭
	const fullContent = engine.getDocumentContent(source);
	if (!fullContent) {
		previewBody.innerHTML = `<p style="color: #999;">${eda.sys_I18n.text('Unable to load document content')}</p>`;
		previewModal.classList.add('show');
		return;
	}

	// 鍏堟覆鏌?Markdown锛堜紶鍏?source 鐢ㄤ簬澶勭悊鍥剧墖閾炬帴锛?
	let html = renderMarkdown(fullContent, source);

	// 鍐嶅娓叉煋鍚庣殑 HTML 杩涜楂樹寒澶勭悊
	if (highlightKeyword && highlightKeyword.trim()) {
		html = highlightInHtml(html, highlightKeyword);
	}

	previewBody.innerHTML = html;
	previewModal.classList.add('show');

	// 婊氬姩鍒扮涓€涓珮浜綅缃?
	const firstHighlight = previewBody.querySelector('.highlight');
	if (firstHighlight) {
		firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}
}

/**
 * 鍐呯疆鐭ヨ瘑搴撳煙鍚嶆槧灏勯厤缃〃
 * - domain: 瀵瑰簲鐨勫湪绾挎枃妗ｅ煙鍚嶏紙null 琛ㄧず鏃犲湪绾块摼鎺ワ級
 * - pathPrefix: URL 璺緞鍓嶇紑
 * - pathSuffix: URL 璺緞鍚庣紑
 */
interface DomainMapping {
	domain: string | null;
	pathPrefix: string;
	pathSuffix: string;
}

const DOMAIN_MAPPINGS: Record<string, DomainMapping> = {
	'design-production': {
		domain: 'https://wiki.lceda.cn',
		pathPrefix: '/zh-hans/',
		pathSuffix: '.html',
	},
	'faq-lark': {
		domain: null,
		pathPrefix: '',
		pathSuffix: '',
	},
};

const DEFAULT_DOMAIN_MAPPING: DomainMapping = {
	domain: 'https://prodocs.lceda.cn',
	pathPrefix: '/cn/',
	pathSuffix: '/',
};

function getDomainMapping(dirName: string): DomainMapping {
	return DOMAIN_MAPPINGS[dirName] || DEFAULT_DOMAIN_MAPPING;
}

/** 鏍规嵁鐭ヨ瘑搴撹矾寰勭敓鎴愬湪绾挎枃妗RL */
function getSourceOnlineUrl(source: string): string | null {
	let path = source.replace(/\.md$/, '');

	if (!path.startsWith(`${eda.sys_I18n.text('Built-in Knowledge Base')}/`)) {
		return null;
	}

	path = path.replace(new RegExp(`^${eda.sys_I18n.text('Built-in Knowledge Base').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/`), '');

	const dirName = path.split('/')[0];
	const mapping = getDomainMapping(dirName);

	if (!mapping.domain) {
		return null;
	}

	return `${mapping.domain}${mapping.pathPrefix}${path}${mapping.pathSuffix}`;
}

/** 鍦?HTML 鍐呭涓繘琛岄珮浜紙淇濇姢 HTML 鏍囩锛? */
function highlightInHtml(html: string, keyword: string): string {
	if (!keyword.trim()) {
		return html;
	}

	// 鍒嗚瘝骞惰繃婊ょ┖璇?
	const words = keyword.split(/\s+/).filter(w => w.length > 0);
	if (words.length === 0) {
		return html;
	}

	// 浣跨敤涓存椂鍗犱綅绗︿繚鎶?HTML 鏍囩
	const placeholder = '___HTML_TAG___';
	const tags: string[] = [];
	let result = html.replace(/<[^>]+>/g, (match) => {
		tags.push(match);
		return placeholder;
	});

	// 鍦ㄧ函鏂囨湰閮ㄥ垎杩涜楂樹寒
	for (const word of words) {
		// 杞箟姝ｅ垯鐗规畩瀛楃
		const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const regex = new RegExp(`(${escaped})`, 'gi');
		result = result.replace(regex, '<span class="highlight">$1</span>');
	}

	// 鎭㈠ HTML 鏍囩
	let tagIndex = 0;
	result = result.replace(new RegExp(placeholder, 'g'), () => {
		return tags[tagIndex++] || '';
	});

	return result;
}

/** 鍏抽棴棰勮寮圭獥 */
function closePreviewModal(): void {
	previewModal.classList.remove('show');
}

// ============================================================
// UI 娓叉煋
// ============================================================
/** 娓叉煋 Markdown 鍐呭涓?HTML */
function renderMarkdown(text: string, sourcePath?: string): string {
	// 閰嶇疆 marked 閫夐」
	// gfm: 鍚敤 GitHub Flavored Markdown锛堟洿濂界殑琛ㄦ牸鏀寔锛?
	// breaks: 涓嶅皢鍗曚釜鎹㈣绗﹁浆鎹负 <br>
	// mangle: false - 涓嶈浆涔夐偖绠卞湴鍧€绛?
	// headerIds: false - 涓嶈嚜鍔ㄦ坊鍔?header id
	let html = marked.parse(text, {
		async: false,
		gfm: true,
		breaks: false,
		mangle: false,
		headerIds: false,
	}) as string;

	// 澶勭悊鍥剧墖閾炬帴锛屾坊鍔犲煙鍚嶅墠缂€
	if (sourcePath) {
		const baseUrl = getBaseUrlForSource(sourcePath);
		if (baseUrl) {
			// 鏇挎崲 /storage/images/ 寮€澶寸殑鍥剧墖閾炬帴
			html = html.replace(
				/(<img[^>]+src=["'])\/storage\/images\//gi,
				`$1${baseUrl}/storage/images/`,
			);
			// 鏇挎崲 markdown 鍥剧墖璇硶涓殑鐩稿璺緞
			html = html.replace(
				/(<img[^>]+src=["'])\/cn\//gi,
				`$1${baseUrl}/cn/`,
			);
			html = html.replace(
				/(<img[^>]+src=["'])\/zh-hans\//gi,
				`$1${baseUrl}/zh-hans/`,
			);
		}
		// 涓鸿法鍩熷浘鐗囨坊鍔?crossorigin 灞炴€т互閫氳繃 COEP 鏍￠獙
		html = html.replace(
			/<img(?![^>]*crossorigin)/gi,
			'<img crossorigin="anonymous"',
		);
	}

	return html;
}

/** 鏍规嵁鏂囨。璺緞鑾峰彇瀵瑰簲鐨勫熀纭€ URL锛堢敤浜庡浘鐗囧煙鍚嶈ˉ鍏級 */
function getBaseUrlForSource(source: string): string | null {
	if (!source.startsWith(`${eda.sys_I18n.text('Built-in Knowledge Base')}/`)) {
		return null;
	}

	const path = source.replace(new RegExp(`^${eda.sys_I18n.text('Built-in Knowledge Base').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/`), '');
	const dirName = path.split('/')[0];
	const mapping = getDomainMapping(dirName);

	return mapping.domain;
}

function addMessage(role: string, content: string, sources?: string[]): void {
	const div = document.createElement('div');
	div.className = `message ${role}`;

	// assistant 娑堟伅娓叉煋 Markdown
	if (role === 'assistant') {
		div.innerHTML = renderMarkdown(content);
	}
	else {
		div.textContent = content;
	}

	if (sources && sources.length > 0) {
		const srcDiv = document.createElement('div');
		srcDiv.className = 'sources';
		srcDiv.textContent = eda.sys_I18n.text('AI Generated Sources', undefined, undefined, sources.join(', '));
		div.appendChild(srcDiv);
	}

	chatMessages.appendChild(div);
	chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addSystemMessage(text: string): void {
	addMessage('system', text);
}

/** 閫掑綊娓叉煋鏍戝舰鏂囦欢澶? */
function renderNode(node: DocNode, parentArray: DocNode[], container: HTMLElement, depth: number): void {
	const fileCount = countFiles(node);

	// 鏂囦欢澶瑰ご
	const header = document.createElement('div');
	header.className = 'folder-header';
	header.style.paddingLeft = `${4 + depth * 12}px`;
	header.innerHTML = `<span class="folder-toggle">${node.collapsed ? '&#9654;' : '&#9660;'}</span>`
		+ `<span class="folder-icon">&#128193;</span>`
		+ `<span class="folder-name">${node.name}</span>`
		+ `<span class="folder-count">${fileCount}</span>`
		+ `<span class="folder-actions">`
		+ `<span class="fa-edit" title="${eda.sys_I18n.text('Rename')}">&#9998;</span>`
		+ `<span class="fa-del" title="${eda.sys_I18n.text('Delete folder')}">&#128465;</span>`
		+ `</span>`;
	container.appendChild(header);

	// 浜嬩欢缁戝畾锛堥棴鍖呮崟鑾?node 寮曠敤锛?
	header.addEventListener('click', (e) => {
		const target = e.target as HTMLElement;
		if (target.classList.contains('fa-edit') || target.classList.contains('fa-del')) {
			return;
		}
		toggleNode(node);
	});

	header.querySelector('.fa-edit')!.addEventListener('click', (e) => {
		e.stopPropagation();
		renameNode(node, header);
	});

	header.querySelector('.fa-del')!.addEventListener('click', (e) => {
		e.stopPropagation();
		deleteNode(node, parentArray);
	});

	// 瀛愬唴瀹瑰鍣?
	const children = document.createElement('div');
	children.className = `folder-children${node.collapsed ? ' collapsed' : ''}`;

	// 閫掑綊娓叉煋瀛愭枃浠跺す
	for (const child of node.children) {
		renderNode(child, node.children, children, depth + 1);
	}

	// 娓叉煋鏂囦欢
	for (let fli = 0; fli < node.files.length; fli++) {
		const file = node.files[fli];
		const item = document.createElement('div');
		item.className = 'doc-item';
		item.style.paddingLeft = `${8 + (depth + 1) * 12}px`;
		item.innerHTML = `<span class="name" title="${file}">${file}</span>`
			+ `<span class="remove">x</span>`;
		children.appendChild(item);

		const fileIdx = fli;
		item.querySelector('.remove')!.addEventListener('click', () => {
			removeFileFromNode(node, fileIdx, parentArray);
		});
	}

	container.appendChild(children);
}

function renderDocList(): void {
	docList.innerHTML = '';

	for (const node of rootNodes) {
		renderNode(node, rootNodes, docList, 0);
	}

	// 缁熻
	const totalFiles = countAllFiles();
	// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder
	docStats.textContent = eda.sys_I18n.text('${1} documents, ${2} chunks', undefined, undefined, String(totalFiles), String(engine.documentCount));
	clearKbBtn.style.display = rootNodes.length > 0 ? 'block' : 'none';
}

function handleClearKB(): void {
	eda.sys_Dialog.showConfirmationMessage(
		eda.sys_I18n.text('Clear all knowledge base? This action cannot be undone.'),
		eda.sys_I18n.text('Confirm Clear'),
		eda.sys_I18n.text('Clear'),
		eda.sys_I18n.text('Cancel'),
		(confirmed: boolean) => {
			if (!confirmed) {
				return;
			}
			rootNodes.length = 0;
			importCounter = 1;
			engine.clear();
			// 娓呯┖鎸佷箙鍖栫姸鎬?
			kbState = { deletedSources: [], userDocuments: {}, importCounter: 1 };
			saveKBState(kbState);
			renderDocList();
			chatMessages.innerHTML = '';
			addSystemMessage(eda.sys_I18n.text('Knowledge base has been cleared.'));
			eda.sys_Message.showToastMessage(eda.sys_I18n.text('Knowledge base cleared'), 0, 3);
		},
	);
}
