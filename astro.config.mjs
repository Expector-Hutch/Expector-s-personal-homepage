// @ts-check
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import yaml from "@rollup/plugin-yaml";

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
    server: {
      proxy: {
        "/music/api": {
          target: "https://music.163.com",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/music/, ""),
        },
        "/hitokoto": {
          target: "https://uapis.cn",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/hitokoto/, ""),
        },
      },
    },
  },
});
