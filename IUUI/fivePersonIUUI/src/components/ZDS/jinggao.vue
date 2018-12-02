<template>
  <div>
    <el-alert title="成功提示的文案" type="success">
    </el-alert>
    <el-alert title="消息提示的文案" type="info">
    </el-alert>
    <el-alert title="警告提示的文案" type="warning">
    </el-alert>
    <el-alert title="错误提示的文案" type="error">
    </el-alert>
    <code-editor :code="selfCode"></code-editor>
  </div>
</template>

<script>
    import CodeEditor from "./codeEditor";
    export default {
        name: "jingao",
        components: {CodeEditor},
        data(){
          return{
            selfCode:'<template>\n' +
            '  <div>\n' +
            '    <el-alert title="成功提示的文案" type="success">\n' +
            '    </el-alert>\n' +
            '    <el-alert title="消息提示的文案" type="info">\n' +
            '    </el-alert>\n' +
            '    <el-alert title="警告提示的文案" type="warning">\n' +
            '    </el-alert>\n' +
            '    <el-alert title="错误提示的文案" type="error">\n' +
            '    </el-alert>\n' +
            '    <code-editor :code="selfCode"></code-editor>\n' +
            '  </div>\n' +
            '</template>'
          }
        },
    }
</script>

<style scoped>

</style>
