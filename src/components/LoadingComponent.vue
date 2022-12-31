/* eslint-disable prettier/prettier */
<template>
 
<div v-show="loading"  class="overflow-auto">

  <vue-final-modal v-model="load" class="overflow-auto"  classes="modal-container" content-class="modal-content">

            <span class="">En cours</span>
            <div class="modal__content center ">
                <i class="fa fa-spinner fa-spin"></i>
            </div>
           
        </vue-final-modal>
        </div>
</template>

<script>

  import { VueFinalModal } from 'vue-final-modal'

export default {
  name: "loading-component",   components: {
   VueFinalModal
     
    },
  props: {
     
    loading: {
      type: Boolean,
      default:false
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

    emit("update:modelValue", 'data');

    return {
      load: true

    }
  }
  
};
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;

  overflow-y: auto;

  align-items: center;
  width: auto;
  /* padding-left:auto */
}

::v-deep .modal-content {
  width: auto;
  display: flex;
   justify-content: center;
  overflow-y: auto;


  align-items: center;
  flex-direction: column;
  max-height: 90%;
  margin: 0em 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
} 
.modal__content {
  /* flex-grow: 1; */
  overflow-y: auto;
}
 

.dark-mode div .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
} 
</style>

