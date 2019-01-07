<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from './components/global/Tab.vue';
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style lang="less">
  #app{
    width:100%; 
    .content{
      position:fixed;
      width: 100%;
      top:56px;
      bottom: 50px;
      overflow: auto;
    }
  }
</style>
