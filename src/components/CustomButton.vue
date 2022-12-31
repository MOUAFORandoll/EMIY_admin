/* eslint-disable prettier/prettier */
<template>

  <button :class="classe">
    <i :class='loading ? "ms-1 fa fa-spinner fa-spin" : ""'></i> {{ title }}
  </button>

</template>

<script>
export default {
  name: "custom-buttoln",
  props: {
    title: { type: String, },
    classe: {
      type: String,
      default: 'btn',
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