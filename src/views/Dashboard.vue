<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <card :title="stats.money.title" :loading='loSms' :value='stats.money.value + " U"'
              :percentage="stats.money.percentage" :iconClass="stats.money.iconClass"
              :iconBackground="stats.money.iconBackground" directionReverse @mouseover="show = true"
              @mouseout="show = false"></card>
          </div>


          <div class="col-lg-3 col-md-6 col-12">
            <card :title="stats.users.title" :loading="loPro" :value="stats.users.value"
              :percentage="stats.users.percentage" :iconClass="stats.users.iconClass"
              :iconBackground="stats.users.iconBackground" directionReverse></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card :title="stats.clients.title" :loading="loCli" :value="stats.clients.value"
              :percentage="stats.clients.percentage" :iconClass="stats.clients.iconClass"
              :iconBackground="stats.clients.iconBackground" :percentageColor="stats.clients.percentageColor"
              directionReverse></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card :title="stats.sales.title" :loading="loPort" :value="stats.sales.value + ' XAF'"
              :percentage="stats.sales.percentage" :iconClass="stats.sales.iconClass"
              :iconBackground="stats.sales.iconBackground" directionReverse></card>
          </div>
        </div>
        <nav v-if="show"
          class="bg-grey-2 uu navbar navbar-expand-lg c position-absolute   blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow radius">
          <div class="container ">

            <div class="collapse navbar-collapse" id="navigation">
              <div class="  d-flex align-items-center justify-content-center mt-3 mb-3 ms-3 me-5" v-if="loading">

                <i class="fa fa-spinner fa-spin" style="  font-size:50px; color:blue "></i>

              </div>
              <div class="table-responsive col-12  mb-2" v-else>
                <table class="table col-12 align-items-center">
                  <tbody>
                    <tr v-for="cons in conso" :key="cons" class="border-bottom col-12">
                      <td>
                        <div class="px-2 py-1 d-flex align-items-center">
                          <!-- <div>
                                                                                <img :src="sale.flag" alt="Country flag" />
                                                                              </div> -->
                          <div class="ms-4">
                            <p class="mb-0 text-xs font-weight-bold">
                              Country:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder">
                              {{ cons.country }}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="text-start">
                          <p class="mb-0 text-xs font-weight-bold">
                            Solde Actuel:</p>
                          <h6 class="mb-0 text-sm font-weight-bolder">
                            {{ cons.solde }} U</h6>
                        </div>
                      </td>
                      <td class="text-sm align-middle">
                        <div class="text-start col">
                          <p class="mb-0 text-xs font-weight-bold">
                            Taux D'utilisation:</p>
                          <h6 class="mb-0 text-sm font-weight-bolder">
                            {{ cons.taux }} %</h6>
                        </div>
                      </td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </nav>
        <div class="row">
          <div class="col-lg-7">
            <!-- line chart -->
            <div class="card z-index-2">
              <gradient-line-chart />
            </div>
          </div>
          <div class="col-lg-5 col-sm-12 col-md-12  ">

            <carousel />


          </div>
        </div>
        <div class="row mt-4 ">
          <div class="col-lg-7 mb-lg mb-4">
            <div class="card cont p-2" v-show="showSending">

              <div class="row justify-content-between  ps-3">
                <div class="p-3 pb-0 col-10 ">
                  <div class="d-flex  justify-content-between">
                    <h5 class="mb-2 ">SMS en cours d'envoi</h5>

                  </div>
                  <h6 class="mb-2">visualisez l'evolution de vos campagnes de sms</h6>
                </div>
                <div class="col-2 mobile pt-3 as " align="right ">

                  <router-link id='decnone' to="/Sms/historique">
                    <i class="fa fa-share btns" aria-hidden="true"></i><!-- Voir tous -->
                  </router-link>



                </div>
              </div>
              <div class=' border-top  cont2 pe-2' style="
    height: 200px;
">
                <div class="row    mt-2  " v-for="state in stateSendingSms" :key="state">

                  <div class=" col px-2 py-1 align-items-center ms-4">
                    <p class="mb-0 text-xs font-weight-bold">Sender:</p>
                    <h6 class="mb-0 text-sm font-weight-bolder">{{ state.senderId }}</h6>

                  </div>

                  <div class=" col ">
                    <p class="mb-0 text-xs font-weight-bold">Contacts:</p>
                    <h6 class="mb-0 text-sm font-weight-bolder">{{ state.nombreContact }} </h6>
                  </div>

                  <!-- <div>
                        <div class="text-start">
                          <p class="mb-0 text-xs font-weight-bold">Prevision D'achat:</p>
                          <h6 class="mb-0 text-sm font-weight-bolder">{{ sale.value }}</h6>
                        </div>
                      </div> -->
                  <div class=" col-6 text-sm align-middle">
                    <div class="text-start col2 mt-1">
                      <p class="mb-0 text-xs font-weight-bold ">Message:</p>
                      <h6 class="mb-0 text-sm font-weight-bolder message">{{ state.message }}
                      </h6>
                    </div>
                  </div>
                  <div class=" col mobile text-sm " directionReverse>
                    <div class="  w-100"> {{ (state.nombreEnvoye / state.nombreContact) * 100 }} %
                      <div class="progress progress-sm " style="height:10px">

                        <div class="progress-bar   bg-gradient-info " role="progressbar"
                          :style="`width: ${(state.nombreEnvoye / state.nombreContact) * 100}%`"
                          :aria-valuenow="state.nombreEnvoye / state.nombreContact" :aria-valuemin="0"
                          :aria-valuemax="state.nombreContact"></div>
                      </div>
                      <!-- <div class="progress">
                            <div class="progress-bar bg-gradient-info " role="progressbar"
                              :aria-valuenow="state.nombreEnvoye" width=50%
                              style=":width: 'state.nombreEnvoye / state.nombreEnvoye '"
                              :aria-valuemin="state.nombreEnvoye" :aria-valuemax="state.nombreContact"></div>
                          </div> -->


                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div class="card">

              <div class="row justify-content-between  ps-3">
                <div class="p-3 pb-0 col-10">
                  <div class="d-flex  justify-content-between">
                    <h5 class="mb-2 ">Consommation de sms par pays</h5>

                  </div>
                  <h6 class="mb-2">Augmentez vos licences pour avoir plus de pays destinataires</h6>
                </div>
                <div class="col-2 pt-3 as  mobile " align="right ">


                  <i class="fa fa-share btns" aria-hidden="true"></i>
                  <!-- Voir tous -->

                </div>
              </div>
              <div class="  d-flex justify-content-center pt-5 pb-5" v-if="loading">

                <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

              </div>
              <div class="table-responsive border-top mt-2" v-else>

                <div class='row' v-for="cons in conso" :key="cons">
                  <div class="w-30 col">
                    <div class="pe-2 py-1 d-flex align-items-center">
                      <!-- <div>
                            <img :src="sale.flag" alt="Country flag" />
                          </div> -->
                      <div class="ms-4">
                        <p class="mb-0 text-xs font-weight-bold">Country:</p>
                        <h6 class="mb-0 text-sm font-weight-bolder">{{ cons.country }}</h6>
                      </div>
                    </div>
                  </div>
                  <div class='col'>
                    <div class="text-start">
                      <p class="mb-0 text-xs font-weight-bold">Solde Actuel:</p>
                      <h6 class="mb-0 text-sm font-weight-bolder">{{ cons.solde }} U</h6>
                    </div>
                  </div>
                  <!-- <div>
                        <div class="text-start">
                          <p class="mb-0 text-xs font-weight-bold">Prevision D'achat:</p>
                          <h6 class="mb-0 text-sm font-weight-bolder">{{ sale.value }}</h6>
                        </div>
                      </div> -->
                  <div class="col text-sm align-middle">
                    <div class="text-start col">
                      <p class="mb-0 text-xs font-weight-bold">Taux D'utilisation:</p>
                      <h6 class="mb-0 text-sm font-weight-bolder">{{ cons.taux }} %</h6>
                    </div>
                  </div>
                  <div class="col text-sm  " align="right " directionReverse>
                    <div class="  ">
                      <Popper class="theme" placement="left">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                        <template #content>
                          <div class="mouse" id='decnone'>
                            <router-link id='decnone' to="/licence/achat">Achetter cette licence
                            </router-link>

                          </div>
                          <div class="mouse">
                            <router-link id='decnone' to="/Sms/Nouveau">Envoyer des sms</router-link>
                          </div>
                        </template>
                      </Popper>


                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <categories-card />
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" @click="dialog = true" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even
          when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row> -->
</template>
<style>
.progress-sm {
  height: 0.5rem !important;
}

.uu {
  z-index: 100;
}

.col2 {
  width: 200px;
  flex: 1 0 0%;
}

.elt0 {
  display: flex;


}

@media only screen and (max-width: 300px) {

  .elt0 {
    display: none;
  }
}

/* // Extra large devices (large desktops, 1200px and up)  */
@media (min-width: 1200px) {
  .message {

    width: 130%;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;

    text-overflow: ellipsis;
  }
}

@media (min-width: 1800px) {
  .message {

    width: 450px;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;

    text-overflow: ellipsis;
  }
}


#decnone {
  text-decoration: none;
  color: black;
}
</style>
<style scoped>
.cont {
  height: 40%;
  overflow: hidden;

  margin-bottom: 15px;
}

.cont2 {
  overflow: scroll;
  overflow-x: hidden;
}

#decnone {
  text-decoration: none;
}

.btns {
  color: #585FE1;

}

.as {
  padding-right: 35px
}

i:hover {
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

.degrade-horizontal {
  background: linear-gradient(0.25turn, rgb(219, 214, 215) 0%, rgb(26, 26, 190), rgb(219, 214, 215)) 0%;

}

#grD {

  height: 2px;
}

.scroll {

  height: 10%;
  overflow: scroll;
}
</style>
<script>
import Card from "@/examples/Cards/Card.vue";
import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import Carousel from "./components/Carousel.vue";
import CategoriesCard from "./components/CategoriesCard.vue";
import Popper from "vue3-popper";
// import VueCookies from 'vue-cookies';
// import US from "@/assets/img/icons/flags/US.png";
// import DE from "@/assets/img/icons/flags/DE.png";
// import GB from "@/assets/img/icons/flags/GB.png";
// import BR from "@/assets/img/icons/flags/BR.png";

import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from "../boot/RequestApi";
export default {
  name: "dashboard-default",

  // beforeRouteEnter(to, from, next) {
  //   if (
  //     VueCookies.get('token') != undefined &&
  //     VueCookies.get('token') != 'undefined' &&
  //     VueCookies.get('token') != null
  //   ) {
  //     console.log(
  //       VueCookies.get('token') != undefined &&
  //       VueCookies.get('token') != 'undefined' &&
  //       VueCookies.get('token') != null
  //     );
  //     // console.log('iiiiixzzxioooiioi', VueCookies.get('token'));
  //     // await refreshAuthenticated();
  //     next();
  //   } else {
  //     //  console.log('llllllllll');
  //     next({ name: 'Signin' });

  //   }
  // },

  setup() {
    onMounted(async () => {
      await getStateSendingSms();

      await getChildren();
      await getConso();
      await getInfoAccount();
    })
    let stats = ref({
      money: {
        title: "CREDIT SMS",
        value: '0',

        iconClass: "ni ni-money-coins",

        iconBackground: "bg-gradient-primary",
      },
      users: {
        title: "PROJETS",
        value: '0',

        iconClass: "ni ni-world",
        iconBackground: "bg-gradient-danger",

      },
      clients: {
        title: "Clients",
        value: '0',

        iconClass: "ni ni-paper-diploma",

        iconBackground: "bg-gradient-success",

      },
      sales: {
        title: "PORTE FEUILLE",
        value: '0',

        iconClass: "ni ni-cart",
        iconBackground: "bg-gradient-warning",

      },
    })

    let conso = ref({});
    let csms = ref('0');
    let cprojet = ref('0');
    let clocal = ref('0');
    let cportefeuille = ref('0');
    let stateSendingSms = ref([]);
    let showSending = ref(false);

    let loCli = ref(true);
    const getChildren = async () => {

      const response = await new RequestApi().getParrainUserAction();
      if (response.status) {

        stats.value.clients.value = response.data.length
        loCli.value = false;
      } else {
        loCli.value = false;

      }


    }
    const getStateSendingSms = async () => {

      const response = await new RequestApi().getStateSendingSmsAction();
      if (response.status) {
        stateSendingSms.value = []
        stateSendingSms.value = response.data
        if (stateSendingSms.value.length != 0) {
          showSending.value = true
        }
        // getStateSendingSms();
        // console.log('stateSendingSms.value', stateSendingSms.value)
      }


    }
    let loSms = ref(true);
    let loPro = ref(true);
    let loPort = ref(true);

    const getInfoAccount = async () => {
      console.log('id.........')

      const response = await new RequestApi().getInfoAccountAction();
      const response0 = await new RequestApi().getListProjetAction();

      if (response.status && response0.status) {
        stats.value.money.value = response.data[0].solde;
        loSms.value = false;
        stats.value.sales.value = response.data[2].solde;
        loPort.value = false;

        stats.value.users.value = response0.data.length;
        loPro.value = false;

      }
      else {
        loSms.value = false; loPro.value = false; loPort.value = false;
      }
    }
    let loading = ref(true);

    const getConso = async () => {

      const response = await new RequestApi().getConsommationSmsAction();


      if (response.status) {

        conso.value = response.data.map((x) => {
          return {

            country: x['nomPays'],
            solde: x['nbreSms'],
            taux: x['taux'],
          };
        });
        loading.value = false
      }
      else {
        loading.value = false

      }
    }
    let dialog = ref(true);
    return {
      loading, dialog,
      csms, cprojet, clocal, cportefeuille,
      stats, show: ref(false),
      conso, showSending, stateSendingSms, loSms, loPort, loPro, loCli
    };
  },
  components: {
    Card,
    GradientLineChart,
    Carousel,
    CategoriesCard,

    Popper,


  },
};
</script>
 