<template>
  <div  class="like">
    <p><span>参数</span>副钻分数 款式 形状 砖石切工 售后服务 镶嵌方式... <i class="iconfont icon-gengduo-copy"></i></p>
    <p><span>选择</span>请选择 主钻分数（最低）/钻石精度/颜色/规格<i class="iconfont icon-gengduo-copy"></i></p>
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
    color:black;
  }
  .like p span{
    color:#b2b2b2;
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
