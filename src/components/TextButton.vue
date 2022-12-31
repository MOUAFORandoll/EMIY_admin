/* eslint-disable prettier/prettier */
<template>

  <span :class="classe" class="mouse">
    <i :class='loading ? "fa fa-spinner fa-spin" :""'></i> {{title}}
  </span>

</template>

<script>
export default {
  name: "text-button",
  props: {
    title: { type: String, },
    classe: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    // loading: function (newVal, oldVal) { // watch it
    // //
    // }
  },

  methods: {

  }, setup(props, { emit }) {
    // const emit = defineEmits()

    // emit("update:modelValue", props.loading);
    emit("update:loading", props.loading);

    return {

    }
  }

};
</script>

<style scoped>
div {
  margin-left: 40vw;
}


.fa {
  margin-left: -12px;
  margin-right: 8px;
}
</style>