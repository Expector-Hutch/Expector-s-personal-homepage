import { defineConfig } from 'vite';

import Icons from 'unplugin-icons/vite';

export default defineConfig({
    plugins: [
        Icons({
            autoInstall: true,
            compiler: 'raw',
        })
    ],
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
            }
        },
    }
});