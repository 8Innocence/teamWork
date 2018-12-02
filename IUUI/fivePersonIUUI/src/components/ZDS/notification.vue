<template>
  <div>
    <el-button
      plain
      @click="open12">
      使用 HTML 片段
    </el-button>
    <code-editor :code="selfCode"></code-editor>
  </div>
</template>

<script>
    import CodeEditor from "./codeEditor";
    export default {
      name: "notification",
      components: {CodeEditor},
      data(){
        return{
          selfCode:'<template>\n' +
          '  <el-button\n' +
          '    plain\n' +
          '    @click="open12">\n' +
          '    使用 HTML 片段\n' +
          '  </el-button>\n' +
          '</template>\n' +
          '\n' +
          '<script>\n' +
          '    export default {\n' +
          '      name: "notification",\n' +
          '      methods: {\n' +
          '        open12() {\n' +
          '          this.$notify({\n' +
          '            title: \'HTML 片段\',\n' +
          '            dangerouslyUseHTMLString: true,\n' +
          '            message: \'<strong>这是 <i>HTML</i> 片段</strong>\'\n' +
          '          });\n' +
          '        }\n' +
          '      }\n' +
          '    }\n' +
          '<'+'/script>'
        }
      },
      methods: {
        open12() {
          this.$notify({
            title: 'HTML 片段',
            dangerouslyUseHTMLString: true,
            message: '<strong>这是 <i>HTML</i> 片段</strong>'
          });
        }
      }
    }
</script>

<style scoped>

</style>
