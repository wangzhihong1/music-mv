import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { songLibraryPlugin } from './server/song-library-plugin.js'

export default defineConfig({
  plugins: [vue(), songLibraryPlugin()],
})
