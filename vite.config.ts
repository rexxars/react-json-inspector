/// <reference types="vitest/config" />
import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'example',
  server: {
    port: 7777,
  },
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  test: {
    root: '.',
    environment: 'happy-dom',
    setupFiles: ['./vitest-setup.js'],
  },
})
