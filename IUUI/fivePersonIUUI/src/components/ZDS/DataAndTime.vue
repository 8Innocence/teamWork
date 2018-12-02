<template>
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions1">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">设置默认时间</span>
      <el-date-picker
        v-model="value3"
        type="datetime"
        placeholder="选择日期时间"
        default-time="12:00:00">
      </el-date-picker>
    </div>
    <code-editor :code="selfCode"></code-editor>
  </div>
</template>

<script>
    import CodeEditor from "./codeEditor";
    export default {
        name: "DataAndTime",
      components: {CodeEditor},
      data() {
        return {
          selfCode:'<template>\n' +
          '  <div>\n' +
          '    <div class="block">\n' +
          '      <span class="demonstration">默认</span>\n' +
          '      <el-date-picker\n' +
          '        v-model="value1"\n' +
          '        type="datetime"\n' +
          '        placeholder="选择日期时间">\n' +
          '      </el-date-picker>\n' +
          '    </div>\n' +
          '    <div class="block">\n' +
          '      <span class="demonstration">带快捷选项</span>\n' +
          '      <el-date-picker\n' +
          '        v-model="value2"\n' +
          '        type="datetime"\n' +
          '        placeholder="选择日期时间"\n' +
          '        align="right"\n' +
          '        :picker-options="pickerOptions1">\n' +
          '      </el-date-picker>\n' +
          '    </div>\n' +
          '    <div class="block">\n' +
          '      <span class="demonstration">设置默认时间</span>\n' +
          '      <el-date-picker\n' +
          '        v-model="value3"\n' +
          '        type="datetime"\n' +
          '        placeholder="选择日期时间"\n' +
          '        default-time="12:00:00">\n' +
          '      </el-date-picker>\n' +
          '    </div>\n' +
          '  </div>\n' +
          '</template>\n' +
          '\n' +
          '<script>\n' +
          '    import CodeEditor from "./codeEditor";\n' +
          '    export default {\n' +
          '        name: "DataAndTime",\n' +
          '      components: {CodeEditor},\n' +
          '      data() {\n' +
          '        return {\n' +
          '          pickerOptions1: {\n' +
          '            shortcuts: [{\n' +
          '              text: \'今天\',\n' +
          '              onClick(picker) {\n' +
          '                picker.$emit(\'pick\', new Date());\n' +
          '              }\n' +
          '            }, {\n' +
          '              text: \'昨天\',\n' +
          '              onClick(picker) {\n' +
          '                const date = new Date();\n' +
          '                date.setTime(date.getTime() - 3600 * 1000 * 24);\n' +
          '                picker.$emit(\'pick\', date);\n' +
          '              }\n' +
          '            }, {\n' +
          '              text: \'一周前\',\n' +
          '              onClick(picker) {\n' +
          '                const date = new Date();\n' +
          '                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\n' +
          '                picker.$emit(\'pick\', date);\n' +
          '              }\n' +
          '            }]\n' +
          '          },\n' +
          '          value1: \'\',\n' +
          '          value2: \'\',\n' +
          '          value3: \'\'\n' +
          '        };\n' +
          '      }\n' +
          '    }\n' +
          '<'+'/script>',
          pickerOptions1: {
            shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          value1: '',
          value2: '',
          value3: ''
        };
      }
    }
</script>

<style scoped>

</style>
