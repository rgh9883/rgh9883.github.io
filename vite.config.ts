import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    // react-draggable (via react-rnd) reads process.env.DRAGGABLE_DEBUG
    // unconditionally; Vite doesn't polyfill `process` in the browser,
    // so without this it throws "process is not defined" on every drag.
    'process.env': {},
  },
})
