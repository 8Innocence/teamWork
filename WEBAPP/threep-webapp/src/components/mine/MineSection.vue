<template>
  <section>
    <!--nav-->
    <mine-nav></mine-nav>
    <!--dingdan-->
    <mine-dingdan></mine-dingdan>
    <!--wuliu-->
    <mine-wuliu></mine-wuliu>
    <!--gongju-->
    <mine-fu></mine-fu>
    <mine-gongju></mine-gongju>
    <!--hongbao-->
    <mine-fu></mine-fu>
    <mine-hongbao></mine-hongbao>
    <mine-bao></mine-bao>
    <!--chaoshi-->
    <mine-fu></mine-fu>
    <mine-chaoshi></mine-chaoshi>
    <mine-list></mine-list>
  </section>
</template>

<script>
    import MineNav from "./MineNav";
    import MineDingdan from "./MineDingdan";
    import MineWuliu from "./MineWuliu";
    import MineFu from "./MineFu";
    import MineGongju from "./MineGongju";
    import MineHongbao from "./MineHongbao";
    import MineBao from "./MineBao";
    import MineChaoshi from "./MineChaoshi";
    import MineList from "./MineList";
    export default {
        name: "MineSection",
      components: {MineList, MineChaoshi, MineBao, MineHongbao, MineGongju, MineFu, MineWuliu, MineDingdan, MineNav}
    }
</script>

<style scoped>
  section{
    flex:1;
    overflow-y: auto;
    background:white;
  }
</style>
