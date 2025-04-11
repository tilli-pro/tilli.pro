import base from "@tilli-pro/eslint-config/base";
import next from "@tilli-pro/eslint-config/nextjs";

const eslintConfig = [
  ...base,
  ...next,
  {
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@next/next/no-page-custom-font": "off"
    }
  }
];

export default eslintConfig;
