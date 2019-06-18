<template>
    <div class="robotSet">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/manage/robotManage' }">数据分析</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'/manage/robotManage'}">机器人数据</el-breadcrumb-item>
            <el-breadcrumb-item >设置</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="detail">
            <div class="photo">

            </div>
            <ul>
                <li>
                    <label>机器人名称：</label>{{dataList.robot_name}}
                </li>
                <li>
                    <label>机器人编号：</label>{{dataList.robot_code}}
                </li>
                <li>
                    <label>机器人类型：</label>{{dataList.robot_type}}
                </li>
                <li>
                    <label>部署类型：</label>{{dataList.deployment_form}}
                </li>
                <li>
                    <label>链接地址：</label>{{dataList.uri}}
                </li>
            </ul>
        </div>
        <ul class="setting">
            <li>
                <p><a>机器人名称:</a> <i class="el-icon-edit-outline" @click= 'showList.robot_name =!showList.robot_name'></i><i title="请输入机器人名称" class="el-icon-question"></i></p>
                <p class="content" v-if="showList.robot_name">{{dataList.robot_name}}</p>
                <el-input type="textarea" v-model="dataList.robot_name" v-else></el-input>
            </li>
            <li>
                <p><a>欢迎语:</a> <i class="el-icon-edit-outline" @click = 'showList.welcome_words=!showList.welcome_words'></i><i title="请输入客户第一次进来机器人进行回复的欢迎语" class="el-icon-question"></i></p>
                <p class="content" v-if="showList.welcome_words">{{dataList.welcome_words}}</p>
                <el-input type="textarea" v-model="dataList.welcome_words" v-else></el-input>
            </li>
             <li>
                <p><a>等待答复用语:</a> <i class="el-icon-edit-outline" @click="showList.wait_words=!showList.wait_words"></i><i title="当机器人再查找客户询问的问题时，将会显示等待答复用语告知客户正在查找答案" class="el-icon-question"></i></p>
                <p class="content" v-if="showList.wait_words">{{dataList.wait_words}}</p>
                <el-input type="textarea" v-model="dataList.wait_words" v-else></el-input>
            </li>
            <li>
                <p><a>超时结束语:</a> <i class="el-icon-edit-outline" @click='showList.timeout_words=!showList.timeout_words'></i><i title="当客户超过15分钟未询问机器人将会自动结束，这时机器人将会回复超时结束语" class="el-icon-question"></i></p>
                <p class="content" v-if="showList.timeout_words">{{dataList.timeout_words}}</p>
                <el-input type="textarea" v-model="dataList.timeout_words" v-else></el-input>
            </li>
            <li>
                <p><a>备注:</a> <i class="el-icon-edit-outline" @click='showList.comment = !showList.comment'></i><i title="请对机器人进行备注，以备区分" class="el-icon-question"></i></p>
                <p class="content" v-if="showList.comment">{{dataList.comment}}</p>
                <el-input type="textarea" v-model="dataList.comment" v-else></el-input>
            </li>
        </ul>
        <el-button type="primary" @click="editRobot">保存</el-button>
    </div>
</template>

<script>

// import {getRobot,robotDetail} from 'service/service'
// export default {
import {robotDetail,robotEdit} from 'service/service'
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
            dataList:'',
            showList:{
                robot_name:true,
                welcome_words:true,
                wait_words:true,
                timeout_words:true,
                comment:true
            }
         }
     },
     mounted(){
         this.getRobotDate()
         // console.log(this.tableData)
        
     },
     methods: {
         onSubmit() {
         },
         handleCurrentChange(val) {
             this.getRobotDate(val)
         },
         async getRobotDate(){
            let robotDate = await robotDetail({
                 robot_code: this.$route.query.robot_code,
                 product_id: this.$route.query.product_id
            })
            if(robotDate.status == '200' ){
                this.dataList = robotDate.data
            }
            
         },
        async editRobot(){
            let result = await robotEdit({
                 robot_name:this.dataList.robot_name,
                 robot_code: this.$route.query.robot_code,
                 product_id: this.$route.query.product_id,
                 comment: this.dataList.comment,
                 welcome_words: this.dataList.welcome_words,
                 wait_words:this.dataList.wait_words,
                 timeout_words: this.dataList.timeout_words ,
                 robot_hosting: this.dataList.robot_hosting
            })
            if(result.msg == 'ok' && result.status =='200'){
                this.$message({
                    type: 'success',
                    message: '设置成功'
                });
            }
        }
     }
}
 
</script>


<style lang="scss">
body {
    margin: 0;
}
.robotSet{
    position: absolute;
    padding: 8px;
    left: 0;
    width:100%;
    .detail{
        display: flex;
        flex-direction: row;
        margin-top: 60px;
        width: 1000px;

        .photo{
            width: 150px;
            background: url('../assets/image/robot.png') no-repeat center center;
        }
        ul{
            text-align: left;
            flex:1;
            li{
                margin: 15px 30px;
                color: #585858;
                font-size:15px;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(88,88,88,1)
            }
        }
    }
    .setting{
        display: flex;
        flex-wrap: wrap;
        li{
            margin: 10px;
            width:644px;
            height:179px;
            background:rgba(255,255,255,1);
            box-shadow:0px 4px 12px 1px rgba(0, 0, 0, 0.27);
            p{
                text-align: left;
                text-indent: 20px;
                padding: 20px;
                font-size: 16px;
                .el-icon-edit-outline{
                    display: inline-block;
                    padding: 0 0 0 40px;
                    color: #2E008B;
                    font-size: 20px;
                }
                i{
                    cursor: pointer;
                }
                a{
                    display: inline-block;
                }
                .el-icon-question{
                    color: #2E008B;
                    font-size: 20px;
                    display: inline-block;
                }
            }
            .content{
                text-indent: 40px;
                font-size:15px;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(98,98,98,1);
            }
            .el-textarea{
                width: 82%;
            }
            
        }
        

    }
    .el-button{
        padding: 12px 51px !important;
        margin: 30px!important;
    }
       
}
</style>