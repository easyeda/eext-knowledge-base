# 更新日志

## 1.4.1

### 初版发布

- 基于 LangChain.js 构建完整 RAG 流程
- 浏览器端 Transformers.js 本地实时向量化，采用 bge-small-zh-v1.5 模型（512维，ONNX 量化）
- 内置基于 wiki.lceda.cn 学习章节的知识库预构建向量
- 支持导入 Markdown 文档，构建自定义知识库
- 兼容 OpenAI API 格式，可接入本地 Ollama 实现全离线知识库问答
- 模型源位于HuggingFace,默认使用hf-mirror镜像站拉取（首次加载需要）
- 适配流式输出