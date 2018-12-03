<template>
  <div class="team" style="display:flex;">
    <wang-box></wang-box>
    <div style="flex:1;padding-left:50px;height:100%;overflow-y: auto;">
      <div class="team_top">
        <h1>认识团队</h1>
        <h2>核心团队</h2>
        <p>Vue 的研发及其生态建设出自一个国际化的团队，这里会展示其中部分团队成员的信息。</p>
      </div>
      <div class="user">
        <img src="../../../static/images/2.gif"/>
        <div class="user_msg">
          <h4>Max</h4>
          <p>CORE FOCUS vuejs/* · vuejs-templates/*</p>
          <p>ECOSYSTEM vue-i18n · vue-cli-plugin-i18n · vue-i18n-loader · vue-i18n-extensions</p>
          <p>CTO & Full Stack Developer</p>
          <p>Shan‘Xi, China</p>
          <p>汉语 · English</p>
          <p>patreon.com/kazupon · cuusoo.com · frapwings.jp</p>
        </div>
      </div>
      <div class="user">
        <img src="../../../static/images/2.gif"/>
        <div class="user_msg">
          <h4>拓田</h4>
          <p>CORE FOCUS vuejs/* · vuejs-templates/*</p>
          <p>ECOSYSTEM vue-i18n · vue-cli-plugin-i18n · vue-i18n-loader · vue-i18n-extensions</p>
          <p>CTO & Full Stack Developer</p>
          <p>Tokyo, China</p>
          <p>日本語 · English</p>
          <p>patreon.com/kazupon · cuusoo.com · frapwings.jp</p>
        </div>
      </div>
      <div class="user">
        <img src="../../../static/images/2.gif"/>
        <div class="user_msg">
          <h4>朱东升</h4>
          <p>CORE FOCUS vuejs/* · vuejs-templates/*</p>
          <p>ECOSYSTEM vue-i18n · vue-cli-plugin-i18n · vue-i18n-loader · vue-i18n-extensions</p>
          <p>CTO & Full Stack Developer</p>
          <p>Tokyo, China</p>
          <p>汉语 · English</p>
          <p>patreon.com/kazupon · cuusoo.com · frapwings.jp</p>
        </div>
      </div>
      <div class="user">
        <img src="../../../static/images/2.gif"/>
        <div class="user_msg">
          <h4>邢涛</h4>
          <p>CORE FOCUS vuejs/* · vuejs-templates/*</p>
          <p>ECOSYSTEM vue-i18n · vue-cli-plugin-i18n · vue-i18n-loader · vue-i18n-extensions</p>
          <p>CTO & Full Stack Developer</p>
          <p>Tokyo, China</p>
          <p>汉语 · English</p>
          <p>patreon.com/kazupon · cuusoo.com · frapwings.jp</p>
        </div>
      </div>
      <div class="user">
        <img src="../../../static/images/2.gif"/>
        <div class="user_msg">
          <h4>王聪</h4>
          <p>CORE FOCUS vuejs/* · vuejs-templates/*</p>
          <p>ECOSYSTEM vue-i18n · vue-cli-plugin-i18n · vue-i18n-loader · vue-i18n-extensions</p>
          <p>CTO & Full Stack Developer</p>
          <p>Tokyo, China</p>
          <p>汉语 · English</p>
          <p>patreon.com/kazupon · cuusoo.com · frapwings.jp</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import WangBox from "../ZDS/WangBox";
    export default {
        name: "ccTeam",
        components: {WangBox}
    }
</script>

<style scoped>
  /*team*/
  .team{
    width:100%;
    height:100%;
    flex:1;
    -webkit-box-sizing: border-box;
    padding-left:50px;
    overflow-y:auto;
    border-left:1px solid #eee;
  }
  .team h1{
    margin-top:45px;
    margin-bottom:50px;
  }
  .team_top{
    max-width:90%;
  }
  .team_top h2{
    padding-bottom:20px;
    border-bottom:1px solid gray;
  }
  .team_top p{
    margin-top:20px;
  }
  /*user*/
  .user{
    max-width:90%;
    padding:30px 0;
    border-bottom:1px dashed gray;
    display:flex;
  }
  .user img{
    width:100px;
    height:100px;
    margin-right:30px;
  }
  .user_msg h4{
    padding-bottom:10px;
  }
  .user_msg p{
    line-height:30px;
  }
</style>
