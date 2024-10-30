import globals from "globals"
import pluginJs from "@eslint/js"
import eslintPluginPrettier from "eslint-plugin-prettier"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    ignores: ["src/dist", "postcss.config.js", "tailwind.config.js", "vite.config.js"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error",
    },
  },
]
