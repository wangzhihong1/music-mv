import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/app.css'
import './styles/pipeline.css'
import './styles/shorts.css'
import './styles/lyric-lines.css'

createApp(App).use(router).mount('#app')
