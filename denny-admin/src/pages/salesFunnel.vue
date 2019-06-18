<template>
    <div class="salasFunnel">
       <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/manage/salesFunnel' }">数据分析</el-breadcrumb-item>
            <el-breadcrumb-item >销售漏斗</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="flexBox">
            <div class="day" >
                <div id = "day" style="height:85%;width:96%"></div>
                <div class="bottomTips">
                    <el-tooltip class="item" effect="dark" content="
                    机器人会根据客户咨询内容进行分析，并对其评级，级别越高，购买意向越高。
                   " placement="top">
                        <i class="el-icon-question tips"></i>
                    </el-tooltip>
                    <div class="nums">昨日总人数<span>{{day.series[0].data[4]}}</span></div>
                </div>
            </div>
            <div class="month">
                <div id = "month" style="height:85%;width:96%"></div>
                <div class="bottomTips" >
                    <div class="nums" style="ttext-align: center;text-indent: 194px;">上月总人数<span>{{month.series[0].data[4]}}</span></div>
                </div>
            </div>
            <div class="all" >
                <div id = "all" style="height:85%;width:96%"></div>
                <div class="bottomTips">
                    <div class="nums" style="text-align: center;text-indent: 194px;">所有总人数<span>{{all.series[0].data[4]}}</span></div>
                </div>

            </div>
            <div class="precent" id="precent"></div>
        </div>

    </div>
</template>

<script>
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require("echarts/lib/chart/pie");
require('echarts/lib/component/title');
import { robotLevel } from 'service/service'
export default {
    data(){
        return {
            day: {
                title: {
                    text: '昨日数据',
                    textStyle:{
                        color:'#666666',
                        fontSize:16,
                        lineHeight:36,
                    },
                     x:'center'
                },
                legend: {
                    data: ['5级', '4级', '3级', '2级', '1级']
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '0%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    axisLine: {onZero: true},
                    splitLine: {show: false},
                    splitArea: {show: false}
                },
                yAxis: {
                    type : 'category',
                    data : ['5级', '4级', '3级', '2级', '1级']

                },
                series: [
                    {
                        name: '用户数量',
                        type: 'bar',
                        itemStyle:{
                             normal: {
                                color: function(params) {
                                    var colorList = [
                                    '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                    '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                    '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                                    ];
                                    return colorList[params.dataIndex]
                                }

                            }
                        },
                        data: []
                    },

                ]
            },
            month: {
                title: {
                    text: '上周数据',
                    textStyle:{
                        color:'#666666',
                        fontSize:16,
                        lineHeight:36,
                    },
                     x:'center'
                },
                legend: {
                    data: ['5级', '4级', '3级', '2级', '1级']
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '0%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    axisLine: {onZero: true},
                    splitLine: {show: false},
                    splitArea: {show: false}
                },
                yAxis: {
                    type : 'category',
                    data : ['5级', '4级', '3级', '2级', '1级']

                },
                series: [
                    {
                        name: '用户数量',
                        type: 'bar',
                        itemStyle:{
                             normal: {
                                color: function(params) {
                                    var colorList = [
                                    '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                    '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                    '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                                    ];
                                    return colorList[params.dataIndex]
                                }

                            }
                        },
                        data: []
                    },

                ]
            },
            all: {
                title: {
                    text: '所有数据',
                    textStyle:{
                        color:'#666666',
                        fontSize:16,
                        lineHeight:36,
                    },
                    x:'center'

                },
                legend: {
                    data: ['5级', '4级', '3级', '2级', '1级']
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '0%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    axisLine: {onZero: true},
                    splitLine: {show: false},
                    splitArea: {show: false}
                },
                yAxis: {
                    type : 'category',
                    data : ['5级', '4级', '3级', '2级', '1级']

                },
                series: [
                    {
                        name: '用户数量',
                        type: 'bar',
                        itemStyle:{
                             normal: {
                                color: function(params) {
                                    var colorList = [
                                    '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                    '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                    '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                                    ];
                                    return colorList[params.dataIndex]
                                }

                            }
                        },
                        data: []
                    },

                ]
            },
            precent : {
                title : {
                    text: '客户占比分析图',
                    textStyle:{
                        color:'#666666',
                        fontSize:16,
                        lineHeight:36,
                    },
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x : 'center',
                    y : 'bottom',
                    data:['1级','2级','3级','4级','5级',]
                },
                calculable : true,
                series : [

                    {
                        name:'面积模式',
                        type:'pie',
                        radius : [20, 80],
                        center : ['50%', '50%'],
                        roseType : 'area',
                        data:[
                        ]
                    }
                ]
            }
        }
    },
    mounted(){
        this.getSalesList()
    },
    methods:{
        init(){
            let myChartDay = echarts.init(document.getElementById('day'))
            let myChartMonth = echarts.init(document.getElementById('month'))
            let myChartAll = echarts.init(document.getElementById('all'))
            let myChartPrecent = echarts.init(document.getElementById('precent'))
            myChartDay.setOption(this.day)
            myChartMonth.setOption(this.month)
            myChartAll.setOption(this.all)
            myChartPrecent.setOption(this.precent)
        },
        async getSalesList(){
            this.loading = true;
            let resultData = await robotLevel()
            if(resultData.msg == 'ok' && resultData.status == '200'){
                let dayResult = resultData.data.yes_dir_num
                let monthResult = resultData.data.month_dir_num
                let allResult = resultData.data.all_dir_num
                let precentResult = resultData.data.all_level
                this.$nextTick(() => {
                    this.day.series[0].data = [dayResult.yesterday_five_num,dayResult.yesterday_four_num,dayResult.yesterday_three_num,dayResult.yesterday_two_num,dayResult.yesterday_num]
                    this.month.series[0].data = [monthResult.month_five_num,monthResult.month_four_num,monthResult.month_three_num,monthResult.month_two_num,monthResult.month_num]
                    this.all.series[0].data = [allResult.all_five_num,allResult.all_four_num,allResult.all_three_num,allResult.all_two_num,allResult.all_num]
                    this.precent.series[0].data = [{value:precentResult.all_five_num,name:'5级'},{value:precentResult.all_four_num,name:'4级'},{value:precentResult.all_three_num,name:'3级'},{value:precentResult.all_two_num,name:'2级'},{value:precentResult.all_one_num,name:'1级'},]
                    this.init()
                })
            }
            this.loading = false;
        }
    }

}
</script>

<style lang="scss">
    .salasFunnel{
        position: absolute;
        padding: 8px;
        left: 0;
        width:100%;
        .flexBox{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content:flex-start;
            .day,.month,.all,.precent{
                width:360px;
                height:300px;
                box-shadow:0px 1px 8px 1px rgba(63,63,63,0.54);
                border-radius:6px;
                margin-right: 20px;
                margin-top: 25px;
                padding-left:5px;
                position: relative;
                .bottomTips{
                    position: absolute;
                    bottom: 0;
                    z-index: 100000000;
                    width: 100%;
                    height: 40px;
                    display:flex;
                    i{
                        flex: 1;
                        text-align: left;
                        font-size: 18px;
                        color: rgba(46,0,139,1);
                        cursor: pointer;
                        text-indent: 30px;
                        line-height: 35px;
                    }
                    .nums{
                        flex: 4;
                        font-size: 14px;
                        color: #666666;
                        text-align: center;
                        text-indent: 110px;
                        line-height: 30px;
                        span{
                            font-size:22px;
                            font-family:PingFang-SC-Bold;
                            font-weight:bold;
                            color:rgba(85,85,85,1);
                            padding: 0 10px;
                        }
                    }
                }
            }

        }
    }
</style>
