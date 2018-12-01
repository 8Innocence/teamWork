<template>
  <header>
    <p @click="down()">关闭</p>
    <h2>登录</h2>
    <p>注册</p>
  </header>
</template>

<script>
    export default {
        name: "RingupBoxHeader",
        methods:{
          down(){
            this.$router.push({
              path:"/"
            })
          }
        }
    }
</script>

<style scoped>
  header{
    width:100%;
    height:.5rem;
    display:flex;
    padding:0 .16rem;
    box-sizing: border-box;
    justify-content: space-between;
    align-items:center;
    background:#fff;
    margin-bottom:.17rem;
  }
  header p{
    font-size:.12rem;
    color:#f72929;
  }
  header h2{
    font-size:.16rem;
    color:#414141;
  }
</style>
