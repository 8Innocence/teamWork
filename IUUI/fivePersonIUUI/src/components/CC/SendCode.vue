<template>
  <div>
    <div class="ee">
      <yd-cell-group title="普通使用">
        <yd-cell-item class="cc">
          <yd-rate slot="left" v-model="rate1"></yd-rate>
          <span slot="right" class="dd">值是: 0</span>
        </yd-cell-item>
        <yd-cell-item>
          <yd-rate slot="left" v-model="rate2"></yd-rate>
          <span slot="right">设置默认值</span>
        </yd-cell-item>
        <yd-cell-item>
          <yd-rate slot="left" count="7" v-model="rate3"></yd-rate>
          <span slot="right">设置多个</span>
        </yd-cell-item>
        <yd-cell-item>
          <yd-rate slot="left" v-model="rate4" color="#00FF16" active-color="#0078D7"></yd-rate>
          <span slot="right">自定义颜色</span>
        </yd-cell-item>
        <yd-cell-item>
          <yd-rate slot="left" v-model="rate5" size="18px"></yd-rate>
          <span slot="right">自定义大小</span>
        </yd-cell-item>
        <yd-cell-item>
          <yd-rate slot="left" v-model="rate6" :readonly="true"></yd-rate>
          <span slot="right">只读</span>
        </yd-cell-item>
      </yd-cell-group>
    </div>
    <code-editor :code="selfCode"></code-editor>
  </div>
</template>

<script>

    import CodeEditor from "../ZDS/codeEditor";
    export default {
        name: "SendCode",
      components: {CodeEditor},
      data() {
        return {
          selfCode:'<template>\n' +
            '  <div>\n' +
            '    <div class="ee">\n' +
            '      <yd-cell-group title="普通使用">\n' +
            '        <yd-cell-item class="cc">\n' +
            '          <yd-rate slot="left" v-model="rate1"></yd-rate>\n' +
            '          <span slot="right" class="dd">值是: 0</span>\n' +
            '        </yd-cell-item>\n' +
            '        <yd-cell-item>\n' +
            '          <yd-rate slot="left" v-model="rate2"></yd-rate>\n' +
            '          <span slot="right">设置默认值</span>\n' +
            '        </yd-cell-item>\n' +
            '        <yd-cell-item>\n' +
            '          <yd-rate slot="left" count="7" v-model="rate3"></yd-rate>\n' +
            '          <span slot="right">设置多个</span>\n' +
            '        </yd-cell-item>\n' +
            '        <yd-cell-item>\n' +
            '          <yd-rate slot="left" v-model="rate4" color="#00FF16" active-color="#0078D7"></yd-rate>\n' +
            '          <span slot="right">自定义颜色</span>\n' +
            '        </yd-cell-item>\n' +
            '        <yd-cell-item>\n' +
            '          <yd-rate slot="left" v-model="rate5" size="18px"></yd-rate>\n' +
            '          <span slot="right">自定义大小</span>\n' +
            '        </yd-cell-item>\n' +
            '        <yd-cell-item>\n' +
            '          <yd-rate slot="left" v-model="rate6" :readonly="true"></yd-rate>\n' +
            '          <span slot="right">只读</span>\n' +
            '        </yd-cell-item>\n' +
            '      </yd-cell-group>\n' +
            '    </div>\n' +
            '    <code-editor :code="selfCode"></code-editor>\n' +
            '  </div>\n' +
            '</template>',
          rate1: 0,
          rate2: 3,
          rate3: 2,
          rate4: 1,
          rate5: 4,
          rate6: 3
        }
      }
    }
</script>

<style scoped>


</style>
<style>
  .ee /deep/.yd-cell-right{
  font-size:.12rem;
  min-height:40px;
}
  .cc{
    height:40px;
  }
  .cc .dd{
    line-height:40px;
    font-size:12px;
    min-height:40px;
  }
</style>
