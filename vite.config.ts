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
    allowedHosts: ['breadoorr.github.io'],
    cors: {
      origin: ['https://43a175f3b1f5.ngrok-free.app', 'http://localhost:5173', 'https://breadoorr.github.io']
    },
    hmr: {
      clientPort: 443,
      protocol: 'wss'
    }
  }
})
