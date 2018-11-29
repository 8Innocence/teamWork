<template>
  <div class="all">
    <mine-header></mine-header>
    <mine-section></mine-section>
    <carts-footer></carts-footer>
  </div>
</template>

<script>
    import MineHeader from "../components/mine/MineHeader";
    import MineSection from "../components/mine/MineSection";
    import CartsFooter from "../components/carts/CartsFooter";
    export default {
        name: "Mine",
      components: {CartsFooter, MineSection, MineHeader}
    }

</script>

<style scoped>
  .all{
    display:flex;
    height:100%;
    flex-direction:column;
  }
</style>
