<template>
  <nav>
    <div id="run">
      <img src="../../../static/img/mine2.gif" alt="">
      <p>不曾在青春里走过</p>
      <img src="../../../static/img/mine1.gif" alt="">
    </div>
    <div>
      <a href=""><span>3</span><p>收藏夹</p></a>
      <a href=""><span>2</span><p>关注店铺</p></a>
      <a href=""><span>210</span><p>足迹</p></a>
      <a href=""><span>7</span><p>红包卡卷</p></a>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "MineNav"
    }
</script>

<style scoped>
  nav{
    width:100%;
    height:1.615rem;
    background:#ff0038;
    display:flex;
    flex-direction:column;
  }
  nav div:nth-child(1){
    display:flex;
    height:1.06rem;
    -webkit-justify-content: space-around;
  }
  nav div:nth-child(1) img:nth-child(1){
    width:0.8rem;
    height:0.825rem;
    margin:0.1rem 0.1rem;
    border-radius:50%;
  }
  nav div:nth-child(1) img:nth-child(3){
    width:0.9rem;
    height:0.33rem;
    margin-top:0.3rem;
    border-radius:0.5rem;
  }
  nav div:nth-child(1) p{
    font-size:0.16rem;
    color:white;
    margin-top:0.2rem;
  }
  nav div:nth-child(2){
    display:flex;
    height:0.56rem;
    -webkit-align-items: center;
    -webkit-justify-content: space-around;
  }
  nav div:nth-child(2) a{
    width:20%;
    display:flex;
    text-align:center;
    flex-direction:column;
  }
  nav div:nth-child(2) a span{
    font-size:0.2rem;
    color:white;
    font-weight:600;
  }
  nav div:nth-child(2) a p{
    font-size:0.11rem;
    color:white;
  }
</style>
