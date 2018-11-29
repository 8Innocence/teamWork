<template>
  <div class="shop">
    <img src="../../assets/img/msgc7.gif" alt="">
    <div><p>佐卡伊旗舰店</p><img src="../../assets/img/msgc8.gif" alt=""></div>
    <span>全部宝贝</span>
    <span @click="goshop()">进店逛逛</span>
  </div>
</template>

<script>
    export default {
        name: "MsgShop",
        methods:{
          goshop(){
            this.$router.push("/Market")
          }
        }
    }
</script>

<style scoped>
  .shop{
    width:100%;
    height:0.66rem;
    background:white;
    display:flex;
    -webkit-align-items: center;
  }
  .shop img{
    width:0.49rem;
    height:0.49rem;
    margin:0.05rem 0.1rem;
  }
  .shop div img{
    width:0.88rem;
    height:0.12rem;
    margin-left:0;
  }
  .shop div p{
    font-size:0.13rem;
    color:#333333;
  }
  .shop span{
    display:block;
    width:0.65rem;
    font-size:0.13rem;
    height:0.23rem;
    border:1px solid #ff0036;
    color:#ff0036;
    border-radius:0.5rem;
    text-align:center;
    line-height:0.23rem;
  }
  .shop span:nth-child(3){
    margin-left:0.4rem;
    margin-right:0.1rem;
  }
</style>
