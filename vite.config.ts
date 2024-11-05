import { defineConfig } from 'vite';

export default defineConfig({
    assetsInclude: ["**/*.ttf"],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern'
            }
        }
    },
    server: {
        proxy: {
            '/music': {
                target: 'http://music.163.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/music/, ''),
            },
        },
    }
});