<template>
  <div class="all">
    <div class="background">
      <index-header></index-header>
      <index-box></index-box>
      <index-word></index-word>
    </div>
    <div class="plug">
      <index-clean></index-clean>
      <index-last></index-last>
    </div>
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
    import IndexClean from "../components/DL/IndexClean";
    // import Minelogin from "../components/ZDS/MineLogin";
    export default {
        name: "Index",
      components: {IndexClean, IndexFooter, IndexLast, IndexWord, IndexBox, IndexHeader,Index}
    }
</script>

<style lang="scss" scoped>
  html,body{
    height:1600px;
  }
  .all{
    display:flex;
    flex-direction: column;
    width:100%;
    height:1600px;
    /*background-size:100% 150%;*/

    /*background :url(../../static/images/dl2.gif) no-repeat;*/
  }
  .background{
    width:100%;
    background :url(../../static/images/index3.jpg) no-repeat bottom;
    background-size:100% 100%;

  }
  .plug{
    padding-top:30px;
    display:flex;
    /*background-image: linear-gradient(to left bottom, #F2E3C6 0%, #A7A1A5 100%);*/

    index-clean{
      width:70%;

    }
    index-last{
      flex:1;
    }
  }
</style>
