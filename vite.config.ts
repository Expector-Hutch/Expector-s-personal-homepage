import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
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
