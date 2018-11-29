<template>
  <div class="myself">
    <div class="myself_top">
      <h3>热门活动</h3>
      <a href=""><p>查看全部</p><i class="iconfont icon-gengduo-copy"></i></a>
    </div>
    <div class="histroy_my">
      <a href=""><img src="../../assets/img/my1.gif" alt=""><p>试衣间</p></a>
      <a href=""><img src="../../assets/img/my2.gif" alt=""><p>酷玩街</p></a>
      <a href=""><img src="../../assets/img/my3.gif" alt=""><p>变漂亮</p></a>
      <a href=""><img src="../../assets/img/my4.gif" alt=""><p>加空间</p></a>
      <a href=""><img src="../../assets/img/my5.gif" alt=""><p>文艺范</p></a>
      <a href=""><img src="../../assets/img/my2.gif" alt=""><p>试衣间</p></a>
      <a href=""><img src="../../assets/img/my3.gif" alt=""><p>酷玩街</p></a>
      <a href=""><img src="../../assets/img/my4.gif" alt=""><p>变漂亮</p></a>
      <a href=""><img src="../../assets/img/my5.gif" alt=""><p>加空间</p></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MarketMyslef"
    }
</script>

<style scoped>
  .myself{
    background:#fff;
    padding:0 .15rem;
    margin-bottom:.1rem;
  }
  .myself_top{
    display:flex;
    font-size:.13rem;
    justify-content:space-between;
    align-items: center;
    height:.41rem;
  }
  .myself_top h3{
    font-size:0.18rem;
    color:black;
  }
  .myself_top a{
    color:#b5b5b5;
    display:flex;
    align-items: center;
  }
  .myself_top a .icon-gengduo-copy{
    color:black;
    font-size:.16rem;
    margin-left:.06rem;
  }
  .myself .histroy_my{
    display:flex;
    overflow-x: auto;
    margin-top:.06rem;
  }
  .histroy_my a{
    margin:0 0.1rem;
  }
  .histroy_my a img{
    width:.61rem;
    height:.60rem;
    margin:0 auto .12rem;
  }
  .histroy_my p{
    font-size:.13rem;
    color:#5d5d5d;
    text-align:center;
    margin-bottom:.13rem;
  }
</style>
