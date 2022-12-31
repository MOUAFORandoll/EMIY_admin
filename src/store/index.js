import { createStore } from "vuex";

export default createStore({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    sidebarType: "bg-white",
    isRTL: false,
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    loading:true, // 'dashboard-default',
    layout: "default",
    listModePaiement:null,
    listCategoryProduit:null,
    listCategoryProduit2:null,
    listGroupe:null,
    listContact:null,
    listSenderIdSms:null,
    soldeLocal:null,
    soldePorteFeuille:null,
    soldeSms: null,
    infoCompte: null,
    trancheSms: null,
    listUserParrain:null,
    listPays:null,
    listMail:null,
    listRoute:null,
    listLicence:null,
    listModel:null,
    listSmsVitrine:null,
    user:null,
    configMail:null,
    commissionAll:null,
    listSenderId :null,
    exceptionAll:null,
  },
  mutations: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
     navbarMinimize(state) {
       console.log('window.innerWidth ',window.innerWidth )
       if (window.innerWidth < 1025) {
          const sidenav_show = document.querySelector(".g-sidenav-show");

          if (sidenav_show.classList.contains("g-sidenav-hidden")) {
             sidenav_show.classList.remove("g-sidenav-hidden");
             sidenav_show.classList.add("g-sidenav-pinned");
             state.isPinned = true;
          } else {
             sidenav_show.classList.add("g-sidenav-hidden");
             sidenav_show.classList.remove("g-sidenav-pinned");
             state.isPinned = false;
          }
       }
    },
    sidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    modePaiement(state,payload) {
       state.listModePaiement = payload;
    }
, getListSmsVitrine(state,payload) {
       state.listSmsVitrine = payload;
    }
, getConfigMail(state,payload) {
       state.configMail = payload;
    }
, getMail(state,payload) {
       state.listMail = payload;
    },getsoldeLocal(state,payload) {
       state.soldeLocal = payload;
    },
    getsoldePorteFeuille(state, payload) {
       state.soldePorteFeuille = payload;
    },
    getInfoCompte(state, payload) {
       state.infoCompte = payload;
    }, gettrancheSms(state, payload) {
       state.trancheSms = payload;
    }, getlistLicence(state, payload) {
       state.listLicence = payload;
    }

    , getParrainUser(state, payload) {
       state.listUserParrain = payload;
    }, getlistPays(state, payload) {
       state.listPays = payload;
    }, getlistModel(state, payload) {
       state.listModel = payload;
    },getlistRoute(state, payload) {
       state.listRoute = payload;
    }, getlistCatProduit(state, payload) {
       state.listCategoryProduit = payload;
    }, getlistCatProduit2(state, payload) {
       state.listCategoryProduit2 = payload;
    },  getlistSenderIdSms(state, payload) {
       state.listSenderIdSms = payload;
    },getlistSenderId(state, payload) {
       state.listSenderId = payload;
    }, getUser(state, payload) {
       state.user = payload;
    }, getCommissionAll(state, payload) {
       state.commissionAll = payload;
     }, getexceptionAll(state, payload) {
       state.exceptionAll = payload;
    }, getGroupeUser(state, payload) {
       state.listGroupe = payload;
    },getContact(state, payload) {
       state.listContact = payload;
    },getLoading(state, payload) {
       state.loading = payload;
    }
  },
  actions: {
     updatelistLicence({ commit }, payload) {
   commit("getlistLicence", payload);
    },   updateListSmsVitrine({ commit }, payload) {
   commit("getListSmsVitrine", payload);
    },     updatelistModel({ commit }, payload) {
   commit("getlistModel", payload);
    },      updateLoading({ commit }, payload) {
   commit("getLoading", payload);
    },  updateContact({ commit }, payload) {
   commit("getContact", payload);
    }, updateGroupeUser({ commit }, payload) {
   commit("getGroupeUser", payload);
    }, 
     updateSenderIdSms({ commit }, payload) {
   commit("getlistSenderIdSms", payload);
    }, 
     updateSenderId({ commit }, payload) {
   commit("getlistSenderId", payload);
    }, 
    
    
    updateMail({ commit }, payload) {
   commit("getMail", payload);
    },  
    updatConfigMail({ commit }, payload) {
   commit("getConfigMail", payload);
    },
    updateUser({ commit }, payload) {
   commit("getUser", payload);
    },  updateCommissionAll({ commit }, payload) {
   commit("getCommissionAll", payload);
    } , updateexceptionAll({ commit }, payload) {
   commit("getexceptionAll", payload);
    },updatelistCatProduit({ commit }, payload) {
   commit("getlistCatProduit", payload);
    },updatelistCatProduit2({ commit }, payload) {
   commit("getlistCatProduit2", payload);
    }, updatelistPays({ commit }, payload) {
   commit("getlistPays", payload);
    },updatelistRoute({ commit }, payload) {
   commit("getlistRoute", payload);
    },
    updateParrainUser({ commit }, payload) {
   commit("getParrainUser", payload);
    },

      updatetrancheSms({ commit }, payload) {
   commit("gettrancheSms", payload);
    },
    updateInfoCompte({ commit }, payload) {
   commit("getInfoCompte", payload);
    },



    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
    updateModePaiement({ commit }, payload) {
   commit("modePaiement", payload);
    }
,
      updatesoldeLocal({ commit }, payload) {
   commit("getsoldeLocal", payload);
    },
      updatesoldePorteFeuille({ commit }, payload) {
   commit("getsoldePorteFeuille", payload);
    },
  },
  getters: {}
});
