<template>
  <div class="el-row">
    <el-row style="padding: 20px 0;margin-left: 50px">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <code-editor :code="elCode"></code-editor>
  </div>

</template>

<script>

    import CodeEditor from "./codeEditor";
    export default {
        name: "butElRow",
      components: {CodeEditor},
      data(){
        return{
          "elCode":[
            '<template>\n' +
            '   <el-row>\n' +
            '     <el-button>默认按钮</el-button>\n' +
            '     <el-button type="primary">主要按钮</el-button>\n' +
            '     <el-button type="success">成功按钮</el-button>\n' +
            '     <el-button type="info">信息按钮</el-button>\n' +
            '     <el-button type="warning">警告按钮</el-button>\n' +
            '     <el-button type="danger">危险按钮</el-button>\n' +
            '   </el-row>\n' +
            '</template>'
          ],
        }
      }
    }
</script>

<style scoped>
  .el-row{

  }
</style>
