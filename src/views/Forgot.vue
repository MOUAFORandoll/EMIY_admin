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
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            <div class="  text-center pt-4">
              <img src='../assets/img/logos/devoo.svg' style="   height: 100px; width: 50px;"
                class="navbar-brand-img h-100" alt="main_logo" />

            </div>
            <div class="c text-center pt-4">
              <h5>Recuperation de compte.</h5>
            </div>
            <div class="row  card-body">

              <div class="mt-2 position-relative text-center">
                <p class="text-sm   mb-2 text-secondary ">
                  Afin de protéger votre compte, Devoo veut s'assurer que c'est bien vous qui essayez de vous connecter
                  actuellement.
                </p>
              </div>
            </div>

            <div class="card-body">

              <div class="mt-2 position-relative " v-if="state == 1">
                <p class="   mb-2 text-dark " style='font-size:12px' v-if="mail">
                  Un E-mail contenant un code de validation vient d'être envoyé à {{ dataU }}
                </p>
                <p class="   mb-2 text-dark " style='font-size:12px' v-if="phone">
                  Un SMS contenant un code de validation vient d'être envoyé à {{ dataU }}
                </p>
              </div>
              <div class="mt-2 position-relative " v-if="state == 2">
                <p class="   mb-2 text-secondary " style='font-size:12px'>
                  Renseignez votre nouveau mot de passe
                </p>
              </div>
              <argon-input :readonly='loading' type="text" v-model="dataU" v-if="state == 0"
                placeholder="Numero de telephone ou email" aria-label="data" />

              <argon-input :readonly='loading' type="text" v-model="code" v-if="state == 1" placeholder="Code"
                aria-label="Phone" />
              <div class="mt-2 mb-2 position-relative " v-if="state == 1 && countDown != 0">
                <p class="   mb-2 text-secondary " style='font-size:12px'>
                  Renvoyer le code par mail ? {{ countDown }}
                </p>
              </div>
              <div class="mt-2  mb-2 position-relative mouse " @click='onSubmit2' v-if="countDown == 0">
                <p class="   mb-2 text-info " style='font-size:12px'>
                  Renvoyer le code par mail
                </p>
              </div>
              <argon-input :readonly='loading' type="password" v-model="password" v-if="state == 2"
                placeholder="Password" aria-label="password" />
              <argon-input :readonly='loading' type="password" v-model="repassword" v-if="state == 2"
                placeholder="Re-password" aria-label="password" />
              <!--     <argon-input  :readonly='loading' type="email" v-model="mail" placeholder="Email" aria-label="Email" /> -->

              <div class="row">



                <div class="text-center  ">
                  <CustomButton :title='"Next"' :loading='loading' v-if="state == 0 || state == 1"
                    @update:loading="loading = $event" @click='onSubmit'
                    :classe="'btn btn-primary w-100 pt-2 pb-2 ps-5 pe-5'" fullWidth color="dark" variant="gradient"
                    size="lg" />

                  <CustomButton :title='"Terminer"' :loading='loading' v-if="state == 2" v-show='password == repassword'
                    @update:loading="loading = $event" @click='onSubmit'
                    :classe="'btn btn-primary w-100 pt-2 pb-2 ps-5 pe-5'" fullWidth color="dark" variant="gradient"
                    size="lg" />

                </div>
              </div>
              <!-- <p class="text-sm mt-3 mb-0">
                Already have an account ?
                <router-link class="  link-primary" to="/signin">
            
                  Sign In
                </router-link>
              </p> -->

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
  </main>

</template>
<style scoped>
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
import ArgonInput from "@/components/ArgonInput.vue";
// import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import CustomButton from '../components/CustomButton.vue';
const body = document.getElementsByTagName("body")[0];
import { createToaster } from "@meforma/vue-toaster";
import router from '../router';
import { FormatData } from '../boot/FormatData';

import jwt_decode from 'jwt-decode';
import { api } from '../boot/axios';

import VueCookies from 'vue-cookies'
import { RequestApi } from '../boot/RequestApi';
import { ref } from "vue";
export default {
  name: "signin",
  components: {
    Navbar,
    ArgonInput,
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
 

  data() {
    return {
      countDownD: 60,
      countDown: 60,
      state: 0,
      password: '',
      repassword: '',
      code: '',
      entreprise: '',
      prenom: '',
      nom: '',
      dataU: '',
      user: '',
      remenber: false,
      isPwd: true,
      loading: ref(false),
      phone: false,
      data: [],
      choiseSend: 0,
      mail: false,

      decode: [],
      token: '',
    };
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    changeO() {
      if (this.loading == false) {
        this.state = 0
      }
    },
    async onSubmit() {
      let toast = createToaster();
      if (this.state == 0) {

        let verMail = new FormatData().verifCorrectMail(this.dataU);
        let verPhone = new FormatData().verifNumber2(this.dataU);

        if (verPhone) {
          this.phone = true,

            this.data = {
              action: 1,
              phone: this.dataU,

            };
        }
        else if (verMail) {
          this.mail = true,
            this.data = {
              action: 1,


              email: this.dataU,


            }
        }
        else {
          toast.error("Entrer un numero de telephone ou  une addresse mail  correct",
            {
              // override the global option
              position: "bottom"
            });
          return false;
        }

        this.loading = true;


        const response = await new RequestApi().reinitialiseAction(this.data);

        if (response.status) {




          this.loading = false;
          this.user = response.data['user']
          this.data = verPhone ? {
            action: 2,

            user: this.user,

          } :

            {
              action: 3,

              user: this.user,

            };
          this.loading = true;


          const response0 = await new RequestApi().reinitialiseAction(this.data);
          console.log('dffffffff')
          if (response0.status) {
            console.log('dffffffff')
            this.state = 1;
            this.countDownTimer()
            this.loading = false;

          } else {
            this.loading = false;
            if (response.aff) {

              toast.error(`Une erreur s'est produite`, {
                // override the global option
                position: "bottom"
              });
            }


          }

        } else {
          this.loading = false;
          if (response.aff) {

            toast.error(`Une erreur s'est produite`, {
              // override the global option
              position: "bottom"
            });
          }


        }



      } else if (this.state == 1) {
        this.data = {
          action: 4,

          user: this.user,
          code: this.code
        };
        this.loading = true;


        const response = await new RequestApi().reinitialiseAction(this.data);

        if (response.status) {
          this.state = 2;
          this.loading = false;

        } else {
          this.loading = false;
          if (response.aff) {

            toast.error(`Une erreur s'est produite`, {
              // override the global option
              position: "bottom"
            });
          }


        }
      }
      else if (this.state == 2) {
        this.data = {
          action: 5,
          user: this.user,
          password: this.password
        };
        this.loading = true;


        const response = await new RequestApi().reinitialiseAction(this.data);

        if (response.status) {
          toast.success(`Reinitialisation Effectue avec success`, {
            // override the global option
            position: "bottom"
          });

          console.log(jwt_decode(String(response.data.token)).id);

          api.defaults.headers.common['Authorization'] =
            'Bearer ' + String(response.data.token);
          VueCookies.set('token', String(response.data.token));
          VueCookies.set('refreshToken', String(response.data.refreshToken));
          this.decode = jwt_decode(String(response.data.token));
          VueCookies.set('id', parseInt(String(this.decode.id)));
          VueCookies.set('keySecret', String(this.decode.keySecret));
          VueCookies.set('fonctions', (this.decode.fonctions));
          console.log(jwt_decode(String(response.data.token)).id);
          VueCookies.set('nom', String(this.decode.nom));
          VueCookies.set('prenom', String(this.decode.prenom));
          VueCookies.set('phone', String(this.decode.phone));


          router.push
            ({ name: 'Dashboard' });
          this.loading = !this.loading;
          this.state = 1;
          this.loading = false;
        } else {
          this.loading = false;
          this.state = 1;
          if (response.aff) {


            toast.error(`Une erreur s'est produite`, {
              // override the global option
              position: "bottom"
            });
          }


        }
      }
    }


    ,
    async onSubmit2() {
      let toast = createToaster();
      if (this.state == 1 && this.loading == false) {



        this.loading = true;



        this.data =
        {
          action: 3,

          user: this.user,

        };
        this.loading = true;


        const response0 = await new RequestApi().reinitialiseAction(this.data);
        console.log('dffffffff')
        if (response0.status) {
          console.log('dffffffff')
          this.state = 1;

          this.countDownD = 2 * this.countDownD
          this.countDown = this.countDownD
          console.log(this.countDown)
          this.countDownTimer()
          this.loading = false;

        } else {
          this.loading = false;
          if (response0.aff) {

            toast.error(`Une erreur s'est produite`, {
              // override the global option
              position: "bottom"
            });
          }


        }

      } else {
        this.loading = false;

      }





    },
    as() {
      console.log('fddf')
    }

  },
};
</script>
