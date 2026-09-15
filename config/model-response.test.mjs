import assert from 'node:assert/strict';
import { Buffer } from 'node:buffer';
// eslint-disable-next-line test/no-import-node-test -- Use the built-in runner.
import { it } from 'node:test';
import { build } from 'esbuild';

const compiled = await build({ entryPoints: ['iframe/src/model-response.ts'], bundle: true, write: false, format: 'esm' });
const { allocateModelBuffer, readModelResponse, modelCacheStream } = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString('base64')}`);

it('uses WebAssembly memory when the browser rejects an ordinary ArrayBuffer', (t) => {
	const original = globalThis.Uint8Array;
	globalThis.Uint8Array = new Proxy(original, { construct(target, args) {
		if (typeof args[0] === 'number')
			throw new RangeError('simulated Chromium limit');
		return Reflect.construct(target, args);
	} });
	t.after(() => {
		globalThis.Uint8Array = original;
	});
	const buffer = allocateModelBuffer(65539);
	assert.equal(buffer.length, 65539);
	buffer[65538] = 42;
	assert.equal(buffer[65538], 42);
});

it('reads known and unknown length streams exactly and reports completion', async () => {
	const bytes = new Uint8Array(1024 * 1024 + 3).fill(17);
	for (const headers of [{ 'content-length': String(bytes.length) }, {}]) {
		const progress = [];
		const response = new Response(modelCacheStream(bytes), { headers });
		assert.deepEqual(await readModelResponse(response, data => progress.push(data)), bytes);
		assert.deepEqual(progress.at(-1), { loaded: bytes.length, total: bytes.length, progress: 100 });
	}
});

it('rejects truncated model data instead of padding it with zero bytes', async () => {
	await assert.rejects(readModelResponse(new Response(new Uint8Array(2), { headers: { 'content-length': '8' } }), () => {}), /不完整/);
});

it('accepts a Fetch-decoded body whose compressed Content-Length differs', async () => {
	const bytes = new Uint8Array(100).fill(7);
	const response = new Response(bytes, { headers: { 'content-length': '20', 'content-encoding': 'gzip' } });
	assert.deepEqual(await readModelResponse(response, () => {}), bytes);
});
