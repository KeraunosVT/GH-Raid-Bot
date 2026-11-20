// `npm run lint`; CI runs it on every push and pull request. Catches what
// the tests only catch if they happen to cover that line: a name used but
// never imported, or a variable meant to be used and isn't.
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  { ignores: ['node_modules/**', 'migrations/**'] },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'commonjs',
      globals: { ...globals.node },
    },
    rules: {
      // Unused callback arguments are routine, unused catch bindings are a
      // deliberate "ignore", and `const { dropped, ...rest } = row` is how a
      // field is left out.
      'no-unused-vars': ['error', { args: 'none', caughtErrors: 'none', ignoreRestSiblings: true }],
    },
  },
];
