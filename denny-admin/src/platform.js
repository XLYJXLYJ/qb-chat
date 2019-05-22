import Vue from 'vue'
import router from 'router/platform.js'
import vuex from 'store/index'
import 'assets/css/reset.css'
import ELEMENT from 'element-ui'
import 'theme/element-#2E008B/index.css'
import App from './platform.vue'
import filters from 'assets/js/filter'
import Utils from 'assets/js/util'
// import 'assets/js/js-cookie'
window.Utils = Utils
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})
console.log(Object.keys(filters))
Vue.config.productionTip = false
Vue.use(ELEMENT);
new Vue({
  router,
  vuex,
  render: h => h(App),
}).$mount('#app')
