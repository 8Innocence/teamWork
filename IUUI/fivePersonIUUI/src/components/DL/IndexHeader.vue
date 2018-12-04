<template>
  <header>
    <h1 @click="goind()" style="font-size:50px;font-family: Algerian">IUUI</h1>
    <input type="text" placeholder="Search..." id="txt">
    <div><a href="javascript:;" @click="go()">文档</a></div>
    <div><a href="javascript:;" @click="goz()">实例</a></div>
    <div class="show">
      <a href="javascript:;" @click="gott()">模板 </a>
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
          goind(){
            this.$router.push({path:"/"})
          },
            gocc(){
              this.$router.push({path:"cc"})
            },
            gott(){
              this.$router.push({path:"model"})
            },
            goz(){
              this.$router.push({path:"element"})
            }
        }
    }
</script>

<style scoped>
  header{
    width:100%;
    height:80px;
    margin:0 auto;
    padding:0 5%;

  }
  a{
    text-decoration:none;

  }
  .logo{
    width:auto;
    height:100px;
  }

  header h1{
    float:left;
    color:white;
    line-height:80px;
    text-shadow:2px 4px 5px #eee;

  }
  img{
    width:120px;
    height:48px;
  }
  #txt{
    margin:18px 300px 0 80px;
    padding-left:15px;
    border-radius: 5px;
    width:300px;
    height:45px;
    background:none;
    border:1px solid white;
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
    box-sizing: border-box;
  }
  header div a:hover{
    border-bottom:3px solid #ac0;
  }
</style>
