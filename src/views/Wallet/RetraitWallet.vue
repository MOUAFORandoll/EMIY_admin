<template>
  <div class="py-4 container-fluid">
    <div class=" row   me-3">
      <div class="col-12 ">
        <div class="row">
          <div class="col-lg-7 col-sm-6 ">

            <div class="card w-100 mb-4">
              <div class="card-body">
                <div class="part1">
                  <h4 class="card-title font-weight-bolder dark text-mobile">Effectuez un retrait financier</h4>
                  <p class="card-text border-bottom text-mobile2 ">renseignez le montant du retrait et confirmes.</p>
                  <div class="row">
                    <div class="col-lg-4 col-sm-12 form-group">

                      <label for="inputCity">Montant</label>
                      <argon-input :readonly='loading' type="phone" v-model="montant" placeholder="montant"
                        aria-label="Name" />

                    </div>

                    <div class="col-lg-4 col-sm-12 form-group">

                      <label for="inputCity">Origine</label>
                      <!-- <select id="inputState" v-model="paiementSelect" class="form-control form-select">
                        <option disabled selected default>
                          Selectionner le moyen de retrait
                        </option>
                        <option v-for="paiement in  optionsPaiement" :key="paiement.id">
                          {{ paiement.label }}
                        </option>
                      </select> -->

                      <SelectComp v-model="paiementSelect" :data="optionsPaiement" placeholder='                          Selectionner le moyen de retrait
                        ' />
                    </div>

                  </div>
                </div>
                <div class="btn btn-primary "
                  v-show="(paiementSelect.id != 0 && montant >= 500 && montant.toString().split('')[0] != 0) ? true : false"
                  @click='validate'>
                  Retirer</div>
              </div>

            </div>
          </div>
          <div class="col-lg-2 col-sm-6">
            <wallet-info-card :classIcon="salary.classIcon" :title="salary.title" :desc="salary.desc"
              :price="salary.price" />
          </div>
        </div>
        <div class="card w-100 mb-10">
          <div class="card-body">
            <div class="part1">
              <h4 class="card-title font-weight-bolder dark text-mobile">Historique des transactions</h4>


              <div class="col-lg-12 col-sm-12 form-group  mt-5">

                <h6 for="inputState" class="border-bottom">Nouveaute</h6>
                <div class="  d-flex justify-content-center pt-5" v-if="loading0">

                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                </div>
                <div class="row justify-content-between " v-else v-for="transaction in lTransaction"
                  :key="transaction.id">
                  <div class="d-flex px-2 py-1 col-lg-10 col-sm-6">

                    <div>

                      <argon-button color="danger" variant="outline" size="sm"
                        class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center">

                        <i class="fas fa-arrow-up" aria-hidden="true"></i>
                      </argon-button>

                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm font-weight-bolder">Retrait</h6>
                      <p class="text-xs text-secondary mb-0">{{ transaction.dateCreate }}</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 ">
                    XAF {{ transaction.montant }}
                  </div>
                </div>

              </div>

              <vue-final-modal v-model="promptValidation" style="" classes="modal-container "
                content-class="modal-content">
                <span class="modal__title text-warning">Alert
                </span>
                <span class="modal__title border-bottom mb-1 font-weight-normal"> Veuillez renseigner votre mot de passe
                  pour confirmer
                </span><span class="modal__title ">Mot de passe
                </span>
                <div class="modal__content">


                  <input type="password" v-model="password" class="form-control  " />

                </div>
                <div class="modal__action">
                  <CustomButton :title='"Valider"' :loading='loading' @update:loading="loading = $event"
                    @click='RetraitCompte' :classe="'btn btn-primary '" />

                </div>
              </vue-final-modal>


            </div>

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
// import { BIcon } from 'bootstrap-vue' 
import WalletInfoCard from "@/examples/Cards/WalletInfoCard.vue";
import VueCookies from 'vue-cookies'
import { VueFinalModal } from 'vue-final-modal'
import CustomButton from '../../components/CustomButton.vue';

import { formatDate } from "../../boot/formatDate";
import ArgonButton from "@/components/ArgonButton.vue";
import store from "../../store";
import ArgonInput from "@/components/ArgonInput.vue";

import SelectComp from '../../components/SelectComp.vue';

export default {
  name: "EditProfileUser",
  components: {
    SelectComp,
    WalletInfoCard,
    ArgonInput, ArgonButton, VueFinalModal, CustomButton

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
    let password = ref('');

    let lPays = ref([])
    let bulkSms = ref()
    let paysSms = ref()
    let paysR = ref()
    const paiementSelect = ref({ id: 0, label: 'Aucun' });
    const optionsPaiement = ref([

    ]);
    let montant = ref()
    let lTransaction = ref([])
    let loading0 = ref(true);
    let loading = ref(false);
    let promptValidation = ref(false);

    let toast = createToaster();
    onMounted(async () => {

      await getPays();
      await getModePaiement();
      await new RequestApi().getSoldeAccountAction(3);
      salary.value = {
        classIcon: "text-white fab fa-paypal",
        title: "PORTE FEUILLE",
        desc: "Wallet",
        price: "XAF ".concat((store.state.soldePorteFeuille != null) ? store.state.soldePorteFeuille : '0'),

      }
      await getListTransaction();

    })

    async function getListTransaction() {
      const response = await new RequestApi().getListTransactionUserAccount(3);
      console.log(response.data); if (response.status) {

        for (let i = 0; i < response.data.length; i++) {

          const transaction = response.data[i];
          lTransaction.value.push({
            transactionId: transaction['id'],
            type: transaction['typeTransaction']['id'],
            description: transaction['description'],
            dateCreate: formatDate(transaction['dateCreate'], 1),
            montant: transaction['montant']

          })

        }
        loading0.value = !loading0.value;


      } else {
        loading0.value = !loading0.value;

        // eslint-disable-next-line require-atomic-updates
        // loading.value = !loading.value;
        toast.error(`Une erreur s'est produite`, {
          // override the global option
          position: "bottom"
        });
      }


    }
    async function getPays() {
      const response = await new RequestApi().getPaysAction();
      if (response.status) {
        lPays.value = response.data
      }


    }
    const getModePaiement = async () => {

      const response = await new RequestApi().getModePaiementAction();
      for (var i = 0; i < response.data.length; i++) {
        let x = response.data[i];

        if (x['id'] == 3) {
          optionsPaiement.value.push({

            id: x['@id'],


            label: x.libelle,
          })
        }
      }
    };
    function validate() {
      if (parseInt(montant.value) > 0) {
        promptValidation.value = !promptValidation.value;
      }
      else {

        toast.error(`Veuillez entrer un montant correct`, {
          // override the global option
          position: "bottom"
        });

      }
    }
    async function RetraitCompte() {
      // eslint-disable-next-line require-atomic-updates
      loading.value = !loading.value

      const response = await new RequestApi().logIn(
        VueCookies.get('phone'),
        password.value
      );
      console.log('response.status', paiementSelect.value.id);
      if (response.status) {

        // const validate = await new RequestApi().logInValidate(password.value);
        // if (validate.status) {
        let data = {
          montant: montant.value,
          type: 'MOBILE_MONEY',
          typeTransaction: '/api/type_transactions/2',
          modePaiement: 3,
          clientId: VueCookies.get('id')
        }
        const response = await new RequestApi().retraitSolde(data);
        if (response.status) {


          paiementSelect.value = null;
          montant.value = 0;

          // eslint-disable-next-line require-atomic-updates
          loading.value = !loading.value
          toast.success(`Retrait Effectue avec success`, {
            // override the global option
            position: "bottom"
          });

        } else {

          // eslint-disable-next-line require-atomic-updates
          loading.value = !loading.value
          if (response.aff) {

            toast.error(`Une erreur s'est produite`, {
              // override the global option
              position: "bottom"
            });
          }

        }
        // }
        // else {
        //   // eslint-disable-next-line require-atomic-updates
        //   loading.value = false;

        //   toast.error(`Mot de passe incorrect Veuillez le verifier`, {
        //     // override the global option
        //     position: "bottom"
        //   });
        // }
      }
      else {

        // eslint-disable-next-line require-atomic-updates
        loading.value = !loading.value
        toast.error(`Mot de passe Incorrect`, {
          // override the global option
          position: "bottom"
        });

      }
    }
    let salary = ref({
      classIcon: "text-white fab fa-paypal",
      title: "PORTE FEUILLE",
      desc: "Wallet",
      price: "XAF ".concat((store.state.soldePorteFeuille != null) ? store.state.soldePorteFeuille : '0'),

    })

    return {
      validate, loading0, password, promptValidation, loading, open, bulkSms, lPays, paysSms, paysR, salary, paiementSelect, optionsPaiement, montant, lTransaction, RetraitCompte

    };
  },
};
</script>
