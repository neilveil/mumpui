import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react(), eslint()],
  server: { port: 4999 },
  resolve: {
    alias: {
      lib: __dirname + '/src/lib',
      components: __dirname + '/src/components',
      data: __dirname + '/src/data',
      helpers: __dirname + '/src/helpers.tsx',
      metagraph: __dirname + '/src/metagraph.ts'
    }
  },
  build: { outDir: 'build' },
  css: { postcss: { plugins: [autoprefixer()] } },
  base: '/mumpui'
})
