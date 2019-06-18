<template>
    <div class="order">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/manage/packageBalanceManage' }">用户中心</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'/manage/packageBalanceManage'}">套餐/余额管理</el-breadcrumb-item>
            <el-breadcrumb-item >{{nav}}</el-breadcrumb-item>
        </el-breadcrumb>
        <ul class="orderMessage" v-if="showOrder">
            <li>
                <label for="">订单号：</label>{{orderMessage.order_number}}
            </li>
            <li>
                 <label for="">提交时间：</label>{{orderMessage.order_time}}
            </li>
            <li>
                <label for="">对话类型：</label>{{orderMessage.order_type}}
            </li>
            <li>
                <label for=""> 对话条数:</label>{{orderMessage.order_number}}
            </li>
            <li>
                <label for="">有效期至:</label>{{orderMessage.order_validity_period}}
            </li>
            <li>
                <label for="">优惠信息:</label>{{orderMessage.preferential_information}}
            </li>
        </ul>
        <el-breadcrumb separator="/" style='margin-top:50px'>
            <el-breadcrumb-item >支付方式</el-breadcrumb-item>
        </el-breadcrumb>
        <ul class="pay-ways">
            <li v-for="(index,item) in payWay" :key='item' :class="[{ active: index.active }, index.class]" @click='changePayWay(item)' v-show='index.show'>
                <img class ='image' :src="index.url" >
                <span>{{index.name}}</span>
            </li>
        </ul>
        <p class="tips" v-if="showTips">温馨提示：微信支付每笔最高交易金额为5000元</p>
       
        <div class="banks" v-show="showBank">
            <el-breadcrumb separator="/" style='margin-top:50px'>
                <el-breadcrumb-item >企业银行支付</el-breadcrumb-item>
            </el-breadcrumb>
           
            <ul class='corporation'>
                <li v-for='(item,index) in cBankList' :key='index' bank_code="item.bankCode" @click="getTransferPay(item,index,'corporation')" :class="{active:item.show}">
                    <img :src="item.url" />
                </li>
            </ul>
            <el-breadcrumb separator="/" style='margin-top:50px'>
                <el-breadcrumb-item >个人网银支付</el-breadcrumb-item>
            </el-breadcrumb>
            <ul class='personal'>
                <li v-for='(item,index) in bankList' :key='index' bank_code="item.bankCode" @click="getTransferPay(item,index,'personal')" :class="{active:item.show}">
                    <img :src="item.url" />
                </li>
            </ul>
        </div>
        <div class="pay">
            <span class="go">总价：</span>
            <span class="sum">¥<span class="active">{{price}}</span></span>
            <el-button type="primary" @click="onSubmit">支付</el-button>
        </div>
        <el-dialog
            title="微信支付"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>微信扫码支付</span>
            <div>
                <img :src="pay_request"/>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <form action="http://pay.qibaozz.com/payment/yeepay/pay" method="post" target="_blank">
			<input type="hidden" name="platform_id" class="platform_id" />
			<input type="hidden" name="type" class="type"/>
			<input type="hidden" name="order_id" class="order_id"/>
			<input type="hidden" name="amount" class="amount"/>
			<input type="hidden" name="currency_id" class="currency_id"/>
			<input type="hidden" name="product_name" class="product_name"/>
			<input type="hidden" name="channel" class="channel"/>
			<input type="hidden" name="channel_interface" class="channel_interface"/>
			<input type="hidden" name="bank_code" class="bank_code"/>
			<input type="hidden" name="created_id" class="created_id"/>
			<input type="hidden" name="time" class="time"/>
			<input type="hidden" name="sign" class="sign"/>
			<button type="submit" class="submit" style="display: none;"></button>
		</form>
        
    </div>
</template>

<script>
import { newOrder,weiXinPay,transferPay,pay,payBack,rechargeOrderCreate,rechargeOrder,balanceOrderPay} from 'service/service'
import axios from 'axios'
import $ from 'jquery'
export default {
    data() {
        return {
            orderMessage:'',
            formInline: {
                user: 3000,
                region: ''
            },
            nav:'订单提交',
            showTips :true,
            showBank:false,
            bank_code:'',
            current:'weixin',
            dialogVisible:false,
            price:'',
            showOrder:false,
            recharge_number:'',
            pay_request:'',
            payWay:[
                {
                    class:'weChat_pay',
                    name:'微信支付',
                    url:require('../assets/image/weChat.png'),
                    active:true,
                    show:true
                },
                {
                    class:'balance_pay',
                    name:'余额支付',
                    url:require('../assets/image/balance.png'),
                    active:false,
                    show:this.$route.query.price
                },
                {
                    class:'transfer_pay',
                    name:'转账支付',
                    url:require('../assets/image/transfer.png'),
                    active:false,
                    show:true
                }
            ],
            cBankList:[
                {
                    bankCode:'ICBC-NET-B2B',
                    url:require('../assets/image/ICBC.jpg'),
                    show:true
                },
                {
                    bankCode:'CMBCHINA-NET-B2B',
                    url:require('../assets/image/CMB.gif'),
                    show:false
                },
                {
                    bankCode:'ABC-NET-B2B',
                    url:require('../assets/image/ABC.png'),
                    show:false
                },
                {
                    bankCode:'CCB-NET-B2B',
                    url:require('../assets/image/CCB.png'),
                    show:false
                },
                {
                    bankCode:'CEB-NET-B2B',
                    url:require('../assets/image/guangda.jpg'),
                    show:false
                },
                {
                    bankCode:'BOC-NET-B2B',
                    url:require('../assets/image/BOC.png'),
                    show:false
                },
                {
                    bankCode:'SDB-NET-B2B',
                    url:require('../assets/image/PAB.png'),
                    show:false
                },
                {
                    bankCode:'SPDB-NET-B2B',
                    url:require('../assets/image/SPDB.png'),
                    show:false
                },
                {
                    bankCode:'CMBC-NET-B2B',
                    url:require('../assets/image/CMHB.png'),
                    show:false
                }
                
            ],
            bankList:[
                {
                    bankCode:'CMBCHINA-NET-B2C',
                    url:require('../assets/image/CMB.gif'),
                    show:false
                },
                {
                    bankCode:'PINGANBANK-NET-B2C',
                    url:require('../assets/image/PAB.png'),
                    show:false
                },
                {
                    bankCode:'CCB-NET-B2C',
                    url:require('../assets/image/CCB.png'),
                    show:false
                },
                {
                    bankCode:'ABC-NET-B2C',
                    url:require('../assets/image/ABC.png'),
                    show:false
                },
                {
                    bankCode:'ICBC-NET-B2C',
                    url:require('../assets/image/ICBC.jpg'),
                    show:false
                },
                {
                    bankCode:'BOC-NET-B2C',
                    url:require('../assets/image/BOC.png'),
                    show:false
                },
                {
                    bankCode:'POST-NET-B2C',
                    url:require('../assets/image/PSBOC.png'),
                    show:false
                },
                {
                    bankCode:'CMBC-NET-B2C',
                    url:require('../assets/image/CMHB.png'),
                    show:false
                }

                
            ]
        }
    },
    mounted(){
        
        if(this.$route.query.dialogue_number&&this.$route.query.price){
            this.getOrder()
            this.price = this.$route.query.price;
            this.showOrder = true;
            this.nav='订单提交'
        }
        if(this.$route.query.region){
            this.getRechargeOrder()
            this.showOrder = false;
            this.price = this.$route.query.region;
            this.nav='余额充值'
        }
    },
    methods: {
        async getRechargeOrder(){
            let data =await rechargeOrderCreate({
                recharge_money: this.$route.query.region
            })
            this.recharge_number = data.data.recharge_number
            
        },
        async getOrder(){
           
            let resultData = await newOrder({
                dialogue_number:this.$route.query.dialogue_number,
                price:this.$route.query.price
            })
            if(resultData.status == '200'){
                this.orderMessage = resultData.data
            }
        },
        async orderPay(){
            let resultData = await rechargeOrder({
                recharge_number: this.recharge_number
            })
            if(resultData.status == '200'){
                // console.log(resultData)
                this.pay_request = resultData.pay_request
            }
        },
        async getWeiXinPay(){
            let resultData = await weiXinPay({
                order_number:this.orderMessage.order_number,
            })
            // console.log(resultData)
            if(resultData.status == '200'){
                this.orderMessage = resultData.data
            }
           
        },
         async getPay(){
            let resultData = await pay({
                order_number:this.orderMessage.order_number,
            })
            if(resultData.status == '200'){
                this.pay_request = resultData.pay_request
            }
        },
        async getTransferPay(item,index,persion){
            // console.log(item,index,persion)
            this.cBankList.map(it =>{
                it.show = false;
            })
            this.bankList.map(it=>{
                it.show = false;
            })
            if(persion == 'corporation'){
                this.cBankList[index].show =true;
            }
            if(persion == 'personal'){
                this.bankList[index].show =true;
            }
            var resultData
            if(this.$route.query.price){
                resultData =await transferPay({
                    order_number:this.orderMessage.order_number,
                    bank_code:item.bankCode
                })
                this.bank_pay = resultData.bank_pay
            }
            if(this.$route.query.region){
                resultData =await balanceOrderPay({
                    recharge_number: this.recharge_number,
                    bank_code:item.bankCode
                })
                this.bank_pay = resultData.pay_request
            }
            
            if(resultData.status == '200'){
                $('.platform_id').val(this.bank_pay.platform_id) 
                $('.type').val(this.bank_pay.type)
                $('.order_id').val(this.bank_pay.order_id) 
                $('.amount').val( this.bank_pay.amount) 
                $('.currency_id').val(this.bank_pay.currency_id) 
                $('.product_name').val( this.bank_pay.product_name) 
                $('.channel').val(this.bank_pay.channel) 
                $('.channel_interface').val(this.bank_pay.channel_interface) 
                $('.bank_code').val(this.bank_pay.bank_code) 
                $('.created_id').val(this.bank_pay.created_id)
                $('.time').val(this.bank_pay.time)
                $('.sign').val(this.bank_pay.sign)
                // var res = {};
                // var tempArr = this.bank_pay.split('#')[0].split('&');
                // console.log(tempArr)
                // tempArr.forEach(function (item) {
                //     var query = item.split('=');
                //     res[decodeURIComponent(query[0])] = decodeURIComponent(query[1]);
                // });
                // payBack(res).then(response=>{
                //     console.log(response)
                // })
                // axios.post('http://pay.qibaozz.com/payment/yeepay/pay',res).then(response=>{
                //     console.log(response)
                // })
            }
        },
        changePayWay(item){
            this.payWay.map(item=>{
                item.active = false
            })
            this.payWay[item].active = true;
            if(item == 0){
                this.current = 'weixin'
                this.showTips = true;
                this.showBank =false
            }else if(item == 1){
                this.current = 'balance'
                this.showTips = false
                this.showBank =false
            }else{
                this.current = 'transfer'
                this.showTips =false
                this.showBank =true
            }
        },
       
        onSubmit(){
            if(this.current == 'weixin' && this.$route.query.region){
                this.dialogVisible = true;
                this.orderPay()
            }
            if(this.current == 'weixin' && this.$route.query.price){
                this.dialogVisible = true;
                this.getPay()
                this.getWeiXinPay()
                // document.getElementsByClassName('submit').click()
            }
            if(this.current == 'transfer'){
                $('.submit').click()
            }
        },
        handleClose(){
             this.dialogVisible = false;
        }
    }
}
</script>

<style lang="scss">

.order{
    .orderMessage{
        width: 900px;
        display: flex;
        flex-wrap: wrap;
        margin-top:20px; 
        li{
            width: 50%;
            text-align: left;
            text-indent: 30px;
            padding: 20px ;
            font-size:15px;
            font-weight:400;
            
            color: #606266;
            label{
                font-size: 15px;
                color:rgba(70,70,70,1);
                padding: 0 10px;
            }
        }
        
    }
    .pay-ways{
        width: 1000px;
        display: flex;
         justify-content: space-around;
         margin-top:30px; 
        .weChat_pay,.balance_pay,.transfer_pay{
            //  flex: 1
            width: 250px;
            height: 68px;
            line-height: 68px;
            border:1px solid rgba(191,191,191,1);
            border-radius:8px;
            position: relative;
            font-size:16px;
            text-indent: 40px;
            font-weight:500;
            color:rgba(70,70,70,1);
           
            .image{
                position: absolute;
                top: 12px;
                left: 60px;
                width: 40px;
                height: 40px;;
            }
            .weChat{
                width: 48px;
                left: 55px;
                height: 38px;
            }
        }
        .active{
            border:1px solid rgba(0,10,139,1)
            
        }

    }
    .tips{
        text-align: left;
        color: red;
        text-indent: 15px;
        padding: 10px;
        font-size: 12px;
    }
    .pay{
        width: 850px;
        text-align: right;
        margin-top:30px; 
        .go{
            font-size:13px;
            font-weight:500;
            color:rgba(70,70,70,1);
        }
        .sum{
            font-size:16px;
            font-weight:bold;
            color:rgba(46,0,139,1);
            line-height: 30px;
            margin: 10px;
            .active{
                font-size:20px;
                font-weight:bold;
                color:rgba(46,0,139,1);
            }
        }
    }
    .banks{
        width: 1000px;
        .corporation,.personal{
            margin-top:30px; 
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            li{
               width: 250px;
                height: 68px;
                line-height: 68px;
                border:1px solid rgba(191,191,191,1);
                margin: 20px 10px;
                border-radius:8px;
                img{
                    display: block;
                    width: 80%;
                    height: 80%;
                    margin-top:5px;
                    margin-left:20px;  
                   
                }
            }
            .active{
                border:1px solid rgba(0,10,139,1)
            }
        }
    }
}

</style>
