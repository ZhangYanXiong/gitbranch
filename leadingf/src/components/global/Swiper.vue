<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><img :src="slide"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
        }
      }
    },
    created(){
        
    },
    mounted() {

    }
  }
</script>
<style scoped lang="less">
    img{
        display: inline-block;
        width: 100%;
        height: 260px;
    }
</style>