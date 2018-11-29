<template>
  <div class="last">
    <p>问大家（84）<span>查看全部</span> <i class="iconfont icon-gengduo-copy"></i></p>
    <p><span>问</span>有美腻的小姐姐单买盒子吗<span>4个回答</span></p>
    <p><span>问</span>带着小气吗<span>6个回答</span></p>
  </div>
</template>

<script>
    export default {
        name: "MsgLast"
    }
</script>

<style scoped>
  .last{
    width:100%;
    height:0.95rem;
    background:white;
    padding-top:0.1rem;
    margin-bottom:0.1rem;
  }
  .last p{
    width:90%;
    margin:0.1rem auto;
    margin-top:0;
    display:flex;
    flex-wrap: wrap;
    font-size:0.12rem;
    color:black;
  }
  .last p:nth-child(1){
    font-size:0.14rem;
  }
  .last p:nth-child(1) span{
    margin-left:1.7rem;
  }
  .last p:nth-child(1) .icon-gengduo-copy,span{
    color:#ff0036;
  }
  .last p:nth-child(2) span:nth-child(1),.last p:nth-child(3) span:nth-child(1){
    display:block;
    width:0.18rem;
    height:0.18rem;
    color:white;
    background:#ff6621;
    text-align:center;
    line-height:0.18rem;
    margin-right:0.05rem;
  }
  .last p:nth-child(2) span:nth-child(2),.last p:nth-child(3) span:nth-child(2){
    color:#a6a6a6;
    margin-left:1.1rem;
  }
  .last p:nth-child(3) span:nth-child(2){
    margin-left:1.92rem;
  }
</style>
