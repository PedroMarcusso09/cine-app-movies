import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import tailwindcss from "eslint-plugin-tailwindcss";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      prettier,
      tailwindcss,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off",

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",

      "prettier/prettier": [
        "warn",
        {
          semi: true,
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "es5",
          printWidth: 100,
          arrowParens: "avoid",
          endOfLine: "auto",
        },
      ],
    },
  },
]);
