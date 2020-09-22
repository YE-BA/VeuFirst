import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import playGround from "../views/playGround.vue";
import ForIf from "../views/Forif.vue";
import ListPage from "../views/ListPage.vue";
import Event from "../views/Event.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/play",
    name: "play",
    component: playGround,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/ForIf",
    name: "ForIf",
    component: ForIf,
  },
  {
    path: "/list",
    name: "List",
    component: ListPage,
  },
  {
    path: "/Event",
    name: "Event",
    component: Event,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
