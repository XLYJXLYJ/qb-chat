import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = () => import(/* webpackChunkName: "login" */ 'pages/login.vue')
const choosePlatform = () => import(/* webpackChunkName: "choosePlatform" */ 'pages/choosePlatform.vue')

const routes = [
    {   path: '/',
        redirect: '/platfrom/login'
    },
	{
        path: '/platfrom/login',
        component:login,
    },
    {
        path: '/platfrom/choosePlatform',
        component: choosePlatform
    },
    {
        path :'*',
        redirect: '/platfrom/login'
    }
    
]

export default new Router({
	routes
})
