<template>
  <div>
  <index-header class="XT"></index-header>
  <div class="content">
    <content-left></content-left>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
  import Public from "../assets/css/index.css"
    import ContentLeft from "../components/XT/ContentLeft";
  import IndexHeader from "../components/DL/IndexHeader";
  import ContentRight from "../components/XT/ContentRight";
  // import ContentHeader from "../components/XT/ContentHeader";
    export default {
        name: "Content",
      components: { ContentRight,IndexHeader,  ContentLeft,Public},
    }
</script>

<style scoped>
.XT{
  width:100%;
  padding:0 8%;
  box-sizing: border-box;
  background:gray;
}
.content{
  margin-top:50px;
  height: 100%;
  display: flex;
}
</style>
