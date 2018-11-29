<template>
  <div class="fu">
    <div><p>必备工具</p><span>查看全部</span></div>
  </div>
</template>

<script>
    export default {
        name: "MineFu"
    }
</script>

<style scoped>
.fu{
    /*display:flex;*/
  /*-webkit-justify-content: space-between;*/
    /*-webkit-align-items: center;*/
    height:0.6rem;

  }
.fu p{
    font-size:0.17rem;
    color:black;
    font-weight:600;
    margin-left:0.1rem;
   line-height:0.6rem;
    float:left;
  }
 .fu span{
    display:block;
    font-size:0.11rem;
    color:#999999;
    margin-right:0.1rem;
    line-height:0.6rem;
    float:right;
   margin-right:0.1rem;
  }

</style>
