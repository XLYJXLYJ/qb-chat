import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {path: '/', redirect: '/Chat'},
//     {
//       path: '/Chat',
//       name: 'chat',
//       component: resolve => require(['@/components/Page/Chat.vue'], resolve)
//     }
//   ]
// })

export default new Router({
  mode: 'history',
  base:'/insurebotaimi/T-sdb',
  routes: [
    {
      path: '/',
      name: 'chat',
      component: resolve => require(['@/components/Page/Chat.vue'], resolve)
    },
    {path: '*', redirect: '/'},
  ]
})
