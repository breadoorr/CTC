import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/ctc/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: ['43a175f3b1f5.ngrok-free.app'],
    cors: {
      origin: ['https://43a175f3b1f5.ngrok-free.app', 'http://localhost:5173']
    },
    hmr: {
      clientPort: 443,
      protocol: 'wss'
    }
  }
})
