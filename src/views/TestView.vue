<template>
  <label for="locale">locale</label>
  <select v-model="$i18n.locale">
    <option>en</option>
    <option>fr</option>
  </select>
  <p>message: {{ this.$t('as') }}</p>

  <div class="card-body" data-v-4a14482b="">
    <div class="part1" data-v-4a14482b="">
      <h4 class="card-title font-weight-bolder dark text-mobile" data-v-4a14482b="">Historique des manipulations de
        licence sms
      </h4>
      <p class="card-text border-bottom text-mobile2 " data-v-4a14482b=""></p>
      <div class="row" data-v-4a14482b="">
        <div class="table-responsive trx mt-1" data-v-4a14482b="">
          <table class="table" data-v-4a14482b=""><!--v-if-->
            <tbody data-v-4a14482b="">
              <tr class="mouse mouseA" data-v-4a14482b="">
                <td class="w-30 mobile" data-v-4a14482b="">
                  <div data-v-4a14482b="">
                    <div class="ml-2" data-v-4a14482b="">
                      <p class="mb-0 text-xs" data-v-4a14482b="">Emetteur :</p>
                      <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Mouafo</h6>
                    </div>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Recepteur :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Client Test</h6>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Type Manipulation :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Augmentation</h6>
                  </div>
                </td>
                <td class="mobile" data-v-4a14482b="">
                  <div class="text-left mobile" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Route :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Cameroun</h6>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Quantite :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">10</h6>
                  </div>
                </td>
                <td class="mobile" data-v-4a14482b="">
                  <div class="text-left mobile" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">date :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">27/09/22</h6>
                  </div>
                </td><!-- <td class="text-left">
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
              <tr class="mouse mouseA" data-v-4a14482b="">
                <td class="w-30 mobile" data-v-4a14482b="">
                  <div data-v-4a14482b="">
                    <div class="ml-2" data-v-4a14482b="">
                      <p class="mb-0 text-xs" data-v-4a14482b="">Emetteur :</p>
                      <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Delo</h6>
                    </div>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Recepteur :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Mouafo</h6>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Type Manipulation :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Réduction </h6>
                  </div>
                </td>
                <td class="mobile" data-v-4a14482b="">
                  <div class="text-left mobile" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Route :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Cameroun</h6>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Quantite :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">18</h6>
                  </div>
                </td>
                <td class="mobile" data-v-4a14482b="">
                  <div class="text-left mobile" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">date :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">01/09/22</h6>
                  </div>
                </td><!-- <td class="text-left">
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
              <tr class="mouse mouseA" data-v-4a14482b="">
                <td class="w-30 mobile" data-v-4a14482b="">
                  <div data-v-4a14482b="">
                    <div class="ml-2" data-v-4a14482b="">
                      <p class="mb-0 text-xs" data-v-4a14482b="">Emetteur :</p>
                      <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Mouafo</h6>
                    </div>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Recepteur :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Delo</h6>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Type Manipulation :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Augmentation</h6>
                  </div>
                </td>
                <td class="mobile" data-v-4a14482b="">
                  <div class="text-left mobile" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Route :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Cameroun</h6>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Quantite :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">15</h6>
                  </div>
                </td>
                <td class="mobile" data-v-4a14482b="">
                  <div class="text-left mobile" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">date :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">01/09/22</h6>
                  </div>
                </td><!-- <td class="text-left">
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
              <tr class="mouse mouseA" data-v-4a14482b="">
                <td class="w-30 mobile" data-v-4a14482b="">
                  <div data-v-4a14482b="">
                    <div class="ml-2" data-v-4a14482b="">
                      <p class="mb-0 text-xs" data-v-4a14482b="">Emetteur :</p>
                      <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Mouafo</h6>
                    </div>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Recepteur :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Delo</h6>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Type Manipulation :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Augmentation</h6>
                  </div>
                </td>
                <td class="mobile" data-v-4a14482b="">
                  <div class="text-left mobile" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Route :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Cameroun</h6>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Quantite :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">50</h6>
                  </div>
                </td>
                <td class="mobile" data-v-4a14482b="">
                  <div class="text-left mobile" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">date :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">01/09/22</h6>
                  </div>
                </td><!-- <td class="text-left">
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
              <tr class="mouse mouseA" data-v-4a14482b="">
                <td class="w-30 mobile" data-v-4a14482b="">
                  <div data-v-4a14482b="">
                    <div class="ml-2" data-v-4a14482b="">
                      <p class="mb-0 text-xs" data-v-4a14482b="">Emetteur :</p>
                      <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Delo</h6>
                    </div>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Recepteur :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Mouafo</h6>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Type Manipulation :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Augmentation</h6>
                  </div>
                </td>
                <td class="mobile" data-v-4a14482b="">
                  <div class="text-left mobile" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Route :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Cameroun</h6>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Quantite :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">10</h6>
                  </div>
                </td>
                <td class="mobile" data-v-4a14482b="">
                  <div class="text-left mobile" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">date :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">01/09/22</h6>
                  </div>
                </td><!-- <td class="text-left">
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
              <tr class="mouse mouseA" data-v-4a14482b="">
                <td class="w-30 mobile" data-v-4a14482b="">
                  <div data-v-4a14482b="">
                    <div class="ml-2" data-v-4a14482b="">
                      <p class="mb-0 text-xs" data-v-4a14482b="">Emetteur :</p>
                      <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Mouafo</h6>
                    </div>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Recepteur :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Delo</h6>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Type Manipulation :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Augmentation</h6>
                  </div>
                </td>
                <td class="mobile" data-v-4a14482b="">
                  <div class="text-left mobile" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Route :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">Cameroun</h6>
                  </div>
                </td>
                <td data-v-4a14482b="">
                  <div class="text-left" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">Quantite :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">10</h6>
                  </div>
                </td>
                <td class="mobile" data-v-4a14482b="">
                  <div class="text-left mobile" data-v-4a14482b="">
                    <p class="mb-0 text-xs" data-v-4a14482b="">date :</p>
                    <h6 class="mb-0 text-sm font-weight-bolder text-dark" data-v-4a14482b="">01/09/22</h6>
                  </div>
                </td><!-- <td class="text-left">
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
          <div class="row  col-lg-1 col-md-4 col-xl-5 col-sm-5 bg-default" align="right" data-v-4a14482b="">
            <div class="col-lg-1 col-md-3 col-xl-2 col-sm-4 mouseY" data-v-4a14482b="">Prev</div>
            <div class="col-lg-8 col-md-6 col-xl-4 col-sm-4 mouseY" data-v-4a14482b=""><select id="select_id"
                class="form-control form-select" data-v-4a14482b="">
                <option value="10" data-v-4a14482b=""> 10 </option>
                <option value="20" data-v-4a14482b=""> 20 </option>
                <option value="40" data-v-4a14482b=""> 40 </option>
                <option value="100" data-v-4a14482b=""> 100 </option>
                <option value="x" data-v-4a14482b=""> Tous </option>
              </select></div>
            <div class="col-lg-1 col-md-3 col-xl-2 col-sm-4 mouseY" data-v-4a14482b="">Next</div>
          </div>
        </div>
      </div>
    </div>
  </div>







</template>  
<style scoped>
#facture {
  font-size: 10px
}
</style>
<script>
import { SmsScript } from '../boot/smsScript';
const body = document.getElementsByTagName("body")[0];
export default {
  name: "signin",
  components: {

  },
  data() {
    return {
      nsms: 'dsddsds', sms: '',
    }
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


  props: {
    title: { type: String, },

    max: {

      default: 200
    },
  },
  methods: {
    formatSms() {
      console.log('taille', new SmsScript().getNumberOfSMSsegments(this.sms))
      this.nsms = new SmsScript().correctVerifMessage(this.sms)
    }
  },
};
</script> 