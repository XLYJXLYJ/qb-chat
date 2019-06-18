<template>
    <div class="robotDate">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/manage/workStatistics' }">人工客服</el-breadcrumb-item>
            <el-breadcrumb-item >当天/历史客服工作统计</el-breadcrumb-item>
        </el-breadcrumb>
         <!-- <el-radio-group v-model="tabPosition">
            <el-radio-button label="top">当天客服工作统计</el-radio-button>
            <el-radio-button label="right">历史客服工作统计</el-radio-button>
        </el-radio-group> -->

        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="" style="float:left">
                <el-select v-model="formInline.type" placeholder="客户统计类型">
                <el-option label="当天客户统计" value="1"></el-option>
                <el-option label="历史客户统计" value="0"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="" style="float:left">
                <el-select v-model="formInline.region" placeholder="排序">
                    <el-option label="按接待客户数" value="1"></el-option>
                    <el-option label="按客服在线时长" value="2"></el-option>
                    <el-option label="按客户咨询总数量" value="3"></el-option>
                    <el-option label="按机器人答案数量" value="5"></el-option>
                    <el-option label="按客户反馈不满意数" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="" style="float:left;" >
                <el-select v-model="formInline.level" placeholder="最高">
                <el-option label="最高" value="1"></el-option>
                <el-option label="最低" value="2"></el-option>
                </el-select>
            </el-form-item>
           <el-form-item style="float:right;">
                <el-button type="primary" @click="exportExcle">导出</el-button>
            </el-form-item>
            <el-form-item style="float:right;">
                <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
            <el-form-item label="" style="float:right" v-show="daily">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;" value-format="yyyy-MM-dd"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">&nbsp;至&nbsp;</el-col>
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date2" style="width: 100%;" value-format="yyyy-MM-dd"></el-date-picker>
                </el-col>
            </el-form-item>
           
        </el-form>
         <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            fixed
            prop="date"
            label="客服名"
           >
           <template slot-scope="scope">{{ scope.row.service_name }}</template>
            </el-table-column>
            <el-table-column
            prop="name"
            label="时间"
            >
            <template slot-scope="scope">{{ scope.row.service_work_time }}</template>
            </el-table-column>
            <el-table-column
            prop="province"
            label="接待客户数"
            >
            <template slot-scope="scope">{{ scope.row.customer_number }}</template>
            </el-table-column>
            <el-table-column
            prop="city"
            label="客服在线时长(小时)"
            >
            <template slot-scope="scope">{{ scope.row.service_hours_online }}</template>
            </el-table-column>
            <el-table-column
            prop="address"
            label="客户咨询总数量"
            >
            <template slot-scope="scope">{{ scope.row.service_answer_number }}</template>
            
            </el-table-column>
            <el-table-column
                prop="zip"
                label="机器人答案数量"
                >
                <template slot-scope="scope">{{ scope.row.robot_answer_number }}</template>
            </el-table-column>
            <el-table-column
                label="客户反馈不满意数"
                >
            <template slot-scope="scope">
                <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button> -->
                {{scope.row.customer_feedback_yawp}}
            </template>
            </el-table-column>
        </el-table>
        <el-row>
             <el-pagination
                background
                @current-change="handleCurrentChange"
                :page-size="1"
                layout="prev, pager, next,jumper"
                :total='total_page || 1'>
            </el-pagination>

        </el-row>
            </div>
        </template>

<script>
import { serviceAccount,dailyAccount,getServiceExcel,getDailyExcel} from 'service/service'
export default {
    data() {
        return {
            tabPosition: 'top',
            total_page:'',
            total_num:'',
            formInline: {
                user: '',
                region: '',
                date1:'',
                date2:'',
                level:'',
                type:'0'
            },
            tableData: [],
            daily:true

        }
    },
    mounted(){
        if(this.formInline.type == '1'){
            this.getDailyAccount()
        }
        if(this.formInline.type == '0'){
            this.getServiceAccount()
        }
        
    },
    watch:{
        "formInline.type":function(val){
            if(val == 0){
                this.daily = true
            }else{
                this.daily = false
            }
        }
    },
    methods: {
        onSubmit(){
            if(this.formInline.type == 0){
                this.getServiceAccount()
            }else{
                this.getDailyAccount()
            }
        },
        handleCurrentChange(val){
            this.getServiceAccount(val)
        },
        async getServiceAccount(val){
            let serviceData = await serviceAccount({
                order_by_name: this.formInline.region,
                start_date: this.formInline.date1,
                end_date: this.formInline.date2,
                p: val || 1,
                sort_by_name: this.formInline.level
            })
            if(serviceData.errcode == '200'&&serviceData.errmsg =="OK"){
                this.tableData = serviceData.log_dict_list
                this.total_page = serviceData.total_page
            }
        },
        async getDailyAccount(val){
            let serviceData = await dailyAccount({
                order_by_name: this.formInline.region,
                p: val || 1,
                sort_by_name: this.formInline.level
            })
            if(serviceData.errcode == '200'&&serviceData.errmsg =="OK"){
                this.tableData = serviceData.log_dict_list
                this.total_page = serviceData.total_page
            }
        },
        async exportExcle(){
            var data ,filename
            var a = document.createElement('a')
            if(this.formInline.type == '1'){
                data = await getDailyExcel()
                filename = 'ServiceWorkDaily.xlsx'
                a.download = filename;
            }
            if(this.formInline.type == '0'){
                data = await getServiceExcel()
                filename = 'ServiceWork.xlsx'
                a.download = filename;
            }
            a.href= window.URL.createObjectURL(data)
            a.click()
        }
    }

}
</script>


<style lang="scss">
.robotDate{
position: absolute;
padding: 8px;
left: 0;
width:100%;
.el-radio-group{
    margin-top: 20px;
    .el-radio-button{
        .el-radio-button__inner{
            padding: 12px 30px;
        }
    } 
}
.el-form {
    // text-align: left;
    margin-top: 20px !important;
    .el-button{
        margin-right:20px; 
        padding:10px 20px;
        border-radius:6px;
        opacity: 1;
    }
    .el-button:hover{
        opacity: 0.8;
    }
    .el-input__inner{
        height: 38px;
        width: 140px;
    }
}
.el-table__header tr,
.el-table__header th {
    padding: 0;
    height: 46px !important;
    line-height: 46px;
    background:rgba(243,243,243,1);
    text-align: center;
    font-size:15px;
    font-weight:500;
    color:rgba(80,80,80,1);
}
.el-table__body tr td{
    text-align: center;
}
.el-row{
    padding: 20px 40px;
    text-align: right;
    margin-right:50px; 
    .el-button{
        margin-right:20px; 
        padding:10px 20px;
        border-radius:6px;
        opacity: 1;
    }
    .el-button:hover{
        opacity: 0.8;
    }
}

    }
</style>