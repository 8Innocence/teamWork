<template>
  <div class="foot">
    <p>派送方式<span>快递免邮</span></p>
    <p>运险费<span>未选择</span></p>
    <p>运费险投保须知</p>
    <p>卖家留言<span>选填：填写内容已和卖家协商确认</span></p>
    <p>共一件商品  小计：<span>￥278.00</span></p>
  </div>
</template>

<script>
    export default {
        name: "MoneyFoot"
    }
</script>

<style scoped>
  .foot{
    width:100%;
    height:2.6rem;
    background:white;
    margin-bottom:0.1rem;
  }
  .foot p{
    width:95%;
    height:0.51rem;
    margin:0 auto;
    font-size:0.12rem;
    color:black;
    display:flex;
    -webkit-align-items: center;
    /*background:pink;*/
    border-bottom:1px solid #9a9a9a;
  }
  .foot p:nth-child(1) span{
    margin-left:2.5rem;
  }
  .foot p:nth-child(2) span{
    margin-left:2.7rem;
  }
  .foot p:nth-child(4) span{
    margin-left:0.1rem;
    color:#c7c7cd;
  }
  .foot p:nth-child(5){
    text-indent:2rem;
  }
  .foot p:nth-child(5) span{
    text-indent:0;
    color:#ff0036;
  }
</style>
