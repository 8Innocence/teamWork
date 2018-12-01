<template>
  <header>
    <h2>购物车</h2>
    <p>管理</p>
  </header>
</template>

<script>
    export default {
        name: "CartsHeader"
    }
</script>

<style scoped>
  header{
    width:100%;
    height:0.47rem;
    background:white;
    display:flex;
    border-bottom:1px solid #ababab;
  }
  header h2{
    font-size:0.16rem;
    color:#666666;
    line-height:0.47rem;
    margin-left:1.6rem;
  }
  header p{
    font-size:0.14rem;
    color:#666666;
    line-height:0.47rem;
    margin-left:1rem;

  }
</style>
