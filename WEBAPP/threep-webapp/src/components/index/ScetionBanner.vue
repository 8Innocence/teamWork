<template>
  <div class="banner">
    <div>
      <a href="">
        <h2>限时抢购</h2>
        <img src="../../assets/img/b1.gif" alt="">
        <span>限时特价</span>
      </a>
      <a href="">
        <h2>   </h2>
        <img src="../../assets/img/b5.gif" alt="">
        <span>为你精选</span>
      </a>
    </div>
    <div>
      <a href="">
        <h2>天猫好物</h2>
        <img src="../../assets/img/b3.gif" alt="">
        <span class="special">智能数码</span>
      </a>
      <a href="">
        <h2>    </h2>
        <img src="../../assets/img/b4.gif" alt="">
        <span class="special">品质生活</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ScetionBanner"
    }
</script>

<style scoped>
  .banner{
    width:95%;
    height:1.3rem;
    margin:0.1rem auto;
    display:flex;
    -webkit-justify-content: space-between;
  }
  .banner div{
    width:49%;
    height:1.3rem;
    background:#f8f8f8;
    display:flex;
  }
  .banner div a{
    display:block;
    width:50%;
    height:1.3rem;
    display:flex;
    -webkit-justify-content: space-around;
    flex-direction: column;
  }
  .banner div a h2{
    font-size:0.15rem;
    color:#202020;
  }
  .banner div a img{
    width:0.7rem;
    height:0.53rem;
  }
  .banner div a span{
    display:block;
    width:0.5rem;
    font-size:0.09rem;
    color:#ff2c59;
    border:1px solid #ff2c59;
    border-radius:0.02rem;
  }
  .banner div a .special{
    color:white;
    background:#c19773;
    border:none;
  }
</style>
