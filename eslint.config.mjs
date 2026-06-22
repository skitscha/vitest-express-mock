import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import vitest from '@vitest/eslint-plugin'

export default defineConfig([
  globalIgnores(['dist/**', 'coverage/**']),
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      // The library and its tests rely on Vitest globals (`vi`, `expect`, ...)
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
  {
    files: ['src/test/**/*.test.ts'],
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
  // Keep last so Prettier wins over any conflicting formatting rules
  eslintConfigPrettier,
])
