import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		
		
		vite:{
			server:{
				hmr: process.env.GITPOD_WORKSPACE_URL
         		 ? {
              // removes the protocol and replaces it with the port we're connecting to
              host: process.env.GITPOD_WORKSPACE_URL.replace('https://', '3000-'),
              protocol: 'wss',
              clientPort: 443
           		 }
         		 : true
			}
		}
	}
};

export default config;
