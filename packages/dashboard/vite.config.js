import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		_global: {}
	},
	build: {
		emptyOutDir: true
	}
});
