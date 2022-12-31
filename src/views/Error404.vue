<template>
  <div class="fullscreen bg-blue  text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>
      
      <router-link to="/dashboard-default" class="nav-link">
        <div class="btn btn-primary" color="white" text-color="blue" unelevated to="/dashboard-default" label="Go Home"
          no-caps> 
        Go Home
    </div>
    </router-link>

  </div>
  </div>
</template>

<script  >
import { defineComponent } from 'vue';
const body = document.getElementsByTagName("body")[0];
 
export default defineComponent({
  name: 'Error404',

  components: {
   


  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
});
</script>
