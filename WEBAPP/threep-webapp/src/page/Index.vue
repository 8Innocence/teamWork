<template>
    <body>
        <index-header></index-header>
        <Content></Content>
        <index-footer></index-footer>
    </body>
</template>

<script>
    import Public from "../assets/css/public.css"
    import font from "../assets/css/iconfont.css"
    import font1 from "../assets/css/iconfont1.css"
    import IndexHeader from "../components/index/IndexHeader";
    import Content from "../components/index/Content";
    import IndexFooter from "../components/index/IndexFooter";
    export default {
        name: "Index",
      components: {Content, IndexFooter, IndexHeader,font1,font,Public}
    }
</script>

<style scoped>
body{
  display:flex;
  height: 100%;
  flex-direction: column;
  background-color: #eeeeee;
}
</style>
