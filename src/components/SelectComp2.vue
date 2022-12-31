<template>

  <select :readonly="readonly" :id="'mySelect' + placeholder" @change="as" @keyup="input"
    @input='$emit("update:modelValue", $event.target.value)' class="form-control form-select">


    <option disabled default value=0 selected>
      {{ placeholder }}
    </option>
    <option v-for="da in data" v-bind:value="da.id" :data-name='type == "0" ? da.label : da.nom ?? ""'
      :data-prix="type == 2 ? da.taux : da.prix" :key="da.id">
      {{ type == "0" ? da.label : da.nom }}
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
      let idt = document.getElementById('mySelect' + props.placeholder).value
      console.log('change');
      var e = document.getElementById('mySelect' + props.placeholder);
      var option = e.options[e.selectedIndex];
      console.log(option.getAttribute("data-prix"));
      emit("update:modelValue", { 'id': isNaN(parseInt(idt)) ? idt : parseInt(idt), 'label': option.getAttribute("data-name"), 'prix': option.getAttribute("data-prix"), 'taux': option.getAttribute("data-prix"), });
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
