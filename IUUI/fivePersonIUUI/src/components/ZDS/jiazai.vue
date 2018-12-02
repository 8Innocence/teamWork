<template>
  <div>
    <el-table v-loading="loading" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
    <code-editor :code="selfCode"></code-editor>
  </div>
</template>

<script>
    import CodeEditor from "./codeEditor";
    export default {
        name: "jiazai",
      components: {CodeEditor},
      data() {
        return {
          selfCode:'<template>\n' +
          '  <div>\n' +
          '    <el-table v-loading="loading" :data="tableData" style="width: 100%">\n' +
          '      <el-table-column prop="date" label="日期" width="180">\n' +
          '      </el-table-column>\n' +
          '      <el-table-column prop="name" label="姓名" width="180">\n' +
          '      </el-table-column>\n' +
          '      <el-table-column prop="address" label="地址">\n' +
          '      </el-table-column>\n' +
          '    </el-table>\n' +
          '  </div>\n' +
          '</template>\n' +
          '\n' +
          '<script>\n' +
          '    import CodeEditor from "./codeEditor";\n' +
          '    export default {\n' +
          '        name: "jiazai",\n' +
          '      components: {CodeEditor},\n' +
          '      data() {\n' +
          '        return {\n' +
          '          selfCode:\'<template>\\n\' +\n' +
          '          \'  <el-table v-loading="loading" :data="tableData" style="width: 100%">\\n\' +\n' +
          '          \'    <el-table-column prop="date" label="日期" width="180">\\n\' +\n' +
          '          \'    </el-table-column>\\n\' +\n' +
          '          \'    <el-table-column prop="name" label="姓名" width="180">\\n\' +\n' +
          '          \'    </el-table-column>\\n\' +\n' +
          '          \'    <el-table-column prop="address" label="地址">\\n\' +\n' +
          '          \'    </el-table-column>\\n\' +\n' +
          '          \'  </el-table>\\n\' +\n' +
          '          \'</template>\',\n' +
          '          tableData: [{\n' +
          '            date: \'2016-05-03\',\n' +
          '            name: \'王小虎\',\n' +
          '            address: \'上海市普陀区金沙江路 1518 弄\'\n' +
          '          }, {\n' +
          '            date: \'2016-05-02\',\n' +
          '            name: \'王小虎\',\n' +
          '            address: \'上海市普陀区金沙江路 1518 弄\'\n' +
          '          }, {\n' +
          '            date: \'2016-05-04\',\n' +
          '            name: \'王小虎\',\n' +
          '            address: \'上海市普陀区金沙江路 1518 弄\'\n' +
          '          }],\n' +
          '          loading: true\n' +
          '        };\n' +
          '      }\n' +
          '    }\n' +
          '<'+'/script>',
          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
          loading: true
        };
      }
    }
</script>

<style scoped>

</style>
