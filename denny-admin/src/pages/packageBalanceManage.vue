<template>
    <div class="pbm">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/' }">用户中心</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'salesFunnel'}">套餐/余额管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="balance">
            <div class="accont-balance">
                 <div class="num">
                     <span style="font-size:50px;color:rgba(107,155,241,1);padding:0 5px;">{{mMan.user_money}}</span>
                     <span class="fix">CNY</span>
                 </div>
                 <div class="name">账户余额</div>
            </div>
            <div class="month-balance">
                <div class="num">
                     <span style="font-size:50px;color:rgba(246,198,90,1);padding:0 5px;">{{mMan.month_balance}}</span>
                     <span>条</span>
                 </div>
                 <div class="name">月度流量余额</div>
                 <div class="time">有效期至：{{mMan.month_expiration_time}}</div>
            </div>
            <div class="year-balance">
                <div class="num">
                     <span style="font-size:50px;color:rgba(133,199,202,1);padding:0 5px;">{{mMan.year_balance}}</span>
                     <span>条</span>
                 </div>
                 <div class="name">年度流量余额</div>
                 <div class="time">有效期至：{{mMan.year_expiration_time}}</div>
            </div>
        </div>
        <el-breadcrumb separator="/" style='margin-top:50px'>
            <el-breadcrumb-item >套餐类型</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="types">
            <div class="flow" v-for="(value,key) in setType" :key='key' v-if="key<4">
                <div style="line-height: 45px;height: 10px;text-indent:10px">{{value.type}}</div>
                <el-divider></el-divider>
                <div style="text-align:center">
                    <span style="font-size:30px;font-weight:500;color:rgba(46,0,139,1);">{{value.total_num}}</span>
                    <span v-if="value.total_num != '自定义'">条</span>
                </div>
                <p style="margin-top:15px; text-indent:10px">价格：{{value.money}}<span v-if="value.total_num != '自定义'">元</span> </p>
            </div>
        </div>
        <div class="formList">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="对话条数">
                    <el-input v-model="formInline.user" placeholder="请输入对话条数"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">购买</el-button>
                </el-form-item>
            </el-form>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="充值余额：">
                    <el-input v-model="formInline.user" placeholder="请输入充值金额"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">购买</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import { dataType,planBalance } from 'service/service'
export default {
    data() {
        return {
            setType:'',//套餐类型
            mMan:{},//套餐余额数据
            formInline: {
                user: '',
                region: ''
            }
        }
    },
    mounted(){
        this.moneyType()
        this.moneyManage()
    },
    methods: {
        async moneyType(){
            this.loading = true;
            let resultData = await dataType()
            if(resultData.msg == 'ok' && resultData.status == '200'){
                this.setType = resultData.data
            }
            this.loading = false;
        },
        async moneyManage(){
            this.loading = true;
            let resultData = await planBalance()
            if(resultData.msg == 'ok' && resultData.status == '200'){
                this.mMan = resultData.data[0]
            }
            this.loading = false;
        },
        onSubmit(){

        }
    }
}
</script>

<style lang="scss">

.pbm{
    .balance{
        display: flex;
        flex-wrap: nowrap;
        justify-content:flex-start;
        margin-top:40px;
        width: 100%;
        .accont-balance,.month-balance,.year-balance{
            margin: 0 20px;
            width: 300px;

            .num{
                font-size:12px;
                font-weight:500;
                color:rgba(82,81,81,1);
                padding: 5px;
                text-align: center;
                text-indent: 14px;
            }
            .name{
                width:300px;
                height:15px;
                font-size:18px;
                font-family:SourceHanSansSC-Regular;
                font-weight:400;
                color:rgba(136,136,136,1);
                margin-bottom:20px;
                text-align: center;
            }
            .time{
                width:300px;
                height:12px;
                font-size:9px;
                font-weight:400;
                color:rgba(191,190,190,1);
                text-align: center;
            }
        }
    }
    .types{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-top:20px;
        font-size: 13px;
        font-weight:400;
        color:rgba(97,97,97,1);
        .flow{
            width: 250px;
            height: 145px;
            text-align: left;
            background:rgba(255,255,255,1);
            border-radius:6px;
            margin-right:20px;
            box-shadow: 0 0 8px rgba(23, 32, 195, 0.19);
            margin-top:20px;
        }
    }
    .formList{
        display: flex;
        justify-content: space-between;
        margin-top:80px;
        flex-wrap: nowrap;
        width: 100%;
        .el-form{
            margin-right:170px;
        }
    }
}

</style>
