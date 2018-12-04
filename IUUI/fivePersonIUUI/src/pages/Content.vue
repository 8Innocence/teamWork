<template>
  <div>
  <index-header class="XT"></index-header>
  <div class="content">
    <cc-nav class="left"></cc-nav>
    <router-view class="right"></router-view>
  </div>
  </div>
</template>

<script>
  import Public from "../assets/css/public.css"
    import ContentLeft from "../components/XT/ContentLeft";
  import IndexHeader from "../components/DL/IndexHeader";
  import ContentRight from "../components/XT/ContentRight";
  import CcNav from "../components/CC/ccNav";

    export default {
        name: "Content",
      components: {CcNav, ContentRight,IndexHeader,  ContentLeft,Public},
    }
</script>

<style scoped>
.XT{
  width:100%;
  box-sizing: border-box;
  background:#7dc499;
}
.left{
  height: 100%;
  width:18%;
  border-right:1px solid #eeeeee;
  overflow-y: auto;
}

.right{
  flex:70%;
}
.content{
  height: 100%;
  display: flex;
  width:100%;
}
</style>
