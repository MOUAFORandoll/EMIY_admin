<!-- eslint-disable @typescript-eslint/no-unsafe-call -->
/* eslint-disable prettier/prettier */
<template>
  <center>
    <div class="vertical-middle">
      <div class="col-xl-4 col-lg-6 col-sm-12 col-md-8 absolute-center d-flex flex-column mt-3">
        <div class="card card-plain w-100 align-middle">
          <div class="pb-0 card-header text-start">
            <h4 class="mb-0">Êtes vous {{ nom }} ?</h4>
            <h7> Veuillez confirmer en renseignant votre mot de passe</h7>
          </div>
          <div class="card-body">
            <form role="form">
              <div class="mb-3">
                <div class="form-group">
                  <input class="form-control" type="password" placeholder="Password" v-model="password"
                    name="password" />
                </div>
              </div>

              <div class="row ps-2 pe-2">
               
                <CustomButton :title='" Non"' :loading='loading' @update:loading="loading = $event"
                  @click='loggout'
                  :classe="'btn btn-danger  pt-2 pb-2 ps-5 pe-5 col-xl-4 col-lg-6 col-sm-12 col-md-8  w-50 mt-4' "
                  color="success" fullWidth size="lg" />

                <CustomButton :title='"  Sign in"' :loading='loading' @update:loading="loading = $event"
                  @click='onSubmit'
                  :classe="'btn btn-primary  pt-2 pb-2 ps-5 pe-5  col-xl-4 col-lg-6 col-sm-12 col-md-8  w-50 mt-4'  "
                  color="success" fullWidth size="lg" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </center>
</template>

<script>
import router from "../router";

import { ref } from "vue";
import  {api}  from "../boot/axios";
import jwt_decode from "jwt-decode";
import VueCookies from "vue-cookies";
const body = document.getElementsByTagName("body")[0];
import CustomButton from '../components/CustomButton.vue';

export default {
  name: "remember-page",
  components: {
    
    CustomButton,
  },
  data() {
    return {};
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "https://oss.maxcdn.com/respond/1.4.2/respond.min.js"
    );
    document.head.appendChild(externalScript);

    let externalScript1 = document.createElement("script");
    externalScript1.setAttribute(
      "src",
      "https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"
    );
    document.head.appendChild(externalScript1);

    let externalScript2 = document.createElement("script");
    externalScript2.setAttribute("src", "js/jquery-2.1.1.js");
    document.head.appendChild(externalScript2);

    let externalScript3 = document.createElement("script");
    externalScript3.setAttribute("src", "js/swiper.jquery.min.js");
    document.head.appendChild(externalScript3);

    let externalScript4 = document.createElement("script");
    externalScript4.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js"
    );
    document.head.appendChild(externalScript4);

    let externalScript5 = document.createElement("script");
    externalScript5.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js"
    );
    document.head.appendChild(externalScript5);

    let externalScript6 = document.createElement("script");
    externalScript6.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js"
    );
    document.head.appendChild(externalScript6);
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  setup() {
    let password = ref("");
    let loading = ref(false);
    let decode = ref([]);

    let nom = ref("");
    nom.value = VueCookies.get("nom");

    const onSubmit = async () => {
      console.log("sdddsd");
      loading.value = !loading.value;
      console.log("sdddsd", VueCookies.get("to"));

      await api
        .post("/api/auth", {
          phone: VueCookies.get("phone"),

          password: password.value,
        })
        .then((response) => {
          console.log(String(response.data.token));
          api.defaults.headers.common["Authorization"] =
            "Bearer " + String(response.data.token);

          VueCookies.set("token", String(response.data.token));
          VueCookies.set("refreshToken", String(response.data.refreshToken));

          decode.value = jwt_decode(String(response.data.token));

          VueCookies.set("nom", String(decode.value.nom));
          VueCookies.set("prenom", String(decode.value.prenom));
          VueCookies.set("phone", String(decode.value.phone));
          VueCookies.set("id", parseInt(String(decode.value.id)));

          if (decode.value.roles[1] == "ROLE_ADMIN") {
            VueCookies.set("admin", "1");
          } else {
            VueCookies.set("admin", "0");
          }
          loading.value = !loading.value;
          let aujourdhui = new Date();
          VueCookies.set("date", aujourdhui.getDay().toString());
          router.push({ name: VueCookies.get("to") });
        })
        .catch(() => {
          loading.value = !loading.value;
          console.log("ewwewe");
        });
    };
    const loggout = async () => {
      api.defaults.headers.common["Authorization"] = null;
      VueCookies.remove("token");
      VueCookies.remove("refreshToken");
      VueCookies.set("token", "undefined");
      VueCookies.set("refreshToken", "undefined");
      VueCookies.remove("id");
      VueCookies.remove("admin");
      // VueCookies.remove('theme');

      router.push({ name: VueCookies.get("signin") });
    };
    return {
      onSubmit,
      password,
      loading,
      loggout,
      nom,
    };
  },
};
</script>
