import { Buffer } from 'node:buffer';
/**
 * 预构建向量脚本 — 在 Node.js 中运行
 *
 * 读取 iframe/docs/*.md → 切分 → 用 bge-large-zh-v1.5 生成向量 → 输出 JSON
 * 构建时运行：ts-node iframe/prebuild-vectors.ts
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from '@huggingface/transformers';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';

const DOCS_DIR = join(__dirname, 'docs');
const OUTPUT_FILE = join(__dirname, 'src', 'builtin-vectors.json');
const MODEL_NAME = 'Xenova/bge-large-zh-v1.5';

interface VectorEntry {
	text: string;
	source: string;
	vector: number[];
}

const TABLE_ROW_RE = /^\|.+\|$/;
const TABLE_SEP_RE = /^\|[\s:|-]+\|$/;

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

async function main() {
	// 1. 递归读取所有 md 文件
	const allFiles: Array<{ path: string; source: string }> = [];

	function scanDir(dir: string, prefix: string) {
		const entries = readdirSync(dir, { withFileTypes: true });
		for (const entry of entries) {
			const fullPath = join(dir, entry.name);
			if (entry.isDirectory()) {
				scanDir(fullPath, prefix ? `${prefix}/${entry.name}` : entry.name);
			}
			else if (entry.name.endsWith('.md')) {
				allFiles.push({
					path: fullPath,
					source: prefix ? `${prefix}/${entry.name}` : entry.name,
				});
			}
		}
	}

	scanDir(DOCS_DIR, '');

	if (allFiles.length === 0) {
		console.warn('【Warn】 iframe/docs/ 中没有 .md 文件');
		writeFileSync(OUTPUT_FILE, '[]');
		return;
	}

	console.warn(`【Docs】 找到 ${allFiles.length} 个文档`);

	// 2. 切分
	const splitter = new RecursiveCharacterTextSplitter({
		chunkSize: 450,
		chunkOverlap: 100,
	});

	const chunks: Array<{ text: string; source: string }> = [];
	for (const file of allFiles) {
		const content = readFileSync(file.path, 'utf-8');
		const docs = await splitter.createDocuments([content], [{ source: file.source }]);
		for (const doc of docs) {
			chunks.push({ text: repairTableChunk(doc.pageContent, content), source: doc.metadata.source });
		}
	}

	console.warn(` 切分为 ${chunks.length} 个文档块`);

	// 3. 生成向量
	console.warn(' 加载 Embedding 模型...');
	const extractor = await pipeline('feature-extraction', MODEL_NAME, {
		dtype: 'q8',
	});

	const entries: VectorEntry[] = [];
	const batchSize = 8;

	for (let i = 0; i < chunks.length; i += batchSize) {
		const batch = chunks.slice(i, i + batchSize);
		const texts = batch.map(c => c.text);
		const output = await extractor(texts, { pooling: 'mean', normalize: true, truncation: true } as any);

		for (let j = 0; j < batch.length; j++) {
			const vec = (output as any)[j];
			entries.push({
				text: batch[j].text,
				source: batch[j].source,
				vector: Array.from(vec.data),
			});
		}

		console.warn(`  向量化进度: ${Math.min(i + batchSize, chunks.length)}/${chunks.length}`);
	}

	// 4. 输出 JSON
	writeFileSync(OUTPUT_FILE, JSON.stringify(entries));
	const sizeMB = (Buffer.byteLength(JSON.stringify(entries)) / 1024 / 1024).toFixed(2);
	console.warn(`【Done】 已生成 ${OUTPUT_FILE} (${entries.length} 条, ${sizeMB} MB)`);
}

main().catch(console.error);
