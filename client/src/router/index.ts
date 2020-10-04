import Vue from "vue";
import VueRouter from "vue-router";
import Vehicules from "../views/Vehicules";
import Vehicule from "../views/Vehicule";
import ActionsPrev from "../views/ActionsPrev";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Vehicules,
    alias: "/vehicule"
  },
  {
    path: "/vehicule/:id",
    component: Vehicule,
    props: true
  },
  {
    path: "/vehicule/:id/actionsprev",
    component: ActionsPrev,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
