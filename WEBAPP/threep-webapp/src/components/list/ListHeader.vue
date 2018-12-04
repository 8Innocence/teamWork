<template>
  <header>
    <i class = "iconfont icon-richscan_icon"></i>
    <a href="javascript:;">
      <i class = "iconfont icon-sousuo"></i>
      <input type="text" placeholder="搜索商品 品牌"/>
      <i class="iconfont icon-xiangji"></i>
    </a>
    <i class="iconfont icon-web__erweima"></i>
    <i class = "iconfont icon-iconfontzhizuobiaozhun023110 "></i>
  </header>
</template>

<script>
    export default {
        name: "ListHeader"
    }
</script>

<style scoped>
  header{
    width:100%;
    height:0.48rem;
    background:#ac0;
    display:flex;
    -webkit-align-items: center;
  }
  header .iconfont{
    font-size:0.2rem;
    color:white;
  }
  header a{
    /*display:block;*/
    width:70%;
    height:0.35rem;
    background:white;
    display:flex;
    -webkit-align-items: center;
  }
  .icon-richscan_icon{
    margin:0 0.1rem;
  }
  .icon-web__erweima{
    margin:0 0.1rem;
  }
  header .icon-sousuo{
    color:#a6a6a6;
  }
  header .icon-xiangji{
    color:#a6a6a6;
  }
  header a input{
    box-sizing: border-box;
    width:100%;
    height:97%;
    border:0;
    outline: none;
    font-size:0.12rem;
    color:#a6a6a6;
    margin-left:.1rem;
  }

</style>
