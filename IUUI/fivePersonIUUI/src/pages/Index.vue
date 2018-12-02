<template>
  <div class="all">
    <div class="background">
      <index-header></index-header>
      <index-box></index-box>
      <index-word></index-word>
    </div>
      <index-last></index-last>
      <index-footer></index-footer>
  </div>
</template>

<script>
    import Index from "../assets/css/index.css";
    import IndexHeader from "../components/DL/IndexHeader";
    import IndexBox from "../components/DL/IndexBox";
    import IndexWord from "../components/DL/IndexWord";
    import IndexLast from "../components/DL/IndexLast";
    import IndexFooter from "../components/DL/IndexFooter";
    // import Minelogin from "../components/ZDS/MineLogin";
    export default {
        name: "Index",
      components: { IndexFooter, IndexLast, IndexWord, IndexBox, IndexHeader,Index}
    }
</script>

<style scoped>
  .all{
    width:100%;
    height:600px;
    /*background-size:100% 150%;*/

    /*background :url(../../static/images/dl2.gif) no-repeat;*/
  }
  .background{
    width:100%;
    height:100%;
    background :url(../../static/images/dl2.gif) no-repeat;
    background-size:100% 150%;

  }
</style>
