import Vue from "vue";
import VueRouter from "vue-router";
// 登录组件
import Login from "../components/Login.vue";
// 主页组件
import Home from "../components/Home.vue";

import Welcome from "../components/Welcome.vue";
import Users from "../components/user/Users.vue";
import Rights from "../components/power/Rights.vue";
import Roles from "../components/power/Roles.vue";
import Cate from "../components/goods/Cate.vue";
import Params from "../components/goods/Params.vue";
import GoodsList from "../components/goods/List.vue";
import Add from "../components/goods/Add.vue";
import Order from "../components/order/Order.vue";
import Report from "../components/report/Report.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  {
    path: "/home",
    component: Home,
    // 主页重定向
    redirect: "/welcome",
    children: [
      { path: "/welcome", component: Welcome },
      { path: "/users", component: Users },
      { path: "/rights", component: Rights },
      { path: "/roles", component: Roles },
      { path: "/categories", component: Cate },
      { path: "/params", component: Params },
      { path: "/goods", component: GoodsList },
      { path: "/goods/add", component: Add },
      { path: "/orders", component: Order },
      { path: "/reports", component: Report },
    ],
  },
];

const router = new VueRouter({
  routes,
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 放行函数 next('/login)可以强制跳转指定页面

  if (to.path === "/login") return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next("/login");
  next();
});

export default router;
