import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Base path for GitHub Pages deployment at:
  // https://aquadic.github.io/cloudwa_universal_landing_page_react/
  base: '/cloudwa_universal_landing_page_react/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
