import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/Index"
import Content from "../pages/Content"
import ContentRight from "../components/XT/ContentRight"
import ContentRight2 from "../components/XT/ContentRight2"
import CC from "../pages/cc"
import ccTeam from "../components/CC/ccTeam"
import ccTeams from "../components/CC/ccTeams"
import ttmodel from "../pages/model"
import element  from "../pages/element"
import ZHU  from "../pages/zdstestpage"


import MineLogin from "../components/ZDS/MineLogin"
import idxBox from "../components/ZDS/idxBox"
import butfadeinout from "../components/ZDS/butRadioGroup"
import butelrow from "../components/ZDS/butElRow"
import wdlcs from "../components/ZDS/wdlcs"

import zhedie from "../components/ZDS/zhedie"
import biaoqian from "../components/ZDS/biaoqian"
import jiazai from "../components/ZDS/jiazai"
import jinggao from "../components/ZDS/jinggao"
import xxts from "../components/ZDS/xxts"

import zmd from "../components/ZDS/zmd"
import butradiogroup from "../components/ZDS/butRadioGroup"
import compom from "../components/ZDS/compom"
import dataandtime from "../components/ZDS/DataAndTime"
import form from "../components/ZDS/Form"

import notification from "../components/ZDS/notification"
import menu from "../components/CC/Menu"
import med from "../components/ZDS/med"


import code from "../components/CC/Code"
import infinitescroll from "../components/CC/InfiniteScroll"
import rollnotice from "../components/CC/RollNotice"
import scrollnav from "../components/CC/ScrollNav"
import sendcode from "../components/CC/SendCode"
import introduce from "../pages/introduce"


import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import circle from "../components/XT/bingxing"
import radar from "../components/XT/leida"
import parallel from "../components/XT/pingixng"
import data from "../components/XT/rili"
import sun from "../components/XT/xuri"
import gauge from "../components/XT/yibiaopan"
import graph from "../components/XT/zhexian1"
import bar from "../components/XT/zhuzhuang"


Vue.use(Router)

export default new Router({
  routes: [

    {path: '/', name: 'Index',component:Index},
    {path: '/introduce', name: 'introduce',component:introduce},
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
    {path: '/model', name: 'model',component:ttmodel},
    {path: '/element', name: 'model',component:element,
      children:[
        {path:"",component:MineLogin},
        {path:"/MineLogin",component:MineLogin},
        {path:"/idxBox",component:idxBox},
        {path:"/butfadeinout",component:butfadeinout},
        {path:"/butelrow",component:butelrow},
        {path:"/wdlcs",component:wdlcs},

        {path:"/zhedie",component:zhedie},
        {path:"/biaoqian",component:biaoqian},
        {path:"/jiazai",component:jiazai},
        {path:"/jinggao",component:jinggao},
        {path:"/xxts",component:xxts},

        {path:"/zmd",component:zmd},
        {path:"/butradiogroup",component:butradiogroup},
        {path:"/compom",component:compom},
        {path:"/dataandtime",component:dataandtime},
        {path:"/form",component:form},

        {path:"/notification",component:notification},
        {path:"/menu",component:menu},
        {path:"/med",component:med},

        {path:"/code",component:code},
        {path:"/infinitescroll",component:infinitescroll},
        {path:"/rollnotice",component:rollnotice},
        {path:"/scrollnav",component:scrollnav},
        {path:"/sendcode",component:sendcode},


        {path:"/circle",component:circle},
        {path:"/radar",component:radar},
        {path:"/parallel",component:parallel},
        {path:"/data",component:data},
        {path:"/sun",component:sun},
        {path:"/gauge",component:gauge},
        {path:"/graph",component:graph},
        {path:"/bar",component:bar},
      ]},
    {path: '/zds', name: 'model',component:ZHU},
  ]
})
