import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import axios from 'axios'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

axios.defaults.baseURL = 'http://localhost:8080'

const vue = createApp(App)

vue.config.globalProperties.$http = axios

vue.use(store).use(router).mount('#app')
