import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern'
            }
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://music.163.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    }
});