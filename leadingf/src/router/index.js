import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Message from '../components/Message.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'',
      component:Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path:'/Message',
      name:'Message',
      component:Message
    }
  ]
})
