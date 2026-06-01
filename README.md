# AI 本地知识库

基于 [LangChain.js](https://github.com/langchain-ai/langchainjs) 的 RAG 智能问答助手。
导入 Markdown 文档构建知识库，用户提问时自动检索相关内容，通过 AI 模型生成回答。

- 默认向量模型：[bge-large-zh-v1.5](https://huggingface.co/BAAI/bge-large-zh-v1.5)
- 默认通用模型：[Qwen2.5-0.5B-Instruct](https://huggingface.co/onnx-community/Qwen2.5-0.5B-Instruct)
- 浏览器无模型缓存时将默认从 [HF-Mirror](https://hf-mirror.com/) 镜像站拉取并缓存
- 缓存后将不再依赖于网络，可接入 [Ollama](https://ollama.com/) 本地部署通用模型实现完全本地化

**建议在嘉立创EDA专业版客户端使用此扩展**  
**本地AI需要你有较好的电脑性能和内存，建议使用1.5B或以上模型才会有较好体验**  
推荐使用免费的API，如[硅基流动/Qwen3.5-4B](https://cloud.siliconflow.cn/me/models?target=Qwen%2FQwen3.5-4B)

## 功能
### ✅ 支持接入通用模型API，借助本地向量模型可实现根据知识库内容的智能答疑

![alt text](images/1.gif)

### ✅ 支持本地向量模型，可完成知识库内容的快速关键词检索

![alt text](images/search.gif)

### ✅ 支持本地通用模型+向量模型，实现根据知识库内容问答

![alt text](images/localai.gif)

### ✅ 集成prodocs.lceda.cn全部文档，遇到问题随问随答

![alt text](images/2.gif)

## 安装
## 使用方法
1.在"高级"-"扩展管理器"中导入eext-knowledge-base.eext扩展文件。
![alt text](images/image1.png)

2.在"配置"中开启"允许外部交互"选项
![alt text](images/image2.png)

3.进入原理图或PCB界面，点击顶部导航栏"高级"-"AI 知识库"选择需要的功能即可。
![alt text](images/image.png)

## 致谢

- [LangChain.js](https://github.com/langchain-ai/langchainjs) — RAG 流程框架（MIT）
- [Transformers.js](https://github.com/huggingface/transformers.js) — 浏览器端模型推理（Apache-2.0）
- [bge-large-zh-v1.5](https://huggingface.co/BAAI/bge-large-zh-v1.5) — 中文嵌入模型（MIT）
- [HF-Mirror](https://hf-mirror.com/) - Hungging Face国内公益镜像站
