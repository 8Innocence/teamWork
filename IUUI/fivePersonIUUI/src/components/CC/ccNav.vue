<template>

        <div class="content_nav">
          <el-container style="height:100%;" class="max">
            <el-aside width="100%">
              <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                  <template slot="title" class="title1">基础说明</template>
                  <el-menu-item-group class="el-menu">
                    <!--<router-link to="/cc" tag="a"></router-link>-->
                    <el-menu-item index="1-1">开始使用</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title" class="title1">页面元素</template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">登录组件</el-menu-item>
                    <el-menu-item index="2-2">3D动画</el-menu-item>
                    <el-menu-item index="2-3">左侧导航栏</el-menu-item>
                    <el-menu-item index="2-4">垂直导航栏</el-menu-item>
                    <el-menu-item index="2-5">折叠导航</el-menu-item>
                    <el-menu-item index="2-6">穿梭框</el-menu-item>
                    <el-menu-item index="2-7">弹出框</el-menu-item>
                    <el-menu-item index="2-8">折叠框</el-menu-item>
                    <el-menu-item index="2-8">提示框</el-menu-item>
                    <el-menu-item index="2-9">标签组件</el-menu-item>
                    <el-menu-item index="2-10">时间日期组件</el-menu-item>
                    <el-menu-item index="2-11">step</el-menu-item>
                    <el-menu-item index="2-12">延迟加载组件</el-menu-item>
                    <el-menu-item index="2-13">警告类组件</el-menu-item>
                    <el-menu-item index="2-14">html片段</el-menu-item>
                    <el-menu-item index="2-15">click组件</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title" class="title1">关于我们</template>
                </el-submenu>

                <!--<el-submenu index="3">-->
                  <!--<template slot="title">导航三</template>-->
                  <!--<el-menu-item-group>-->
                    <!--<el-menu-item index="3-1">选项1</el-menu-item>-->
                    <!--<el-menu-item index="3-2">选项2</el-menu-item>-->
                    <!--<el-menu-item index="3-3">选项3</el-menu-item>-->
                    <!--<el-menu-item index="3-4">选项4</el-menu-item>-->
                  <!--</el-menu-item-group>-->
                <!--</el-submenu>-->
                <!--<el-submenu index="4">-->
                  <!--<template slot="title">导航四</template>-->
                  <!--<el-menu-item-group>-->
                    <!--<el-menu-item index="4-1">选项1</el-menu-item>-->
                    <!--<el-menu-item index="4-2">选项2</el-menu-item>-->
                    <!--<el-menu-item index="4-3">选项3</el-menu-item>-->
                    <!--<el-menu-item index="4-4">选项4</el-menu-item>-->
                  <!--</el-menu-item-group>-->
                <!--</el-submenu>-->
              </el-menu>
            </el-aside>
          </el-container>
        </div>

</template>

<script>
    import Public from "../../assets/css/index.css"
    export default {
        name: "ccNav",
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
  width:100%;
  height:100%;
  border-bottom: 1px solid #eee;
}
.el-menu{
  border-right:none;

}
el-menu-item:hover{
  background:#eee;
}
  /*content_nav*/
  .content_nav{
    width:20%;
    height:100%;
    -webkit-box-sizing: border-box;

    /*overflow-y:scroll;*/
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

</style>
