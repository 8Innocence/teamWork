<template>
  <div class="all" style="height:100%;display:flex;">
  <index-header class="XT"></index-header>
    <div class="elm" style="display:flex;flex:1;">
      <cc-navf></cc-navf>
      <ul class="main" style="overflow-y:auto;flex:1;">
        <router-view></router-view>
          <!--<li style="padding-top: 0">-->
            <!--<p>一、登录组件</p>-->
            <!--<minelogin></minelogin>-->
          <!--</li>-->
        <!--<li>-->
          <!--<p>二、3D动画类组件</p>-->
          <!--<idx-box></idx-box>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>三、左侧导航栏、可折叠</p>-->
          <!--<but-fade-in-out></but-fade-in-out>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>四、button</p>-->
          <!--<but-el-row></but-el-row>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>五、穿梭框组件</p>-->
          <!--<wdlcs></wdlcs>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>六、折叠式组件</p>-->
          <!--<zhedie></zhedie>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>七、标签组件</p>-->
          <!--<biaoqian></biaoqian>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>八、延迟加载组件</p>-->
          <!--<jiazai></jiazai>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>九、警告类组件</p>-->
         <!--<jingao></jingao>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>十、提示框组件</p>-->
          <!--<xxts></xxts>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>十一、step组件</p>-->
          <!--<zmd></zmd>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>十二、左侧导航栏</p>-->
          <!--<but-radio-group></but-radio-group>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>十三、组件</p>-->
          <!--<compom></compom>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>十四、时间日期类组件</p>-->
          <!--<DataAndTime></DataAndTime>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>十五、表单组件</p>-->
          <!--<Form></Form>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>十六、组件</p>-->
          <!--<notification></notification>-->
        <!--</li>-->


      </ul>
    </div>
  </div>


</template>

<script>

  import  commoncss from "../../static/css/common.css"
  import ButFadeInOut from "../components/ZDS/butFadeInOut";
  import ButElRow from "../components/ZDS/butElRow";
  import ButRadioGroup from "../components/ZDS/butRadioGroup";
  import CodeEditor from "../components/ZDS/codeEditor";
  import ContentLeft from "../components/XT/ContentLeft";
  import IndexHeader from "../components/DL/IndexHeader";

  import Minelogin from "../components/ZDS/MineLogin";
  import Wdlcs from "../components/ZDS/wdlcs";
  import Zhedie from "../components/ZDS/zhedie";
  import Biaoqian from "../components/ZDS/biaoqian";
  import Jiazai from "../components/ZDS/jiazai";
  import Jingao from "../components/ZDS/jinggao";
  import Xxts from "../components/ZDS/xxts";
  import Zmd from "../components/ZDS/zmd";
  import IdxBox from "../components/ZDS/idxBox";
  import Compom from "../components/ZDS/compom";
  import DataAndTime from "../components/ZDS/DataAndTime";
  import Form from "../components/ZDS/Form";
  import Notification from "../components/ZDS/notification";
  import CcNavf from "../components/CC/ccNavf";
  export default {
    components: {
      CcNavf,
      Notification,
      Form,
      DataAndTime,
      Compom,
      IdxBox,
      Zmd,
      Xxts,
      Jingao,
      Jiazai,
      Biaoqian,
      Zhedie,
      Wdlcs, Minelogin, IndexHeader, ContentLeft, CodeEditor, commoncss,ButRadioGroup, ButElRow, ButFadeInOut},
    data(){
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return{
        data: generateData(),
        value1: [1, 4]

      }
    },
    methods: {
      change(){

      }
    }
  }
</script>

<style lang="scss">
  .all{
    display:flex;
    flex-direction: column;
    height:100%;
    .XT{
      width:100%;
      box-sizing: border-box;
      background:#7dc499;
    }
    .left{
      width:18%;
    }
    .elm{
      display: flex;
      width:100%;
      .main{
        flex:1;
        background: #e6e3e3;
        padding:20px 30px;

        li{
          border-bottom: 1px solid black;
          padding-top: 20px ;

        }

      }
    }

  }

</style>

