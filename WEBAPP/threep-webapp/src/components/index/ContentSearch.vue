<template>
      <div class="product-new">
        <a href="##">供应大厅<span>全国货源 进货首选</span></a>
        <a href="##">产地行情<span>今日行情 一手掌控</span></a>
        <a href="##">惠农咨询<span>行情分析 政策解读</span></a>
      </div>
</template>

<script>
    export default {
        name: "ContentSearch"
    }
</script>

<style scoped>

  .product-new{
    display: flex;
    text-align: center;
    border-top:1px solid #ababab;
    background-color:white;
  }
  .product-new a{
    font-size:.18rem;
    color: #55bb22;
    line-height: .18rem;
    padding:.2rem .12rem;
    border-right:1px solid #eeeeee;
  }
  .product-new a span{
    font-size:.12rem;
    color:#666666;
    line-height: .12rem;
    margin-top:.1rem;
  }
  .product-new a:last-child{
    border-right:0;
  }

</style>
