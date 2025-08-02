import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  
  kit: {
    // adapter determines where your app will be deployed
    adapter: adapter(),
    
    // Enable SvelteKit's file-based routing
    files: {
      routes: 'src/routes'
    }
  }
}
