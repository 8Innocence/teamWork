<template>
  <div>
    <el-transfer v-model="value1" :data="data" class="view"></el-transfer>
    <code-editor :code="selfCode"></code-editor>
  </div>
</template>

<script>
    import CodeEditor from "./codeEditor";
    export default {
        name: "wdlcs",
      components: {CodeEditor},
      data() {
        const generateData = _ => {
          const data = [];
          for (let i = 1; i <= 15; i++) {
            data.push({
              key: i,
              label: `备选项 ${ i }`,
              disabled: i % 4 === 0
            });
          }
          return data;
        };
        return {
          selfCode:'<template>\n' +
          '  <div>\n' +
          '    <el-transfer v-model="value1" :data="data" class="view"></el-transfer>\n' +
          '    <code-editor :code="selfCode"></code-editor>\n' +
          '  </div>\n' +
          '</template>\n' +
          '\n' +
          '<script>\n' +
          '    import CodeEditor from "./codeEditor";\n' +
          '    export default {\n' +
          '        name: "wdlcs",\n' +
          '      components: {CodeEditor},\n' +
          '      data() {\n' +
          '        const generateData = _ => {\n' +
          '          const data = [];\n' +
          '          for (let i = 1; i <= 15; i++) {\n' +
          '            data.push({\n' +
          '              key: i,\n' +
          '              label: `备选项 ${ i }`,\n' +
          '              disabled: i % 4 === 0\n' +
          '            });\n' +
          '          }\n' +
          '          return data;\n' +
          '        };\n' +
          '        return {\n' +
          '          selfCode:\'\',\n' +
          '          data: generateData(),\n' +
          '          value1: [1, 4]\n' +
          '        };\n' +
          '      }\n' +
          '    }\n' +
          '<'+'/script>',
          data: generateData(),
          value1: [1, 4]
        };
      }
    }
</script>

<style lang="scss" scoped>
  .view{
    margin-left: 50px;
    padding-bottom:20px;
  }
</style>
