<template>
    <div class="header">
        <div class="logo"></div>
        <div class="user">
            <span @click="showUsrInfo()">{{userInfo.name}}{{userInfo.company}}</span>
        </div>
        <div class="login">
            <span @click="dLogin">退出</span>
            
        </div>
        <el-dialog
            title="基本设置"
            :visible.sync="centerDialogVisible"
            width="35%"
            center>
            <ul class="message">
                <li><label>用户名:</label> {{adminInfo.name}}</li>
                <li><label>公司:</label> {{adminInfo.company}}</li>
                <li><label>身份:</label> {{adminInfo.identity}}</li>
                <li><label>手机:</label> {{adminInfo.mobile}}</li>
            </ul>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="reset()">点此重置登录密码</el-button>
            </span>
        </el-dialog>
        <el-dialog title="重置密码" :visible.sync="dialogFormVisible" center width='550px'>
            <el-form :model="form" label-position="right">
                <el-form-item label="用户名："  :label-width="formLabelWidth">
                    18320863946
                </el-form-item>
                <el-form-item label="新密码："  :label-width="formLabelWidth">
                    <el-input v-model="form.password" autocomplete="off" placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：" :label-width="formLabelWidth">
                    <el-input v-model="form.repeat" autocomplete="off" placeholder="请确认新密码"></el-input>
                </el-form-item>
                <el-form-item label="输入验证码：" :label-width="formLabelWidth">
                    <el-input  v-model="form.checkCode" autocomplete="off" placeholder="请输入验证码"></el-input>
                    <el-button type="primary" @click="checkCode()">{{tips}}</el-button>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="resetPsw()">确定修改</el-button>
            </div>
        </el-dialog>
    </div> 
</template>

<script>
import { delLogin ,getInfo, getCheckCode,resetPassWord} from 'service/service'
export default {
    data(){
        return{
            userInfo:'',
            centerDialogVisible:false,
            dialogFormVisible:false,
            formLabelWidth:120,
            adminInfo:{},
            tips:'获取验证码',
            form:{
                mobile:'',
                password:'',
                repeat:'',
                checkCode:''
            }
        }
    },
    mounted(){
        this.userInfo =  JSON.parse(localStorage.getItem('useInfo'))
    },
    methods:{
        dLogin(){
            this.doDelLogin()
        },
        async doDelLogin(){
            let data =  await delLogin()
            if(data.errcode == 200){
                window.location.href = '/platform.html'
            }
        },
        async getUseInfo(){
            let data = await getInfo()
            if(data.errcode == 200){
                this.adminInfo = data.data;
            }
        },
        async checkCode(){
            let data = await getCheckCode({
                phones:this.adminInfo.mobile
            })
            if(data.errcode == 200){
                 this.$message({
                    message: result.errmsg,
                    type: 'success'
                });
            }
        },
        async resetPsw(){
            let data = await resetPassWord({
                mobile: this.adminInfo.mobile,
                password: this.form.password,
                password2: this.form.repeat,
                sms_code: this.form.checkCode
            })
            if(data.errcode == 200){
                this.$message({
                    message: data.errmsg,
                    type: 'success'
                });
            }else{
                this.$message({
                    message: data.errmsg,
                    type: 'fail'
                });
            }
            this.dialogFormVisible = false

        },
        showUsrInfo(){
            this.getUseInfo()
            this.centerDialogVisible = true
            
        },
        reset(){
            this.centerDialogVisible = false
            this.dialogFormVisible = true
        }
    }
}
</script>
<style lang="scss">
    .header{
        width: 100%;
        height: 100%;
        background:rgba(46,0,139,1);
        margin: auto;
        display: flex;
        .logo{
            width:300px;
            height:100%;
            background: url('../assets/image/logo@2x.png') no-repeat left 40px center;
            background-size: 180px 28px;
        }
        .user{
            flex: 5;
            text-align:right;
            height: 100%;
            line-height: 80px;
            span{
                cursor: pointer;
                font-size:14px;
                font-weight:500;
                color:rgba(225,225,225,1);
            }
        }
        .login{
            height: 100%;
            line-height: 80px;
            text-align: left;
            text-indent: 20px;
            flex: 1;
            span{
                cursor: pointer;
                font-size:14px;
                font-weight:500;
                color:rgba(225,225,225,1);
            }
        }
        .el-dialog{
            width: 800px;
            .message{
                display: flex;
                width: 90%;
                flex-wrap: wrap;
                justify-content: space-around;
                li{
                    width: 50%;
                    text-align: left;
                    text-indent: 30px;
                    color: #656565;
                    label{
                        color:#303133;
                        font-size: 15px;
                    }
                }
            }
            .el-input{
                width: 50%;
                margin-right:20px; 
            }
            .el-form-item__label{
                width: 110px;
            }
        }
    }
</style>
