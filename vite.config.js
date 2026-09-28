import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the build works both on Vercel and when hosted from a
  // subpath (e.g. a shared preview link).
  base: './',
  plugins: [react()],
})
