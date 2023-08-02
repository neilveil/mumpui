import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  server: { port: 5000 },
  resolve: {
    alias: {
      lib: __dirname + '/src/lib'
    }
  },
  build: { outDir: 'build' },
  css: { postcss: { plugins: [autoprefixer()] } }
})
