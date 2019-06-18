<template>
  <div id="app" v-if="showData">
    <router-view></router-view>
  </div>
</template>

<script>
import Qs from 'qs' // 格式化数据格式
import Vue from 'vue'
export default {
  name: 'app',
  data(){
    return{
      showData:false
    }
  },
  created(){
        let url = window.location.href
        let name01 = /\/insurebotaimi\/([a-zA-Z0-9-]+)/.exec(url)[1]
        let getThen = new Promise((resolve, reject) => {
        let getRobotData  = Qs.stringify({
            name:name01
        });
        Vue.axios.post('http://test.open.qb-tech.net/api/v1/chat/index',getRobotData)
            .then(res => {
                window.rusultData = res.data.data,
                window.show_claims_consultation = window.rusultData.show_claims_consultation, //是否显示理赔咨询
                window.slogon = window.rusultData.slogon,
                window.avatar_big = "http://test.open.qb-tech.net/img/aimi-big.png",
                window.qas = window.rusultData.qas.length==0?[] : window.rusultData.qas,
                window.extendList = window.rusultData.extends,
                window.key = window.rusultData.key,
                window.skey = "{{$skey}}",
                window.aimi_name = window.rusultData.display_name,
                window.avatar_small = "http://test.open.qb-tech.net/img/aimi-big.png",
                window.wait_response = window.rusultData.wait,
                window.greet_msg = window.rusultData.greet,
                window.timeout_msg = window.rusultData.timeout,
                window.url = "http://test.open.qb-tech.net/api/v1/",
                window.send_url = "http://test.open.qb-tech.net/api/v1/chat/send",
                window.feedback_url = "http://test.open.qb-tech.net/api/v1/chat/feedback";
                // document.title =  window.rusultData.title
                // $(document).attr("title",window.rusultData.title);
                // window.res_url = window.url
                if(localStorage.getItem('uuid') == null){
                   localStorage.setItem('uuid', window.rusultData.dialog_id);
                }
                this.showData = true

            })
            .catch(err =>{
            })
        })
  },
  mounted () {
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,figure,form,fieldset,legend,input,textarea,button,p,blockquote,th,td,pre,xmp{margin:0;padding:0;overflow-y:hidden;}
body,input,textarea,button,select,pre,xmp,tt,code,kbd,samp{line-height:1.5;font-family:tahoma,arial,"Hiragino Sans GB",simsun,sans-serif}
h1,h2,h3,h4,h5,h6,small,big,input,textarea,button,select{font-size:100%}
h1,h2,h3,h4,h5,h6{font-family:tahoma,arial,"Hiragino Sans GB","微软雅黑",simsun,sans-serif}
h1,h2,h3,h4,h5,h6,b,strong{font-weight:normal}
address,cite,dfn,em,i,optgroup,var{font-style:normal}
table{border-collapse:collapse;border-spacing:0;text-align:left}
caption,th{text-align:inherit}
ul,ol,menu{list-style:none}
fieldset,img{border:0}
img,object,input,textarea,button,select{vertical-align:middle}
article,aside,footer,header,section,nav,figure,figcaption,hgroup,details,menu{display:block}
audio,canvas,video{display:inline-block;*display:inline;*zoom:1}
blockquote:before,blockquote:after,q:before,q:after{content:"\0020"}
textarea{overflow:auto;resize:vertical}
input,textarea,button,select,a{outline:0 none;border: none;}
button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}
mark{background-color:transparent}
a,ins,s,u,del{text-decoration:none}
sup,sub{vertical-align:baseline}
html {overflow-x: hidden;height: 100%;font-size: 50px;-webkit-tap-highlight-color: transparent;}
body {font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;color: #333;font-size: .28em;line-height: 1;-webkit-text-size-adjust: none;}
hr {height: .02rem;margin: .1rem 0;border: medium none;border-top: .02rem solid #cacaca;}
a {color: #6b64f9;text-decoration: none;}
input:focus::-webkit-input-placeholder {color: transparent;}
input:focus:-moz-placeholder {color: transparent;}
input:focus::-moz-placeholder {color: transparent;}
input:focus:-ms-input-placeholder {color: transparent;}
#app{width: 640px;margin: 0 auto;}
.weui-tabbar__icon{width: 43px!important;height: 43px!important;}
.weui-tabbar__label{height: 34px!important;z-index: 1000;padding-bottom: 20px;}
.weui-dialog__btn_primary{color: #6b64f9!important;}
.weui-dialog{max-width:361px!important;border-radius: 30px!important;}
.weui-dialog__title{font-size: 29px!important;width:114px;height:27px;font-size:29px;color: #000;font-family:PingFang-SC-Medium;font-weight:Medium;}
.weui-dialog__bd{font-size: 22px!important;height:27px;color: #000!important;;font-family:PingFang-SC-Regular;font-weight:Regular;}
.weui-dialog__btn_default{font-size: 29px!important;width:114px;height:27px;font-size:29px;color: #000!important;font-family:PingFang-SC-Medium;font-weight:Medium;padding-top: 15px;padding-bottom: 30px;}
.weui-dialog__btn_primary{font-size: 29px!important;width:84px;height:20px!important;font-size:22px!important;color: #000!important;font-family:PingFang-SC-Medium;font-weight:Medium;padding-top: 10px;padding-bottom: 32px;}
.vux-slider > .vux-indicator > a > .vux-icon-dot.active, .vux-slider .vux-indicator-right > a > .vux-icon-dot.active{background-color:#6b64f9!important;};
.vux-slider>.vux-swiper{height: 220px!important;}
</style>
