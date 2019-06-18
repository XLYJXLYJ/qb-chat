<template>
  <div class="flow-contain">
      <h1>流程指引</h1>
      <div class="contain">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item v-for="(item,index) in msg" :key="index" style="color:#428dc7;" :title="item.process_result.display_name" :name="index">
            <ul class="sen-ul">
              <li v-for="(itemChild,indexChild) in item.process_result.detail_process" :key="indexChild">
                  <div>{{itemChild.content}}</div>
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </div>
  </div>
</template>

<script>
export default {
  name: 'flowPath',
    props:['msg'],
    data() {
      return {
        activeNames: ['1']
      };
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
    methods: {
      handleChange(val) {
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.flow-contain{
  position: relative;
  width: 100%;
  height: 100%;
  font-family: '微软雅黑';
  h1{
    font-size: 20px;
    font-family: '微软雅黑';
    font-weight: bold;
    margin-bottom: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    border-radius: 15px;
    box-shadow:0px 3px 9px 0px rgba(82, 82, 82, 0.35);
  }
  .contain{
    width: 100%;
    height: 80%;
    font-family: '微软雅黑';
    overflow: auto;
    .con-ul{
      background: red;
      .con-li{
        width: 100px;
        height: auto;
        div{
          width: 300px;
          display: flex;
          flex-wrap: wrap;
        }
      }
    }
    .sen-ul{
      li{
        border: 1px solid #428dc7;
        border-radius: 5px;
        padding: 4px;
        margin-bottom: 6px;
      }
    }
  }
  .contain::-webkit-scrollbar {/*滚动条整体样式*/
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 271px;
  }
  .contain::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px #fff;
    background: #fff;
  }
  .contain::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px #fff;
    border-radius: 10px;
    background: #fff;
  }
}
</style>
