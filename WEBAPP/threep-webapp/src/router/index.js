import Vue from 'vue'
import Router from 'vue-router'
import Index from "../page/Index"
import List from "../page/List"
import Carts from "../page/Carts"
import Msg from "../page/Msg"
import Money from "../page/Money"
import Kind from "../page/Kind"
import KindContent from "../components/kind/KindContent"
import Information from "../page/Information"
import detail from "../page/detail"
import RingUp from "../page/RingUp"




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/carts',
      name: 'Carts',
      component: Carts
    },
    {
      path: '/ringup',
      name: 'RingUp',
      component: RingUp
    },
    {
      path: '/msg',
      name: 'Msg',
      component: Msg
    },
    {
      path: '/money',
      name: 'Money',
      component: Money
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/kind',
      name: 'Kind',
      component: Kind,
      //配置子路由
      children:[
        {path:"KindContent",component:KindContent}
      ]
    }
  ]
})
