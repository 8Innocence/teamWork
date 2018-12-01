<template>
  <nav>
    <p>收货人：王聪 <span>18693082257</span></p>
    <p><i class="iconfont icon-dingwei"></i>收货地址：陕西省西安市雁塔区南窑头国际</p>
    <p>（收货不便时可选择免费待收货服务）</p>
    <img src="../../../static/img/sev1.gif" alt="">
  </nav>
</template>

<script>
    export default {
        name: "MoneyNav"
    }
</script>

<style scoped>
  nav{
    width:100%;
    height:1.09rem;
    padding-top:0.1rem;
    background:white;
    margin-bottom:0.1rem;
  }
  nav p{
    font-size:0.14rem;
    display:flex;
    color:black;
    text-indent: 0.2rem;
    /*line-height:0.2rem;*/
  }
  nav p:nth-child(1) span{
    margin-left:1rem;
  }
  nav p:nth-child(1){
    margin:0rem 0 0.1rem 0.26rem;
  }
  .iconfont{
    font-size:0.15rem;
    margin-right:0.1rem;
  }
  nav p:nth-child(3){
    font-size:0.12rem;
    color:#13ce66;
    margin:0.1rem 0 0.1rem 0.26rem;
  }
  nav img{
    margin-top:0.2rem;
  }
</style>
