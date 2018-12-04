<template>
  <div class="right">
    <div class="list" v-show="num == 0">
      <div class="list_title">
        <h2>推荐 >></h2>
      </div>
      <kind-content-product-list-li></kind-content-product-list-li>
    </div>
    <div class="list" v-show="num == 1">
      <div class="list_title">
        <h2>干货食品 >></h2>
      </div>
      <kind-content-product-list-li></kind-content-product-list-li>
    </div>
    <div class="list" v-show="num == 2">
      <div class="list_title">
        <h2>生鲜食品 >></h2>
      </div>
      <kind-content-product-list-li></kind-content-product-list-li>
    </div>
    <div class="list" v-show="num == 3">
      <div class="list_title">
        <h2>乳品 >></h2>
      </div>
      <kind-content-product-list-li></kind-content-product-list-li>
    </div>
    <div class="list" v-show="num == 4">
      <div class="list_title">
        <h2>中外名酒 >></h2>
      </div>
      <kind-content-product-list-li></kind-content-product-list-li>
    </div>
  </div>


</template>

<script>
    import KindContentProductListLi from "./KindContentProductListLi";
    export default {
        name: "KindContentProductList",
        props:['num'],
        components: {KindContentProductListLi},
        data(){
            return{
              // wu:0
            }
         }
    }
</script>

<style scoped>
  .list {
    padding:0 .15rem;
  }
  .right{
    flex:1;
    overflow-y:auto;
  }
  .list_title{
    display:flex;
    height:.40rem;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: .1rem;

  }
  .list_title h2{
    height:.25rem;
    font-size:.16rem;
    line-height:.25rem;
    color:#1c1c1c;
    font-family: "微软雅黑", Arial;
  }
  .list_title img{
    width:.09rem;
    height:.09rem;
    margin-right:.05rem;
    border:1px solid #eee;
  }

</style>
