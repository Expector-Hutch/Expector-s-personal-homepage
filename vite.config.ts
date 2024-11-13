import { defineConfig } from 'vite';

import Icons from 'unplugin-icons/vite';

export default defineConfig({
    base: '/Expector-s-personal-homepage/',
    plugins: [
        Icons({
            autoInstall: true,
            compiler: 'raw',
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                index: './index.html',
                404: './404.html',
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern',
            },
        },
    },
    server: {
        proxy: {
            '/music': {
                target: 'http://music.163.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/music/, ''),
            },
        },
    },
});
