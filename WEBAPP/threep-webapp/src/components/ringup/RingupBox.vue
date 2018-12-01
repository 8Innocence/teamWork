<template>
  <div class="box">
      <ringup-box-header></ringup-box-header>
      <ringup-box-user></ringup-box-user>
      <ringup-box-quick></ringup-box-quick>
  </div>
</template>

<script>
    import RingupBoxHeader from "./RingupBoxHeader";
    import RingupBoxUser from "./RingupBoxUser";
    import RingupBoxQuick from "./RingupBoxQuick";
    export default {
        name: "RingupBox",
      components: {RingupBoxQuick, RingupBoxUser, RingupBoxHeader}
    }
</script>

<style scoped>

</style>
