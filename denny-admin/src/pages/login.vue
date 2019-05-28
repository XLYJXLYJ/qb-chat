<template>
    <div id="login">
        <div class="login-form">
            <div class="bg">

            </div>
            <div class="form">
                <el-form :model="form" :rules="rules" ref="ruleForm" >
                    <el-form-item prop="name">
                        <el-input v-model="form.name" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item prop="region">
                        <el-input type="password" v-model="form.region" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="记住账号密码" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click='jump()'>登陆</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import {login} from 'service/service'
export default {
    data() {
      return {
        form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
        },
        rules: {
            name: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
            ],
            region: [
                { required: true, message: '请输入密码', trigger: 'change' },
                { min: 8, max: 15, message: '长度在 8 到 15 个字符', trigger: 'blur' }
            ]
        },
        input:''
      }
    },
    mounted(){
    },
    methods:{
        jump :async function(){
            let res = await login({
                mobile:this.form.name,
                password:this.form.region
            })
            if(res.errcode =='0' && res.errmsg == "登录成功"){
                console.log(res.data)
                localStorage.setItem('useInfo',JSON.stringify(res.data))
                this.$router.push({ path: '/platfrom/choosePlatform' })
                this.$message({
                    message: res.errmsg,
                    type: 'success'
                });
            } else {
                this.$message({
                    message: res.errmsg,
                    type: 'fail'
                });
            }
        }
    }

}
</script>

<style lang="scss">
#login{
    width: 1200px;
    height: 100%;
    margin: auto;
    .login-form{
        width: 100%;
        overflow: hidden;
        .bg{
            margin-top:63px;
            width: 100%;
            height: 140px;
            background: url('../assets/image/robot@2x.png') no-repeat bottom -30px center;
            background-size: 108px 140px;
        }
        .form{
             width: 365px;
             height: 600px;
             margin: auto;
             background: url('../assets/image/form@2x.png') no-repeat top center;
             background-size: 365px 296px;
             .el-form{
                padding: 70px 60px;
                .el-form-item__content{
                    line-height: 0px;
                    .el-input{
                    // margin: 10px auto 20px;
                     .el-input__inner{
                         height: 32px;
                         line-height: 32px;
                         border-radius:2px;
                         font-size: 12px;
                         background :rgba(202,202,202,0);
                         color: white;
                        }
                    }
                    .el-checkbox__label{
                        font-size: 12px;
                        color: white;
                    }
                    .el-button--primary{
                        width:249px;
                        height:32px;
                        background:rgba(40,30,133,1);
                        box-shadow:0px 2px 3px 0px rgba(4,0,0,0.36);
                        border-radius:5px;
                        line-height: 6px;
                        font-size: 14px;
                    }
                }


             }
        }
    }
}

</style>
