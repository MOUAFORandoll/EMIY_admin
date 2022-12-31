<template>
  <div class="py-4 container-fluid w-100" style="border: none;">
    <div class=" row">
      <div class="col-12">
        <div class="" style="border: none;">





          <div class="card-body  " style="border: none;">


            <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">



              <div class="card ps-3 mb-lg-0 mb-4 ">
                <div class="p-2  pb-2 border-bottom row justify-content-end me-3 mt-2">
                  <div class=" col ">
                    <div class="d-flex justify-content-between">
                      <h4 class="mb-1 ml-0 mt-1 font-weight-bolder text-mobile text-dark">Gerer vos groupes</h4>
                    </div>
                    <h6 class=" text-mobile2">Ajouter et configurer vos groupes</h6>
                  </div>
                  <div class="col justify-content-end p-2 col pb-2 " align="right">

                    <p v-if="!getGIf" @click='promptAjoutGroupe = !promptAjoutGroupe'
                      class="text-info text-mobile2 mouse">Ajouter un
                      groupe +</p>
                    <p highlight v-else @click="getGIf = false; " class="align-baseline text-info text-mobile2 mouse">
                      Retour
                    </p>

                  </div>
                </div>

                <div class="table-responsive  ">
                  <div class="  d-flex justify-content-center pb-3" v-if="loadingGroupes">

                    <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                  </div>
                  <table class="table" v-else>

                    <div class="  border-bottom" v-if="!getGIf">
                      <div class="d-flex justify-content-between">
                        <h6 class="font-weight-bolder text-dark text-mobile2">List de vos groupes</h6>

                      </div>
                    </div>


                    <tbody v-if="!getGIf">
                      <tr v-for="groupe in listGroupe" :key="groupe.id" class="mouse">
                        <td class="w-30">
                          <div>

                            <div class="ml-2">
                              <p class="mb-0 ml-2 text-xs ">Nom du groupe:</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ groupe.nom }}</h6>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Description du groupe:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ groupe.description }}</h6>
                          </div>
                        </td>

                        <td class="text-left" align='right'>
                          <div class="text-left col">

                            <Popper class="theme" placement="left">
                              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                              <template #content>
                                <div class="mouse">Modifier</div>
                                <div class="mouse" @click="selectGroupe(groupe)">
                                  Ajouter au groupe</div>
                                <div class="mouse" @click="getContactForGroupe(groupe.id)">
                                  Contact du groupe</div>
                              </template>
                            </Popper>

                          </div>
                        </td>
                        <vue-final-modal v-model="showModalGroupe" style="" classes="modal-container"
                          content-class="modal-content">

                          <span class="modal__title">Ajouter un contact au groupe</span>

                          <div class="modal__content">
                            <div class="col-12 form-group">

                              <label for="licence">Liste de contact</label>
                              <!-- <select id=" " v-model="selectContact" class="form-control form-select">
                                <option disabled selected default>
                                  Selectionner le contact
                                </option>
                                <option v-for="contact in lContact" :value="contact" :key="contact.id">
                                  {{ contact.nom }}
                                </option>
                              </select> -->
                              <SelectComp v-model="selectContact" type="1" :data="lContact"
                                placeholder='Selectionner le contact' />

                            </div>
                          </div>
                          <div class="modal__action">
                            <CustomButton :title='" Ajouter"' :loading='loadingAddContact'
                              @update:loading="loadingAddContact = $event" @click='addCToGroupe'
                              :classe="'btn btn-primary w-100 pt-2 pb-2 ps-5 pe-5'" color="success" fullWidth
                              size="lg" />

                          </div>
                        </vue-final-modal>
                      </tr>
                    </tbody>



                    <div class="  d-flex justify-content-center pb-3" v-else-if="loadCf">

                      <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>


                    </div>
                    <div v-else-if="lContacfgroupe.length == 0"
                      class="justify-content-center align-content-center pb-3 pt-3">
                      Aucun contact </div>
                    <tbody v-if="getGIf">
                      <tr v-for="(user) in  lContacfgroupe  " :key="user.message" class="mouse"
                        @click="message = user.phone">
                        <td class="w-30">
                          <div>

                            <div class="ml-2">
                              <p class="mb-0 ml-2 text-xs ">Nom :</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ user.nom }}</h6>
                            </div>
                          </div>
                        </td>
                        <td class="w-30">
                          <div>

                            <div class="ml-2">
                              <p class="mb-0 ml-2 text-xs ">Prenom :</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ user.prenom }}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Telephone :</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ user.phone }} </h6>
                          </div>
                        </td>
                        <!-- <td>
                            <div class="text-left">
                              <p class="mb-0 text-xs ">Phone Code :</p>
                              <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ user.phoneCode }}</h6>
                            </div>
                          </td> -->


                      </tr>
                    </tbody>

                  </table>
                </div>


              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    <div>

      <vue-final-modal v-model="promptAjoutGroupe" style="" classes="modal-container" content-class="modal-content">

        <span class="modal__title"> Entrer les informations du groupe
        </span>
        <div class="modal__content">

          <div class="form-group  ">
            <label for="nomP">Nom du Groupe</label>

            <input type="text" v-model="nom" class="form-control" placeholder="Entrer un nom" id="nomP">

          </div>



          <div class="  form-group  ">
            <label for="nomP">Description</label>
            <textarea v-model="description" class="form-control" placeholder="Description de ce groupe"></textarea>

          </div>

        </div>
        <div class="modal__action">
          <CustomButton :title='"Valider"' :loading='loadingSave' @update:loading="loadingSave = $event"
            @click='newGroupe' :classe="'btn btn-primary'" />
          <button highlight @click="promptAjoutGroupe = false" class="align-baseline btn btn-danger ms-3">Retour
          </button>
        </div>
      </vue-final-modal>
    </div>
  </div>
</template> 

<style scoped>
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

::v-deep .modal-container {
  display: flex;
  justify-content: center;


  align-items: center;
  width: auto;
  padding-left: auto
}

::v-deep .modal-content {
  width: auto;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0em 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

.modal__title {
  margin: 0 2rem 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}

.modal__action {
  display: flex;
  flex-shrink: 0;
  padding: 1rem 0 0;
}

.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.dark-mode div .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
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
</style>
<script  >
import { VueFinalModal } from 'vue-final-modal'

import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
import VueCookies from 'vue-cookies'
import CustomButton from '../../components/CustomButton.vue';
import Popper from "vue3-popper";
import SelectComp from '../../components/SelectComp.vue';

import { createToaster } from "@meforma/vue-toaster";
export default {
  name: "ListGroupe",
  components: {
    SelectComp,
    VueFinalModal, CustomButton, Popper
  },
  beforeRouteEnter(to, from, next) {
    if (
      VueCookies.get('token') != undefined &&
      VueCookies.get('token') != 'undefined' &&
      VueCookies.get('token') != null
    ) {
      console.log(
        VueCookies.get('token') != undefined &&
        VueCookies.get('token') != 'undefined' &&
        VueCookies.get('token') != null
      );
      // console.log('iiiiixzzxioooiioi', VueCookies.get('token'));
      // await refreshAuthenticated();
      next();
    } else {
      //  console.log('llllllllll');
      next({ name: 'Signin' });

    }
  },
  setup() {
    onMounted(async () => {
      await getContact();
      await getGroupe();
    });
    const groupe = ref({ id: 0, label: 'Aucun' });
    const optionsGroupes = ref([{ id: 0, label: 'Aucun' }]);
    const promptGroupe = ref(false);
    const promptAjoutGroupe = ref(false);
    const loadingGroupes = ref(true);
    const search = ref('');
    const nom = ref('');
    const selectGroupId = ref(0);
    const description = ref('');
    const nomcontact = ref('');
    let listGroupe = ref([]);
    let loadingSave = ref(false);
    const numero = ref('');
    let toast = createToaster();
    let lContact = ref([]);
    const newGroupe = async () => {
      const groupe = {
        nom: nom.value,
        description: description.value,
        keySecret: VueCookies.get('keySecret'),
      };
      loadingSave.value = true;
      const response = await new RequestApi().newGroupeUser(groupe);
      if (response.status) {


        console.log('Nouveau groupe enregistre avec success.', response.data);
        toast.success(`Nouveau groupe enregistre avec success.`, {
          // override the global option
          position: "bottom"
        }); await getGroupe();
        promptAjoutGroupe.value = !promptAjoutGroupe.value;
        loadingSave.value = false;
      } else {
        toast.error(`Une erreur est survenu lors de l'operation.`, {
          // override the global option
          position: "bottom"
        }); loadingSave.value = false;
      };

    };
    let groupeChoise = ref();
    let showModalGroupe = ref(false);
    const selectGroupe = (groupe) => {
      groupeChoise.value = groupe;
      showModalGroupe.value = true;
    };

    let loadingAddContact = ref(false);
    let selectContact = ref(null);
    const addCToGroupe = async () => {
      if (
        groupeChoise.value.id != 0 && groupeChoise.value.id != null
      ) {
        let data = {
          keySecret: VueCookies.get('keySecret'),
          idContact: selectContact.value.id,
          idGroupe: groupeChoise.value.id
        }
        loadingAddContact.value = true;
        const response = await new RequestApi().addContactToGroupeUser(data); if (response.status) {

          toast.success(`contact ajoute avec success.`, {
            // override the global option
            position: "bottom"
          });
          loadingAddContact.value = false;

        } else {
          toast.error(`Erreur .`, {
            // override the global option
            position: "bottom"
          });
          loadingAddContact.value = false;

        }

        showModalGroupe.value = false

      } else {
        toast.error(`Veuillez selectionner un groupe`, {
          // override the global option
          position: "bottom"
        });
      }
    };
    const groupeInformations = (id, nomGroupe) => {
      promptAjoutGroupe.value = !promptAjoutGroupe.value;
      selectGroupId.value = id;
      console.log(id, nomGroupe);
    };

    const getGroupe = async () => {
      loadingGroupes.value = true;
      optionsGroupes.value.pop();


      const response = await new RequestApi().getListGroupeUser();

      if (response.status) {

        listGroupe.value = response.data;


      } else {
        toast.error(`Erreur lors du chargement des groupes.`, {
          // override the global option
          position: "bottom"
        });
      }
      loadingGroupes.value = false;
    };


    let lContacfgroupe = ref([]);
    let loadCf = ref(false);
    let getGIf = ref(false);
    async function getContact() {

      const response = await new RequestApi().getListContactUser();
      if (response.status) {

        lContact.value = response.data
      }
      else {


        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
      }


    }
    async function getContactForGroupe(groupeId) {
      loadCf.value = true;
      getGIf.value = true;
      const response = await new RequestApi().getActionContactForGroupA(groupeId);
      if (response.status) {
        loadCf.value = false;
        console.log('dsddsds', response.data)
        lContacfgroupe.value = response.data
      }
      else {

        loadCf.value = false;

        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
      }


    }
    return {
      lContacfgroupe, loadCf, getContactForGroupe, getGIf,
      search, showModalGroupe, lContact, selectContact, loadingAddContact, addCToGroupe,
      nom,
      loadingSave,
      description,
      selectGroupId,
      numero,
      listGroupe,
      selectGroupe,
      groupeChoise,
      nomcontact,
      optionsGroupes,
      loadingGroupes,
      getGroupe,
      groupe,
      newGroupe,
      promptGroupe,
      promptAjoutGroupe,
      date: ref('2019-02-01 12:44'),
      groupeInformations,
    };
  },
};
</script>
