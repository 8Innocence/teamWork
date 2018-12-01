<template>
  <div class="banner">
    <p><img src="../../../static/img/sev2.gif" alt=""><span>天猫旗舰店</span></p>
    <div>
      <img src="../../../static/img/sev4.gif" alt="">
      <ul>
        <li>2018新款女装冬季外套棉袄中长款棉衣韩版ins百搭羽绒服棉...</li>
        <li>颜色分类：黑色；尺码：M[配毛领]</li>
        <li><span>天猫无忧购</span><span>七天退换</span></li>
      </ul>
      <p><span>￥278.00</span><span>x1</span></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MoneyBanner"
    }
</script>

<style scoped>
  .banner{
    width:100%;
    height:1.8rem;
    background:white;
  }
  .banner p{
    font-size:0.12rem;
    height:0.44rem;
    line-height:0.44rem;
    color:black;
    display:flex;
    -webkit-align-items: center;
  }
  .banner p img{
    width:0.2rem;
    height:0.15rem;
    margin: 0 0.1rem 0 0.1rem;
  }
  .banner div{
    display:flex;
    height:1.3rem;
    background:#f5f5f5;
  }
  .banner div img{
    width:1rem;
    height:1rem;
    margin:0.15rem 0.1rem 0 0.1rem;
  }
  .banner ul{
    width:1.88rem;
    margin-top:0.14rem;
  }
  .banner ul li{
    font-size:0.11rem;
    color:#3e4346;
    line-height:0.25rem;
  }
  .banner ul li:nth-child(2){
    color:#999999;
  }
  .banner ul li:nth-child(3){
    display:flex;
  }
  .banner ul li:nth-child(3) span{
    display:block;
    height:0.15rem;
    line-height:0.15rem;
    border:1px solid #13ce66;
  }
  .banner div p{
    display:flex;
    flex-direction:column;
    margin-left:0.1rem;
    margin-top:0.1rem;
  }
  .banner div p span{
    height:0.2rem;
  }
</style>
