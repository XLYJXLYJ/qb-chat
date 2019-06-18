import Vue from 'vue'
// import 'assets/css/reset.css'
import ELEMENT from 'element-ui'
import 'theme/element-#2E008B/index.css'
import App from './pages/iframe.vue'
Vue.config.productionTip = false
Vue.use(ELEMENT);
new Vue({
  render: h => h(App),
}).$mount('#app')
