<template>
  <div>
  <index-header class="XT"></index-header>
  <div class="content">
    <content-left class="left"></content-left>
    <router-view class="right"></router-view>
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
  box-sizing: border-box;
  background:#7dc499;
}
.left{
  width:18%;
  height: 100%;
  border-right:1px solid #eeeeee;
  overflow-y: auto;
}

.right{
  flex:1;
}
.content{
  height: 100%;
  display: flex;
  width:100%;
}
</style>
