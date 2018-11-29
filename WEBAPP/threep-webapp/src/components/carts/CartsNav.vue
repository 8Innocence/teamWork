<template>
  <nav>
    <h2><input type="checkbox">全选</h2>
    <p>合计:</p>
    <span>{{tn}}</span>
    <a href="javascript:;" @click="gomoney()">结算(<span>￥{{tm}}</span>)</a>
  </nav>
</template>

<script>
    export default {
      name: "CartsNav",
      props: ["tm", "tn"],
      methods: {
        gomoney() {
          this.$router.push({
            path: "/Money"
          })
        }
      }
    }
</script>

<style scoped>
  nav{
    width:100%;
    background:white;
    height:0.52rem;
    display:flex;
    -webkit-align-items: center;
  }
  nav h2{
    font-size:0.13rem;
    color:#333333;
    margin-left:0.1rem;
  }
  nav h2 input{
    margin-right:0.05rem;
  }
  nav p{
    font-size:0.1rem;
    color:#343434;
    margin-left:1.4rem;
  }
  nav span{
    color:#ff0036;
    font-size:0.12rem;
    margin-right:0.1rem;
  }
  nav a{
    display:block;
    width:0.96rem;
    font-size:0.13rem;
    color:white;
    height:0.395rem;
    background:#ff0036;
    text-align: center;
    line-height: 0.395rem;
    border-radius:0.18rem;
  }
  nav a span{
    color:white;
    margin-right:0;
  }
</style>
