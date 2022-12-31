<template>
  <div class="form-group" :class="center == 1 ? 'mx-auto' : ''">
    <div :class="hasIcon(icon)">
      <span v-if="iconDir === 'left'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
      <input :type="type" :multiple='multiple' :readonly="readonly" :accept="accept" @keyup='verif($event.target.value)'
        @click.right.prevent @paste.prevent class="form-control" :class="getClasses(size, valid)" :name="name" :id="id"
        :placeholder="placeholder" :isRequired="isRequired" :value='modelValue'
        @input='$emit("update:modelValue", $event.target.value)' />
      <span v-if="iconDir === 'right'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { FormatData } from '../boot/FormatData';

export default {
  name: "argon-input",
  props: {
    size: {
      type: String,
      default: "",
    }, accept: {
      type: String,
      default: "default",
    },
    valid: {
      type: Boolean,
      default: false,
    }, readonly: {
      type: Boolean,
      default: false,
    }, center: {
      type: String,
      default: '0',
    }, multiple: {
      type: Boolean,
      default: false,
    },

    icon: String,
    iconDir: String,
    name: String,
    id: String,
    placeholder: String,
    type: String,
    isRequired: Boolean, modelValue: String
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
      if (props.type == 'phone') {
        data = new FormatData().verifNumber(data)
        emit("update:modelValue", data);
        // <!-- console.log('yyy', data) -->

      }
      // emit("update:modelValue", data);
    }
    return {

      verif
    };
  },
};
</script>
