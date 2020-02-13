import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Signin from '@/components/Signin.vue'
import Signup from '@/components/Signup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //{
      // path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
    //},
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
