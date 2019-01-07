<template>
  <div class="home">
      <Mheader>
        <i class="iconfont icon-ditu"></i>
        <span>分支</span>
        <div class="input_wrap">
          <img src="../imgs/logo.png">
          <el-input 
            placeholder="搜索您需要的商品" 
            v-model="input" 
            prefix-icon="el-icon-search">
          </el-input> 
        </div>
        <span>登录</span>
      </Mheader>
      <div class="content" ref="scroll" @scroll="loadMore">
        <div class="swiper">
          <Swiper :swiperSlides="sliders"></Swiper>
        </div>
        <div class="features">
          <Features></Features>
        </div>
        <div class="message">
          <hr>
          <Message></Message>
        </div>
        <div class="category">
          <hr>
          <Category></Category>
        </div>
      </div>
  </div>
</template>
<script>
import Mheader from './global/Mheader.vue';
import Swiper from './global/Swiper';
import Features from './mobules/Features.vue';
import Message from './mobules/Message.vue';
import Category from './mobules/Category.vue';
export default {
  name: 'Home',
  data () {
    return {
      input: '',
      offset:0,
      hasMore:true,
      isLoading:false,
      sliders:['//img1.360buyimg.com/pop/jfs/t1/29049/24/3875/188651/5c2cbb27Efe2992f9/f6bcf71aa20a13b5.jpg','//img1.360buyimg.com/pop/jfs/t1/29049/24/3875/188651/5c2cbb27Efe2992f9/f6bcf71aa20a13b5.jpg']
    }
  },
  created(){
    
  },
  mounted () {
    //加载
      let scroll=this.$refs.scroll;
      let top=scroll.offsetTop;
      let distance=0;
      let isMove=false;
      scroll.addEventListener('touchstart',(e)=>{
        //滚动天在最顶端时，并且当前盒子在顶端时，才继续走
        if(scroll.scrollTop!=0 || scroll.offsetTop!=top){
          return;
        }
        let start=e.touches[0].pageY;//点击的开始
        let move=(e)=>{
          isMove=true;
          let current=e.touches[0].pageY;
          distance=current-start;//求拉动的距离，负的不要
          if(distance>0){
            if(distance<=50){//如果大于50，就是50
              scroll.style.top=distance+top+'px';
              distance=distance;
            }else{
              distance=50;
              scroll.style.top=top+50+'px';
            }
                        
          }else{
            //如果不在考虑范围内，移除掉move和end事件
            scroll.removeEventListener('touchmove',move);
            scroll.removeEventListener('touchend',end);
          }
        };
        let end=(e)=>{
          if(!isMove){
            return;
            isMove=false;
          }
          clearInterval(this.timers);
            this.timers=setInterval(()=>{
              if(distance<=0){
                clearInterval(this.timers);
                distance=0;
                scroll.style.top=top+'px';
                scroll.addEventListener('touchmove',move);
                scroll.addEventListener('touchend',end);
                this.offset=0;
                return;
              }
              distance -= 1;
              scroll.style.top=top+distance+'px';  
            },1)
                   
        };
        scroll.addEventListener('touchmove',move);
        scroll.addEventListener('touchend',end);
      },false);
  },
  methods:{
    loadMore(){
      // 卷取的高度、当前可见区域、总高
      //触发scroll事件，可能n次，先进开一个定时器，下次触发时将上一次定时器清除掉
      clearTimeout(this.timer);//防抖
      this.timer=setTimeout(()=>{
        let {scrollTop,clientHeight,scrollHeight}=this.$refs.scroll;
        if(scrollTop+clientHeight+20>scrollHeight){
         
        }
      },60 );
    }
  },
  components:{
    Mheader,
    Swiper,
    Features,
    Message,
    Category
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@color:#fff;
  .input_wrap{
    display: inline-block;
    background-color: @color;
    width:65%;
    height: 67%;
    text-align: center;
    line-height: 38px;
    border-radius: 10px;
    padding: 2px 5px;
    img{
      width: 20%;
    }
    .el-input{
      width: 78%;
      outline: 0;
      .el-input__inner{
        height: 38px;
        line-height:38px;
        border:0;
        border-radius:10px;
      }
      .el-input__prefix{
        color:#666;
      }
    }
  }
  .el-button{
    span{
      color:@color;
    }
  }
  .swiper{
    height: 260px;
    .swiper-pagination-bullet-active{
        background: @color;
    }
  }
  .el-col-4{
      margin-left: 7px;
      text-align: center;
      line-height: 50px;
      width:17.66667%;
      span{
        color: #000;
         font-size: 15px;
      }
  }
  .category{
    hr{
      height: 5px;
      background-color: #F1F1F1;
      border: 0;
    }
  }

</style>
