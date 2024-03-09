import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// bootstrap導入
import './scss/styles.scss'

// compositionAPI
// import VueCompositionApi from "@vue/runtime-dom";
// Vue.use(VueCompositionApi);

const app = createApp(App)

app.use(router)

app.mount('#app')
