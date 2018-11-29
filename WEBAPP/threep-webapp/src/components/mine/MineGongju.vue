<template>
  <div class="gongju">
    <a href=""><img src="../../../static/img/mine5.gif" alt=""><span>下单有礼</span></a>
    <a href=""><img src="../../../static/img/mine6.gif" alt=""><span>下单有礼</span></a>
    <a href=""><img src="../../../static/img/mine7.gif" alt=""><span>下单有礼</span></a>
    <a href=""><img src="../../../static/img/mine8.gif" alt=""><span>下单有礼</span></a>
    <a href=""><img src="../../../static/img/mine9.gif" alt=""><span>下单有礼</span></a>
    <a href=""><img src="../../../static/img/mine10.gif" alt=""><span>下单有礼</span></a>
    <a href=""><img src="../../../static/img/mine11.gif" alt=""><span>下单有礼</span></a>
    <a href=""><img src="../../../static/img/mine12.gif" alt=""><span>下单有礼</span></a>
  </div>
</template>

<script>
    export default {
        name: "MineGongju"
    }
</script>

<style scoped>
  .gongju{
    width:100%;
    height:1.5rem;
    display:flex;
    -webkit-justify-content: space-around;
    flex-wrap: wrap;
  }
  .gongju a{
    display:flex;
    flex-direction: column;
    -webkit-justify-content: center;
    width:25%;
    text-align:center;
  }
  .gongju a img{
    width:0.255rem;
    height:0.265rem;
    margin:0 auto;
  }
  .gongju a span{
    font-size:0.11rem;
    color:#999999;
  }
</style>
