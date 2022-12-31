<template>
  <nav aria-label="breadcrumb">
    <ol class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb"
      :class="`${this.$store.state.isRTL ? '' : ' me-sm-6'} ${this.$store.state.isNavFixed ? 'text-dark' : 'text-white' }`">
      <li class="text-sm breadcrumb-item">
        <!-- <a v-if="this.$store.state.isRTL" class="opacity-5 ps-2" href="#"
          :class="this.$store.state.isNavFixed ? 'text-dark' : 'text-white'">لوحات القيادة</a>
        <a v-else :class="this.$store.state.isNavFixed ? 'text-dark' : 'text-white'" class="opacity-8" href="#"></a> -->
        <router-link to="/dashboard-default" id="as"
          class="this.$store.state.isNavFixed ? 'text-dark opacity-8' : 'text-white opacity-8'">

          <span class="this.$store.state.isNavFixed ? 'text-dark opacity-8' : 'text-white opacity-8'">Home</span>
        </router-link>
      </li>

      <li class="text-sm active" :class="this.$store.state.isNavFixed ? 'text-dark' : 'text-white'" aria-current="page">
        <div class="d-flex flex-row">
          <div class="ms-2 ">
            /
          </div>
          <div class="ms-2 ">
            {{ currentPage.split('/') [1]}}
          </div>
          <div class="ms-2 " v-if="(currentPage.split('/')[2])">
            /
          </div>
          <div class="ms-2 ">
            {{ currentPage.split('/') [2]}}
          </div>
        </div>
      </li>
    </ol>
    <!-- <h6 class="mb-0 font-weight-bolder" :class="this.$store.state.isNavFixed ? 'text-dark' : 'text-white'">
      {{ currentPage }}
    </h6> -->
  </nav>
</template>

<style scoped>
#as{
  color: white;
  text-decoration:none
}
</style>


<script>
import router from '../router';

export default {
  name: "breadcrumbs",
  props: {
    currentPage: {
      required: true
    },
    textWhite: {
      type: String
    }
  },
  methods: {
    goTo(route) {


      router.push({ name: route });
    },
  }

};
</script>
