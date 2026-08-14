import esbuild from 'esbuild';

// 1. Build worker first
esbuild.buildSync({
	entryPoints: ['iframe/src/local-llm-worker.ts'],
	bundle: true,
	outfile: 'iframe/local-llm-worker.bundle.txt',
	format: 'esm',
	platform: 'browser',
	target: 'es2020',
	minify: false,
	sourcemap: false,
	define: {
		'process.env.NODE_ENV': '"production"',
	},
});

// 3. Build the standalone settings model manager.
esbuild.buildSync({
	entryPoints: ['iframe/src/model-manager.ts'],
	bundle: true,
	outfile: 'iframe/model-manager.js',
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
