import './assets/main.css'

import { createApp } from 'vue'
import pinpa from './stores'

import App from './App.vue'
import router from './router'

import 'normalize.css'
import './assets/css/index.css'

const app = createApp(App)

app.use(pinpa)
app.use(router)

app.mount('#app')
