// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

// 配置路由
export default new VueRouter({
    // 配置路由
    routes: [
        {
            path: "/Home",
            component: Home,
            meta: {show: true},
        },
        {
            path: "/Login",
            component: Login,
            meta: {show: false},
        },
        {
            path: "/Register",
            component: Register,
            meta: {show: false},

        },
        {
            path: "/Search/: keyword",
            component: Search,
            meta: {show: true},
        },

        // 重定向，在项目跑起来的时候，访问/，定向到首页
        {
            path: '/',
            redirect: "/Home",
        }
    ]
})