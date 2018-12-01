<template>
  <div class="content">
    <kind-content-li @send="middle"></kind-content-li>
    <kind-content-product-list :num="idx"></kind-content-product-list>
  </div>
</template>

<script>
    import KindContentLi from "./KindContentLi";
    import KindContentProductList from "./KindContentProductList";
    export default {
        name: "KindContent",
        components: {KindContentProductList, KindContentLi},
        data(){
            return{
              idx:''
            }
        },
        methods:{
            middle(i){
              this.idx = i
            }
        }
      }
</script>

<style scoped>
  .content{
    width:100%;
    height:100%;
    display:flex;
    flex:1;
    overflow-y:auto;
  }

</style>
