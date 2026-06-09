# AI Local Knowledge Base

[中文](./README.md)

A RAG-based intelligent Q&A assistant powered by [LangChain.js](https://github.com/langchain-ai/langchainjs).
Import Markdown documents to build a knowledge base. When users ask questions, the system automatically retrieves relevant content and generates answers via AI models.

- Default embedding model: [bge-large-zh-v1.5](https://huggingface.co/BAAI/bge-large-zh-v1.5)
- Default general model: [Qwen2.5-0.5B-Instruct](https://huggingface.co/onnx-community/Qwen2.5-0.5B-Instruct)
- When the browser has no model cache, it will download from [HF-Mirror](https://hf-mirror.com/) by default and cache it
- Once cached, it no longer depends on the network. You can integrate with [Ollama](https://ollama.com/) locally deployed general models for complete local deployment

**Recommended to use this extension in the EasyEDA Pro client**
**Local AI requires good computer performance and memory. It is recommended to use 1.5B or larger models for a better experience**


## Features
### ✅ Support connecting to general model API, with local vector model enabling intelligent Q&A based on knowledge base content

![alt text](images/1.gif)

### ✅ Support local vector model for fast keyword search of knowledge base content

![alt text](images/search.gif)

### ✅ Support local general model + vector model for knowledge base Q&A

![alt text](images/localai.gif)

### ✅ Integrate all documents from prodocs.lceda.cn, with instant Q&A for any issues encountered

![alt text](images/2.gif)

## Installation
## Usage
1. Import the eext-knowledge-base.eext extension file in "Advanced" → "Extension Manager".
![alt text](images/image1.png)

2. Enable "Allow External Interaction" in the configuration.
![alt text](images/image2.png)

3. Open a schematic or PCB view, click "Advanced" → "AI Knowledge Base" in the top navigation bar and select the desired function.
![alt text](images/image.png)

## Acknowledgements

- [LangChain.js](https://github.com/langchain-ai/langchainjs) — RAG framework (MIT)
- [Transformers.js](https://github.com/huggingface/transformers.js) — Browser-side model inference (Apache-2.0)
- [bge-large-zh-v1.5](https://huggingface.co/BAAI/bge-large-zh-v1.5) — Chinese embedding model (MIT)
- [HF-Mirror](https://hf-mirror.com/) — Hugging Face mirror for China
