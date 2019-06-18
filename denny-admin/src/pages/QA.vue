<template>
    <div class="robotManage">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/manage/robotManage' }">管理中心</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'/manage/robotManage'}">机器人管理</el-breadcrumb-item>
            <el-breadcrumb-item >Q&A配置</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row> 
            <el-button type="primary" @click='add()'>添加</el-button>
            <el-button type="primary" @click="QAImport">批量添加</el-button>
            <!-- <el-button type="primary" >批量添加</el-button> -->
        </el-row>
        <el-table
            ref="multipleTable"
            :data="tableData"
            border
            tooltip-effect="dark"
            header-row-class-name='lll'
            style="width: 100%"
           >
            <el-table-column
                label="排序(前12为热门)"
                type="index"
                width="200px;"
                >
            </el-table-column>
            <el-table-column
                prop="name"
                label="问题"
                >
                <template slot-scope="scope">{{ scope.row.question }}</template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="答案"
                >
                <template slot-scope="scope">{{ scope.row.answer }}</template>
            </el-table-column>
             <el-table-column
                prop="address"
                label="操作"
                >
                <template slot-scope="scope">
                    <el-button @click="repireQA(scope.row)" type="text" size="small">修改</el-button>
                    <el-button type="text" size="small" @click='delectQA(scope.row)'>删除</el-button>   
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
        <el-dialog
            title="批量添加"
            :visible.sync="dialogVisible"
            width="40%"
            :before-close="handleClose">
            <el-upload
                class="upload-demo"
                drag
                action="111"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-change='changeStatus'
                :auto-upload="false"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip" >步骤说明</div>
                <div class="el-upload__tip" slot="tip" >1.下载表格模版</div>
                <div class="el-upload__tip" slot="tip" >2.按要求填写需要批量导入的固定问答对</div>
                <div class="el-upload__tip" slot="tip" >3.上传导入（不符合规则的数据将无法成功导入，需修改后重新导入）</div>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="getDowmLoad">下载模版</el-button>
                <el-button type='primary' @click="dialogVisible = false">取消上传</el-button>
                <el-button type="primary" @click="upLoadRequest">确定上传</el-button>
            </span>
        </el-dialog>
        <el-dialog
        title="提示"
        :visible.sync="showDialog"
        width="30%"
        :before-close="handleClose">
        <span>是否下载导入失败信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="showDialog = false">取 消</el-button>
            <el-button type="primary" @click="downLoadFailMessage">确 定</el-button>
        </span>
        </el-dialog>
         
    </div>
</template>

<script>
import {qaSetting,delQA,qaImport,downLoad,exportFile,volumeFile} from 'service/service'
import axios from 'axios'
export default {
    data() {
        return {
            total_num:'',
            total_page:'',
            loading:true,
            tableData: [],
            multipleSelection: [],
            dialogVisible: false,
            showDialog:false,
            file:''

        }
    },
    mounted(){
        this.getQAList();
    },

    methods: {
        QAImport(){
            this.dialogVisible = true
        },
        handlePreview(file){
            // console.log(file)
        },
        handleRemove(file,files){
            // console.log(file,files)
        },
        changeStatus(file,files){
            this.file = file
        },

        async upLoadRequest(){
            let formData = new FormData()
            formData.append('product_id',this.$route.query.product_id)
            formData.append('file',this.file.raw)
            formData.append('robot_code',this.$route.query.robot_code)
            axios.post('/merchant/v2.0/robot/volume_increase',
                formData
            ).then(res=>{

                if(res.data.status == 200){
                    this.$message({
                        message:'成功' + res.data.success +'失败' + res.data.fail,
                        type: 'success'
                    });
                    if(res.data.fail>0){
                        this.showDialog= true;
                    }
                    
                }else{
                    this.$message({
                        message: res.data.data,
                        type: 'error'
                    });
                }
                this.dialogVisible = false
                
            })
        },
        //qa添加
        add(rows){
            let params = {
                product_id:this.$route.query.product_id,
                robot_code: this.$route.query.robot_code
            }
            this.$router.push({ path: '/manage/addQA' ,query: params})
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
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
        handleCurrentChange(val) {
            this.getQAList(val)
        },
        repireQA(rows){
            let params = {
                qa_id:rows.id,
                robot_code:rows.robot_code,
                product_id :rows.product_id
            }
            this.$router.push({ path: '/manage/addQA' ,query: params})
        },
        async delectQA(rows){
            let result = await delQA({
                qa_id:rows.id
            })
            if(result.errcode == 200 ){
                this.$message({
                    message: result.errmsg,
                    type: 'success'
                });
                this.getQAList()
            }else{
                this.$message({
                    message: result.errmsg,
                    type: 'error'
                });
            }
        },
        async getQAList(val){
            let tableData = await qaSetting({
                product_id:this.$route.query.product_id,
                robot_code: this.$route.query.robot_code,
                p:val
            })
            if(tableData.errmsg == 'OK' && tableData.errcode == '200'){
                this.total_num = tableData.data.total
                this.total_page = tableData.data.pages
                this.tableData = tableData.data.list;
            }

        },
        async getDowmLoad(){
            let data = await downLoad()
            var a = document.createElement('a')
            // a.download = 
            var filename = 'UploadTemplate.xlsx'
            a.download = filename;
            a.href= window.URL.createObjectURL(data)
            a.click()
        },
        async downLoadFailMessage(){
            let data = await volumeFile()
            var a = document.createElement('a')
            var filename = 'robotFail.xls'
            a.download = filename;
            a.href= window.URL.createObjectURL(data)
            a.click()
            this.showDialog = false
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
