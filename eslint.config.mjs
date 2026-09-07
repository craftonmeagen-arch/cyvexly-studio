import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Role-system infrastructure and disposable runtimes are not product source.
    ".codex/**",
    // velora/ is an independent nested git repository (its own history, no
    // remote) confirmed round 91 as a separate sub-project, not Cyvexly
    // product source — see CYVEXLY_APP_DEBT.md round 93.
    "velora/**",
  ]),
]);

export default eslintConfig;
