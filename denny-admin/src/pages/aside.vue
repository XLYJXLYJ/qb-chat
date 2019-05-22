<template>
    <el-aside width='260px'>
        <el-menu
            class="el-menu-vertical-demo"
            router
            :default-active="$route.path"
           >
            <div v-for="item in aside_List.aside_list" :key='item.aside_name' class="wrap">
                <el-submenu :index="item.index" v-if="item.belong && item.belong.length>0">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title" style="font-size:15px;font-weight:400;">{{item.aside_name}}</span>
                    </template>
                    <el-menu-item :index="its.index" v-for="its in item.belong" :key='its.index'>
                        <i style="
                            width: 30px;
                            height: 20px;
                            display: inline-block;
                        "></i>
                        <span slot="title" style="font-size:14px;">{{its.belong_name}}</span>
                    </el-menu-item >
                </el-submenu>
                <el-menu-item :index="item.index" v-else>
                    <i :class="item.icon"></i>
                    <span slot="title" style="font-size:16px;font-weight:400;">{{item.aside_name}}</span>
                </el-menu-item>
            </div>
        </el-menu>
    </el-aside>
</template>

<script>
import data from '../aside.json'
export default {
    data(){
        return {
            aside_List : data
        }
    },
    mounted(){
        // console.log(this.$refs)
        // console.log(this.$route)
    },
    components:{

    },
    computed:{

    },
    methods:{

    }
}
</script>

<style lang="scss" >
    .el-aside {
        text-align: center;
        padding: 30px 0 0 0;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }
    .el-main.template{
        text-indent: 28px;
    }

    .el-submenu{
        text-align: left;
        color:rgba(135,135,135,1);
    }
    .el-submenu__title{
        padding-left:48px !important;
        i,span{
            color: rgba(135,135,135,1);
        }
    }
    .el-submenu__title:hover{
        i,span{
            color: #2E008B !important;
        }
    }
    .el-menu-item{
        text-align: left;
        color:#878787;
        padding-left:48px !important;
    }
    .el-menu-item.is-active{
        color: #2E008B !important;
    }
    body > .el-container {
        margin-bottom: 40px;
    }
</style>
