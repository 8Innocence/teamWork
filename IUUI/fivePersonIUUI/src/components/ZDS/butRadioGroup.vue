<template>
  <div class="radio">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;margin-left: 50px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" style="margin-left: 50px">
      <el-submenu index="1" >
        <template slot="title" >
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <code-editor :code="selfCode"></code-editor>
  </div>
</template>
<script>
    import CodeEditor from "./codeEditor";
    export default {
      name: "butRadioGroup",
      components: {CodeEditor},
      data(){
        return{
          selfCode:'<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">\n' +
          '      <el-radio-button :label="false">展开</el-radio-button>\n' +
          '      <el-radio-button :label="true">收起</el-radio-button>\n' +
          '    </el-radio-group>\n' +
          '    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">\n' +
          '      <el-submenu index="1">\n' +
          '        <template slot="title">\n' +
          '          <i class="el-icon-location"></i>\n' +
          '          <span slot="title">导航一</span>\n' +
          '        </template>\n' +
          '        <el-menu-item-group>\n' +
          '          <span slot="title">分组一</span>\n' +
          '          <el-menu-item index="1-1">选项1</el-menu-item>\n' +
          '          <el-menu-item index="1-2">选项2</el-menu-item>\n' +
          '        </el-menu-item-group>\n' +
          '        <el-menu-item-group title="分组2">\n' +
          '          <el-menu-item index="1-3">选项3</el-menu-item>\n' +
          '        </el-menu-item-group>\n' +
          '        <el-submenu index="1-4">\n' +
          '          <span slot="title">选项4</span>\n' +
          '          <el-menu-item index="1-4-1">选项1</el-menu-item>\n' +
          '        </el-submenu>\n' +
          '      </el-submenu>\n' +
          '      <el-menu-item index="2">\n' +
          '        <i class="el-icon-menu"></i>\n' +
          '        <span slot="title">导航二</span>\n' +
          '      </el-menu-item>\n' +
          '      <el-menu-item index="3" disabled>\n' +
          '        <i class="el-icon-document"></i>\n' +
          '        <span slot="title">导航三</span>\n' +
          '      </el-menu-item>\n' +
          '      <el-menu-item index="4">\n' +
          '        <i class="el-icon-setting"></i>\n' +
          '        <span slot="title">导航四</span>\n' +
          '      </el-menu-item>\n' +
          '    </el-menu>',
          isCollapse: true
        }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .radio{
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    li{
      padding: 0;
      border: 0;
    }
  }
  }

</style>
