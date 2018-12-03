<template>
  <div class="all">
    <div class="content">
      <div class="box">
        <img src="../../../static/images/timg.gif" alt="" style="border-radius:50%;border:1px solid red;"/>
        <img src="../../../static/images/AHONG.png" alt="" style="border-radius:50%;border:1px solid red;"/>
        <img src="../../../static/images/cc.jpg" alt="" style="border-radius:50%;border:1px solid red;"/>
        <img src="../../../static/images/wdl.png" alt="" style="border-radius:50%;border:1px solid red;"/>
        <img src="../../../static/images/xt.jpg" alt="" style="border-radius:50%;border:1px solid red;"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "uiIdx",
    components: {},
    data(){
      return{
      }
    }
  }
</script>

<style scoped>
  .all{
    width:600px;
    height:530px;
    margin:0px auto;
    /*background:  #191c2c;*/
    display: flex;
    justify-content: center;
    align-items: center;
    /*background:url(../../../static/images/page1_3.jpg) no-repeat center top;*/
    background-size:100%;
  }
  .content{
    width: 200px;
    height: 150px;
    perspective:2500px;
  }
  .box{
    width: 200px;
    height: 150px;
    position: relative;
    transform-style: preserve-3d;
    animation:photo 15s linear infinite;
  }
  .box:hover{
    animation:photo 15s linear infinite paused;
  }
  @keyframes photo{
    0%{
      transform:rotateX(0deg) rotateY(0deg);
    }
    100%{
      transform:rotateX(0deg) rotateY(360deg);
    }
  }
  .box img{
    width: 150px;
    height: 150px;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
  }
  .box img:nth-child(1){
    transform:translateZ(200px);
  }
  .box img:nth-child(2){
    transform:rotateY(72deg) translateZ(200px);
  }
  .box img:nth-child(3){
    transform:rotateY(144deg) translateZ(200px);
  }
  .box img:nth-child(4){
    transform:rotateY(216deg) translateZ(200px);
  }
  .box img:nth-child(5){
    transform:rotateY(288deg) translateZ(200px);
  }
</style>
