import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/Index"
import Content from "../pages/Content"
import ContentRight from "../components/XT/ContentRight"
import ContentRight2 from "../components/XT/ContentRight2"
import CC from "../pages/cc"
import ccTeam from "../components/CC/ccTeam"
import ccTeams from "../components/CC/ccTeams"



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Index',component:Index},
    {
      path:"/content",
      component:Content,
      children:[
        {path:"",component:ContentRight},
        {path:"ContentRight2",component:ContentRight2}
      ]
    },
    // {path: '/', name: 'Index',component:Index},
    {
      path:"/cc",
      component:CC,
      children:[
        {path:"",component:ccTeam},
        {path:"ccTeams",component:ccTeams}
      ]
    },

  ]
})
