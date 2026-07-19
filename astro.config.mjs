// @ts-check
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 8000,
  },
  vite: {
    plugins: [
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
      },
    },
  },
});
