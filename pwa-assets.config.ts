import { defineConfig, minimal2023Preset as preset } from '@vite-pwa/assets-generator/config'

export default defineConfig({
  preset,
  images: [
    'public/apple-touch-icon.png',
    'public/favicon.ico',
    'public/logo.svg',
    'public/pwa-64x64.png',
    'public/pwa-192x192.png',
    'public/pwa-512x512.png',
    'public/mask-icon.png',
  ]
})