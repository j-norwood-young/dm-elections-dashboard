//svelte.config.js
import path from 'path';

const config = {
	kit: {
		alias: {
			$components: path.resolve('./src/components')
		}
	}
};

export default config;
