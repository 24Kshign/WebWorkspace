import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import SettingPage from '../views/SettingPage'
import ForgetPwd from '../views/ForgetPwd'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/SettingPage',
      name: 'SettingPage',
      component: SettingPage
    },
    {
      path: '/ForgetPwd',
      name: 'ForgetPwd',
      component: ForgetPwd
    }
  ]
})
