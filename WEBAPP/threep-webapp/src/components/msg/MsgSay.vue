<template>
  <div class="say">
    <p>宝贝描述 4.9 <span>高</span></p>
    <p>卖家服务 4.9 <span>高</span></p>
    <p>物流服务 4.9 <span>高</span></p>
  </div>
</template>

<script>
    export default {
        name: "MsgSay"
    }
</script>

<style scoped>
  .say{
    width:100%;
    height:0.4rem;
    background:white;
    display:flex;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
  }
  .say p{
    font-size:0.14rem;
    color:#9b9b9b;
    display:flex;
  }
  .say p span{
    display:block;
    width:0.2rem;
    height:0.2rem;
    color:#9b9b9b;
    background:#eeeeee;
    border-radius:50%;
    text-align:center;
    line-height:0.2rem;
  }
</style>
