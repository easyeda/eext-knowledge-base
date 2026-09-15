# AI Local Knowledge Base

[中文](./README.md)

A RAG-powered intelligent Q&A assistant built with [LangChain.js](https://github.com/langchain-ai/langchainjs).
Import Markdown documents to build a knowledge base. When a question is asked, the assistant automatically retrieves relevant content and uses an AI model to generate an answer.

- Default general-purpose model: [Qwen2.5-0.5B-Instruct-ONNX](https://huggingface.co/JasonYANG170/Qwen2.5-0.5B-Instruct-ONNX)
- Default embedding model: [bge-large-zh-v1.5-ONNX](https://huggingface.co/JasonYANG170/bge-large-zh-v1.5-ONNX)
- Default model source: [🤗 Hugging Face](https://huggingface.co/)

## Features

### ✅ Supports general-purpose model APIs and uses a local embedding model to answer questions based on knowledge-base content

![alt text](images/1.gif)

### ✅ Supports local embedding models for fast keyword searches across knowledge-base content

![alt text](images/search.gif)

### ✅ Supports local general-purpose and embedding models for knowledge-base Q&A

![alt text](images/localai.gif)

### ✅ Includes all documentation from prodocs.lceda.cn for on-demand answers

![alt text](images/2.gif)

### Local Mode

![alt text](images/image4.png)

#### Supported Model Types

The extension is built with Transformers.js and supports ONNX models. On first use, it downloads the default ONNX model from the configured model source. If the model cannot be downloaded, you can import a local ONNX model folder instead. ONNX model files are available from [Hugging Face](https://huggingface.co/) or [ModelScope](https://www.modelscope.cn/). Select the source folder during import and the extension will parse it automatically. Imported files are stored in the browser cache. To conserve storage space, select only the model files you need.

#### Embedding Models

Embeddings for all bundled documents are precomputed when the extension is built. The model used to generate them is shown in Settings. By default, the online model has the same embedding dimensions as the model used for the precomputed embeddings, so the bundled embeddings can be used directly. Using a different embedding model with different dimensions requires regenerating embeddings for every document, which can take a long time and is generally not recommended.

#### LLMs

For a good experience, an LLM with more than 4 billion parameters is recommended. Running an LLM locally consumes a significant amount of memory, so make sure your computer has enough memory for inference. Using an online model is recommended. Alternatively, you can deploy a model locally with a framework such as Ollama and connect to it through an OpenAI-compatible API.

#### Additional Notes

1. Running entirely on local models requires a relatively powerful computer. A multi-core CPU with simultaneous multithreading, high clock speeds, and plenty of memory is recommended.
2. Before a local model can be used, the extension must read it from the cache, load the ONNX files, allocate memory, and initialize WASM. The first run may therefore take some time. Depending on the host computer and model size, temporary unresponsiveness is normal.

## Installation

## Usage

1. In "Advanced" > "Extension Manager," import the `eext-knowledge-base.eext` extension file.

![alt text](images/image1.png)

2. Enable "Allow External Interaction" under "Configuration."

![alt text](images/image2.png)

3. Open a schematic or PCB view, select "Advanced" > "AI Knowledge Base" from the top navigation bar, and choose the feature you need.

![alt text](images/image.png)

## Acknowledgements

- [LangChain.js](https://github.com/langchain-ai/langchainjs) - RAG workflow framework
- [Transformers.js](https://github.com/huggingface/transformers.js) - In-browser model inference
- [Qwen2.5-0.5B-Instruct](https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct) - Open-source bilingual Chinese-English large language model
- [BAAI/bge-large-zh-v1.5](https://huggingface.co/BAAI/bge-large-zh-v1.5) - Open-source bilingual Chinese-English embedding model
- [🤗 Hugging Face](https://huggingface.co/) - Open-source AI community
- [Open Neural Network Exchange](https://github.com/onnx) - ONNX community
