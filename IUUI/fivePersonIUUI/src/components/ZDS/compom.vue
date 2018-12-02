<template>
  <div>
    <el-popover placement="right" width="400" trigger="click">
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
      </el-table>
      <el-button slot="reference">click 激活</el-button>
    </el-popover>
    <code-editor :code="selfCode"></code-editor>
  </div>
</template>

<script>
    import CodeEditor from "./codeEditor";
    export default {
        name: "compom",
      components: {CodeEditor},
      data() {
        return {
          selfCode:'<template>\n' +
          '  <el-popover placement="right" width="400" trigger="click">\n' +
          '    <el-table :data="gridData">\n' +
          '      <el-table-column width="150" property="date" label="日期"></el-table-column>\n' +
          '      <el-table-column width="100" property="name" label="姓名"></el-table-column>\n' +
          '      <el-table-column width="300" property="address" label="地址"></el-table-column>\n' +
          '    </el-table>\n' +
          '    <el-button slot="reference">click 激活</el-button>\n' +
          '  </el-popover>\n' +
          '<'+'/template>\n' +
          '\n' +
          '<script>\n' +
          '    import CodeEditor from "./codeEditor";\n' +
          '    export default {\n' +
          '        name: "compom",\n' +
          '      components: {CodeEditor},\n' +
          '      data() {\n' +
          '        return {\n' +
          '          gridData: [{\n' +
          '            date: \'2018-12-01\',\n' +
          '            name: \'Innocence\',\n' +
          '            address: \'西安市雁塔区高新六路南窑头国际\'\n' +
          '          }, {\n' +
          '            date: \'2018-12-01\',\n' +
          '            name: \'Innocence\',\n' +
          '            address: \'西安市雁塔区高新六路南窑头国际\'\n' +
          '          }, {\n' +
          '            date: \'2018-12-01\',\n' +
          '            name: \'Innocence\',\n' +
          '            address: \'西安市雁塔区高新六路南窑头国际\'\n' +
          '          }, {\n' +
          '            date: \'2018-12-01\',\n' +
          '            name: \'Innocence\',\n' +
          '            address: \'西安市雁塔区高新六路南窑头国际\'\n' +
          '          }]\n' +
          '        };\n' +
          '      }\n' +
          '    }\n' +
          '<'+'/script>',
          gridData: [{
            date: '2018-12-01',
            name: 'Innocence',
            address: '西安市雁塔区高新六路南窑头国际'
          }, {
            date: '2018-12-01',
            name: 'Innocence',
            address: '西安市雁塔区高新六路南窑头国际'
          }, {
            date: '2018-12-01',
            name: 'Innocence',
            address: '西安市雁塔区高新六路南窑头国际'
          }, {
            date: '2018-12-01',
            name: 'Innocence',
            address: '西安市雁塔区高新六路南窑头国际'
          }]
        };
      }
    }
</script>

<style scoped>

</style>
