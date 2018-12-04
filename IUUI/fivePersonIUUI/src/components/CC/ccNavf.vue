<template>

  <div class="content_nav" style="height:100%;overflow-y:auto;">
    <el-container style="height:100%;" class="max">
      <el-aside width="100%">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title" class="title1">布局</template>
            <el-menu-item-group class="el-menu">
              <!--<router-link to="/cc" tag="a"></router-link>-->
              <router-link to="/MineLogin" tag="li">
              <el-menu-item index="1-1">后台登录页面组件</el-menu-item>
              </router-link>
              <!--<router-link to="/cc/ccTeams" tag="a"></router-link>-->
              <router-link to="/idxBox" tag="li">
                <el-menu-item index="1-2">3D动画组建<span>基础支撑</span></el-menu-item>
              </router-link>
              <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
              <!--<el-menu-item index="1-4">选项4</el-menu-item>-->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title" class="title1">导航栏</template>
            <el-menu-item-group>

            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
          <template slot="title">Frame(框)</template>
          <el-menu-item-group>
            <router-link to="/wdlcs" tag="li">
                <el-menu-item index="3-1">穿梭框组件</el-menu-item>
            </router-link>
            <router-link to="/zhedie" tag="li">
                <el-menu-item index="3-2">折叠框</el-menu-item>
            </router-link>
            <router-link to="/compom" tag="li">
              <el-menu-item index="3-3">弹出框</el-menu-item>
            </router-link>
            <router-link to="/xxts" tag="li">
              <el-menu-item index="3-4">提示框</el-menu-item>
            </router-link>
            <router-link to="/rollnotice" tag="li">
              <el-menu-item index="3-5">公告</el-menu-item>
            </router-link>
          </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
          <template slot="title">路由</template>
          <el-menu-item-group>
            <router-link to="/biaoqian" tag="li">
              <el-menu-item index="4-1">标签组件</el-menu-item>
            </router-link>
            <router-link to="/butelrow" tag="li">
              <el-menu-item index="4-2">按钮组件</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
          <el-submenu index="5">
            <template slot="title">From</template>
            <el-menu-item-group>
              <router-link to="dataandtime" tag="li">
                <el-menu-item index="5-1">时间日期类组件</el-menu-item>
              </router-link>
              <router-link to="/Form" tag="li">
                <el-menu-item index="5-2">表单类组件</el-menu-item>
              </router-link>
              <router-link to="/menu" tag="li">
                <el-menu-item index="5-3">Menu</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">延时加载</template>
            <el-menu-item-group>
              <router-link to="/jiazai" tag="li">
                <el-menu-item index="6-1">延时加载刷新</el-menu-item>
              </router-link>
              <router-link to="/infinitescroll" tag="li">
                <el-menu-item index="6-2">延时加载增加</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">echarts</template>
            <el-menu-item-group>
             <router-link to="/circle" tag="li">
               <el-menu-item index="7-1">饼图</el-menu-item>
             </router-link>
             <router-link to="/bar" tag="li">
               <el-menu-item index="7-2">柱状图</el-menu-item>
             </router-link>
             <router-link to="/graph" tag="li">
               <el-menu-item index="7-3">折线图</el-menu-item>
             </router-link>
             <router-link to="/gauge" tag="li">
               <el-menu-item index="7-4">仪表盘</el-menu-item>
             </router-link>
             <router-link to="/sun" tag="li">
               <el-menu-item index="7-5">旭日图</el-menu-item>
             </router-link>
             <router-link to="/parallel" tag="li">
               <el-menu-item index="7-6">平行</el-menu-item>
             </router-link>
             <router-link to="/data" tag="li">
               <el-menu-item index="7-7">日历</el-menu-item>
             </router-link>
             <router-link to="/radar" tag="li">
               <el-menu-item index="7-8">雷达图</el-menu-item>
             </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">其他</template>
            <el-menu-item-group>
              <router-link to="/jinggao" tag="li">
                <el-menu-item index="8-1">警告类组件</el-menu-item>
              </router-link>
              <router-link to="/zmd" tag="li">
                <el-menu-item index="8-2">step组件</el-menu-item>
              </router-link>
              <router-link to="/notification" tag="li">
                <el-menu-item index="8-3">HTML片段</el-menu-item>
              </router-link>
              <router-link to="/med" tag="li">
                <el-menu-item index="8-4">文本编辑器</el-menu-item>
              </router-link>
              <router-link to="/code" tag="li">
                <el-menu-item index="8-5">获取验证码</el-menu-item>
              </router-link>
              <router-link to="/sendcode" tag="li">
                <el-menu-item index="8-6">评分</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>
  </div>

</template>

<script>
  import Public from "../../assets/css/index.css"
  export default {
    name: "ccNavf",
    components:{Public},
    // props:[list],
    methods:{
      toggle:function(){
        this.isShow=!this.isShow
      }
    }
  }
</script>

<style scoped>
  .max{
    height:100%;
    width:100%;

  }
  .el-menu{
    border-right:none;
  }
  /*content_nav*/
  .content_nav{
    width:20%;
    height:600px;
    -webkit-box-sizing: border-box;
    overflow-y:auto;

  }
  .title1{
    background:#eee;
  }
  .content_nav h2{
    margin-top:20px;
  }
  .basics h3{
    margin:20px 0;
  }
  .basics ul li{
    margin-top:10px;
    cursor:pointer;
  }
  .basics a{
    cursor:pointer;
  }
  span{
    font-size:11px;
    color: #bbbbbb;
    margin-left:8px;
    line-height:100% }
</style>
