<template>
    <div class="robotManage">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/' }">人工客服</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'salesFunnel'}">客服管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row> 
            <el-button type="primary">添加</el-button>
        </el-row>
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
                label='客服名'
                width="120">
                <template slot-scope="scope">{{ scope.row.s_name }}</template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="用户名"
                width="120">
                <template slot-scope="scope">{{ scope.row.mobile }}</template>
            </el-table-column>
             <el-table-column
                prop="name"
                label="负责机器人"
                width="120">
                 <template slot-scope="scope">
                    <ul v-for= 'item in scope.row.robot' :key='item'>
                        <li>{{item}}</li>
                    </ul>
                </template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="负责的产品"
                >
                <template slot-scope="scope">
                    <ul v-for= 'item in scope.row.product' :key='item'>
                        <li>{{item}}</li>
                    </ul>
                </template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="操作"
                >
                <template >
                    <el-button type="text" size="small">查看详情</el-button>
                    <el-button type="text" size="small">查看详情</el-button>
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
import {serviceManage} from 'service/service'
export default {
    data() {
        return {
            total_num: 6,
            total_page: 2,
            tableData: [],
            multipleSelection: []
        }
    },
    mounted(){
        this.getServiceManage()
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
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        async getServiceManage(val){
           let manageData = await serviceManage({
                pageSize: val || 1
           })
           if(manageData.msg == 'ok' && manageData.status == '200'){
               console.log(111)
               this.tableData = manageData.data
           }

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
