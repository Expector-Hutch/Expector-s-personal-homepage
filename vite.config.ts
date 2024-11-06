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
                    path: 'dist/APlayer.min.js',
                    css: 'dist/APlayer.min.css'
                },
                {
                    name: 'tippy.js',
                    var: 'tippy.js',
                    path: 'dist/tippy.esm.min.js',
                    css: [
                        'dist/tippy.css',
                        'dist/backdrop.css',
                        'animations/scale.css',
                    ]
                }
            ],
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
            // '/cdn': {
            //     target: 'https://cdn.jsdelivr.net/npm',
            //     changeOrigin: true,
            //     rewrite: (path) => path.replace(/^\/cdn/, ''),
            // }
        },
    }
});