import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages, update the base path to match your repository name
// If your repo is named "WorkoutWebsite", use '/WorkoutWebsite/'
// If your repo is named "workout-website", use '/workout-website/'
// For custom domain or root domain, use '/'
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/WorkoutWebsite/' : '/',
})
