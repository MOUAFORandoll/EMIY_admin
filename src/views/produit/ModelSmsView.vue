<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1  border-bottom row justify-content-between ">
              <div class="col-lg-6 col-sm-12">
                <h4 class="card-title font-weight-bolder dark text-mobile">
                  Liste des models sms



                </h4>

              </div>
              <div class="col-lg-4 col-sm-12 mouse" align="right" v-if="showConfig">
                <p @click="showConfig = !showConfig"> Annuler
                </p>
                <!-- <p v-else> <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>
                </p> -->
              </div>
              <div class="col-lg-4 col-sm-12 text-mobile2 mouse" align="right" v-else>
                <p @click="showNew = !showNew"> {{ !showNew ? " Ajouter un model" : "Annuler" }}
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
                      <tr v-for="(model) in lModelSms" :key="model.id">
                        <td class="">


                          <div class="">
                            <p class=" mb-0 ml-2 text-xs ">Titre :</p>
                            <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                              {{
                                  model.title
                              }}</h6>
                          </div>

                        </td>
                        <td class="mobile">


                          <div class="">
                            <p class=" mb-0 ml-2 text-xs ">Mot cle :</p>
                            <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                              {{
                                  model.motcle
                              }}</h6>
                          </div>

                        </td>
                        <td class="">


                          <div class="col2">
                            <p class=" mb-0 ml-2 text-xs ">Message :</p>
                            <h6 class=" mb-0 ml-2 text-sm message font-weight-bolder text-dark">
                              {{
                                  model.message
                              }}</h6>
                          </div>

                        </td>
                        <td class="mobile">


                          <div class="">
                            <p class=" mb-0 ml-2 text-xs ">Date :</p>
                            <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                              {{
                                  model.date
                              }}</h6>

                          </div>
                        </td>
                        <td class="mobile">


                          <div class="">
                            <p class=" mb-0 ml-2 text-xs ">Status :</p>
                            <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                              {{
                                  model.status
                              }}</h6>

                          </div>
                        </td>


                        <td class="text-left mouse mobile" align='right'>
                          <div class="text-left col">
                            <Popper class="theme" placement="left">
                              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                              <template #content>
                                <div class="  d-flex justify-content-center pb-3" v-if="loadingUpdate">

                                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                                </div>
                                <div class="mouse text-decoration-none text-dark" v-if="!loadingUpdate"
                                  @click="saveM(model.message)">
                                  <router-link id='decnone' to="/Sms/Nouveau"
                                    class="text-decoration-none text-dark">Utiliser<i class="fa fa-share btns"
                                      aria-hidden="true"></i>
                                  </router-link>
                                </div>


                                <div class="mouse" v-if="!loadingUpdate" @click="select(model)">Modifier
                                </div>
                                <div class="mouse" v-if="!loadingUpdate" @click="desableModel(model.id)">{{
                                    model.status ==
                                      'Active' ? 'Desactiver' : 'Activer'
                                }}
                                </div>
                                <div class="mouse" v-if="!loadingUpdate" @click="deleteModel(model.id)">Supprimer
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

                  <div class="col-lg-6 col-sm-12  form-group  ">
                    <label for="nomP">Titre</label>

                    <argon-input :readonly='loadingUpdate' type="text" v-model="titre" placeholder="titre"
                      aria-label="titre" />
                  </div>
                  <div class="col-lg-6  col-sm-12  form-group  ">
                    <label for="nomP">Mot clef</label>

                    <argon-input :readonly='loadingUpdate' type="text" v-model="motCle" placeholder="Mot clef"
                      aria-label="Mot clef" />
                  </div>
                  <div class="col-lg-12 col-sm-12  form-group  ">
                    <label for="nomP">Message</label>

                    <argon-area length="4000" :readonly='loadingUpdate' type="text" v-model="message"
                      placeholder="Message" aria-label="Message" />
                  </div>




                </div>


                <CustomButton :title='" Modifier"' :loading='loadingUpdate' @update:loading="loadingUpdate = $event"
                  @click='updateModel(0)' :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />






              </div>
            </div>
            <div v-else>

              <div class="ms-1 row d-flex justify-content-start">

                Ajouter un nouveau model d'sms
              </div>
              <div class="row">

                <div class="col-lg-6 col-sm-12  form-group  ">
                  <label for="nomP">Titre</label>

                  <argon-input :readonly='loadingUpdate' type="text" v-model="titre" placeholder="titre"
                    aria-label="titre" />
                </div>
                <div class="col-lg-6 col-sm-12  form-group  ">
                  <label for="nomP">Mot clef(renseignez plusieurs mots clé en séparant par des virgules (,))</label>

                  <argon-input :readonly='loadingUpdate' type="text" v-model="motCle" placeholder="Mot clef"
                    aria-label="Mot clef" />
                </div>
                <div class="col-lg-12 col-sm-12  form-group  ">
                  <label for="nomP">Message</label>

                  <argon-area length="4000" :see="false" :readonly='loadingUpdate' type="text" v-model="message"
                    placeholder="Message" aria-label="Message" />
                </div>


              </div>


              <CustomButton :title='" Ajouter"' :loading='loadingUpdate' @update:loading="loadingUpdate = $event"
                @click='newModelSms' :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />




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
.message {
  /* display: inline-block;
    max-width: 30%;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis; */
  width: 220px;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;

  text-overflow: ellipsis;
}

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
  name: "ModelSmsView",
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
    let lModelSms = ref([])
    let ModelSmsSel = ref(null)
    let titre = ref('')
    let motCle = ref('')
    let message = ref('')
    onMounted(async () => {
      await getModel();
    });

    function select(T) {
      //  
      ModelSmsSel.value = T;
      titre.value = T.title;
      motCle.value = T.motCle;
      message.value = T.message;
      showConfig.value = true;
    }
    async function getModel() {
      const response = await new RequestApi().getModelAction();
      if (response.status) {

        lModelSms.value = response.data;

        loading.value = false;
      }
      else {
        loading.value = false;

        if (response.aff) {
          toast.error(`Une erreur s'est produite`, {
            // override the global option
            position: "bottom"
          });
        }
      }
    }

    const deleteModel = async (id) => {

      let data =
      {
        keySecret: VueCookies.get('keySecret'),

        idModel: id

      }
        ;
      loadingUpdate.value = true;

      const response1 = await new RequestApi().deleteModelAction(data);

      if (response1.status) {
        lModelSms.value = response1.data;
        toast.success(`Suppression effectuee`, {
          // override the global option
          position: "bottom"
        });
        loadingUpdate.value = false;
        showConfig.value = false
        // getModel()
      } else {
        if (response1.aff) {
          toast.error(`Une erreur s'est produite`, {
            // override the global option
            position: "bottom"
          });
        }

        loadingUpdate.value = false;

      }
      loadingUpdate.value = false;

    };
    const desableModel = async (id) => {

      let data =
      {
        keySecret: VueCookies.get('keySecret'),

        idModel: id

      }
        ;
      loadingUpdate.value = true;

      const response1 = await new RequestApi().desableModelAction(data);

      if (response1.status) {
        lModelSms.value = response1.data;
        toast.success(`Mise a Jour effectuee`, {
          // override the global option
          position: "bottom"
        });
        loadingUpdate.value = false;
        showConfig.value = false
        // getModel()
      } else {
        if (response1.aff) {
          toast.error(`Une erreur s'est produite`, {
            // override the global option
            position: "bottom"
          });
        }

        loadingUpdate.value = false;

      }
      loadingUpdate.value = false;

    };
    const updateModel = async () => {

      let data =
      {

        idModel: ModelSmsSel.value.id,
        keySecret: VueCookies.get('keySecret'),

        titre: titre.value,
        message: message.value,

        motCle: motCle.value,

      }
        ;
      loadingUpdate.value = true;

      const response1 = await new RequestApi().updateModelAction(data);

      if (response1.status) {
        lModelSms.value = response1.data;

        toast.success(`Mise a Jour effectuee`, {
          // override the global option
          position: "bottom"
        });
        loadingUpdate.value = false;
        showConfig.value = false;
        showConfig0.value = false

        titre.value = ''
        message.value = ''

        motCle.value = ''
        // getModel()
      } else {
        if (response1.aff) {
          toast.error(`Une erreur s'est produite`, {
            // override the global option
            position: "bottom"
          });
        }

        loadingUpdate.value = false;

      }
      loadingUpdate.value = false;

    };
    function saveM(M) {
      VueCookies.set('message', null)
      // VueCookies.set('senderId', '')
      VueCookies.set('message', M)
    }
    const newModelSms = async () => {

      let data =
      {
        keySecret: VueCookies.get('keySecret'),

        titre: titre.value,
        message: message.value,

        motCle: motCle.value,
      }
        ;
      loadingUpdate.value = true;

      const response1 = await new RequestApi().newModelSmsAction(data);

      if (response1.status) {
        lModelSms.value = response1.data;

        toast.success(`Ajout effectuee`, {
          // override the global option
          position: "bottom"
        });
        loadingUpdate.value = false;
        showConfig.value = false
        showNew.value = false
        showConfig0.value = false
        showNew0.value = false
        titre.value = '';
        message.value = '';

        motCle.value = ''
        // getModel()showNew = !showNew
      } else {
        if (response1.aff) {
          toast.error(`Une erreur s'est produite`, {
            // override the global option
            position: "bottom"
          });
        }

        loadingUpdate.value = false;

      }
      loadingUpdate.value = false;

    };

    return {
      select, saveM, newModelSms, motCle, showNew, showNew0, message,
      titre, showConfig0, deleteModel,
      loadingUpdate, desableModel, lModelSms, loading, showConfig, updateModel
    };
  },
}
</script>
