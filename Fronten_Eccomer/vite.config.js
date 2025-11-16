import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
   server:{
      proxy:{
        "/api":{
          // target:"http://localhost:5000"
          target:"https://shopping-project-f8b0.onrender.com"
        },
        "/uploads":{
          // target:"http://localhost:5000"
          target:"https://shopping-project-f8b0.onrender.com"
        }
      }
    }
})
