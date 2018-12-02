<template>
  <div class="content-left">
    <ul class="side-nav">
      <li>布局</li>
      <router-link to="/content" tag="li">后台登录页面组件<span></span></router-link>
      <router-link to="/content/ContentRight2" tag="li">3D动画组建<span>基础支撑</span></router-link>
    </ul>
    <ul class="side-nav">
      <li>导航栏</li>
      <li>左侧导航栏<span>可折叠</span></li>
      <li>导航垂直菜单<span>可折叠</span></li>
      <li>折叠导航<span>动画效果</span></li>
    </ul>
    <ul class="side-nav">
      <li>Frame(框)</li>
      <li>穿梭框组件<span></span></li>
      <li>折叠框<span></span></li>
      <li>弹出框<span></span></li>
      <li>提示框<span></span></li>
    </ul>
    <ul class="side-nav">
      <li>路由</li>
      <li>标签组件<span></span></li>
    </ul>
    <ul class="side-nav">
      <li>From</li>
      <li>时间日期类组件<span></span></li>
      <li>表单类组件<span></span></li>
    </ul>
    <ul class="side-nav">
      <li>其他</li>
      <li>延迟加载组件<span></span></li>
      <li>警告类组件<span></span></li>
      <li>step组件<span></span></li>
      <li>HTML片段<span></span></li>
      <li>click激活<span></span></li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "ContentLeft",

    }

</script>

<style scoped>
  .content-left{
    width:18%;
  }

  .side-nav{
  }
  .side-nav li{
    height:38px;
    display:flex;
    align-items: center;
    font-size:12px;
    color: #333333;
    padding-left:30px;
    cursor: pointer;

  }
  .side-nav li span{
    font-size:11px;
    color: #bbbbbb;
    margin-left:8px;
  }
  .side-nav li:first-child{
    background-color:#f2f2f2;
    color:black;
    border-left:5px solid #009e94;

  }
  li:hover{
    background:#eee;
  }
</style>
