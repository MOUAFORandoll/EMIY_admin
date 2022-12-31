import { createRouter, createWebHistory } from "vue-router"; 
 
 
 let routes = [
  // {
  //   path: "/",
  //   name: "/",
  //   redirect: "/signin",
  //  },
  
  {
    path: "/stop",
    name: "stop",
      component: ()=>import('../views/ExceptionView.vue'),

  },
  {
    path: "/",
    name: "Dashboard",
    component: ()=>import('../views/Dashboard.vue'),
  },
  {
    path: "/tables",
    name: "Tables", 
    component: ()=>import('../views/Tables.vue'),
     
  },
  {
    path: "/billing",
    name: "Billing",
    component: ()=>import('../views/Billing.vue'),

  }, 
  {
    path: "/rtl-page",
    name: "RTL",
    component: ()=>import('../views/Rtl.vue'),

  },
  {
    path: "/signin",
    name: "Signin",
    component: ()=>import('../views/Signin.vue'),

  },{
    path: "/forgot",
    name: "forgot",
    component: ()=>import('../views/Forgot.vue'),

  },{
    path: "/price",
    name: "price",
    component: ()=>import('../views/Prix.vue'),

  }, 
  {
    path: "/Signup",
    name: "Signup",
    component: ()=>import('../views/Signup.vue'),

  }, 




  {

    path: "/produit",
    
    name: "produit",
     
    
   },
   {
    path: "/produit/new",
    
    name: "produit_new",
    component: ()=>import('../views/produit/nouveau.vue'),
    },
     
// {
//     path: "/produit/Listproduit",
    
//     name: "Listproduit",
//     component: ()=>import('../views/produit/Listproduit.vue'),
//     },
// {
//     path: "/produit/gerer",
    
//     name: "Gererproduit",
//     component: ()=>import('../views/produit/Gererproduit.vue'),
//     },


  
]; 
const router = createRouter({
    base: process.env.BASE_URL,
  history: createWebHistory(process.env.BASE_URL),
 routes,
  linkActiveClass: "active",
  
}); 
export default router;


 