import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HomePage from '../components/HomePage'
import SettingPage from '../components/SettingPage'
import ForgetPwd from '../components/ForgetPwd'
import TestVue from '../components/TestVue'
import ChangeLibrary from '../components/ChangeLibrary'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
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
  },
  {
    path: '/TestVue',
    name: 'TestVue',
    component: TestVue
  },
  {
    path: '/ChangeLibrary',
    name: 'ChangeLibrary',
    component: ChangeLibrary
  }]
})
