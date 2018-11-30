<template>
  <div>
    <index-header class="XT"></index-header>
    <div class="all">
      <model-seek></model-seek>
      <model-list class="list"></model-list>
      <model-slideshow class="slideshow"></model-slideshow>
      <model-example></model-example>
    </div>
  </div>
</template>

<script>
  import Reset from "../assets/css/reset.css"
  import ModelSlideshow from "../components/TT/ModelSlideshow";
  import ModelExample from "../components/TT/ModelExample";
    import ModelList from "../components/TT/ModelList";
    import ModelSeek from "../components/TT/ModelSeek";
    import IndexHeader from "../components/DL/IndexHeader";
    export default {
        name: "model",
      components: {IndexHeader, ModelExample, ModelSlideshow, ModelList, ModelSeek,Reset}
    }
</script>
<style lang="scss" scoped>
  .XT{
    width:100%;
    box-sizing: border-box;
    background:#7dc499;
  }
  .all{
    overflow: hidden;
    .list{
      position:absolute;
      left:50px;
      z-index:2;
    }
    .slideshow{
      position:relative;
      margin-top:50px;
    }

  }
</style>
