import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import process from 'node:process';
import esbuild from 'esbuild';
import { transformersLargeFiles } from '../config/transformers-large-files';

const ortDist = dirname(require.resolve('onnxruntime-web'));
const nativeLoader = readFileSync(join(ortDist, 'ort-wasm-simd-threaded.asyncify.mjs'), 'utf8');
if (!nativeLoader.includes('webgpuGetBuffer'))
	throw new Error('The bundled ORT loader must support native WebGPU GPU buffers.');
const ortDefines = {
	__ORT_NATIVE_MJS_SOURCE__: JSON.stringify(nativeLoader),
	__ORT_NATIVE_WASM_BASE64__: JSON.stringify(readFileSync(join(ortDist, 'ort-wasm-simd-threaded.asyncify.wasm')).toString('base64')),
};

async function main(): Promise<void> {
// 1. Build worker first
	await esbuild.build({
		plugins: [transformersLargeFiles()],
		entryPoints: ['iframe/src/local-llm-worker.ts'],
		bundle: true,
		outfile: 'iframe/local-llm-worker.bundle.txt',
		format: 'esm',
		platform: 'browser',
		target: 'es2020',
		minify: false,
		sourcemap: false,
		define: {
			...ortDefines,
			'process.env.NODE_ENV': '"production"',
		},
	});

	// 3. Build the standalone settings model manager.
	esbuild.buildSync({
		entryPoints: ['iframe/src/model-manager.ts'],
		bundle: true,
		outfile: 'iframe/model-manager.js',
		loader: { '.txt': 'text' },
		format: 'iife',
		platform: 'browser',
		target: 'es2020',
		minify: false,
		sourcemap: false,
		define: {
			'process.env.NODE_ENV': '"production"',
		},
	});

	// 2. Build main app (imports worker bundle as text)
	esbuild.buildSync({
		entryPoints: ['iframe/src/main.ts'],
		bundle: true,
		outfile: 'iframe/app.js',
		format: 'iife',
		platform: 'browser',
		target: 'es2020',
		minify: false,
		sourcemap: false,
		loader: {
			'.md': 'text',
			'.txt': 'text',
		},
		define: {
			'process.env.NODE_ENV': '"production"',
			'process.env.LANGCHAIN_TRACING_V2': '""',
			'process.env.LANGCHAIN_API_KEY': '""',
			'process.env.LANGCHAIN_CALLBACKS_BACKGROUND': '""',
		},
	});

	// eslint-disable-next-line no-console
	console.log('【Done】 iframe/app.js built successfully');
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
