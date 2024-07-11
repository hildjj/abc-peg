// eslint-disable-next-line n/no-unsupported-features/node-builtins
import test from 'node:test';
import {testPeggy} from '@peggyjs/coverage';

test('grammar coverage', async() => {
  await testPeggy(new URL('../lib/abc.js', import.meta.url), [
    {
      validInput: '%abc-2.2',
      validResult: [2, 2],
      invalidInput: 'bar',
      startRule: 'version',
    },
    {invalidInput: '%abc-', startRule: 'version'},
    {invalidInput: '%abc-!', startRule: 'version'},
    {invalidInput: '%abc-1', startRule: 'version'},
    {invalidInput: '%abc-1!', startRule: 'version'},
    {invalidInput: '%abc-1.', startRule: 'version'},
    {invalidInput: '%abc-1.!', startRule: 'version'},
  ]);
});
