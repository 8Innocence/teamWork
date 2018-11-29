<template>
  <div class="over">
    <p>共<span>1</span>件，  合计：<span>￥278.00</span></p>
    <span class="fspan" @click="gopay()">提交订单</span>
  </div>
</template>

<script>
    export default {
        name: "MoneyOver",
        methods: {
          gopay(){
            this.$router.push({
              path:"/pay"
            })
          }
        }
    }
</script>

<style scoped>
  .over{
    width:100%;
    height:0.49rem;
    background:white;
    border-top:1px solid #9a9a9a;
    display:flex;
    -webkit-justify-content: space-between;
  }
  .over p{
    font-size:0.14rem;
    color:black;
    margin-left:0.9rem;
    line-height:0.49rem;
  }
  .over p span{
    color:#ff0036;
  }
  .fspan{
    display:block;
    font-size:0.14rem;
    color:white;
    width:1.10rem;
    height:0.49rem;
    background:#ff0036;
    margin-right:0;
    text-align:center;
    line-height:0.49rem;
  }
</style>
