import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolveStudioRoot, songLibraryPlugin } from './plugins/studio-library-plugin.js'

const workbenchRoot = fileURLToPath(new URL('.', import.meta.url))
const studioRoot = resolveStudioRoot(workbenchRoot)

export default defineConfig({
  plugins: [vue(), songLibraryPlugin()],
  resolve: {
    alias: {
      '@': path.join(workbenchRoot, 'src'),
    },
  },
  server: {
    fs: {
      allow: [workbenchRoot, studioRoot],
    },
    watch: {
      ignored: [
        '**/*.png',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.webp',
        '**/*.mp4',
        '**/*.mp3',
        '**/*.wav',
        '**/.analysis/**',
        '**/generated/**',
      ],
    },
  },
})
