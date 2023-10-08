import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@routes': path.resolve(__dirname, './src/Routes'),
      '@components': path.resolve(__dirname, './src/Components'),
      '@layouts': path.resolve(__dirname, './src/Layouts'),
    },
  },
  plugins: [react()],
})
