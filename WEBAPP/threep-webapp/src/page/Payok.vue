<template>
    <div class="payok">
      <h1>支付成功</h1>
      <p @click="hui">返回</p>
    </div>
</template>

<script>
    export default {
        name: "Payok",
        methods:{
          hui(){
            this.$router.push({
              path:"/Money"
            })
          }
        }
    }
</script>

<style scoped>
.payok{
  width:100%;
  height:2rem;
  background:white;
}
  .payok h1{
    color:deeppink;
    font-size:0.5rem;
  }
  .payok p{
    font-size:.3rem;
    color:black;
  }
</style>
