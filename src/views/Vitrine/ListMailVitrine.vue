<template>
  <div class="py-4 container-fluid " style="border: none;">
    <div class=" row">
      <div class="col-12">
        <div class="" style="border: none;">





          <div class="  " style="border: none;">


            <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
              <!-- <div class="card plus">+</div> -->


              <div class="card ps-3 pe-3 mb-lg-0 mb-4 ">
                <div class="row p-2  pb-2 border-bottom">
                  <div class="col">
                    <div class="d-flex  justify-content-between">
                      <h4 class="mb-1 ml-0 mt-2 font-weight-bolder text-mobile text-dark">Liste de vos mails</h4>
                    </div>
                    <h6 class="text-mobile2">Parcourez et repondez a vos mails</h6>
                  </div>

                  <div class="col-3 mt-3" align="right">
                    <input class="form-control" v-model='search' @input="searchFunction" v-if="!statusMail"
                      placeholder="search" type="search" />
                    <div class="col-lg-4 col-sm-12 mouse" v-if="statusMail">
                      <p @click="statusMail = !statusMail">Cancel</p>
                    </div>
                  </div>
                </div>
                <div v-if="!statusMail">
                  <div class="table-responsive trx mt-1">
                    <div class="  d-flex justify-content-center pb-3" v-if="loading0">

                      <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                    </div>
                    <table class="table  " v-else>

                      <div class="  d-flex justify-content-center pb-3" v-if="listMail.length == 0">

                        Vide

                      </div>
                      <tbody>
                        <tr v-for="(mail, index)  in listMail" v-show="start <= index && index < final"
                          :key="mail.message" class="mouse" :class="this.$store.state.darkMode ? 'mouseA' : 'mouseB'"
                          @click="message = mail.phone">
                          <td class=" ">
                            <div>

                              <div class="ml-2">
                                <p class="mb-0 ml-2 text-xs ">Nom emetteur :</p>
                                <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ mail.nom }}</h6>
                              </div>
                            </div>
                          </td>
                          <td class="   mobile">
                            <div>

                              <div class="ml-2">
                                <p class="mb-0 ml-2 text-xs ">email address :</p>
                                <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ mail.adresse }}
                                </h6>
                              </div>
                            </div>
                          </td>


                          <td class=" ">
                            <div>

                              <div class="ml-2">
                                <p class="mb-0 ml-2 text-xs ">Sujet :</p>
                                <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ mail.subject }}</h6>
                              </div>
                            </div>
                          </td>

                          <td>
                            <div class="text-left  col2 message">
                              <p class="mb-0 text-xs ">Message :</p>
                              <h6 class="mb-0 text-sm message font-weight-bold text-dark">{{
                                  mail.message
                              }}</h6>
                            </div>
                          </td>
                          <td>
                            <div class="text-left  col2 message">
                              <p class="mb-0 text-xs ">Reponse :</p>
                              <h6 class="mb-0 text-sm message font-weight-bold text-dark">{{
                                  mail.reponse
                              }}</h6>
                            </div>
                          </td>
                          <td class=" ">
                            <div>

                              <div class="ml-2">
                                <p class="mb-0 ml-2 text-xs ">Status :</p>
                                <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ mail.status }}</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="text-left">
                              <p class="mb-0 text-xs ">Vitrine concerne</p>
                              <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ mail.vitrine }}</h6>
                            </div>
                          </td>


                          <td class="text-left">
                            <div class="text-left col">
                              <Popper class="theme" placement="left">
                                <i class="fa fa-ellipsis-v" aria-hidden="true" @click="selectMail(mail)"></i>
                                <template #content>
                                  <!--  <div class="mouse" @click="showModalmail = true">Changer le type compte</div> -->
                                  <div class="mouse" @click="selectMailR(mail)">Repondre
                                  </div>
                                  <div class="mouse" @click="showModalGroupe = true">Supprimer</div>

                                </template>
                              </Popper>


                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>


                  </div>
                  <div class='card-footer' v-if='(listMail.length > 10)' align='right'>
                    <div class="row   col-lg-1 col-md-4 col-xl-5 col-sm-5"
                      :class="this.$store.state.darkMode ? 'bg-default' : ''">
                      <div class="  mouseY">
                        <i @click="next" v-if='(final < listMail.length)' class="mouseY 	fa fa-angle-right"
                          style="font-size:36px; float:right"></i>
                        <select id="select_id" @change="changeVal($event)" style='float:right'
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
                <div v-else>

                  <div class=" row d-flex justify-content-end">

                  </div>
                  <div class="row">


                    <div class="col-12  form-group  ">
                      <label for="nomP">Reponse</label>

                      <argon-area v-model="reponse" length='500' />

                    </div>


                  </div>

                  <CustomButton :title='" Envoyer"' :loading='loading' @update:loading="loading = $event"
                    @click='newReponse' :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />






                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</template> 

<style scoped>
::placeholder {
  text-align: center;
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
import "maz-ui/css/main.css";
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
import Popper from "vue3-popper";
import VueCookies from 'vue-cookies'
import { createToaster } from "@meforma/vue-toaster";
export default {
  name: "List-mail-vitrine",
  components: {

    Popper,

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
      console.log(this.listMail.length)
      if (this.final + this.moyenne < this.listMail.length) {
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
          this.moyenne = parseInt(this.listMail.length)
          this.start = 0;
        } else {
          this.moyenne = parseInt(event.target.value)
          this.start = 0;
          // this.final = this.final + this.moyenne;

        }
        this.final = this.moyenne;
      }

      console.log(this.final)
    }
  },
  setup() {
    let loading = ref(true);
    let loading0 = ref(true);
    let statusMail = ref(false);
    let mailS = ref(null)
    let listMail = ref([]);
    let toast = createToaster();

    onMounted(async () => {

      await getmail();

      loading.value = false;

    });
    const selectMail = (/* user */) => {
      // mailId.value = user.id
      // nom.value = user.nom,
      //   prenom.value = user.prenom,

      //   numero.value = user.phone
    }; const selectMailR = (mail) => {

      statusMail.value = true
      mailS.value = mail

    };



    let mailSave = ref([])
    async function getmail() {

      const response = await new RequestApi().getlistMailVitrine();
      if (response.status) {
        loading0.value = false
        listMail.value = response.data
        mailSave.value = response.data
      }
      else {
        loading0.value = false

        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
      }


    }


    const searchFunction = () => {
      listMail.value = mailSave.value
      let result = ref([])

      if (search.value.length != 0) {
        listMail.value.forEach((value) => {
          console.log('a')
          if (

            (value.nom ?? '').toLowerCase().includes(search.value.toLowerCase()) ||
            (value.adresse ?? '').toLowerCase().includes(search.value.toLowerCase()) ||
            (value.subject ?? '').toLowerCase().includes(search.value.toLowerCase()) ||
            (value.message ?? '').toLowerCase().includes(search.value.toLowerCase())
          ) {
            // console.log(value.nom.toLowerCase().includes(search.value.toLowerCase()) || value.prenom.toLowerCase().includes(search.value.toLowerCase()) || value.phone.includes(search.value))
            console.log('2')

            result.value.push(value);
          }
        });
        listMail.value = result.value
      }
      else {
        listMail.value = mailSave.value
      }
      console.log(result.value, search.value);


    };
    let reponse = ref('')

    const newReponse = async () => {

      let data =
      {
        keySecret: VueCookies.get('keySecret'),

        reponse: reponse.value,
        id: mailS.value.id

      }
        ;
      loading.value = true;

      const response1 = await new RequestApi().mailResponseAction(data);

      if (response1.status) {

        toast.success(`Reponse envoye avec succes.`, {
          // override the global option
          position: "bottom"
        });
        loading.value = false;
        getmail();
      } else {
        toast.error(`Une erreur est survenu lors de l'operation.`, {
          // override the global option
          position: "bottom"
        });

        loading.value = false;

      }
      loading.value = false;

    };
    // let results = ref('')
    let search = ref('')
    return {
      search, searchFunction,

      listMail, show: false, loading, selectMail, loading0, selectMailR,
      statusMail, newReponse, reponse,
      mailS,

    };
  },
};
</script>
