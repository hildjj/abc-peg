import {defineConfig} from 'tsup';
import fs from 'node:fs/promises';
import path from 'node:path';

const src = new URL('./src', import.meta.url);

const files = await fs.readdir(src);
const entry = files
  .filter(f => f.endsWith('.ts') && !f.endsWith('.d.ts'))
  .map(f => path.join('src', f));

export default defineConfig({
  //
  // clean: true,
  dts: true,
  entry,
  format: 'esm',
  minify: true,
  outDir: 'lib',
  sourcemap: false,
  splitting: false,
  target: 'es2022',
  bundle: false,
});
