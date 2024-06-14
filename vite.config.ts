// import path from "path";
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.VITE_SUB_PATH || '/',
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
    build: {
      outDir: 'build',
      target: 'esnext',
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  }
})
