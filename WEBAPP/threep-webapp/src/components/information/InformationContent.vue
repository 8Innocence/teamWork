<template>
    <div class="flex">
      <information-nav></information-nav>
      <information-swiper></information-swiper>
      <Massage></Massage>
    </div>
</template>

<script>
    import InformationNav from "./InformationNav";
    import InformationSwiper from "./InformationSwiper";
    import Massage from "./Massage";
    export default {
        name: "InformationContent",
      components: {Massage, InformationSwiper, InformationNav}
    }
</script>

<style scoped>
.flex{
  flex: 1;
  overflow:auto;
}
</style>
