import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/prematid.github.io/',
  plugins: [react()],
  build: {
    outDir: 'dist', // This should point to the 'dist' folder
},
})
