//svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			dir: 'dm',
			pages: 'dm',
			assets: 'dm',
			fallback: 'index.html',
			precompress: true,
			strict: false
		}),
		paths: {
			base: '/dm',
			relative: true,
		},
	}
};

export default config;
