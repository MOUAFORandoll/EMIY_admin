/* eslint-disable no-unused-labels */
<template>



  <div class="d-flex px-2 py-1 h-75 row  " id="card">

    <div class="col-10 " v-on:click="goTo">
      <div class="row ">

        <div class="  flex">
          <img src="../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1" />
          <div class="d-flex flex-column justify-content-center ">
            <div class="d-flex justify-content-between">
              <div class="col">
                <h6 class="mb-0  pcard-text message2" style="font-weight: bolder">{{ title }}
                </h6>
              </div>

            </div>


            <span id="comment" class=" mobile pcard-text message2"> {{ description }}</span>
          </div>

        </div>
      </div>

    </div>
    <div class="col-2" v-show="manageProfil">
      <div align="right" id="reverse">
        <Popper class="theme" placement="left">
          <i class="fa fa-ellipsis-v btns pt-3" aria-hidden="true"></i>
          <template #content mt-0 pt-0>
            <div class="d-flex justify-content-start mt-0 pt-0" v-on:click="goTo"> Configurer</div>
            <!-- <div class="d-flex justify-content-start"> Editer</div> -->
            <div class="d-flex justify-content-start">Supprimer</div>
          </template>
        </Popper>


      </div>
    </div>

  </div>


  <!-- 


    <div class="d-flex px-2 py-1 row" id="card" v-on:click="goTo">
      <div class="col-6">
        <div class="row ">

          <div class="col-8 flex">
            <img src="../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1" />
            <div class="d-flex flex-column justify-content-center ">
              <div class="d-flex justify-content-between">
                <div class="col">
                  <h6 class="mb-0 text-sm" style="font-weight: bolder">{{title}}
                  </h6>
                </div>

              </div>


              <span id="comment"> {{description}}</span>
            </div>

          </div>
        </div>

      </div>
      <div class="col-6">
        <div align="right" id="reverse">
          <Popper class="theme" placement="left">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            <template #content>
              <div> Loren</div>
              <div>Examiner</div>
            </template>
          </Popper>


        </div>
      </div>
 -->






</template>
<style scoped>
.message2 {
  display: inline-block;
  /* max-width: 80%; */
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;


}

.btns {
  color: #585FE1;

}

#reverse {
  /* transform: translateX(190px)  ; */
}

.as {
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: blue;
}

#card {
  display: block;
  border: 1px solid rgb(194, 191, 191);
  border-radius: 10px;
  margin-left: 2px;
  margin-right: 2px;

  margin-top: 15px;
  margin-bottom: 5px;
}

#card:hover {
  cursor: pointer
}

.col-md-4 {
  margin-top: 10px;
  margin-bottom: 8px;
}

.flex {
  display: flex;
  /* or inline-flex */
}

.pcard-text {
  font-size: 10px;

}

/* 
@media (min-width: 576px) {
  .pcard-text {
    font-size: 10px;
  }
}

@media (min-width: 768px) {
  .pcard-text {
    font-size: 10px;
  }
}

@media (min-width: 992px) {

  .pcard-text {
    font-size: 10px
  }
}

@media (min-width: 1200px) {
  .pcard-text {
    font-size: 10px
  }
}

@media (min-width: 1400px) {
  .pcard-text {
    font-size: 15px
  }
} */

i:hover {
  cursor: pointer
}

.theme {
  --popper-theme-background-color: rgba(255, 255, 255, 0.972);
  --popper-theme-background-color-hover: rgb(255, 255, 255);
  --popper-theme-text-color: #040404;
  --popper-theme-border-width: 2px;
  --popper-theme-border-style: solid;
  --popper-theme-border-color: rgb(224, 212, 212);
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 8px;

}
</style>

<script>
import VueCookies from 'vue-cookies'
import { createToaster } from "@meforma/vue-toaster";

import Popper from "vue3-popper";
export default {
  name: "profilUserComponent",
  props: {
    idRole: String,
    title: String,
    description: String
  }, components: {
    Popper,


  },
  methods: {
    goTo() {

      let toast = createToaster();

      let manageProfil = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '15') ? true : false : false;

      if (manageProfil) {
        VueCookies.set('idRole', this.$props.idRole);
        VueCookies.set('nameRole', this.$props.title);
        console.log('idRole', this.$props.idRole);
        var a = this.$router.push({
          path: `/EditProfileUser` /* / ${ this.$props.title } */
        });
        console.log(a);
        return a;
      }
      else {
        toast.error(`Vous n'avez pas acces a cette section`, {
          // override the global option
          position: "bottom"
        });
      }
    }
  },

  setup: () => {
    let data = [];
    let manageProfil = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '15') ? true : false : false;

    return {
      data, manageProfil
    }


  }
};
</script>
