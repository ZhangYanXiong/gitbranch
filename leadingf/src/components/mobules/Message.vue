<template>
    <div class="message">
        <el-row type="flex" class="row-bg">
            <el-col :span="20">
                <div class="grid-content bg-purple">
                    <i class="iconfont icon-laba"></i>
                    <span>消息动态：</span>
                    <p>{{msg}}</p>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                     <span>|</span>
                     <span>更多...</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    name: 'features',
    data() {
      return {
        msg:'领先未来科技集团上市！'
      }
    },
    created(){
        
    },
    mounted() {
   
    }
  }
</script>
<style scoped lang="less">
    .message{
        .el-col-20{
            margin-left:10px;
        }
         .el-col-4{
             margin-right:10px; 
             .grid-content{
                  line-height: 53px;
             }
        }
        .grid-content{
            span{
                color:#000;
            }
            p{
                display: inline-block;
            }
        }
    }
</style>