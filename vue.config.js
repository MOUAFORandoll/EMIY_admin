 let routes = [
  {
    path: "/",
    name: "/",
    redirect: "/signin",
  },
  {
    path: "/SenderException",
    name: "SenderException",
      component: ()=>import('../views/ExceptionView.vue'),

  },
  {
    path: "/dashboard-default",
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

  },
  {
    path: "/Signup",
    name: "Signup",
    component: ()=>import('../views/Signup.vue'),

  },
  {
    path: "/createProfile",
    name: "createProfile",
    component: ()=>import('../views/Roles/NouveauprofilUsers.vue'),

  },
  {
    path: "/list-profil-users",
    name: "list-profil-users",
    component: ()=>import('../views/Roles/ListprofilsUsers.vue'),

  },
  {
    path: "/EditProfileUser"/* /:name */,
    
    name: "EditProfileUser",
    component: ()=>import('../views/Roles/EditProfileUser.vue'),

  },
  
  {
    path: "/Pub",
    
    name: "Pub",
     
    
  },
   {
    path: "/Pub/DashBoard",
    
    name: "DashBoard",    component: ()=>import('../views/Pub/DashBoardPub.vue'),

  },
   
   {
    path: "/Pub/ListPub",
    
     name: "list-pub",
     component: () => import('../views/Pub/ListPub.vue'),

  },  {
    path: "/Pub/infoPub",
    
     name: "infoPub",
     component: () => import('../views/Pub/infoPub.vue'),

  },
   


  {

    path: "/Configuration",
    
    name: "Configuration",
     
    
  },{
    path: "/Configuration/commission",
    
    name: "Commission",
    component: ()=>import('../views/Configuration/Commission.vue'),
    },
    {
    path: "/Configuration/exception",
    
    name: "Exception",
    component: ()=>import('../views/Configuration/Exception.vue'),
  },
  {
    path: "/Configuration/reduction",
    
    name: "Reduction",
        component: ()=>import('../views/Configuration/Reduction.vue'),
  },







  {

    path: "/Licence",
    
    name: "Licence",
     
    
  },{
    path: "/licence/achat",
    
    name: "Achat",
    component: ()=>import('../views/Licence/AcheterLicence.vue'),
    },
      
      {
    path: "/Licence/Crediter",
    
    name: "Crediter_un_compte",
    component: ()=>import('../views/Licence/CrediterCompte.vue'),
  },{
    path: "/Licence/Debiter",
    
    name: "Debiter_un_compte",
        component: ()=>import('../views/Licence/DebiterCompte.vue'),

  },
{
    path: "/Licence/ListLicence",
    
    name: "ListLicence",
    component: ()=>import('../views/Licence/ListLicence.vue'),
    },



  {
    path: "/Contact",
    
    name: "Contact",
    component: () => import('../views/Contact/NouveauContact.vue'),
  },{
    path: "/Contact/Nouveau",
    
    name: "NouveauContact",
     component: ()=>import('../views/Contact/NouveauContact.vue'),
  },
    {
    path: "/Contact/Groupe",
    
    name: "Groupe Contact",
     component: ()=>import('../views/Contact/Groupe.vue'),
  },
     {
    path: "/Contact/import",
    
    name: "import contact",
     component: ()=>import('../views/Contact/Import.vue'),
  },
    
    {
    path: "/Contact/ListContact",
    
    name: "Liste Contact",
     component: ()=>import('../views/Contact/ListContact.vue'),
  },




  {
    path: "/Client",
    
    name: "Client",
    component: () => import('../views/Client/NouveauClient.vue'),
  },{
    path: "/Client/NouveauClient",
    
    name: "NouveauClient",
     component: ()=>import('../views/Client/NouveauClient.vue'),
  },
    
  {
    path: "/Client/profile",
    name: "Profile",
       component: ()=>import('../views/Client/Profile.vue'),

  },
      
      {
    path: "/Client/ListClient",
    
    name: "ListClient",
    component: ()=>import('../views/Client/ListClients.vue'),
  },
  




  {
    path: "/Wallet",
    
    name: "Wallet",
    component: () => import('../views/Wallet/DashBoardWallet.vue'),
    
  },{
    path: "/Wallet/DashBoardWallet",
    
    name: "DashBoardWallet",
        component: ()=>import('../views/Wallet/DashBoardWallet.vue'),

    },
    {
    path: "/Wallet/RechargeWallet",
    
    name: "RechargeWallet",
        component: ()=>import('../views/Wallet/RechargeWallet.vue'),

    },{
    path: "/Wallet/RetraitWallet",
    
    name: "RetraitWallet",
        component: ()=>import('../views/Wallet/RetraitWallet.vue'),

   
  },

  
  {
    path: "/Projet",
    
    name: "Projet",
    component: () => import('../views/Projet/NouveauProjet.vue'),
  },{
    path: "/Projet/NouveauProjet",
    
    name: "NouveauProjet",
     component: ()=>import('../views/Projet/NouveauProjet.vue'),
    },
      
      {
    path: "/Projet/ListProjets",
    
    name: "ListProjet",
    component: ()=>import('../views/Projet/ListProjets.vue'),
  },



  {
    path: "/Evenements",
    
    name: "Evenements",
    component: () => import('../views/Evenements/notification.vue'),
  },{
    path: "/Evenements/notifications",
    
    name: "notifications",
     component: ()=>import('../views/Evenements/notification.vue'),
    },
      
      {
    path: "/Evenements/calendrier",
    
    name: "calendrier",
    component: ()=>import('../views/Evenements/calendrier.vue'),
  },  {
    path: "/Evenements/liste-evenements",
    
    name: "liste-evenements",
    component: ()=>import('../views/Evenements/ListEvenements.vue'),
  },

  

  {
    path: "/Sms/Nouveau",
    name: "Sms",
        component: ()=>import('../views/Sms/SmsIndividuel.vue'),

  },
   {
    path: "/Sms/message-groupe",
    
    name: "Groupe",
    component: ()=>import('../views/Sms/SmsGroupe.vue'),
  }, {
    path: "/Sms/message-personnalise",
    
    name: "Personnalise",
    component: ()=>import('../views/Sms/SmsPersonnalise.vue'),
  },
  {
    path: "/Sms/Examiner",
    name: "ListSmsSenderId",
        component: ()=>import('../views/Sms/Examiner.vue'),

  },
  

  {
    path: "/Vitrine/Nouvelle",
    name: "Vitrine-nouvelle",
       component: ()=>import('../views/Vitrine/NouvelleVitrine.vue'),

  },
   {
    path: "/Vitrine/list-vitrine",
    
    name: "list-vitrine",
    component: ()=>import('../views/Vitrine/ListVitrine.vue'),
  }

,
  {
    path: '/rememberpage',
    name: 'RememberPage',
    component: () => import('../views/rememberPage.vue'),
  },
 
   
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/Error404.vue'),
  },
  // {
  //   path: '/sitemap.xml',
  //   component: () => import('../sitemap.xml'),
  // },
];

module.exports = {
    pluginOptions: {
        sitemap: {
            baseURL: 'https://dashboard.pubx.cm',
            routes,
        }
    }
}