import Vue from 'vue'
import router from 'router/index'
import vuex from 'store/index'
import 'assets/css/reset.css'
import ELEMENT from 'element-ui'
import filters from 'assets/js/filter'
import Utils from 'assets/js/util'
window.Utils = Utils
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})

import 'theme/element-#2E008B/index.css'
import App from './App.vue'
Vue.config.productionTip = false
Vue.use(ELEMENT);
new Vue({
  router,
  vuex,
  render: h => h(App),
}).$mount('#app')
