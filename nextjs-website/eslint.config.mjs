import baseConfig, { restrictEnvAccess } from "@tilli-pro/eslint-config";
import nextjsConfig from "@tilli-pro/eslint-config/nextjs";
import reactConfig from "@tilli-pro/eslint-config/react";

export default [
  {
    ignores: [".next/**"]
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];