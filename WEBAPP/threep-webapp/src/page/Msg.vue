<template>
  <div id="app">
    <msg-header></msg-header>
    <msg-run></msg-run>
    <index-footer></index-footer>
  </div>
</template>

<script>
  // import Iconfont from "../assets/css/iconfont.css";
  // import Public from "../assets/css/public.css";
  import MsgHeader from "../components/msg/MsgHeader";
  import MsgRun from "../components/msg/MsgRun";
  import IndexFooter from "../components/index/IndexFooter";
  export default {
    name: "Msg",
    components: {IndexFooter, MsgRun, MsgHeader,}
  }
</script>

<style scoped>
  #app{
    display:flex;
    height:100%;
    background:#f4f4f4;
    flex-direction:column;
  }
</style>
