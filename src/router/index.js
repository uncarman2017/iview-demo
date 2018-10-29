import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ButtonDemo from '@/components/ButtonDemo'
import IconDemo from '@/components/IconDemo'
import GridLayoutDemo from '@/components/GridLayoutDemo'
import Layout1 from '@/components/layout/Layout1'
import Layout2 from '@/components/layout/Layout2'

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
    },
    {
      path: '/icon',
      name: 'IconDemo',
      component: IconDemo
    },
    {
      path: '/layout/grid',
      name: 'GridLayoutDemo',
      component: GridLayoutDemo
    },
    {
      path: '/layout/layout1',
      name: 'Layout1',
      component: Layout1
    },
    {
      path: '/layout/layout2',
      name: 'Layout2',
      component: Layout2
    }
  ]
})
