<template>
    <div class="chooseplateform">
        <div class="platForm">
             <div class="Customer" :class="{'prowerCustomer':userInfo.customer_service_status != '1'} ">
                 <p>在线客服中心</p>
                 <div class="intro">
                     为语音质检系统，其
                    内包含语音质检、查
                    看质检结果、创建质
                    检任务等。
                 </div>
             </div>
             <div class="Quality" @click='goQuility()' :class="{'prowerQuality':userInfo.customer_service_status != '1'} ">
                 <p>智能质检中心</p>
                 <div class="intro">
                     为语音质检系统，其
                    内包含语音质检、查
                    看质检结果、创建质
                    检任务等。
                 </div>
             </div>
             <div class="Call" :class="{'prowerCall':userInfo.user_xa_status != '1' }" @click='goCall()'>
                 <p>智能呼叫中心</p>
                 <div class="intro">
                     为语音质检系统，其
                    内包含语音质检、查
                    看质检结果、创建质
                    检任务等。
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
import {smartCall} from 'service/service'
export default {
    data(){
        return{
            userInfo:{}
        }
    },
    mounted(){
        this.userInfo = JSON.parse(localStorage.getItem('useInfo')) 
    },
    methods:{
        goQuility(){
            // location.href = '/index.html'
            window.open('/index.html','_blank');
        },
        async goCall(){
            if(this.userInfo && this.userInfo.customer_service_status == '1'){
                let res = await smartCall()
                console.log(res)
            }
        }
    }
  
}
</script>

<style lang='scss'>
.chooseplateform{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    .platForm {
        width: 1200px;
        margin: 200px auto 100px;
        height:400px ;
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        .Customer,.Quality,.Call{
            width:227px;
            height: 316px; 
            border:4px solid rgba(255,255,255,1);
            border-radius:27px;
            p{
                margin-top:240px;
                text-align: center; 
                font-size:22px;
                font-weight:bold;
                color:rgba(255,255,255,1);
            }
            .intro{
                display: none;
            }

        }
        .Customer{
            background: url('../assets/image/chat@2x.png') no-repeat top 80px center;
            background-size:120px 120px;
        }
        .Quality{
             background: url('../assets/image/quality@2x.png') no-repeat top 80px center;
            background-size:120px 120px;
        }
        .Call{
             background: url('../assets/image/call@2x.png') no-repeat top 80px center;
            background-size:120px 120px;
        }
        .Customer:hover{
           
            background-size:120px 120px;
            border-radius:27px;
            background:linear-gradient(0deg,rgba(0,0,0,0.68) 32%,rgba(202,202,202,0) 100%);
            opacity:0.8;
            border: none;
            transition: opacity 2s, background 2s,border 2s;
            p{
                display: none;
            }
            .intro{
                display: block;
                text-align: center;
                padding: 40px 20px;
                font-size:18px;
                font-weight:500;
                color:white;
                line-height:40px;
                opacity:1;
            }
        }
        .Quality:hover{
            background-size:120px 120px;
             background:linear-gradient(0deg,rgba(0,0,0,0.68) 32%,rgba(202,202,202,0) 100%);
            opacity:0.8;
            border: none;
            transition: opacity 2s, background 2s,border 2s;
            p{
                display: none;
            }
            .intro{
                display: block;
                text-align: center;
                padding: 40px 20px;
                font-size:18px;
                font-weight:500;
                color:white;
                line-height:40px;
                opacity:1;
            }
        }
        .Call:hover{
             background-size:120px 120px;
             background:linear-gradient(0deg,rgba(0,0,0,0.68) 32%,rgba(202,202,202,0) 100%);
            opacity:0.8;
            border: none;
            transition: opacity 2s, background 2s,border 2s;
            p{
                display: none;
            }
            .intro{
                display: block;
                text-align: center;
                padding: 40px 20px;
                font-size:18px;
                font-weight:500;
                color:white;
                line-height:40px;
                opacity:1;
            }
        }
        .prowerCustomer ,.prowerCall, .prowerQuality{
            width:227px;
            height: 316px; 
            border:4px solid rgba(177,177,177,1);
            border-radius:27px;
            p{
                margin-top:240px;
                text-align: center; 
                font-size:22px;
                font-weight:bold;
                color:#B1B1B1;
            }
            .intro{
                display: none;
            }
           
        }
        .prowerCustomer{
                background: url('../assets/image/chat_gray@2x.png') no-repeat top 80px center;
                background-size:120px 120px;
            }
        .prowerCall{
            background: url('../assets/image/quality_gray@2x.png') no-repeat top 80px center;
            background-size:120px 120px;
        }
        .prowerQuality{
            background: url('../assets/image/call_gray@2x.png') no-repeat top 80px center;
            background-size:120px 120px;
        }
        .Customer.prower .Call.prower .Quality.prower:hover{
            background-size:120px 120px;
            background:linear-gradient(0deg,rgba(0,0,0,0.68) 32%,rgba(202,202,202,0) 100%);
            opacity:0.8;
            border: none;
            transition: opacity 2s, background 2s,border 2s;
            p{
                display: none;
            }
            .intro{
                display: block;
                text-align: center;
                padding: 40px 20px;
                font-size:18px;
                font-weight:500;
                color:white;
                line-height:40px;
                opacity:1;
            }
         }


    }
}

</style>
