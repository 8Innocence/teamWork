<template>
  <div class="last">
    <div class="one">
      <div class="onea">
        <p>返璞归真</p>
      </div>
      <p>身处在前端社区的繁荣之下，我们都在有意或无意地追逐。
        而 layui 偏偏回望当初，奔赴在返璞归真的漫漫征途，
        自信并勇敢着，追寻于原生态的书写指令
        ，试图<br/>以最简单的方式诠释高效。
      </p>
    </div>
    <div class="one">
      <div class="onea">
        <p>返璞归真</p>
      </div>
      <p>身处在前端社区的繁荣之下，我们都在有意或无意地追逐。
        而 layui 偏偏回望当初，奔赴在返璞归真的漫漫征途，
        自信并勇敢着，追寻于原生态的书写指令
        ，试图<br/>以最简单的方式诠释高效。
      </p>
    </div>
    <div class="one">
      <div class="onea">
        <p>返璞归真</p>
      </div>
      <p>身处在前端社区的繁荣之下，我们都在有意或无意地追逐。
        而 layui 偏偏回望当初，奔赴在返璞归真的漫漫征途，
        自信并勇敢着，追寻于原生态的书写指令
        ，试图<br/>以最简单的方式诠释高效。
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexLast"
    }
</script>

<style scoped>
  .last{
    width:100%;
    height:300px;
    background:white;
    display:flex;
    justify-content: space-around;

  }
  .one{
    width:25%;
    height:200px;
    border:1px solid #d3d3d3;
    padding:0 20px;
    margin-top:50px;
  }
  .one p{
    text-align:center;
  }
  .onea{
    height:50px;
    background:pink;
    background:url(../../../static/images/dl4.gif) repeat-x center;
  }
  .onea p{
    width:120px;
    line-height:50px;
    text-align:center;
    background:white;
    margin:20px auto;
  }
</style>
