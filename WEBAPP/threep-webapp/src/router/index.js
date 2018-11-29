import Vue from 'vue'
import Router from 'vue-router'
import Carts from "../page/Carts"
import Index from "../page/Index"
import List from "../page/List"
import Msg from "../page/Msg"
import Market from "../page/Market"
import Mine from "../page/Mine"
import Money from "../page/Money"
import Payok from "../page/Payok"


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
      path: '/carts',
      name: 'Carts',
      component: Carts
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/msg',
      name: 'Msg',
      component: Msg
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/money',
      name: 'Money',
      component: Money
    },
    {
      path: '/pay',
      name: 'Payok',
      component: Payok
    }
  ]
})
