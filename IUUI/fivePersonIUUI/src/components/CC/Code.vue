<template>
   <div>
     <div class="cc">
       <yd-cell-group>
         <yd-cell-item>
           <yd-icon slot="icon" name="phone3" size=".22px"></yd-icon>
           <input type="text" slot="right" placeholder="请输入手机号码">

           <!-- ↓↓关键代码是这里↓↓ -->
           <yd-sendcode slot="right"
                        v-model="start1"
                        @click.native="sendCode1"
                        type="warning"
           ></yd-sendcode>
           <!-- ↑↑关键代码是这里↑↑ -->

         </yd-cell-item>
       </yd-cell-group>
     </div>
     <code-editor :code="selfCode"></code-editor>
   </div>
</template>

<script>
    import CodeEditor from "../ZDS/codeEditor";
    export default {
        name: "Code",
      components: {CodeEditor},
      data() {
        return {
          start1: false,
          selfCode:'<template>\n' +
            '   <div>\n' +
            '     <div class="cc">\n' +
            '       <yd-cell-group>\n' +
            '         <yd-cell-item>\n' +
            '           <yd-icon slot="icon" name="phone3" size=".22px"></yd-icon>\n' +
            '           <input type="text" slot="right" placeholder="请输入手机号码">\n' +
            '\n' +
            '           <!-- ↓↓关键代码是这里↓↓ -->\n' +
            '           <yd-sendcode slot="right"\n' +
            '                        v-model="start1"\n' +
            '                        @click.native="sendCode1"\n' +
            '                        type="warning"\n' +
            '           ></yd-sendcode>\n' +
            '           <!-- ↑↑关键代码是这里↑↑ -->\n' +
            '\n' +
            '         </yd-cell-item>\n' +
            '       </yd-cell-group>\n' +
            '     </div>\n' +
            '   </div>\n' +
            '</template>'
        }
      },
      methods: {
        sendCode1() {
          this.$dialog.loading.open('发送中...');
          setTimeout(() => {

            this.start1 = true;
            this.$dialog.loading.close();

            this.$dialog.toast({
              mes: '已发送',
              icon: 'success',
              timeout: 1500
            });

          }, 1000);
        }
      }
    }
</script>

<style scoped>

</style>
<style>
  .cc/deep/.yd-cell-item{
    height:60px;
    align-items: center;
  }
  .cc/deep/.yd-cell-box{
    height:80px;
  }
  .cc/deep/.yd-cell-right>input{
    font-size:20px;
  }
  .cc/deep/.yd-cell-right .yd-btn{
    height: 20px;
    font-size: 12px;
  }
</style>
