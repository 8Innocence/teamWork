<template>
  <div class="right">
    <div class="list" v-show="num == 0">
      <div class="list_title">
        <h2>A热门分类</h2>
      </div>
      <kind-content-product-list-li></kind-content-product-list-li>
    </div>
    <div class="list" v-show="num == 1">
      <div class="list_title">
        <h2>B热门分类</h2>
      </div>
      <kind-content-product-list-li></kind-content-product-list-li>
    </div>
    <div class="list" v-show="num == 2">
      <div class="list_title">
        <h2>C热门分类</h2>
      </div>
      <kind-content-product-list-li></kind-content-product-list-li>
    </div>
    <div class="list" v-show="num == 3">
      <div class="list_title">
        <h2>D热门分类</h2>
      </div>
      <kind-content-product-list-li></kind-content-product-list-li>
    </div>
    <div class="list" v-show="num == 4">
      <div class="list_title">
        <h2>D热门分类</h2>
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
    background:#fff;
    padding:0 .15rem;
  }
  .right{
    flex:1;
    overflow-y:auto;
  }
  .list_title{
    display:flex;
    height:.54rem;
    align-items: center;
  }
  .list_title h2{
    font-size:.16rem;
    color:#1c1c1c;
  }
  .list_title img{
    width:.09rem;
    height:.09rem;
    margin-right:.05rem;
  }

</style>
