<template>

  <div class="py-4  container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1">
              <h4 class="card-title font-weight-bolder dark text-mobile">Liste des evenements </h4>
              <p class="card-text border-bottom text-mobile2 "></p>
              <div class="row">
                <div class="  d-flex justify-content-center pb-3" v-if="loading">

                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                </div>

                <table class="table-responsive mt-1" v-else>
                  <div class="  d-flex justify-content-center pb-3" v-if="listCalendar.length == 0">

                    Vide

                  </div>

                  <tr v-for="calendar in listCalendar" :key="calendar.message" class="mouse ">
                    <div class=" row d-flex justify-content-between">
                      <div class=" col-4">

                        <div class="ms-2">
                          <p class="mb-0 ml-2 text-xs ">Message:</p>
                          <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark message">
                            {{ calendar.message }}</h6>
                        </div>

                      </div>
                      <div class=" col-4">
                        <div class="text-left">
                          <p class="mb-0 text-xs ">Date programme:</p>
                          <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{
                              calendar.dateProgramme
                          }} </h6>
                        </div>
                      </div>
                      <div class=" col-4">
                        <div class="text-left">
                          <p class="mb-0 text-xs ">Date de Création:</p>
                          <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{
                              calendar.dateCreate
                          }}</h6>
                        </div>
                      </div>

                      <!-- <div class="text-left">
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
                    </div>       </div> -->
                    </div>
                  </tr>



                </table>


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

.message {
  display: inline-block;
  /* max-width: 30%; */
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;

}

.mouse:hover {
  cursor: pointer
}
</style>
<style scoped>
.as {
  width: 100%;

}

/* tr {
  width: 10px;
  color:red
}  

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
  setup() {

    let loading = ref(true);
    let lFacture = ref([])
    let toast = createToaster();

    let listCalendar = ref([]);
    onMounted(async () => {

      await getListCalendar();

      loading.value = false;

    });
    async function getListCalendar() {

      // let lisdivate = ref([]);
      //
      const response = await new RequestApi().getCalendarAction();
      if (response.status) {

        listCalendar.value = response.data;


      }
      else {
        toast.error(`Une erreur est survenu  .`, {
          // override the global option
          position: "bottom"
        });
      }
    }



    return {
      open,
      listCalendar, show: false, loading, lFacture
    };
  },
};
</script>
