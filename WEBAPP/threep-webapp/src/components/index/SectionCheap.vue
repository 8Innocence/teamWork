<template>
  <div class="cheap">
    <h2>聚划算<p>抢手机天猫专享神券</p></h2>

    <a href="">
      <img src="../../assets/img/c1.gif" alt="">
      <span>满148元减10</span>
    </a>
    <a href="">
      <img src="../../assets/img/c2.gif" alt="">
      <span>满148元减10</span>
    </a>
    <a href="">
      <img src="../../assets/img/c3.gif" alt="">
      <span>满148元减10</span>
    </a>
    <a href="">
      <img src="../../assets/img/c4.gif" alt="">
      <span>满148元减10</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "SectionCheap"
    }
</script>

<style scoped>
  .cheap{
    width:95%;
    height:1.175rem;
    margin:0.1rem auto;
    background:#f8f8f8;
  }
  .cheap h2{
    font-size:0.14rem;
    color:black;
    margin-left:0.1rem;
  }
  .cheap p{
    display:inline-block;
    font-size:0.11rem;
    color:#777676;
    margin-left:0.1rem;
  }
  .cheap a{
    display:block;
    float:left;
    width:24%;
    height:0.7rem;
    display:flex;
    flex-direction: column;
    margin-top:0.1rem;
  }
  .cheap a img{
    width:100%;
    height:.545rem;
  }
  .cheap span{
    dispaly:block;
    font-size:0.09rem;
    color:#ff2c59;
    width:0.8rem;
    text-align:center;
    border:0.02rem solid #ff2c59;
  }
</style>
