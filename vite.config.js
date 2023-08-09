import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  server: { port: 4999 },
  resolve: {
    alias: {
      lib: __dirname + '/src/lib',
      components: __dirname + '/src/components',
      data: __dirname + '/src/data'
    }
  },
  build: { outDir: 'build' },
  css: { postcss: { plugins: [autoprefixer()] } }
})
