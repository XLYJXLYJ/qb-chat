<template>
    <div class="robotManage">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/manage/robotManage' }">管理中心</el-breadcrumb-item>
            <el-breadcrumb-item >机器人管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row> 
            <!-- <el-button type="primary">添加</el-button> -->
            <!-- <el-button type="primary">批量添加</el-button> -->
        </el-row>
        <el-table
            ref="multipleTable"
            :data="tableData"
            border
            tooltip-effect="dark"
            header-row-class-name='lll'
            style="width: 100%"
            @selection-change="handleSelectionChange"
            >
                <!-- <el-table-column
                type="selection"
                width="55">
                </el-table-column> -->
            <el-table-column
                label="编号"
                type="index"
                width="100"
                >
                <template slot-scope="scope">{{ scope.row.robot_code }}</template>
            </el-table-column>
            <el-table-column
                label="机器人名称"
                >
                <template slot-scope="scope">{{ scope.row.robot_name }}</template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="机器人类型"
                >
                <template slot-scope="scope">{{ scope.row.robot_type }}</template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="部署方式"
                >
                <template slot-scope="scope">{{ scope.row.deployment_form }}</template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="备注"
                >
                <template slot-scope="scope">{{ scope.row.comment }}</template>
            </el-table-column>
             <el-table-column
                prop="address"
                label="操作"
                >
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">个性化设置</el-button>
                    <el-button type="text" size="small" @click='robotDetail(scope.row)'>设置</el-button>
                    <el-button type="text" size="small" @click='toQA(scope.row)'>知识库</el-button>
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
import {robotManage} from 'service/service'
export default {
    data() {
        return {
            total_num:'',
            total_page:'',
            loading:true,
            tableData: [],
            multipleSelection: []
        }
    },
    mounted(){
        this.getManageList();
    },

    methods: {
        handleClick(rows){
            let params = {
                robot_id:rows.id,
                product_id :rows.product_id
            }
            this.$router.push({ path: '/manage/robotPersonal' ,query: params})
        },
        robotDetail(rows){
            let params = {
                robot_code:rows.robot_code,
                product_id :rows.product_id
            }
            this.$router.push({ path: '/manage/robotDetail' ,query: params})
        },
        toQA(rows){
            let params = {
                robot_code:rows.robot_code,
                product_id :rows.product_id
            }
            this.$router.push({ path: '/manage/QA' ,query: params})
        },
        toggleSelection(rows) {
            if (rows) {
            rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            } else {
            this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleCurrentChange(val) {
            this.getManageList(val)
        },
        async getManageList(val){
            this.loading = true;
            let tableData = await robotManage({
                'product_id':JSON.parse(localStorage.getItem('useInfo')).product_id,
                'pageSize':val || 1
            })
            if(tableData.msg == 'ok' && tableData.status == '200'){
                this.total_num = tableData.total_num
                this.total_page = tableData.total_page
                this.tableData = tableData.data;
            }
            this.loading = false;

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
