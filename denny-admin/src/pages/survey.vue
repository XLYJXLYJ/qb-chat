<template>
    <div class="salasFunnel">
       <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/' }">概况统计</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'salesFunnel'}">概况统计</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="flexBox">
            <div class="visit" >
                <div class= "visitHeader" >
                    <div class="leftLabel">
                        <div class="spice">
                             <div style="text-align:left;text-indent:4px">访问总次数</div>
                             <div style="text-align:center;color:#E10600;font-weight:bold;text-indent:40px">34256次</div>
                        </div>
                         <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
                    </div>
                    <div class="switch">
                         <el-radio-group v-model="tabPosition">
                            <el-radio-button label="top">今日访问</el-radio-button>
                            <el-radio-button label="left">历史访问</el-radio-button>
                        </el-radio-group>
                    </div>
                    
                </div>
                <div class="pie" id="pie" style="height:80%;width:100%">

                </div>
            </div>
            <div class="serve" > 
                <el-tabs type="border-card">
                    <el-tab-pane label="本天">
                        <div id="bottomTips"  style="width:530px;height:400px">
                            <!-- 用户管理 -->
                        </div> 
                    </el-tab-pane>
                    <el-tab-pane label="本周">
                        <div id="bottomTips" style="width:530px;height:350px">
                            <!-- 配置管理 -->
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="本月" style="width:530px;height:350px">
                        <div id="bottomTips" >
                            <!-- 角色管理 -->
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="本年">
                        <div id="bottomTips" style="width:530px;height:350px">
                            <!-- 定时任务补偿 -->
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div class="visit" style="margin-top:20px">
                <div class= "visitHeader" >
                    <div class="leftLabel">
                        <div class="spice">
                             <div style="text-align:left;text-indent:4px">焦点词汇</div>
                             <div style="text-align:center;color:#E10600;font-weight:bold;text-indent:40px">50个/100个</div>
                        </div>
                        <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
                    </div>
                    <div class="switch">
                         <el-radio-group v-model="tabPosition">
                            <el-radio-button label="top" class="el-icon-refresh" >换一批</el-radio-button>
                        </el-radio-group>
                    </div>
                    
                </div>
                <div class="pie" id="wordcloud" style="height:80%;width:100%">

                </div>
            </div>
            <div class="serve" style="margin-top:20px"> 
                <el-tabs type="border-card">
                    <el-tab-pane label="今天">
                        <div id="bottomTips"  style="width:530px;height:400px">
                             <el-table
                                ref="singleTable"
                                :data="tableData"
                                highlight-current-row
                                @current-change="handleCurrentChange"
                                style="width: 100%">
                                <el-table-column
                                type="index"
                                width="50">
                                </el-table-column>
                                <el-table-column
                                property="date"
                                label="日期"
                                width="120">
                                </el-table-column>
                                <el-table-column
                                property="name"
                                label="姓名"
                                width="120">
                                </el-table-column>
                                <el-table-column
                                property="address"
                                label="地址">
                                </el-table-column>
                            </el-table>
                        </div> 
                    </el-tab-pane>
                    <el-tab-pane label="一周">
                        <div id="bottomTips" style="width:530px;height:350px">
                            <!-- 配置管理 -->
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="一月" style="width:530px;height:350px">
                        <div id="bottomTips" >
                            <!-- 角色管理 -->
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="累计">
                        <div id="bottomTips" style="width:530px;height:350px">
                            <!-- 定时任务补偿 -->
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
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
require('echarts-wordcloud')
export default {
    data(){
        return {
            tabPosition: 'top',
            day: {
                title : {
                    text: '某地区蒸发量和降水量',
                    subtext: '纯属虚构'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['蒸发量','降水量']
                },
                toolbox: {
                    show : true,
                    feature : {
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'蒸发量',
                        type:'bar',
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'降水量',
                        type:'bar',
                        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        markPoint : {
                            data : [
                                {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                                {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : '平均值'}
                            ]
                        }
                    }
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
                        data: [13, 42, 59, 68, 77]
                    },
                
                ]
            },
            word:{
                // tooltip: {},
                series: [ {
                    name:'wordCloud',
                    type: 'wordCloud',
                    gridSize: 2,
                    sizeRange: [12, 50],
                    rotationRange: [-90, 90],
                    shape: 'pentagon',
                    width: 600,
                    height: 400,
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [
                        {
                            name: 'Sam S Club',
                            value: 10000,
                            textStyle: {
                                normal: {
                                    color: 'black'
                                },
                                emphasis: {
                                    color: 'red'
                                }
                            }
                        },
                        {
                            name: 'Macys',
                            value: 6181
                        },
                        {
                            name: 'Amy Schumer',
                            value: 4386
                        },
                        {
                            name: 'Jurassic World',
                            value: 4055
                        },
                        {
                            name: 'Charter Communications',
                            value: 2467
                        },
                        {
                            name: 'Chick Fil A',
                            value: 2244
                        },
                        {
                            name: 'Planet Fitness',
                            value: 1898
                        },
                        {
                            name: 'Pitch Perfect',
                            value: 1484
                        },
                        {
                            name: 'Express',
                            value: 1112
                        },
                        {
                            name: 'Home',
                            value: 965
                        },
                        {
                            name: 'Johnny Depp',
                            value: 847
                        },
                        {
                            name: 'Lena Dunham',
                            value: 582
                        },
                        {
                            name: 'Lewis Hamilton',
                            value: 555
                        },
                        {
                            name: 'KXAN',
                            value: 550
                        },
                        {
                            name: 'Mary Ellen Mark',
                            value: 462
                        },
                        {
                            name: 'Farrah Abraham',
                            value: 366
                        },
                        {
                            name: 'Rita Ora',
                            value: 360
                        },
                        {
                            name: 'Serena Williams',
                            value: 282
                        },
                        {
                            name: 'NCAA baseball tournament',
                            value: 273
                        },
                        {
                            name: 'Point Break',
                            value: 265
                        }
                    ]
                } ]
            },
            pie : {
                title : {
                    text: '访问反馈占比分析图',
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
                            {value:10, name:'1级'},
                            {value:5, name:'2级'},
                            {value:15, name:'3级'},
                            {value:25, name:'4级'},
                            {value:20, name:'5级'},
                            
                        ]
                    }
                ]
            },
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
                }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            },{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
                }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            currentRow: null
        }
    },
    mounted(){
        var myChartDay = echarts.init(document.getElementById('bottomTips'))
        var myChartMonth = echarts.init(document.getElementById('pie'))
        var wordcloud = echarts.init(document.getElementById('wordcloud'))
        this.word = {
              series: [ {
                    name:'wordCloud',
                    type: 'wordCloud',
                    gridSize: 2,
                    sizeRange: [12, 50],
                    rotationRange: [-90, 90],
                    shape: 'pentagon',
                    width: 600,
                    height: 400,
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [
                        {
                            name: 'Sam S Club',
                            value: 10000,
                            textStyle: {
                                normal: {
                                    color: 'black'
                                },
                                emphasis: {
                                    color: 'red'
                                }
                            }
                        },
                        {
                            name: 'Macys',
                            value: 6181
                        },
                        {
                            name: 'Amy Schumer',
                            value: 4386
                        },
                        {
                            name: 'Jurassic World',
                            value: 4055
                        },
                        {
                            name: 'Charter Communications',
                            value: 2467
                        },
                        {
                            name: 'Chick Fil A',
                            value: 2244
                        },
                        {
                            name: 'Planet Fitness',
                            value: 1898
                        },
                        {
                            name: 'Pitch Perfect',
                            value: 1484
                        },
                        {
                            name: 'Express',
                            value: 1112
                        },
                        {
                            name: 'Home',
                            value: 965
                        },
                        {
                            name: 'Johnny Depp',
                            value: 847
                        },
                        {
                            name: 'Lena Dunham',
                            value: 582
                        },
                        {
                            name: 'Lewis Hamilton',
                            value: 555
                        },
                        {
                            name: 'KXAN',
                            value: 550
                        },
                        {
                            name: 'Mary Ellen Mark',
                            value: 462
                        },
                        {
                            name: 'Farrah Abraham',
                            value: 366
                        },
                        {
                            name: 'Rita Ora',
                            value: 360
                        },
                        {
                            name: 'Serena Williams',
                            value: 282
                        },
                        {
                            name: 'NCAA baseball tournament',
                            value: 273
                        },
                        {
                            name: 'Point Break',
                            value: 265
                        }
                    ]
                } ]
        }
        
        myChartDay.setOption(this.day)
        myChartMonth.setOption(this.pie)
        wordcloud.setOption(this.word)
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
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content:flex-start;
            margin-top: 20px;
            .visit{
                width: 440px;
                height: 480px;
                margin-right:30px; 
                background:rgba(255,255,255,1);
                border:1px solid rgba(221, 221, 221, 1);
                .visitHeader{
                    width: 100%;
                    height: 80px;
                    background:#F8F8F8;
                    border-bottom:1px solid rgba(221, 221, 221, 1);
                    display: flex;
                     align-items:center;
                    .leftLabel {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        padding: 10px;
                        color: #333333;
                        font-size: 12px;
                        .spice{
                            flex:1;
                            display: flex;
                            margin-bottom:5px; 
                            div{
                                flex: 1
                            }
                        }
                        .el-progress{
                            flex: 1
                        }
                    }
                }
                .switch{
                    flex: 1;
                    .el-radio-button__inner{
                        padding:8px 15px;
                        font-size: 12px;
                    }
                }
            }
            .serve{
                width: 560px;
                background:rgba(255,255,255,1);
                border:1px solid rgba(221, 221, 221, 1);
                .el-tabs--border-card{
                    border:none;
                    box-shadow: none;
                }
            }
            
        }
    }
</style>
