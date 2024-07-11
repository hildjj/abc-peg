import {parse} from '../lib/abc.js';

export function foo(text: string): unknown {
  return parse(text);
}
