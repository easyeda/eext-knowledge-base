import type { RAGConfig } from './rag';
import { marked } from 'marked';
import { builtinVectors } from './builtin-docs';
import { LocalLLM } from './local-llm';
import { RAGEngine } from './rag';

declare const eda: any;

// ============================================================
// 配置
// ============================================================
const STORAGE_KEY = 'ai_assistant_config';
const KB_STATE_KEY = 'ai_assistant_kb_state';

/** 知识库状态持久化 */
interface KBState {
	/** 已删除的内置知识库 source keys */
	deletedSources: string[];
	/** 用户导入的文档（source key -> content） */
	userDocuments: Record<string, string>;
	/** 导入计数器 */
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

function loadConfig(): RAGConfig & { embeddingModel?: string; localModel?: string; localDtype?: string } {
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
				enableThinking: !!obj.enableThinking,
				historyRounds: obj.historyRounds !== undefined ? obj.historyRounds : 3,
			};
		}
	}
	catch { /* ignore */ }
	return { apiType: 'openai', apiKey: '', model: '', baseURL: '', modelMirror: '', embeddingModel: '', localModel: '', localDtype: '', enableThinking: false, historyRounds: 3 };
}

// ============================================================
// 树形文件夹数据结构
// ============================================================
interface DocNode {
	name: string;
	/** 完整路径，用于 source key 前缀 */
	path: string;
	collapsed: boolean;
	children: DocNode[];
	files: string[];
}

const rootNodes: DocNode[] = [];
let importCounter = 1;

/** 标记 source 为已删除 */
function markSourceDeleted(source: string): void {
	if (!kbState.deletedSources.includes(source)) {
		kbState.deletedSources.push(source);
		saveKBState(kbState);
	}
}

/** 保存用户文档 */
function saveUserDocument(sourceKey: string, content: string): void {
	kbState.userDocuments[sourceKey] = content;
	saveKBState(kbState);
}

/** 删除用户文档 */
function removeUserDocument(sourceKey: string): void {
	delete kbState.userDocuments[sourceKey];
	saveKBState(kbState);
}

function getSourceKey(folderPath: string, file: string): string {
	return `${folderPath}/${file}`;
}

/** 递归统计节点下所有文件数 */
function countFiles(node: DocNode): number {
	let count = node.files.length;
	for (const child of node.children) {
		count += countFiles(child);
	}
	return count;
}

/** 递归统计所有根节点下的文件总数 */
function countAllFiles(): number {
	let total = 0;
	for (const node of rootNodes) {
		total += countFiles(node);
	}
	return total;
}

/** 递归收集节点下所有 source key */
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

/** 根据路径段在树中查找或创建子文件夹节点 */
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
// 状态
// ============================================================
const config = loadConfig();
const engine = new RAGEngine((msg) => {
	addSystemMessage(`【Think】 ${msg}`);
}, config.modelMirror, config.embeddingModel);

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
const previewModal = document.getElementById('preview-modal')!;
const previewTitle = document.getElementById('preview-title')!;
const previewBody = document.getElementById('preview-body')!;
const previewClose = document.getElementById('preview-close') as HTMLButtonElement;
const previewVisit = document.getElementById('preview-visit') as HTMLAnchorElement;

// ============================================================
// 模式管理
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

	// 首次切到关键词检索模式时，弹窗提示需要创建索引
	if (mode === 'index') {
		showIndexBuildDialogIfNeeded();
	}
}

/** 记录是否已弹窗提示过（本次会话内只提示一次） */
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

/** 重建搜索索引 */
function rebuildSearchIndex(): void {
	if (engine.documentCount === 0) {
		addSystemMessage(eda.sys_I18n.text('Knowledge base is empty, nothing to index.'));
		return;
	}
	eda.sys_Message.showToastMessage(eda.sys_I18n.text('Building index, please wait...'), 1, 3);
	// 用 setTimeout 让 UI 先更新
	setTimeout(() => {
		const start = Date.now();
		engine.buildSearchIndex();
		const elapsed = ((Date.now() - start) / 1000).toFixed(1);
		// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder
		addSystemMessage(eda.sys_I18n.text('Search index built (${1} chunks, ${2}s).', undefined, undefined, String(engine.documentCount), elapsed));
		eda.sys_Message.showToastMessage(eda.sys_I18n.text('Index built'), 0, 2);
	}, 50);
}

// ============================================================
// 初始化
// ============================================================
addSystemMessage(eda.sys_I18n.text('Welcome to AI Knowledge Base Assistant'));
if (!config.apiKey || !config.model || !config.baseURL) {
	addSystemMessage(eda.sys_I18n.text('Please configure API Key, model name and API URL in the Settings menu'));
}

// 先加载用户文档（已在内存中），再加载内置知识库
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

// 模式切换事件
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

// 预览弹窗关闭事件
previewClose.addEventListener('click', closePreviewModal);
previewModal.addEventListener('click', (e) => {
	if (e.target === previewModal) {
		closePreviewModal();
	}
});

// ESC 关闭预览弹窗
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && previewModal.classList.contains('show')) {
		closePreviewModal();
	}
});

// ============================================================
// 内置知识库
// ============================================================
async function loadBuiltinDocs(): Promise<void> {
	if (builtinVectors.length === 0) {
		return;
	}
	// 过滤掉已删除的内置文档
	const filteredVectors = builtinVectors.filter(v => !kbState.deletedSources.includes(v.source));

	try {
		if (filteredVectors.length > 0) {
			const count = await engine.loadPrebuiltVectors(filteredVectors);
			// 按路径分组到树形结构
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
// 用户文档
// ============================================================
async function loadUserDocuments(): Promise<void> {
	const entries = Object.entries(kbState.userDocuments);
	if (entries.length === 0) {
		return;
	}

	// 按 source key 路径分组
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

	// 加载每个文件夹
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
// 文件上传 — 创建新文件夹
// ============================================================
async function handleFileUpload(e: Event): Promise<void> {
	const target = e.target as HTMLInputElement;
	const files = Array.from(target.files || []);
	if (!files.length) {
		return;
	}

	const folderName = `导入 ${importCounter++}`;
	const folder: DocNode = { name: folderName, path: folderName, collapsed: false, children: [], files: [] };

	let totalChunks = 0;
	for (const file of files) {
		try {
			const text = await file.text();
			const sourceKey = getSourceKey(folderName, file.name);
			const chunks = await engine.addDocument(sourceKey, text);
			folder.files.push(file.name);
			totalChunks += chunks;
			// 持久化用户文档
			saveUserDocument(sourceKey, text);
		}
		catch {
			addSystemMessage(`读取文件失败: ${file.name}`);
		}
	}

	if (folder.files.length > 0) {
		rootNodes.push(folder);
	}

	// 保存导入计数器
	kbState.importCounter = importCounter;
	saveKBState(kbState);

	renderDocList();
	// eslint-disable-next-line no-template-curly-in-string -- i18n placeholder
	addSystemMessage(eda.sys_I18n.text('Imported ${1} files to "${2}", total ${3} chunks.', undefined, undefined, String(files.length), folderName, String(totalChunks)));
	fileInput.value = '';
}

// ============================================================
// 文件夹操作
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
			// 更新路径
			const newPath = oldPath.endsWith(oldName)
				? oldPath.slice(0, -oldName.length) + newName
				: newName;
			// 收集旧 source keys
			const oldKeys = collectSourceKeys(node);
			// 更新节点
			node.name = newName;
			updateNodePaths(node, newPath);
			// 更新 engine 中的 source keys
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

/** 递归更新节点及子节点的 path */
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
			// 标记为已删除（用于内置知识库）或从用户文档中移除
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
			// 标记为已删除（用于内置知识库）或从用户文档中移除
			if (kbState.userDocuments[sourceKey]) {
				removeUserDocument(sourceKey);
			}
			else {
				markSourceDeleted(sourceKey);
			}
			node.files.splice(fileIdx, 1);
			// 如果文件夹空了（无文件也无子文件夹），移除节点
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
// RAG 问答
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
			addMessage('system', `【ERROR】 ${err.message || err}`);
		}
	}
	finally {
		currentAbortController = null;
		stopBtn.style.display = 'none';
		sendBtn.disabled = false;
		userInput.focus();
	}
}

/** 索引模式：使用本地倒排索引检索 */
async function handleIndexSearch(question: string, statusDiv: HTMLElement): Promise<void> {
	// 如果索引过期（文档有增删），先提示
	if (engine.isIndexStale) {
		statusDiv.textContent = eda.sys_I18n.text('Building index, please wait...');
	}

	const results = engine.keywordSearch(question, 10);
	statusDiv.remove();

	if (results.length === 0) {
		addMessage('system', eda.sys_I18n.text('No matching document fragments found. Try other keywords or import more documents.'));
		return;
	}

	// 创建检索结果容器
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
		// 获取文档标题
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

		// 点击打开预览 - 传入source和用户输入的question用于高亮
		itemDiv.addEventListener('click', () => {
			openPreviewModal(result.source, question);
		});

		listDiv.appendChild(itemDiv);
	}

	resultDiv.appendChild(listDiv);
	chatMessages.appendChild(resultDiv);
	chatMessages.scrollTop = chatMessages.scrollHeight;
}

/** API 模式：调用在线 API */
async function handleApiQuery(question: string, statusDiv: HTMLElement): Promise<void> {
	const cfg = loadConfig();
	if (!cfg.apiKey || !cfg.model || !cfg.baseURL) {
		statusDiv.remove();
		addMessage('system', eda.sys_I18n.text('Please configure API Key, model name and API URL in the Settings menu first'));
		return;
	}

	const origOnStatus = engine.onStatus;
	engine.onStatus = (msg: string) => {
		statusDiv.textContent = `【Think】 ${msg}`;
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
		srcDiv.textContent = `【Docs】 AI生成内容不一定正确，参考来源: ${sources.join(', ')}`;
		msgDiv.appendChild(srcDiv);
	}

	engine.onStatus = origOnStatus;
}

async function handleLocalQuery(question: string, statusDiv: HTMLElement): Promise<void> {
	const cfg = loadConfig();

	if (!localLLM) {
		localLLM = new LocalLLM({
			onProgress: (msg) => {
				statusDiv.textContent = `【Model】 ${msg}`;
				chatMessages.scrollTop = chatMessages.scrollHeight;
			},
			modelMirror: cfg.modelMirror,
			modelName: cfg.localModel,
			dtype: cfg.localDtype,
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
		srcDiv.textContent = `【Docs】 本地AI生成内容仅供参考，参考来源: ${sources.join(', ')}`;
		msgDiv.appendChild(srcDiv);
	}
}

// ============================================================
// 工具函数
// ============================================================

/** HTML 转义 */
function escapeHtml(text: string): string {
	const div = document.createElement('div');
	div.textContent = text;
	return div.innerHTML;
}

/** 高亮关键词 */
function highlightText(text: string, keyword: string): string {
	if (!keyword.trim()) {
		return text;
	}
	// 分词并转义正则特殊字符
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

/** 打开预览弹窗 */
function openPreviewModal(source: string, highlightKeyword: string): void {
	previewTitle.textContent = source;

	// 设置在线文档链接
	const onlineUrl = getSourceOnlineUrl(source);
	if (onlineUrl) {
		previewVisit.href = onlineUrl;
		previewVisit.style.display = 'inline';
	}
	else {
		previewVisit.style.display = 'none';
	}

	// 获取该来源的完整文档内容
	const fullContent = engine.getDocumentContent(source);
	if (!fullContent) {
		previewBody.innerHTML = `<p style="color: #999;">${eda.sys_I18n.text('Unable to load document content')}</p>`;
		previewModal.classList.add('show');
		return;
	}

	// 先渲染 Markdown（传入 source 用于处理图片链接）
	let html = renderMarkdown(fullContent, source);

	// 再对渲染后的 HTML 进行高亮处理
	if (highlightKeyword && highlightKeyword.trim()) {
		html = highlightInHtml(html, highlightKeyword);
	}

	previewBody.innerHTML = html;
	previewModal.classList.add('show');

	// 滚动到第一个高亮位置
	const firstHighlight = previewBody.querySelector('.highlight');
	if (firstHighlight) {
		firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}
}

/**
 * 内置知识库域名映射配置表
 * - domain: 对应的在线文档域名（null 表示无在线链接）
 * - pathPrefix: URL 路径前缀
 * - pathSuffix: URL 路径后缀
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

/** 根据知识库路径生成在线文档URL */
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

/** 在 HTML 内容中进行高亮（保护 HTML 标签） */
function highlightInHtml(html: string, keyword: string): string {
	if (!keyword.trim()) {
		return html;
	}

	// 分词并过滤空词
	const words = keyword.split(/\s+/).filter(w => w.length > 0);
	if (words.length === 0) {
		return html;
	}

	// 使用临时占位符保护 HTML 标签
	const placeholder = '___HTML_TAG___';
	const tags: string[] = [];
	let result = html.replace(/<[^>]+>/g, (match) => {
		tags.push(match);
		return placeholder;
	});

	// 在纯文本部分进行高亮
	for (const word of words) {
		// 转义正则特殊字符
		const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const regex = new RegExp(`(${escaped})`, 'gi');
		result = result.replace(regex, '<span class="highlight">$1</span>');
	}

	// 恢复 HTML 标签
	let tagIndex = 0;
	result = result.replace(new RegExp(placeholder, 'g'), () => {
		return tags[tagIndex++] || '';
	});

	return result;
}

/** 关闭预览弹窗 */
function closePreviewModal(): void {
	previewModal.classList.remove('show');
}

// ============================================================
// UI 渲染
// ============================================================
/** 渲染 Markdown 内容为 HTML */
function renderMarkdown(text: string, sourcePath?: string): string {
	// 配置 marked 选项
	// gfm: 启用 GitHub Flavored Markdown（更好的表格支持）
	// breaks: 不将单个换行符转换为 <br>
	// mangle: false - 不转义邮箱地址等
	// headerIds: false - 不自动添加 header id
	let html = marked.parse(text, {
		async: false,
		gfm: true,
		breaks: false,
		mangle: false,
		headerIds: false,
	}) as string;

	// 处理图片链接，添加域名前缀
	if (sourcePath) {
		const baseUrl = getBaseUrlForSource(sourcePath);
		if (baseUrl) {
			// 替换 /storage/images/ 开头的图片链接
			html = html.replace(
				/(<img[^>]+src=["'])\/storage\/images\//gi,
				`$1${baseUrl}/storage/images/`,
			);
			// 替换 markdown 图片语法中的相对路径
			html = html.replace(
				/(<img[^>]+src=["'])\/cn\//gi,
				`$1${baseUrl}/cn/`,
			);
			html = html.replace(
				/(<img[^>]+src=["'])\/zh-hans\//gi,
				`$1${baseUrl}/zh-hans/`,
			);
		}
		// 为跨域图片添加 crossorigin 属性以通过 COEP 校验
		html = html.replace(
			/<img(?![^>]*crossorigin)/gi,
			'<img crossorigin="anonymous"',
		);
	}

	return html;
}

/** 根据文档路径获取对应的基础 URL（用于图片域名补全） */
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

	// assistant 消息渲染 Markdown
	if (role === 'assistant') {
		div.innerHTML = renderMarkdown(content);
	}
	else {
		div.textContent = content;
	}

	if (sources && sources.length > 0) {
		const srcDiv = document.createElement('div');
		srcDiv.className = 'sources';
		srcDiv.textContent = `【Docs】 AI生成内容不一定正确，参考来源: ${sources.join(', ')}`;
		div.appendChild(srcDiv);
	}

	chatMessages.appendChild(div);
	chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addSystemMessage(text: string): void {
	addMessage('system', text);
}

/** 递归渲染树形文件夹 */
function renderNode(node: DocNode, parentArray: DocNode[], container: HTMLElement, depth: number): void {
	const fileCount = countFiles(node);

	// 文件夹头
	const header = document.createElement('div');
	header.className = 'folder-header';
	header.style.paddingLeft = `${4 + depth * 12}px`;
	header.innerHTML = `<span class="folder-toggle">${node.collapsed ? '▶' : '▼'}</span>`
		+ `<span class="folder-icon">📁</span>`
		+ `<span class="folder-name">${node.name}</span>`
		+ `<span class="folder-count">${fileCount}</span>`
		+ `<span class="folder-actions">`
		+ `<span class="fa-edit" title="重命名">✏️</span>`
		+ `<span class="fa-del" title="删除文件夹">🗑️</span>`
		+ `</span>`;
	container.appendChild(header);

	// 事件绑定（闭包捕获 node 引用）
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

	// 子内容容器
	const children = document.createElement('div');
	children.className = `folder-children${node.collapsed ? ' collapsed' : ''}`;

	// 递归渲染子文件夹
	for (const child of node.children) {
		renderNode(child, node.children, children, depth + 1);
	}

	// 渲染文件
	for (let fli = 0; fli < node.files.length; fli++) {
		const file = node.files[fli];
		const item = document.createElement('div');
		item.className = 'doc-item';
		item.style.paddingLeft = `${8 + (depth + 1) * 12}px`;
		item.innerHTML = `<span class="name" title="${file}">${file}</span>`
			+ `<span class="remove">✕</span>`;
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

	// 统计
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
			// 清空持久化状态
			kbState = { deletedSources: [], userDocuments: {}, importCounter: 1 };
			saveKBState(kbState);
			renderDocList();
			chatMessages.innerHTML = '';
			addSystemMessage(eda.sys_I18n.text('Knowledge base has been cleared.'));
			eda.sys_Message.showToastMessage(eda.sys_I18n.text('Knowledge base cleared'), 0, 3);
		},
	);
}
