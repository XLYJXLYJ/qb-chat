<template>
  <div class="label-contain">
      <h1>进线意图</h1>
      <ul class="contain-ul">
           <!-- <li v-for="(item,index) in msg" :key="index">
             {{item.line_intent}}
           </li> -->
           <li>
             业务咨询-产品介绍
           </li>
            <li>
             业务办理-续保
           </li>
            <li>
             业务办理-理赔
           </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'labelPath',
  props:['msg'],
  data () {
    return {
      
    }
  },
  watch:{
    msg:{
      handler:function (val, oldVal) {
        let this_ = this
        this.msg = val
        this.$nextTick(() => {
          this_.msg = val
        })
      },
      deep:true
    }
  },
  mounted(){
    console.log(this.msg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.label-contain{
  position: relative;
  width: 100%;
  height: 100%;
  font-family: '微软雅黑';
  h1{
    font-size: 20px;
    width: 100%;
    height: 10%;
    font-family: '微软雅黑';
    font-weight: bold;
    margin-bottom: 20px;
    position: absolute;
    top: 0px;
    left: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    border-radius: 15px;
    box-shadow:0px 3px 9px 0px rgba(82, 82, 82, 0.35);
    background: #fff;
  }
  .contain-ul{
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    overflow: auto;
    width: 100%;
    height: 40%;
    position: relative;
    top: 25%;
    li{
      width: auto;
      height: 22px;
      padding: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      border-radius: 10px;
      background: #428dc7;
      color: #fff;
    }
  }
  .contain-ul::-webkit-scrollbar {/*滚动条整体样式*/
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 271px;
  }
  .contain-ul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px #fff;
    background: #fff;
  }
  .contain-ul::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px #fff;
    border-radius: 10px;
    background: #fff;
  }
}
</style>
