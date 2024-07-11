'use strict';

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: './src/index.ts',
  out: 'docs',
  cleanOutputDir: true,
  sidebarLinks: {
    GitHub: 'https://github.com/hildjj/abc-peg/',
    Documentation: 'http://hildjj.github.io/abc-peg/',
    Spec: 'https://abcnotation.com/wiki/abc:standard:v2.2',
  },
  navigation: {
    includeCategories: false,
    includeGroups: false,
  },
  categorizeByGroup: false,
  sort: ['static-first', 'alphabetical'],
  exclude: ['**/*.spec.ts'],
};
