<template>
  <div class="go">
    <!--swiper-->
    <market-swiper></market-swiper>
    <!--myslef-->
    <market-myslef></market-myslef>
    <!--last-->
    <market-last></market-last>
    <!--photo-->
    <market-photo></market-photo>
    <!--shop-->
    <market-shop></market-shop>
    <!--lastone-->
    <market-lastone></market-lastone>
  </div>
</template>

<script>
    import MarketSwiper from "./MarketSwiper";
    import MarketMyslef from "./MarketMyslef";
    import MarketLast from "./MarketLast";
    import MarketPhoto from "./MarketPhoto";
    import MarketShop from "./MarketShop";
    import MarketLastone from "./MarketLastone";
    export default {
        name: "MarketGo",
      components: {MarketLastone, MarketShop, MarketPhoto, MarketLast, MarketMyslef, MarketSwiper}
    }
</script>

<style scoped>
  .go{
    flex:1;
    overflow-y: auto;
  }
</style>
