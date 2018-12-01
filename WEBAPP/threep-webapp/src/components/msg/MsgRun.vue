<template>
  <div class="run">
    <!--swiper-->
    <msg-swiper></msg-swiper>
    <!--nav-->
    <msg-nav></msg-nav>
    <!--banner-->
   <msg-banner></msg-banner>
    <!--section-->
   <!--<msg-section></msg-section>-->
    <!--like-->
   <msg-like></msg-like>
    <!--thing-->
   <msg-thing></msg-thing>
    <!--last-->
   <msg-last></msg-last>
    <!--shop-->
   <msg-shop></msg-shop>
    <!--say将来可以复用的部分-->
   <msg-say></msg-say>
  </div>
</template>

<script>
    import MsgNav from "./MsgNav";
    import MsgBanner from "./MsgBanner";
    import MsgSection from "./MsgSection";
    import MsgLike from "./MsgLike";
    import MsgThing from "./MsgThing";
    import MsgSay from "./MsgSay";
    import MsgLast from "./MsgLast";
    import MsgShop from "./MsgShop";
    import MsgSwiper from "./MsgSwiper";
    export default {
        name: "MsgRun",
      components: {MsgSwiper, MsgShop, MsgLast, MsgSay, MsgThing, MsgLike, MsgSection, MsgBanner, MsgNav}
    }
</script>

<style scoped>
  .run{
    flex:1;
    overflow-y: auto;
  }
</style>
