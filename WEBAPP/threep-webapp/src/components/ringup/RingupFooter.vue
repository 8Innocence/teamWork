<template>
  <footer>
    <div class="join"><p>合作账号登录</p></div>
    <div class="app">
      <a href=""><img src="../../../static/img/16.gif"></a>
      <a href=""><img src="../../../static/img/17.gif"></a>
      <a href=""><img src="../../../static/img/18.gif"></a>
      <a href=""><img src="../../../static/img/19.gif"></a>
      <a href=""><img src="../../../static/img/20.gif"></a>
    </div>
    <div class="privacy">登录即代表您已经同意<a href="">一号店隐私政策</a></div>
  </footer>
</template>

<script>
    export default {
        name: "RingupFooter"
    }
</script>

<style scoped>
  footer{
    width:100%;
    padding: 0 .31rem;
    box-sizing: border-box;
  }
  .join{
    width:100%;
    height:.76rem;
    background:url("../../../static/img/25.gif") repeat-x center;
    position:relative;
  }
  .join p{
    width:1.08rem;
    text-align: center;
    font-size:.14rem;
    color:#919191;
    position:absolute;
    top:.3rem;
    left:1.03rem;
    background:#ffffff;
  }
  .app{
    width:100%;
    display:flex;
    justify-content:space-around;
    margin-bottom:.17rem;
  }
  .app img {
    width: .46rem;
    height: .46rem;
    border-radius: 50%;
  }
  .privacy{
    font-size:.12rem;
    color:#cdcdcd;
    display:flex;
    padding-left:.55rem;
    margin-bottom:.33rem;
  }
  .privacy a{
    color:#7e7e7e;
    text-decoration:underline;
  }
</style>
