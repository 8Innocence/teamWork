<template>
  <div>
    <ui-idx></ui-idx>
    <code-editor :code="selfCode"></code-editor>
  </div>

</template>

<script>
    import CodeEditor from "./codeEditor";
    import UiIdx from "./uiIdx";
    export default {
        name: "idxBox",
      components: {UiIdx, CodeEditor},
      data(){
          return{
            selfCode:'<template>\n' +
            '  <div>\n' +
            '    <idx></idx>\n' +
            '    <code-editor :code="selfCode"></code-editor>\n' +
            '  </div>\n' +
            '\n' +
            '</template>\n' +
            '\n' +
            '<script>\n' +
            '    import uiIdx from "./uiIdx";\n' +
            '    import CodeEditor from "./codeEditor";\n' +
            '    export default {\n' +
            '        name: "idxBox",\n' +
            '      components: {CodeEditor, Idx},\n' +
            '      data(){\n' +
            '          return{\n' +
            '            selfCode:\'\'\n' +
            '          }\n' +
            '      }\n' +
            '    }\n' +
            '<'+'/script>'
          }
      }
    }
</script>

<style scoped>

</style>
