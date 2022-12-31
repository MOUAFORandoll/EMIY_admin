<template>
  <div v-show="this.$store.state.layout === 'default'" class="min-height-300 position-absolute w-100"
    :class="`${this.$store.state.darkMode ? 'bg-transparent' : 'bg-info'}`" />
  <aside
    class="my-3 p-auto m-auto overflow-auto border-0 sidenav navbar navbar-vertical fixed-start ms-2 navbar-expand-xs border-radius-xl"
    id="sidenav-main">

    <aside class="my-3 w-auto overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl"
      :class="` 
                  ${this.$store.state.layout === 'landing'
        ? 'bg-transparent shadow-none'
        : ''
      } ${this.$store.state.sidebarType}`" id="sidenav-main">


      <div class="sidenav-header">

        <i class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
          aria-hidden="true" id="iconSidenav"></i>
        <router-link class="m-0 navbar-brand" to="/">
          <img src='../../assets/img/logos/devoo.svg' class="navbar-brand-img h-100" alt="main_logo" />
          <!-- <span class="ms-2 font-weight-bold me-2 " style="font-size:30px">Devoo</span> -->
        </router-link>


      </div>
      <hr class="mt-0 horizontal dark" />
      <sidenav-list :cardBg="custom_class" />
      <!-- <sidenav-list :cardBg="custom_class" /> -->


    </aside>
    <!-- <aside :class="this.$store.state.isPinned ? 'ms-10 ps-5 ' : ' ms-6'"
      class="my-5 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl"
      id="sidenav-main" @click="toggleSidebar">

       <div class="sidenav-header">

        <i class="fas fa-2xl fa-chevron-circle-left cursor-pointer btf" height="85" width="85"></i>
        <i class="fas fa-2xl fa-chevron-circle-right cursor-pointer btf" height="85" width="85"></i>

      </div>  
    </aside> -->
  </aside>

</template>


<style scoped>
.btf {}

.navbar-vertical.navbar-expand-xs {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 15.625rem !important;
  /* overflow-y: auto; */
  padding: 0;
  box-shadow: none;
  overflow-y: hidden;
  /* Hide vertical scrollbar */
  overflow-x: hidden;
  /* Hide horizontal scrollbar */
  z-index: 0;
}

@media only screen and (max-width: 992px) {
  .navbar-vertical.navbar-expand-xs {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 78%;
    overflow-y: hidden;
    /* Hide vertical scrollbar */
    overflow-x: hidden;
    /* Hide horizontal scrollbar */
    max-width: 15.625rem !important;
    /* overflow-y: auto; */
    padding: 0;
    box-shadow: none;
    z-index: 1000;
  }
}
</style>
<script>
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/img/logo-ct-dark.png";
import logoWhite from "@/assets/img/logo-ct.png";
import { RequestApi } from '../../boot/RequestApi';
import { onMounted, } from '@vue/runtime-core';
import { mapMutations, mapActions } from "vuex";
export default {
  name: "index",
  components: {
    SidenavList
  },


  created() {
    this.minNav;
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),

    toggleSidebar() {
      // this.toggleSidebarColor("bg-white");
      this.navbarMinimize();
      // this.toggleConfigurator();
    }
  },
  setup() {

    onMounted(async () => {
      await new RequestApi().newConnexionUser();



    })
    return {}
  },
  data() {
    return {
      logo,
      logoWhite
    };
  },
  props: ["custom_class", "layout"]
};
</script>
