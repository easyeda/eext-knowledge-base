# AI Local Knowledge Base

A RAG-based intelligent Q&A assistant powered by [LangChain.js](https://github.com/langchain-ai/langchainjs).  
Import Markdown documents to build a knowledge base. When users ask questions, the system automatically retrieves relevant content and generates answers via AI models.

Embedding model: [bge-small-zh-v1.5](https://huggingface.co/BAAI/bge-small-zh-v1.5)  
Uses [hf-mirror](https://hf-mirror.com/) mirror by default for model downloads

## Features
✅ Built-in lightweight embedding model for custom knowledge base  
![alt text](images/1.gif)

✅ Integrated with wiki.lceda.cn PCB design & manufacturing docs — ask anything about design and production  
![alt text](images/2.gif)

## Installation
## Usage
1. Import the eext-knowledge-base.eext extension file in "Advanced" → "Extension Manager".  
![alt text](images/image1.png)

2. Enable "Allow External Interaction" in the configuration.  
![alt text](images/image2.png)

3. Open a schematic or PCB view, click "Advanced" → "AI Knowledge Base" in the top navigation bar and select the desired function.  
![alt text](images/image.png)
