import axios from './requist'

//登陆页面请求
export const login = (params) => {
    return axios.post('/merchant/v1.0/sessions',params)
}
//退出登陆 /merchant/v1.0/session
export const delLogin = (params) => {
    return axios.delete('/merchant/v1.0/session',params)
}
//获取用户信息 merchant/v1.0/user/info
export const getInfo = params =>{
    return axios.get('/merchant/v1.0/user/info',params)
}
//获取手机验证码 /merchant/v1.0/sms_codes/"+$('.phone').val()
export const getCheckCode = params =>{
    return axios.get("/merchant/v1.0/sms_codes/"+ params.phones)
}
//重置登录信息 merchant/v1.0/reset_password
export const resetPassWord = params =>{
    return axios.post("/merchant/v1.0/reset_password", params)
}
//获取热词  /merchant/v1.0/record/hot_words
export const hotWords = (params) => {
    return axios.get('/merchant/v1.0/record/hot_words',params)
}
//智能呼叫中心
export const smartCall = params => {
    return axios.post('/merchant/v2.0/robot/user_bind',params)
}
//机器人管理 merchant/v2.0/robot/robot_manage
export const robotManage = params => {
    return axios.get('/merchant/v2.0/robot/robot_manage',params)
}
//下载批量导入模版/merchant/v2.0/robot/volume_increase
export const downLoad = params => {
    return axios.instance('/merchant/v2.0/robot/volume_increase',params)
}
// 模版上传 merchant/v2.0/robot/volume_increase
export const exportFile = params =>{
    return axios.post('/merchant/v2.0/robot/volume_increase',params)
}
//下载模版失败清单 /robot/volume_fail
export const volumeFile = params => {
    return axios.instance('/merchant/v2.0/robot/volume_fail',params)
}
//到处机器人列表  /merchant/v1.0/record/csv
export const Csv = params => {
    return axios.instance('/merchant/v1.0/record/csv',params)
}
//导出历史客服统计列表 /merchant/v2.0/service/service_account_excel
export const getServiceExcel = params => {
    return axios.instance('/merchant/v2.0/service/service_account_excel',params)
}
//导出当日客服统计列表 /merchant/v2.0/service/daily_account_excel
export const getDailyExcel = params => {
    return axios.instance('/merchant/v2.0/service/daily_account_excel',params)
}

//余额充值  merchant/v2.0/recharge_order_create
export const rechargeOrderCreate = params =>{
    return axios.post('/merchant/v2.0/recharge_order_create',params)
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
//robot_detail 机器人详情
export const robotDetail = params =>{
    return axios.get('merchant/v2.0/robot/robot_detail',params)
}
//机器人数据选项
export const robotNumber = params => {
    return axios.get('/merchant/v2.0/robot/robot_number',params)
}
//机器人数据编辑
export const robotEdit = params => {
    return axios.post('/merchant/v2.0/robot/robot_detail',params)
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
//余额充值 merchant/v2.0/balance_recharge
export const rechargeOrder = params =>{
    return axios.post('merchant/v2.0/balance_recharge',params)
}
//流量订单 未完成  merchant/v2.0/unfinish_order
export const unfinishOrder = params =>{
    return axios.get('merchant/v2.0/unfinish_order',params)
}
//流量订单 已完成 merchant/v2.0/finish_order
export const finishOrder = params =>{
    return axios.get('merchant/v2.0/finish_order',params)
}
//流量订单 已取消 merchant/v2.0/cancell_order
export const cancelOrder = params =>{
    return axios.get('merchant/v2.0/cancell_order',params)
}
//历史客服工作统计  merchant/v2.0/service/service_account
export const serviceAccount = params =>{
    return axios.get('merchant/v2.0/service/service_account',params)
}//当天客服工作统计 merchant/v2.0/service/daily_account
export const dailyAccount = params =>{
    return axios.get('merchant/v2.0/service/daily_account',params)
}
//客服详情 merchant/v2.0/service/service_record
export const customerDetail = params =>{
    return axios.post('merchant/v2.0/service/service_record',params)
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
// 套餐提交订单生成订单 /merchant/v2.0/order_list
export const newOrder = params =>{
    return axios.post('/merchant/v2.0/order_list',params)
}
//微信支付接口
export const pay = params =>{
    return axios.put('/merchant/v2.0/order_list',params)
}
//微信支付检测/merchant/v2.0/order_pay
export const weiXinPay =params =>{
    return axios.put('/merchant/v2.0/order_pay',params)
}
//转账支付 merchant/v2.0/order_online_pay
export const transferPay =params =>{
    return axios.post('merchant/v2.0/order_online_pay',params)
}
//余额充值 /merchant/v2.0/balance_online_pay
export const balanceOrderPay =params =>{
    return axios.post('merchant/v2.0/balance_online_pay',params)
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
//qa配置 知识库 merchant/v1.0/robot/qa_settings
export const qaSetting = params =>{
    return axios.get('merchant/v1.0/robot/qa_settings',params)
}
//qa批量上传 merchant/v2.0/robot/volume_increase
export const qaImport = params => {
    return axios.post('merchant/v2.0/robot/volume_increase',params)
}
//QA 对删除
export const delQA = params =>{
    return axios.delete('merchant/v1.0/robot/qa_settings',params)
}
//QA对修改 merchant/v1.0/robot/single_qa_settings
export const repQA = params =>{
    return axios.get('merchant/v1.0/robot/single_qa_settings',params)
}
//新增qa关联问题
export const queSetting =params =>{
    return axios.post('merchant/v1.0/robot/qa_settings',params)
}
//添加编辑qa
export const repSetting =params =>{
    return axios.put('merchant/v1.0/robot/qa_settings',params)
}


// 
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
