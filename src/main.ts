import Vue from 'vue'
import router from './router'
import Sample from './Sample.vue'

Vue.config.productionTip = false

import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);

new Vue({
  router,
  render: h => h(Sample)
}).$mount('#app')
