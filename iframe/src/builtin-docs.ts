/**
 * 预构建的内置知识库向量
 *
 * 由 iframe/prebuild-vectors.ts 在构建时生成。
 * 包含文档块文本、来源和预计算的向量，浏览器端直接加载，无需再做 embedding。
 */

// @ts-expect-error json imported via esbuild
import builtinVectorsJson from './builtin-vectors.json';

export interface VectorEntry {
	text: string;
	source: string;
	vector: number[];
}

export const builtinVectors: VectorEntry[] = builtinVectorsJson;
