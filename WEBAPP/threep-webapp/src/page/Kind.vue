<template>
  <div class="bigbox">
    <kind-header></kind-header>
    <kind-content></kind-content>
    <!--<section><router-view></router-view></section>-->
    <index-footer></index-footer>
  </div>
</template>

<script>


    import KindContent from "../components/kind/KindContent";
    import IndexFooter from "../components/index/IndexFooter";
    import KindHeader from "../components/kind/KindHeader";

    export default {
        name: "Kind",
      components: {KindContent, KindHeader, IndexFooter}
    }
</script>

<style scoped>
  html,body{
    background:#eee;
  }
  .bigbox{
    background:#fafafa;
    height:100%;
    display:flex;
    flex-direction:column;
  }
  section{
    flex:1;
    overflow-y:auto;
  }
</style>
