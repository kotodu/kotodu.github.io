import Vue from 'vue'
import Sample from './Sample.vue'

Vue.config.productionTip = false

import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

new Vue({
  render: h => h(Sample),
}).$mount('#app')
