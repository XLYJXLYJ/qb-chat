import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chat',
      component: resolve => require(['@/components/Page/Chat.vue'], resolve)
    }
  ]
})

// export default new Router({
//   mode: 'history',
//   base:'/insurebotaimi/SDC-bwyl',
//   routes: [
//     {
//       path: '/',
//       name: 'chat',
//       component: resolve => require(['@/components/Page/Chat.vue'], resolve)
//     },
//     {path: '*', redirect: '/'},
//   ]
// })
