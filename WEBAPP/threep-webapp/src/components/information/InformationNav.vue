<template>
    <nav>
      <ul>
        <li>推荐</li>
        <li>行情资讯</li>
        <li>行情解读</li>
        <li>致富经</li>
        <li>三农政策</li>
        <li>精彩专题</li>
        <li>县域经济</li>
        <li>补贴查询</li>
        <li>展会报道</li>
        <li>项目推荐</li>
        <li>农技视频</li>
        <li>电商扶贫</li>
        <li>热点资讯</li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "InformationNav"
    }
</script>

<style scoped>
nav ul{
  height:.4rem;
  display: flex;
  flex: 1;
  overflow: auto;
  align-items: center;
}
  nav ul li{
    font-size:.16rem;
    color:#666666;
    margin-right:.25rem;
    white-space: nowrap;
  }
  nav ul li:first-child{
    margin-left:.15rem;
  }
</style>
