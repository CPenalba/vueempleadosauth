import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import PerfilEmpleadoComponent from "./components/PerfilEmpleadoComponent.vue";
import SubordinadosComponent from "./components/SubordinadosComponent.vue";

const myRoutes = [
  { path: "/", component: LoginComponent },
  { path: "/perfil", component: PerfilEmpleadoComponent },
  { path: "/subordinados", component: SubordinadosComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
