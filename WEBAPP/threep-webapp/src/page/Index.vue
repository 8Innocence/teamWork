<template>
    <div class="box">
      <index-header></index-header>
      <index-section></index-section>
      <carts-footer></carts-footer>
    </div>
</template>

<script>
    import Iconfont from "../assets/css/iconfont.css";
    import  Public from "../assets/css/public.css";
    import IndexHeader from "../components/index/IndexHeader";
    import IndexSection from "../components/index/IndexSection";
    import CartsFooter from "../components/carts/CartsFooter";
    export default {
        name: "Index",
      components: {CartsFooter, IndexSection, IndexHeader,Iconfont,Public}
    }
</script>

<style scoped>
  .box{
    display:flex;
    height:100%;
    flex-direction:column;
  }
</style>
