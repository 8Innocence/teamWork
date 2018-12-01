<template>
  <body>
    <information-header></information-header>
    <information-content></information-content>
  </body>

</template>

<script>
    import Public from "../assets/css/public.css"
    import font1 from "../assets/css/iconfont1.css"
    import InformationHeader from "../components/information/InformationHeader";
    import InformationContent from "../components/information/InformationContent";
    export default {
        name: "Information",
      components: {InformationContent, InformationHeader,font1,Public}
    }
</script>

<style scoped>
  body{
    display:flex;
    height: 100%;
    flex-direction: column;
  }
</style>
