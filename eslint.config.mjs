import base from "@tilli-pro/eslint-config";

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  ...base,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      }
    }
  }
]