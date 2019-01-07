<template>
  <div class="message">
      <Mheader>消息</Mheader>
  </div>
</template>

<script>
import Mheader from './global/Mheader.vue';
export default {
  name: 'Message',
  data () {
    return {
      msg: 'Home'
    }
  },
  components:{
    Mheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
