<template>
  <div class="footer">
    <router-link to="/home">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
    </router-link>
    <router-link to="/message">
        <i class="iconfont icon-xiaoxi"></i>
        <span>消息</span>
    </router-link>
    <router-link to="shoopcart">
        <i class="iconfont icon-icon8"></i>
        <span>购物车</span>
    </router-link>
    <router-link to="login">
        <i class="iconfont icon-denglu"></i>
        <span>登录</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .footer{
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        height: 50px;
        display:flex;
        border-top:1px solid #ccc;
        a{
            display:flex;
            color:#5D5D5D;
            flex-direction:column;
            flex:1;
            align-items:center;
            justify-content: center;
            text-decoration: none;
        }
        a.router-link-active{
            color:#339A99;
        }
    }
</style>
