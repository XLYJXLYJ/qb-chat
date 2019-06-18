<template>
  <div class="hello">
    <div class="left">
      <quesAns v-bind:msg="robotMsg"></quesAns>
    </div>
    <div class="right">
      <div class="right-top">
        <labelPath v-bind:msg='robotMsgFlow'></labelPath>
      </div>
      <div class="right-bottom">
        <flowPath v-bind:msg='robotMsgFlow'></flowPath>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import labelPath from '@/components/LabelPath'
import flowPath from '@/components/FlowPath'
import quesAns from '@/components/QuesAns'
import { setInterval } from 'timers';
export default {
  name: 'Main',
  data () {
    return {
      robotMsg: [],
      intentArr:[],
      robotMsgFlow:[]
    }
  },
  mounted(){
    // setInterval(() => {
    //   this.getData()
    // },2000)
    // let urlData = window.location.url
    // console.log(urlData)
    // // urlData = urlData.split('&')
    // console.log(urlData)
    // console.log(this.$route)
    this.getData()
  },
  methods:{
    async getData(){
      let data = {       
        sentence:'产品简介',
        dialogId:12345
      }
      var res = await this.axios.post('acs/v1.0/iframe_robot_answer',qs.stringify(data)).then((response) => {
          console.log(response.data.status==200)
          if(response.data.status==200){
              this.robotMsg.push(response.data.data)
              if(this.intentArr.indexOf(response.data.data.intent) == -1){
                  this.intentArr.push(response.data.data.intent)
                  this.robotMsgFlow.push(response.data.data)
              }
          }else{
              this.$message({
                type: 'error',
                message: '出错了'
              });
          }
      })
    }
  },
  components:{
    labelPath,
    flowPath,
    quesAns
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .hello{
    display: flex;
    .left{
      position: absolute;
      width: 70%;
      height: 100%;
      border-right: 1px solid #d6d6d6;
    }
    .right{
      position: absolute;
      right: 0px;
      width:30%;
      height: 100%;
      display: flex;
      flex-direction:column;
      .right-top{
        width: 90%;
        height: 30%;
        border-bottom: 1px solid #d6d6d6;
        padding: 5%;
        // overflow: auto;
      }
      .right-bottom{
        width: 90%;
        height: 70%;
        position: relative;
        padding: 5%;
        // overflow: auto;
      }
      .right-top::-webkit-scrollbar {/*滚动条整体样式*/
        width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 271px;
      }
      .right-top::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px #fff;
        background: #fff;
      }
      .right-top::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px #fff;
        border-radius: 10px;
        background: #fff;
      }
      .right-bottom::-webkit-scrollbar {/*滚动条整体样式*/
        width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 271px;
      }
      .right-bottom::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px #fff;
        background: #fff;
      }
      .right-bottom::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px #fff;
        border-radius: 10px;
        background: #fff;
      }
    };
  }

</style>
