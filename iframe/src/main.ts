import type { RAGConfig } from './rag';
import { builtinVectors } from './builtin-docs';
import { RAGEngine } from './rag';

// ============================================================
// 配置
// ============================================================
const STORAGE_KEY = 'ai_assistant_config';

interface FullConfig extends RAGConfig {
	modelHost: string;
}

function loadConfig(): FullConfig {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const obj = JSON.parse(raw);
			return {
				apiKey: obj.apiKey || '',
				model: obj.model || 'MiniMax-M2.5',
				baseURL: obj.baseURL || 'https://api.minimaxi.com/v1',
				modelHost: obj.modelHost || 'https://hf-mirror.com',
			};
		}
	}
	catch { /* ignore */ }
	return { apiKey: '', model: 'MiniMax-M2.5', baseURL: 'https://api.minimaxi.com/v1', modelHost: 'https://hf-mirror.com' };
}

// ============================================================
// 文件夹数据结构
// ============================================================
interface DocFolder {
	name: string;
	files: string[]; // 文件名列表（同时作为 engine 中的 source key）
	collapsed: boolean;
}

const folders: DocFolder[] = [];
let importCounter = 1;

function getSourceKey(folder: string, file: string): string {
	return `${folder}/${file}`;
}

// ============================================================
// 状态
// ============================================================
const config = loadConfig();
const engine = new RAGEngine(config.modelHost, (msg) => {
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
if (!config.apiKey) {
	addSystemMessage('【WARN】 请在菜单「Settings...」中配置 API Key。');
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
		// 按文件夹分组
		const sourceMap = new Map<string, string[]>();
		for (const v of builtinVectors) {
			const parts = v.source.split('/');
			const folder = parts.length > 1 ? parts.slice(0, -1).join('/') : '内置知识库';
			const file = parts[parts.length - 1];
			if (!sourceMap.has(folder)) {
				sourceMap.set(folder, []);
			}
			const files = sourceMap.get(folder)!;
			if (!files.includes(file)) {
				files.push(file);
			}
		}
		for (const [name, files] of sourceMap) {
			folders.push({ name, files, collapsed: true });
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
	const folder: DocFolder = { name: folderName, files: [], collapsed: false };

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
		folders.push(folder);
	}

	renderDocList();
	addSystemMessage(`已导入 ${files.length} 个文件到「${folderName}」，共 ${totalChunks} 个文档块。`);
	fileInput.value = '';
}

// ============================================================
// 文件夹操作
// ============================================================
function toggleFolder(folderIdx: number): void {
	folders[folderIdx].collapsed = !folders[folderIdx].collapsed;
	renderDocList();
}

function renameFolder(folderIdx: number): void {
	const folder = folders[folderIdx];
	const oldName = folder.name;

	// 替换文件夹名为 input
	const nameEl = document.querySelector(`[data-folder-idx="${folderIdx}"] .folder-name`) as HTMLElement;
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
			// 更新 engine 中的 source key
			for (const file of folder.files) {
				const oldKey = getSourceKey(oldName, file);
				const newKey = getSourceKey(newName, file);
				await engine.renameSource(oldKey, newKey);
			}
			folder.name = newName;
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

async function deleteFolder(folderIdx: number): Promise<void> {
	const folder = folders[folderIdx];
	const ok = window.confirm(
		`确定删除文件夹「${folder.name}」及其 ${folder.files.length} 个文件？\n\n此操作需要重新向量化，可能耗时较长。\n建议先完成工程保存后再执行。`,
	);
	if (!ok) {
		return;
	}
	addSystemMessage(`正在删除文件夹「${folder.name}」，重新向量化中...`);
	for (const file of folder.files) {
		const sourceKey = getSourceKey(folder.name, file);
		await engine.removeDocument(sourceKey);
	}
	folders.splice(folderIdx, 1);
	renderDocList();
	addSystemMessage(`已删除文件夹「${folder.name}」`);
}

async function removeFile(folderIdx: number, fileIdx: number): Promise<void> {
	const folder = folders[folderIdx];
	const file = folder.files[fileIdx];
	const ok = window.confirm(
		`确定删除「${file}」？\n\n此操作需要重新向量化，可能耗时较长。\n建议先完成工程保存后再执行。`,
	);
	if (!ok) {
		return;
	}
	addSystemMessage(`正在删除「${file}」，重新向量化中...`);
	const sourceKey = getSourceKey(folder.name, file);
	await engine.removeDocument(sourceKey);
	folder.files.splice(fileIdx, 1);
	if (folder.files.length === 0) {
		folders.splice(folderIdx, 1);
	}
	renderDocList();
	addSystemMessage(`已移除: ${file}`);
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
	if (!cfg.apiKey) {
		addSystemMessage('【WARN】 请先在菜单「Settings...」中配置 API Key');
		return;
	}

	userInput.value = '';
	sendBtn.disabled = true;
	addMessage('user', question);

	// 状态消息 div（检索/模型加载进度都显示在这里，不会新增消息）
	const statusDiv = document.createElement('div');
	statusDiv.className = 'message system';
	statusDiv.textContent = '【Search】 检索知识库...';
	chatMessages.appendChild(statusDiv);
	chatMessages.scrollTop = chatMessages.scrollHeight;

	// 临时劫持 onStatus，让模型加载进度更新到同一个 statusDiv
	const origOnStatus = engine.onStatus;
	engine.onStatus = (msg: string) => {
		statusDiv.textContent = `【Think】 ${msg}`;
		chatMessages.scrollTop = chatMessages.scrollHeight;
	};

	try {
		// 检索完成后，替换 statusDiv 为 assistant 消息
		const msgDiv = document.createElement('div');
		msgDiv.className = 'message assistant';

		let streamStarted = false;

		const { sources } = await engine.ask(question, cfg, (chunk) => {
			if (!streamStarted) {
				// 首个 chunk 到达，移除状态消息，插入 assistant 消息
				statusDiv.remove();
				chatMessages.appendChild(msgDiv);
				streamStarted = true;
			}
			msgDiv.textContent += chunk;
			chatMessages.scrollTop = chatMessages.scrollHeight;
		});

		// 如果没有流式输出（回退到非流式），也要处理
		if (!streamStarted) {
			statusDiv.remove();
			chatMessages.appendChild(msgDiv);
		}

		// 追加来源信息
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

function renderDocList(): void {
	docList.innerHTML = '';

	for (let fi = 0; fi < folders.length; fi++) {
		const folder = folders[fi];

		// 文件夹头
		const header = document.createElement('div');
		header.className = 'folder-header';
		header.dataset.folderIdx = String(fi);
		header.innerHTML = `<span class="folder-toggle">${folder.collapsed ? '▶' : '▼'}</span>`
			+ `<span class="folder-icon">📁</span>`
			+ `<span class="folder-name">${folder.name}</span>`
			+ `<span class="folder-count">${folder.files.length}</span>`
			+ `<span class="folder-actions">`
			+ `<span class="fa-edit" data-fi="${fi}" title="重命名">✏️</span>`
			+ `<span class="fa-del" data-fi="${fi}" title="删除文件夹">🗑️</span>`
			+ `</span>`;
		docList.appendChild(header);

		// 点击折叠/展开
		header.addEventListener('click', (e) => {
			const target = e.target as HTMLElement;
			if (target.classList.contains('fa-edit') || target.classList.contains('fa-del')) {
				return;
			}
			toggleFolder(fi);
		});

		// 文件列表
		const children = document.createElement('div');
		children.className = `folder-children${folder.collapsed ? ' collapsed' : ''}`;

		for (let fli = 0; fli < folder.files.length; fli++) {
			const file = folder.files[fli];
			const item = document.createElement('div');
			item.className = 'doc-item';
			item.innerHTML = `<span class="name" title="${file}">${file}</span>`
				+ `<span class="remove" data-fi="${fi}" data-fli="${fli}">✕</span>`;
			children.appendChild(item);
		}

		docList.appendChild(children);
	}

	// 绑定事件
	docList.querySelectorAll('.fa-edit').forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.stopPropagation();
			const fi = Number.parseInt((e.target as HTMLElement).dataset.fi || '0');
			renameFolder(fi);
		});
	});

	docList.querySelectorAll('.fa-del').forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.stopPropagation();
			const fi = Number.parseInt((e.target as HTMLElement).dataset.fi || '0');
			deleteFolder(fi);
		});
	});

	docList.querySelectorAll('.remove').forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const el = e.target as HTMLElement;
			const fi = Number.parseInt(el.dataset.fi || '0');
			const fli = Number.parseInt(el.dataset.fli || '0');
			removeFile(fi, fli);
		});
	});

	// 统计
	const totalFiles = folders.reduce((s, f) => s + f.files.length, 0);
	docStats.textContent = `${totalFiles} 个文档, ${engine.documentCount} 个文档块`;
	clearKbBtn.style.display = folders.length > 0 ? 'block' : 'none';
}

function handleClearKB(): void {
	const ok = window.confirm('确定清空所有知识库？\n\n此操作不可恢复。');
	if (!ok) {
		return;
	}
	folders.length = 0;
	importCounter = 1;
	engine.clear();
	renderDocList();
	chatMessages.innerHTML = '';
	addSystemMessage('知识库已清空。');
}
