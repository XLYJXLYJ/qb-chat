import axios from './requist'

//登陆页面请求
export const login = (params) => {
    return axios.post('/merchant/v1.0/sessions',params)
}
//智能呼叫中心
export const smartCall = params => {
    return axios.post('/merchant/v2.0/robot/user_bind',params)
}
//机器人管理 merchant/v2.0/robot/robot_manage
export const robotManage = params => {
    return axios.get('/merchant/v2.0/robot/robot_manage',params)
}
//个性化列表 merchant/v2.0/robot/robot_personal
export const robotPersonal = params =>{
    return axios.get('/merchant/v2.0/robot/robot_personal',params)
}
//个性化修改 ，新增 merchant/v2.0/robot/robot_personal
export const newRobotPersonal = params =>{
    return axios.post('/merchant/v2.0/robot/robot_personal',params)
}
//删除个性化设置
export const delOrRepireRobot = params =>{
    return axios.put('/merchant/v2.0/robot/robot_personal',params)
}
// 机器人数据
export const getRobot = params => {
    return axios.get('/merchant/v1.0/record/dialogs',params)
}
//机器人数据选项
export const robotNumber = params => {
    return axios.get('/merchant/v2.0/robot/robot_number',params)
}
//机器人导出数据
export const recordCsv = params => {
    return axios.get('/merchant/v1.0/record/csv',params)
}
//点赞点踩
export const solveChange = params => {
    return axios.post('/merchant/v2.0/robot/solve_change',params)
}
//客服数据  merchant/v2.0/service/service_record
export const getCustomer = params => {
    return axios.get('merchant/v2.0/service/service_record',params)
}
//客服管理列表 merchant/v2.0/service/service_manage
export const serviceManage = params => {
    return axios.get('merchant/v2.0/service/service_manage',params)
}
//余额订单管理 merchant/v2.0/balance_recharge
export const balanceRecharge = params =>{
    return axios.get('merchant/v2.0/balance_recharge',params)
}
//客服工作统计  merchant/v2.0/service/service_account
export const serviceAccount = params =>{
    return axios.get('merchant/v2.0/service/service_account',params)
}
//销售漏斗  merchant/v2.0/robot/robot_level
export const robotLevel = params =>{
    return axios.get('merchant/v2.0/robot/robot_level',params)
}
//套餐管理  merchant/v2.0/robot/robot_level
export const dataType = params =>{
    return axios.get('merchant/v2.0/data_type',params)
}
export const planBalance = params =>{
    return axios.get('merchant/v2.0/plan_balance',params)
}
//客服管理 新增客服  merchant/v2.0/service/service_manage
export const pServiceManage = params =>{
    return axios.post('merchant/v2.0/service/service_manage',params)
}
//客服管理 删除客服  merchant/v2.0/service/service_manage
export const dServiceManage = params =>{
    return axios.delete('merchant/v2.0/service/service_manage',params)
}
//客服管理 编辑客服  merchant/v2.0/service/service_manage
export const eServiceManage = params =>{
    return axios.put('merchant/v2.0/service/service_manage',params)
}

//登出
// export const relogin = (params) => {
//     return axios.post(url,params)
// }


// async getAdminList() {
//     this.loading = true
//     let res = await getAdminList(this.queryParams)
//     this.tableData = res.data.list
//     this.PAGINATION.total = res.data.count
//     this.loading = false
// },
// async deleteAdmin() {
//     try {
//       let res = await deleteAdmin(this.id)
//       this.$message({
//         type: 'success',
//         message: '删除成功'
//       })
//       this.getAdminList()
//     } catch (err) {
//       this.$message({
//         type: 'error',
//         message: err.msg
//       })
//     }
