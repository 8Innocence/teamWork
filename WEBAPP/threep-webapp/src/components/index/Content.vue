<template>
    <div class="flex">
      <content-search></content-search>
      <content-swiper></content-swiper>
      <content-down></content-down>
    </div>
</template>

<script>
    import ContentSwiper from "./ContentSwiper";
    import ContentSearch from "./ContentSearch";
    import ContentDown from "./ContentDown";
    export default {
        name: "Content",
      components: {ContentDown, ContentSearch, ContentSwiper}
    }
</script>

<style scoped>
  .flex{
    flex: 1;
    overflow-y: auto;
  }

</style>
