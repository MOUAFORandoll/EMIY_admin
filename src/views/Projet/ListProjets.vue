<template>
  <div class="py-4 container-fluid w-100" style="border: none;">
    <div class=" row">
      <div class="col-12">
        <div class="" style="border: none;">





          <div class="card-body  " style="border: none;">


            <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
              <!-- <div class="card plus">+</div> -->


              <div class="card ps-3 mb-lg-0 mb-4 " v-if="gererP == 0">

                <div class="p-2 pb-2 border-bottom">
                  <div class="d-flex justify-content-between">
                    <h4 class="mb-1 ml-0 mt-2 font-weight-bolder text-mobile text-dark">Liste de vos projets</h4>
                  </div>
                  <h6 class="text-mobile2">Parcourez et reconfigurez votre projet</h6>
                </div>

                <div class="table-responsive trx mt-1">
                  <div class="  d-flex justify-content-center pb-3" v-if="loading0">

                    <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                  </div>
                  <table class="table  " v-else>
                    <div class="  d-flex justify-content-center pb-3" v-if="projetList.length == 0">

                      Vide

                    </div>
                    <tbody>
                      <tr v-for="(projet, index)  in projetList" v-show="start <= index && index < final"
                        :key="projet.id" class="mouse" :class="this.$store.state.darkMode ? 'mouseA' : 'mouseB'">
                        <td class="w-30">
                          <div>

                            <div class="ml-2">
                              <p class="mb-0 ml-2 text-xs ">Nom du projet:</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ projet.nomProjet }}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Solde Sms:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ projet.soldeSms }} </h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Stock Alerte:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ projet.stockAlerte }} </h6>
                          </div>
                        </td>

                        <td class='mobile'>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Date de Création:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ projet.date }}</h6>
                          </div>
                        </td>

                        <td class="text-left" align='right'>
                          <div class="text-left col" @click="selectprojet(projet)">

                            <Popper class="theme" placement="left">
                              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                              <template #content>
                                <div class="mouse" v-if="gererP != 4" @click="getProjetInfoC(projet.id)">
                                  Voir plus

                                </div>
                                <div class="mouse" v-if="gererP != 4" @click="gererP = 2">
                                  Crediter</div>
                                <div class="mouse" v-if="gererP != 4" @click="gererP = 3">
                                  Modifier Stock Alerte</div>
                                <i class="fa fa-spinner fa-spin" v-else-if="gererP == 4" style="  font-size:30px; "></i>
                              </template>
                            </Popper>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div>
                <div class='card-footer' v-if='(projetList.length > 10)' align='right'>
                  <div class="row   col-lg-1 col-md-4 col-xl-5 col-sm-5"
                    :class="this.$store.state.darkMode ? 'bg-default' : ''">
                    <div class="  mouseY">
                      <i @click="next" v-if='(final < projetList.length)' class="mouseY 	fa fa-angle-right"
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
              <div class="card w-100 mb-4" v-else-if="gererP == 1">


                <div class="  d-flex justify-content-center py-3" v-if="loadingGetProjet">

                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                </div>

                <div class="card-body" v-else>
                  <div class="part1">

                    <div class='row d-flex justify-content-between border-bottom'>

                      <div class='col'>
                        <h4 class="card-title font-weight-bolder dark text-mobile">Gerer projet {{ selectPname }}</h4>
                        <p class="card-text ">Informations Projet.</p>
                      </div>
                      <div class='col text-primary' align='right'>
                        <p highlight @click="gererP = 0; " class="align-baseline mouse">
                          Retour
                        </p>
                      </div>


                    </div>


                    <div class="modal__content">

                      <div class="   my-1">
                        Nom du projet : {{ selectPname }}
                      </div>
                      <div class="  mb-1">
                        Lien D'api : {{ selectPLink }}
                      </div>

                      <div class="  mb-1" style=" text-align: left;">
                        Exemple d'utilisation Api : {{ descriptionLink }}
                      </div>
                      <div class="  mb-1">Method : GET</div>
                      <div class="  mb-1">ApiKey : {{ selectPKey }}</div>
                      <div class="  mb-1">
                        Solde sms : {{ selectPsolde }}
                      </div>
                      <div class=" mb-1">
                        Regenerer Api Key :
                        <button highlight @click="promptValidation = true; typeV = true"
                          class="align-baseline btn btn-primary">Regenerer
                        </button>

                      </div>
                    </div>
                    <div class="modal__action">

                    </div>


                  </div>
                </div>


              </div>
              <div class="card w-100 mb-4" v-else-if="gererP == 2">
                <div class="card-body">

                  <div class="part1">
                    <h4 class="card-title font-weight-bolder dark text-mobile">Ajouter des sms a votre projet</h4>

                    <div class='row d-flex justify-content-between border-bottom'>

                      <div class='col'>
                        <p class="card-text border-bottom text-mobile2 ">Renseignez la quantite de SMS a crediter au
                          projet.</p>
                      </div>
                      <div class='col text-primary' align='right'>
                        <p highlight @click="gererP = 0; " class="align-baseline mouse">
                          Retour
                        </p>
                      </div>
                    </div>

                    <div class="row">
                      <label for="inputCity">Rechargez 20 sms minimum</label>
                      <form-number :readonly="actionValidate" class="col-lg-4 col-sm-12 form-group" label="Quantite"
                        v-model='quantite'>
                      </form-number>


                    </div>
                    <CustomButton :title='"Termier la Transaction"' v-if='quantite >= 20'
                      @click='promptValidation = true; typeV = false' :classe="'btn btn-primary  form-group'" />
                  </div>
                </div>


              </div>
              <div class="card w-100 mb-4" v-else-if="gererP == 3">
                <div class="card-body">

                  <div class="part1">

                    <div
                      class=' card-title font-weight-bolder dark text-mobilerow d-flex justify-content-between border-bottom'>

                      <div class='col'>
                        <p class="card-text  ">Modifier le stock d'alerte de votre projet.</p>
                      </div>
                      <div class='col text-primary' align='right'>
                        <p highlight @click="gererP = 0; " class="align-baseline mouse">
                          Retour
                        </p>
                      </div>
                    </div>

                    <div class="row">
                      <label for="inputCity">Entrer une valeur</label>
                      <form-number :readonly="actionValidate" class="col-lg-4 col-sm-12 form-group" label="Quantite"
                        v-model='quantiteA'>
                      </form-number>


                    </div>
                    <CustomButton :title='"Termier la Transaction"' @click='promptValidation0 = true;'
                      :classe="' btn btn-primary form-group'" />
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    <div>

      <vue-final-modal v-model="promptValidation" style="" classes="modal-container2 " content-class="modal-content2">
        <span class="modal__title2 text-warning">Alert
        </span>
        <span class="modal__title2"> Valider Cette action avec votre mot de passe
        </span>
        <div class="modal__content2">


          <input type="password" :readonly='actionValidate' v-model="password" class="form-control  " />

        </div>
        <div class="modal__action2">
          <CustomButton :title='"Valider"' :loading='actionValidate' @update:loading="actionValidate = $event"
            @click='projetAction' :classe="'btn btn-primary'" />

        </div>
      </vue-final-modal>

      <vue-final-modal v-model="promptValidation0" style="" classes="modal-container2 " content-class="modal-content2">
        <span class="modal__title2 text-warning">Alert
        </span>
        <span class="modal__title2"> Valider Cette action avec votre mot de passe
        </span>
        <div class="modal__content2">


          <input type="password" :readonly='actionValidate' v-model="password" class="form-control  " />

        </div>
        <div class="modal__action2">
          <CustomButton :title='"Valider"' :loading='actionValidate' @update:loading="actionValidate = $event"
            @click='projetActionS' :classe="'btn btn-primary'" />

        </div>
      </vue-final-modal>

    </div>
  </div>
</template> 

<style scoped>
@media only screen and (max-width: 992px) {

  ::v-deep .modal-container2 {
    display: flex;
    justify-content: center;

    align-items: center;
    width: auto;
    padding-left: auto
  }

  ::v-deep .modal-content2 {
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

::v-deep .modal-container2 {
  display: flex;
  justify-content: center;

  align-items: center;
  width: auto;
  padding-left: auto
}

.modal__title2 {
  /* margin: 0 2rem 0.5rem 0; */
  font-size: 0.8rem;
  font-weight: 0;
}

.modal__content2 {
  flex-grow: 1;
  overflow-y: auto;
}

.modal__action2 {
  display: flex;
  flex-shrink: 0;
  padding: 1rem 0 0;
}

::v-deep .modal-content2 {
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
import formNumber from '../components/formNumber.vue';
import Popper from "vue3-popper";
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
import VueCookies from 'vue-cookies'
import CustomButton from '../../components/CustomButton.vue';

import { createToaster } from "@meforma/vue-toaster";
export default {
  name: "ListProjet",
  components: {
    Popper,
    VueFinalModal, CustomButton, formNumber
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
      console.log(this.projetList.length)
      if (this.final + this.moyenne < this.projetList.length) {
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
          this.moyenne = parseInt(this.projetList.length)
          this.start = 0;
        } else {
          this.moyenne = parseInt(event.target.value)
          this.start = 0;
          // this.final = this.final + this.moyenne;

        } this.final = this.moyenne;
      }

      console.log(this.final)
    }
  },

  setup() {

    let loading = ref(true);
    let loading0 = ref(true);
    let promptValidation0 = ref(false);
    let promptValidation = ref(false);
    let actionValidate = ref(false);
    const loadingR = ref(false);

    // const clientId = VueCookies.get('id');
    const selectPname = ref('');
    const selectPsolde = ref(0);
    const selectPKey = ref('');
    const selectPLink = ref('');
    const descriptionLink = ref('');
    let projetList = ref([]);
    let projetselectId = ref(0);
    let gererP = ref(0);
    let toast = createToaster();

    const promptProjet = ref(false);
    const loadingGetProjet = ref(false);
    onMounted(async () => {

      await getListProjet();



    });
    const selectprojet = async (projet) => {
      // await getProjetInfo(id);
      projetselectId.value = projet.id;
      quantiteA.value = projet.stockAlerte
      console.log('id****', projetselectId.value);
    }
    const getProjetInfoC = async (id) => {
      gererP.value = 1;
      loadingGetProjet.value = true;
      await getProjetInfo(id);


    }
    const getListProjet = async () => {

      const response = await new RequestApi().getListProjetAction();

      if (response.status) {

        projetList.value = response.data
      }
      else {


        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
      }
      loading0.value = false;
    };

    const getProjetInfo = async (idProjet,) => {
      selectPsolde.value = 0;
      descriptionLink.value = '';
      selectPKey.value = '';

      selectPLink.value = '';
      promptProjet.value = !promptProjet.value;


      const response = await new RequestApi().getProjetAction(idProjet);

      if (response.status) {

        selectPsolde.value = response.data['soldeSms'];

        selectPKey.value = response.data['apiKey'];
        selectPname.value = response.data['nomProjet'];
        selectPLink.value = response.data['apiLink'];

        descriptionLink.value = response.data['descriptionApiLink'];
        console.log(response.data);
        // eslint-disable-next-line require-atomic-updates
        loadingGetProjet.value = !loadingGetProjet.value;
      } else {
        // eslint-disable-next-line require-atomic-updates
        loadingGetProjet.value = !loadingGetProjet.value;
        toast.error(`Erreur lors du chargement des informations du projet`, {
          // override the global option
          position: "bottom"
        });

      }
    };

    let password = ref('');

    const projetAction = async () => {
      actionValidate.value = true;

      const response = await new RequestApi().logIn(
        VueCookies.get('phone'),
        password.value
      );
      if (response.status) {
        const data = {
          apiKey: selectPKey.value,
        };
        loadingR.value = true;

        if (typeV.value == true) {
          const response =
            await new RequestApi().regenerateProjetApiKeyAction(data);

          if (response.status) {

            loadingR.value = false;

            // eslint-disable-next-line require-atomic-updates
            selectPKey.value = response.data['apiKey'];
            toast.success(`Actualisation de le cle d'api du projet effectuee avec succes`, {
              // override the global option
              position: "bottom"
            });
          } else {
            loadingR.value = false;
            toast.error(`Erreur lors de l'Actualisation de le cle d'api du projet`, {
              // override the global option
              position: "bottom"
            });


          }
        }
        else {


          if (quantite.value >= 20) {

            let data = {

              projetId:
                projetselectId.value,

              quantite: quantite.value,

            };



            const response = await new RequestApi().crediterProjetAction(data);

            console.log('response.status', response.status);
            if (response.status) {
              await getListProjet();
              // eslint-disable-next-line require-atomic-updates
              actionValidate.value = !actionValidate.value;
              gererP.value = 0

              // eslint-disable-next-line require-atomic-updates
              quantite.value = ' 0';

              toast.success(`Transfert d'sms effectuee avec success`, {
                // override the global option
                position: "bottom"
              });

            } else {

              // eslint-disable-next-line require-atomic-updates
              actionValidate.value = !actionValidate.value;
              if (response.aff) {
                toast.error(`Une erreur s'est produite`, {
                  // override the global option
                  position: "bottom"
                });
              }
            }
          } else {


            toast.error(`Veuillez renseigner une quantite correcte, minimum 20 sms`, {
              // override the global option
              position: "bottom"
            });

          }




        }
        promptValidation.value = false;
        actionValidate.value = false;
      } else {
        promptValidation.value = false;
        actionValidate.value = false;
        loadingR.value = false;

        toast.error(`Mot de Passe incorrect`, {
          // override the global option
          position: "bottom"
        });
      }
      // eslint-disable-next-line require-atomic-updates
      password.value = '';
    };


    const projetActionS = async () => {
      actionValidate.value = true;

      const response = await new RequestApi().logIn(
        VueCookies.get('phone'),
        password.value
      );
      if (response.status) {

        loadingR.value = true;




        let data = {
          projetId:
            projetselectId.value,
          stockAlerte:
            parseInt(quantiteA.value),

        };



        const response = await new RequestApi().updateStockProjetAction(data);

        console.log('response.status', response.status);
        if (response.status) {

          // eslint-disable-next-line require-atomic-updates
          actionValidate.value = !actionValidate.value;


          // eslint-disable-next-line require-atomic-updates
          quantiteA.value = 0; gererP.value = 0;
          await getListProjet();
          toast.success(`Mise a jour du stock alerte du projet effectue avec success`, {
            // override the global option
            position: "bottom"
          });

        } else {

          // eslint-disable-next-line require-atomic-updates
          actionValidate.value = !actionValidate.value;
          if (response.aff) {
            toast.error(`Une erreur s'est produite`, {
              // override the global option
              position: "bottom"
            });
          }
        }




        promptValidation0.value = false;
        actionValidate.value = false;

        password.value = '';
      }
      else {
        promptValidation0.value = false;
        actionValidate.value = false;
        loadingR.value = false;

        toast.error(`Mot de Passe incorrect`, {
          // override the global option
          position: "bottom"
        });
      }
    };

    let quantite = ref(0);
    let quantiteA = ref(0);

    let typeV = ref(true);
    return {
      actionValidate, quantiteA, promptValidation0,
      loading0, selectPname, projetActionS,
      selectPsolde, quantite,
      selectPKey,
      selectPLink,
      loadingR, getProjetInfo,
      projetAction, loadingGetProjet,
      gererP,
      password, getProjetInfoC,
      descriptionLink, typeV,
      projetList, show: false, loading, promptValidation, selectprojet, promptProjet

    };
  },
};
</script>
