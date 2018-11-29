<template>
    <div class="ModelSeek">
      <div class="seek">
          <input type="text" class="text" placeholder="搜索你需要的模板">
          <input type="button" class="button">
      </div>
      <ul class="link">
        <li class="red">热搜:</li>
        <li>webapp</li>
        <li>后台</li>
        <li>更多</li>
        <li>全部</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "ModelSeek",
    }
</script>
<style lang="scss" scoped>
  .ModelSeek{
    .seek{
      overflow: hidden;
      height:60px;
      width:600px;
      margin:50px auto;
      margin-bottom: 0;
      display: flex;
      border:1px solid #63a35c;
      border-radius: 10px;
    .text{
      height:100%;
      width:80%;
      border:0;
      border-radius:10px 0 0 10px;
      padding-left:20px;
      color:#00bfbf;
      outline:none;
    }
    .button{
      height:100%;
      width:20%;
      border:0;
      background:url("../../../static/images/tt-seek.png") no-repeat center;
      background-size:20px 20px;

    }
    }
    .link{
      line-height:40px;
      width:600px;
      margin:0 auto;
      display: flex;
      font-size:12px;
      .red{
        font-size:14px;
        color:#004d4d;
      }
      li{
        padding-right:10px;
        color:#008080;
      }
  }
  }
</style>
