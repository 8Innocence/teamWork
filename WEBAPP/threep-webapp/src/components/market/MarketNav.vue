<template>
  <nav>
    <h1>西安</h1>
    <p>2018.11.17</p>
    <ul class="uldown">
      <li>赛格国际</li>
      <li>开元商城</li>
      <li>大明宫商城</li>
      <li>赛格国际</li>
      <li>赛格国际</li>
      <li>赛格国际</li>
      <li>赛格国际</li>
      <li>开元商城</li>
    </ul>
  </nav>
</template>

<script>
    export default {
        name: "MarketNav"
    }
</script>

<style scoped>
  nav{
    width:100%;
    height:1.26rem;
  }
  nav h1{
    font-size:0.47rem;
    color:black;
    text-align:center;
  }
  nav p{
    font-size:0.14rem;
    color:black;
    text-align:center;
  }
  nav ul{
    width:100%;
    display: -webkit-box;
    overflow-x: auto;
  }
  nav ul li{
    font-size:0.14rem;
    color:black;
    padding:0.1rem 0.1rem;
    text-align: center;
  }

</style>
