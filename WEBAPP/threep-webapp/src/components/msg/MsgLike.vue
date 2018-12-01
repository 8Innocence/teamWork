<template>
  <div  class="like">
    <p><span>参数</span>新鲜 好吃 营养 无污染，真的很好吃，吃了还想吃<i class="iconfont icon-gengduo-copy"></i></p>
    <p><span>选择</span>选择现摘或者由我们采摘后购买，或者直接购买<i class="iconfont icon-gengduo-copy"></i></p>
  </div>
</template>

<script>
    export default {
        name: "MsgLike"
    }
</script>

<style scoped>
  .like{
    width:100%;
    height:0.6rem;
    background:white;
    margin-bottom:0.1rem;
    padding-top:0.1rem;
  }
  .like p{
    display:flex;
    font-size:0.11rem;
    color:#13ce66;
  }
  .like p span{
    color:#13ce66;
    margin:0 0.1rem;
  }
  .like p:nth-child(1) .icon-gengduo-copy{
    margin-left:0.34rem;
  }
  .like p:nth-child(2) {
    margin-top:0.05rem;
  }
  .like p:nth-child(2) .icon-gengduo-copy{
    margin-left:0.53rem;
  }
</style>
