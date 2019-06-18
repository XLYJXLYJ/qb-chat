<template>
    <div class="robotManage">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/manage/robotManage'}">管理中心</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'/manage/robotManage'}">机器人管理</el-breadcrumb-item>
            <el-breadcrumb-item >个性化设置</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row> 
            <el-button type="primary" @click="news()" >新增</el-button>
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
         <el-dialog :title="title" :visible.sync="dialogFormVisible">
            <el-form :model="form" :rules="rule">
                <el-form-item label="功能图标：" :label-width="formLabelWidth">
                    <!-- <div>lalal</div> -->
                    <div style="display:flex">
                        <div style="width:200px"> 
                            <span :class="className" style="width: 70px;display:block;margin:auto; text-align: center;line-height: 40px;font-size: 30px;color:rgba(46,0,139,1);background:rgba(239,235,246,1);
                            border-radius:10px;font-weight: bold;">
                            </span>
                        </div>
                        <el-button type="primary" @click="dialogVisible = true">选择图标</el-button>
                    </div>
                </el-form-item>
                <el-form-item label="功能名称：" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="form.name" autocomplete="off" placeholder="请输入功能名称"></el-input>
                </el-form-item>
                <el-form-item label="超链接：" :label-width="formLabelWidth" prop="url">
                    <el-input v-model="form.url" autocomplete="off" placeholder="请输入超链接"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button  @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="newAdd()" v-if='showAdd'>确 定</el-button>
                <el-button type="primary" @click="repire()" v-else>确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog
             title="选择图标"
            :visible.sync="dialogVisible"
            width="400px">
            <ul style="display:flex;flex-wrap: wrap; justify-content: center;">
                <li v-for="i in 20" :key='i' @click="getClass($event,i)" :class="'iconfont iconicon-test'+i" :ref="'ref'+i"></li>
            </ul>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {robotPersonal,newRobotPersonal,delOrRepireRobot} from 'service/service'
export default {
    data() {
        return {
            total_num:'',
            total_page:'',
            loading:true,
            tableData: [],
            dialogVisible:false,
            dialogFormVisible: false,
            title:'新增个性化配置',
            showAdd:true,
            id:'',
            className:'iconfont iconicon-test',
            form: {
                name: '',
                url:''
            },
            rule:{
                name: [
                    { required: true, message: '请输入功能名称', trigger: 'blur' },
                    { max:200,message: '长度不超过200', trigger: 'blur' },
                    // { validator:checkUsername, trigger: 'blur' },
                ],
                url: [
                    { required: true, message: '请输入超链接', trigger: 'blur' },
                    { type:'url',max:200,message: '超链接不合法', trigger: 'blur' },
                    // { validator:checkUsername, trigger: 'blur' },
                ],
            },
            formLabelWidth: '100px'
           
        }
    },
    mounted(){
        this.getPersonalList();
    },
    methods: {
        getClass(e,i){
            Object.values(this.$refs).forEach(item=>{
                if(item[0] == undefined){
                    return
                }else{
                   item[0].style.backgroundColor = '#FFFFFF'
                } 
            })
            this.$refs['ref'+i][0].style.backgroundColor = 'rgba(239,235,246,1)'
            this.className = "iconfont iconicon-test"+i
        },
        handleCurrentChange(val) {
            this.getManageList(val)
        },
        async handleRepire(rows,key){
            this.dialogFormVisible = true;
            this.title = '修改个性化配置'
            this.id = rows.id
            this.className = rows.personal_image
            this.form.name = rows.personal_name
            this.form.url= rows.personal_url
            this.showAdd = false
        },
        async repire(){
            let result = await delOrRepireRobot({
                detail_id: this.id,
                personal_image: this.className,
                personal_name: this.form.name,
                personal_url: this.form.url,
                is_delete: 0
            })
            if(result.msg == 'ok' && result.status =='200'){
                this.dialogFormVisible = false;
                this.$message({
                    type: 'success',
                    message: '修改成功'
                });
                this.getPersonalList()
            }
        },
        handleDel(rows,type){
            this.$confirm('此操作将删除该个性化, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.delOrRepire(rows,type).then(result=>{
                    if(result.status =='200'){
                        this.getPersonalList()  
                        this.$message({
                            type: 'success',
                            message: '删除成功'
                        });
                    }else{
                        this.$message({
                            type: 'error',
                            message: result.msg

                        });
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
            
        },
        async getPersonalList(){
            let tableData = await robotPersonal({
                robot_id: this.$route.query.robot_id
            })
            if(tableData.msg == 'ok' && tableData.status == '200'){
                this.tableData = tableData.data;
            }
        },
        news(){
             this.dialogFormVisible = true
            this.title = '新增个性化配置'
            this.id =''
            this.className ='iconfont iconicon-test'
            this.form.name = ''
            this.form.url= ''
            this.showAdd = true
        },
        async newAdd (){
            if(this.form.name.length<1&&this.form.name.length>200){
                this.$message({
                    type: 'error',
                    message: '功能名称长度在1~200之间'
                });
            }else if(this.form.url.length<10&&this.form.url.length>200){
                this.$message({
                    type: 'error',
                    message: 'url长度在10~200之间'
                });
            }else if(!(this.form.url.indexOf('http') == 0 || this.form.url.indexOf('https') == 0)){
                this.$message({
                    type: 'error',
                    message: 'url应该包含http或者https协议头'
                });
            }else{
                let addResult = await newRobotPersonal({
                    robot_id: this.$route.query.robot_id,
                    personal_image: this.className,
                    personal_name: this.form.name,
                    personal_url: this.form.url
                })
                if(addResult.msg == 'ok' && addResult.status =='200'){
                    this.$message({
                        type: 'success',
                        message: '新增成功'
                    });
                    this.dialogFormVisible = false
                    this.getPersonalList()
                }else{
                    this.$message({
                        type: 'error',
                        message: addResult.data
                    });
                    this.dialogFormVisible = false
                }
            }
        },
        async delOrRepire (rows ,type){
            let result = await delOrRepireRobot({
                detail_id: rows.id,
                personal_image: rows.personal_image,
                personal_name: rows.personal_name,
                personal_url: rows.personal_url,
                is_delete: type
            })
            return result
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
    .el-dialog__body ul li{
        width:68px;
        height:68px;
        border-radius:9px;
        background:#ffffff;
        line-height: 68px;
        font-size:35px;
        color:rgba(46,0,139,1)
    }
    .el-dialog__body ul li:hover{
        width:68px;
        height:68px;
        background:rgba(239,235,246,1);
        border-radius:9px;
        line-height: 68px;
        font-size:35px;
        color:rgba(46,0,139,1)
    }
    .el-dialog__title{
        color:#2E008B;
        font-size: 17px;

    }
    .el-form-item__label{
        font-weight: bold;
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
.active{
    background:rgba(239,235,246,1);
}

</style>
