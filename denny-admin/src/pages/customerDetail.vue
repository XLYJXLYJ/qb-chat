<template>
    <div class="robotDate">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/manage/customerServiceData' }">数据分析</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'/manage/customerServiceData'}">客服数据</el-breadcrumb-item>
            <el-breadcrumb-item >客服数据详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="talkBox">
            <ul class="topBar">
                <li>
                    <label for="">机器人名称：</label>{{tableData.robot_name}}
                </li>
                 <li>
                    <label for="">开始时间：</label>{{tableData.start_time}}
                </li>
                <li>
                    <label for="">聊天时长：</label>{{tableData.time_length}}
                </li>
            </ul>
            <div class="contain">
                <ul class="scroll">
                     <li v-for="(item,key) in tableData.log_dict_list" :key='key'>
                        <div class="customer" v-if="item.role == 'customer'">
                            <ul class="left-message">
                                <li class="image">客户</li>
                                <li class="name">{{item.name}}</li>
                                <li class="time">{{item.create}}</li>
                            </ul>
                            <div class="content">
                                {{item.content}}
                            </div>
                        </div>
                        <div class="service" v-else>
                            <ul class="right-message">
                                <li class="time">{{item.create}}</li>
                                <li class="name">{{item.name}}</li>
                                <li class="image">客服</li>
                                
                                
                            </ul>
                            <div class="content">
                                {{item.content}}
                            </div>
                        </div>
                    </li>
                    
                   

                </ul>
            </div>

        </div>
    </div>
</template>
<script>
import { customerDetail } from 'service/service'
import { get } from 'http';
export default {
    data() {
        return {
            tableData: [],
            current_page:1
           

        }
    },
    mounted(){
        this.getCustomerDetail()
    },
    methods: {
        onSubmit() {
            // console.log('submit!');
            this.getData(this.current_page)
        },
        handleCurrentChange(val) {
            this.current_page = val
            this.getData(val)
        },
        async getCustomerDetail(){
           let data = await customerDetail({
                customer_token:this.$route.query.customer_token
           })
           if(data.msg=='ok' && data.status == '200'){
               this.tableData = data.data
            //    this.total_num = data.data.total_page*10
            //    console.log(this.total_num)
           }
        }
    }

}
</script>


<style lang="scss">
    .robotDate{
        position: absolute;
        padding: 8px;
        left: 0;
        width:100%;
       .talkBox{
           margin-top:30px; 
           width: 900px;
        //    height: 600px;
           .topBar{
               width: 100%;
               height: 40px;
               display: flex;
               justify-content:space-around;
               flex-wrap: nowrap;
               li{
                   font-size: 15px;
                   line-height: 40px;
                   margin-bottom:20px; 
               }
           }
           .contain{
                width:895px;
                height:689px;
                background:rgba(241,241,241,1);
                border:2px solid rgba(220,220,220,1);
                border-radius:6px;
                position: relative;
                .scroll{
                    position: absolute;
                    width: 895px;
                    height:680px;
                    top: 0;
                    left: 0;
                    overflow-y: auto;
                    .customer{
                        margin: 20px;
                        text-align: left;
                        max-width: 500px;
                        .left-message{
                            display:flex;
                            // justify-content: flex-start;
                            padding: 10px;
                            line-height: 40px;
                             .image{
                                width:40px;
                                height: 40px;;
                                background:rgba(124,129,193,1);
                                border-radius:50%;
                                text-align: center;
                                line-height: 40px;
                                font-size:14px;
                                font-family:PingFang-SC-Regular;
                                font-weight:400;
                                color:rgba(255,255,255,1);
                            }
                            .name{
                                flex:2;
                                text-align: center;
                            }
                            .time{
                                flex:3;
                                text-align: right;
                            }
                        }
                        .content{
                            // width: 500px;
                            background: rgba(255, 255, 255, 1);
                            border: 1px solid rgba(221, 221, 221, 1);
                            border-radius: 0px 30px 30px 30px;
                            margin-left: 67px;
                            color: rgba(102, 102, 102, 1);
                            line-height: 30px;
                            padding: 18px 28px 26px 18px;
                            background:rgba(255,255,255,1);
                            box-shadow:0px 3px 9px 0px rgba(82, 82, 82, 0.35);
                            word-wrap: break-word;
                            font-size:15px;
                            font-weight:bold;
                            color:rgba(47,47,47,1);
                        }
                    }
                    .service{
                        text-align: right;
                        margin-left:390px; 
                        width: 500px;
                        .right-message{
                            display:flex;
                            justify-content: space-around;
                            padding: 10px;
                            text-align: right;
                            line-height: 40px;
                            .image{
                                width:40px;
                                height: 40px;;
                                background:rgba(124,129,193,1);
                                border-radius:50%;
                                text-align: center;
                                line-height: 40px;
                                font-size:14px;
                                font-family:PingFang-SC-Regular;
                                font-weight:400;
                                color:rgba(255,255,255,1);
                            }
                            .name{
                                flex:2;
                                text-align: center;
                            }
                            .time{
                                flex:3;
                                text-align: left;
                            }
                           
                        }
                        .content{
                            text-align: left;
                            background: rgba(255, 255, 255, 1);
                            border: 1px solid rgba(221, 221, 221, 1);
                            margin-right: 67px;
                            font-size: 15px;
                            font-weight:bold;
                            color: white;
                            line-height: 30px;
                            padding: 26px 18px 16px 28px;
                            background:rgba(46,0,139,1);
                            border:2px solid rgba(220,220,220,1);
                            // box-shadow:0px 3px 9px 0px rgba(82, 82, 82, 0.35);
                            border-radius:30px 0px 31px 31px;
                            word-wrap: break-word;
                            li{
                                text-align: right;
                            }
                        }

                    }
                }
           }

        }
       

    }
</style>