import Vue from 'vue'
import router from './router'
// import Sample from './Sample.vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueCompositionApi from "@vue/composition-api";

// 今回はCDNで使用する
// import bootstrap from 'bootstrap'

Vue.use(VueCompositionApi);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
