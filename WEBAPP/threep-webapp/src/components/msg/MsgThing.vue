<template>
  <div class="thing">
    <p>商品评价（684）<span>查看全部</span> <i class="iconfont icon-gengduo-copy"></i></p>
    <p>宝贝很棒，很好看，带上去闪闪的，很显白~包装也很完美，该有的证明一个都不缺，还有就是物流也很给力...</p>
    <p>主钻分数(最低):0分;钻石净度:SI/小瑕;颜色:H/白;规格:剧中同...</p>
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
    color:black;
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
    color:#999999;
    padding-bottom:0.1rem;
    border-bottom:1px solid #999999;
  }
</style>
