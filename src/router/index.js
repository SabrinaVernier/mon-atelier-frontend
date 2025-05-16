import { createRouter, createWebHistory } from "vue-router";

import ProductPage from "../views/ProductPage.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/produit/:id",
    name: "Produit",
    component: ProductPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
