<template>
  <div class="body">
       <div class="rotating-slider">
    <ul class="slides">
      <li>
        <div class="inner">
          <h2>OUR TEAM</h2>
          <h4>Innocence</h4>
          <p>welcome to use IUUI</p>
          <img src="../../static/images/logo.png" class="logo" >

        </div>
      </li>
      <li>
        <div class="inner">
          <p><img src="../../static/images/timg.gif" alt="" ></p>
          <h2>George</h2>
          <h4>FD</h4>
          <p>核心业务：vue-router/vue-loader</p>
          <h4>California,USA </h4>
        </div>
      </li>
      <li>
        <div class="inner">
          <p><img src="../../static/images/AHONG.png" alt="" ></p>
          <h2>AHONG</h2>
          <h4>PM</h4>
          <p>核心业务：主持编制项目管理实施规划，并对项目目标进行系统管理</p>
          <h4>Xi'An China</h4>
        </div>
      </li>
      <li>
        <div class="inner">
          <p><img src="../../static/images/wdl.png" alt="" ></p>
          <h2>Max</h2>
          <h4>UI</h4>
          <p>核心业务：负责软件界面的美术设计、创意工作和制作工作</p>
          <h4>Ding'Xi China</h4>
        </div>
      </li>
      <li>
        <div class="inner">
          <p><img src="../../static/images/xt.jpg"></p>
          <h2>Buff</h2>
          <h4>PM</h4>
          <p>核心业务：需求分析，把控需求，跟进产品开发</p>
          <h4>Xian'Yang China</h4>
        </div>
      </li>
      <li>
        <div class="inner">
          <p><img src="../../static/images/cc.jpg" alt="" ></p>
          <h2>Delete</h2>
          <h4>PG</h4>
          <p>核心业务：负责建设前端系统架构、核心业务系统的界面交互开发</p>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
    import $ from "jquery/dist/jquery.js"
    import rotaing from "../../static/js/jquery.rotating-slider"
    import Slide from "../../static/css/rotating-slider.css"
    export default {
        name: "introduce",
        components:{rotaing,Slide},
      mounted(){
        $('.rotating-slider').rotatingSlider();
    }
     }

</script>
white
<style scoped>
  .body{
    /*background-color:#7dc499;*/
    overflow:hidden;height:100%;}
  body{
    /*background-color: #313131;*/
    overflow:hidden;}
  .rotating-slider ul.slides li:nth-of-type(1){background: #3498db;}
  .rotating-slider ul.slides li:nth-of-type(2){background: #ac0;}
  .rotating-slider ul.slides li:nth-of-type(3){background: #e74c3c;}
  .rotating-slider ul.slides li:nth-of-type(4){background: orangered);}
  .rotating-slider ul.slides li:nth-of-type(5){background: #f1c40f;}
  .rotating-slider ul.slides li:nth-of-type(6){background: rebeccapurple}
  .slides li{
    width:810px !important;
    height:560px !important;
  }
  .inner img{
    width:100px;
    height:100px;
    margin:0 auto;
    border-radius:50%;
  }
  .inner .logo{
    margin-top:30px;
    border-radius: 0;
    width:200px;
    height:auto;
  }
</style>
