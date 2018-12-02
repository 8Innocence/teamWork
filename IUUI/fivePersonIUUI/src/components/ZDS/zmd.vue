<template>
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    <code-editor :code="selfCode"></code-editor>
  </div>
</template>

<script>
    import CodeEditor from "./codeEditor";
    export default {
        name: "zmd",
      components: {CodeEditor},
      data() {
        return {
          selfCode:'<template>\n' +
          '  <div>\n' +
          '    <el-steps :active="active" finish-status="success">\n' +
          '      <el-step title="步骤 1"></el-step>\n' +
          '      <el-step title="步骤 2"></el-step>\n' +
          '      <el-step title="步骤 3"></el-step>\n' +
          '    </el-steps>\n' +
          '    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>\n' +
          '  </div>\n' +
          '</template>\n' +
          '\n' +
          '<script>\n' +
          '    import CodeEditor from "./codeEditor";\n' +
          '    export default {\n' +
          '        name: "zmd",\n' +
          '      components: {CodeEditor},\n' +
          '      data() {\n' +
          '        return {\n' +
          '          active: 0\n' +
          '        };\n' +
          '      },\n' +
          '\n' +
          '      methods: {\n' +
          '        next() {\n' +
          '          if (this.active++ > 2) this.active = 0;\n' +
          '        }\n' +
          '      }\n' +
          '    }\n' +
          '<'+'/script>',
          active: 0
        };
      },

      methods: {
        next() {
          if (this.active++ > 2) this.active = 0;
        }
      }
    }
</script>

<style scoped>

</style>
