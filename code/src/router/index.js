import Vue from "vue";
import VueRouter from "vue-router";
// 登录组件
import Login from "../components/Login.vue";
// 主页组件
import Home from "../components/Home.vue";


Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/home", component: Home },

];

const router = new VueRouter({
  routes,
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to 将要访问的路径
    // from 代表从哪个路径跳转而来
    // next 放行函数 next('/login)可以强制跳转指定页面

    if(to.path === '/login') return next();
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) return next('/login');
    next();
})

export default router;
