import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const robotData = () => import(/* webpackChunkName: "robotData" */ 'pages/robotData.vue')
const robotManage = () => import(/* webpackChunkName: "robotManage" */ 'pages/robotManage.vue')
const customerServiceData = () => import(/* webpackChunkName: "customerServiceData" */ 'pages/customerServiceData.vue')
const salesFunnel = () => import(/* webpackChunkName: "salesFunnel" */ 'pages/salesFunnel.vue')
const customerServiceManage = () => import(/* webpackChunkName: "customerServiceManage" */ 'pages/customerServiceManage.vue')
const workStatistics = () => import(/* webpackChunkName: "workStatistics" */ 'pages/workStatistics.vue')
const survey = () => import(/* webpackChunkName: "survey" */ 'pages/survey.vue')
const packageBalanceManage = () => import(/* webpackChunkName: "packageBalanceManage" */ 'pages/packageBalanceManage.vue')
const flowBalanceManage = () => import(/* webpackChunkName: "flowBalanceManage" */ 'pages/flowBalanceManage.vue')
const robotPersonal = () =>import(/* webpackChunkName: "robotPersonal" */ 'pages/personal.vue')
const routes = [
    {   path: '/',
        redirect: '/manage/survey'
    },
	{
        path: '/manage/robotData',
        component:robotData,
    },
    {
        path: '/manage/robotPersonal',
        component:robotPersonal
    },
    {
        path: '/manage/robotManage',
        component: robotManage
    },
    {
        path: '/manage/customerServiceData',
        component: customerServiceData
    },
    {
        path: '/manage/salesFunnel',
        component: salesFunnel
    },
    {
        path: '/manage/customerServiceManage',
        component: customerServiceManage
    },
    {
        path: '/manage/workStatistics',
        component: workStatistics
    },
    {
        path: '/manage/survey',
        component: survey
    },
    {
        path: '/manage/packageBalanceManage',
        component: packageBalanceManage
    },
    {
        path: '/manage/flowBalanceManage',
        component: flowBalanceManage
    },
    {
        path :'*',
        redirect: '/manage/survey'
    }
    
]

export default new Router({
	routes
})
