<template>
  <header>
    <i class="iconfont icon-fanhui" @click="back()"></i>
    <i class="iconfont icon-gouwuche"></i>
    <i class="iconfont icon-gengduo-copy"></i>
  </header>
</template>

<script>
    export default {
      name: "MsgHeader",
      methods: {
        back() {
          this.$router.push({
            path: "/List"
          })
        }
      }
    }
</script>
<style scoped>
  header{
    width:100%;
    height:0.4rem;
    display:flex;
    position:fixed;
    -webkit-align-items: center;
    left:0;
    top:.2rem;
    z-index:1000;
  }
  header .iconfont{
    color:white;
    font-size:0.3rem;
  }
  .icon-fanhui{
    margin-left:0.1rem;
    margin-right:2.5rem;
  }
  .icon-gouwuche{
    margin-right:0.1rem;
  }
</style>
