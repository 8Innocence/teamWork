<template>
  <div class="cc" style="display:flex;height:100%;flex-direction:column">
    <index-header class="XT"></index-header>
    <introduce></introduce>
  </div>
</template>

<script>
    import CcNav from "../components/CC/ccNav";
    import CcTeam from "../components/CC/ccTeam";
    import IndexHeader from "../components/DL/IndexHeader";
    import Introduce from "./introduce";
    export default {
        name: "cc",
      components: {Introduce, IndexHeader, CcTeam, CcNav}
    }
</script>

<style scoped>
  .XT{
    width:100%;
    box-sizing: border-box;
    background:#7dc499;
  }

</style>
