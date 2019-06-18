<template>
    <div class="robotManage">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/manage/customerServiceManage' }">人工客服</el-breadcrumb-item>
            <el-breadcrumb-item >客服管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-button type="primary" @click="addCustomer()">添加</el-button>
        </el-row>

        <el-dialog title="新增客服" :visible.sync="dialogFormVisible" width='25%'>
            <el-form :model="form">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="form.phone" aria-placeholder="请输入客服手机号码"></el-input>
                </el-form-item>
                <el-form-item label="客服名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" aria-placeholder="请输入客服名称"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer" style="text-align:center">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="difineAddCustomer()">确 定</el-button>
            </div>
        </el-dialog>

        <el-table
            v-loading="loading"
            ref="multipleTable"
            :data="tableData"
            border
            tooltip-effect="dark"
            header-row-class-name='lll'
            style="width: 100%">
<!--            <el-table-column-->
<!--            type="selection"-->
<!--            width="55">-->
<!--            </el-table-column>-->
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
                    <!-- <ul v-for= 'item in scope.row.robot' :key='item'>
                        <li>{{item}}</li>
                    </ul> -->
                    {{scope.row.robot}}
                </template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="负责的产品"
                >
                <template slot-scope="scope">
                    <!-- <ul v-for= 'item in scope.row.product' :key='item'>
                        <li>{{item}}</li>
                    </ul> -->
                    {{scope.row.product}}
                </template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="操作"
                >
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="editCustomer(scope)">编辑</el-button>
                    <el-button type="text" size="small" @click="handleDelete(scope)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="修改客服" :visible.sync="editDialogFormVisible" width='25%'>
            <el-form :model="form">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="form.resetName" aria-placeholder="请输入客服用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input type='text' v-model="form.resetPassword" aria-placeholder="请输入客服密码"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer" style="text-align:center">
                <el-button @click="editDialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="difineEditCustomer()">确 定</el-button>
            </div>
        </el-dialog>

        <el-row>
             <el-pagination
                background
                @current-change="handleCurrentChange"
                :page-size="1"
                layout="prev, pager, next,jumper"
                :total='total_num || 1' >
            </el-pagination>
        </el-row>

    </div>
</template>

<script>
import {serviceManage,pServiceManage,dServiceManage,eServiceManage} from 'service/service'
export default {
    data() {
        return {
            total_num: 1,
            total_page: 1,
            tableData: [],
            multipleSelection: [],
            isShowAlert:false,//是否显示弹框
            dialogFormVisible: false,
            editDialogFormVisible:false,
            formLabelWidth: '60px',
            loading:false,
            editScope:'',
            form:{
                name:'',
                phone:'',
                resetName:'',
                resetPassword:''
            }
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
        handleCurrentChange(val) {
            this.getServiceManage(val)
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        async getServiceManage(val){

            this.loading = true
            let manageData = await serviceManage({
                pageSize: val || 1
            })
            if(manageData.msg == 'ok' && manageData.status == '200'){
                this.tableData = manageData.data
                this.total_num = manageData.total_page
                this.loading = false
            }
        },
        addCustomer(){
            this.dialogFormVisible = true
            this.form.phone = ''
            this.form.name = ''
        },
        editCustomer(scope){
            this.editDialogFormVisible = true
            this.editScope = scope
            this.form.resetName = scope.row.mobile
            this.form.resetPassword = scope.row.s_name
        },
        async difineAddCustomer(){
            this.dialogFormVisible = false
            let resultData = await pServiceManage({
                service_mobile: this.form.phone,
                service_name: this.form.name,
           })
            if(resultData.msg == 'ok' && resultData.status == '200'){
                this.$message({
                    type: 'success',
                    message: resultData.data
                });
                this.getServiceManage()
            }

            this.loading = false;
        },
        async difineEditCustomer(){
             this.editDialogFormVisible = false
             
            let resultData = await eServiceManage({
                service_id:this.editScope.row.id,
                service_password:this.form.resetPassword,
                // service_mobile: this.form.phone,
                service_name: this.form.resetName,
           })
            if(resultData.msg == 'ok' && resultData.status == '200'){
                this.$message({
                    type: 'success',
                    message: resultData.data
                });
                this.getServiceManage()
            }
        },
        handleDelete(scope){
            let that = this
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async ()=>{
                let resultData = await dServiceManage({
                    service_id: scope.row.id
                })
                if(resultData.msg == 'ok' && resultData.status == '200'){
                    that.$message({
                        type: 'success',
                        message: resultData.data
                    });
                    this.getServiceManage()
                }  
            
            })
        },
        handleCurrentChange(val){
            this.getServiceManage(val)
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
