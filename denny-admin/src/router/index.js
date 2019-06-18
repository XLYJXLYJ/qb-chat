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
const robotDetail = () =>import(/* webpackChunkName: "robotDetail" */ 'pages/robotDetail.vue')
const QA = () =>import(/* webpackChunkName: "robotDetail" */ 'pages/QA.vue')
const addQA = () =>import(/* webpackChunkName: "addQA" */ 'pages/addQA.vue')
const customerDetail = () =>import(/* webpackChunkName: "customerDetail" */ 'pages/customerDetail.vue')
const orderSubmit = () =>import(/* webpackChunkName: "orderSubmit" */ 'pages/orderSubmit.vue')
const routes = [
    {   path: '/',
        redirect: '/manage/robotData'
    },
	{
        path: '/manage/robotData',
        component:robotData,
    },
    {
        path: '/manage/addQA',
        component:addQA,
    },
    {
        path: '/manage/orderSubmit',
        component:orderSubmit,
    },
    {
        path: '/manage/QA',
        component:QA,
    },
    {
        path: '/manage/customerDetail',
        component:customerDetail,
    },
    {
        path: '/manage/robotDetail',
        component:robotDetail,
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
