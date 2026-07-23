// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import path from "path";
import process from "process";
import Icons from "unplugin-icons/vite";
import yaml from "@rollup/plugin-yaml";

const args = process.argv.slice(2);
const shouldInline = args.includes("--inline");

// https://astro.build/config
export default defineConfig({
  server: {
    port: 8000,
  },
  vite: {
    plugins: [
      yaml(),
      Icons({
        autoInstall: true,
        compiler: "raw",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
      },
    },
    build: {
      assetsInlineLimit: shouldInline ? 998244353 : 4096,
    },
    server: {
      proxy: {
        "/hitokoto": {
          target: "https://uapis.cn",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/hitokoto/, ""),
        },
      },
    },
  },
});
