/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: [
    '@rocketseat/eslint-config/react',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': 'error',
  },
}
