<template>
  <div>
  <index-header class="XT"></index-header>
    <div class="content">
      <!--<cc-team></cc-team>-->
      <section>
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
    import CcNav from "../components/CC/ccNav";
    import CcTeam from "../components/CC/ccTeam";
    import IndexHeader from "../components/DL/IndexHeader";
    export default {
        name: "cc",
      components: {IndexHeader, CcTeam, CcNav}
    }
</script>

<style scoped>
  .XT{
    width:100%;
    box-sizing: border-box;
    background:#7dc499;
  }
  .content{
    display:flex;
    width:100%;
    height:100%;
    margin-top:10px;
  }
  section{
    flex:1;
    width:100%;
  }

</style>
