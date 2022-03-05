import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Home,
  },
  {
    path: "/Produtos",
    name: "Produtos",
    component: () => import("../views/Produtos.vue"),
  },
  {
    path: "/Empresa",
    name: "Empresa",
    component: () => import("../views/Empresa.vue"),
  },
  {
    path: "/Studio-sa",
    name: "Studio",
    component: () => import("../views/Studio.vue"),
  },
  {
    path: "/Contato",
    name: "Contato",
    component: () => import("../views/Contato.vue"),
  },
  {
    path: "/produtos/produto/:tag",
    name: "Produto",
    component: () => import("../views/Produtos.vue"),
  },
  {
    path: "/:pacthMatch(.*)*",
    mame: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
