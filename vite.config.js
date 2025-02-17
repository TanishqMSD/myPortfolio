import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    allowedHosts: ['17a4-103-71-19-206.ngrok-free.app']
  },
})
