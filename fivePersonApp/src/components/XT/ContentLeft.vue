<template>
  <div class="content-left">
    <ul id="side-nav">
      <li>基础说明</li>
      <router-link to="/content" tag="li">底层方法<span>基础支撑</span></router-link>
      <router-link to="/content/ContentRight2" tag="li">底层方法<span>基础支撑</span></router-link>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
    </ul>
    <ul id="side-nav">
      <li>基础说明</li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
    </ul>
    <ul id="side-nav">
      <li>基础说明</li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
    </ul>
    <ul id="side-nav">
      <li>基础说明</li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
      <li>底层方法<span>基础支撑</span></li>
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
    width:16%;
    height: 100%;
    border-right:1px solid #eeeeee;
    padding-left:105px;
    overflow-y: auto;
  }
  #side-nav{
    margin-top:15px;
  }
  #side-nav li{
    height:38px;
    display:flex;
    align-items: center;
    font-size:12px;
    color: #333333;
    padding-left:10px;
    cursor: pointer;
  }
  #side-nav li span{
    font-size:11px;
    color: #bbbbbb;
    margin-left:8px;
  }
  #side-nav li:first-child{
    background-color:#f2f2f2;
    border-left:5px solid #009e94;
    color:black;
  }
</style>
