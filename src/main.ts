import Vue from 'vue'
import router from './router'
import App from './App.vue'
Vue.config.productionTip = false

// bootstrap導入
import 'bootstrap';

// compositionAPI
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
