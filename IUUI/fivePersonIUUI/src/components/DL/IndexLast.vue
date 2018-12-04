<template>
  <div class="last">
    <div class="one">
      <div class="onea">
        <p class="title">我们的目的</p>
      </div>
      <p class="p-0">这是一个面向前端的高级框架，高效的开发是我们最终的目的，如果你是一个有抱负的程序员，我们的建议是iuui。
      </p>
    </div>
    <div class="one">
      <div class="onea">
        <p class="title">我们的方向</p>
      </div>
      <p class="p-0">优秀的人就要用最优秀的web前端框架，我们的建议是iuui。
      </p>
    </div>
    <div class="one">
      <div class="onea">
        <p class="title">我们的能力</p>
      </div>
      <p class="p-0">身处在前端激烈竞争社会，只有高效的，高质量的作品才可以脱颖而出，我们的建议是iuui。
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
    margin-top:25px;
    display:flex;
    justify-content: space-around;
    flex:1;
    display:flex;
    flex-direction: column;

  }
  .one{
    flex:1;
    width:100%;
    height:130px;
    /*padding:10px 30px 20px 30px;*/
    padding:20px;
    /*margin-top:50px;*/
    background:url("../../../static/images/index_last.png") no-repeat;
    background-size:100% 100%;
    text-align: center;
  }
  .one p{
    text-align:center;
  }
  .onea{
    height:50px;
  }
  .onea p{
    width:120px;
    line-height:50px;
    text-align:center;
    margin:10px auto;

  }
  .p-0{
    margin-top:10px;
  }
  .title{
    border-radius: 5px;
    font-weight: 600;
    font-size:20px;
    line-height:20px;
  }
</style>
