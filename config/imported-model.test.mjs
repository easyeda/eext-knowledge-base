import assert from 'node:assert/strict';
import { Buffer } from 'node:buffer';
// eslint-disable-next-line test/no-import-node-test -- Use the built-in runner.
import { it } from 'node:test';
import { AutoConfig, env } from '@huggingface/transformers';
import { build } from 'esbuild';

const built = await build({ entryPoints: ['iframe/src/model-store.ts'], bundle: true, write: false, format: 'esm' });
const { stageImportedModel, createImportedModelCache } = await import(`data:text/javascript;base64,${Buffer.from(built.outputFiles[0].text).toString('base64')}`);

function fixture(t) {
	const stores = new Map();
	const original = Object.getOwnPropertyDescriptor(globalThis, 'caches');
	const originalLocation = Object.getOwnPropertyDescriptor(globalThis, 'location');
	Object.defineProperty(globalThis, 'location', { configurable: true, value: { origin: 'https://import-frame.example' } });
	Object.defineProperty(globalThis, 'caches', { configurable: true, value: {
		has: async name => stores.has(name),
		delete: async name => stores.delete(name),
		open: async (name) => {
			if (!stores.has(name)) {
				const data = new Map();
				stores.set(name, {
					put: async (request, response) => data.set(request.url, response.clone()),
					match: async request => data.get(typeof request === 'string' ? request : request.url)?.clone(),
					keys: async () => [...data.keys()].map(url => new Request(url)),
				});
			}
			return stores.get(name);
		},
	} });
	t.after(() => {
		for (const [key, descriptor] of [['caches', original], ['location', originalLocation]]) {
			if (descriptor)
				Object.defineProperty(globalThis, key, descriptor);
			else Reflect.deleteProperty(globalThis, key);
		}
	});
	return stores;
}

function modelFiles() {
	return [['config.json', JSON.stringify({ model_type: 'bert', hidden_size: 4 })], ['tokenizer.json', '{}'], ['onnx/model_quantized.onnx', 'fixture']].map(([path, content]) => {
		const file = new File([content], path.split('/').pop());
		Object.defineProperty(file, 'webkitRelativePath', { value: `model/${path}` });
		return file;
	});
}

it('reads imported config and ONNX bytes by stored keys after the Worker origin changes', async (t) => {
	fixture(t);
	const model = await stageImportedModel(modelFiles(), 'feature-extraction');
	globalThis.location.origin = 'https://worker-frame.example';
	const cache = createImportedModelCache(model);
	await cache.prepare();
	const config = await cache.match(`/models/imported/${model.id}/config.json`);
	assert.equal((await config.json()).model_type, 'bert');
	assert.equal(await (await cache.match(`https://hf-mirror.com/imported/${model.id}/resolve/main/onnx/model_quantized.onnx`)).text(), 'fixture');
	assert.equal(await cache.match(`/models/imported/${model.id}/optional.json`), undefined);
});

it('loads config with the actual Transformers.js offline loader without fetching', async (t) => {
	fixture(t);
	const model = await stageImportedModel(modelFiles(), 'feature-extraction');
	globalThis.location.origin = 'https://worker-frame.example';
	const keys = ['allowLocalModels', 'allowRemoteModels', 'useBrowserCache', 'useFSCache', 'useCustomCache', 'customCache', 'fetch'];
	const saved = Object.fromEntries(keys.map(key => [key, env[key]]));
	t.after(() => Object.assign(env, saved));
	let fetches = 0;
	Object.assign(env, { allowLocalModels: true, allowRemoteModels: false, useBrowserCache: false, useFSCache: false, useCustomCache: true, customCache: createImportedModelCache(model), fetch: async () => {
		fetches++;
		throw new Error('Network access is forbidden');
	} });
	const config = await AutoConfig.from_pretrained(`imported/${model.id}`, { local_files_only: true });
	assert.equal(config.model_type, 'bert');
	assert.equal(config.hidden_size, 4);
	assert.equal(fetches, 0);
});

it('reports absent cache before the loader can hide the storage error', async (t) => {
	const stores = fixture(t);
	const model = await stageImportedModel(modelFiles(), 'feature-extraction');
	stores.clear();
	await assert.rejects(createImportedModelCache(model).prepare(), { name: 'ModelCacheError', message: /cache is missing/ });
});
