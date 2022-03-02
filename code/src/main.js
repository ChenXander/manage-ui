import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
// 导入字体图标
import "./assets/fonts/iconfont.css";
//导入全局样式表
import "./assets/css/global.css";

import axios from "axios";
// Vue.js 2.0 的表格（带有树形网格）组件
import TreeTable from "vue-table-with-tree-grid";
// 配置请求的根路径
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1";
// axios请求拦截器
axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  // 最后必须return config
  return config;
});
Vue.prototype.$http = axios;

Vue.component("tree-table", TreeTable);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
