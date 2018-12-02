<template>
  <div>
    <el-button :plain="true" @click="open">打开消息提示</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
    <code-editor :code="selfCode"></code-editor>
  </div>
</template>

<script>
    import CodeEditor from "./codeEditor";
    export default {
      name: "xxts",
      components: {CodeEditor},
      data(){
        return{
          selfCode:'<template>\n' +
          '  <div>\n' +
          '    <el-button :plain="true" @click="open">打开消息提示</el-button>\n' +
          '    <el-button :plain="true" @click="openVn">VNode</el-button>\n' +
          '  </div>\n' +
          '</template>\n' +
          '\n' +
          '<script>\n' +
          '    import CodeEditor from "./codeEditor";\n' +
          '    export default {\n' +
          '      name: "xxts",\n' +
          '      components: {CodeEditor},\n' +
          '      methods: {\n' +
          '        open() {\n' +
          '          this.$message(\'这是一条消息提示\');\n' +
          '        },\n' +
          '\n' +
          '        openVn() {\n' +
          '          const h = this.$createElement;\n' +
          '          this.$message({\n' +
          '            message: h(\'p\', null, [\n' +
          '              h(\'span\', null, \'内容可以是 \'),\n' +
          '              h(\'i\', { style: \'color: teal\' }, \'VNode\')\n' +
          '            ])\n' +
          '          });\n' +
          '        }\n' +
          '      }\n' +
          '    }\n' +
          '<'+'/script>'
        }
      },
      methods: {
        open() {
          this.$message('这是一条消息提示');
        },

        openVn() {
          const h = this.$createElement;
          this.$message({
            message: h('p', null, [
              h('span', null, '内容可以是 '),
              h('i', { style: 'color: teal' }, 'VNode')
            ])
          });
        }
      }
    }
</script>

<style scoped>

</style>
