import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
      },
      {
        path: "charts",
        name: "Charts",
        component: () =>
          import(/* webpackChunkName: "charts" */ "../views/Charts.vue")
      },
      {
        path: "about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      }
    ]
  },
  {
    path: "*",
    name: "Not Found",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
