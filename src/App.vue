<!--
=========================================================
* Vue Argon Dashboard 2 - v3.0.0
=========================================================

* Product Page: https://creative-tim.com/product/vue-argon-dashboard
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->
<template >

  <ValidationComponentVue />
  <div v-show="this.$store.state.layout === 'landing'"
    class="landing-bg h-100 bg-gradient-primary position-fixed w-100"></div>

  <sidenav :custom_class="this.$store.state.mcolor" :class="[
    this.$store.state.isTransparent,
    this.$store.state.isRTL ? 'fixed-end' : 'fixed-start'
  ]" v-if="this.$store.state.showSidenav" />

  <main class="main-content  position-relative max-height-vh-100 h-100 border-radius-lg">
    <!-- nav -->
    <navbar :class="[navClasses]" :textWhite="
      this.$store.state.isAbsolute ? 'text-white opacity-8' : 'text-white'
    " :minNav="navbarMinimize" v-if="this.$store.state.showNavbar" />
    <!-- <div class="  d-flex justify-content-center pt-5"
        v-if="this.$store.state.loading /* == this.$router.currentRoute.value.path.split('/')[1] */">

        <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

      </div> -->
    <router-view />
    <app-footer />
    <configurator :toggle="toggleConfigurator" :class="[
      this.$store.state.showConfig ? 'show' : '',
      this.$store.state.hideConfigButton ? 'd-none' : ''
    ]" />
  </main>


</template>
<script>
import Sidenav from "./examples/Sidenav";
import Configurator from "@/examples/Configurator.vue";
import Navbar from "@/examples/Navbars/Navbar.vue";
// import AppFooter from "@/examples/Footer.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import { createToaster } from "@meforma/vue-toaster";

import { mapMutations } from "vuex";
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from './boot/RequestApi';
import ValidationComponentVue from "./components/ValidationComponent.vue";
import VueCookies from 'vue-cookies'
// import router from './router';
// import { api } from './boot/axios';

export default {
  name: "App",
  components: {
    Sidenav,
    Configurator,
    Navbar,
    AppFooter, ValidationComponentVue
  },
  data() {
    return {
      onLine: navigator.onLine,
      showBackOnline: false,
      toast: createToaster(),

    }
  },

  watch: {
    onLine(v) {
      console.log('fffff', navigator.onLine)
      if (navigator.onLine == false) {
        this.toast.error(`Verifier votre connexion internet`, {
          // override the global option
          position: "top", duration: 3000
        })
      }
      if (v) {
        this.showBackOnline = true;
        this.toast.success(` Votre connexion internet est retabile`, {
          // override the global option
          position: "top", duration: 10000
        });
        setTimeout(() => {
          this.showBackOnline = false;
        }, 1000);
      }
    }
  },
  mounted() {
    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  },
  beforeUnMount() {
    window.removeEventListener('online', this.updateOnlineStatus);
    window.removeEventListener('offline', this.updateOnlineStatus);
  },
  methods: {
    updateOnlineStatus(e) {
      const {
        type
      } = e;
      this.onLine = type === 'online';
    },
    ...mapMutations(["toggleConfigurator", "navbarMinimize"])
  },
  computed: {
    navClasses() {
      return {
        "position-sticky bg-white left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && !this.$store.state.darkMode,
        "position-sticky bg-default left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && this.$store.state.darkMode,
        "position-absolute px-4 mx-0 w-100 z-index-2": this.$store.state
          .isAbsolute,
        "px-0 mx-4": !this.$store.state.isAbsolute
      };
    }
  }, beforeRouteEnter() {

  },

  beforeMount() {

    // if (window.location.pathname.split('/')[
    //   window.location.pathname.split('/').length - 1
    // ] != 'robots.txt') {

    //   if (window.location.pathname.split('/')[
    //     window.location.pathname.split('/').length - 1
    //   ] != 'test' && window.location.pathname.split('/')[
    //   window.location.pathname.split('/').length - 1
    //   ] != 'signin' && window.location.pathname.split('/')[
    //   window.location.pathname.split('/').length - 1
    //   ] != 'Signup' && window.location.pathname.split('/')[
    //   window.location.pathname.split('/').length - 1
    //   ] != 'rememberpage' && window.location.pathname.split('/')[
    //   window.location.pathname.split('/').length - 1
    //   ] != 'SenderException' && window.location.pathname.split('/')[1] != 'publicite') {
    //     let remember = VueCookies.get('remember');
    //     let confiance = VueCookies.get('confiance');

    //     VueCookies.set(
    //       'to',
    //       window.location.pathname.split('/')[
    //       window.location.pathname.split('/').length - 1
    //       ]
    //     );
    //     let aujourdhui = new Date();
    //     if (confiance == '1') {


    //       if (remember == '1') {
    //        //
    //       } else {

    //         if (
    //           VueCookies.get('date') !=
    //           aujourdhui.toLocaleString().split(',')[0].split('/')[0]
    //         ) {
    //             VueCookies.set(
    //             'date',
    //             aujourdhui.toLocaleString().split(',')[0].split('/')[0]
    //           );
    //           VueCookies.set(
    //             'to',
    //             window.location.pathname.split('/')[
    //             window.location.pathname.split('/').length - 1
    //             ]
    //           );

    //           router.push({ name: 'RememberPage' });
    //         } else {
    //         //
    //         }
    //       }
    //     } else {

    //       if (remember == '1') {
    //         if (
    //           VueCookies.get('date') !=
    //           aujourdhui.toLocaleString().split(',')[0].split('/')[0]
    //         ) {
    //           VueCookies.set(
    //             'date',
    //             aujourdhui.toLocaleString().split(',')[0].split('/')[0]
    //           );

    //           VueCookies.set(
    //             'to',
    //             window.location.pathname.split('/')[
    //             window.location.pathname.split('/').length - 1
    //             ]
    //           );
    //           router.push({ name: 'RememberPage' });
    //         } else {
    //           // await refreshAuthenticated();

    //           //console.log('**********************meme date');


    //           // next();
    //         }
    //       } else {
    //        ;
    //         if (
    //           VueCookies.get('date') !=
    //           aujourdhui.toLocaleString().split(',')[0].split('/')[0]
    //         ) {
    //           //console.log('**********************date differente');

    //           api.defaults.headers.common['Authorization'] = null;
    //           VueCookies.remove('token');
    //           VueCookies.remove('refreshToken');
    //           VueCookies.set('token', 'undefined');
    //           VueCookies.set('refreshToken', 'undefined');
    //           VueCookies.remove('id');
    //           VueCookies.remove('admin');
    //           // VueCookies.remove('theme');

    //           router.push({ name: 'Signin' });
    //         } else {
    //           // await refreshAuthenticated();

    //           //console.log('**********************meme date');


    //           // next();
    //         }
    //       }
    //     }
    //   } else {
    //     // console.log('-----------aaaa-------', window.location.pathname.split('/')[1])

    //     if (window.location.pathname.split('/')[1] == 'publicite' || window.location.pathname.split('/')[1
    //     ] == 'SenderException') {
    //       // console.log('-----------bbb-------', window.location.pathname.split('/')[1])
    //     }
    //     else {
    //       // console.log('-----------ccc-------', window.location.pathname.split('/')[1])

    //       router.push({ name: 'Signin' });

    //     }

    //   }
    // }
  },
  setup() {
    let mounted = ref(false);
    onMounted(async () => {

      if (VueCookies.get('token') != undefined &&
        VueCookies.get('token') != 'undefined' &&
        VueCookies.get('token') != null) {

        await new RequestApi().newConnexionUser();
      }
      mounted.value = true;


    })
    return { mounted, }
  }
  //  mounted() { this.mounted = true },
  // data() {
  //   return {
  //     mounted: false
  //   }
  // }
};
</script>
