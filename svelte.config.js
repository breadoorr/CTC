import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import vercelAdapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  
  kit: {
    // adapter determines where your app will be deployed
    adapter: vercelAdapter({
      // Specify Node.js 20.x as the runtime
      runtime: 'nodejs20.x'
    }),
    
    // Enable SvelteKit's file-based routing
    files: {
      routes: 'src/routes'
    }
  }
}
