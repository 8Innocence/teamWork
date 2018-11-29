<template>
  <div class="bao">
    <a href="">红包</a>
    <a href="">购物券</a>
    <a href="">店铺券</a>
  </div>
</template>

<script>
    export default {
        name: "MineBao"
    }
</script>

<style scoped>
  .bao{
    height:0.45rem;
    display: flex;
    -webkit-justify-content: space-around;
  }
  .bao a{
    font-size:0.12rem;
    color:#4a4a4a;
    line-height:0.45rem;
  }
</style>
