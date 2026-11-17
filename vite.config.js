import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: proces.env.GITHUB_PAGES === 'true'
    ? '/drip-store-front/'
    : '/',
})
