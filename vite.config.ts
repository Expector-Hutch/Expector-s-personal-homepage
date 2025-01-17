import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';

import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			autoInstall: true,
			compiler: 'svelte',
		}),
	],
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
