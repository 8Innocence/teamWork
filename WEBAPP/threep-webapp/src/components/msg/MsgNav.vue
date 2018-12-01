<template>
  <nav>
    <strong>￥<span>9999</span> <span>尝鲜价</span></strong>
    <p>价格：<span>￥18888</span></p>
    <p class="word">好看又好吃的水果，全国包邮，赶快来抢购吧<img src="../../../static/img/msg1.gif" alt=""></p>
    <div>
      <span>快递：0.00</span>
      <span>月销1746</span>
      <span>北京</span>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "MsgNav"
    }
</script>

<style scoped>
  nav{
    padding:0 .1rem;
    width:100%;
    height:1.7rem;
    background:white;
    margin-bottom:0.1rem;
  }
  nav strong{

    height:.3rem;
    padding-top:.1rem;
    display: flex;
    -webkit-align-items: center;
    color:#ff0036;
    font-size:.2rem;
  }
  nav strong span{
    display:block;
    font-size:.2rem;
    color:#ff0036;
  }
  nav strong span:nth-child(2){
    display:block;
    width:0.4rem;
    height:0.14rem;
    background:#ebebeb;
    font-size:0.11rem;
    color:#999999;
    text-align:center;
    margin-left:0.1rem;
  }
  nav p{
    width:100%;
    font-size:0.13rem;
    color: #999999;
    display:flex;
    margin-top:0.1rem;
    line-height:0.16rem;
  }
  nav p span{
    text-decoration: line-through;
  }
  .word{
    color:black;
    text-indent:0.1rem;
  }
  nav img{
    width:0.145rem;
    height:0.19rem;
    margin: 0 0.1rem 0 0.5rem;
  }
  nav div{
    width:100%;
    height:0.33rem;
    display:flex;
    margin-top:0.2rem;
    -webkit-align-items: center;
    -webkit-justify-content: space-around;
  }
  nav div span{
    font-size:0.11rem;
    color:#13ce66;
  }

</style>
