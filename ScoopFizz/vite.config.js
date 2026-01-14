import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: 'public', // change to the folder where index.html lives, e.g. 'src'
  build: {
    outDir: '../dist', // ensures build output goes to project-root/dist
    emptyOutDir: true
  }

})
