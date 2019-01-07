<template>
  <el-container>
    <el-main>
        <el-row :gutter="0">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <i class="iconfont icon-shangpinfenlei"></i>
              </div>
              <span>商品分类</span>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <i class="iconfont icon-pinpai"></i>
              </div>
              <span>自有品牌</span>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <i class="iconfont icon-jifen"></i>
              </div>
              <span>积分兑换</span>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <i class="iconfont icon-huojian"></i>
              </div>
              <span>物流查询</span>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <i class="iconfont icon-xiazai16"></i>
              </div>
              <span>联系客服</span>
            </el-col>
        </el-row>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'features',
    data() {
      return {
        
      }
    },
    created(){
        
    },
    mounted() {
   
    }
  }
</script>
<style scoped lang="less">
  .el-main{
    padding: 15px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    .iconfont{
      color: #fff;
      font-size: 30px;
    }
    &:nth-child(1)>div{
      background: #DF4C45;
    }
    &:nth-child(2)>div{
      background: #D8AC15;
    }
    &:nth-child(3)>div{
      background: #B43BE2;
    }
    &:nth-child(4)>div{
      background: #E18225;
    }
    &:nth-child(5)>div{
      background: #22B530;
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>