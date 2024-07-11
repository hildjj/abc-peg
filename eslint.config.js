import base from '@cto.af/eslint-config';
import jsdoc_ts from '@cto.af/eslint-config/jsdoc_ts.js';
import mod from '@cto.af/eslint-config/module.js';
import ts from '@cto.af/eslint-config/ts.js';

export default [
  {
    ignores: [
      'lib/**',
      '**/*.d.ts',
    ],
  },
  ...base,
  ...mod,
  ...ts,
  ...jsdoc_ts,
];
