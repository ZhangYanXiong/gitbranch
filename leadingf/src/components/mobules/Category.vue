<template>
    <div class="category">
        <div class="cat-1">
            <h4>
                <i class="iconfont icon-cai"></i>
                品类中心
            </h4>
            <el-row :gutter="20">
                <el-col :span="8"><div class="grid-content bg-purple">
                    <h3>办公设备</h3>
                    <img src="../../imgs/26497.png">
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                    <h3>办公设备</h3>
                    <img src="../../imgs/26497.png">
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                    <h3>办公设备</h3>
                    <img src="../../imgs/26497.png">
                </div></el-col>
            </el-row>
            <el-row :gutter="20">
               <el-col :span="8"><div class="grid-content bg-purple">
                    <h3>办公设备</h3>
                    <img src="../../imgs/26497.png">
                </div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple">
                    <h3>办公设备</h3>
                    <img src="../../imgs/26497.png">
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                    <h3>办公设备</h3>
                    <img src="../../imgs/26497.png">
                </div></el-col>
            </el-row>
        </div>
         <div class="cat-2">
            <h4>
                <i class="iconfont icon-huangguanguanjundiyihuiyuan"></i>
                大牌优选
            </h4>
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple">
                     <img src="http://www.66123123.com/Photos/bgyp3/20869_4.jpg">
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                     <img src="http://www.66123123.com/Photos/bgyp3/20869_4.jpg">
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                     <img src="http://www.66123123.com/Photos/bgyp3/20869_4.jpg">
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                     <img src="http://www.66123123.com/Photos/bgyp3/20869_4.jpg">
                </div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple">
                     <img src="http://www.66123123.com/Photos/bgyp3/20869_4.jpg">
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                     <img src="http://www.66123123.com/Photos/bgyp3/20869_4.jpg">
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                     <img src="http://www.66123123.com/Photos/bgyp3/20869_4.jpg">
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                     <img src="http://www.66123123.com/Photos/bgyp3/20869_4.jpg">
                </div></el-col>
            </el-row>
        </div>
         <div class="cat-3">
            <h4>
                <i class="iconfont icon-iconfontzhizuobiaozhun023148"></i>
                商品推荐
            </h4>
            <el-row :gutter="20">
                <el-col :span="12"><div class="grid-content bg-purple">
                    <img src="http://www.66123123.com/Photos/bgyp3/53661_2.jpg">
                    <p>莱克/LEXY KJ501 加湿除甲醛除PM2.5空气净化器</p>
                    <div>
                        <span>￥1900.00</span><el-button type="primary">加入购物车</el-button>
                    </div>
                </div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple">
                    <img src="http://www.66123123.com/Photos/bgyp3/53661_2.jpg">
                    <p>莱克/LEXY KJ501 加湿除甲醛除PM2.5空气净化器</p>
                    <div>
                        <span>￥1900.00</span><el-button type="primary">加入购物车</el-button>
                    </div>
                </div></el-col>
            </el-row>
        </div>
    </div>
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
   .category{
       height: 1000px;
       h4{
           text-align:center;
           color: #399;
       }
       .el-col{
        .grid-content{
            text-align: center;
            img{
                width: 100%;
            }
        }
       }
       .cat-1 {
        .el-row{
            &:nth-child(2){
                .el-col{
                    &:nth-child(1){
                     background: #F1DFF7;
                     border: #fff 1px solid;
                     border-left:0;
                    }
                    &:nth-child(2){
                     background: #FDD9D9;
                     border: #fff 1px solid;
                     border-left:0;
                    }
                    &:nth-child(3){
                     background: #FCF3E2;
                     border: #fff 1px solid;
                     border-left:0;
                    }
                }
            }
            &:nth-child(3){
                .el-col{
                    &:nth-child(1){
                     background: #DAEFF2;
                     border: #fff 1px solid;
                     border-left:0;
                    }
                    &:nth-child(2){
                     background: #E3F2ED;
                     border: #fff 1px solid;
                     border-left:0;
                    }
                    &:nth-child(3){
                     background: #E5DFFB;
                     border: #fff 1px solid;
                     border-left:0;
                    }
                }
            }
        }
       }
       .cat-2{
            .el-row{
                &:nth-child(2){
                    .el-col{
                        &:nth-child(1){
                            border: #D1D1D1 1px solid;
                            border-left:0; 
                        }
                        &:nth-child(2){
                            border: #D1D1D1 1px solid;
                            border-left:0; 
                        }
                        &:nth-child(3){
                            border: #D1D1D1 1px solid;
                            border-left:0; 
                        }
                        &:nth-child(4){
                            border: #D1D1D1 1px solid;
                            border-left:0; 
                        }
                    }
                }
                &:nth-child(3){
                    .el-col{
                        &:nth-child(1){
                            border: #D1D1D1 1px solid;
                            border-left:0;
                            border-top: 0; 
                        }
                        &:nth-child(2){
                            border: #D1D1D1 1px solid;
                            border-left:0;
                            border-top: 0; 
                        }
                        &:nth-child(3){
                            border: #D1D1D1 1px solid;
                            border-left:0;
                            border-top: 0; 
                        }
                         &:nth-child(4){
                            border: #D1D1D1 1px solid;
                            border-left:0;
                            border-top: 0; 
                        }
                    }
                }
            }
       }
       .cat-3{
            .el-row{
                .el-col{
                    .grid-content{
                        .el-button{
                            width:55%;
                        }
                    }
                }
                &:nth-child(2){
                    .el-col{
                        &:nth-child(1){
                            border: #D1D1D1 2px solid;
                            border-left:0;
                        }
                        &:nth-child(2){
                            border: #D1D1D1 2px solid;
                            border-left:0;
                        }
                    }
                }
            }
            
       }

   }
</style>