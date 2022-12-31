<template>
  <!-- <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" v-bind:darkMode="true"
          isBtn="bg-gradient-success" />
      </div>
    </div>
  </div> -->
  <main class="main-content mt-0">
    <div class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
      style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg'); background-position: top;">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 text-center mx-auto">
            <h1 class="text-white mb-2 mt-5">Welcome!</h1>
            <p class="text-lead text-white">Use these awesome forms to login or create new account in your project for
              free.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0" v-if="!loading0">
            <div class="card-header text-center pt-4" v-if="exist">
              <h5>Register with</h5>
            </div>
            <div class="row px-xl-5 px-sm-4 px-3" v-if="exist">
              <div class="col-3 ms-auto px-1">
                <a class="btn btn-outline-light w-100" href="javascript:;">
                  <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(3.000000, 3.000000)" fill-rule="nonzero">
                        <circle fill="#3C5A9A" cx="29.5091719" cy="29.4927506" r="29.4882047" />
                        <path
                          d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z"
                          fill="#FFFFFF" />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div class="col-3 px-1" v-if="exist">
                <a class="btn btn-outline-light w-100" href="javascript:;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              <div class="col-3 px-1" v-if="exist">
                <a class="btn btn-outline-light w-100" href="javascript:;">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50"
                    style=" fill:#000000;">
                    <path
                      d="M 38.011719 4 C 37.574219 3.996094 37.183594 4.273438 37.046875 4.691406 L 32.074219 20 L 17.925781 20 L 12.953125 4.691406 C 12.820313 4.289063 12.449219 4.011719 12.023438 4 C 11.597656 3.992188 11.214844 4.25 11.0625 4.648438 L 5.070313 20.640625 C 5.066406 20.640625 5.066406 20.644531 5.0625 20.648438 L 2.0625 28.648438 C 1.90625 29.070313 2.046875 29.542969 2.414063 29.808594 L 24.40625 45.800781 L 24.410156 45.808594 C 24.414063 45.808594 24.414063 45.808594 24.414063 45.8125 C 24.425781 45.820313 24.441406 45.828125 24.453125 45.835938 C 24.46875 45.84375 24.480469 45.855469 24.496094 45.863281 C 24.5 45.863281 24.5 45.867188 24.503906 45.867188 C 24.503906 45.867188 24.507813 45.871094 24.511719 45.871094 C 24.515625 45.875 24.519531 45.878906 24.527344 45.878906 C 24.53125 45.882813 24.539063 45.886719 24.542969 45.890625 C 24.5625 45.898438 24.585938 45.910156 24.609375 45.917969 C 24.609375 45.917969 24.609375 45.917969 24.609375 45.921875 C 24.632813 45.929688 24.65625 45.9375 24.675781 45.945313 C 24.679688 45.945313 24.679688 45.945313 24.683594 45.949219 C 24.699219 45.953125 24.714844 45.957031 24.734375 45.964844 C 24.742188 45.964844 24.75 45.96875 24.761719 45.96875 C 24.761719 45.972656 24.761719 45.972656 24.761719 45.96875 C 24.78125 45.976563 24.800781 45.980469 24.820313 45.984375 C 24.847656 45.988281 24.871094 45.992188 24.898438 45.996094 C 24.9375 45.996094 24.980469 46 25.019531 46 C 25.058594 45.996094 25.09375 45.996094 25.128906 45.988281 C 25.144531 45.988281 25.15625 45.988281 25.171875 45.984375 C 25.171875 45.984375 25.175781 45.984375 25.179688 45.984375 C 25.1875 45.980469 25.191406 45.980469 25.199219 45.980469 C 25.203125 45.980469 25.207031 45.976563 25.214844 45.976563 C 25.222656 45.972656 25.234375 45.972656 25.242188 45.96875 C 25.257813 45.964844 25.269531 45.960938 25.28125 45.957031 C 25.289063 45.957031 25.292969 45.957031 25.296875 45.953125 C 25.300781 45.953125 25.304688 45.953125 25.308594 45.953125 C 25.324219 45.945313 25.34375 45.9375 25.359375 45.933594 C 25.378906 45.925781 25.394531 45.917969 25.410156 45.910156 C 25.414063 45.910156 25.414063 45.910156 25.417969 45.90625 C 25.421875 45.90625 25.425781 45.90625 25.429688 45.902344 C 25.4375 45.898438 25.445313 45.894531 25.453125 45.890625 C 25.476563 45.878906 25.496094 45.867188 25.515625 45.855469 C 25.523438 45.851563 25.527344 45.847656 25.53125 45.84375 C 25.535156 45.84375 25.539063 45.839844 25.542969 45.839844 C 25.558594 45.828125 25.574219 45.820313 25.589844 45.808594 L 25.597656 45.796875 L 47.589844 29.808594 C 47.953125 29.542969 48.09375 29.070313 47.9375 28.648438 L 44.945313 20.675781 C 44.941406 20.667969 44.9375 20.65625 44.9375 20.648438 L 38.9375 4.648438 C 38.789063 4.261719 38.425781 4.003906 38.011719 4 Z M 11.933594 8.027344 L 15.824219 20 L 7.445313 20 Z M 38.066406 8.027344 L 42.558594 20 L 34.175781 20 Z M 8.066406 22 L 16.472656 22 L 22.328125 40.015625 Z M 18.578125 22 L 31.421875 22 L 25 41.765625 Z M 33.527344 22 L 41.933594 22 L 27.671875 40.015625 Z M 6.3125 23.007813 L 19.6875 39.902344 L 4.203125 28.640625 Z M 43.6875 23.007813 L 45.796875 28.640625 L 30.3125 39.902344 Z">
                    </path>
                  </svg>
                </a>
              </div>
              <div class="col-3 me-auto px-1" v-if="exist">
                <a class="btn btn-outline-light w-100" href="javascript:;">
                  <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(3.000000, 2.000000)" fill-rule="nonzero">
                        <path
                          d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                          fill="#4285F4" />
                        <path
                          d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                          fill="#34A853" />
                        <path
                          d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                          fill="#FBBC05" />
                        <path
                          d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                          fill="#EB4335" />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div class="mt-2 position-relative text-center" v-if="exist">
                <p class="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">or
                </p>
              </div>
            </div>
            <div class="card-body" v-if="exist">

              <argon-input :readonly='loading' type="text" v-model="nom" placeholder="Nom" aria-label="Nom" />
              <argon-input :readonly='loading' type="text" v-model="prenom" placeholder="Prenom" aria-label="Prenom" />
              <argon-input :readonly='loading' type="phone" v-model="phone" placeholder="Phone" aria-label="Phone" />
              <argon-input :readonly='loading' type="email" v-model="mail" placeholder="Email" aria-label="Email" />
              <argon-input :readonly='loading' type="text" v-model="entreprise" placeholder="Entreprise"
                aria-label="Entreprise" />
              <argon-input :readonly='loading' type="password" @keyup='verifPassword()' @keydown='verifPassword()'
                @change='verifPassword()' v-model="password" placeholder="Password" aria-label="Password" />

              <div class="row fs ">
                <!-- <div col="col-6"></div>
                <div col="col-6"></div> -->
                <div class="col-6  border rounded p-2" :class='(v1 && v5) ? "bg-info" : " bg-light"'>
                  <i class="far fa-check-circle  centered"></i> 8 characteres et 1 special
                </div>
                <div class="col-6   p-2 border rounded" :class='v2 ? "bg-info" : " bg-light"'>
                  <i class="far fa-check-circle  centered"></i> Capital letter (A-Z)
                </div>
                <div class="col-6  p-2 border rounded" :class='v3 ? "bg-info" : " bg-light"'>
                  <i class="far fa-check-circle  centered"></i> Lowercase letter (a-z)
                </div>
                <div class="col-6  p-2 border rounded" :class='v4 ? "bg-info" : " bg-light"'>
                  <i class="far fa-check-circle  centered"></i> Number (0-9)
                </div>

              </div>
              <argon-checkbox checked class="mt-3">
                <label class="form-check-label text-dark " for="flexCheckDefault">
                  I agree the
                  <a href="javascript:;" class="text-info font-weight-bolder" style='text-decoration: none;'>Terms and
                    Conditions</a>
                </label>
              </argon-checkbox>
              <div class="text-center">
                <CustomButton :title='"Sign up"' :loading='loading' @update:loading="loading = $event" @click='onSubmit'
                  :classe="'btn btn-primary w-100 pt-2 pb-2 ps-5 pe-5'" fullWidth color="dark" variant="gradient"
                  size="lg" />

              </div>

              <p class="text-sm mt-3 mb-0">
                Already have an account ?
                <router-link class="  link-primary" to="/signin">

                  Sign In
                </router-link>
              </p>

            </div>
            <div class="card-body row px-xl-5 px-sm-4 px-3" v-if="!exist">Verifier ce lien de parrainage ou contacter le
              parrain</div>
          </div>
          <div class="card z-index-0" v-if="loading0">
            <div class="card-header text-center pt-4">
              <h5>Register with</h5>
            </div>

            <div class="card-body">
              <div class="  d-flex justify-content-center pb-3">

                <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.fs {
  font-size: 10px;
  margin: 0px
}
</style>
<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import CustomButton from '../components/CustomButton.vue';
const body = document.getElementsByTagName("body")[0];
import { createToaster } from "@meforma/vue-toaster";
import router from '../router';
import { FormatData } from '../boot/FormatData';
import { onMounted, ref } from '@vue/runtime-core';

import jwt_decode from 'jwt-decode';
import { api } from '../boot/axios';

import VueCookies from 'vue-cookies'
import { RequestApi } from '../boot/RequestApi';
export default {
  name: "signin",
  components: {
    ArgonInput,
    ArgonCheckbox,
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

    let loading0 = ref(true);
    let exist = ref(true);
    onMounted(async () => {

      await getExistParrain();


      loading0.value = false;

    });
    let codeParrain = ref(0);
    async function getExistParrain() {
      console.log(window.location.pathname.split('/')[2].split('@')[1])
      const response = await new RequestApi().getExistParrainUserAction(window.location.pathname.split('/')[2]);
      if (response.status) {
        loading0.value = false
        if (response.exist == false) {
          exist.value = false

        } else {
          codeParrain.value = response.id
        }
      }
    };
    return {
      loading0, exist, codeParrain
    };
  },
  /* 

    async beforeRouteEnter(to, from, next) {
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
        next({ name: 'Dashboard' });
      } else {
        console.log('llllllllll');
  
        next();
      }
    }, */

  data() {
    return {
      v1: false,
      v2: false,
      v3: false,
      v4: false,
      v5: false,
      phone: '',

      password: '',
      entreprise: '',
      prenom: '',
      nom: '',
      mail: '',
      remenber: false,
      isPwd: true,
      loading: ref(false),

      data: [],
      decode: [],
      token: '',
    };
  },
  methods: {
    isUpper(str) {
      return /[A-Z]/.test(str);
    }
    , isLawer(str) {
      return /[a-z]/.test(str);
    }
    , containsNumbers(str) {
      return /\d/.test(str);
    }
    ,

    verifPassword() {
      this.v1 = (this.password.length >= 8);
      this.v5 = this.password.includes('@');
      this.v2 = this.isUpper(this.password)
      this.v3 = this.isLawer(this.password)
      this.v4 = this.containsNumbers(this.password)
      console.log(this.v1, this.v2, this.v3, this.v4)
      /*   if () {
         
         = true;
        }
        else {
  
          this.v2 = false;
  
        } */



    },
    async onSubmit() {

      this.verifPassword();
      console.log(this.v1, this.v2, this.v3, this.v4)
      let toast = createToaster();
      if (!this.v1 || !this.v2 || !this.v3 || !this.v4 || !this.v5) {
        toast.error(`Veuillez respecter les criteres du mot de passe`, {
          // override the global option
          position: "bottom"
        });
        return false;
      } let verName = new FormatData().verifCorrectText(this.nom);
      console.log(verName)
      if (!verName) {
        toast.error(`Veuillez entrer un nom correct`, {
          // override the global option
          position: "bottom"
        });
        return false;
      } let verMail = new FormatData().verifCorrectMail(this.mail);
      console.log(verMail)
      if (!verMail) {
        toast.error(`Veuillez entrer une addresse mail correct`, {
          // override the global option
          position: "bottom"
        });
        return false;
      }


      if (8 > this.phone.length || this.phone.length > 15) {
        toast.error(`Entrer un numero de telephone correct`, {
          // override the global option
          position: "bottom"
        });
        return false;
      }

      this.data = {
        nom: this.nom,
        prenom: this.prenom,
        phone: this.phone,
        password: this.password,
        nomEntreprise: this.entreprise,
        email: this.mail, codeParrain: this.codeParrain.toString(),
      };
      this.loading = !this.loading;
      // Cookies.remove('token');
      api.defaults.headers.common['Authorization'] = null;
      const response = await new RequestApi().signUp(this.data);

      if (response.status) {
        void this.connect();
      } else {
        this.loading = !this.loading;
        if (response.statusDu) {
          toast.error("Ce numero de telephone est deja utilise",
            {
              // override the global option
              position: "bottom"
            });
        } else {
          toast.error("Une Erreur est survenue lors de votre inscription",
            {
              // override the global option
              position: "bottom"
            });
        }
      }


    },
    async connect() {

      let toast = createToaster();
      api.defaults.headers.common['Authorization'] = null;
      await api
        .post('/api/auth', { phone: this.phone, password: this.password })
        .then((response) => {
          console.log(jwt_decode(String(response.data.token)).id);

          api.defaults.headers.common['Authorization'] =
            'Bearer ' + String(response.data.token);
          VueCookies.set('token', String(response.data.token));
          VueCookies.set('refreshToken', String(response.data.refreshToken));
          this.decode = jwt_decode(String(response.data.token));
          VueCookies.set('id', parseInt(String(this.decode.id))); VueCookies.set('codeParrain', String(this.decode.codeParrain));
          VueCookies.set('lienParrainnage', String(this.decode.lienParrainnage));

          VueCookies.set('keySecret', String(this.decode.keySecret));
          VueCookies.set('fonctions', (this.decode.fonctions));
          console.log(jwt_decode(String(response.data.token)).id);
          VueCookies.set('nom', String(this.decode.nom));
          VueCookies.set('prenom', String(this.decode.prenom));
          VueCookies.set('phone', String(this.decode.phone));

          console.log(jwt_decode(String(response.data.token)));

          router.push
            ({ name: 'Dashboard' });
          this.loading = !this.loading;

        })
        .catch(() => {
          this.loading = !this.loading;
          toast.error("Erreur d'authentification veuillez verifiez votre numero et mot de passe",
            {
              // override the global option
              position: "bottom"
            });

        });
    },
  },
};
</script>
