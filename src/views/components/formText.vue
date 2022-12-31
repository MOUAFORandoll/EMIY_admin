<template>

  <div class=" form-group  ">
    <label for="inputState">{{ label }}</label>

    <input :type="type" :readonly="readonly" @keyup='verif($event.target.value)' @change='verif($event.target.value)'
      @keydown='verif($event.target.value)' :value='modelValue' @input='$emit("update:modelValue", $event.target.value)'
      class="form-control" :placeholder="placeholder">
  </div>
</template>

<script>

export default {
  name: "formPassword",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true
    }, readonly: {
      type: Boolean,
      default: false,
    },
    modelValue: String
  },

  setup(props, { emit }) {
    // const emit = defineEmits()
    const verif = (data) => {

      emit("update:modelValue", data);
      // console.log('yyy', data)


    }
    return {

      verif
    };
  },
};
</script>
