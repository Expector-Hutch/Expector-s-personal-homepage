import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";
import yaml from "@rollup/plugin-yaml";

export default defineConfig({
  base: "./",
  plugins: [
    yaml(),
    Icons({
      autoInstall: true,
      compiler: "raw",
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: "./index.html",
        404: "./404.html",
      },
    },
  },
  server: {
    proxy: {
      "/music": {
        target: "http://music.163.com",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/music/, ""),
      },
    },
  },
});
