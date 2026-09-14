import assert from 'node:assert/strict';
import { Buffer } from 'node:buffer';
// eslint-disable-next-line test/no-import-node-test -- Use the built-in runner.
import { it } from 'node:test';
import { build } from 'esbuild';

async function load(entry) {
	const result = await build({ entryPoints: [entry], bundle: true, write: false, format: 'esm', plugins: [{
		name: 'worker-fixture',
		setup(builder) {
			builder.onLoad({ filter: /\.bundle\.txt$/ }, () => ({ contents: '', loader: 'text' }));
		},
	}] });
	return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
}
const { InferenceClient } = await load('iframe/src/inference-client.ts');
const { selectDevice, normalizeDevice } = await load('iframe/src/inference-device.ts');

function replaceGlobal(t, key, value) {
	const old = Object.getOwnPropertyDescriptor(globalThis, key);
	Object.defineProperty(globalThis, key, { value, configurable: true });
	t.after(() => {
		if (old)
			Object.defineProperty(globalThis, key, old);
		else Reflect.deleteProperty(globalThis, key);
	});
}

function workers(t, handler) {
	const all = [];
	class FakeWorker extends EventTarget {
		terminated = false;
		requests = [];
		constructor() {
			super();
			all.push(this);
		}

		postMessage(request) {
			this.requests.push(request);
			if (request.type === 'init')
				this.backend = request.payload.device === 'cpu' ? 'wasm' : 'webgpu';
			queueMicrotask(() => handler(this, request));
		}

		send(request, type, data = {}) {
			this.dispatchEvent(new MessageEvent('message', { data: { id: request.id, backend: this.backend, type, ...data } }));
		}

		terminate() { this.terminated = true; }
	}
	replaceGlobal(t, 'Worker', FakeWorker);
	return all;
}

it('uses CPU without probing GPU and accepts the reference wasm alias', async (t) => {
	replaceGlobal(t, 'navigator', { get gpu() {
		throw new Error('unexpected GPU probe');
	} });
	assert.equal(await selectDevice('cpu'), 'wasm');
	assert.equal(normalizeDevice('wasm'), 'cpu');
});

it('falls back only in auto mode when no adapter is available', async (t) => {
	replaceGlobal(t, 'navigator', { gpu: { requestAdapter: async () => null } });
	assert.equal(await selectDevice('auto'), 'wasm');
	await assert.rejects(selectDevice('webgpu'), /WebGPU unavailable/);
});

it('recreates a Worker after GPU initialization failure and reuses the CPU model', async (t) => {
	const all = workers(t, (worker, request) => {
		if (worker.backend === 'webgpu')
			worker.send(request, 'error', { message: 'GPU failed' });
		else worker.send(request, 'done', { vectors: [[1, 2]] });
	});
	const client = new InferenceClient({ kind: 'feature-extraction', device: 'auto' });
	t.after(() => client.dispose());
	assert.deepEqual((await client.run('embed', { documents: ['a'] })).vectors, [[1, 2]]);
	await client.run('embed', { documents: ['b'] });
	assert.equal(all.length, 2);
	assert.equal(all[0].terminated, true);
	assert.equal(all[1].requests.filter(r => r.type === 'init').length, 1);
	assert.equal(all[1].requests[0].payload.device, 'cpu');
});

it('retries GPU execution failures before output but never forced GPU', async (t) => {
	const all = workers(t, (worker, request) => {
		worker.send(request, request.type === 'embed' && worker.backend === 'webgpu' ? 'error' : 'done', { message: 'GPU lost', vectors: [[3]] });
	});
	const auto = new InferenceClient({ kind: 'feature-extraction', device: 'auto' });
	t.after(() => auto.dispose());
	assert.deepEqual((await auto.run('embed', { documents: ['a'] })).vectors, [[3]]);
	const forced = new InferenceClient({ kind: 'feature-extraction', device: 'webgpu' });
	t.after(() => forced.dispose());
	await assert.rejects(forced.run('embed'), /GPU lost/);
	assert.equal(all.length, 3);
});

it('does not retry after streaming part of a response', async (t) => {
	const all = workers(t, (worker, request) => {
		if (request.type === 'init') {
			worker.send(request, 'done');
		}
		else {
			worker.send(request, 'token', { text: 'partial' });
			worker.send(request, 'error', { message: 'GPU lost' });
		}
	});
	const client = new InferenceClient({ kind: 'text-generation', device: 'auto' });
	const tokens = [];
	await assert.rejects(client.run('generate', {}, text => tokens.push(text)), /GPU lost/);
	assert.deepEqual(tokens, ['partial']);
	assert.equal(all.length, 1);
	assert.equal(all[0].terminated, true);
});

it('cancels pending and queued work without starting a fallback Worker', async (t) => {
	const all = workers(t, () => {});
	const client = new InferenceClient({ kind: 'text-generation', device: 'auto' });
	const pending = client.run('generate');
	const queued = client.run('generate');
	await new Promise(resolve => setTimeout(resolve, 0));
	client.dispose();
	await assert.rejects(pending, { name: 'AbortError' });
	await assert.rejects(queued, { name: 'AbortError' });
	assert.equal(all.length, 1);
	assert.equal(all[0].terminated, true);
});

it('reports CPU Worker crashes and permits a later retry', async (t) => {
	const all = workers(t, (worker, request) => {
		if (all.length === 1)
			worker.dispatchEvent(Object.assign(new Event('error'), { message: 'Worker crashed' }));
		else worker.send(request, 'done');
	});
	const client = new InferenceClient({ kind: 'feature-extraction', device: 'cpu' });
	t.after(() => client.dispose());
	await assert.rejects(client.run(), /Worker crashed/);
	await client.run();
	assert.equal(client.isLoaded, true);
	assert.equal(all.length, 2);
});

it('propagates CPU failure after exactly one automatic retry', async (t) => {
	const all = workers(t, (worker, request) => worker.send(request, 'error', { message: `${worker.backend} failed` }));
	const client = new InferenceClient({ kind: 'feature-extraction', device: 'auto' });
	await assert.rejects(client.run(), /wasm failed/);
	assert.equal(all.length, 2);
	assert(all.every(worker => worker.terminated));
});

it('does not restart on CPU for a model network failure', async (t) => {
	const all = workers(t, (worker, request) => worker.send(request, 'error', { name: 'ModelDownloadError', message: 'download failed' }));
	const client = new InferenceClient({ kind: 'feature-extraction', device: 'auto' });
	await assert.rejects(client.run(), { name: 'ModelDownloadError' });
	assert.equal(all.length, 1);
	assert.equal(all[0].terminated, true);
});

it('does not retry model cache errors on CPU', async (t) => {
	const all = workers(t, (worker, request) => worker.send(request, 'error', { name: 'ModelCacheError', message: 'cache missing' }));
	const client = new InferenceClient({ kind: 'feature-extraction', device: 'auto' });
	await assert.rejects(client.run(), { name: 'ModelCacheError' });
	assert.equal(all.length, 1);
});
