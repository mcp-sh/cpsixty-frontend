import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddGuest from "@/views/AddGuest.vue";
import ViewGuest from "@/views/ViewGuest.vue";
import ViewGuests from "@/views/ViewGuests.vue";
import Admin from "@/views/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/adminauth",
    name: "admin",
    component: Admin,
  },
  {
    path: "/add",
    name: "addguest",
    component: AddGuest,
  },
  {
    path: "/viewall",
    name: "viewguests",
    component: ViewGuests,
  },
  {
    path: "/view/:id",
    name: "viewguest",
    component: ViewGuest,
    props: true,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
