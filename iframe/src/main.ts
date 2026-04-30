import type { RAGConfig } from './rag';
import { builtinVectors } from './builtin-docs';
import { RAGEngine } from './rag';

declare const eda: any;

// ============================================================
// 配置
// ============================================================
const STORAGE_KEY = 'ai_assistant_config';

function loadConfig(): RAGConfig {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const obj = JSON.parse(raw);
			return {
				apiKey: obj.apiKey || '',
				model: obj.model || '',
				baseURL: obj.baseURL || '',
			};
		}
	}
	catch { /* ignore */ }
	return { apiKey: '', model: '', baseURL: '' };
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
});

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

// ============================================================
// 初始化
// ============================================================
addSystemMessage('欢迎使用 AI 知识库助手！');
if (!config.apiKey || !config.model || !config.baseURL) {
	addSystemMessage('【WARN】 请在菜单「Settings...」中配置 API Key、模型名称和 API 地址。');
}
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

// ============================================================
// 内置知识库
// ============================================================
async function loadBuiltinDocs(): Promise<void> {
	if (builtinVectors.length === 0) {
		return;
	}
	try {
		const count = await engine.loadPrebuiltVectors(builtinVectors);
		// 按路径分组到树形结构
		for (const v of builtinVectors) {
			const parts = v.source.split('/');
			const file = parts.pop()!;
			const folderSegments = parts.length > 0 ? parts : ['内置知识库'];
			const folder = ensureFolder(rootNodes, '', folderSegments);
			if (!folder.files.includes(file)) {
				folder.files.push(file);
			}
		}
		renderDocList();
		addSystemMessage(`【Model】 已加载内置知识库（${count} 个文档块）。可继续导入更多文档。`);
	}
	catch {
		addSystemMessage('【WARN】 内置知识库加载失败');
	}
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
		}
		catch {
			addSystemMessage(`读取文件失败: ${file.name}`);
		}
	}

	if (folder.files.length > 0) {
		rootNodes.push(folder);
	}

	renderDocList();
	addSystemMessage(`已导入 ${files.length} 个文件到「${folderName}」，共 ${totalChunks} 个文档块。`);
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
		`确定删除文件夹「${node.name}」及其 ${fileCount} 个文件？`,
		'确认删除',
		'删除',
		'取消',
		async (confirmed: boolean) => {
			if (!confirmed) {
				return;
			}
			eda.sys_Message.showToastMessage('正在删除，请勿关闭页面或浏览器...', 1, 3);
			const sourceKeys = collectSourceKeys(node);
			if (sourceKeys.length > 0) {
				await engine.removeDocuments(sourceKeys);
			}
			const idx = parentArray.indexOf(node);
			if (idx >= 0) {
				parentArray.splice(idx, 1);
			}
			renderDocList();
			eda.sys_Message.showToastMessage(`已删除文件夹「${node.name}」`, 0, 3);
		},
	);
}

function removeFileFromNode(node: DocNode, fileIdx: number, parentArray: DocNode[]): void {
	const file = node.files[fileIdx];
	eda.sys_Dialog.showConfirmationMessage(
		`确定删除「${file}」？`,
		'确认删除',
		'删除',
		'取消',
		async (confirmed: boolean) => {
			if (!confirmed) {
				return;
			}
			eda.sys_Message.showToastMessage('正在删除，请勿关闭页面或浏览器...', 1, 3);
			const sourceKey = getSourceKey(node.path, file);
			await engine.removeDocuments([sourceKey]);
			node.files.splice(fileIdx, 1);
			// 如果文件夹空了（无文件也无子文件夹），移除节点
			if (node.files.length === 0 && node.children.length === 0) {
				const idx = parentArray.indexOf(node);
				if (idx >= 0) {
					parentArray.splice(idx, 1);
				}
			}
			renderDocList();
			eda.sys_Message.showToastMessage(`已删除「${file}」`, 0, 3);
		},
	);
}

// ============================================================
// RAG 问答
// ============================================================
async function handleSend(): Promise<void> {
	const question = userInput.value.trim();
	if (!question) {
		return;
	}

	const cfg = loadConfig();
	if (!cfg.apiKey || !cfg.model || !cfg.baseURL) {
		addSystemMessage('【WARN】 请先在菜单「Settings...」中配置 API Key、模型名称和 API 地址');
		return;
	}

	userInput.value = '';
	sendBtn.disabled = true;
	addMessage('user', question);

	const statusDiv = document.createElement('div');
	statusDiv.className = 'message system';
	statusDiv.textContent = '【Search】 检索知识库...';
	chatMessages.appendChild(statusDiv);
	chatMessages.scrollTop = chatMessages.scrollHeight;

	const origOnStatus = engine.onStatus;
	engine.onStatus = (msg: string) => {
		statusDiv.textContent = `【Think】 ${msg}`;
		chatMessages.scrollTop = chatMessages.scrollHeight;
	};

	try {
		const msgDiv = document.createElement('div');
		msgDiv.className = 'message assistant';

		let streamStarted = false;

		const { sources } = await engine.ask(question, cfg, (chunk) => {
			if (!streamStarted) {
				statusDiv.remove();
				chatMessages.appendChild(msgDiv);
				streamStarted = true;
			}
			msgDiv.textContent += chunk;
			chatMessages.scrollTop = chatMessages.scrollHeight;
		});

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
	}
	catch (err: any) {
		statusDiv.remove();
		addMessage('system', `【ERROR】 ${err.message || err}`);
	}
	finally {
		engine.onStatus = origOnStatus;
		sendBtn.disabled = false;
		userInput.focus();
	}
}

// ============================================================
// UI 渲染
// ============================================================
function addMessage(role: string, content: string, sources?: string[]): void {
	const div = document.createElement('div');
	div.className = `message ${role}`;
	div.textContent = content;

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
	docStats.textContent = `${totalFiles} 个文档, ${engine.documentCount} 个文档块`;
	clearKbBtn.style.display = rootNodes.length > 0 ? 'block' : 'none';
}

function handleClearKB(): void {
	eda.sys_Dialog.showConfirmationMessage(
		'确定清空所有知识库？此操作不可恢复。',
		'确认清空',
		'清空',
		'取消',
		(confirmed: boolean) => {
			if (!confirmed) {
				return;
			}
			rootNodes.length = 0;
			importCounter = 1;
			engine.clear();
			renderDocList();
			chatMessages.innerHTML = '';
			addSystemMessage('知识库已清空。');
			eda.sys_Message.showToastMessage('知识库已清空', 0, 3);
		},
	);
}
