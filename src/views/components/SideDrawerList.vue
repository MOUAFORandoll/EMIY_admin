<template>


  <!-- 
Bloc Configuration -->
  <div class="collapse navbar-collapse w-auto h-auto h-50" id="side-drawer-collapse-main">
    <ul class="navbar-nav ps-3" style='display:block;'>
      <li class="nav-item ">
        <side-drawer-item :navText="  'Retour'" listItem= "['title','as', 'action' ]" action= "['console.log(`ddsdds`)','as', 'action' ]">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </side-drawer-item>
      </li>
      <li class="nav-item">
        <side-drawer-item :navText=" 'Commission '">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </side-drawer-item>
      </li>
      <li class="nav-item">
        <side-drawer-item :navText="  'Exception'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </side-drawer-item>
      </li>


    </ul>
  </div>


</template>
<script>
import SideDrawerItem from "./SideDrawerItem.vue";
export default {
  name: "SideDrawerList",
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
    SideDrawerItem,

  },
  methods: {


  }
};
</script>
