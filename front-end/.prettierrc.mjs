import * as tailwindPlugin from "prettier-plugin-tailwindcss";

/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 100,
  arrowParens: "avoid",
  endOfLine: "auto",
  plugins: [tailwindPlugin],
  tailwindFunctions: ["clsx", "cn"],

  jsxBracketSameLine: false,
  bracketSameLine: false,
  proseWrap: "always",
  embeddedLanguageFormatting: "auto",

  overrides: [
    {
      files: "*.tsx",
      options: {
        printWidth: 80,
      },
    },
  ],
};
