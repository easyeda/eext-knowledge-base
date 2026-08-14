import antfu from '@antfu/eslint-config';

export default antfu({
	stylistic: {
		indent: 'tab',
		quotes: 'single',
		semi: true,
	},

	typescript: true,

	ignores: ['build/dist/', 'coverage/', 'dist/', 'node_modules/', '.eslintcache', 'debug.log', 'iframe/app.js', 'iframe/model-manager.js', 'iframe/local-llm-worker.js', 'iframe/local-llm-worker.bundle.txt', 'iframe/src/builtin-vectors.json', 'iframe/docs/'],
});
