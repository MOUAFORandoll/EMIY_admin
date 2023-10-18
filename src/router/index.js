import { createRouter, createWebHistory } from "vue-router";
// import Style from "@/views/StyleView.vue";
import Home from "@/views/HomeView.vue";

const routes = [
  // {
  //   meta: {
  //     title: "Select style",
  //   },
  //   path: "/",
  //   name: "style",
  //   component: Style,
  // },

  {
    meta: {
      title: "Login",
    },
    path: "/",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    meta: {
      title: "Dashboard",
    },
    path: "/dashboard",
    name: "dashboard",
    component: Home,
  },

  {
    meta: {
      title: "Agregateur",
    },
    path: "/agregateur",
    name: "agregateur",
    component: import("@/views/AgregateurView.vue"),
  },

  {
    meta: {
      title: "Projet",
    },
    path: "/projets",
    name: "Projet",
    component: () => import("@/views/Projet/ProjetView.vue"),
  },
  {
    meta: {
      title: "Transactions",
    },
    path: "/Transactions",
    name: "Transactions",
    component: () => import("@/views/Transactions/TransactionsAllView.vue"),
  },

  {
    meta: {
      title: "Utilisateurs",
    },
    path: "/utilisateurs",
    name: "utilisateurs",
    component: () => import("@/views/Utilisateurs/UtilisateursView.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    meta: {
      title: "Ui",
    },
    path: "/ui",
    name: "ui",
    component: () => import("@/views/UiView.vue"),
  },
  {
    meta: {
      title: "Error",
    },
    path: "/error",
    name: "error",
    component: () => import("@/views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

router.beforeEach((to) => {
  // if (to.name != "login") {
  //   console.log(
  //     "different------------------",
  //     localStorage.getItem("keySecret"),
  //     to.name
  //   );
  //   if (localStorage.getItem("keySecret") == null) {
  //     router.push("/");
  //   }
  //   //
  // }
});
export default router;
