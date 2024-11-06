import { defineConfig } from 'vite';
import replace from '@rollup/plugin-replace';

import cdn from 'vite-plugin-cdn-import';

export default defineConfig({
    build: {
        rollupOptions: {
            plugins: [
                replace({
                    preventAssignment: true,
                    values: {
                        "aplayer/dist/APlayer.min.css": "./utils/empty.ts",
                        "tippy.js/dist/tippy.css": "./utils/empty.ts",
                        "tippy.js/dist/backdrop.css": "./utils/empty.ts",
                        "tippy.js/animations/scale.css": "./utils/empty.ts",
                    }
                })
            ]
        }
    },
    plugins: [
        cdn({
            modules: [
                {
                    name: 'aplayer',
                    var: 'aplayer',
                    path: '/cdn/aplayer@1.10.1/dist/APlayer.min.js',
                    css: '/cdn/aplayer@1.10.1/dist/APlayer.min.css'
                },
                {
                    name: 'tippy.js',
                    var: 'tippy.js',
                    path: '/cdn/tippy.js@6.3.7/dist/tippy.esm.min.js',
                    css: [
                        '/cdn/tippy.js@6.3.7/dist/tippy.css',
                        '/cdn/tippy.js@6.3.7/dist/backdrop.css',
                        '/cdn/tippy.js@6.3.7/animations/scale.css',
                    ]
                }
            ]
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
            },
            '/icons': {
                target: 'https://cdn.simpleicons.org',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/icons/, ''),
            },
            '/cdn': {
                target: 'https://cdn.jsdelivr.net/npm',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/cdn/, ''),
            }
        },
    }
});