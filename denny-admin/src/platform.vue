<template>
    <div id="app">
        <div class="logo"></div>
        <router-view></router-view>
    </div>
</template>

<script>
// import Aside from 'pages/aside.vue'
// import Content from 'pages/content.vue'
// import Header from 'pages/header.vue'
export default {
    components:{
        // Aside,
        // Content,
        // Header
    }
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   overflow: hidden;
   position: fixed;
   width:100%;
   height:100%;
   background: url("./assets/image/bg.jpg") no-repeat;
   background-size:cover;
   .logo{
       position:absolute;
       width:322px;
       height:52px;
       background: url('./assets/image/logo@2x.png') no-repeat center center;
       background-size: 161px*1.5 26px*1.5;
       top:60px;
       left: 50px;
       
   }
}
</style>
