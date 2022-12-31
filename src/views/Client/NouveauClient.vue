<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1">
              <h4 class="card-title font-weight-bolder dark text-mobile">Informations personnelles</h4>
              <p class="card-text border-bottom text-mobile2 ">Creer et parainner votre client.</p>
              <div class="row">
                <div class="col-lg-4 col-sm-12 form-group  ">
                  <label for="inputState">Nom</label>

                  <input :readonly="loading" type="text" v-model="nom" class="form-control" id="inputCity">
                </div>
                <div class="col-lg-4 col-sm-12 form-group  ">
                  <label for="inputState">Prenom</label>

                  <input :readonly="loading" type="text" v-model="prenom" class="form-control" id="inputCity">
                </div>
                <form-number :readonly="loading" class="col-lg-4 col-sm-12 form-group " label="Numero de telephone"
                  v-model='phone'>
                </form-number>


                <div class="col-lg-4 col-sm-12 form-group  ">
                  <label for="inputState">Date de naissance</label>
                  <input :readonly="loading" type="date" v-model='birthday' class="form-control" id="inputCity" />
                  <!-- <Datepicker name="sdd" class="col" v-model="date"></Datepicker> -->

                </div>

                <div class="col-lg-4 col-sm-12 form-group  ">
                  <label for="inputState">Email</label>

                  <input :readonly="loading" type="text" v-model="mail" class="form-control" id="inputCity">
                </div>
                <div class="col-lg-4 col-sm-12 form-group" v-show="manageProfil">

                  <label for="inputCity">Type de compte</label>
                  <!--  <select id="inputState" v-model="role" class="form-control form-select">
          <option disabled selected default>
            Selectionner le role
          </option>          <option v-for="role in  listRoles" :value="role" :key="role.id">
                      {{ role.nom }}
                    </option>

                  </select> -->
                  <SelectComp v-model="role" type="1" :readonly="loading" :data="listRoles"
                    placeholder='   Selectionner le role' />

                </div>

              </div>
            </div>

          </div>


        </div>
        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1">
              <h4 class="card-title font-weight-bolder dark text-mobile">Informations personnelles</h4>
              <p class="card-text border-bottom text-mobile2 ">Creer et parainner votre client.</p>
              <div class="row">
                <div class="col-lg-4 col-sm-12 form-group  ">
                  <label for="inputState">Entreprise</label>

                  <input :readonly="loading" type="text" v-model="entreprise" class="form-control" id="inputCity">
                </div>
                <div class="col-lg-4 col-sm-12 form-group  ">
                  <label for="inputState">Poste social</label>

                  <input :readonly="loading" type="text" v-model="posteSocial" class="form-control" id="">
                </div>


              </div>
            </div>

          </div>


        </div>

        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1">
              <h5 class="card-title font-weight-bolder dark text-mobile">Informations de securite</h5>
              <p class="card-text border-bottom text-mobile2 ">Definissez un mot de passe pour votre client.</p>
              <div class="row">
                <div class="col-lg-4 col-sm-12 form-group  ">
                  <label for="inputState">Mot de passe</label>

                  <input :readonly="loading" type="password" v-model="password" class="form-control" id="inputCity">
                </div>
                <div class="col-lg-4 col-sm-12 form-group  ">
                  <label for="inputState">Re-saisir
                  </label>

                  <input type="password" :readonly="loading" v-model="repassword" @input="verifPass"
                    :class="errorPa ? 'border-danger' : ''" class="form-control " id="inputCity">
                  <p clas="text-danger"> {{ errorPa ? 'Les mots de passe entres sont differents' : '' }}</p>

                </div>


              </div>
            </div>

            <CustomButton :title='"Enregistrer"' :loading='loading' @update:loading="loading = $event"
              @click='creerCompte' :classe="'btn btn-primary'" />


          </div>


        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
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
<script  >
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';

// import Datepicker from 'vuejs3-datepicker';
import { createToaster } from "@meforma/vue-toaster";
import formNumber from '../components/formNumber.vue';
import VueCookies from 'vue-cookies';
import CustomButton from '../../components/CustomButton.vue';
import SelectComp from '../../components/SelectComp.vue';
import { FormatData } from '../../boot/FormatData';



// import { BIcon } from 'bootstrap-vue' 
export default {
  name: "NouveauClient",
  components: {
    SelectComp,
    formNumber, CustomButton
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
    let birthday = ref(new Date())
    let lPays = ref([])
    let supplementaire = ref()
    let paysSms = ref()
    let paysR = ref()
    let date = ref();
    let password = ref('');
    let repassword = ref('');
    let entreprise = ref('');
    let prenom = ref('');
    let nom = ref('');
    let phone = ref('');
    let mail = ref('');
    let toast = createToaster();
    let loading = ref(false);
    let listRoles = ref([]);
    let role = ref(null);
    let posteSocial = ref('');
    onMounted(async () => {
      await getRoles();

      await getPays();


    });

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

    }
    function seeMore(param) {


      supplementaire.value = param;

    }
    async function getPays() {
      const response = await new RequestApi().getPaysAction();
      if (response.status) {
        lPays.value = response.data
      }


    }
    const creerCompte = async () => {
      if (8 > phone.value.length || phone.value.length > 15) {
        toast.error(`Entrer un numero de telephone correct`, {
          // override the global option
          position: "bottom"
        });
        return false;
      }
      let verMail = new FormatData().verifCorrectMail(mail.value);
      console.log(verMail)
      if (!verMail) {
        toast.error(`Veuillez entrer une addresse mail correct`, {
          // override the global option
          position: "bottom"
        });
        return false;
      }
      let verName = new FormatData().verifCorrectText(nom.value);
      console.log(verName)
      if (!verName) {
        toast.error(`Veuillez entrer un nom correct`, {
          // override the global option
          position: "bottom"
        });
        return false;
      }

      var data = (role.value != null) ? {
        nom: nom.value,
        prenom: prenom.value,
        phone: phone.value,
        password: password.value,
        nomEntreprise: entreprise.value,
        email: mail.value,
        // roles: typeCompteChoisit.value.roles,
        codeParrain: VueCookies.get('id'),
        birthday: birthday.value, posteSocial: posteSocial.value,
        role: '/api/roles/'.concat(role.value.id),
        firstConnexion: true
      } : {
        nom: nom.value,
        prenom: prenom.value,
        phone: phone.value,
        password: password.value,
        nomEntreprise: entreprise.value,
        email: mail.value,
        // roles: typeCompteChoisit.value.roles,
        codeParrain: VueCookies.get('id'),
        birthday: birthday.value, posteSocial: posteSocial.value,
        firstConnexion: true

      };
      if (
        nom.value.length == 0 ||/* 
        prenom.value.length == 0 || */
        phone.value.length == 0 ||
        password.value.length == 0 ||/* 
        entreprise.value.length == 0 || */
        mail.value.length == 0 || errorPa.value
      ) {
        console.log(
          nom.value.length,
          prenom.value.length,
          phone.value.length,
          password.value.length,
          entreprise.value.length,
          mail.value.length
        );
        toast.error(`Veuillez remplir tout les champs`, {
          // override the global option
          position: "bottom"
        });

      } else {
        if (password.value != repassword.value) {
          toast.error(`Error vos mots de passes sont differents`, {
            // override the global option
            position: "bottom"
          });

        }
        else {
          loading.value = true;
          const response = await new RequestApi().signUp(data);

          if (response.status) {
            // eslint-disable-next-line require-atomic-updates
            (nom.value = ''),
              // eslint-disable-next-line require-atomic-updates
              (prenom.value = ''),
              // eslint-disable-next-line require-atomic-updates
              (phone.value = ''),
              // eslint-disable-next-line require-atomic-updates
              (password.value = ''),
              // eslint-disable-next-line require-atomic-updates
              (entreprise.value = ''),
              // eslint-disable-next-line require-atomic-updates
              (mail.value = ''),

              toast.success(`Success`, {
                // override the global option
                position: "bottom"
              });
            loading.value = false;


          } else {
            loading.value = false;

            toast.error(`Error`, {
              // override the global option
              position: "bottom"
            });

          }
        }
      }
    };
    let errorPa = ref(false);
    const verifPass = () => {
      if (password.value.length <= repassword.value.length) {

        if (password.value == repassword.value || repassword.value.length == 0) {
          errorPa.value = false;
        }
        else {
          errorPa.value = true;

        }
      }
      else if (repassword.value.length <= password.value.length && errorPa.value) {
        errorPa.value = false;
      }
    }
    return {
      manageProfil: (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '15') ? true : false : false,
      errorPa,
      verifPass,
      open, seeMore, supplementaire, lPays, paysSms, paysR
      , date, phone,
      password,
      entreprise,
      prenom,
      nom,
      mail, creerCompte, loading, repassword, birthday, listRoles, posteSocial, role
    };
  },
};
</script>
