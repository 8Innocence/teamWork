<template>

        <div class="content_nav">
          <el-container style="height:100%;" class="max">
            <el-aside width="100%">
              <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                  <template slot="title">导航一</template>
                  <el-menu-item-group class="el-menu">
                    <router-link to="/cc" tag="a"><el-menu-item index="1-1">选项1</el-menu-item></router-link>
                    <router-link to="/cc/ccTeams" tag="a"><el-menu-item index="1-2">选项2</el-menu-item></router-link>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-4">选项4</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">导航二</template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-4">选项4</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">导航三</template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    <el-menu-item index="3-3">选项3</el-menu-item>
                    <el-menu-item index="3-4">选项4</el-menu-item>
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
        name: "ccNav",
        components:{Public},
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
    height:100%;
    -webkit-box-sizing: border-box;

    /*overflow-y:scroll;*/
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
