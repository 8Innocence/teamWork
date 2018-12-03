// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import YDUI from 'vue-ydui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.px.css';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(YDUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //注册路由规则到vue实例中
  render(h){
    return h(App)
  }
})
