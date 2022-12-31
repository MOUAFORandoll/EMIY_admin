<template>
  <div class="py-4 container-fluid " style="border: none;">
    <div class=" row">
      <div class="col-12">
        <div class="" style="border: none;">





          <div class="  " style="border: none;">


            <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
              <!-- <div class="card plus">+</div> -->


              <div class="card ps-3 pe-3 mb-lg-0 mb-4 ">
                <div class="row p-2  pb-2 border-bottom">
                  <div class="col">
                    <div class="d-flex  justify-content-between">
                      <h4 class="mb-1 ml-0 mt-2 font-weight-bolder text-dark text-mobile">Liste de vos contacts</h4>
                    </div>
                    <h6 class="text-mobile2">Parcourez et modifiez vos contacts</h6>
                  </div>

                  <div class="col-3 mt-3">
                    <input class="form-control" v-model='search' @input="searchFunction" placeholder="search"
                      type="search" />
                  </div>
                </div>

                <div class="table-responsive trx mt-1">
                  <div class="  d-flex justify-content-center pb-3" v-if="loading0">

                    <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                  </div>
                  <table class="table  " v-else>

                    <div class="  d-flex justify-content-center pb-3" v-if="contact.length == 0">

                      Vide

                    </div>
                    <tbody>
                      <tr v-for="(user, index)  in contact" v-show="start <= index && index < final" :key="user.message"
                        class="mouse" :class="this.$store.state.darkMode ? 'mouseA' : 'mouseB'"
                        @click="message = user.phone">
                        <td class="w-30">
                          <div>

                            <div class="ml-2">
                              <p class="mb-0 ml-2 text-xs ">Nom :</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ user.nom }}</h6>
                            </div>
                          </div>
                        </td>
                        <td class="w-30  mobile">
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
                        <td>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Phone Code :</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ user.phoneCode }}</h6>
                          </div>
                        </td>


                        <td class="text-left">
                          <div class="text-left col">
                            <Popper class="theme" placement="left">
                              <i class="fa fa-ellipsis-v" aria-hidden="true" @click="selectUser(user)"></i>
                              <template #content>
                                <!--  <div class="mouse" @click="showModalContact = true">Changer le type compte</div> -->
                                <div class="mouse" @click="showModalContact = true">Editer</div>
                                <div class="mouse" @click="showModalGroupe = true">Ajouter au groupe</div>

                              </template>
                            </Popper>


                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>


                </div>
                <div class='card-footer' v-if='(contact.length > 10)' align='right'>
                  <div class="row   col-lg-1 col-md-4 col-xl-5 col-sm-5"
                    :class="this.$store.state.darkMode ? 'bg-default' : ''">
                    <div class="  mouseY">
                      <i @click="next" v-if='(final < contact.length)' class="mouseY 	fa fa-angle-right"
                        style="font-size:36px; float:right"></i>
                      <select id="select_id" @change="changeVal($event)" style=' float:right'
                        class="mx-2 w-auto form-control form-select">

                        <option value=10>
                          10
                        </option>
                        <option value=20>
                          20
                        </option>
                        <option value=40>
                          40
                        </option>
                        <option value=100>
                          100
                        </option>
                        <option value=x>
                          Tous
                        </option>
                      </select>
                      <i class="mouseY	fa fa-angle-left" @click="prev" style="font-size:36px; "></i>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    <div>
      <vue-final-modal v-model="showModalContact" style="" classes="modal-container" content-class="modal-content">

        <span class="modal__title">Modifiez ce contact</span>

        <div class="modal__content">
          <div>
            <label for="example-text-input" class="form-control-label">Nom</label>
            <input class="form-control" :readonly='loadingPatchContact' v-model="nom" type="text" />
          </div>
          <div>
            <label for="example-text-input" class="form-control-label">Prenom</label>
            <argon-input :readonly='loadingPatchContact' type="text" v-model="prenom" />
          </div>
          <div>

            <label for="example-text-input" class="form-control-label">Phone </label>
            <MazPhoneNumberInput size="sm" :translations="{
              countrySelector: {
                placeholder: 'code',
                error: 'Veuillez renseigner le code du pays',
              },
              phoneInput: {
                placeholder: 'Phone number',
                example: 'Ex:',
              },
            }" v-model="numero" show-code-on-list :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
              :ignored-countries="['AC']" @update="results = $event" :success="results?.isValid" />
          </div>

        </div>
        <div class="modal__action">
          <CustomButton :title='"  Mettre à jour"' @click='openValid'
            :classe="'btn btn-primary w-100 pt-2 pb-2 ps-5 pe-5'" color="success" fullWidth size="lg" />
          <button highlight @click="showModalContact = false" class="align-baseline btn btn-danger ms-3">Retour
          </button>
        </div>
      </vue-final-modal>




      <vue-final-modal v-model="promptValid" style="" classes="modal-container" content-class="modal-content">

        <span class="modal__title">Finalisation de la mise a jour</span>
        <span class="border-bottom mb-3">Veuillez saisir votre mot de passe</span>
        <div class="modal__content">

          <label for="">Mot de passe</label>
          <input type="password" v-model="confirmPassword" class="form-control ">

        </div>
        <div class="modal__action">
          <CustomButton :title='"Confirmer"' :loading='loadingPatchContact'
            @update:loading="loadingPatchContact = $event" @click='patchContact' :classe="'btn btn-primary'" />

        </div>
      </vue-final-modal>


      <vue-final-modal v-model="showModalGroupe" style="" classes="modal-container" content-class="modal-content">

        <span class="modal__title">Ajouter ce contact au groupe</span>

        <div class="modal__content">
          <div class="col-12 form-group">

            <label for="licence">Groupe</label>
            <!-- <select id=" " v-model="groupe" class="form-control form-select">
              <option disabled selected default>
                Selectionner le groupe
              </option>
              <option v-for="option in optionsGroupes" :value="option" :key="option.id">
                {{ option.label }}
              </option>
            </select> -->
            <SelectComp v-model="groupe" :data="optionsGroupes" placeholder=' Selectionner le groupe' />

          </div>
        </div>
        <div class="modal__action">
          <CustomButton :title='" Ajouter"' :loading='loadingAddContact' @update:loading="loadingAddContact = $event"
            @click='addCToGroupe' :classe="'btn btn-primary w-100 pt-2 pb-2 ps-5 pe-5'" color="success" fullWidth
            size="lg" />
          <!--     <button highlight @click="showModalGroupe = false" class="align-baseline btn btn-danger ms-3">Retour
          </button> -->
        </div>
      </vue-final-modal>
    </div>
  </div>
</template> 

<style scoped>
::placeholder {
  text-align: center;
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
<script>
import { VueFinalModal } from 'vue-final-modal'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'

import "maz-ui/css/main.css";
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
import Popper from "vue3-popper";
import VueCookies from 'vue-cookies'
import CustomButton from '../../components/CustomButton.vue';
import ArgonInput from "@/components/ArgonInput.vue";
import SelectComp from '../../components/SelectComp.vue';

import { createToaster } from "@meforma/vue-toaster";
export default {
  name: "ListContact",
  components: {
    SelectComp,
    Popper,
    ArgonInput
    , CustomButton
    , VueFinalModal, MazPhoneNumberInput
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

  data() {
    return {
      start: 0, final: 10,
      moyenne: 10,
      // max: this.users.value.length
    }
  },
  methods: {
    next() {
      console.log(this.contact.length)
      if (this.final + this.moyenne < this.contact.length) {
        this.start = this.start + this.moyenne;
      }
      this.final = this.final + this.moyenne;
      console.log(this.start, this.final)
    },
    prev() {
      console.log(this.start, this.final)
      if (this.start >= this.moyenne) {

        this.start = this.start - this.moyenne;
        this.final = this.final - this.moyenne;

      }
    },
    changeVal(event) {
      console.log(event.target.value)
      if (this.moyenne != event.target.value) {

        if ('x' == event.target.value) {
          this.moyenne = parseInt(this.contact.length)
          this.start = 0;
        } else {
          this.moyenne = parseInt(event.target.value)
          this.start = 0;
          // this.final = this.final + this.moyenne;

        }
        this.final = this.moyenne;
      }

      console.log(this.final)
    }
  },
  setup() {
    let loading = ref(true);
    let loading0 = ref(true);
    let showModalContact = ref(false);
    let showModalRole = ref(false);
    let showModalPassword = ref(false);
    const loadingPatchContact = ref(false);
    let confirmPassword = ref('');
    let loadingAddContact = ref(false);
    let contact = ref([]);
    let listRoles = ref([]);
    let data = ref([]);
    let idFonction = ref('');
    let iAction = ref(0);
    let promptValid = ref(false);
    let showModalGroupe = ref(false);
    let toast = createToaster();
    let nom = ref('');
    // let type = ref('');
    let prenom = ref('');
    let email = ref('');
    const groupe = ref({ id: 0, label: 'Aucun' });
    const optionsGroupes = ref([{ id: 0, label: 'Aucun' }]);
    let codePhone = ref();
    let numero = ref('');
    let contactId = ref(0);
    let societe = ref('');
    onMounted(async () => {

      await getGroupe();
      await getContact();



    });
    const selectUser = (user) => {
      contactId.value = user.id
      nom.value = user.nom,
        prenom.value = user.prenom,

        numero.value = user.phone
    };

    const getGroupe = async () => {

      const response = await new RequestApi().getListGroupeUser();
      console.log(response.data);
      if (response.status) {
        loading.value = false;

        optionsGroupes.value = response.data.map((x) => {
          return {
            id: x['id'],
            label: x.nom,
          };
        });
      } else {
        loading.value = false;
        toast.error(`Erreur lors du chargement des groupes.`, {
          // override the global option
          position: "bottom"
        });
      }
    };

    const patchContact = async () => {
      const data = {

        nom: nom.value,
        prenom: prenom.value,
        idContact: contactId.value,
        keySecret: VueCookies.get('keySecret'),
        phone: results.value.nationalNumber,
        // email:mail.value,
        phoneCode: '+' + results.value.countryCallingCode,

      };
      console.log(data);
      if (loadingPatchContact.value == false) {
        loadingPatchContact.value = true;
        if (confirmPassword.value != '') {
          const validate = await new RequestApi().logInValidate(confirmPassword.value); if (validate.status) {
            const response = await new RequestApi().pathContactUser(
              data
            );
            //  console.log('get qte statu', response.data);
            if (response.status) {
              promptValid.value = false;
              showModalContact.value = false;
              loadingPatchContact.value = false;
              confirmPassword.value = ''; toast.success(`Mise a jour de vos information effectuee avec succes`, {
                // override the global option
                position: "bottom"
              });
              await getContact();
            } else {
              promptValid.value = false;
              showModalContact.value = false;
              confirmPassword.value = '';
              loadingPatchContact.value = false;
              toast.error(`Une erreur s'est produite`, {
                // override the global option
                position: "bottom"
              });
            }
          } else {
            promptValid.value = false;
            showModalContact.value = false;
            loadingPatchContact.value = false;
            confirmPassword.value = '';
            toast.error(`Une erreur s'est produite`, {
              // override the global option
              position: "bottom"
            });
          }

        } else {
          loadingPatchContact.value = false;
          toast.error(`Veuillez entrer un mot de passe`, {
            // override the global option
            position: "bottom"
          });
        }
      } else {
        loadingPatchContact.value = false;

        toast.success(`Une Mise a Jour est en cours`, {
          // override the global option
          position: "bottom"
        });
      }
    };
    let contactSave = ref([])
    async function getContact() {

      const response = await new RequestApi().getListContactUser();
      if (response.status) {
        loading0.value = false
        contact.value = response.data
        contactSave.value = response.data
      }
      else {
        loading0.value = false

        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
      }
      console.log(contact.value);

    }

    const addCToGroupe = async () => {
      if (
        groupe.value.id != 0
      ) {
        let data = {
          keySecret: VueCookies.get('keySecret'),
          idContact: contactId.value,
          idGroupe: groupe.value.id
        }
        loadingAddContact.value = true;
        const response = await new RequestApi().addContactToGroupeUser(data); if (response.status) {

          toast.success(`contact ajoute avec success.`, {
            // override the global option
            position: "bottom"
          });
          loadingAddContact.value = false;
          showModalGroupe.value = false
        } else {
          toast.error(`Erreur .`, {
            // override the global option
            position: "bottom"
          });
          loadingAddContact.value = false;

        }



      } else {
        toast.error(`Veuillez selectionner un groupe`, {
          // override the global option
          position: "bottom"
        });
      }
    };

    const openValid = () => {
      promptValid.value = !promptValid.value;


    };
    const searchFunction = () => {
      contact.value = contactSave.value
      let result = ref([])

      if (search.value.length != 0) {
        contact.value.forEach((value) => {
          console.log('a')
          if (

            (value.nom ?? '').toLowerCase().includes(search.value.toLowerCase()) ||
            (prenom ?? '').toLowerCase().includes(search.value.toLowerCase()) ||
            (value.phone ?? '').includes(search.value)) {
            // console.log(value.nom.toLowerCase().includes(search.value.toLowerCase()) || value.prenom.toLowerCase().includes(search.value.toLowerCase()) || value.phone.includes(search.value))
            console.log('2')

            result.value.push(value);
          }
        });
        contact.value = result.value
      }
      else {
        contact.value = contactSave.value
      }
      console.log(result.value, search.value);


    };
    let results = ref('')
    let search = ref('')
    return {
      search, searchFunction,
      addCToGroupe, codePhone, results,
      showModalGroupe,
      openValid,
      nom,
      prenom,
      email,
      numero,
      societe,

      loadingPatchContact,
      patchContact,
      confirmPassword,
      promptValid,
      optionsGroupes,
      groupe,
      loadingAddContact,
      loading0, open, data, idFonction, iAction,
      contact, show: false, loading, showModalRole, showModalContact, listRoles, showModalPassword, selectUser

    };
  },
};
</script>
