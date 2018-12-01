<template>
  <div class="thing">
    <p>商品评价（684）<span>查看全部</span> <i class="iconfont icon-gengduo-copy"></i></p>
    <p>东西很棒，很新鲜，吃起来脆脆的，很甜很可口还新鲜，包装也很给力，还有就是物流也很给力...</p>
    <p>作为理科生的我实在是想不出来词了 哇哈哈哈哈哈哈哈哈</p>
  </div>
</template>

<script>
    export default {
        name: "MsgThing"
    }
</script>

<style scoped>
  .thing{
    width:100%;
    height:1.1rem;
    background:white;
    padding-top:0.1rem;
  }
  .thing p{
    width:90%;
    margin:0 auto;
    display:flex;
    flex-wrap: wrap;
    font-size:0.12rem;
    color:#13ce66;
    margin-top:0.1rem;
  }
  .thing p:nth-child(1){
    font-size:0.14rem;
  }
  .thing p:nth-child(1) .icon-gengduo-copy,span{
    color:#ff0036;
  }
  .thing p:nth-child(1) span{
    margin-left:1.5rem;
  }
  .icon-gengduo-copy{
    margin-left:0;
  }
  .thing p:nth-child(3){
    color:#13ce66;
    padding-bottom:0.1rem;
    border-bottom:1px solid #999999;
  }
</style>
