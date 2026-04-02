// eslint.config.mjs
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default [
    // 忽略文件
    {
        ignores: ["dist/**", "node_modules/**", "*.d.ts", "coverage/**"],
    },

    // JavaScript 基础规则
    js.configs.recommended,

    // TypeScript 配置
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: import.meta.dirname,
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser, // 包含 customElements, window, document 等
                ...globals.es2021, // ES2021 全局变量
            },
        },
        // ✅ 正确定义 plugins 对象，键名是插件的命名空间
        plugins: {
            "@typescript-eslint": ts,
            prettier: prettierPlugin, // 这里定义了 "prettier" 命名空间
        },
        rules: {
            // TypeScript 推荐规则
            ...ts.configs.recommended.rules,

            // Prettier 规则 - 使用上面定义的 "prettier" 命名空间
            "prettier/prettier": "error",

            // 自定义规则
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-explicit-any": "warn",

            // 禁用与 Prettier 冲突的格式规则
            indent: "off",
            quotes: "off",
            semi: "off",
        },
    },

    // ✅ Prettier 配置必须作为单独的对象放在最后，用于关闭冲突规则
    prettierConfig,
];
