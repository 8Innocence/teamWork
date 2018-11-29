<template>
  <div class="last">
    <ul>
      <li>
        <img src="../../assets/img/my6.gif" alt="">
        <div>
          <h4>Burberry1对1线下专属服务</h4>
          <span>尊享1对1专属服务</span>
          <p>8月1日00:00-12月31日00:00</p>
          <p>长安北路261号1st,2nd.6thFloor</p>
        </div>
      </li>
      <li>
        <img src="../../assets/img/my7.gif" alt="">
        <div>
          <h4>Burberry1对1线下专属服务</h4>
          <span>尊享1对1专属服务</span>
          <p>8月1日00.00-12月31日00.00</p>
          <p>长安北路261号1st,2nd.6thFloor</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "MarketLast"
    }
</script>

<style scoped>
  .last{
    width:100%;
    /*height:2.35rem;*/
  }
  .last ul{
    width:90%;
    height:2.35rem;
    margin:0 auto;
  }
  .last ul li{
    width:100%;
    display:flex;
    -webkit-align-content: center;
  }
  .last ul li img{
    width:1rem;
    height:1rem;
    margin:0.1rem 0.1rem;
  }
  .last ul li div{
    display:flex;
    flex-direction:column ;
    margin-top:0.2rem;
  }
  .last ul li div h4{
    font-size:0.15rem;
    color:black;
    margin-bottom:0.04rem;
  }
  .last ul li div span{
    display:block;
    width:1.5rem;
    height:0.14rem;
    background:#ffe6eb;
    font-size:0.14rem;
    text-align:center;
    line-height:0.14rem;
    margin-bottom:0.04rem;
  }
  .last ul li div p{
    font-size:0.11rem;
    color: #4b4b4b;
    margin-bottom:0.04rem;
  }
</style>
