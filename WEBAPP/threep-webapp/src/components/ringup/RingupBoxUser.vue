<template>
  <div class="user">
    <span v-show="isShow" class="place">{{tishi}}</span>
    <div class="account">
      <img src="../../../static/img/13.gif" alt="">
      <div class="phone">账号 &nbsp<input id="one" type="text" placeholder="请输入手机号/用户名/邮箱" v-model="username" @blur="login" @keyup="up"></div>
    </div>
    <div class="account">
      <img src="../../../static/img/14.gif" alt="">
      <div class="phone">密码 &nbsp<input  id="two" type="text" placeholder="请输入密码" v-model="password" @blur="www" @keyup="up"></div>
    </div>
    <div class="auto">
      <div class="autoringup"><input  id="three" type="checkbox" checked> 自动登录</div>
      <a href="">忘记密码?</a>
    </div>
    <div class="in">
      <input type="button"value="登录" @click="login">
    </div>
  </div>
</template>

<script>
    export default {
        name: "RingupBoxUser",
        data(){
          return{
            username:'',
            password:'',
            isShow:false,
            tishi:''
          }
        },
        methods: {
          login() {
            // this.$router.push({
            //   path:"/"
            // })
            // ||
            if (this.username == "") {
              this.isShow = true;
              this.tishi = "请输入用户名"
            }
            else if(this.username != ""&&this.password != ""){
              this.$router.push('/')
            }

          },
          www() {
            if (this.password == "") {
              this.isShow = true;
              this.tishi = "请输入密码";

            } else {
              this.isShow = false;

            }
          },
          up(){
            this.isShow = false;
          }
        }
    }
</script>

<style scoped>
  .user{
    width:100%;
    margin-bottom:.2rem;
  }
  .place{
    font-size:.14rem;
  }
  .account{
    width:100%;
    height:.4rem;
    background:#fff;
    position:relative;
    display:flex;
    box-sizing: border-box;
    padding:0 .16rem;
    align-items:center;
  }
  .account img{
    width:.22rem;
    height:.23rem;
    margin-right:.12rem;
  }
  .user span{
    display:block;
    margin:0 auto .15rem;
    color:red;
    text-align: center;

  }
  .phone{
    font-size:.15rem;
    height:100%;
    flex:1;
    border-bottom:1px solid #f5f5f5;
  }
  .phone input{
    font-size:.12rem;
    color:black;
    height:100%;
    width:85%;
    border:none;
    outline: none;
  }
  .auto{
    font-size:.12rem;
    color:#a1a1a1;
    display:flex;
    justify-content:space-between;
    padding:0 .16rem;
    box-sizing: border-box;
    margin-top:.3rem;
  }
  .autoringup input{
    width:.15rem;
    height:.15rem;
    vertical-align:middle;
  }
  .auto a{
    font-size:.12rem;
    color:#2885df;
    text-decoration:underline;
  }
  .in{
    width:100%;
    padding:0 .16rem;
    box-sizing: border-box;
    margin:.25rem 0;
  }
  .in input{
    width:100%;
    height:.46rem;
    line-height:.46rem;
    color:#fff;
    font-size:.16rem;
    text-align: center;
    border-radius:.05rem;
    display:block;
    border:none;
    background:dimgray;
  }
</style>
