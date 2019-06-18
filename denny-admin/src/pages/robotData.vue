<template>
    <div class="robotDate"  >
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/manage/robotData' }">数据分析</el-breadcrumb-item>
            <el-breadcrumb-item >机器人数据</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="筛选:" style="float:left">
                <el-select v-model="formInline.region" placeholder="按机器人名称筛选">
                <el-option  v-for="(item,key) in options"
                 :key="key"
                 :label="item.robot_name"
                 :value="item.robot_code"></el-option>
                </el-select>
            </el-form-item>
            <!-- <el-form-item style="float:right;margin-right:40px">
                <el-button type="primary" @click="getCsv">导出当前列表</el-button>
            </el-form-item> -->
             <el-form-item style="float:right">
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
             <el-form-item label="" style="float:right">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">  &nbsp; 至 </el-col>
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date2" style="width: 100%;" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                </el-col>
            </el-form-item>
        </el-form>
        <el-table
            v-loading="loading"
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
                show-overflow-tooltip
                label="答案"
                >
                <template slot-scope="scope">{{ scope.row.content }}</template>
            </el-table-column>
            <el-table-column
                class="good-bad"
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
                    <div class="good-bad">
                        <div v-if="scope.row.user_solve == '0' || scope.row.user_solve == '1'" :class="{'good01':isGood || scope.row.user_solve !== '1','good02':!isGood || scope.row.user_solve == '1'}" @click="good(scope)"></div>
                        <div v-if="scope.row.user_solve == '0' || scope.row.user_solve == '2'" :class="{'bad01':isBad || scope.row.user_solve !== '2','bad02':!isBad || scope.row.user_solve == '2'}" @click="bad(scope)"></div>
                    </div>
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
import {getRobot,robotNumber,recordCsv,solveChange,Csv} from 'service/service'
export default {
    data() {
        return {
            formInline: {
                user: '',
                region: '',
                data1:'',
                date2:''
            },
            loading:false, // 加载lodding变量
            options:{}, // 加载数据
            total_num:'',
            total_page:'',
            tableData: [],
            isGood:true, //控制显示颜色
            isBad:true, //控制显示颜色
            isG:true, //控制显示状态
            isB:true //控制显示状态
        }
    },
    mounted(){
        this.getRobotDate()
        this.getSelect()
    },
    methods: {
        onSubmit() {
            this.getRobotDate(1)
        },
        handleCurrentChange(val) {
            this.getRobotDate(val)
        },
        async getRobotDate(val){
            let robotDate = await getRobot({
                start_date: this.formInline.date1 || '',
                end_date: this.formInline.date2 || '',
                p: val || 1,
                product_id: JSON.parse(localStorage.getItem('useInfo')).product_id || 1,
                robot_code:this.formInline.region
            })
            // console.log(robotDate)
            if(robotDate && robotDate.errcode == '200' && robotDate.errmsg == 'OK' ){
                this.tableData = robotDate.data.log_dict_list
                this.total_page = robotDate.data.total_page
                this.loading = false
            }
        },
        async getSelect(){
            //请求机器人选项
            let robotSelectData = await robotNumber({
                product_id: JSON.parse(localStorage.getItem('useInfo')).product_id
            })
            if(robotSelectData.msg == 'ok' ){
                this.$nextTick(() => {
                    this.options = robotSelectData.data
                })
            }
        },
        async getCsv(){
            let data = await Csv({
                start_date: this.formInline.date1 || '',
                end_date: this.formInline.date2 || '',
                robot_code:this.formInline.region
            })
            var a = document.createElement('a')
            var filename = 'robotFail.xls'
            a.download = filename;
            a.href= window.URL.createObjectURL(data)
            a.click()
        },
        async good(scope){
            this.$nextTick(() => {
                this.tableData[scope.$index].user_solve = '1'
            })
            let solveChangeData = await solveChange({
                customer_id: scope.row.customer_id,
                robot_id: scope.row.robot_id,
                user_solve: 1
            })
        },
        async bad(scope){
            this.$nextTick(() => {
                this.tableData[scope.$index].user_solve = '2'
            })
            let solveChangeData = await solveChange({
                customer_id: scope.row.customer_id,
                robot_id: scope.row.robot_id,
                user_solve: 2
            })
        },
        //导出机器人数据列表
        async exportXsl(){
            recordCsv({
                product_id: JSON.parse(localStorage.getItem('useInfo')).product_id
            })
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
    .good-bad{
        display: flex;
        justify-content:space-around;
        .good01{
            width: 20px!important;
            height: 20px!important;
            background:url('../assets/image/good01.png') no-repeat;
            background-size: 20px 20px;
        }
        .good02{
            width: 20px!important;
            height: 20px!important;
            background:url('../assets/image/good02.png') no-repeat;
            background-size: 20px 20px;
        }
        .bad01{
            width: 20px!important;
            height: 20px!important;
            background:url('../assets/image/bad01.png') no-repeat;
            background-size: 20px 20px;
        }
        .bad02{
            width: 20px!important;
            height: 20px!important;
            background:url('../assets/image/bad02.png') no-repeat;
            background-size: 20px 20px;
        }
    }
</style>
