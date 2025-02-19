// import { dirname } from "path";
// import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

const compat = new FlatCompat();

export default [
  ...compat.config({
    extends: ["next/core-web-vitals"],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    env: {
      browser: true,
      es2021: true,
    },
    rules: {
      // Add your custom rules here
    },
  }),
];
