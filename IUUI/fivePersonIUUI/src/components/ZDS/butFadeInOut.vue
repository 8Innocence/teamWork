<template>
<div class="fadeinOut">
  <el-button @click="show = !show" style="margin-left: 50px">Click Me</el-button>
  <div style="display: flex; margin: 20px 50px; height: 100px;">
    <transition name="el-fade-in-linear">
      <div v-show="show" class="transition-box">.el-fade-in-linear</div>
    </transition>
    <transition name="el-fade-in">
      <div v-show="show" class="transition-box">.el-fade-in</div>
    </transition>
  </div>
  <code-editor :code="fadeCode"></code-editor>
</div>
</template>

<script>
    import CodeEditor from "./codeEditor";
    export default {
        name: "butFadeInOut",
      components: {CodeEditor},
      data(){
        return{
          show:true,
          fadeCode:'<el-button @click="show = !show">Click Me</el-button>\n' +
          '  <div style="display: flex; margin-top: 20px; height: 100px;">\n' +
          '    <transition name="el-fade-in-linear">\n' +
          '      <div v-show="show" class="transition-box">.el-fade-in-linear</div>\n' +
          '    </transition>\n' +
          '    <transition name="el-fade-in">\n' +
          '      <div v-show="show" class="transition-box">.el-fade-in</div>\n' +
          '    </transition>\n' +
          '  </div>'
        }
      },
    }
</script>

<style lang="scss" scoped>
  .fadeinOut{
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  }
</style>
