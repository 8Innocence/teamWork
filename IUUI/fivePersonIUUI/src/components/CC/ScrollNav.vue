<template>
  <div class="cc">
  <yd-scrollnav>
    <yd-scrollnav-panel :label="item.label" v-for="item, key in list" :key="key">

      <!-- 内容 -->
      <p>{{item.label}}</p>
      <yd-list :theme="1">
        <yd-list-item v-for="i in 10">
          <img slot="img" src="//static.shikee.com/common/img/blank.gif">
          <span slot="title">{{item.label}} - {{item.label}}</span>
        </yd-list-item>
      </yd-list>
      <!-- 内容 -->

    </yd-scrollnav-panel>
  </yd-scrollnav>
  </div>
</template>

<script>
    export default {
        name: "ScrollNav",
      data() {
        return {
          list: [
            {label: '今日特惠'},
            {label: '小麦'},
            {label: '玉米'},
            {label: '花生'},
            {label: '有机猪'},
            {label: '水果'},
            {label: '蔬菜'},
            {label: '营养鸡'},
            {label: '纯狗肉'},
            {label: '白天鹅'}
          ]
        }
      }
    }
</script>

<style scoped>

</style>
<style>
  .cc/deep/.yd-scrollnav{
    width:70%;
    /*float:right;*/
    margin-left:350px;
    margin-top:100px;
  }
  .cc/deep/.yd-scrollnav-tab{
    height:100px;
    line-height:100px;

  }
  .cc/deep/.yd-scrollnav-tab-item::-webkit-scrollbar{
     display:none;
  }
  .cc/deep/.yd-scrollnav-tab-item>li{
    font-size:12px;
    padding-top:0 !important;
  }
  .cc/deep/.yd-scrollnav-tab-item>li>span{
    height:inherit;
    font-size:20px;
  }
  .cc/deep/.yd-scrollnav-tab .yd-scrollnav-tab-item{
    height:100px !important;
  }
</style>
