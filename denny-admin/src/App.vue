<template>
    <div id="app">
        <el-container style="height:100vh">
            <el-header style="height:10vh">
                <Header></Header>
            </el-header>
            <el-container>
                <Aside></Aside>
                <Content></Content>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Aside from 'pages/aside.vue'
import Content from 'pages/content.vue'
import Header from 'pages/header.vue'
export default {
    components:{
        Aside,
        Content,
        Header
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.el-header, .el-footer {
    color: #ffffff;
    text-align: center;
    line-height:10vh;
    background:rgba(46,0,139,1);
}
.el-aside {
    text-align: center;
}
.el-menu {
    border: none !important;
}
.el-main {
    background-color: #ffffff !important;
    overflow: hidden;
    color: #333;
    text-align: center;
}
.el-main.template{
    text-indent: 28px;
}
.el-submenu{
    text-align: left;
}
.el-submenu__title{
    padding-left:48px !important; 
}
.el-menu-item{
    text-align: left;
    padding-left:48px !important;
}
body > .el-container {
    margin-bottom: 40px;
}
</style>
