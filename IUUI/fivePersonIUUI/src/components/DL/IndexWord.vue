<template>
  <div class="word">
    <h3>经典模块化前端框架</h3>
    <p>由职业前端倾情打造，面向所有层次的前后端开发者，零门槛开箱即用的前端UI解决方案</p>
    <a href="https://www.layui.com/">  <img src="../../../static/images/dl3.gif" alt="">立即下载</a>
    <p>当前版本：2.4.5 更新日志 下载量：793825</p>
  </div>
</template>

<script>
    export default {
        name: "IndexWord"
    }
</script>

<style scoped>
  .word{
    width:100%;
    height:150px;
    /* background:pink; */
    margin-bottom:50px;

  }
  .word h3{
    font-size:40px;
    color:white;
    text-align:center;
    font-weight:500;


  }
  .word p{
    color:white;
    font-size:14px;
    text-align:center;
    margin:10px 30px;
  }
  .word a{
    display:flex;
    width:120px;
    margin:0 auto;
    border:1px solid white;
    line-height:60px;
    padding:0 15px;
    color:white;
    font-size:20px;
  }
  .word a img{
    width:20px;
    height:20px;
    margin:20px 5px 0 10px;
  }
  .word a:hover{
    border-radius:18px;
  }
</style>
