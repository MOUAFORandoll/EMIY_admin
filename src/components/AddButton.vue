/* eslint-disable prettier/prettier */
<template>

  <span class="  mouse  add ms-0  justify-content-center">
    <span> <i class="fa fa-spinner fa-spin  " style="
    margin-top: 35%;
    margin-left: 5%;
" v-if="loading"></i>
    </span>

    <p class="plus" v-if="!loading">+

    </p>
    <p v-if="!loading">
      Ajouter un autre

    </p>

  </span>

</template>

<style scoped>
.plus {
  font-size: 50px;
  font-weight: bolder;
  color: #5e72e4 !important;
}

.add {
  padding-bottom: 5px;
  height: 130px;
  width: 155px;
  align-content: center;
  text-align: center;
  border: 1px solid #5e72e4;

}
</style>


<script>
export default {
  name: "add-button",
  props: {
    title: { type: String, },

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