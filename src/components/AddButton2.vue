/* eslint-disable prettier/prettier */
<template>

  <div class="  ">
    <!-- <div> <i class="fa fa-spinner fa-spin  " v-if="loading"></i>
    </div>
 -->
    <div class="plus" v-if="!loading">+

    </div>


  </div>

</template>

<style scoped>
.plus {
  font-size: 50px;
  font-weight: bolder;
  color: #5e72e4 !important;
}

.add {
  border: 1px solid #5e72e4;
  width: 10px;

}
</style>


<script>
export default {
  name: "add-button2",
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