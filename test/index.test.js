import assert from 'node:assert';
import {foo} from '../lib/index.js';
// eslint-disable-next-line n/no-unsupported-features/node-builtins
import test from 'node:test';

test('index', () => {
  const ver = foo('%abc-2.2');
  assert.deepEqual(ver, [2, 2]);
});
