<template>
  <div class="py-4 container-fluid " style="border: none;">
    <div class=" row">
      <div class="col-12">
        <div class="" style="border: none;">


          <div class="card-body  " style="border: none;">


            <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
              <!-- <div class="card plus">+</div> -->

              <div>

              </div>
              <div class="card ps-3 pe-3 mb-lg-0 mb-4 ">

                <div class=" row p-2 pb-2 border-bottom">
                  <div class="col">
                    <div class="d-flex justify-content-between">
                      <h4 class="mb-1 ml-0 mt-2 font-weight-bolder text-mobile  dark">Liste de vos clients</h4>
                    </div>
                    <h6 class="text-mobile2 mobile">Parcourez et reconfigurez votre client</h6>
                  </div>
                  <div class="col-3 mt-3 mobile">
                    <input class="form-control" v-model='search' @input="searchFunction" placeholder="search"
                      type="search" />
                  </div>
                </div>

                <div class="table-responsive trx mt-1">
                  <div class="  d-flex justify-content-center pb-3" v-if="loading0">

                    <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                  </div>
                  <table class="table  " v-else>

                    <div class="  d-flex justify-content-center pb-3" v-if="users.length == 0">

                      Vide

                    </div>
                    <tbody>
                      <tr v-for="(user, index)  in users" :key="user.message" v-show="start <= index && index < final"
                        class="mouse" :class="this.$store.state.darkMode ? 'mouseA' : 'mouseB'"
                        @click="message = user.phone">
                        <td>
                          <div>

                            <div class="ml-2">
                              <p class="mb-0 ml-2 text-xs ">Nom:</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ user.name }}</h6>
                            </div>
                          </div>
                        </td>
                        <td class='mobile'>
                          <div>

                            <div class="ml-2">
                              <p class="mb-0 ml-2 text-xs ">Prenom:</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ user.surname }}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Telephone:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ user.phone }} </h6>
                          </div>
                        </td>
                        <td class='mobile'>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Entreprise:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ user.organisation }}</h6>
                          </div>
                        </td>
                        <td class='mobile'>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Poste Sociale:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ user.posteSocial }}</h6>
                          </div>
                        </td>
                        <td class='mobile'>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Role:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ (user.role) ? `${user.role.nom}`
                                : 'Auccun Role'
                            }} </h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Solde Sms:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ (user.solde) }} </h6>
                          </div>
                        </td>
                        <td class='mobile'>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Date de Création:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ user.dateCreated }}</h6>
                          </div>
                        </td>

                        <td class="text-left" v-show="updateUser">
                          <div class="text-left col">
                            <Popper class="theme" placement="left">
                              <i class="fa fa-ellipsis-v" aria-hidden="true" @click="selectUser(user)"></i>
                              <template #content>
                                <!--  <div class="mouse" @click="showModalUser = true">Changer le type compte</div> -->
                                <div class="mouse" @click="showModalUser = true">Editer</div>
                                <div class="mouse" @click="selectRole(user.role)" v-show="manageProfil">Modifiez le role
                                </div>
                                <div class="mouse" @click="showModalPassword = true">Modifier mot de passe</div>
                              </template>
                            </Popper>


                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>


                  

                </div>

  <div class='card-footer' v-if='(users.length > 10)' align='right'>
    <div class="row   col-lg-1 col-md-4 col-xl-5 col-sm-5" :class="this.$store.state.darkMode ? 'bg-default' : ''">
      <div class="  mouseY">
        <i @click="next" v-if='(final < users.length)' class="mouseY 	fa fa-angle-right"
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
      <vue-final-modal v-model="showModalUser" style="" classes="modal-container" content-class="modal-content">

        <span class="modal__title">Modifiez ce compte</span>
        <span class="border-bottom mb-3">Choisissez type de compte</span>
        <div class="modal__content">
          <div>
            <label for="example-text-input" class="form-control-label">First name</label>
            <input class="form-control" :readonly='loadingPatchUser' v-model="nom" type="text" />
          </div>
          <div>
            <label for="example-text-input" class="form-control-label">Last name</label>
            <argon-input :readonly='loadingPatchUser' type="text" v-model="prenom" />
          </div>

          <div>
            <label for="example-text-input" class="form-control-label">Email address</label>
            <argon-input :readonly='loadingPatchUser' v-model="email" type="email" />
          </div>
        </div>
        <div class="modal__action">
          <CustomButton :title='"  Mettre à jour"' @click='openValid'
            :classe="'btn btn-primary w-100 pt-2 pb-2 ps-5 pe-5'" color="success" fullWidth size="lg" />
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
          <CustomButton :title='"Confirmer"' :loading='loadingPatchUser' @update:loading="loadingPatchUser = $event"
            @click='patchUser' :classe="'btn btn-primary'" />

        </div>
      </vue-final-modal>
      <vue-final-modal v-model="showModalRole" style="" classes="modal-container" content-class="modal-content">

        <span class="modal__title">Modifiez le role</span>
        <span class="border-bottom mb-3">Choisissez un nouveau role pour ce client</span>
        <div class="modal__content">
          <label for="inputCity">Role</label>
          <!-- <select id="inputState" v-model="role" class="form-control form-select">
            <option disabled selected default>
              Selectionner le role
            </option>
            <option v-for="role in  listRoles" :value="role" :key="role.id">
              {{ role.nom }}
            </option>

          </select> -->

          <SelectComp v-model="role" type="1" :data="listRoles"
            placeholder='Choisissez un nouveau role pour ce client' />

        </div>
        <div class="modal__action">
          <CustomButton :title='"METTRE A JOUR"' :loading='laodingUpdateRole'
            @update:loading="laodingUpdateRole = $event" @click='patchRoleUser'
            :classe="'btn btn-primary   col-lg-12 col-sm-12 '" />
        </div>
      </vue-final-modal>
      <vue-final-modal v-model="showModalPassword" style="" classes="modal-container" content-class="modal-content">

        <span class="modal__title">Modifiez le mot de passe</span>
        <span class="border-bottom mb-3">Generez un mot de passe, copiez et envoyez a votre client</span>
        <div class="modal__content">
          <div class="col-lg-12 col-sm-12 form-group  d-flex">


            <div class="row d-flex">
              <div class="col-11">
                <input type="text" v-model="generatePassword" class="form-control " id="copier">
                <div class="  text-success" v-if="copyP">
                  nouveau mot de passe copie
                </div>
              </div>
              <div class="col-1">
                <i class="fa fa-copy " @click="copy" style="font-size:30px" v-show="generatePassword.length != 0"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="modal__action">


          <CustomButton :title='"Generer"' :loading='loadingG' @update:loading="loadingG = $event"
            @click='patchPassword' :classe="'btn btn-primary'" />

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

::placeholder {
  text-align: center
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

import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
import Popper from "vue3-popper";
import VueCookies from 'vue-cookies'
import CustomButton from '../../components/CustomButton.vue';
import ArgonInput from "@/components/ArgonInput.vue";
import SelectComp from '../../components/SelectComp.vue';

import store from "../../store";
import { createToaster } from "@meforma/vue-toaster";
export default {
  name: "ListClient",
  components: {
    Popper,

    SelectComp,

    ArgonInput
    , CustomButton
    , VueFinalModal,
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
      console.log(this.users.length)
      if (this.final + this.moyenne < this.users.length) {
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
          this.moyenne = parseInt(this.users.length)
          this.start = 0;
        } else {
          this.moyenne = parseInt(event.target.value)
          this.start = 0;
          // this.final = this.final + this.moyenne;

        }
        // this.start = this.start + this.moyenne;
        this.final = this.moyenne;
      }

      console.log(this.final)
    }
  },
  setup() {
    const generatePassword = ref('');
    let updateUser = (VueCookies.get('fonctions')) ? (VueCookies.get('fonctions').split(',')).some(value => value == '3') ? true : false : false;

    let loading = ref(true);
    let loading0 = ref(true);
    let showModalUser = ref(false);
    let showModalRole = ref(false);
    let showModalPassword = ref(false);
    const loadingPatchUser = ref(false);
    let confirmPassword = ref('');

    let users = ref([]);
    let listRoles = ref([]);
    let data = ref([]);
    let idFonction = ref('');
    let iAction = ref(0);
    let userSelectId = ref(0);
    let role = ref();
    let promptValid = ref(false);
    let toast = createToaster(); let nom = ref('');
    // let type = ref('');
    let prenom = ref('');
    let email = ref('');

    let numero = ref('');

    let societe = ref('');
    onMounted(async () => {

      await getChildren();
      await getRoles();

      loading.value = false;

    });
    const selectUser = (user) => {
      console.log('id****', user);
      userSelectId.value = user.id;
      nom.value = user.name;
      prenom.value = user.surname;
      email.value = user.mail;
      console.log('id****', userSelectId.value);
    }
    const selectRole = (rolei) => {

      showModalRole.value = true;
      if (rolei) {
        role.value = {
          id: rolei.id,
          nom: rolei.nom,
        }
        console.log(role.value)

      }
    }
    const patchUser = async () => {
      const data = {
        clientId: userSelectId.value,
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,

        nomEntreprise: societe.value,
      };
      console.log(data);
      if (loadingPatchUser.value == false) {
        loadingPatchUser.value = true;
        if (confirmPassword.value != '') {
          const validate = await new RequestApi().logInValidate(confirmPassword.value); if (validate.status) {
            const response = await new RequestApi().pathUserAction(
              data
            );
            //  console.log('get qte statu', response.data);
            if (response.status) {
              store.commit('getParrainUser', null);
              await getChildren();

              promptValid.value = false;
              showModalUser.value = false;
              loadingPatchUser.value = false;

              confirmPassword.value = ''; toast.success(`Mise a jour de vos information effectuee avec succes`, {
                // override the global option
                position: "bottom"
              });
            } else {
              promptValid.value = false;
              showModalUser.value = false;
              confirmPassword.value = '';
              loadingPatchUser.value = false;
              toast.error(`Une erreur s'est produite`, {
                // override the global option
                position: "bottom"
              });
            }
          } else {
            promptValid.value = false;
            showModalUser.value = false;
            loadingPatchUser.value = false;
            confirmPassword.value = '';
            toast.error(`Une erreur s'est produite`, {
              // override the global option
              position: "bottom"
            });
          }

        } else {
          loadingPatchUser.value = false;
          toast.error(`Veuillez entrer un mot de passe`, {
            // override the global option
            position: "top"
          });
        }
      } else {
        loadingPatchUser.value = false;

        toast.success(`Une Mise a Jour est en cours`, {
          // override the global option
          position: "bottom"
        });
      }
    };
    const generateNewPassword = () => {

      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result1 = ' ';
      const charactersLength = characters.length;
      for (let i = 0; i < 7; i++) {
        result1 += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      generatePassword.value = result1.trim();
      console.log(generatePassword.value);
    };
    let copyP = ref(false);
    function copy() {
      let copyText = document.querySelector("#copier");
      copyText.select();
      document.execCommand("copy");
      copyP.value = true;
      generatePassword.value = ''
    }


    async function getChildren() {

      const response = await new RequestApi().getParrainUserAction();
      if (response.status) {
        loading0.value = false
        users.value = response.data
        usersSave.value = response.data
      }
      else {
        loading0.value = false

        toast.error(`Erreur lors de la recuperation de vos clients`, {
          // override the global option
          position: "bottom"
        });
      }
      console.log(users.value);

    }
    async function getRoles() {

      const response = await new RequestApi().getRolesUAction();
      if (response.status) {

        listRoles.value = response.data
      }
      else {


        toast.error(`Erreur lors de la recuperation des roles`, {
          // override the global option
          position: "bottom"
        });
      }
      console.log(users.value);

    }
    let loadingG = ref(false);
    const patchPassword = async () => {
      copyP.value = false;
      // generateNewPassword();
      // if (generatePassword.value.lenght != 0) {
      const data = {
        clientId: userSelectId.value,
        // password: generatePassword.value,
      };
      loadingG.value = true;

      const response1 = await new RequestApi().pathPasswordAction2(data);

      if (response1.status) {
        generatePassword.value = response1.data;
        loadingG.value = false;

        toast.success(`Success`, {
          // override the global option
          position: "bottom"
        });
        // $q.notify({
        //   message: 'Mise a jour de vos informations effectuee avec succes',
        //   type: 'positive',
        // });
        // eslint-disable-next-line require-atomic-updates

      } else {
        loadingG.value = false;

        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
        // eslint-disable-next-line require-atomic-updates

        // $q.notify({
        //   message: 'Erreur lors de la Mise a jour de vos information',
        //   type: 'negative',
        // });
      }
      // }
    };


    let laodingUpdateRole = ref(false);
    const patchRoleUser = async () => {
      const data = {
        clientId: userSelectId.value,
        roleId: role.value.id,
      };

      laodingUpdateRole.value = true;
      const response1 = await new RequestApi().pathRoleAction(data);

      if (response1.status) {

        store.commit('getParrainUser', null);
        await getChildren();
        laodingUpdateRole.value = false;

        toast.success(`Success`, {
          // override the global option
          position: "bottom"
        });
        // $q.notify({
        //   message: 'Mise a jour de vos informations effectuee avec succes',
        //   type: 'positive',
        // });
        // eslint-disable-next-line require-atomic-updates

      } else {
        laodingUpdateRole.value = false;

        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
        // eslint-disable-next-line require-atomic-updates

        // $q.notify({
        //   message: 'Erreur lors de la Mise a jour de vos information',
        //   type: 'negative',
        // });
      }

      showModalRole.value = false


    }; const openValid = () => {
      promptValid.value = !promptValid.value;


    };

    let usersSave = ref([])
    const searchFunction = () => {
      users.value = usersSave.value
      let result = ref([])

      if (search.value.length != 0) {
        users.value.forEach((value) => {
          console.log('a', search.value.toLowerCase(), value)
          if ((value.name ?? '').toLowerCase().includes(search.value.toLowerCase()) || (value.surname ?? '').toLowerCase().includes(search.value.toLowerCase()) || (value.phone ?? '').includes(search.value)) {
            // console.log(value.nom.toLowerCase().includes(search.value.toLowerCase()) || value.prenom.toLowerCase().includes(search.value.toLowerCase()) || value.phone.includes(search.value))
            console.log('2')

            result.value.push(value);
          }
        });
        users.value = result.value
      }
      else {
        users.value = usersSave.value
      }
      console.log(result.value, search.value);


    };
    let search = ref('')

    return {
      searchFunction, search,
      manageProfil: (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '15') ? true : false : false,

      copyP,
      openValid,
      nom, currentPage: 1,

      prenom,
      email,
      numero,
      societe,
      loadingG,
      loadingPatchUser,
      patchUser,
      confirmPassword,
      promptValid,
      role, patchRoleUser, laodingUpdateRole,
      loading0, open, copy, data, idFonction, iAction,
      users, show: false, loading, showModalRole, showModalUser, listRoles, showModalPassword, generateNewPassword, generatePassword, selectUser, patchPassword, updateUser, selectRole

    };
  },
};
</script>
