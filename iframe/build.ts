import esbuild from 'esbuild';

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
