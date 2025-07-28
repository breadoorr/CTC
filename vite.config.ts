import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/CTC/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: ['breadoorr.github.io', 'ctc-ddorabbles-projects.vercel.app', 'ctc.cy'],
    hmr: {
      clientPort: 443,
      protocol: 'wss'
    }
  }
})
