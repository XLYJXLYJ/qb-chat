<template>
    <div class="header">
        <div class="logo"></div>
        <div class="user">
            <span>QB-Alex 企保科技</span>
            
        </div>
        <div class="login">
            <span>退出</span>
            
        </div>
    </div> 
</template>

<script>

export default {
   
}
</script>
<style lang="scss">
    .header{
        width: 100%;
        height: 100%;
        background:rgba(46,0,139,1);
        margin: auto;
        display: flex;
        .logo{
            width:300px;
            height:100%;
            background: url('../assets/image/logo@2x.png') no-repeat left 40px center;
            background-size: 180px 28px;
        }
        .user{
            flex: 5;
            text-align:right;
            height: 100%;
            line-height: 80px;
            span{
                cursor: pointer;
                font-size:14px;
                font-weight:500;
                color:rgba(225,225,225,1);
            }
        }
        .login{
            height: 100%;
            line-height: 80px;
            text-align: left;
            text-indent: 20px;
            flex: 1;
            span{
                cursor: pointer;
                font-size:14px;
                font-weight:500;
                color:rgba(225,225,225,1);
            }
        }
    }
</style>
