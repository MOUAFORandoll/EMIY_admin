<template>
  <div class="form-group">

    <input :placeholder="placeholder" @keyup='verif($event.target.value)' class="form-control" :value='modelValue'
      @input='$emit("update:modelValue", $event.target.value)' type="text">


  </div>
</template>

<script>
import { FormatData } from '../boot/FormatData';

export default {
  name: "argon-input-vitrine",
  props: {
    placeholder: String,
    length, modelValue: String,

  },
  methods: {
    getClasses: (size, valid) => {
      let sizeValue, isValidValue;

      sizeValue = size ? `form-control-${size}` : null;

      isValidValue = valid ? `${valid}` : "invalid";

      return `${sizeValue} ${isValidValue}`;
    },
    getIcon: (icon) => (icon ? icon : null),
    hasIcon: (icon) => (icon ? "input-group" : null),
  },
  setup(props, { emit }) {
    // const emit = defineEmits()
    const verif = (data) => {

      data = new FormatData().verifTextLength(data, props.length)
      emit("update:modelValue", data);
      // console.log('yyy', data)

    }
    return {

      verif
    };
  },
};
</script>
