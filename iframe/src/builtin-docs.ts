/**
 * 内置知识库文档文本，不包含向量。
 *
 * 由 iframe/build-docs.ts 整理 Markdown 片段，用户在插件内构建向量。
 */

// @ts-expect-error json imported via esbuild
import builtinDocumentsJson from './builtin-documents.json';

export interface VectorEntry {
	text: string;
	source: string;
	vector: number[];
}

export const builtinDocuments: Array<{ text: string; source: string }> = builtinDocumentsJson;
