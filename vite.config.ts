import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig(({ mode }) => {
  // You can add your own env logic or use process.env
  // For GitHub Pages, set an env variable like BASE_PATH=/CTC/
  // For other hosts, use BASE_PATH=/
  const base = process.env.BASE_PATH || '/';

  return {
    plugins: [svelte()],
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
        clientPort: 443,
        protocol: 'wss'
      }
    }
  }
});
