import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Create from '../views/Create.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,

  },
  {
    path: "/create",
    name: "Create",
    component: Create,

  },
  {
    path: "/login",
    name: "Login",
    component: Login,

  },
  {
    path: "/register",
    name: "Register",
    component: Register,

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
