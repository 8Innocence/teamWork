<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" style="padding-left: 50px">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    <code-editor :code="selfCode"></code-editor>
  </div>
</template>

<script>
    import CodeEditor from "./codeEditor";
    export default {
        name: "biaoqian",
      components: {CodeEditor},
      data() {
        return {
          selfCode:'<template>\n' +
          '    <el-tabs v-model="activeName" @tab-click="handleClick">\n' +
          '      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>\n' +
          '      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>\n' +
          '      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>\n' +
          '      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>\n' +
          '    </el-tabs>\n' +
          '</template>',
          activeName: 'second'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>

</style>
