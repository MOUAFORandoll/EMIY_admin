<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1  border-bottom row justify-content-between ">
              <div class="col-lg-6 col-sm-12">
                <h4 class="card-title font-weight-bolder dark text-mobile">
                  Liste des exceptions Texte



                </h4>

              </div>
              <div class="col-lg-4 col-sm-12 mouse" align="right" v-if="showConfig">
                <p @click="showConfig = !showConfig"> Annuler
                </p>
                <!-- <p v-else> <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>
                </p> -->
              </div>
              <div class="col-lg-4 col-sm-12 mouse" align="right" v-else>
                <p @click="showNew = !showNew"> {{ !showNew ? " Ajouter Exception" : "Annuler" }}
                </p>
              </div>
            </div>
            <div v-if="!showNew">
              <div class="table-responsive mt-1" v-if="!showConfig">
                <div class="  d-flex justify-content-center pb-3" v-if="loading">

                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                </div>

                <div v-else>
                  <table class=" table">
                    <tbody>
                      <tr v-for="(esms) in lExceptionSms" :key="esms.id">
                        <td class="">


                          <div class="">
                            <p class=" mb-0 ml-2 text-xs ">Titre :</p>
                            <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                              {{
                                  esms.title
                              }}</h6>
                          </div>

                        </td>
                        <td class="">


                          <div class="">
                            <p class=" mb-0 ml-2 text-xs ">Status :</p>
                            <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                              {{
                                  esms.status
                              }}</h6>

                          </div>
                        </td>


                        <td class="text-left mouse" align='right'>
                          <div class="text-left col">
                            <Popper class="theme" placement="left">
                              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                              <template #content>
                                <div class="  d-flex justify-content-center pb-3" v-if="loadingUpdate">

                                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                                </div>
                                <div class="mouse" v-if="!loadingUpdate" @click="desableException(esms.id)">{{
                                    esms.status ==
                                      'Active' ? 'Desactiver' : 'Activer'
                                }}
                                </div>
                                <div class="mouse" v-if="!loadingUpdate" @click="select(esms)">Modifier
                                </div>


                              </template>
                            </Popper>


                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>




                </div>

              </div>
              <div v-else>

                <div class=" row d-flex justify-content-end">

                  <!--   <div class="col-lg-4 col-sm-12" align="right">
                                    <CustomButton :title="'Retour'" @click="showConfig = !showConfig"
                                        :classe="'btn btn-primary    '" />
                                </div> -->
                </div>
                <div class="row">

                  <div class="col-lg-3 col-sm-12  form-group  ">
                    <label for="nomP">Text</label>

                    <input type="text" :readonly="loadingUpdate" v-model="textSms" class="form-control"
                      placeholder="Titre Exception" id="nomP">
                  </div>



                </div>


                <CustomButton :title='" Modifier"' :loading='loadingUpdate' @update:loading="loadingUpdate = $event"
                  @click='updateException(0)' :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />






              </div>
            </div>
            <div v-else>

              <div class="ms-1 row d-flex justify-content-start">

                Ajouter une nouvelle exception
              </div>
              <div class="row">

                <div class="col-lg-3 col-sm-12  form-group  ">
                  <label for="nomP">Text</label>

                  <input type="text" :readonly="loadingUpdate" v-model="textNe" class="form-control"
                    placeholder="Titre Exception" id="nomP">
                </div>



              </div>


              <CustomButton :title='" Ajouter"' :loading='loadingUpdate' @update:loading="loadingUpdate = $event"
                @click='newException(0)' :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />





            </div>

          </div>






        </div>
        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1  border-bottom row justify-content-between ">
              <div class="col-lg-6 col-sm-12">
                <h4 class="card-title font-weight-bolder dark text-mobile">
                  Liste des exceptions SenderID



                </h4>

              </div>
              <div class="col-lg-4 col-sm-12 mouse" align="right" v-if="showConfig0">
                <p @click="showConfig0 = !showConfig0"> Annuler
                </p>
                <!-- <p v-else> <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>
                </p> -->
              </div>
              <div class="col-lg-4 col-sm-12 mouse" align="right" v-else>
                <p @click="showNew0 = !showNew0">{{ !showNew0 ? " Ajouter Exception de senderId" : "Annuler" }}
                </p>
              </div>
            </div>
            <div v-if="!showNew0">
              <div class="table-responsive mt-1" v-if="!showConfig0">
                <div class="  d-flex justify-content-center pb-3" v-if="loading">

                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                </div>

                <div v-else>
                  <table class=" table">
                    <tbody>
                      <tr v-for="(esms) in lExceptionSenderId" :key="esms.id">
                        <td class="">


                          <div class="">
                            <p class=" mb-0 ml-2 text-xs ">Titre :</p>
                            <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                              {{
                                  esms.title
                              }}</h6>
                          </div>

                        </td>
                        <td class="">


                          <div class="">
                            <p class=" mb-0 ml-2 text-xs ">Status :</p>
                            <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                              {{
                                  esms.status
                              }}</h6>

                          </div>
                        </td>


                        <td class="text-left mouse" align='right'>
                          <div class="text-left col">
                            <Popper class="theme" placement="left">
                              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                              <template #content>
                                <div class="  d-flex justify-content-center pb-3" v-if="loadingUpdate">

                                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                                </div>
                                <div class="mouse" v-if="!loadingUpdate" @click="desableException(esms.id)">{{
                                    esms.status ==
                                      'Active' ? 'Desactiver' : 'Activer'
                                }}
                                </div>
                                <div class="mouse" v-if="!loadingUpdate" @click="select0(esms)">Modifier
                                </div>


                              </template>
                            </Popper>


                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>




                </div>

              </div>
              <div v-else>

                <div class=" row d-flex justify-content-end">

                  <!--   <div class="col-lg-4 col-sm-12" align="right">
                                      <CustomButton :title="'Retour'" @click="showConfig = !showConfig"
                                          :classe="'btn btn-primary    '" />
                                  </div> -->
                </div>
                <div class="row">

                  <div class="col-lg-3 col-sm-12  form-group  ">
                    <label for="nomP">SenderId</label>

                    <input type="text" :readonly="loadingUpdate" v-model="textSms" class="form-control"
                      placeholder="Titre Exception" id="nomP">
                  </div>



                </div>


                <CustomButton :title='" Modifier"' :loading='loadingUpdate' @update:loading="loadingUpdate = $event"
                  @click='updateException(1)' :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />






              </div>
            </div>
            <div v-else>

              <div class="ms-1 row d-flex justify-content-start">

                Ajouter une nouvelle exception
              </div>
              <div class="row">

                <div class="col-lg-3 col-sm-12  form-group  ">
                  <label for="nomP">SenderId</label>

                  <input type="text" :readonly="loadingUpdate" v-model="textNe" class="form-control"
                    placeholder="SenderId Exception" id="nomP">
                </div>



              </div>


              <CustomButton :title='" Ajouter"' :loading='loadingUpdate' @update:loading="loadingUpdate = $event"
                @click='newException(1)' :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />





            </div>

          </div>






        </div>
      </div>

    </div>
  </div>
  <!-- <vue-final-modal v-modelf="showModalCalendar" style="" classes="modal-container" content-class="modal-content">

    </vue-final-modal> -->
</template>

<style scoped>
.nav-item {
  list-style: none;
}

.plus {
  padding-bottom: 10px;
  margin-left: 1.4rem;
  width: 3%;
  justify-content: center;
  color: blue;
  font-size: 30px;
  font-weight: bolder;

  align-items: center;

  position: absolute;
  left: 10px;
  top: 50px;
  z-index: 0;

}

.mouse:hover {
  cursor: pointer;
}

i:hover {
  cursor: pointer
}

.mouse:hover {
  cursor: pointer
}


.theme {
  --popper-theme-background-color: rgb(255, 255, 255);
  --popper-theme-background-color-hover: rgb(255, 255, 255);
  --popper-theme-text-color: #040404;
  --popper-theme-border-width: 2px;
  --popper-theme-border-style: solid;
  --popper-theme-border-color: rgb(224, 212, 212);
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 15px;

}

#menu {
  background-color: rgb(236, 243, 236);
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px
}

/* article {
      width: 20%;
     padding: 0px;
      margin:0px; 
      border:1px solid rgb(204, 205, 206);
      float: left;
    }
   */

#title {
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid black;
}

.scales {
  padding-right: 5px;
}

input[type=checkbox] {
  position: relative;
  cursor: pointer;
}

input[type=checkbox]:before {
  content: "";
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  border: 2px solid #0C6DE4;
  border-radius: 3px;
  background-color: white;
}

input[type=checkbox]:checked:after {
  content: "";
  display: block;
  width: 5px;
  height: 10px;
  border: solid rgb(2, 133, 138);
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  top: 2px;
  left: 6px;
}

li:hover {
  cursor: pointer;
}

li:active {
  color: rgb(44, 85, 208);
}

ul {
  list-style-type: "→";
}
</style>
<script>
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
import { createToaster } from "@meforma/vue-toaster";
// import ArgonInput from "../../components/ArgonInput.vue";
// import VCalendar from 'v-calendar';
import Popper from "vue3-popper";

// import { formatDate } from '../../boot/formatDate';
// import { FormatData } from '../../boot/FormatData';
import VueCookies from 'vue-cookies';
import CustomButton from '../../components/CustomButton.vue';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
// import { VueFinalModal } from 'vue-final-modal'

// import { BIcon } from 'bootstrap-vue' 
export default {
  name: "Exception",
  components: {
    CustomButton, Popper
  },


  setup() {

    let toast = createToaster();
    const loadingUpdate = ref(false);
    const loading = ref(true);
    const showConfig = ref(false);
    const showConfig0 = ref(false);
    const showNew = ref(false);
    const showNew0 = ref(false);
    let lExceptionSms = ref([])
    let lExceptionSenderId = ref([])
    let ExceptionSmsSel = ref(null)
    let textSms = ref('')
    let textNe = ref('')
    onMounted(async () => {
      await getException();
    });

    function select(T) {
      //  
      ExceptionSmsSel.value = T;
      textSms.value = T.title;
      showConfig.value = true;
    }
    function select0(T) {
      //  
      ExceptionSmsSel.value = T;
      textSms.value = T.title;
      showConfig0.value = true;
    }

    async function getException() {
      const response = await new RequestApi().getExceptionAction();
      if (response.status) {

        lExceptionSms.value = response.data.esms;
        lExceptionSenderId.value = response.data.esenserId;

        loading.value = false;
        console.log(lExceptionSms.value)
      }
      else {
        loading.value = false;

        toast.error(`Erreur`, {
          // override the global option
          position: "bottom"
        })
      }
    }

    const desableException = async (id) => {

      let data =
      {
        keySecret: VueCookies.get('keySecret'),

        idException: id

      }
        ;
      loadingUpdate.value = true;

      const response1 = await new RequestApi().desableExceptionAction(data);

      if (response1.status) {
        lExceptionSms.value = response1.data.esms;
        lExceptionSenderId.value = response1.data.esenserId;
        toast.success(`Mise a Jour effectuee`, {
          // override the global option
          position: "bottom"
        });
        loadingUpdate.value = false;
        showConfig.value = false
        // getException()
      } else {
        toast.error(`Une erreur est survenu lors de l'operation.`, {
          // override the global option
          position: "bottom"
        });

        loadingUpdate.value = false;

      }
      loadingUpdate.value = false;

    };
    const updateException = async (type) => {

      let data =
      {
        keySecret: VueCookies.get('keySecret'),

        idException: ExceptionSmsSel.value.id,
        typeE: type == 0 ? 'eSms' : 'eSenderId',

        data: textSms.value

      }
        ;
      loadingUpdate.value = true;

      const response1 = await new RequestApi().updateExceptionAction(data);

      if (response1.status) {
        lExceptionSms.value = response1.data.esms;
        lExceptionSenderId.value = response1.data.esenserId;

        toast.success(`Mise a Jour effectuee`, {
          // override the global option
          position: "bottom"
        });
        loadingUpdate.value = false;
        showConfig.value = false;
        showConfig0.value = false

        // getException()
      } else {
        toast.error(`Une erreur est survenu lors de l'operation.`, {
          // override the global option
          position: "bottom"
        });

        loadingUpdate.value = false;

      }
      loadingUpdate.value = false;

    };
    const newException = async (type) => {

      let data =
      {
        keySecret: VueCookies.get('keySecret'),

        typeE: type == 0 ? 'eSms' : 'eSenderId',
        data: textNe.value

      }
        ;
      loadingUpdate.value = true;

      const response1 = await new RequestApi().newExceptionAction(data);

      if (response1.status) {
        lExceptionSms.value = response1.data.esms;
        lExceptionSenderId.value = response1.data.esenserId;

        toast.success(`Ajout effectuee`, {
          // override the global option
          position: "bottom"
        });
        loadingUpdate.value = false;
        showConfig.value = false
        showNew.value = false
        showConfig0.value = false
        showNew0.value = false
        // getException()showNew = !showNew
      } else {
        toast.error(`Une erreur est survenu lors de l'operation.`, {
          // override the global option
          position: "bottom"
        });

        loadingUpdate.value = false;

      }
      loadingUpdate.value = false;

    };

    return {
      select, select0, newException, textNe, showNew, showNew0,
      textSms, showConfig0, lExceptionSenderId,
      loadingUpdate, desableException, lExceptionSms, loading, showConfig, updateException
    };
  },
}
</script>
