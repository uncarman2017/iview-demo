import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ButtonDemo from '@/components/ButtonDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/button',
      name: 'ButtonDemo',
      component: ButtonDemo
    }
  ]
})
