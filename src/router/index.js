import Vue from "vue";
import VueRouter from "vue-router";
import { Auth } from "@/firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "todos"
  },
  {
    path: "/todos",
    name: "TodoList",
    component: () => import("../pages/TodoList"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../pages/authentication/LoginPage")
  },
  {
    path: "/register",
    name: "SignUpPage",
    component: () => import("../pages/authentication/SignUpPage")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  Auth.onAuthStateChanged(user => {
    sessionStorage.setItem("user", JSON.stringify(user));
    if (to.matched.some(route => route.meta.requiresAuth)) {
      if (user) next();
      else next({ path: "/login" });
    }
    next();
  });
});

console.log(Auth);

export default router;
