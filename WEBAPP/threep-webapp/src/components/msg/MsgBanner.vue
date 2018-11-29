<template>
  <div class="banner">
    <p>优惠<img src="../../assets/img/msgc1.gif"/>领卷至少可减<span>￥50</span></p>
    <p><img src="../../assets/img/msgc2.gif"/>全天猫实物商品通用</p>
    <p><img src="../../assets/img/msgc3.gif" alt="">领取优惠券</p>
    <p>
      <span>活动</span>
      <img src="../../assets/img/msgc4.gif" alt="">
      <span>此商品下单可赢取红包等好礼</span>
      <i class="iconfont icon-gengduo-copy"></i>
    </p>
    <span class="cheap">领券</span>
  </div>
</template>

<script>
    export default {
        name: "MsgBanner"
    }
</script>

<style scoped>
  .banner{
    width:100%;
    height:1.25rem;
    background:white;
    position:relative;
    margin-bottom:0.1rem;
    padding-top:0.1rem;
  }
  .banner p{
    display:flex;
    -webkit-align-content: center;
    font-size:0.14rem;
    color:black;
    line-height:0.2rem;
    margin-top:0.09rem;
    text-indent:0.1rem;
  }
  .banner p:nth-child(1) span{
    color:#ff0338;
  }
  .banner p:nth-child(1) img{
    width:0.12rem;
    height:0.133rem;
    margin:0 0.1rem;
    margin-top:0.02rem;
  }
  .banner p:nth-child(2) img,.banner p:nth-child(3) img{
    width:0.6rem;
    height:0.12rem;
    margin-left:0.5rem;
    margin-top:0.03rem;
  }
  .banner p:nth-child(4) img{
    width:0.6rem;
    height:0.12rem;
    margin:0  0.1rem;
    margin-top:0.03rem;
  }
  .banner p .iconfont{
    margin-left:0.26rem;
  }
  .cheap{
    display:block;
    width:0.38rem;
    height:0.21rem;
    font-size:0.11rem;
    color:#999999;
    line-height:0.21rem;
    text-align:center;
    border:1px solid  #9a9a9a;
    position:absolute;
    right:0.12rem;
    top:0.12rem;
    border-radius:0.5rem;
  }
</style>
