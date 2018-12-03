<template lang="html">
 <div>
   <div class="medbox">
     <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
   </div>
   <code-editor class="aa" :code="selfCode"></code-editor>
 </div>
</template>

<script>
  import { markdownEditor } from 'vue-simplemde';
  import CodeEditor from "./codeEditor";
  export default {
    data: function(){
      return {
        selfCode:'<template lang="html">\n' +
          '  <div class="medbox">\n' +
          '    <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>\n' +
          '  </div>\n' +
          '</template>\n',
        content:'',
        configs: {
          status: true,
          initialValue: '',
          renderingConfig: {
            codeSyntaxHighlighting: true,
            highlightingTheme: 'atom-one-light'
          }
        }
      }
    },
    components: {
      CodeEditor,
      markdownEditor
    }
  }
</script>

<style lang="scss">
  .medbox{
    width: calc(102% - 20px);
    position: relative;
    font-size: 30px;
    top: 0px;
    left: 0px;
    margin-bottom: 30px;
    .markdown-editor{
      border: 1px solid gray;
      a{
        color: gray;
        padding: 0 10px;
        /*border-right: 1px solid black;*/
      }
      .CodeMirror{
        border-top:1px solid black;
        height: 150px;
      }
    }

  }

</style>
