<template>
    <div id="all">
       <list-header></list-header>
      <list-nav></list-nav>
      <list-section></list-section>
      <carts-footer></carts-footer>
    </div>
</template>

<script>
    import Iconfont from "../assets/css/iconfont.css";
    import Public from "../assets/css/public.css";
    import ListHeader from "../components/list/ListHeader";
    import ListSection from "../components/list/ListSection";
    import CartsFooter from "../components/carts/CartsFooter";
    import ListNav from "../components/list/ListNav";
    export default {
        name: "List",
      components: {ListNav, CartsFooter, ListSection, ListHeader,Iconfont,Public}
    }
</script>

<style scoped>
  #all{
    display:flex;
    height:100%;
    flex-direction:column;
  }
</style>
