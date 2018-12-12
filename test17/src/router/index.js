import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SwiperTest from '@/components/SwiperTest'
import BlurTest from '@/components/BlurTest'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/SwiperTest',
      name: 'SwiperTest',
      component: SwiperTest
    },
    {
      path: '/BlurTest',
      name: 'BlurTest',
      component: BlurTest
    }
  ]
})
