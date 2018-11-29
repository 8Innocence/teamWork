<template>
  <div class="wuliu">
    <ul>
      <li>
        <p>最新物流<br/>03:40</p>
        <img src="../../../static/img/mine3.gif" alt="">
        <p><span>运输中</span><br/>【淮安市】淮安运转中心已发出</p>
      </li>
      <li>
        <p>最新物流<br/>03:40</p>
        <img src="../../../static/img/mine3.gif" alt="">
        <p><span>运输中</span><br/>【淮安市】淮安运转中心已发出</p>
      </li>
    </ul>
    <img src="../../../static/img/mine4.gif" alt="">
  </div>
</template>

<script>
    export default {
        name: "MineWuliu"
    }
</script>

<style scoped>
  .wuliu{
    width:100%;
    height:2.275rem;
  }
  .wuliu ul{
    width:100%;
    height:1.365rem;
  }
  .wuliu ul li{
    width:100%;
    height:0.6825rem;
    display:flex;
  }
  .wuliu ul li p:nth-child(1){
    font-size:0.11rem;
    color:#999999;
    margin:0.12rem 0.1rem 0 0.2rem ;
  }
  .wuliu ul li img{
    width:0.37rem;
    height:0.37rem;
    margin:0.1rem 0.1rem;
  }
  .wuliu ul li p:nth-child(3){
    font-size:0.11rem;
    color:#999999;
    margin-top:0.1rem;
  }
  .wuliu ul li p:nth-child(3) span{
    color:#409ce2;
  }
  .wuliu img{
    width:3.5rem;
    height:0.695rem;
    margin:0 auto;
  }
</style>
