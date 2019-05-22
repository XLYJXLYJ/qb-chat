<template>
    <div class="robotManage">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/' }">管理中心</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'salesFunnel'}">机器人管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'salesFunnel'}">个性化设置</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row> 
            <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
        </el-row>
        <el-table
            ref="multipleTable"
            :data="tableData"
            border
            tooltip-effect="dark"
            style="width: 100%"
           >
            <el-table-column
                label="机器人名称"
                >
                <template slot-scope="scope">{{ scope.row.robot_name }}</template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="功能名称"
                >
                <template slot-scope="scope">{{ scope.row.personal_name }}</template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="超链接"
                >
                <template slot-scope="scope">{{ scope.row.personal_url }}</template>
            </el-table-column>
             <el-table-column
                prop="address"
                label="操作"
                >
                <template slot-scope="scope">
                    <el-button @click="handleRepire(scope.row,0)" type="text" size="small">修改</el-button>
                    <el-button @click="handleDel(scope.row,1)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
            
        </el-table>
         <el-dialog title="新增个性化设置" :visible.sync="dialogFormVisible" center>
            <el-form :model="form">
                <el-form-item label="功能图标：" :label-width="formLabelWidth">
                    <!-- <div>lalal</div> -->
                    <div style="display:flex">
                        <div style="width:200px"></div>
                        <el-button type="primary">选择图标</el-button>
                    </div>
                    
                </el-form-item>
                <el-form-item label="功能名称：" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="超链接：" :label-width="formLabelWidth">
                    <el-input v-model="form.url" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {robotPersonal,newRobotPersonal,delOrRepireRobot} from 'service/service'
import { type } from 'os';
export default {
    data() {
        return {
            total_num:'',
            total_page:'',
            loading:true,
            tableData: [],
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                name: '',
                url:''
            },
            formLabelWidth: '100px'
           
        }
    },
    mounted(){
        this.getPersonalList();
    },

    methods: {
        
        handleCurrentChange(val) {
            this.getManageList(val)
        },
        async handleRepire(rows){
            let result = await delOrRepireRobot({
                detail_id: rows.id,
                personal_image: rows.personal_image,
                personal_name: rows.personal_name,
                personal_url: rows.personal_url,
                is_delete: 0
            })
        },
        handleDel(rows,type){
            this.$confirm('此操作将删除该个性化, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.delOrRepire(rows,type) 
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
            
        },
        async getPersonalList(){
            alert(1)
            let tableData = await robotPersonal({
                robot_id: this.$route.query.robot_id
            })
            if(tableData.msg == 'ok' && tableData.status == '200'){
                this.tableData = tableData.data;
            }
        },
        async newAdd (){
            let addResult = await newRobotPersonal({
                robot_id: 1,
                personal_image: 'iconfont iconicon-test11',
                personal_name: 'wewe',
                personal_url: 'http://baidu.com'
            })
        },
        async delOrRepire (rows ,type){
            let result = await delOrRepireRobot({
                detail_id: rows.id,
                personal_image: rows.personal_image,
                personal_name: rows.personal_name,
                personal_url: rows.personal_url,
                is_delete: type
            })
            if(result.msg == 'ok' && result.msg =='200'){
                this.getPersonalList()
                this.$message({
                    type: 'success',
                    message: result.data
                });
                
            }else{
                this.$message({
                    type: 'error',
                    message: result.data
                });
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
.el-dialog{
    width: 400px;
}
.el-dialog__title{
    color:#2E008B
}
.el-form-item__label{
    font-weight: bold;
}
</style>
