<template>
  <div class="py-4 container-fluid">
    <div class=" row   me-3">
      <div class="col-12 ">
        <div class="row">
          <div class="col-lg-7 col-sm-7 ">

            <div class="card w-100 mb-4">
              <div class="card-body">
                <div class="part1">
                  <h4 class="card-title font-weight-bolder dark text-mobile">Ajoutez des fonds</h4>
                  <p class="card-text border-bottom text-mobile2 ">augmentez valeur de votre solde local.</p>
                  <div class="row">
                    <div class="col-lg-5 col-sm-12 form-group">

                      <!-- <label for="inputCity">Montant</label> -->
                      <form-number :readonly="loading" label="Montant (Minimum 500 FCFA)" v-model="montant"
                        placeholder="Montant">
                      </form-number>


                    </div>

                    <div class="col-lg-4 col-sm-12 form-group">

                      <label for="inputCity">Moyen de recharge</label>
                      <!-- <select id="inputState" v-model="paiementSelect" class="form-control form-select">
                        <option disabled selected default>
                          Selectionner le moyen de recharge
                        </option>
                        <option v-for="paiement in  optionsPaiement" :value='paiement' :key="paiement.id">
                          {{ paiement.label }}
                        </option>
                      </select> -->
                      <SelectComp v-model="paiementSelect" :readonly="loading" :data="optionsPaiement" placeholder='                          Selectionner le moyen de recharge
' />

                    </div>

                  </div>

                  <div class="row ms-1" v-if="paiementSelect.id == 18">En utilisant ce mode de paiement vous serez
                    contacte
                    par les
                    administrateurs dans le but de finaliser votre transaction. </div>
                  <CustomButton :title='"Rechargez"' :loading='loading' @update:loading="loading = $event"
                    v-if="(paiementSelect.id != 0 && montant >= 500 && montant.toString().split('')[0] != 0) ? true : false"
                    @click='choiseRecharge' :classe="'btn btn-primary'" />
                </div>
              </div>

            </div>
          </div>
          <div class="col-lg-2 col-sm-5">
            <wallet-info-card :classIcon="salary.classIcon" :title="salary.title" :desc="salary.desc"
              :price="salary.price" />
          </div>
        </div>
        <div class="card w-100 mb-10">
          <div class="card-body">
            <div class="part1">
              <h5 class="card-title font-weight-bolder dark text-mobile">Historique des transactions</h5>


              <div class="col-lg-12 col-sm-12 form-group  mt-5">

                <h6 for="inputState" class="border-bottom">Nouveaute</h6>
                <div class="  d-flex justify-content-center pt-5" v-if="loading0">

                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                </div>
                <div class="row justify-content-between " v-else v-for="transaction in lTransaction"
                  :key="transaction.id">
                  <div class="d-flex px-2 py-1 col-lg-8 col-sm-6">

                    <div>

                      <argon-button color="success" variant="outline" size="sm"
                        class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center">

                        <i class="fas fa-arrow-down" aria-hidden="true"></i>
                      </argon-button>
                    </div>
                    <div class="d-flex  flex-column justify-content-center">
                      <h6 class="mb-0 text-sm font-weight-bolder">Recharge</h6>
                      <p class="text-xs text-secondary mb-0">{{ transaction.dateCreate }}</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 ">
                    {{ transaction.status }}
                  </div>
                  <div class="col-lg-2 col-sm-6 ">
                    XAF {{ transaction.montant }}
                  </div>
                </div>

              </div>

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
    <vue-final-modal v-model="achat" style="" classes="modal-container-paiement   "
      content-class="modal-content-paiement">

      <iframe :src="srcValidPaiement" height="600" width="500">
        <p>Votre navigateur ne supporte aucune iframe !</p>
      </iframe>

    </vue-final-modal>
  </div>
</template>

<style scoped>
::v-deep .modal-container-paiement {
  display: flex;
  justify-content: center;


  align-items: center;
  width: auto;
  margin: auto
}

::v-deep .modal-content-paiement {
  width: auto;
  display: flex;
  flex-direction: column;
  max-height: 95%;
  margin: 0em 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;

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
<script  >
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
import { createToaster } from "@meforma/vue-toaster";
// import { BIcon } from 'bootstrap-vue' 
import WalletInfoCard from "@/examples/Cards/WalletInfoCard.vue";
import CustomButton from '../../components/CustomButton.vue';
import store from "../../store";
import formNumber from "../components/formNumber.vue";
import VueCookies from 'vue-cookies'
import { VueFinalModal } from 'vue-final-modal'
import { formatDate } from "../../boot/formatDate";
import ArgonButton from "@/components/ArgonButton.vue";
import SelectComp from '../../components/SelectComp.vue';

export default {
  name: "RechargeWallet",
  components: {
    WalletInfoCard,
    SelectComp,
    CustomButton, formNumber, VueFinalModal, ArgonButton

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
    let lPays = ref([])
    let achat = ref(false);
    let srcValidPaiement = ref('');
    var continues = ref(true);
    let loading = ref(false);

    const paiementSelect = ref({ id: '', label: 'Aucun' });
    const optionsPaiement = ref([
      { id: '18', label: 'System' }
    ]);
    let montant = ref('')
    let bulkSms = ref()
    let paysSms = ref()
    let paysR = ref()
    let loading0 = ref(true);
    let lTransaction = ref([])
    let password = ref('');
    let toast = createToaster();
    onMounted(async () => {

      await getPays(); await getModePaiement();
      await new RequestApi().getSoldeAccountAction(2);

      salary.value = {
        classIcon: "text-white fas fa-landmark",
        title: "SOLDE LOCAL",
        desc: "Local Wallet",
        price: "XAF ".concat((store.state.soldeLocal != null) ? store.state.soldeLocal : '0'),
      }

      await getListTransaction();

    })

    async function getListTransaction() {
      const response = await new RequestApi().getListTransactionUserAccount(2);

      if (response.status) {

        for (let i = 0; i < response.data.length; i++) {

          const transaction = response.data[i];
          lTransaction.value.push({
            transactionId: transaction['id'],
            type: transaction['typeTransaction']['id'],
            description: transaction['description'],
            dateCreate: formatDate(transaction['dateCreate'], 4),
            montant: transaction['montant'],
            status: transaction['status'] == true ? 'Reussi' : ' En attente '

          })

        }
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
    let salary = ref({
      classIcon: "text-white fas fa-landmark",
      title: "SOLDE LOCAL",
      desc: "Local Wallet",
      price: "XAF ".concat((store.state.soldeLocal != null) ? store.state.soldeLocal : '0'),
    })
    async function getPays() {
      const response = await new RequestApi().getPaysAction();
      if (response.status) {
        lPays.value = response.data
      }


    }

    // async function getDepotAccount() {
    //   const response = await new RequestApi().getDepotAccountAction();
    //   if (response.status) {
    //     lRetraitAccount.value = response.data
    //   }


    // }


    const getModePaiement = async () => {

      const response = await new RequestApi().getModePaiementAction();

      for (var i = 0; i < response.data.length; i++) {
        let x = response.data[i];

        if (x['id'] != 1) {
          optionsPaiement.value.push({

            id: x['@id'],


            label: x.libelle,
          })
        }
      }

    };

    function choiseRecharge() {
      if (paiementSelect.value.id == 18) {
        return RechargerCompteSystem();
      } else {
        return RechargerCompte()
      }
    }

    async function RechargerCompte() {
      console.log(loading.value);
      if (parseInt(montant.value) >= 500) {
        if (paiementSelect.value.id.split('/')[3] != 3) {
          loading.value = !loading.value
          // const validate = await new RequestApi().logInValidate(password.value);
          // if (validate.status) {

          let data = {
            montant: montant.value,
            type: 'MOBILE_MONEY',
            typeTransaction: '/api/type_transactions/1',
            modePaiement: paiementSelect.value.id.split('/')[3],
            clientId: VueCookies.get('id')
          }
          const response = await new RequestApi().rechargerSolde(data);
          if (response.status) {



            achat.value = response.status
            srcValidPaiement.value = response.paymentUrl

            let dataVerfitrans = {

              token: response.paymentToken,


              modePaiement: paiementSelect.value.id.toString().split('/')[3],


            };
            // let i = ref(0);
            let startTime = ref(new Date());


            while (new Date().getMinutes() - startTime.value.getMinutes() < 4) {
              // console.log('***', new Date().getMinutes(), startTime.value.getMinutes(), ( < new Date().getMinutes() - startTime.value.getMinutes()), (new Date().getMinutes() - startTime.value.getMinutes() < 5))
              const response0 = await new RequestApi().waitStaterechargerSolde(dataVerfitrans, 0);

              if (response0.data['code'] == '00') {
                // eslint-disable-next-line require-atomic-updates
                continues.value = false;
                paiementSelect.value = { id: 0, label: 'Aucun' };
                montant.value = 0;
                // eslint-disable-next-line require-atomic-updates
                loading.value = !loading.value
                toast.success(`Recharge Effectue avec success`, {
                  // override the global option
                  position: "bottom"
                });
              }

              if (2 < new Date().getMinutes() - startTime.value.getMinutes()) {
                if (new Date().getMinutes() - startTime.value.getMinutes() < 3) {
                  // eslint-disable-next-line require-atomic-updates
                  continues.value = false;
                  achat.value = false;

                  // eslint-disable-next-line require-atomic-updates
                  loading.value = !loading.value

                  toast.error(`Vous n'avez pas valide la transaction a tant`, {
                    // override the global option
                    position: "bottom"
                  }); break;
                }
              }

              else {
                // i.value++;
              }
            }

            // // eslint-disable-next-line require-atomic-updates
            // continues.value = false;
            // achat.value = false;

            // // eslint-disable-next-line require-atomic-updates
            // loading.value = !loading.value
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
        }
        else {
          loading.value = !loading.value

          let data = {
            montant: montant.value,

            clientId: VueCookies.get('id')
          }
          console.log(data);
          const response = await new RequestApi().transfertCompteAction(data);
          if (response.status) {

            paiementSelect.value = { id: 0, label: 'Aucun' };;
            montant.value = 0;

            // eslint-disable-next-line require-atomic-updates
            loading.value = !loading.value
            toast.success(`Recharge locale Effectue avec success`, {
              // override the global option
              position: "bottom"
            });


          } else {
            // eslint-disable-next-line require-atomic-updates
            loading.value = !loading.value
            if (response.aff) {
              toast.error(`Une erreur s'est produite, verifier votre solde avant d'effectuer la recharge`, {
                // override the global option
                position: "bottom"
              });
            }
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

        toast.error(`Veuillez entrer un montant correct`, {
          // override the global option
          position: "bottom"
        });

      }
    }
    async function RechargerCompteSystem() {
      console.log(loading.value);
      if (parseInt(montant.value) >= 500) {
        if (paiementSelect.value.id == 18) {
          loading.value = !loading.value
          // const validate = await new RequestApi().logInValidate(password.value);
          // if (validate.status) {

          let data = {
            montant: montant.value,


            destinataire: VueCookies.get('keySecret')
          }
          console.log(data);
          const response = await new RequestApi().systemAskCreditAction(data);
          if (response.status) {

            paiementSelect.value = { id: '', label: 'Aucun' };
            montant.value = 0;

            // eslint-disable-next-line require-atomic-updates
            loading.value = !loading.value
            toast.success(`Demande Recharge locale Effectue avec success`, {
              // override the global option
              position: "bottom"
            });


          } else {
            // eslint-disable-next-line require-atomic-updates
            loading.value = !loading.value
            if (response.aff) {
              toast.error(`Une erreur s'est produite, verifier votre solde avant d'effectuer la recharge`, {
                // override the global option
                position: "bottom"
              });
            }
          }
        } else {

          toast.error(`Veuillez verifier vos informations`, {
            // override the global option
            position: "bottom"
          });

        }

      }
      else {

        toast.error(`Veuillez entrer un montant correct`, {
          // override the global option
          position: "bottom"
        });

      }
    }
    return {
      open, bulkSms, lPays, paysSms, paysR, RechargerCompteSystem, choiseRecharge,
      salary, RechargerCompte, paiementSelect, optionsPaiement, montant, achat, srcValidPaiement, loading, lTransaction
      , loading0, password
    };

  }
};
</script>
