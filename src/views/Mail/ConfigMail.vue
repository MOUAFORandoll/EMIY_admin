<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1  border-bottom row justify-content-between ">
              <div class="col-lg-6 col-sm-12">
                <h4 class="card-title font-weight-bolder dark text-mobile">


                  {{ showConfig ? "Modifiez " :
                      "Configuration service mail"
                  
                  
                  
                  }}

                </h4>

              </div>
              <div class="col-lg-4 col-sm-12 mouse  text-mobile2" align="right" v-if="showConfig">
                <p @click="showConfig = !showConfig"> Annuler
                </p>
                <!-- <p v-else> <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>
                                </p> -->
              </div>
              <div class="col-lg-4 col-sm-12 mouse  text-mobile2" align="right" v-else>
                <p @click="showNew = !showNew"> {{ !showNew ? " Ajouter Configuration" : "Annuler" }}
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
                      <tr v-for="(config) in lConfigMail" :key="config.id">
                        <td class="">


                          <div class="">
                            <p class=" mb-0 ml-2 text-xs ">usermail :</p>
                            <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                              {{
                                  config.usermail
                              }}</h6>
                          </div>

                        </td>
                        <td class="">


                          <div class="">
                            <p class=" mb-0 ml-2 text-xs ">Password :</p>
                            <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                              *****</h6>
                          </div>

                        </td>
                        <td class="mobile">


                          <div class="">
                            <p class=" mb-0 ml-2 text-xs ">DSN :</p>
                            <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                              {{
                                  config.dsn
                              }}</h6>
                          </div>

                        </td>
                        <td class="mobile">


                          <div class="">
                            <p class=" mb-0 ml-2 text-xs ">Port :</p>
                            <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                              {{
                                  config.port
                              }}</h6>
                          </div>

                        </td>
                        <td class="">


                          <div class="">
                            <p class=" mb-0 ml-2 text-xs ">Status :</p>
                            <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                              {{
                                  config.status
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
                                <div class="mouse" v-if="!loadingUpdate && !config.status"
                                  @click="activateConfig(config.id)">
                                  Activer

                                </div>
                                <div class="mouse" v-if="!loadingUpdate" @click="select(config)">Modifier
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




                  <div class="col-lg-6 col-sm-12  form-group  ">
                    <label for="nomP">Adresse du serveur SMTP</label>

                    <argon-input :readonly='loadingUpdate' type="text" v-model="dsn"
                      placeholder="Exemple : smtp.example.com" aria-label="dsn" />
                  </div>
                  <div class="col-lg-6 col-sm-12  form-group  ">
                    <label for="nomP">Port</label>

                    <argon-input :readonly='loadingUpdate' type="text" v-model="port" placeholder=" Port , Exple : 447"
                      aria-label="Port , Exple : 447" />
                  </div>
                  <div class="col-lg-6 col-sm-12  form-group  ">
                    <label for="nomP">adresse utilisateur</label>

                    <argon-input :readonly='loadingUpdate' type="text" v-model="usermail"
                      placeholder="admin@prikado.com" aria-label="admin@prikado.com" />
                  </div>
                  <div class="col-lg-6 col-sm-12  form-group  ">
                    <label for="nomP">Mot de passe utilisateur</label>

                    <argon-input :readonly='loadingUpdate' type="text" v-model="userpassword" placeholder="admin "
                      aria-label=" " />
                  </div>

                </div>



                <CustomButton :title='" Modifier"' :loading='loadingUpdate' @update:loading="loadingUpdate = $event"
                  @click='updateConfig' :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />






              </div>
            </div>
            <div v-else>


              <div class=" row d-flex justify-content-end">




                <div class="col-lg-6 col-sm-12  form-group  ">
                  <label for="nomP">Adresse du serveur SMTP</label>

                  <argon-input :readonly='loadingUpdate' type="text" v-model="dsn"
                    placeholder="Exemple : smtp.example.com" aria-label="dsn" />
                </div>
                <div class="col-lg-6 col-sm-12  form-group  ">
                  <label for="nomP">Port</label>

                  <argon-input :readonly='loadingUpdate' type="text" v-model="port" placeholder=" Port , Exple : 447"
                    aria-label="Port , Exple : 447" />
                </div>
                <div class="col-lg-6 col-sm-12  form-group  ">
                  <label for="nomP">adresse utilisateur</label>

                  <argon-input :readonly='loadingUpdate' type="text" v-model="usermail" placeholder="admin@prikado.com"
                    aria-label="admin@prikado.com" />
                </div>
                <div class="col-lg-6 col-sm-12  form-group  ">
                  <label for="nomP">Mot de passe utilisateur</label>

                  <argon-input :readonly='loadingUpdate' type="text" v-model="userpassword" placeholder="admin "
                    aria-label=" " />
                </div>

              </div>


              <CustomButton :title='" Configurer"' :loading='loadingUpdate' @update:loading="loadingUpdate = $event"
                @click='newConfig' :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />



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
  name: "Mail-config",
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
    let lConfigMail = ref([])
    onMounted(async () => {
      await getConfigMail();
    });

    function select(T) {
      idC.value = T.id

      showConfig.value = true;
      idC.value = T.id
      dsn.value = T.dsn
      port.value = T.port
      usermail.value = T.usermail
      userpassword.value = T.userpassword
    }

    async function getConfigMail() {
      const response = await new RequestApi().getConfigMailAction();
      if (response.status) {

        lConfigMail.value = response.data;

        loading.value = false;
        console.log(lConfigMail.value)
      }
      else {
        loading.value = false;

        toast.error(`Erreur`, {
          // override the global option
          position: "bottom"
        })
      }
    }

    const activateConfig = async (id) => {

      let data =
      {
        keySecret: VueCookies.get('keySecret'),

        idConfig: id

      }
        ;
      loadingUpdate.value = true;

      const response1 = await new RequestApi().activateConfigAction(data);

      if (response1.status) {
        lConfigMail.value = response1.data;
        delette()
        toast.success(`Mise a Jour effectuee`, {
          // override the global option
          position: "bottom"
        });
        loadingUpdate.value = false;
        showConfig.value = false
        // getConfigMail()
      } else {
        toast.error(`Une erreur est survenu lors de l'operation.`, {
          // override the global option
          position: "bottom"
        });

        loadingUpdate.value = false;

      }
      loadingUpdate.value = false;

    };
    let dsn = ref('');
    let port = ref('');
    let usermail = ref('');
    let userpassword = ref('');
    let idC = ref('');

    const updateConfig = async () => {

      let data =
      {
        keySecret: VueCookies.get('keySecret'),

        id: idC.value,
        dsn: dsn.value,
        port: port.value,
        usermail: usermail.value,
        userpassword: userpassword.value,

      }
        ;
      loadingUpdate.value = true;

      const response1 = await new RequestApi().updateConfgiMailAction(data);

      if (response1.status) {
        lConfigMail.value = response1.data;

        delette()
        toast.success(`Mise a Jour effectuee`, {
          // override the global option
          position: "bottom"
        });
        loadingUpdate.value = false;
        showConfig.value = false;
        showConfig0.value = false

        // getConfigMail()
      } else {
        toast.error(`Une erreur est survenu lors de l'operation.`, {
          // override the global option
          position: "bottom"
        });

        loadingUpdate.value = false;

      }
      loadingUpdate.value = false;

    };

    const delette = () => {
      dsn.value = ''
      port.value = ''
      usermail.value = ''
      userpassword.value = ''
    }
    const newConfig = async () => {

      let data =
      {
        keySecret: VueCookies.get('keySecret'),


        dsn: dsn.value,
        port: port.value,
        usermail: usermail.value,
        userpassword: userpassword.value,

      }
        ;
      loadingUpdate.value = true;

      const response1 = await new RequestApi().newConfigAction(data);

      if (response1.status) {
        lConfigMail.value = response1.data;
        delette()
        toast.success(`Ajout effectuee`, {
          // override the global option
          position: "bottom"
        });
        loadingUpdate.value = false;
        showConfig.value = false
        showNew.value = false
        showConfig0.value = false
        showNew0.value = false
        // getConfigMail()showNew = !showNew
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

      dsn,
      port,
      usermail,
      userpassword,
      idC,
      select, newConfig, showNew, showNew0,
      showConfig0,
      loadingUpdate, activateConfig, lConfigMail, loading, showConfig, updateConfig
    };
  },
}
</script>
