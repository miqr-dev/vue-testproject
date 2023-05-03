import { createRouter, createWebHistory } from "vue-router";

import Profile from "../components/Profile.vue";

const routes = [
  { path: "/", name: "Profile", component: Profile },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import("../components/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;