<template>
  <header>
    <h1>iuui</h1>
    <input type="text" placeholder="查找" id="txt">
    <div><a href="javascript:;" @click="go()">文档</a></div>
    <div><a href="javascript:;">实例</a></div>
    <div class="show">
      <a href="javascript:;">模板 </a>
    </div>
    <div><a href="javascript:;"  @click="gocc()">团队</a></div>
  </header>
</template>

<script>
    export default {
        name: "IndexHeader",
        methods:{
            go(){
              this.$router.push({path:"Content"})
            },
            gocc(){
              this.$router.push({path:"cc"})
            }
        }
    }
</script>

<style scoped>
  header{
    width:90%;
    height:80px;
    margin:0 auto;
  }
  header h1{
    float:left;
    color:white;
    line-height:80px;
  }
  #txt{
    margin:32px 400px 0 100px;
    height:20px;
    background:none;
    border:1px solid #070008;
    color:white;
    /*border:none;*/
    outline: none;
    float:left;
  }
  header div a{
    display:block;
    float:left;
    width:80px;
    height:80px;
    color:white;
    text-align:center;
    line-height:80px;
    margin: 0 10px;
  }
  header div a:hover{
    border-bottom:3px solid #ac0;
  }
</style>
