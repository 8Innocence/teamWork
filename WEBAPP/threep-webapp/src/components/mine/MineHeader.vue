<template>
  <header>
    <i class="iconfont icon-shezhi"></i>
    <p>不曾在青春里走过</p>
    <i class="iconfont icon-shezhi"  ></i>
  </header>
</template>

<script>
    export default {
        name: "MineHeader"
    }
</script>

<style scoped>
  header{
    width:100%;
    height:0.39rem;
    background:#ff0038;
    display:flex;
    -webkit-align-items: center;
    -webkit-justify-content: space-around;
  }
  header .iconfont{
    color:white;
    font-size:.15rem;
  }
  header p{
    font-size:0.16rem;
    color:white;
    opacity:1;
  }
</style>
