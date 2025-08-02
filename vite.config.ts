import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig(({ mode }) => {
  // You can add your own env logic or use process.env
  // For GitHub Pages, set an env variable like BASE_PATH=/CTC/
  // For other hosts, use BASE_PATH=/
  const base = process.env.BASE_PATH || '/';

  return {
    plugins: [sveltekit()],
    base,
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: true,
      allowedHosts: [
        'breadoorr.github.io',
        'ctc-ddorabbles-projects.vercel.app',
        'ctc.cy'
      ],
      hmr: {
        // Only use secure WebSockets in production
        ...(process.env.NODE_ENV === 'production' ? {
          clientPort: 443,
          protocol: 'wss'
        } : {})
      }
    }
  }
});
