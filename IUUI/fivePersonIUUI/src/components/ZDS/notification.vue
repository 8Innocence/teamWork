<template>
  <el-button
    plain
    @click="open12">
    使用 HTML 片段
  </el-button>
</template>

<script>
    export default {
        name: "notification",
      methods: {
        open12() {
          this.$notify({
            title: 'HTML 片段',
            dangerouslyUseHTMLString: true,
            message: '<strong>这是 <i>HTML</i> 片段</strong>'
          });
        }
      }
    }
</script>

<style scoped>

</style>
