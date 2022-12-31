<template>

  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1">
              <h4 class="card-title font-weight-bolder dark text-mobile  ">Liste des Licences </h4>
              <p class="card-text border-bottom text-mobile2 "></p>
              <div class="row">
                <div class="  d-flex justify-content-center pb-3" v-if="loading">

                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                </div>

                <div class="table-responsive mt-1" v-else>
                  <table class="table  ">
                    <div class="  d-flex justify-content-center pb-3" v-if="listLsa.length == 0">

                      Vide

                    </div>
                    <tbody>
                      <tr v-for="lsa in listLsa" :key="lsa.message" class="mouse"
                        :class="this.$store.state.darkMode ? 'mouseA' : 'mouseB'"
                        @click="message = lsa.message; selectSenderId = lsa.senderId ">
                        <td class="w-30">
                          <div>

                            <div class="ml-2">
                              <p class="mb-0 ml-2 text-xs ">Nom de la licence:</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ lsa.nom }}</h6>
                            </div>
                          </div>
                        </td>
                        <td class="w-30">
                          <div>

                            <div class="ml-2">
                              <p class="mb-0 ml-2 text-xs ">Nom de la route:</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ lsa.route }}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">quantite:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ lsa.quantite }} </h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-left mobile">
                            <p class="mb-0 text-xs ">Stock Alerte:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ lsa.stockAlerte }} </h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-left mobile">
                            <p class="mb-0 text-xs  ">date achat:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ lsa.date }}</h6>
                          </div>
                        </td>


                      </tr>
                    </tbody>
                  </table>
                </div>


              </div>
            </div>

          </div>
        </div>
        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1">
              <h4 class="card-title font-weight-bolder text-mobile dark">Historique des achats de licence </h4>
              <p class="card-text border-bottom text-mobile2 "></p>
              <div class="row">
                <div class="  d-flex justify-content-center pb-3" v-if="loading0">

                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                </div>

                <div class="table-responsive  mt-1" v-else>
                  <table class="table  ">
                    <div class="  d-flex justify-content-center pb-3" v-if="lFacture.length == 0">

                      Vide

                    </div>
                    <tbody>
                      <tr v-for=" lfa,   in lFacture" :key="lfa.id" class="mouse"
                        :class="this.$store.state.darkMode ? 'mouseA' : 'mouseB'"
                        @click="message = lfa.message; selectSenderId = lfa.senderId ">
                        <td class="w-30">
                          <div>

                            <div class="ml-2">
                              <p class="mb-0 ml-2 text-xs ">Motif :</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ lfa.motif }}</h6>
                            </div>
                          </div>
                        </td>
                        <!-- <td class="w-30">
                          <div>

                            <div class="ml-2">
                              <p class="mb-0 ml-2 text-xs ">Pays :</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ lfa.pays }}</h6>
                            </div>
                          </div>
                        </td> -->
                        <td>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">motant :</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ lfa.montant }} </h6>
                          </div>
                        </td>
                        <td class="  mobile">
                          <div class="text-left mobile">
                            <p class="mb-0 text-xs ">date achat:</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ lfa.date }}</h6>
                          </div>
                        </td>

                        <!-- <td class="text-left">
                          <div class="text-left col">
                            <Popper class="theme" placement="left">
                              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                              <template #content>
                                <div class="mouse">Renvoyer ce lsa</div>
                                <div class="mouse" @click="message = lsa.message; selectSenderId = lsa.senderId ">
                                  Examiner</div>
                              </template>
                            </Popper>


                          </div>
                        </td> -->
                      </tr>
                    </tbody>
                  </table>


                </div>


              </div>
            </div>

          </div>
        </div>
        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1">
              <h4 class="card-title font-weight-bolder text-mobile dark">Historique des manipulations de licence sms
              </h4>
              <p class="card-text border-bottom text-mobile2 "></p>
              <div class="row">
                <div class="  d-flex justify-content-center pb-3" v-if="loading1">

                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                </div>

                <div class="table-responsive trx mt-1" v-else>
                  <table class="table  ">
                    <div class="  d-flex justify-content-center pb-3" v-if="lManipulation.length == 0">

                      Vide

                    </div>
                    <tbody>
                      <tr v-for="(lma, index) in lManipulation" v-show="start <= index && index < final" :key="lma.id"
                        class="mouse" :class="this.$store.state.darkMode ? 'mouseA' : 'mouseB'">
                        <td class="w-30 mobile">
                          <div>

                            <div class="ml-2 ">
                              <p class="mb-0   text-xs ">Emetteur :</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ lma.emetteur }}</h6>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Recepteur :</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ lma.recepteur }} </h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Type Manipulation :</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ lma.typemanipulation }} </h6>
                          </div>
                        </td>
                        <td class="  mobile">
                          <div class="text-left mobile">
                            <p class="mb-0 text-xs ">Route :</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ lma.route }} </h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Quantite :</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ lma.quantite }} </h6>
                          </div>
                        </td>
                        <td class="  mobile">
                          <div class="text-left mobile">
                            <p class="mb-0 text-xs ">date :</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ lma.date }}</h6>
                          </div>
                        </td>

                        <!-- <td class="text-left">
                          <div class="text-left col">
                            <Popper class="theme" placement="left">
                              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                              <template #content>
                                <div class="mouse">Renvoyer ce lsa</div>
                                <div class="mouse" @click="message = lsa.message; selectSenderId = lsa.senderId ">
                                  Examiner</div>
                              </template>
                            </Popper>


                          </div>
                        </td> -->
                      </tr>
                    </tbody>
                  </table>

                </div>

                <div class='card-footer' v-if='(lManipulation.length > 10)' align='right'>
                  <div class="row   col-lg-1 col-md-4 col-xl-5 col-sm-5"
                    :class="this.$store.state.darkMode ? 'bg-default' : ''">
                    <div class="  mouseY">
                      <i @click="next" v-if='(final < lManipulation.length)' class="mouseY 	fa fa-angle-right"
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



  </div>

</template>


<style >
i:hover {
  cursor: pointer
}

.mouse:hover {
  cursor: pointer
}

.card {

  border-radius: 0.5rem;
}
</style>
<style scoped>
i:hover {
  cursor: pointer
}

.filtre {
  text-decoration: underline;
}

.filtre:hover {
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
import VueCookies from 'vue-cookies'
// import Popper from "vue3-popper"; 
import { createToaster } from "@meforma/vue-toaster";
// import { BIcon } from 'bootstrap-vue' 
export default {
  name: "ListSmsSenderId",
  components: {
    // Popper,


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
      // max: this.lManipulation.value.length
    }
  },
  methods: {
    next() {
      console.log(this.lManipulation.length)
      if (this.final + this.moyenne < this.lManipulation.length) {
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
          this.moyenne = parseInt(this.lManipulation.length)
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
    let loading1 = ref(true);
    let listLsa = ref([])
    let lFacture = ref([])
    let lManipulation = ref([])
    let toast = createToaster();

    onMounted(async () => {

      await getLsa();

      await getFacture();
      await getManiPulation();

    });


    async function getManiPulation() {
      const response = await new RequestApi().getListSmsManipule();
      if (response.status) {
        lManipulation.value = response.data

        loading1.value = false;
      } else {

        loading1.value = false;
        // eslint-disable-next-line require-atomic-updates
        // loading.value = !loading.value;
        toast.error(`Une erreur s'est produite`, {
          // override the global option
          position: "bottom"
        });
      }
      console.log('sssssssssssd', listLsa.value);

    }

    async function getLsa() {
      const response = await new RequestApi().getListSmsAcheteForUserAction();
      if (response.status) {

        listLsa.value = response.data

        loading.value = false;
      } else {

        loading.value = false;
        // eslint-disable-next-line require-atomic-updates
        // loading.value = !loading.value;
        toast.error(`Une erreur s'est produite`, {
          // override the global option
          position: "bottom"
        });
      }
      console.log('sssssssssssd', listLsa.value);

    }

    async function getFacture() {

      const response = await new RequestApi().getListFactureUser(2);
      if (response.status) {


        lFacture.value = response.data
        //   for (let i = 0; i < response.data.length; i++) {

        //     const Facture = response.data[i];
        //     lFacture.value.push({
        //       factureId: Facture['id'], 
        //       dateCreate: formatDate(Facture['date'], 1),
        //       montant: Facture['montant']

        //     })

        //   }
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

    return {
      open,
      listLsa, show: false, loading, loading0, lFacture, lManipulation, loading1
    };
  },
};
</script>
