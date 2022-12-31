<template>

  <select :readonly="readonly" id="mySelect" @change="as" @keyup="input"
    @input='$emit("update:modelValue", $event.target.value)' data-name='0' class="form-control form-select">


    <option disabled default value=0 selected>
      {{ placeholder }}
    </option>
    <option v-for="da in data" v-bind:value="da" :key="da.id">
      {{ da }}
    </option>
  </select>


</template>

<script>
export default {
  name: "select-comp",
  props: {

    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '0'
    }, readonly: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array[{ id: 0, label: '' }],
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    },
    modelValue: {

      type: Object,

    }, input: null
  },

  setup(props, { emit }) {
    // const emit = defineEmits()


    const as = () => {
      let vali = document.getElementById('mySelect').value
      console.log('option***************', vali);

      emit("update:modelValue", vali);
      console.log(props.modelValue);
    }
    const sd = () => {
      console.log('sdd')
    }
    return {
      sd,
      as
    };
  },
};
</script>
