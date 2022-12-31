<template>
  <div class="nav-link h"  v-bind="$attrs">
    <div
      class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center"
    >
      <slot name="icon"></slot>
    </div>
    <span
      class="nav-link-text"
      :class="this.$store.state.isRTL ? ' me-1' : 'ms-1'"
      >{{ navText }}</span
    >
  </div>
</template>

<style scoped>
.h:hover{
cursor:pointer
}
</style>

<script>
export default {
  name: "sidenav-item-btn",
  props: {
    url: {
      type: String,
      default:''
    },
    navText: {
      type: String,
      required: true
    }
  }
};
</script>
