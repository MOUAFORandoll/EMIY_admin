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
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
    },
    path: "/dashboard",
    name: "dashboard",
    component: Home,
  },
  /* {
   // Document title tag
   // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
   meta: {
     title: "Dashboard",
   },
   path: "/dashboard",
   name: "dashboard",
   component: Home,
 }, */
  {
    meta: {
      title: "Commandes",
    },
    path: "/commandes",
    name: "commandes",
    component: () => import("@/views/Commande/CommandeView.vue"),
  },
  {
    meta: {
      title: "Boutiques",
    },
    path: "/boutiques",
    name: "boutiques",
    component: () => import("@/views/Boutique/BoutiqueView.vue"),
  }, {
    meta: {
      title: "Boutiques",
    },
    path: "/boutiques/demandes",
    name: "boutique_demandes",
    component: () => import("@/views/Boutique/BoutiqueDemandeView.vue"),
  },
  {
    meta: {
      title: "Utilisateurs",
    },
    path: "/utilisateurs",
    name: "utilisateurs",
    component: () => import("@/views/Utilisateurs/UtilisateursView.vue"),
  }, {
    meta: {
      title: "Notifications",
    },
    path: "/notifications",
    name: "notifications",
    component: () => import("@/views/Notifications/NotificationView.vue"),
  }, {
    meta: {
      title: "Service Client",
    },
    path: "/service_client",
    name: "service_client",
    component: () => import("@/views/Service_Client/ServiceClientView.vue"),
  },

  {
    meta: {
      title: "Negociations",
    },
    path: "/negociations",
    name: "negociations",
    component: () => import("@/views/Negociations/NegociationView.vue"),
  },
  {
    meta: {
      title: "Forms",
    },
    path: "/forms",
    name: "forms",
    component: () => import("@/views/FormsView.vue"),
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
      title: "Responsive layout",
    },
    path: "/responsive",
    name: "responsive",
    component: () => import("@/views/ResponsiveView.vue"),
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
  if (to.name != "login") {
    console.log("different------------------", to.name);
    if (localStorage.getItem("keySecret") == null) {
      router.push("/");
    }
    //
  }
});
export default router;
