import { defineConfig } from '@tanstack/react-start/config'
import tsConfigPaths from 'vite-tsconfig-paths'

// Allow choosing the deployment preset via env
// Defaults to a Node server (works well on Railway & most VPS)
const serverPreset =
  process.env.SERVER_PRESET || (process.env.NETLIFY ? 'netlify' : 'node')

export default defineConfig({
  server: {
    // Use env-configurable preset (node | netlify | vercel | cloudflare, etc.)
    preset: serverPreset as any,
  },
  tsr: {
    appDirectory: 'src',
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
    build: {
      chunkSizeWarningLimit: 5000,
    },
  },
})
