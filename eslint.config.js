const tseslint = require('typescript-eslint')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = tseslint.config(
  {
    ignores: ['dist/**', 'coverage/**'],
  },
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        vi: 'readonly',
      },
    },
  },
)
