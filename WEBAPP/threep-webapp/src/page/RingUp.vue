<template>
    <div class="bigbox">
        <ringup-box></ringup-box>
        <ringup-footer></ringup-footer>
    </div>
</template>

<script>
    import RingupBox from "../components/ringup/RingupBox";
    import RingupFooter from "../components/ringup/RingupFooter";
    export default {
        name: "Ringup",
        components: {RingupFooter, RingupBox}
    }
</script>

<style scoped>
  .bigbox{
    height:100%;
    display:flex;
    flex-direction:column;
    overflow-x:hidden;
    justify-content:space-between;
  }
</style>
