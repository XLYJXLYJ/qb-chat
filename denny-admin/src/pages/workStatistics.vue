<template>
    <div class="robotDate">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/' }">人工客服</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'salesFunnel'}">当天/历史客服工作统计</el-breadcrumb-item>
        </el-breadcrumb>
         <!-- <el-radio-group v-model="tabPosition">
            <el-radio-button label="top">当天客服工作统计</el-radio-button>
            <el-radio-button label="right">历史客服工作统计</el-radio-button>
        </el-radio-group> -->

        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="" style="float:left">
                <el-select v-model="formInline.region" placeholder="接待客户数">
                <el-option label="当天客户统计" value="shanghai"></el-option>
                <el-option label="历史客户统计" value="beijing"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="" style="float:left">
                <el-select v-model="formInline.region" placeholder="客户统计">
                <el-option label="区域一" value=""></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="" style="float:left;" >
                <el-select v-model="formInline.region" placeholder="最高">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
           <el-form-item style="float:right;">
                <el-button type="primary" @click="onSubmit">导出当前列表</el-button>
            </el-form-item>
            <el-form-item label="" style="float:right">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">&nbsp至&nbsp </el-col>
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date2" style="width: 100%;"></el-date-picker>
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
            label="客服在线时常(小时)"
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
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage2"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="100"
                layout="sizes, prev, pager, next ,jumper"
                :total="100">
            </el-pagination>
        </el-row>

            </div>
        </template>

<script>
import { serviceAccount} from 'service/service'
export default {
    data() {
        return {
            tabPosition: 'top',
            formInline: {
                user: '',
                region: '',
                data1:'',
                date2:''
            },
            tableData: []

        }
    },
    mounted(){
        this.getServiceAccount()
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        async getServiceAccount(){
            let serviceData = await serviceAccount({
                order_by_name: '',
                start_date: '',
                end_date: '',
                p: 1,
                sort_by_name: ''
            })
            if(serviceData.errcode == '200'&&serviceData.errmsg =="OK"){
                this.tableData = serviceData.data.log_dict_list
            }
            console.log(serviceData)
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