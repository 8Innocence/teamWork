<template>
  <div id="all">
    <list-header></list-header>
    <list-nav></list-nav>
    <list-section></list-section>
    <index-footer></index-footer>
  </div>
</template>

<script>
    import Public from "../assets/css/publicw.css";
    import Iconfont from "../assets/css/iconfontw.css";
    import ListHeader from "../components/list/ListHeader";
    import ListNav from "../components/list/ListNav";
    import ListSection from "../components/list/ListSection";
    import IndexFooter from "../components/index/IndexFooter";
    export default {
        name: "List",
      components: {IndexFooter, ListSection, ListNav, ListHeader,Public,Iconfont}
    }
</script>

<style scoped>
  #all{
    display:flex;
    height:100%;
    flex-direction:column;
  }
</style>
