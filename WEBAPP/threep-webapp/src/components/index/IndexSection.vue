<template>
  <section>
    <nav id="app">
      <ul class = "ullist">
         <section-li></section-li>
      </ul>
    </nav>
    <section-swiper></section-swiper>
    <section-bgphoto></section-bgphoto>
    <scetion-banner></scetion-banner>
    <section-cheap></section-cheap>
  </section>
</template>

<script>
    import SectionLi from "./SectionLi";
    import SectionSwiper from "./SectionSwiper";
    import SectionBgphoto from "./SectionBgphoto";
    import ScetionBanner from "./ScetionBanner";
    import SectionCheap from "./SectionCheap";
    export default {
        name: "IndexSection",
      components: {SectionCheap, ScetionBanner, SectionBgphoto, SectionSwiper, SectionLi}
    }
</script>

<style scoped>
  section{
    flex:1;
    overflow-y: auto;
  }
  /*nav*/
  nav{
    width:100%;
    height:1.6rem;
    background:#8b8ee3;
  }
  .ullist{
    width:100%;
    height:1.6rem;
    display:flex;
    flex-wrap: wrap;
    margin-bottom:0.1rem;
  }
</style>
