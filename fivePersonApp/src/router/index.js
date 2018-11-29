import Vue from 'vue'
import Router from 'vue-router'
import testpage from '../pages/test'
import model from '../pages/model'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/', name: 'HelloWorld',
    {path: '/',component: testpage,},//配置首页
    {path: '/model',component: model,}
  ]
})
