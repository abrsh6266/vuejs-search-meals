import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SearchByName from "../views/SearchByName.vue";
import SearchByIngredients from "../views/SearchByIngredients.vue";
import SearchByLetter from "../views/SearchByLetter.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/by-letter/:letter",
    name: "byLetter",
    component: SearchByLetter,
  },
  {
    path: "/by-name/:name",
    name: "byName",
    component: SearchByName,
  },
  {
    path: "/by-ingredient/:ingredient",
    name: "byIngredient",
    component: SearchByIngredients,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
