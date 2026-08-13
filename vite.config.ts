import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { responsiveStyles } from './src/responsive'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'responsive-styles',
      transformIndexHtml() {
        return [{ tag: 'style', children: responsiveStyles, injectTo: 'head' }]
      }
    }
  ]
})
