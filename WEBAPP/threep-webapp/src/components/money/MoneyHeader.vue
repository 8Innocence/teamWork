<template>
  <header>
    <i class="iconfont icon-fanhui" @click="giveup()"></i>
    <h3>确认订单</h3>
  </header>
</template>

<script>
    export default {
        name: "MoneyHeader",
        methods:{
          giveup(){
            this.$router.push("/Carts")
          }
        }
    }
</script>

<style scoped>
  header{
    width:100%;
    height:0.47rem;
    background:white;
    display:flex;
    -webkit-align-items: center;
    border-bottom:1px solid #9a9a9a;
  }
  header .iconfont{
    font-size:0.15rem;
    color:black;
    margin-left:0.2rem;
  }
  header h3{
    font-size:0.14rem;
    color:black;
    margin-left:1.2rem;
  }
</style>
