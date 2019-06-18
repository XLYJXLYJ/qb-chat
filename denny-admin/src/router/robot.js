import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const iframe = () => import(/* webpackChunkName: "iframe" */ 'pages/iframe.vue')
// const choosePlatform = () => import(/* webpackChunkName: "choosePlatform" */ 'pages/choosePlatform.vue')

const routes = [
    {   path: '/',
        redirect: '/iframe'
    },
    {
        path: '/iframe',
        component: iframe
    },
    {
        path :'*',
        redirect: '/iframe'
    }
    
]

export default new Router({
	routes
})
