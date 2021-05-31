import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddGuest from "@/views/AddGuest.vue";
import ViewGuest from "@/views/ViewGuest.vue";
import ViewGuests from "@/views/ViewGuests.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "AddGuest",
    component: AddGuest,
  },
  {
    path: "/viewall",
    name: "ViewGuests",
    component: ViewGuests,
  },
  {
    path: "/view/:id",
    name: "ViewGuest",
    component: ViewGuest,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
