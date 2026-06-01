import type { Document } from '@langchain/core/documents';
import { MemoryVectorStore } from '@langchain/classic/vectorstores/memory';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { LocalEmbeddings } from './embeddings';

declare const eda: any;

const TABLE_ROW_RE = /^\|.+\|$/;
const TABLE_SEP_RE = /^\|[\s:+-]+\|$/;

function repairTableChunk(chunk: string, fullContent: string): string {
	const lines = chunk.split('\n');
	const firstTableLine = lines.findIndex(l => TABLE_ROW_RE.test(l.trim()));
	if (firstTableLine === -1)
		return chunk;

	const hasHeader = firstTableLine + 1 < lines.length
		&& TABLE_SEP_RE.test(lines[firstTableLine + 1].trim());
	if (hasHeader)
		return chunk;

	const fullLines = fullContent.split('\n');
	const chunkFirstRow = lines[firstTableLine].trim();
	const idx = fullLines.findIndex(l => l.trim() === chunkFirstRow);
	if (idx <= 0)
		return chunk;

	let headerStart = idx;
	for (let i = idx - 1; i >= 0; i--) {
		const trimmed = fullLines[i].trim();
		if (TABLE_ROW_RE.test(trimmed) || TABLE_SEP_RE.test(trimmed)) {
			headerStart = i;
		}
		else {
			break;
		}
	}

	if (headerStart >= idx)
		return chunk;

	let headerEnd = headerStart;
	for (let i = headerStart; i < idx; i++) {
		if (TABLE_SEP_RE.test(fullLines[i].trim())) {
			headerEnd = i;
			break;
		}
	}

	if (headerEnd <= headerStart)
		return chunk;

	const headerLines = fullLines.slice(headerStart, headerEnd + 1).join('\n');
	lines.splice(firstTableLine, 0, headerLines);
	return lines.join('\n');
}

const SYSTEM_TEMPLATE = `你是一个专业的 AI 助手。请根据以下知识库内容回答用户的问题。
如果知识库中没有相关信息，请如实告知用户你无法从知识库中找到答案，但可以尝试根据自身知识回答。

知识库内容：
{context}`;

const EMPTY_SYSTEM_TEMPLATE = '你是一个专业的 AI 助手。当前知识库为空，请根据自身知识回答用户的问题，并提醒用户可以导入 Markdown 文档来构建知识库。';

export interface RAGConfig {
	apiKey: string;
	baseURL: string;
	model: string;
	/** 模型镜像站地址，如 https://hf-mirror.com */
	modelMirror?: string;
	/** API 类型：openai 或 anthropic */
	apiType?: 'openai' | 'anthropic';
	/** 启用思考模式（适用于 Qwen3 等） */
	enableThinking?: boolean;
	/** 上下文轮数 */
	historyRounds?: number;
}

export class RAGEngine {
	private vectorStore: MemoryVectorStore | null = null;
	private embeddings: LocalEmbeddings;
	private splitter: RecursiveCharacterTextSplitter;
	private allDocs: Document[] = [];
	/** 与 allDocs 一一对应的向量缓存，避免删除/重建时重新 embedding */
	private allVectors: number[][] = [];
	private prebuiltCount = 0;
	private chatHistory: Array<{ role: string; content: string }> = [];
	public onStatus: ((msg: string) => void) | null = null;

	constructor(onStatus?: (msg: string) => void, modelMirror?: string, embeddingModel?: string) {
		this.onStatus = onStatus ?? null;
		this.embeddings = new LocalEmbeddings({
			onProgress: (msg) => {
				if (this.onStatus) {
					this.onStatus(msg);
				}
			},
			modelMirror,
			modelName: embeddingModel,
		});
		this.splitter = new RecursiveCharacterTextSplitter({
			chunkSize: 450,
			chunkOverlap: 100,
		});
	}

	/**
	 * 加载预构建向量（bge-large，维度一致，直接注入 store）
	 */
	async loadPrebuiltVectors(entries: Array<{ text: string; source: string; vector: number[] }>): Promise<number> {
		if (entries.length === 0) {
			return 0;
		}
		const docs: Document[] = entries.map(e => ({
			pageContent: e.text,
			metadata: { source: `${e.source}` },
		}));
		const vectors: number[][] = entries.map(e => e.vector);

		this.allDocs.push(...docs);
		this.allVectors.push(...vectors);
		this.prebuiltCount = entries.length;

		if (!this.vectorStore) {
			this.vectorStore = new MemoryVectorStore(this.embeddings);
		}
		await this.vectorStore.addVectors(vectors, docs);
		return entries.length;
	}

	/**
	 * 用户上传文档（浏览器端 bge-large 实时向量化）
	 */
	async addDocument(name: string, content: string): Promise<number> {
		const rawDocs = await this.splitter.createDocuments(
			[content],
			[{ source: name }],
		);

		const docs = rawDocs.map(d => ({
			...d,
			pageContent: repairTableChunk(d.pageContent, content),
		}));

		// 先计算向量，缓存起来，再注入 store
		const vectors = await this.embeddings.embedDocuments(
			docs.map(d => d.pageContent),
		);

		this.allDocs.push(...docs);
		this.allVectors.push(...vectors);

		if (!this.vectorStore) {
			this.vectorStore = new MemoryVectorStore(this.embeddings);
		}
		await this.vectorStore.addVectors(vectors, docs);
		return docs.length;
	}

	async removeDocument(name: string): Promise<void> {
		await this.removeDocuments([name]);
	}

	async removeDocuments(names: string[]): Promise<void> {
		const nameSet = new Set(names);
		const filteredDocs: Document[] = [];
		const filteredVectors: number[][] = [];
		for (let i = 0; i < this.allDocs.length; i++) {
			if (!nameSet.has(this.allDocs[i].metadata.source)) {
				filteredDocs.push(this.allDocs[i]);
				filteredVectors.push(this.allVectors[i]);
			}
		}
		this.allDocs = filteredDocs;
		this.allVectors = filteredVectors;

		// 用已有向量直接重建 store，无需重新 embedding
		this.vectorStore = new MemoryVectorStore(this.embeddings);
		if (filteredDocs.length > 0) {
			await this.vectorStore.addVectors(filteredVectors, filteredDocs);
		}
	}

	async renameSource(oldName: string, newName: string): Promise<void> {
		for (const doc of this.allDocs) {
			if (doc.metadata.source === oldName) {
				doc.metadata.source = newName;
			}
		}
	}

	clear(): void {
		this.allDocs = [];
		this.allVectors = [];
		this.vectorStore = null;
		this.chatHistory = [];
	}

	get documentCount(): number {
		return this.allDocs.length;
	}

	/** 纯检索模式：只返回匹配的文档片段，不调用 API */
	async search(question: string, topK: number = 8): Promise<Array<{ content: string; source: string; score?: number }>> {
		if (!this.vectorStore || this.allDocs.length === 0) {
			return [];
		}

		const relevantDocs = await this.vectorStore.similaritySearch(question, topK);
		return relevantDocs.map(doc => ({
			content: doc.pageContent,
			source: doc.metadata.source,
		}));
	}

	/** 获取指定来源的完整文档内容 */
	getDocumentContent(source: string): string | null {
		const docs = this.allDocs.filter(doc => doc.metadata.source === source);
		if (docs.length === 0) {
			return null;
		}
		// 合并同一来源的所有片段
		return docs.map(doc => doc.pageContent).join('\n\n');
	}

	/** 获取指定来源的所有片段 */
	getDocumentChunks(source: string): Array<{ content: string; index: number }> {
		const docs = this.allDocs.filter(doc => doc.metadata.source === source);
		return docs.map((doc, idx) => ({
			content: doc.pageContent,
			index: idx,
		}));
	}

	/** 获取文档的一级标题（从完整内容中提取第一个 # 标题） */
	getDocumentTitle(source: string): string | null {
		const content = this.getDocumentContent(source);
		if (!content) {
			return null;
		}
		// 匹配 Markdown 一级标题
		// eslint-disable-next-line regexp/no-super-linear-backtracking -- anchored regex on single lines, no ReDoS risk
		const match = content.match(/^#\s+(.+)$/m);
		return match ? match[1].trim() : null;
	}

	async ask(question: string, config: RAGConfig, onChunk?: (text: string) => void, signal?: AbortSignal): Promise<{ answer: string; sources: string[] }> {
		const { messages, sources } = await this.buildMessages(question, config.historyRounds);
		const answer = await callAPI(config, messages, onChunk, signal);
		this.chatHistory.push({ role: 'user', content: question });
		this.chatHistory.push({ role: 'assistant', content: answer });
		return { answer, sources };
	}

	async askLocal(
		question: string,
		generateFn: (messages: Array<{ role: string; content: string }>, onToken?: (token: string) => void) => Promise<string>,
		onChunk?: (text: string) => void,
		historyRounds?: number,
	): Promise<{ answer: string; sources: string[] }> {
		const { messages, sources } = await this.buildMessages(question, historyRounds);
		const answer = await generateFn(messages, onChunk);
		this.chatHistory.push({ role: 'user', content: question });
		this.chatHistory.push({ role: 'assistant', content: answer });
		return { answer, sources };
	}

	private async buildMessages(question: string, historyRounds?: number): Promise<{ messages: Array<{ role: string; content: string }>; sources: string[] }> {
		let context = '';
		const sources: string[] = [];

		if (this.vectorStore && this.allDocs.length > 0) {
			if (this.onStatus) {
				this.onStatus(`正在检索知识库（${this.allDocs.length} 个文档块）...`);
			}
			const relevantDocs = await this.vectorStore.similaritySearch(question, 8);
			if (this.onStatus) {
				this.onStatus(`检索到 ${relevantDocs.length} 个相关片段`);
			}
			if (relevantDocs.length > 0) {
				context = relevantDocs
					.map((doc, i) => `[${i + 1}] (来源: ${doc.metadata.source})\n${doc.pageContent}`)
					.join('\n\n---\n\n');
				for (const doc of relevantDocs) {
					if (!sources.includes(doc.metadata.source)) {
						sources.push(doc.metadata.source);
					}
				}
			}
		}

		const hasKB = this.allDocs.length > 0;
		const prompt = context
			? ChatPromptTemplate.fromMessages([
					['system', SYSTEM_TEMPLATE],
					['human', '{question}'],
				])
			: ChatPromptTemplate.fromMessages([
					['system', hasKB
						? '你是一个专业的 AI 助手。知识库中未找到与用户问题直接相关的内容，请根据自身知识回答。'
						: EMPTY_SYSTEM_TEMPLATE],
					['human', '{question}'],
				]);

		const formatted = await prompt.formatMessages({ context, question });
		const msgs = formatted.map(m => ({
			role: m.getType() === 'human' ? 'user' as const : 'system' as const,
			content: typeof m.content === 'string' ? m.content : '',
		}));

		const systemMsg = msgs[0];
		const userMsg = msgs[msgs.length - 1];
		const rounds = historyRounds !== undefined ? historyRounds : 3;
		const historySlice = rounds > 0 ? this.chatHistory.slice(-(rounds * 2)) : [];
		const messages = [
			systemMsg,
			...historySlice,
			userMsg,
		];

		return { messages, sources };
	}
}

/** 统一 API 调用入口 */
async function callAPI(
	config: RAGConfig,
	messages: Array<{ role: string; content: string }>,
	onChunk?: (text: string) => void,
	signal?: AbortSignal,
): Promise<string> {
	const apiType = config.apiType || 'openai';
	if (apiType === 'anthropic') {
		return callAnthropicAPI(config, messages, onChunk, signal);
	}
	return callOpenAIAPI(config, messages, onChunk, signal);
}

/** OpenAI 兼容格式 API（包括 MiniMax、DeepSeek 等） */
async function callOpenAIAPI(
	config: RAGConfig,
	messages: Array<{ role: string; content: string }>,
	onChunk?: (text: string) => void,
	signal?: AbortSignal,
): Promise<string> {
	const url = `${config.baseURL.replace(/\/$/, '')}/chat/completions`;
	const useStream = !!onChunk;
	const reqBody: Record<string, any> = {
		model: config.model,
		messages,
		temperature: 0.7,
		max_tokens: 2048,
		stream: useStream,
	};
	if (config.enableThinking) {
		reqBody.chat_template_kwargs = { enable_thinking: true };
	}
	const body = JSON.stringify(reqBody);

	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${config.apiKey}`,
	};

	let response: Response;
	if (typeof eda !== 'undefined' && eda.sys_ClientUrl) {
		response = await eda.sys_ClientUrl.request(url, 'POST', body, { headers });
	}
	else {
		response = await fetch(url, { method: 'POST', headers, body, signal });
	}

	if (!response.ok) {
		const errText = await response.text();
		throw new Error(`API 错误 (${response.status}): ${errText}`);
	}

	if (!useStream) {
		const data = await response.json();
		if (!data.choices || !data.choices.length) {
			throw new Error('API 返回数据异常');
		}
		return data.choices[0].message.content;
	}

	// 流式读取
	const reader = response.body?.getReader();
	if (!reader) {
		throw new Error('流式响应不可用');
	}

	const decoder = new TextDecoder();
	let fullText = '';
	let buffer = '';

	while (true) {
		if (signal?.aborted) {
			reader.cancel();
			break;
		}
		const { done, value } = await reader.read();
		if (done) {
			break;
		}

		buffer += decoder.decode(value, { stream: true });
		const lines = buffer.split('\n');
		buffer = lines.pop() || '';

		for (const line of lines) {
			const trimmed = line.trim();
			if (!trimmed || !trimmed.startsWith('data: ')) {
				continue;
			}
			const data = trimmed.slice(6);
			if (data === '[DONE]') {
				continue;
			}
			try {
				const json = JSON.parse(data);
				const delta = json.choices?.[0]?.delta?.content;
				if (delta) {
					fullText += delta;
					onChunk!(delta);
				}
			}
			catch {
				// 忽略解析错误
			}
		}
	}

	return fullText;
}

/** Anthropic API 格式（Claude 等） */
async function callAnthropicAPI(
	config: RAGConfig,
	messages: Array<{ role: string; content: string }>,
	onChunk?: (text: string) => void,
	signal?: AbortSignal,
): Promise<string> {
	// Anthropic API 要求 system 消息单独传递
	const systemMessage = messages.find(m => m.role === 'system')?.content || '';
	const chatMessages = messages.filter(m => m.role !== 'system');

	const url = `${config.baseURL.replace(/\/$/, '')}/messages`;
	const useStream = !!onChunk;
	const body = JSON.stringify({
		model: config.model,
		max_tokens: 2048,
		system: systemMessage,
		messages: chatMessages,
		stream: useStream,
	});

	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
		'x-api-key': config.apiKey,
		'anthropic-version': '2023-06-01',
	};

	let response: Response;
	if (typeof eda !== 'undefined' && eda.sys_ClientUrl) {
		response = await eda.sys_ClientUrl.request(url, 'POST', body, { headers });
	}
	else {
		response = await fetch(url, { method: 'POST', headers, body, signal });
	}

	if (!response.ok) {
		const errText = await response.text();
		throw new Error(`API 错误 (${response.status}): ${errText}`);
	}

	if (!useStream) {
		const data = await response.json();
		if (!data.content || !data.content.length) {
			throw new Error('API 返回数据异常');
		}
		return data.content[0].text;
	}

	// 流式读取
	const reader = response.body?.getReader();
	if (!reader) {
		throw new Error('流式响应不可用');
	}

	const decoder = new TextDecoder();
	let fullText = '';
	let buffer = '';

	while (true) {
		if (signal?.aborted) {
			reader.cancel();
			break;
		}
		const { done, value } = await reader.read();
		if (done) {
			break;
		}

		buffer += decoder.decode(value, { stream: true });
		const lines = buffer.split('\n');
		buffer = lines.pop() || '';

		for (const line of lines) {
			const trimmed = line.trim();
			if (!trimmed || !trimmed.startsWith('data: ')) {
				continue;
			}
			const data = trimmed.slice(6);
			try {
				const json = JSON.parse(data);
				// Anthropic 流式格式: { type: "content_block_delta", delta: { text: "..." } }
				if (json.type === 'content_block_delta' && json.delta?.text) {
					const text = json.delta.text;
					fullText += text;
					onChunk!(text);
				}
			}
			catch {
				// 忽略解析错误
			}
		}
	}

	return fullText;
}
