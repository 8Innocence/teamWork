<template>
  <header>
    <div class="headerone">
      <i class = "iconfont icon-richscan_icon"></i>
      <img src="img/logo.gif" alt="">
      <i class="iconfont icon-web__erweima"></i>
      <i class = "iconfont icon-iconfontzhizuobiaozhun023110 "></i>
    </div>
    <div class="headertwo">
      <a href="">
        <i class = "iconfont icon-sousuo"></i>
        <p>搜索商品 品牌</p>
        <i class="iconfont icon-xiangji"></i>
      </a>
    </div>
  </header>
</template>

<script>
    export default {
        name: "IndexHeader"
    }
</script>

<style scoped>
  header{
    width:100%;
    height:0.9rem;
    background:#ff478e;

  }
  .headerone{
    width:100%;
    height:0.47rem;
    background:#8b8ee3;
    display:flex;
    -webkit-align-items: center;
  }
  .headerone img{
    width:1.11rem;
    height:0.2rem;
    margin-left:1.2rem;
    margin-right:0.5rem;
  }
  .iconfont{
    color:white;
    font-size:0.2rem;
    font-weight:600;
  }
  .icon-richscan_icon{
    margin-left:0.1rem;
  }
  .icon-web__erweima{
    margin-right:0.15rem;
  }
  .headertwo{
    width:100%;
    height:0.43rem;
    background:#8b8ee3;
  }
  .headertwo a{
    display:block;
    width:3.55rem;
    height:0.33rem;
    background:white;
    margin:0 auto;
    display:flex;
    -webkit-align-items: center;
  }
  .headertwo a p{
    font-size:0.12rem;
    color:#aaaaaa;
    text-indent:0.1rem;
  }
  .headertwo a .iconfont{
    font-size:0.2rem;
    color:#aaaaaa;
  }
  .icon-sousuo{
    margin-left:0.1rem;
  }
  .icon-xiangji{
    margin-left:2rem;
  }
</style>
