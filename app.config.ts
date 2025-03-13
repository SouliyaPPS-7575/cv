import { defineConfig } from '@tanstack/start/config';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    preset: 'netlify',
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
    optimizeDeps: {
      exclude: ['@tanstack/start-client'],
    },
    build: {
      rollupOptions: {
        external: ['node:fs', 'node:path'],
      },
    },
  },
});
