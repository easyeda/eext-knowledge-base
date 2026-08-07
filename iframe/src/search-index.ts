/**
 * 本地搜索索引 - 倒排表 + TF-IDF 打分
 *
 * 分词策略:
 * - CJK 字符（中日韩）: 滑动 2-gram bigram
 * - 数字/拉丁字母: 连续序列作为一个词
 * - 其他字符作为分隔符
 *
 * 索引结构: token -> Map<docId, tf>
 * 文档长度归一化用于 TF-IDF 计算
 */

interface IndexedDoc {
	id: number;
	source: string;
	content: string;
}

interface SearchHit {
	content: string;
	source: string;
	score: number;
	matchedTokens: number;
}

const CJK_RANGE = /[\u4E00-\u9FFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF]/;
const WORD_CHAR = /[a-z0-9]/i;

/** 将文本分词为 token 数组 */
function tokenize(text: string): string[] {
	const tokens: string[] = [];
	const lower = text.toLowerCase();
	const chars = [...lower];
	let i = 0;

	while (i < chars.length) {
		const ch = chars[i];

		// CJK bigram
		if (CJK_RANGE.test(ch)) {
			if (i + 1 < chars.length && CJK_RANGE.test(chars[i + 1])) {
				tokens.push(chars[i] + chars[i + 1]);
			}
			else {
				tokens.push(chars[i]);
			}
			i++;
			continue;
		}

		// Latin/digit word
		if (WORD_CHAR.test(ch)) {
			let j = i + 1;
			while (j < chars.length && WORD_CHAR.test(chars[j])) {
				j++;
			}
			tokens.push(chars.slice(i, j).join(''));
			i = j;
			continue;
		}

		i++;
	}

	return tokens;
}

export class SearchIndex {
	private docs: IndexedDoc[] = [];
	/** token -> Map<docId, termFreq> */
	private inverted: Map<string, Map<number, number>> = new Map();
	/** docId -> doc length (token count) */
	private docLengths: Map<number, number> = new Map();
	private built = false;

	get isBuilt(): boolean {
		return this.built;
	}

	get docCount(): number {
		return this.docs.length;
	}

	/** 设置文档集合并构建索引 */
	build(documents: Array<{ content: string; source: string }>): void {
		this.clear();

		for (let i = 0; i < documents.length; i++) {
			const doc = documents[i];
			const tokens = tokenize(doc.content);
			const id = i;

			this.docs.push({ id, source: doc.source, content: doc.content });
			this.docLengths.set(id, tokens.length);

			// 统计 term frequency
			const tfMap = new Map<string, number>();
			for (const token of tokens) {
				tfMap.set(token, (tfMap.get(token) || 0) + 1);
			}

			// 写入倒排表
			for (const [token, freq] of tfMap) {
				if (!this.inverted.has(token)) {
					this.inverted.set(token, new Map());
				}
				this.inverted.get(token)!.set(id, freq);
			}
		}

		this.built = true;
	}

	/** 清空索引 */
	clear(): void {
		this.docs = [];
		this.inverted.clear();
		this.docLengths.clear();
		this.built = false;
	}

	/**
	 * 关键词搜索，返回按 TF-IDF 分数排序的结果
	 * @param query 用户输入的关键词
	 * @param topK 返回前 K 条
	 */
	search(query: string, topK: number = 10): SearchHit[] {
		if (!this.built || this.docs.length === 0) {
			return [];
		}

		const queryTokens = tokenize(query);
		if (queryTokens.length === 0) {
			return [];
		}

		const N = this.docs.length;
		// 累积每个文档的 TF-IDF 分数
		const scores = new Map<number, number>();
		// 累积每个文档匹配的 query token 数
		const matchedTokens = new Map<number, number>();

		for (const qToken of queryTokens) {
			// 倒排表查找，支持前缀匹配（如查询 "search" 匹配 "searching"）
			const matchingPostings: Array<{ token: string; postings: Map<number, number> }> = [];

			// 精确匹配
			if (this.inverted.has(qToken)) {
				matchingPostings.push({ token: qToken, postings: this.inverted.get(qToken)! });
			}

			// 前缀匹配（仅当精确匹配不足时，且 token 长度 >= 3）
			if (qToken.length >= 3) {
				for (const [invToken, postings] of this.inverted) {
					if (invToken !== qToken && invToken.startsWith(qToken)) {
						matchingPostings.push({ token: invToken, postings });
					}
				}
			}

			if (matchingPostings.length === 0) {
				continue;
			}

			// IDF: 用合并后的文档频率
			const allDocIds = new Set<number>();
			for (const { postings } of matchingPostings) {
				for (const docId of postings.keys()) {
					allDocIds.add(docId);
				}
			}
			const df = allDocIds.size;
			if (df === 0) {
				continue;
			}
			const idf = Math.log((N + 1) / (df + 1)) + 1;

			for (const { postings } of matchingPostings) {
				for (const [docId, freq] of postings) {
					const docLen = this.docLengths.get(docId) || 1;
					// TF 归一化: freq / docLen
					const tf = freq / docLen;
					const tfidf = tf * idf;

					scores.set(docId, (scores.get(docId) || 0) + tfidf);
					matchedTokens.set(docId, (matchedTokens.get(docId) || 0) + 1);
				}
			}
		}

		if (scores.size === 0) {
			return [];
		}

		// 排序: 先按匹配 token 数降序，再按 TF-IDF 分数降序
		const sorted = [...scores.entries()].sort((a, b) => {
			const mtDiff = (matchedTokens.get(b[0]) || 0) - (matchedTokens.get(a[0]) || 0);
			if (mtDiff !== 0) {
				return mtDiff;
			}
			return b[1] - a[1];
		});

		const results: SearchHit[] = [];
		for (const [docId, score] of sorted) {
			const doc = this.docs[docId];
			results.push({
				content: doc.content,
				source: doc.source,
				score,
				matchedTokens: matchedTokens.get(docId) || 0,
			});
			if (results.length >= topK) {
				break;
			}
		}

		return results;
	}
}
