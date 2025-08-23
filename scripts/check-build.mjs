import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const entry = resolve('.output/server/index.mjs')
if (!existsSync(entry)) {
  console.error('[Start Error] Missing build output at .output/server/index.mjs')
  console.error('Fix: Ensure Railway Build Command runs "npm run build"')
  console.error('Alternatively, run locally: npm run build')
  process.exit(1)
}
