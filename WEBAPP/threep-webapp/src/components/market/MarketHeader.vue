<template>
  <header>
    <i class="iconfont icon-dingwei"></i>
    <i class="iconfont icon-web__erweima"></i>
    <i class="iconfont icon-wo"></i>
  </header>
</template>

<script>
    export default {
        name: "MarketHeader"
    }
</script>

<style scoped>
  header{
    width:100%;
    height:0.34rem;
    display:flex;
    margin-top:0.1rem;
    position: fixed;
  }
  .iconfont{
    color:black;
    font-size:0.3rem;
  }
  .icon-dingwei{
    margin-left:0.1rem;
    margin-right:2.5rem;
  }
  .icon-web__erweima{
    margin-right:0.13rem;
  }
</style>
