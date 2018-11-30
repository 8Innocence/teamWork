<template>
    <footer>
      <ul>
        <li><i class="iconfont icon-shinonggongban-"></i><span>首页</span></li>
        <li><i class="iconfont icon-nongchanpinjiagechaxun"></i><span>分类</span></li>
        <li><i class="iconfont icon-classification_icon_"></i><span>列表</span></li>
        <li><i class="iconfont icon-pinpainongchanpin"></i><span>购物车</span></li>
        <li><i class="iconfont icon-nongchanpinxiaoshouxinxi"></i><span>我的</span></li>
      </ul>
    </footer>
</template>

<script>
    export default {
        name: "IndexFooter"
    }
</script>

<style scoped>

  footer ul{
    display: flex;
    height: .5rem;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    border-top:1px solid #ababab;
  }
  footer ul li span{
    font-size:.12rem;
    color: #333333;
  }
</style>
