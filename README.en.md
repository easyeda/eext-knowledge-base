# AI Knowledge Base Assistant

EasyEDA Pro extension plugin — a RAG-based intelligent Q&A assistant powered by LangChain.js.

Import Markdown documents to build a knowledge base. When users ask questions, the system automatically retrieves relevant content and generates answers via the MiniMax AI model.

## Features

- 📚 Markdown document import with folder management (collapse/expand/rename/delete)
- 🔍 Semantic vector search (bge-small-zh-v1.5, Transformers.js browser-side inference)
- 🧠 Pre-built vectors for built-in knowledge base — ready on startup, zero wait
- 💬 Multi-turn conversation with context history
- ⚙️ Configurable API Key, model, API endpoint, and embedding model mirror

## Architecture

```
Built-in docs → Node.js pre-built vectors (bge-small-zh-v1.5) → JSON embedded in app.js
                                                                    ↓
User uploads → Browser Transformers.js real-time vectorization → MemoryVectorStore
                                                                    ↓
User query → Vector similarity search → LangChain ChatPromptTemplate → MiniMax API → Answer
```

Core dependencies:
- [LangChain.js](https://github.com/langchain-ai/langchainjs) — MemoryVectorStore, RecursiveCharacterTextSplitter, ChatPromptTemplate
- [Transformers.js](https://github.com/huggingface/transformers.js) — Browser-side bge-small-zh-v1.5 ONNX inference
- [MiniMax](https://platform.minimaxi.com/) — OpenAI-compatible LLM API

## Quick Start

1. Install dependencies

```shell
npm install
```

2. Place built-in knowledge base Markdown files under `iframe/docs/` (subfolders supported)

3. Build the extension

```shell
npm run build
```

Build pipeline:
- `prebuild-vectors.ts` — Reads `iframe/docs/**/*.md`, generates vectors with bge-small-zh-v1.5, outputs `builtin-vectors.json`
- `iframe/build.ts` — esbuild bundles iframe code (LangChain.js + Transformers.js + pre-built vectors)
- `esbuild.prod.ts` — Compiles plugin main process `src/index.ts`
- `packaged.ts` — Packages `.eext` extension

4. Install the `.eext` file from `build/dist/` in EasyEDA Pro

5. Top menu **AI Assistant → Settings...** to configure MiniMax API Key

6. Top menu **AI Assistant → Open AI Assistant** to open the assistant window

## Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Full build (pre-build vectors + compile + package) |
| `npm run compile` | Compile plugin main process only |
| `npm run compile:iframe` | Pre-build vectors + bundle iframe |
| `npm run lint` | ESLint check |
| `npm run fix` | ESLint auto-fix |

## Configuration

Configure in the plugin's **Settings...** page:

| Setting | Default | Description |
|---------|---------|-------------|
| API Key | — | MiniMax API key |
| Model | MiniMax-M2.5 | LLM model name |
| API URL | https://api.minimaxi.com/v1 | OpenAI-compatible endpoint |
| Model Host | https://hf-mirror.com | Embedding model CDN (hf-mirror.com recommended for China) |

## Project Structure

```
├── src/index.ts              # Plugin main process (menu registration, open iframe)
├── iframe/
│   ├── index.html            # Chat interface
│   ├── settings.html         # Settings page
│   ├── style.css             # Styles
│   ├── src/
│   │   ├── main.ts           # Chat page logic (folder management, Q&A)
│   │   ├── rag.ts            # RAG engine (retrieval + LLM call)
│   │   ├── embeddings.ts     # Transformers.js embedding wrapper
│   │   ├── builtin-docs.ts   # Pre-built vector loader
│   │   └── builtin-vectors.json  # Pre-built vector data (generated at build time)
│   ├── docs/                 # Built-in knowledge base Markdown files
│   ├── build.ts              # iframe esbuild config
│   └── prebuild-vectors.ts   # Pre-build vector script
├── extension.json            # Extension manifest
└── package.json
```

## License

[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)
