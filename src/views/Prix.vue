<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" v-bind:darkMode="true"
          isBtn="bg-gradient-success" />
      </div>
    </div>
  </div>
  <main class="main-content mt-0">
    <div class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
      style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg'); background-position: top;">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">

        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-8 col-lg-8 d-flex col-md-8 col-sm-12 px-2 mx-auto">
          <div class="card  w-100  z-index-0">
            <div class="  text-center pt-4">
              <img src='../assets/img/logos/devoo.svg' style="   height: 100px; width: 50px;"
                class="navbar-brand-img h-100" alt="main_logo" />

            </div>
            <div class="card-title text-center pt-4">
              <h5>Achat Rapide.</h5>

              <div class="mt-2 position-relative text-center">
                <p class="text-sm   mb-2 text-secondary ">
                  Definissez vos prefrences.
                </p>
                <!--  <p class="text-sm   mb-2 text-secondary " v-if='state == 1'>
                  Entrer vos information de compte pour acheter
                </p> -->
              </div>
            </div>
            <div class="row mx-auto  px-2">


              <form-number class="col-12 form-group" :readonly="loading" label="Quantite" @keyup="getFinal"
                v-model='quantity'></form-number>
              <form-number class="col-12 form-group" :readonly="loading" label="Nombre de jour" @keyup="getLicenceForQt"
                v-model='day'></form-number>
              <div class="col-12 form-group">

                <label for="inputCity">Licence</label>

                <SelectComp2 v-model="licence" type="2" :data="optionsLicence" :keyup="getFinal()" placeholder="  Selectionner la Licence
                " />
              </div>
              <div class="col-12 form-group">

                <label for="inputCity">Pays</label>

                <SelectComp2 v-model="paysR" :data="lPays" :keyup="getFinal()" placeholder="  Selectionner le pays
                " />
              </div>

            </div>


          </div>
          <div class="card  w-100 ms-2 z-index-0">
            <!--   <div class="  text-center pt-4">
              <img src='../assets/img/logos/devoo.svg' style="   height: 100px; width: 50px;"
                class="navbar-brand-img h-100" alt="main_logo" />

            </div> -->
            <div class="card-title text-center pt-2 m-auto" v-if="licence.id == 0 || paysR.id == 0 || quantity == 0">
              <h5>Votre Licence</h5>

              <div class="mt-2 position-relative text-center">

                <p class="text-sm   mb-2 text-secondary ">
                  Remplissez les champs et previsualisez ici
                </p>
              </div>
            </div>
            <div class="card-title text-center pt-2" v-if="licence.id != 0 && paysR.id != 0 && quantity != 0">
              <h5>Votre Licence</h5>

              <div class="mt-2 position-relative text-center">
                <p class="text-sm   mb-2 text-secondary " v-if='state == 0'>
                  Visualisez votre prix personnalise
                </p>
                <p class="text-sm   mb-2 text-secondary " v-if='state == 1'>
                  Entrer vos information de compte pour acheter
                </p>
              </div>
            </div>

            <div class="row mx-auto  px-2" v-if="licence.id != 0 && paysR.id != 0 && quantity != 0">



              <div class="col-12 form-group">

                <label for="inputCity">Acaht d'une {{ licence.label }} de {{ quantity }} sms pour la route {{
    paysR.label
}} :
                </label><label for="inputCity">Montant de votre achat de {{ quantity }} :
                </label>
                <p class="text-lg text-center  font-weight-bold mb-2 text-primary " style="font-size:25px">
                  {{ montantFinalSms }} XAF
                </p>


              </div>
            </div>
            <div class="row  mx-auto justify-content-center px-2"
              v-if="state == 1 && licence.id != 0 && paysR.id != 0 && quantity != 0">


              <form-number class="col-12 form-group" type="phone" placeholder="phone" :readonly="loading" label="Phone"
                v-model='phone'></form-number>

              <!-- <div class="mb-3 justify-content-center  "> -->
              <form-password type="password" class="col-12 form-group" :readonly='loading' placeholder="Password"
                v-model='password' label="password" size="lg" />
              <!-- </div> -->
              <div class="row d-flex   justify-content-center">
                <div class="col-xl-6 col-lg-6 d-flex col-md-6  col-sm-12 form-group "
                  v-for="paiement in  optionsPaiement" :key="paiement.id">
                  <div class="form-check">
                    <label for="inputCity" class="form-check-label pe-3">{{ paiement.label }}</label>
                    <input class="form-check-input" :readonly="loading" type="radio" name="exampleRadios"
                      id="exampleRadios1" value="option1" @click="choisePaiement(paiement, false)">
                  </div>



                </div>
              </div>
            </div>


            <div class="row col-12 mx-auto px-2" v-if="licence.id != 0 && paysR.id != 0 && quantity != 0">



              <div class="text-center  ">
                <CustomButton :title='state == 0 ? "Demarrer" : "Acheter"' :loading='loading'
                  v-if="state == 0 || state == 1" @update:loading="loading = $event" @click='goNext'
                  :classe="'btn btn-primary w-100 pt-2 pb-2 ps-5 pe-5'" fullWidth color="dark" variant="gradient"
                  size="lg" />
                <CustomButton :title='"Retour"' v-if="state == 1" @click='state = 0'
                  :classe="'btn btn-danger w-100 pt-2 pb-2 ps-5 pe-5'" />



              </div>



            </div>

          </div>

        </div>

      </div>
      <div class=" sidenavbottom text-center text-secondary justify-content-center mt-3 fl mx-auto " style=''>
        <div class=" ">Francais(France)</div>
        <div class=" ">Aide</div>
        <div class=" ">Confidentialite</div>
        <div class=" ">Conditions d'utilisation</div>
      </div>
    </div>

    <vue-final-modal v-model="finalisation" style="" id='md' classes="modal-container-paiement   "
      content-class="modal-content-paiement">

      <iframe :src="srcValidPaiement" id='md' height="600" width="500">
        <p>Votre navigateur ne supporte aucune iframe !</p>
      </iframe>

    </vue-final-modal>
  </main>

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

.mouse :hover {
  cursor: pointer
}

/* // Small devices (landscape phones, 576px and up)  */
@media (max-width: 500px) {
  .fl {

    display: block
  }
}

@media (min-width: 501px) {
  .fl {

    display: flex
  }
}

.sidenavbottom {
  text-align: center
}

.sidenavbottom div {
  margin-left: 20px
}

::placeholder {
  text-align: center;
}

.card .card-body {
  font-family: "Open Sans", sans-serif;
  padding-top: 0rem;
}

.asd {
  border-radius: 50px;
  font-size: 10px;
  width: 25em;

  margin: auto;
}
</style>
<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
// import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import CustomButton from '../components/CustomButton.vue';

import { createToaster } from "@meforma/vue-toaster";
import router from '../router';
import { FormatData } from '../boot/FormatData';

import store from "../store";

import { onMounted, ref } from '@vue/runtime-core';
// import VueCookies from 'vue-cookies'
import { RequestApi } from '../boot/RequestApi';

const body = document.getElementsByTagName("body")[0];
export default {
  name: "price",
  components: {
    Navbar,
    // ArgonCheckbox,
    CustomButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },



  setup() {

    onMounted(async () => {
      await getLicence();
      await getPays();
      await getModePaiement();
      await getTrancheSms();


    });

    let lPays = ref([{ id: 0, label: 'Aucun', }])
    let supplementaire = ref()
    let achat = ref(false);
    let loading = ref(false);

    let finalisation = ref(false);
    let paysR = ref({
      id: 0, label: 'Selectionner le pays',
    })
    let quantity = ref(0);
    let srcValidPaiement = ref('');
    let reduction = ref(0);
    let password = ref('');
    let montantFinalSms = ref(0)
    let toast = createToaster();
    const listTranches = ref([
      {
        min: 0,
        max: 0,
        pourcentage: 0,
      },
    ]);
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
    const optionsPaiement = ref([


    ]);
    const paiementSelect = ref({ id: 0, label: 'Aucun' });

    const licence = ref({ id: 0, nom: 'Aucun' });

    const optionsLicence = ref([

      { id: 0, nom: 'Aucun' }
    ]);
    let day = ref(0);
    let optionsLicenceSave = ref([])
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

    }

    async function getLicence() {

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

    const getLicenceForQt = () => {
      // optionsLicence.value.length = 0

      console.log('day', optionsLicenceSave.value)
      if (parseInt(day.value.toString()) > 0) {
        console.log('0000', day.value, optionsLicenceSave.value.length)
        optionsLicence.value = []

        optionsLicenceSave.value.some((el) => {
          (day.value <=
            el.duree || el.duree == 0) ? optionsLicence.value.push(el) : null;
        })
      }
      if (optionsLicence.value.length == 0) {
        console.log('vide')

        optionsLicence.value = optionsLicenceSave.value
      } else {
        console.log(licence.value)
        if (!optionsLicence.value.includes(licence.value)) {
          licence.value = optionsLicence.value[0]
        }

        console.log(licence.value)
      }
      getFinal()
    };

    const getReduce = () => {

      quantity.value = new FormatData().verifNumber(quantity.value.toString())
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

    const getFinal = () => {
      getReduce()
      montantFinalSms.value = paysR.value.prix * parseInt(quantity.value);
      montantFinalSms.value =
        montantFinalSms.value -
        (montantFinalSms.value * reduction.value) / 100;
      montantFinalSms.value = Math.floor(montantFinalSms.value);
      montantFinalSms.value = licence.value.taux != 0 ? montantFinalSms.value * licence.value.taux : montantFinalSms.value

      montantFinalSms.value = isNaN(montantFinalSms.value) ? 0 : montantFinalSms.value

    }
    const goNext = () => {

      if (state.value != 1) {
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
        if (parseInt(quantity.value.toString()) > 0) {

          state.value = 1
          // promptBuySms.value = !promptBuySms.value;
        } else {
          toast.error(`Veuillez entrer une quantite d'sms correcte`, {
            // override the global option
            position: "bottom"
          });
        }
      }
      else {
        acheterSms()
      }
    };
    let stockAlerte = ref(0);
    const acheterSms = async () => {

      if (parseInt(quantity.value.toString()) > 0 && parseInt(quantity.value.toString()) >= 10) {


        let dataLSA = ref([])
        montantFinalSms.value = paysR.value.prix * parseInt(quantity.value);
        montantFinalSms.value =
          montantFinalSms.value -
          (montantFinalSms.value * reduction.value) / 100;
        montantFinalSms.value = licence.value.taux != 0 ? montantFinalSms.value * licence.value.taux : montantFinalSms.value

        montantFinalSms.value = Math.floor(montantFinalSms.value);
        if (parseInt(montantFinalSms.value) > 0) {
          loading.value = !loading.value;
          const validate = await new RequestApi().logIn(phone.value, password.value);
          console.log(validate)
          if (validate.status) {

            // promptBuySms.value = !promptBuySms.value;
            if (paiementSelect.value.id.toString().split('/')[3] == 1) {


              dataLSA.value = {

                sourcePaiement: 1,
                quantite: quantity.value,

                routeId: paysR.value.id,
                stockAlerte: stockAlerte.value,
                idLicence: licence.value.id,
                clientId: validate.id,
                recepteurId: validate.id,
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
                clientId: validate.id,

                recepteurId: validate.id,
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

              countDownTimer()   // eslint-disable-next-line require-atomic-updates
              loading.value = !loading.value;


              // eslint-disable-next-line require-atomic-updates

              // eslint-disable-next-line require-atomic-updates

              if (response.sourcePaiement == 1) {
                password.value = ''; quantity.value = 0;
                toast.success(`Achat De la Licence d'sms effectuee avec success`, {
                  // override the global option
                  position: "bottom"
                });

              } else {

                achat.value = true;
                finalisation.value = true;
                srcValidPaiement.value = response.paymentUrl;
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
                    password.value = '';
                    // eslint-disable-next-line require-atomic-updates
                    quantity.value = 0;
                    // eslint-disable-next-line require-atomic-updates
                    ;
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
                    finalisation.value = false;
                    achat.value = false;
                    toast.error(`Vous n'avez pas valide la transaction a tant`, {
                      // override the global option
                      position: "bottom"
                    }); break;
                  }

                  else {
                    i.value++;
                  }

                  //console.log('***********', i.value)
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


          toast.error(`Remplissez correctement les champs`, {
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
    let state = ref(0)
    let phone = ref(0)
    return {
      day, getLicenceForQt, optionsLicenceSave, getFinal, phone,
      licence, optionsLicence, state,
      open, choisePaiement, supplementaire, lPays, paysR, finalisation, quantity, optionsPaiement, paiementSelect, goNext, acheterSms, montantFinalSms, getReduce
      , achat, srcValidPaiement, loading, password, stockAlerte
    };
  }
}
</script>