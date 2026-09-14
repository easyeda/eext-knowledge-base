# AI 本地知识库

[English](./README.en.md)

基于 [LangChain.js](https://github.com/langchain-ai/langchainjs) 的 RAG 智能问答助手。
导入 Markdown 文档构建知识库，用户提问时自动检索相关内容，通过 AI 模型生成回答。

- 默认向量模型：[bge-large-zh-v1.5](https://huggingface.co/BAAI/bge-large-zh-v1.5)
- 默认通用模型：[Qwen2.5-0.5B-Instruct](https://huggingface.co/onnx-community/Qwen2.5-0.5B-Instruct)
- 无模型缓存时从默认 [🤗Hugging Face](https://huggingface.co/) 官方镜像源拉取，若连接失败也可在设置中自定义镜像站点
- 支持WebGPU,建议独立显卡设备可使用此模式进行推理计算


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

### 本地模式说明

![alt text](images/image4.png)

#### 模型类型说明
扩展基于Transformers.js库构建，支持ONNX模型。首次运行默认会从镜像站在线拉取ONNX模型，若镜像站无法拉取，也可通过本地导入ONNX模型文件夹（可从[🤗HuggingFace](https://huggingface.co/)或[魔塔社区](https://www.modelscope.cn/)获取ONNX模型源文件，本地导入时直接选择源文件夹即可自动解析），导入后文件会存入浏览器缓存，建议导入时只选择需要使用的模型文件，避免占用空间。

#### 向量模型说明
扩展在编译时已经预构建全文档向量，预构建所用模型会在设置中显示，在线拉取的模型默认也是预构建所使用的模型和向量维度，因此可直接使用预构建向量。若使用其他向量模型，因向量维度不同则需要对全部文档重构向量，将耗费大量时间，通常不推荐。

#### LLM模型说明
LLM模型推荐使用大于4B参数的模型才会有良好体验，需要注意的是本地LLM运行会占用大量内存，确保电脑有足够内存用于推理，建议使用在线模型，也可使用ollama等框架本地部署后使用openai格式的api接入。

#### CPU / GPU 推理
设置支持三种设备模式：
- 自动：优先 WebGPU，不可用时使用 CPU；GPU 初始化或尚未输出文本时的推理失败，会销毁原 Worker，再用新 Worker 重试 CPU 一次。
- GPU（仅 WebGPU）：显式使用 GPU。
- CPU（WASM）：强制 CPU。

#### 其他说明
1. 若计划完全使用本地模型会对电脑配置要求较高,建议多核，超线程，高主频，大内存或带独立显卡的设备。
2. 本地模型使用前会读取缓存，加载onnx，分配内存和初始化WASM，因此首次使用需要一些准备时间，受限于主机性能和模型参数，可能会有卡顿是正常现象。

## 致谢

- [LangChain.js](https://github.com/langchain-ai/langchainjs) — RAG 流程框架
- [Transformers.js](https://github.com/huggingface/transformers.js) — 浏览器端模型推理
- [bge-large-zh-v1.5](https://huggingface.co/BAAI/bge-large-zh-v1.5) — 中文嵌入模型
- [Qwen2.5](https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct) — 通义千问开源模型
- [onnx-community](https://huggingface.co/onnx-community) — ONNX社区
- [🤗Hugging Face](https://huggingface.co/) — AI开源社区


