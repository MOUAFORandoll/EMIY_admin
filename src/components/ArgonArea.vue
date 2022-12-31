<template>
  <div class="form-group">

    <textarea :rows="rows" :readonly="readonly" @keyup='verif($event.target.value)' class="form-control" :id="id"
      :placeholder="placeholder" :value='modelValue'
      @input='$emit("update:modelValue", $event.target.value)'></textarea>
    <label class="font-weight-normal text-danger" v-if="see" for="nomP">il vous reste {{
        length - ((modelValue != null && modelValue != '')
    ? modelValue.split('').length : 0)
    > 0 ? length - ((modelValue != null && modelValue != '')
      ? modelValue.split('').length : 0) : 0
    }}
      caracteres</label>


  </div>
</template>

<script>
import { FormatData } from '../boot/FormatData';

export default {
  name: "argon-area",
  props: {

    length,
    id: String,
    placeholder: String,
    type: String,
    isRequired: Boolean, modelValue: String,
    rows: {
      default: 4
    }, readonly: {
      type: Boolean,
      default: false,
    }, see: {
      type: Boolean,
      default: true,
    },
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
      if (props.see) {
        data = new FormatData().verifTextLength(data, props.length)
        emit("update:modelValue", data);
        // console.log('yyy', data)
      }
    }
    return {

      verif
    };
  },
};
</script>
