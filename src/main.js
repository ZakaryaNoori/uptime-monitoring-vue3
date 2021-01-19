import { createApp } from 'vue'
import App from './App.vue'

// import router
import router from './router'

// import styles
import './assets/scss/app.scss'

createApp(App).use(router).mount('#app')
