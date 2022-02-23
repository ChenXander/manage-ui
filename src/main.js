import Vue from 'vue';
import App from './App.vue';
// 引入路由
import router from '@/router';

Vue.config.productionTip = false;

new Vue({
    // 注册路由
    router,
    render: h => h(App),
}).$mount('#app');
