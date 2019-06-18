<template>
    <div class="robotDate">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/manage/customerServiceData' }">数据分析</el-breadcrumb-item>
            <el-breadcrumb-item >客服数据</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="筛选:" style="float:left">
                <el-select v-model="formInline.region" placeholder="按客户评价筛选">
                <el-option label="未解决" value="未解决"></el-option>
                <el-option label="已解决" value="已解决"></el-option>
                <el-option label="无反馈" value="无反馈"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item style="float:right">
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
             <el-form-item label="" style="float:right">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2" style="margin-left:6px;margin-right:-6px;">至</el-col>
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date2" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
        </el-form>
         <el-table
            ref="multipleTable"
            :data="tableData"
            border
            tooltip-effect="dark"
            header-row-class-name='lll'
            style="width: 100%"
            >
            <el-table-column
                label="对话组ID"
                type="index"
                show-overflow-tooltip
                width="100"
                >
                <template slot-scope="scope">{{ scope.row.customer_token }}</template>
            </el-table-column>
            <el-table-column
                label="机器人名称"
                >
                <template slot-scope="scope">{{ scope.row.robot_name }}</template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="客服名称"
                >
                <template slot-scope="scope">{{ scope.row.service_name }}</template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="开始时间"
                >
                <template slot-scope="scope">{{ scope.row.create }}</template>
            </el-table-column>
            <el-table-column
                prop="address"
                show-overflow-tooltip
                label="聊天时长"
                >
                <template slot-scope="scope">{{ scope.row.time_length }}</template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="客户评价"
                >
                <template slot-scope="scope">{{ scope.row.is_solve }}</template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="结束原因"
                >
                <template slot-scope="scope">{{ scope.row.end_reason }}</template>
            </el-table-column>
             <el-table-column
                prop="address"
                label="操作"
                >
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="toDetail(scope.row)">查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-row>
             <el-pagination
                background
                @current-change="handleCurrentChange"
                :page-size="1"
                layout="prev, pager, next,jumper"
                :total='total_page ||1'>
            </el-pagination>
           
        </el-row>

            </div>
        </template>
<script>
import { getCustomer } from 'service/service'
export default {
    data() {
        return {
            formInline: {
                user: '',
                region: '',
                data1:'',
                date2:''
            },
            total_page:'',
            tableData: [],
            current_page:1
           

        }
    },
    mounted(){
        this.getData(1)
    },
    methods: {
        onSubmit() {
            // console.log('submit!');
            this.getData(this.current_page)
        },
        handleCurrentChange(val) {
            this.current_page = val
            this.getData(val)
        },
        toDetail(rows){
            let params = {
                customer_token:rows.customer_token
            }
            this.$router.push({ path: '/manage/customerDetail' ,query: params})
        },
        async getData(val){
           let data = await getCustomer({
                start_date: this.formInline.data1,
                end_date: this.formInline.data2,
                p: val || 1,
                product_id: JSON.parse(localStorage.getItem('useInfo')).product_id,
                customer_satf: this.formInline.region
           })
           if(data.msg=='ok' && data.status == '200'){
               this.tableData = data.data.log_dict_list
               this.total_page = data.data.total_page
           }
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
        .el-form {
            text-align: left;
            margin-top: 20px;
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
                width: 160px;
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