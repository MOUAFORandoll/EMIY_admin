<template>
  <div class="card card-profile">
    <img :src="verifImgExist(couverture)" alt="Image placeholder" class="card-img-top  " style="
    height: 15rem;
" />
    <div class="row justify-content-center">
      <div class="col-4 col-lg-4 order-lg-2">
        <!-- <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
          <a href="javascript:;">
            <img :src='verifImgExist(profile)' class="rounded-circle img-fluid border border-2   h-100 border-white" />
          </a>
        </div> -->
        <div class="avatar avatar-xl position-relative">
          <img :src='verifImgExist(profile)' alt="profile_image"
            class="shadow-sm w-100 rounded-circle img-fluid h-100 border-radius-lg" />
        </div>
      </div>
    </div>
    <div class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
      <div class="d-flex justify-content-between">
        <a href="javascript:;" class="btn btn-sm btn-info mb-0 d-none d-lg-block">Connect</a>
        <a href="javascript:;" class="btn btn-sm btn-info mb-0 d-block d-lg-none">
          <i class="ni ni-collection"></i>
        </a>
        <a href="javascript:;" class="btn btn-sm btn-dark float-right mb-0 d-none d-lg-block"
          @click="modif">Modifier</a>
        <a href="javascript:;" class="btn btn-sm btn-dark float-right mb-0 d-block d-lg-none">
          <i class="ni ni-email-83"></i>
        </a>
      </div>
    </div>
    <div class="card-body pt-0" v-if="!show">
      <div class="row">
        <div class="col">
          <div class="d-flex justify-content-center">
            <div class="d-grid text-center">
              <span class="text-lg font-weight-bolder">{{ friend }}</span>
              <span class="text-sm opacity-8">Clients</span>
            </div>
            <div class="d-grid text-center mx-4">
              <span class="text-lg font-weight-bolder">{{ project }}</span>
              <span class="text-sm opacity-8">Projets</span>
            </div>
            <div class="d-grid text-center">
              <span class="text-lg font-weight-bolder">{{ vitrine }}</span>
              <span class="text-sm opacity-8">Vitrines</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-4">
        <h5>
          {{ nom }}
          {{ prenom }}
          <!-- <span class="font-weight-light">, 35</span> -->
        </h5>
        <!-- <div class="h6 font-weight-300">
          <i class="ni location_pin mr-2"></i>Bucharest, Romania
        </div> -->
        <div class="h6 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i> {{ poste }}
        </div>
        <div>
          <i class="ni education_hat mr-2"></i> {{ entreprise }}
        </div>
      </div>
    </div>
    <div class="card-body pt-0" v-else>
      <div class="col-1" v-if="loadingUpdate">

        <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>


      </div>
      <div class="  mt-0" v-else>


        <div class="col-lg-12 col-sm-12  ">
          <label>Inserer image De Profil</label>

              <argon-input  :readonly='loading' icon="../assets/img/team-2.jpg" type="file" placeholder="Description" aria-label="Name"
            accept=".png, .jpeg,.jpg" @change="onFileChange" />



        </div>
        <div class="col-lg-12 col-sm-12  ">
          <label>Inserer image publicitaire</label>
              <argon-input  :readonly='loading' icon="../assets/img/team-2.jpg" type="file" placeholder="Description" aria-label="Name"
            accept=".png, .jpeg,.jpg" @change="onFileChange2" />



        </div>




      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/runtime-core';
import ArgonInput from "@/components/ArgonInput.vue";
import { RequestApi } from '../../boot/RequestApi';
import { createToaster } from "@meforma/vue-toaster";
import { ApiManage } from '../../boot/ApiManage';
import VueCookies from 'vue-cookies'

import { FormatData } from '../../boot/FormatData';
export default {
  name: "profile-card",
  components: {

    ArgonInput,
  },
  props: {
    friend: {
      type: String,
      default: "0"
    }, vitrine: {
      type: String,
      default: "0"
    },
    project: {
      type: String,
      default: "0"
    }, nom: {
      type: String,
      default: ""
    }, prenom: {
      type: String,
      default: ""
    }, /* profile: {
      type: String,

    }, couverture: {
      type: String,

    }, */ entreprise: {
      type: String,
      default: ""
    }, poste: {
      type: String,
      default: ""
    },
  },


  methods: {
    async onFileChange(e) {

      console.log('cdsdsv.value*****')

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      console.log(files)
      this.image = files[0]
      this.loadingUpdate = true;
      console.log('hgfggf')
      const response = await new RequestApi().uploadUserImage(this.image, 1);
      console.log(response)
      if (response.status) {


        VueCookies.set('profile', new ApiManage().baseUrl + '/images/client/' + response.filePath)

        this.toast.success(`Mise a jour effectue avec success.`, {
          // override the global option
          position: "bottom"
        });
        console.log(new ApiManage().baseUrl + '/images/client/' + response.filePath)
        this.loadingUpdate = false;
      }
      else {
        //
        this.loadingUpdate = false;
        this.toast.error(`Une erreur est survenu.`, {
          // override the global option
          position: "bottom"
        });
      }
    },
    async onFileChange2(e) {

      console.log('cdsdsv.value*****')

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      console.log(files)
      this.image = files[0]
      this.loadingUpdate = true;
      const response = await new RequestApi().uploadUserImage(this.image, 2);
      if (response.status) {
        this.loadingUpdate = false;
        VueCookies.set('couverture', new ApiManage().baseUrl + '/images/client/' + response.filePath)

        this.toast.success(`Mise a jour effectue avec success.`, {
          // override the global option
          position: "bottom"
        });
      }

      else {
        //
        this.loadingUpdate = false;
        this.toast.error(`Une erreur est survenu.`, {
          // override the global option
          position: "bottom"
        });
      }
    }
  },
  data() {
    return {
      toast: createToaster(),
      loadingUpdate: ref(false)
    }
  },
  setup() {
    // let toast = createToaster();
    function modif() {
      show.value = !show.value
    } function verifImgExist(src) {
      return new FormatData().verifImgExist(src);



    }
    let image = ref();
    let show = ref(false);
    return {
      image,
      show,
      modif, verifImgExist, profile: VueCookies.get('profile'), couverture: VueCookies.get('couverture'),
      // toast
    }
  }
};
</script>