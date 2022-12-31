<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1">
              <h4 class="card-title font-weight-bolder dark text-mobile  ">Achettez une licence</h4>
              <p class="card-text border-bottom text-mobile2  text-mobile">Une licence pour vous ou pour un de vos
                membres.</p>
              <div class="row">
                <div class="col-lg-6 col-sm-12 form-group">

                  <label for="inputCity">Beneficiere</label>
                  <!-- <select id="inputState" v-model='userSelect' class="form-control form-select">
                <option disabled selected default>
                  Selectionner l'utilisateur
                </option>    <option v-for="user in optionsUser" :value="user" :key="user.id">
                      {{ user.nom }}
                    </option>
                  </select> -->
                  <SelectComp v-model="userSelect" :readonly="loading" type="1" :data="optionsUser"
                    placeholder="Selectionner l'utilisateur" />

                </div>

                <form-number class="col-lg-6 col-sm-12 form-group" :readonly="loading" label="Quantite"
                  @keyup="getReduce" v-model='quantity'></form-number>
                <form-number class="col-lg-6 col-sm-12 form-group" :readonly="loading" label="Stock Alerte"
                  v-model='stockAlerte'>
                </form-number>
                <div class="col-lg-6 col-sm-12 form-group">

                  <label for="inputCity">Licence</label>
                  <!-- <select id="inputState" required :readonly="loading" v-model="paysR" class="form-control form-select">
                
                                    <option disabled default selected>
                                      Selectionner le pays
                                    </option>
                                    <option v-for="option in lPays" :value="option" :key="option.id">
                                      {{ option.nom }}
                                    </option>
                                  </select> -->
                  <SelectComp2 v-model="licence" type="2" :data="optionsLicence" placeholder="  Selectionner la Licence
                " />
                </div>
                <div class="col-lg-6 col-sm-12 form-group">

                  <label for="inputCity">Pays</label>
                  <!-- <select id="inputState" required :readonly="loading" v-model="paysR" class="form-control form-select">
                
                                    <option disabled default selected>
                                      Selectionner le pays
                                    </option>
                                    <option v-for="option in lPays" :value="option" :key="option.id">
                                      {{ option.nom }}
                                    </option>
                                  </select> -->
                  <SelectComp2 v-model="paysR" :data="lPays" placeholder="  Selectionner le pays
                " />
                </div>

              </div>
            </div>
            <div class="part2 pt-5">
              <h4 class="card-title font-weight-bolder dark text-mobile">Methode de paiement</h4>
              <p class="card-text border-bottom text-mobile2 ">Choisissez votre mode de paiement.</p>

              <div class="row">


                <div class="col-lg-2 col-sm-12 form-group " v-for="paiement in  optionsPaiement" :key="paiement.id">
                  <div class="form-check">
                    <label for="inputCity" class="form-check-label pe-3">{{ paiement.label }}</label>
                    <input class="form-check-input" :readonly="loading" type="radio" name="exampleRadios"
                      id="exampleRadios1" value="option1" @click="choisePaiement(paiement, false)">
                  </div>

                </div>

                <!-- 
                <div class="col-lg-2 col-sm-12 form-group ">

                  <label for="inputCity" class="pe-3">Compte local</label>
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
                    @click="seeMore(false)">


                </div>
                <div class="col-lg-2 col-sm-12 form-group ">

                  <label for="inputCity" class="pe-3">Orange Money</label>
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
                    @click="seeMore(false)">


                </div>

                <div class="col-lg-2 col-sm-12 form-group ">

                  <label for="inputCity" class="pe-3">MTN Money</label>
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
                    @click="seeMore(false)">


                </div>
                <div class="col-lg-2 col-sm-12 form-group ">

                  <label for="inputCity" class="pe-3">Paypal</label>
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
                    @click="seeMore(true)">


                </div> -->

              </div>
              <div class="btn btn-primary ps-4 pe-4"
                v-show="(supplementaire != null && paiementSelect.id != 0 && quantity >= 10 && quantity.toString().split('')[0] != 0 && paysR.id != 0) ? !supplementaire : false"
                @click="goNext">Payer</div>
            </div>
          </div>
        </div>
        <div class="card w-100 mb-10" v-show="supplementaire">
          <div class="card-body">
            <div class="part1">
              <h5 class="card-title font-weight-bolder dark text-mobile">Information complementaire</h5>
              <p class="card-text border-bottom text-mobile2 ">Nous avons besoin de ces informations pour demarrer
                votre payement.
              </p>
              <div class="row">
                <div class="col-lg-4 col-sm-12 form-group  ">
                  <label for="inputState">Votre Nom</label>

                  <input type="text" :readonly="loading" class="form-control" id="inputCity">
                </div>
                <div class="col-lg-4 col-sm-12 form-group  ">
                  <label for="inputState">Prenom</label>

                  <input type="text" :readonly="loading" class="form-control" id="inputCity">
                </div>
                <div class="col-lg-4 col-sm-12 form-group  ">
                  <label for="inputState">Votre Ville</label>

                  <input type="text" :readonly="loading" class="form-control" id="inputCity">
                </div>
                <div class="col-lg-4 col-sm-12 form-group  ">
                  <label for="inputState">Code zip</label>

                  <input type="text" :readonly="loading" class="form-control" id="inputCity">
                </div>
                <div class="col-lg-4 col-sm-12 form-group">

                  <label for="inputCity">Votre Pays actuel</label>
                  <!-- <select id="inputState" v-model="paysR" class="form-control form-select">

                    <option disabled selected default>
                      Selectionner le pays
                    </option>
                    <option v-for="option in lPays" :value="option.value" :key="option.value">
                      {{ option.nom }}
                    </option>
                  </select> -->
                  <SelectComp v-model="paysR" :readonly="loading" :data="lPays" placeholder="  Selectionner le pays
                  " />
                </div>

              </div>

              <div class="btn btn-primary   ps-4 pe-4" @click="goNext">Payer</div>

            </div>

          </div>
        </div>

      </div>
    </div>
    <vue-final-modal v-model="finalisation" style="" classes="modal-container" content-class="modal-content">

      <span class="modal__title">Finalisation du paiement</span>
      <span class="border-bottom mb-3">Verifiez l'exacitude des informations et payer</span>
      <div class="modal__content">
        <div>
          <h6>Montant TOTAL </h6>
          <div class="font-weight-bolder"><span class="font-weight-bold">XAF</span> {{ montantFinalSms }}</div>
        </div>
        <label for="">Mot de passe</label>
        <input type="password" v-model="password" class="form-control " id="copier">

      </div>
      <div class="modal__action">
        <CustomButton :title='"Confirmer"' :loading='loading' @update:loading='"loading = $event"' @click='acheterSms'
          :classe="'btn btn-primary'" />
      </div>
    </vue-final-modal>
    <vue-final-modal v-model="achat" style="" id='md' classes="modal-container-paiement   "
      content-class="modal-content-paiement">

      <iframe :src="srcValidPaiement" id='md' height="600" width="500">
        <p>Votre navigateur ne supporte aucune iframe !</p>
      </iframe>

    </vue-final-modal>

  </div>
</template>

<style scoped>
#md {
  margin: auto
}

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
  margin: auto;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;

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
import { VueFinalModal } from 'vue-final-modal'
import formNumber from '../components/formNumber.vue';
import store from "../../store";
import { FormatData } from '../../boot/FormatData';
import VueCookies from 'vue-cookies'
import CustomButton from '../../components/CustomButton.vue';
import router from '../../router';
import SelectComp2 from '../../components/SelectComp2.vue';

export default {
  name: "AchatLicence",
  components: {
    SelectComp2,
    VueFinalModal,
    formNumber, CustomButton
  },

  beforeRouteEnter(to, from, next) {
    if (
      VueCookies.get('token') != undefined &&
      VueCookies.get('token') != 'undefined' &&
      VueCookies.get('token') != null
    ) {
      // console.log(
      //   VueCookies.get('token') != undefined &&
      //   VueCookies.get('token') != 'undefined' &&
      //   VueCookies.get('token') != null
      // );
      // // console.log('iiiiixzzxioooiioi', VueCookies.get('token'));
      // await refreshAuthenticated();
      next();
    } else {
      // //  console.log('llllllllll');
      next({ name: 'Signin' });

    }
  },
  setup() {
    let lPays = ref([{ id: 0, label: 'Aucun', }])
    let supplementaire = ref()
    let achat = ref(false);
    let loading = ref(false);
    var continues = ref(true);

    let finalisation = ref(false);
    let paysR = ref({
      id: 0, nom: 'Selectionner le pays',
    })
    let quantity = ref();
    let srcValidPaiement = ref('');
    let reduction = ref('');
    let password = ref('');
    let montantFinalSms = ref('')
    let toast = createToaster();
    const listTranches = ref([
      {
        min: 0,
        max: 0,
        pourcentage: 0,
      },
    ]);
    const paiementSelect = ref({ id: 0, label: 'Aucun' });
    const userSelect = ref({ id: VueCookies.get('id'), nom: 'Moi' });
    const beneficiaireSelect = ref({ id: 0, label: 'Aucun' });
    const optionsPaiement = ref([


    ]);

    const licence = ref({ id: 0, label: 'Aucun' });

    const optionsLicence = ref([


    ]);
    const optionsUser = ref([
      { id: VueCookies.get('id'), nom: 'Moi' }

    ]);
    onMounted(async () => {
      await getChildren();
      await getLicence();
      await getPays();
      await getModePaiement();
      await getTrancheSms();


    });
    function choisePaiement(paiement, parame) {
      paiementSelect.value = paiement

      supplementaire.value = parame;
      console.log(parame);
    }
    async function getPays() {
      const response = await new RequestApi().getRouteAction1();
      if (response.status) {
        lPays.value = response.data
      } else {

        toast.error(`Une erreur s'est produite`, {
          // override the global option
          position: "bottom"
        });
      }
      // console.log(lPays.value)

    } async function getLicence() {
      const response = await new RequestApi().getLicenceAction1();
      if (response.status) {
        optionsLicence.value = response.data
      } else {

        toast.error(`Une erreur s'est produite`, {
          // override the global option
          position: "bottom"
        });
      }
      // console.log(lPays.value)

    }

    const getModePaiement = async () => {

      if (store.state.listModePaiement == null) {
        await new RequestApi().getModePaiementAction();
        // console.log('nul///----')
      }

      for (let index = 0; index < store.state.listModePaiement.length; index++) {
        const element = store.state.listModePaiement[index];
        if (element.id != 3) {
          optionsPaiement.value.push({

            id: element['@id'],


            label: element.libelle,
          })
          // console.log(optionsPaiement.value)
        }
      }
    }

    async function getChildren() {
      const response = await new RequestApi().getParrainUserAction();
      if (response.status) {

        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          // console.log(element);
          optionsUser.value.push({

            id: element['id'],


            nom: element['name'],
          })

        }

        // console.log(optionsUser.value)
      }

      // 
      else {
        //
      }
    }

    const getTrancheSms = async () => {

      const response = await new RequestApi().getTranchesSmsAction();
      console.log('get qte statu', response.status, response.data);
      if (response.status) {
        listTranches.value = response.data.map((x) => {
          return {
            min: x.min,

            max: x.max,

            pourcentage: x.pourcentage,
          };
        });
      } else {
        // console.log('...');
        toast.error(`Une erreur s'est produite`, {
          // override the global option
          position: "bottom"
        });
      }
    };

    const getReduce = () => {
      // console.log('dssddssdsd');
      quantity.value = new FormatData().verifNumber(String(quantity.value))
      if (parseInt(quantity.value) != 0) {
        for (var i = 0; i < listTranches.value.length; i++) {
          if (
            listTranches.value[i].min <=
            parseInt(quantity.value) &&
            parseInt(quantity.value) <= listTranches.value[i].max
          ) {
            reduction.value = listTranches.value[i].pourcentage;
          } else if (
            listTranches.value[i].min <=
            parseInt(quantity.value) &&
            i == 0
          ) {
            reduction.value = 0;
          }
        }
      } else {
        reduction.value = 0;
      }
    };

    const goNext = () => {
      if (licence.value.id == 0) {
        toast.error(`Veuillez selectionner un licence  `, {
          // override the global option
          position: "bottom"
        });

        return false;
      } if (paysR.value.id == 0) {
        toast.error(`Veuillez selectionner un pays  `, {
          // override the global option
          position: "bottom"
        });

        return false;
      }
      if (parseInt(quantity.value) > 0) {
        montantFinalSms.value = paysR.value.prix * parseInt(quantity.value);
        montantFinalSms.value =
          montantFinalSms.value -
          (montantFinalSms.value * reduction.value) / 100;
        montantFinalSms.value = Math.floor(montantFinalSms.value);
        montantFinalSms.value = licence.value.prix != 0 ? montantFinalSms.value * licence.value.prix : montantFinalSms.value
        console.log(
          'voici le prix',
          paysR.value.prix,
          reduction.value / 100,
          montantFinalSms.value
        );
        finalisation.value = true

      } else {
        toast.error(`Veuillez entrer une quantite d'sms correcte`, {
          // override the global option
          position: "bottom"
        });
      }
    };
    let stockAlerte = ref(0);
    let countDown = ref(220);
    let countDownD = ref(220);
    const countDownTimer = () => {
      console.log(countDown.value)
      if (countDown.value > 0) {
        setTimeout(() => {
          countDown.value -= 1
          countDownTimer()
        }, 1000)
      }
    };
    const acheterSms = async () => {

      if ((parseInt(quantity.value) > 0 && parseInt(quantity.value) >= 10)) {
        loading.value = !loading.value;

        let dataLSA = ref([])
        montantFinalSms.value = paysR.value.prix * parseInt(quantity.value);
        montantFinalSms.value =
          montantFinalSms.value -
          (montantFinalSms.value * reduction.value) / 100;
        montantFinalSms.value = licence.value.prix != 0 ? montantFinalSms.value * licence.value.prix : montantFinalSms.value

        montantFinalSms.value = Math.floor(montantFinalSms.value);


        const validate = await new RequestApi().logInValidate(password.value);
        if (validate.status) {
          // promptBuySms.value = !promptBuySms.value;
          if (paiementSelect.value.id.toString().split('/')[3] == 1) {


            dataLSA.value = {

              sourcePaiement: 1,
              quantite: quantity.value,

              routeId: paysR.value.id,
              stockAlerte: stockAlerte.value,
              idLicence: licence.value.id,
              clientId: VueCookies.get('id'),
              recepteurId: userSelect.value.id,
              montant: montantFinalSms.value,
              modePaiement: paiementSelect.value.id.toString().split('/')[3],
            };
          }
          else {
            dataLSA.value = {
              quantite: quantity.value,
              sourcePaiement: 2,
              routeId: paysR.value.id,
              idLicence: licence.value.id,
              clientId: VueCookies.get('id'),

              recepteurId: userSelect.value.id,
              montant: montantFinalSms.value,
              stockAlerte: stockAlerte.value,
              modePaiement: paiementSelect.value.id.toString().split('/')[3],
              type: "MOBILE_MONEY"

            };
          }

          // console.log(dataLSA.value);
          const response = await new RequestApi().makePaiementAction(dataLSA.value);
          // console.log('response.status', response);
          if (response.status) {
            countDownTimer()
            // eslint-disable-next-line require-atomic-updates
            loading.value = !loading.value;


            // eslint-disable-next-line require-atomic-updates

            // eslint-disable-next-line require-atomic-updates
            paysR.value = { id: 0, label: 'Aucun', routes: [{ id: 0, prix: 0 }] };

            if (response.sourcePaiement == 1) {
              password.value = '';
              toast.success(`Achat De la Licence d'sms effectuee avec success`, {
                // override the global option
                position: "bottom"
              });

              router.push
                ({ name: 'Dashboard' });
            } else {

              achat.value = true;
              finalisation.value = false
              srcValidPaiement.value = response.paymentUrl
              let dataVerfitrans = {
                quantite: quantity.value,
                token: response.paymentToken,
                idListSmsAchete: response.idListSmsAchete,

                modePaiement: paiementSelect.value.id.toString().split('/')[3],

              };
              let i = ref(0);

              while (countDown.value > 0) {

                const response0 = await new RequestApi().waitStateLicenceTransaction(dataVerfitrans, 0);

                if (response0.data['code'] == '00') {
                  // eslint-disable-next-line require-atomic-updates
                  quantity.value = ' 0';
                  // eslint-disable-next-line require-atomic-updates
                  continues.value = false;
                  achat.value = false;
                  password.value = '';
                  // eslint-disable-next-line require-atomic-updates
                  loading.value = !loading.value
                  toast.success(`Achat Effectue avec success`, {
                    // override the global option
                    position: "bottom"
                  });

                  router.push
                    ({ name: 'ListLicence' });
                }

                if (countDown.value == 5) {
                  // eslint-disable-next-line require-atomic-updates
                  continues.value = false;
                  achat.value = false;
                  toast.error(`Vous n'avez pas valide la transaction a tant`, {
                    // override the global option
                    position: "bottom"
                  }); break;
                }

                else {
                  i.value++;
                }


              }


            }

          } else {
            password.value = '';
            // eslint-disable-next-line require-atomic-updates
            loading.value = !loading.value;
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
          loading.value = false;
          toast.error(`Mot de passe incorrect Veuillez le verifier`, {
            // override the global option
            position: "bottom"
          });
        }
      } else {

        toast.error(`Veuillez entrer une quantite d'sms correcte, minimum 10 sms `, {
          // override the global option
          position: "bottom"
        });


      }
      countDown.value = countDownD.value
    };
    return {
      licence, optionsLicence,
      open, choisePaiement, beneficiaireSelect, supplementaire, lPays, paysR, finalisation, quantity, optionsPaiement, paiementSelect, goNext, acheterSms, montantFinalSms, getReduce
      , achat, srcValidPaiement, loading, optionsUser, userSelect, password, stockAlerte
    };
  },
};
</script>
