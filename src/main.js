import { createApp } from 'vue'
import './style.css'
import App from './layout/App.vue';
import router from './router/index.js'
import store from './store/index.js'

createApp(App).use(router).use(store).mount('#app')
