<template>
    <div class="robotDate"  >
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/' }">数据分析</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'salesFunnel'}">机器人数据</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="筛选:" style="float:left">
                <el-select v-model="formInline.region" placeholder="按机器人名称筛选">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item style="float:right;margin-right:40px">
                <el-button type="primary" @click="onSubmit">导出当前列表</el-button>
            </el-form-item>
             <el-form-item style="float:right">
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
             <el-form-item label="" style="float:right">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">  &nbsp 至 </el-col>
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
                show-overflow-tooltip=true
                width="100"
                >
                <template slot-scope="scope">{{ scope.row.id }}</template>
            </el-table-column>
            <el-table-column
                label="机器人名称"
                >
                <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="时间"
                >
                <template slot-scope="scope">{{ scope.row.create }}</template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="问题"
                >
                <template slot-scope="scope">{{ scope.row.customer_question }}</template>
            </el-table-column>
            <el-table-column
                prop="address"
                show-overflow-tooltip=true
                label="答案"
                >
                <template slot-scope="scope">{{ scope.row.content }}</template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="答案是否采纳"
                >
                <template slot-scope="scope">{{ scope.row.answer_adopt }}</template>
            </el-table-column>
             <el-table-column
                prop="address"
                label="操作"
                >
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">个性化设置</el-button>
                    <el-button type="text" size="small">详情</el-button>
                    <el-button type="text" size="small">知识库</el-button>
                </template>
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
import {getRobot} from 'service/service'
export default {
    data() {
        return {
            formInline: {
                user: '',
                region: '',
                data1:'',
                date2:''
            },
            total_num:'',
            total_page:'',
            tableData: [],
        }
    },
    mounted(){
        this.getRobotDate()
        // console.log(this.tableData)
    },
    methods: {
        onSubmit() {
            console.log('submit!')
        },
        handleCurrentChange(val) {
            this.getRobotDate(val)
        },
        async getRobotDate(val){
            let robotDate = await getRobot({
                start_date: '',
                end_date: '',
                p: val || 1,
                product_id: JSON.parse(localStorage.getItem('useInfo')).product_id
            })
            if(robotDate && robotDate.errcode == '0' && robotDate.errmsg == 'OK' ){
                
                this.tableData = robotDate.data.log_dict_list
                console.log(this.tableData)
            }
           
        }
    }

}
</script>


<style lang="scss">
    body {
        margin: 0;
    }
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