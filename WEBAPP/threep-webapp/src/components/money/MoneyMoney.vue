<template>
  <div class="money">
    <p><img src="../../assets/img/sev5.gif" alt=""><span>不使用</span></p>
    <p>红包抵扣￥3<span>查看详情</span><img src="../../assets/img/sev6.gif" alt=""></p>
    <p>匿名购买<img src="../../assets/img/sev6.gif" alt=""></p>
    <p>送至：陕西省西安市雁塔区南窑头国际 </p>
  </div>
</template>

<script>
    export default {
        name: "MoneyMoney"
    }
</script>

<style scoped>
  .money{
    width:100%;
    height:2.06rem;
    background:white;
  }
  .money p{
    width:95%;
    height:0.5rem;
    margin:0 auto;
    display:flex;
    -webkit-align-items: center;
    font-size:0.12rem;
    border-bottom:1px solid #9a9a9a;
  }
  .money p:nth-child(1) span{
    margin-left:2rem;
  }
  .money p:nth-child(2) span{
    color:#999999;
    margin-left:0.1rem;
  }
  .money p:nth-child(1) img{
    width:0.9rem;
    height:0.16rem;
  }
  .money p:nth-child(3) img{
    width:0.53rem;
    height:0.33rem;
    margin-left:2.25rem;
  }
  .money p:nth-child(2) img{
    width:0.53rem;
    height:0.33rem;
    margin-left:1.5rem;
  }
  .money p:nth-child(4){
    color:#f5a623;
  }
</style>
