<template>
  <div>
    <index-header class="XT"></index-header>
    <div class="all">
      <model-seek></model-seek>
      <model-list class="list"></model-list>
      <model-slideshow class="slideshow"></model-slideshow>
      <model-example></model-example>
      <model-examplef></model-examplef>
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
  import ModelExamplef from "../components/TT/ModelExamplef";
    export default {
        name: "model",
      components: {ModelExamplef, IndexHeader, ModelExample, ModelSlideshow, ModelList, ModelSeek,Reset},
    }
</script>
<style lang="scss" scoped>
  html,body{background:white}
  .XT{
    width:100%;
    box-sizing: border-box;
    background:#7dc499;
  }
  .all{
    width:100%;
    position:relative;
    background:white;

    .list{
      position:absolute;
      top:70px;
      left:50px;
    }
    .list:hover{
      z-index:2;
    }
  }
</style>
