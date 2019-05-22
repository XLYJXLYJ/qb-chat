<template>
    <div class="robotManage">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/' }">人工客服</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'salesFunnel'}">客服管理</el-breadcrumb-item>
        </el-breadcrumb>
         <el-form :inline="true" :model="formInline" class="demo-form-inline" >
            <el-form-item label="" style="float:left">
                <el-select v-model="formInline.region" placeholder="订单管理">
                <el-option label="流量订单" value="shanghai"></el-option>
                <el-option label="余额订单" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="" style="float:left;" >
                <el-select v-model="formInline.region" placeholder="订单类别">
                    <el-option label="全部订单" value="shanghai"></el-option>
                    <el-option label="未完成订单" value="beijing"></el-option>
                    <el-option label="已完成订单" value="shanghai"></el-option>
                    <el-option label="已取消订单" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item style="float:right;margin-right:40px">
                <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
            <el-form-item label="" style="float:right">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2"> 至</el-col>
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
            @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
            <el-table-column
                label="排序"
                type="index"
                width="55">
            </el-table-column>
            <el-table-column
                label="时间"
                >
                <template slot-scope="scope">{{ scope.row.create_time }}</template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="订单号"
                >
                <template slot-scope="scope">{{ scope.row.recharge_number }}</template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="充值余额"
                >
                <template slot-scope="scope">{{ scope.row.recharge_money }}</template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="完成状态"
                >
                <template slot-scope="scope">{{ scope.row.pay_status }}</template>
            </el-table-column>
        </el-table>
        <el-row>
            <el-pagination
                
                background
                @current-change="handleCurrentChange"
                :page-size="5"
                layout="prev, pager, next,jumper"
                :total='total_num ||100'>
            
            </el-pagination>
        </el-row>
         
    </div>
</template>

<script>
import {balanceRecharge} from 'service/service'
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
            total_num: '',
            total_page: '',
            tableData: [],
            multipleSelection: []
        }
    },
    mounted(){
        this.getBalanceRecharge()
    },
    methods: {
        toggleSelection(rows) {
            if (rows) {
            rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            } else {
            this.$refs.multipleTable.clearSelection();
            }
        },
        async getBalanceRecharge(){
            let bacanceRechargeData = await balanceRecharge({
                page: 1,
                start_date: '',
                end_date: '',
                recharge_pay_status: 0    //0,1,2 未完成，已完成，已取消
            })
            console.log(bacanceRechargeData)
            if(bacanceRechargeData.msg == 'ok' && bacanceRechargeData.status =='200' ){
                this.tableData = bacanceRechargeData.data
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
}
</script>

<style lang="scss">

.robotManage{
    position: absolute;
    padding: 8px;
    left: 0;
    width:100%;
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
}
.el-form{
    margin-top:40px; 
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

</style>
