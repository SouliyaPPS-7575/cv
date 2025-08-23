import { createServer } from 'node:http'
import process from 'node:process'

// Import the Nitro listener produced by `vinxi build`
// Ensures we explicitly bind to Railway's provided PORT/HOST.
const { listener } = await import('../.output/server/index.mjs')

const port = Number(process.env.PORT || 3000)
// Bind publicly by default for PaaS (Railway, Fly, Render)
const host = process.env.HOST || '0.0.0.0'

createServer(listener).listen(port, host, () => {
  console.log(`[server] listening on http://${host}:${port}`)
})

