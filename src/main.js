import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import router from './router/router.js'
const app = createApp(App)
app.use(ElementPlus)
app.use(router).mount('#app')
