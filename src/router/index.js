import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: '/',
    redirect: '/blog'
  }, {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/blog",
        name: "blog",
        meta: {
          title: '博客'
        },
        component: () => import ( /* webpackChunkName: "basicstudent" */ "../views/blog/BlogList.vue")
      },
    ]
  }, {
    path: "/search",
    name: "search",
    meta: {
      title: '搜索'
    },
    component: () => import ( /* webpackChunkName: "login" */ "../views/Search.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `个人博客系统`;
  next();
});

export default router;
