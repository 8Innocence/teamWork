<template>
  <div class="dingdan">
    <div><p>我的订单</p><span>查看全部</span></div>
    <div>
      <a href="">
        <i class="iconfont icon-daifukuan" ></i>
        <span>代付款</span>
      </a>
      <a href="">
        <i class="iconfont icon-daifukuan" ></i>
        <span>代发货</span>
      </a>
      <a href="">
        <i class="iconfont icon-daifukuan" ></i>
        <span>代收货</span>
      </a>
      <a href="">
        <i class="iconfont icon-daifukuan" ></i>
        <span>代评价</span>
      </a>
      <a href="">
        <i class="iconfont icon-daifukuan" ></i>
        <span>退款/售后</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MineDingdan"
    }
</script>

<style scoped>
  .dingdan{
    width:100%;
    height:1.375rem;
  }
  .dingdan div{
    display:flex;
    -webkit-align-items: center;
  }
  .dingdan div:nth-child(1){
    height:0.52rem;
    -webkit-justify-content: space-between;
  }
  .dingdan div:nth-child(1) p{
    font-size:0.17rem;
    color:black;
    font-weight:600;
    margin-left:0.1rem;
  }
  .dingdan div:nth-child(1) span{
    font-size:0.11rem;
    color:#999999;
    margin-right:0.1rem;
  }
  .dingdan div:nth-child(2){
    height:0.85rem;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
  }
  .dingdan div:nth-child(2) a{
    display:flex;
    flex-direction:column;
    text-align:center;
  }
  .dingdan div:nth-child(2) a .iconfont{
    font-size:0.3rem;
    color:red;
    margin:0.1rem 0.1rem;
  }
  .dingdan div:nth-child(2) a span{
    font-size:0.11rem;
    color:#717171;
  }
</style>
