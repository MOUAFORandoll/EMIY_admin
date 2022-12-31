<template>
  <div class="py-4 container-fluid">
    <div class=" row   me-3">
      <div class="col-12 ">
        <div class="row">
          <div class="col-lg-12 col-sm-12 ">

            <div class="card w-100 mb-4">
              <div class="card-body">
                <div class="part1">
                  <h4 class="card-title font-weight-bolder dark text-mobile">Ajoutez des fonds</h4>
                  <p class="card-text border-bottom text-mobile2 ">augmentez valeur du solde d'un utilisateur.</p>
                  <div class="row">
                    <div class="col-lg-4 col-sm-12 form-group">

                      <label for="inputCity">Beneficiere</label>
                      <!--  <select id="inputState" v-model='userSelect' class="form-control form-select">
                        <option disabled selected default>
                          Selectionner l'utilisateur
                        </option>
                        <option v-for="user in optionsUser" :value="user" :key="user.id">
                          {{ user.nom }}
                        </option>
                      </select> -->
                      <SelectComp v-model="userSelect" type="1" :data="optionsUser"
                        placeholder="Selectionner l'utilisateur" />
                    </div>

                    <div class="col-lg-4 col-sm-12 form-group">

                      <label for="inputCity">Compte</label>
                      <!-- <select id="inputState" v-model="serviceSelect" class="form-control form-select">
                        <option disabled selected default>
                          Selectionner le compte
                        </option>
                        <option v-for="paiement in  optionsService" :value='paiement' :key="paiement.id">
                          {{ paiement.label }}
                        </option>
                      </select> -->
                      <SelectComp v-model="serviceSelect" :data="optionsService"
                        placeholder="Selectionner  le compte" />

                    </div>
                    <div class="col-lg-4 col-sm-12 form-group">

                      <!-- <label for="inputCity">Montant</label> -->
                      <form-number :readonly="loading" label="Montant (Minimum 500 FCFA)" v-model="montant"
                        placeholder="Montant">
                      </form-number>


                    </div>

                  </div>
                </div>

                <CustomButton :title='"Rechargez"'
                  v-show="(userSelect.id != 0 && serviceSelect.id != 0 && montant >= 500 && montant.toString().split('')[0] != 0) ? true : false"
                  @click='achat = true' :classe="'btn btn-primary'" />

              </div>

            </div>
          </div>

        </div>
        <div class="card w-100 mb-10">
          <div class="card-body">
            <div class="part1">
              <h5 class="card-title font-weight-bolder dark text-mobile">Historique des transactions</h5>


              <div class="col-lg-12 col-sm-12 form-group  mt-5">


                <div class="  d-flex justify-content-center pt-5" v-if="loading0">

                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                </div>
                <table class="table  " v-else>

                  <tbody>
                    <tr v-for="transaction in lTransaction" :key="transaction.id" class="mouse">
                      <td class="w-30">
                        <div>

                          <div class="ml-2">
                            <p class="mb-0 ml-2 text-xs ">Nom du Recepteur:</p>
                            <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ transaction.recepteur }}
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="text-left">
                          <p class="mb-0 text-xs ">Montant:</p>
                          <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ transaction.montant }} </h6>
                        </div>
                      </td>

                      <td class='mobile'>
                        <div class="text-left">
                          <p class="mb-0 text-xs ">Compte:</p>
                          <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ transaction.compte }}</h6>
                        </div>
                      </td>
                      <td class='mobile'>
                        <div class="text-left">
                          <p class="mb-0 text-xs ">Status:</p>
                          <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ transaction.status }}</h6>
                        </div>
                      </td>
                      <td class='mobile'>
                        <div class="text-left">
                          <p class="mb-0 text-xs ">Date de Demande:</p>
                          <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ transaction.date }}</h6>
                        </div>
                      </td>

                      <td class="text-left" align='right'>
                        <div class="text-left col">

                          <Popper class="theme" placement="left" v-if="transaction.statusB == 0"
                            @click='idTransaction = transaction.id'>
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <template #content>
                              <div class="mouse" v-if="!loading1" @click="achat0 = true">
                                Valider

                              </div>

                              <i class="fa fa-spinner fa-spin" v-if="loading1" style="  font-size:30px; "></i>
                            </template>
                          </Popper>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- <div class="col-lg-12 col-sm-12 form-group  mt-5">

                <h6 for="inputState" class="border-bottom">Hier</h6>
                <div class="row justify-content-between ">
                  <div class="d-flex px-2 py-1 col-lg-10 col-sm-6">

                    <div>
                      <img src="../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1" />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm font-weight-bolder">Recharge</h6>
                      <p class="text-xs text-secondary mb-0">14 juin 2022 vers 13h23min</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 ">
                    XAF 15000
                  </div>
                </div>

              </div> -->


              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <vue-final-modal v-model="achat" style="" classes="modal-container " content-class="modal-content">
      <span class="modal__title text-warning">Alert
      </span>
      <span class="modal__title border-bottom mb-1 font-weight-normal"> Veuillez renseigner votre mot de passe
        pour confirmer
      </span><span class="modal__title ">Mot de passe
      </span>
      <div class="modal__content">


        <input type="password" :readonly="loading" v-model="password" class="form-control  " />

      </div>
      <div class="modal__action">
        <CustomButton :title='"Valider"' :loading='loading' @update:loading="loading = $event" @click='systemCredit'
          :classe="'btn btn-primary '" />

      </div>
    </vue-final-modal>
    <vue-final-modal v-model="achat0" style="" classes="modal-container " content-class="modal-content">
      <span class="modal__title text-warning">Alert
      </span>
      <span class="modal__title border-bottom mb-1 font-weight-normal"> Veuillez renseigner votre mot de passe
        pour confirmer
      </span><span class="modal__title ">Mot de passe
      </span>
      <div class="modal__content">


        <input type="password" :readonly="loading" v-model="password" class="form-control  " />

      </div>
      <div class="modal__action">
        <CustomButton :title='"Valider"' :loading='loading1' @update:loading="loading1 = $event" @click='validateCredit'
          :classe="'btn btn-primary '" />

      </div>
    </vue-final-modal>
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

::v-deep .modal-container {
  display: flex;
  justify-content: center;

  align-items: center;
  width: auto;
  padding-left: auto
}

::v-deep .modal-content {
  width: 20%;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0em 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

@media only screen and (max-width: 992px) {

  ::v-deep .modal-container {
    display: flex;
    justify-content: center;

    align-items: center;
    width: auto;
    padding-left: auto
  }

  ::v-deep .modal-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    max-height: 90%;
    margin: 0em 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
  }

}

.modal__title {
  /* margin: 0 2rem 0.5rem 0; */
  font-size: 0.8rem;
  font-weight: 0;
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
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
import { createToaster } from "@meforma/vue-toaster";
import CustomButton from '../../components/CustomButton.vue';
import formNumber from "../components/formNumber.vue";
import VueCookies from 'vue-cookies'
import { VueFinalModal } from 'vue-final-modal'
// import { formatDate } from "../../boot/formatDate";
// import ArgonButton from "@/components/ArgonButton.vue";
import SelectComp from '../../components/SelectComp.vue';

export default {
  name: "RechargeSysteme",
  components: {
    SelectComp,
    CustomButton, formNumber, VueFinalModal,  // ArgonButton

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

    let loading = ref(false);
    let achat = ref(false);
    let achat0 = ref(false);

    let montant = ref('')
    let loading0 = ref(true);
    let lTransaction = ref([])
    let password = ref('');
    let toast = createToaster();
    onMounted(async () => {

      await getChildren();


      await getListTransaction();

    })

    async function getListTransaction() {
      loading0.value = true;
      const response = await new RequestApi().systemReadCreditAction();
      if (response.status) {

        lTransaction.value = response.data;

        loading0.value = !loading0.value;


      } else {

        // eslint-disable-next-line require-atomic-updates
        loading0.value = !loading0.value;
        toast.error(`Une erreur s'est produite`, {
          // override the global option
          position: "bottom"
        });
      }


    }
    async function getChildren() {
      const response = await new RequestApi().getParrainUserAction();
      if (response.status) {

        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          console.log(element);
          optionsUser.value.push({

            id: element['id'],


            nom: element['name'],
          })

        } console.log(optionsUser.value)
      }
      else {
        //
      }
    }


    const serviceSelect = ref({ id: 0, label: 'Aucun' });
    const optionsService = ref([
      { id: 2, label: 'Compte Local' }, /* { id: 3, label: 'Porte feuille' }, */

    ]);

    const optionsUser = ref([


    ]);

    const userSelect = ref({ id: 0, nom: 'Moi' });

    async function systemCredit() {
      loading.value = true
      const response = await new RequestApi().logIn(
        VueCookies.get('phone'),
        password.value
      );

      if (response.status) {
        if (parseInt(montant.value) >= 500) {
          if (serviceSelect.value.id != 0) {

            // const validate = await new RequestApi().logInValidate(password.value);
            // if (validate.status) {

            let data = {
              montant: montant.value,
              destinataire: userSelect.value.id,
              typeCompte: serviceSelect.value.id,
              keySecret: VueCookies.get('keySecret')
            }
            const response = await new RequestApi().systemCreditAction(data);
            if (response.status) {
              await getListTransaction();
              // eslint-disable-next-line require-atomic-updates
              achat0.value = false
              achat.value = false
              loading.value = false
              toast.success(`Recharge Effectue avec success`, {
                // override the global option
                position: "bottom"
              });

            } else {

              // eslint-disable-next-line require-atomic-updates
              loading.value = false
              if (response.aff) {
                toast.error(`Une erreur s'est produite`, {
                  // override the global option
                  position: "bottom"
                });
              }
            }
          } else {

            // eslint-disable-next-line require-atomic-updates
            loading.value = false
            if (response.aff) {
              toast.error(`Une erreur s'est produite`, {
                // override the global option
                position: "bottom"
              });
            }
          }

        } else {

          // eslint-disable-next-line require-atomic-updates
          loading.value = false
          if (response.aff) {
            toast.error(`Une erreur s'est produite`, {
              // override the global option
              position: "bottom"
            });
          }
        }
      }
      else {
        password.value = '';

        // eslint-disable-next-line require-atomic-updates
        loading.value = false
        toast.error(`Mot de passe Incorrect`, {
          // override the global option
          position: "bottom"
        });

      }
    }
    let loading1 = ref(false);
    let idTransaction = ref(0)
    async function validateCredit() {
      loading1.value = true;
      const response = await new RequestApi().logIn(
        VueCookies.get('phone'),
        password.value
      );

      if (response.status) {
        loading1.value = true


        let data = {
          idTransaction: idTransaction.value,

          keySecret: VueCookies.get('keySecret')
        }
        const response = await new RequestApi().systemValidateCreditAction(data);
        if (response.status) {
          await getListTransaction();
          // eslint-disable-next-line require-atomic-updates
          loading1.value = false
          achat0.value = false
          achat.value = false
          toast.success(`Recharge Effectue avec success`, {
            // override the global option
            position: "bottom"
          });

        } else {

          // eslint-disable-next-line require-atomic-updates
          loading1.value = false
          if (response.aff) {
            toast.error(`Une erreur s'est produite`, {
              // override the global option
              position: "bottom"
            });
          }
        }
      }
      else {
        password.value = '';
        // eslint-disable-next-line require-atomic-updates
        loading.value = !loading.value
        toast.error(`Mot de passe Incorrect`, {
          // override the global option
          position: "bottom"
        });

      }



    }
    return {
      optionsUser, userSelect, systemCredit, serviceSelect, optionsService, montant, loading, lTransaction
      , loading0, password, loading1, validateCredit, achat, achat0, idTransaction
    };

  }
};
</script>
