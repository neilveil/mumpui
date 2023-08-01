const { defineConfig } = require('rollup')
const babel = require('@rollup/plugin-babel')
const typescript = require('@rollup/plugin-typescript')
const postcss = require('rollup-plugin-postcss')
const tsconfig = require('./tsconfig.json')

const fs = require('fs')

fs.rmSync('dist', { force: true, recursive: true })
fs.mkdirSync('dist')
fs.cpSync('src/lib/styles', 'dist/styles', { recursive: true })
fs.cpSync('public.package.json', 'dist/package.json', { recursive: true })

module.exports = defineConfig({
  input: 'src/lib/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    typescript({
      ...tsconfig.compilerOptions,
      declaration: true,
      declarationDir: 'types',
      emitDeclarationOnly: true,
      jsx: 'react',
      include: 'src/lib/**/*',
      exclude: 'node_modules/**/*'
    }),
    postcss({
      // extract: true,
      modules: true,
      use: ['sass']
    }),
    babel({
      plugins: ['@babel/plugin-transform-runtime'],
      presets: ['@babel/env', '@babel/react'],
      exclude: ['node_modules/**'],
      babelHelpers: 'runtime'
    })
  ]
})
