import { createApp } from 'vue'
import axios from 'axios'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

axios.defaults.baseURL = 'http://localhost:8080'
// vue.config.globalProperties.$http = axios

console.log(createApp(App).use(store).use(router).mount('#app'))
