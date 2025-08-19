import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mycalc/',
  server: {
    proxy: {
      '/calcadd': 'http://localhost:8080',   // proxy API calls
    }
  }
})
