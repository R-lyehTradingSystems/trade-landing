import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory('/trade-landing/'),
  routes,
});

export default router;