import js from "@eslint/js"
import reactHooks from "eslint-plugin-react-hooks";
import next from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "@next/next": next,
    },
    rules: {
      ...next.configs["core-web-vitals"].rules,

      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
