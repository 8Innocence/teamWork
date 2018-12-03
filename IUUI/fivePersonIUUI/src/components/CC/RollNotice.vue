<template>
  <div>
    <yd-rollnotice autoplay="2000" class="roll">
      <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
      <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
      <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折</yd-rollnotice-item>
    </yd-rollnotice>
    <code-editor :code="selfCode"></code-editor>
  </div>
</template>

<script>
    import CodeEditor from "../ZDS/codeEditor";
    export default {
        name: "RollNotice",
      components: {CodeEditor},
      data(){
          return{
            selfCode:'<template>\n' +
              '  <div>\n' +
              '    <yd-rollnotice autoplay="2000" class="roll">\n' +
              '      <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>\n' +
              '      <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>\n' +
              '      <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折</yd-rollnotice-item>\n' +
              '    </yd-rollnotice>\n' +
              '  </div>\n' +
              '</template>'
          }
      }
    }
</script>

<style scoped>
.roll{
  background:darkgray;
  margin-bottom: 30px;
}
</style>
