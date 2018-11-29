<template>
  <div class="all">
    <model-seek></model-seek>
    <model-list class="list"></model-list>
    <model-slideshow class="slideshow"></model-slideshow>
    <model-example></model-example>
  </div>
</template>

<script>
    import ModelSeek from "../components/model/ModelSeek";
    import Reset from "../assets/css/reset.css"
    import ModelList from "../components/model/ModelList";
    import ModelSlideshow from "../components/model/ModelSlideshow";
    import ModelExample from "../components/model/ModelExample";
    export default {
        name: "model",
      components: {ModelExample, ModelSlideshow, ModelList, ModelSeek,Reset}
    }
</script>
<style lang="scss" scoped>
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
