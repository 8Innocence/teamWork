import Vue from 'vue'
import Router from 'vue-router'
import Index from "../page/Index"
import Information from "../page/Information"


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: Index
    // },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    }
  ]
})
