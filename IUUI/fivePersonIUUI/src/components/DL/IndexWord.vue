<template>
  <div class="word">
    <h3>你认为最高效的前端框架</h3>
    <p>
        由职业前端精英团队在短时间内为您定制的高效率高质量的UI框架，面向所有层次.<br>无论你是高级，中级，还是初级，都会让你有前所未有感官的体验。</p>
    <a href="https://github.com/8Innocence/teamWork">
      <!--<img src="../../../static/images/dl3.png" alt="">-->
    立即下载</a>
    <p>当前版本：1.0.0 更新日志 下载量：793825</p>
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
    height:200px;
    /* background:pink; */
    margin-bottom:50px;

  }
  .word h3{
    font-size:50px;
    color:white;
    text-align:center;
    font-weight:500;
    text-shadow:2px 4px 5px black;


  }
  .word p{
    color:white;
    font-size:18px;
    text-align:center;
    margin:10px 30px;
    font-family: 黑体;
    text-shadow:2px 2px 5px black;

  }
  .word a{
    text-align: center;
    display: block;
    height:60px;
    width:140px;
    margin:0 auto;
    border:1px solid white;
    line-height:60px;
    padding:0 15px;
    color:white;
    font-size:18px;
    text-decoration: none;
    text-shadow:2px 2px 5px black;

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
