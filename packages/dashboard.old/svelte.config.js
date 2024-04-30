import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: preprocess(),
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
		}
	}
};

export default config;
