<template>

  <!-- 
Bloc Gestion des Mere -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-if="volet == 0" id="sidenav-collapse-main">

    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Dashboard'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>


      <li class="nav-item">
        <sidenav-item-btn :class="getRoute() === 'Boutique' ? 'active' : ''" :navText="
  this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Boutique'
">
          <template v-slot:icon>
            <i class="ni  ni-cart text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>
      <li class="nav-item">
        <sidenav-item-btn @click="volet = 1" :class="getRoute() === 'produit_new' ? 'active' : ''" :navText="
  this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Produit'
">
          <template v-slot:icon>
            <i class="ni ni-credit-card text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>
      <li class="nav-item">
        <sidenav-item-btn @click="volet = 2" :class="getRoute() === 'Client' ? 'active' : ''" :navText="
  this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Clients'
">
          <template v-slot:icon>
            <i class="fas fa-user-alt text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>
      <li class="nav-item">
        <sidenav-item-btn @click="volet = 7" :class="getRoute() === 'Contact' ? 'active' : ''" :navText="
  this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Commande'
">
          <template v-slot:icon>
            <i class="ni  ni-circle-08 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>
      <li class="nav-item">
        <sidenav-item-btn @click="volet = 8" :class="getRoute() === 'Evenement' ? 'active' : ''" :navText="
  this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Vente'
">
          <template v-slot:icon>
            <i class="fa fa-calendar text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item-btn>
      </li>



    </ul>
  </div>



  <!-- 
Bloc Gestion des Boutiques -->
  <div class="collapse navbar-collapse w-auto h-auto h-100" v-else-if="volet == 1" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" @click="volet = 0"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Retour'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/produit/new" :class="getRoute() === 'produit_new' ? 'active' : ''" :navText="
  this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Ajouter un produit'
">
          <template v-slot:icon>
            <i class="ni ni-cart text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item @click="updateLoading(getRoute())" url="/Boutique/Crediter" v-show='crediter'
          :class="getRoute() === 'Crediter' ? 'active' : ''" :navText="
  this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Crediter un compte'
">
          <template v-slot:icon>
            <i class="ni ni-fat-add text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Boutique/Debiter" v-show='debiter' :class="getRoute() === 'Debiter' ? 'active' : ''"
          :navText="
  this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Debiter un compte'
">
          <template v-slot:icon>
            <i class="ni ni-fat-delete text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Boutique/ListLicence" v-show='listLicence'
          :class="getRoute() === 'ListLicence' ? 'active' : ''" :navText="
  this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Liste des Licences'
">
          <template v-slot:icon>
            <i class="ni ni-bullet-list-67 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Licence/gerer" v-show='admin' :class="getRoute() === 'GererLicence' ? 'active' : ''"
          :navText="
  this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Gestion des licences'
">
          <template v-slot:icon>
            <i class="ni ni-box-2 text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>


    </ul>
  </div>




  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <a href='https://doc.gessiia.com/devoo' target="_blank">
      <sidenav-card :class="cardBg" textPrimary="Besoin d'aide ?"
        textSecondary="Veuillez consulter notre documentation" />
    </a>
  </div>
</template>

<style>
.navbar-vertical.navbar-expand-xs {

  z-index: 0;
}

.navba {

  z-index: 0;
}
</style>
<script>
import SidenavItem from "./SidenavItem.vue";
import SidenavItemBtn from "./SidenavItemBtn.vue";
import SidenavCard from "./SidenavCard.vue";
import { ref } from '@vue/runtime-core';
import VueCookies from 'vue-cookies'
import { api } from '../../boot/axios';
import router from '../../router';
import store from "../../store";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "SidenavList",
  props: {
    cardBg: String
  },
  data() {
    return {
      title: "DEVOO",
      controls: "dashboardsExamples",
      isActive: "active"
    };
  },
  components: {
    SidenavItem,
    SidenavCard, SidenavItemBtn
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
    updateLoading(load) {
      mapMutations(["getLoading"]),

        mapActions(["updateLoading"])
      store.commit('getLoading', load)
    },
    loggout() {
      mapMutations(["getUser"]),

        mapActions(["updateUser"])
      store.commit('getUser', null)

      mapMutations(["gettrancheSms"]),

        mapActions(["updatetrancheSms"])
      store.commit('gettrancheSms', null)

      mapMutations(["getParrainUser"]),

        mapActions(["updateParrainUser"])
      store.commit('getParrainUser', null)
      api.defaults.headers.common['Authorization'] = null;
      VueCookies.remove('token');
      VueCookies.remove('refreshToken');
      VueCookies.set('token', 'undefined');
      VueCookies.set('id', 'undefined');
      VueCookies.set('id', null);
      VueCookies.set('refreshToken', 'undefined');
      VueCookies.remove('id');
      VueCookies.remove('admin');
      // VueCookies.remove('theme');

      router.push({ name: 'Signin' });
    },
  },
  setup: () => {
    // console.log(VueCookies.get('fonctions'));
    // let createUser = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '1') ? true : false : false;
    // let readUser = (VueCookies.get('fonctions')) ? (VueCookies.get('fonctions').split(',')).some(value => value == '2') ? true : false : false;
    // let updateUser = (VueCookies.get('fonctions')) ? (VueCookies.get('fonctions').split(',')).some(value => value == '3') ? true : false : false;


    // let buyLicence = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '5') ? true : false : false;
    // let listLicence = (VueCookies.get('fonctions')) ? (VueCookies.get('fonctions').split(',')).some(value => value == '6') ? true : false : false;
    // let crediter = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '7') ? true : false : false;
    // let debiter = (VueCookies.get('fonctions')) ? (VueCookies.get('fonctions').split(',')).some(value => value == '8') ? true : false : false;


    // let dashBoardWallet = (VueCookies.get('fonctions')) ? (VueCookies.get('fonctions').split(',')).some(value => value == '9') ? true : false : false;
    // let rechargeWallet = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '10') ? true : false : false;
    // let retraitWallet = (VueCookies.get('fonctions')) ? (VueCookies.get('fonctions').split(',')).some(value => value == '11') ? true : false : false;


    // let createProjet = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '12') ? true : false : false;
    // let manageProjet = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '13') ? true : false : false;


    // let createProfil = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '14') ? true : false : false;
    // let listProfil = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '15') ? true : false : false;
    // let manageProfil = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '15') ? true : false : false;


    // let addContact = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '17') ? true : false : false;
    // let groupContact = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '18') ? true : false : false;
    // let listContact = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '19') ? true : false : false;


    // let notification = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '21') ? true : false : false;
    // let calendrier = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '22') ? true : false : false;



    // let addSms = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '23') ? true : false : false;
    // let readSms = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '24') ? true : false : false;



    // let addVitrine = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '25') ? true : false : false;
    // let readVitrine = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '26') ? true : false : false;

    // let gereCommission = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '29') ? true : false : false;
    // let gereException = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '30') ? true : false : false;

    // let dashPub = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '31') ? true : false : false;
    // let readPub = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '32') ? true : false : false;

    // console.log(createUser, readUser);

    // function setSenderId() {
    //   console.log('dsddsdsd')
    //   VueCookies.set('senderIdName', 'all');
    //   console.log('00000')

    //   console.log('sendrid', VueCookies.get('senderId'));
    // }
    // /**
    //  * volet ; 0 => dashboard; 1 =>licence; 2 =>client; 3=>porte feuille client
    //  */
    let volet = ref(0);

    return {
      // dashPub, readPub,
      // admin: VueCookies.get('admin') == 1,
      // gereCommission, gereException,
      // addVitrine, readVitrine,
      // addSms, readSms,
      // notification, calendrier,
      // addContact, listContact, groupContact,
      // createProfil, listProfil, manageProfil,
      // createProjet, manageProjet, dashBoardWallet, rechargeWallet, retraitWallet,

      volet //, setSenderId, createUser, readUser, updateUser, buyLicence, listLicence, crediter, debiter
    }
  }
};
</script>
