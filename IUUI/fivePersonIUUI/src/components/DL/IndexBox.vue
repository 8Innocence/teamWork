<template>
  <div class="box">
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#">IUUI</a>
  </div>
</template>

<script>
    export default {
        name: "IndexBox"
    }
</script>

<style scoped>
  .box{
    width:200px;
    height:200px;
    margin:50px auto;
    transform-style:preserve-3d;
    animation:lft 5s infinite linear;
    /*border-radius:50%;*/
  }
  .box a{
    border-radius: 15px;
    border:5px solid rgba(122,122,122,0.6);
    font-size: 50px;
    font-weight:600;
    text-align: center;
    color:#000000;
  }
  .box a:nth-child(-n+6){
    display:block;
    width:200px;
    height:200px;
    opacity:.6;
    background:rgba(130,130,130,0.4);
    position:absolute;
    left:0;
    top:0;
    transform-style:preserve-3d;
    transition:all 1s;
  }
  .box a:nth-child(n+7){
    display:block;
    width:100px;
    height:100px;
    opacity:.4;
    background:rgba(70,70,70,0.5);
    position:absolute;
    left:50px;
    top:50px;
    transform-style:preserve-3d;
  }
  @keyframes lft{
    0%{
      transform:rotateX(0deg) rotateY(0deg);
    }
    100%{
      transform:rotateX(360deg) rotateY(360deg);
    }
  }
  .box a:nth-child(1){
    transform:translateZ(100px);
  }
  .box a:nth-child(2){
    transform:rotateY(180deg) translateZ(100px);
  }
  .box a:nth-child(3){
    transform:rotateY(-90deg) translateZ(100px);
  }
  .box a:nth-child(4){
    transform:rotateY(90deg) translateZ(100PX);
  }
  .box a:nth-child(5){
    transform:rotateX(90deg) translateZ(100px);
  }
  .box a:nth-child(6){
    transform:rotateX(90deg) translateZ(-100px)
  }
  .box a:nth-child(7){
    transform:translateZ(50px);
  }
  .box a:nth-child(8){
    transform:rotateY(180deg) translateZ(50px);
  }
  .box a:nth-child(9){
    transform:rotateY(-90deg) translateZ(50px);
  }
  .box a:nth-child(10){
    transform:rotateY(90deg) translateZ(50px);
  }
  .box a:nth-child(11){
    transform:rotateX(90deg) translateZ(50px);
  }
  .box a:nth-child(12){
    transform:rotateX(90deg) translateZ(-50px)
  }
  .box a:nth-child(13){
    transform:rotateX(90deg) translateZ(0px);
    background:none;
    border:0;
    line-height:100px;
  }

  .box:hover{
    animation-play-state:paused;
  }
  .box:hover a:nth-child(1){
    transform:translateZ(150px);
  }
  .box:hover a:nth-child(2){
    transform:rotateY(180deg) translateZ(150px);
  }
  .box:hover a:nth-child(3){
    transform:rotateY(-90deg) translateZ(150px);
  }
  .box:hover a:nth-child(4){
    transform:rotateY(90deg) translateZ(150px);
  }
  .box:hover a:nth-child(5){
    transform:rotateX(90deg) translateZ(150px);
  }
  .box:hover a:nth-child(6){
    transform:rotateX(90deg) translateZ(-150px)
  }
</style>
