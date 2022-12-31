<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card">

          <div class="card-body   ">
            <div class="row justify-content-between">
              <article>
                <h5 id="title"> Roles</h5>

                <ul>

                  <li v-for="item in dataP" :key="item.name" @click="getFonctionsAction(item.id, item.name)"
                    :class='roleId == item.id ? "blue" : ""'>
                    {{ item.name }}
                  </li>
                </ul>
              </article>
              <aside class="col-md-6">
                <div class="row border-bottom" style="padding-top: 10px;
      padding-bottom: 10px;">
                  <div class="col-md-8" style="  font-size:16px" id="nRole">

                  </div>

                  <div align="right" class="col-md-4">
                    <div class=" float-right">
                      <router-link class="nav-link me-2" to="/createProfile">

                        + New Role
                      </router-link>
                    </div>
                  </div>

                </div>
                <div class="  d-flex justify-content-center pb-3" v-if="loading0">

                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                </div>

                <div v-else>
                  <div class="row" id="row">

                    <div class="col-3">
                      <h5 id="menu">Menu</h5>
                    </div>
                    <!--   <div class="col-3">
                      <h5 id="menu">Attribuer</h5>
                    </div>
                    <div class="col-3">
                      <h5 id="menu">Retirer</h5>
                    </div> -->
                    <div class="col-4">
                      <h5 id="menu">Etat</h5>
                    </div>
                  </div>

                  <div class="row ms-2" v-for="item in data" :key="item.name">

                    <div class="col-12">
                      <div class="row">
                        <div class="col-2">
                          <div class="row">{{ item.nomModule }}</div>
                        </div>
                        <div class="col-1 se" @click="showHide(item.idModule)">
                          +
                        </div>
                      </div>
                      <div :class="item.idModule" class="ms-3">
                        <div class=" row" v-for="item0 in item.data" :key="item0.name">

                          <div class="col-3">
                            <div class="row">{{ item0.name }}</div>
                          </div>
                          <div class="col-8 row">

                            <div class=" col-5"> {{ item0.check ? ' Active' : 'Desactive' }} </div>
                            <div class="col-4" directionReverse align='right'>
                              <div class="text-right " >
                                <Popper class="theme">
                                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                  <template #content>

                                    <CustomButton :title='!item0.check ? "Active" : "Desactive"'
                                      @click='updateFunctionToRoleAction(item0.id, item0.check, item0.check ? false : true)'
                                      :classe="'btn btn-primary  col-12 '" />

                                  </template>
                                </Popper>


                              </div>
                            </div>




                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- <div class="col-5"> <input type="checkbox" :checked=item.check
                      v-on:click="dialog(item.id, item.check)" class="scales" name="scales"></div> -->



                  </div>
                </div>
              </aside>

              <vue-final-modal v-model="laodingUpdateRole" style="" classes="modal-container"
                content-class="modal-content">

                <span class="modal__title"> Veuillez patienter</span>
                <div class="  d-flex justify-content-center pb-3">

                  <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                </div>
              </vue-final-modal>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.se {
  font-weight: bolder;
}

.se:hover {
  cursor: pointer;
}

.se:active {
  color: rgb(44, 85, 208);
}

.blue {
  color: #2F00FF;
}

#menu {
  background-color: rgb(236, 243, 236);
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px
}

article {
  width: 20%;
  padding: 0px;
  margin: 0px;
  border: 1px solid rgb(204, 205, 206);
  float: left;
}

aside {
  width: 78%;
  border: 1px solid rgb(204, 205, 206);
  /* color: white; */
  /* padding: 15px; */
  margin: 10x
}

#title {
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid rgb(252, 248, 248);
  border-bottom-color: rgb(238, 227, 227);
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

li {
  list-style-type: "»";
  padding-left: 10px;
}

::v-deep .modal-container {
  display: flex;
  justify-content: center;


  align-items: center;
  width: auto;
  padding-left: 40%
}

::v-deep .modal-content {
  width: auto;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0em 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

.modal__title {
  margin: 0 2rem 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}

.modal__action {
  display: flex;
  flex-shrink: 0;
  padding: 1rem 0 0;
}

.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.dark-mode div .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
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
<script  >
import { VueFinalModal } from 'vue-final-modal'
import CustomButton from '../../components/CustomButton.vue';
import Popper from "vue3-popper";

import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
import { createToaster } from "@meforma/vue-toaster";
import VueCookies from 'vue-cookies'

// import router from '../../router';
export default {
  name: "EditProfileUser",
  components: {
    VueFinalModal, CustomButton, Popper,
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
    let data = ref([]);
    let idFonction = ref('');
    let iAction = ref(0);
    let roleId =
      ref(VueCookies.get('idRole'));

    let toast = createToaster();
    let loading0 = ref(true);
    let type = ref(true);
    let laodingUpdateRole = ref(false);

    let dataP = ref([]);
    onMounted(async () => {

      await getListProfile();

      await getFonctionsAction(VueCookies.get('idRole'), VueCookies.get('nameRole'));
    });

    async function getListProfile() {


      let listP = await new RequestApi().getProfile()
      console.log(listP)
      if (listP.status) {
        dataP.value = listP.data
        loading0.value = false;
      } else {
        loading0.value = false;

        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
      }

    };
    async function getFonctionsAction(id, name) {
      loading0.value = true;
      roleId.value = id; let nRole = document.getElementById('nRole');

      VueCookies.set('idRole', id);
      VueCookies.set('nameRole', name);
      nRole.innerText = '  Configuration des operations ' + VueCookies.get('nameRole');
      let listF = await new RequestApi().getProfileFonction(id);
      console.log(listF.data)
      if (listF.status) {
        loading0.value = false;
        data.value = listF.data
      }
      else {
        loading0.value = false;

        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
      } console.log(data.value)


    };
    const open = ref(false);

    // let scales = document.querySelector('input');
    // function dialog(id, typed) {
    //   type.value = typed;
    //   idFonction.value = id;
    //   console.log(idFonction.value);
    //   open.value = !open.value



    // }
    async function updateFunctionToRoleAction(idFonction, type, issue) {

      if (issue == type) {
        toast.error(`Action Impossible`, {
          // override the global option
          position: "bottom"
        });

      } else {
        let data = {
          role: roleId.value,
          fonction: idFonction,
          keySecret: VueCookies.get('keySecret')
        }

        laodingUpdateRole.value = true;
        let request = await new RequestApi().unpdateFunctionToRole(data, type);
        // open.value = !open.value;
        // console.log(request);
        if (request.status) {
          open.value = !open.value

          laodingUpdateRole.value = false;

          toast.success(`Success`, {
            // override the global option
            position: "bottom"
          });
          console.log('Success');
          await getFonctionsAction(roleId.value, VueCookies.get('nameRole')
          );
        }

        else {

          laodingUpdateRole.value = false;

          toast.error(`Error`, {
            // override the global option
            position: "bottom"
          });

          console.log('errior');
        }
      }

    }

    function showHide(id) {


      let className = '.'.concat(id);
      console.log(className);

      let souscontenu = document.querySelector(className);
      console.log(souscontenu.style.display);
      if (souscontenu.style.display == 'none') {
        souscontenu.style.display = "block";

      }
      else {
        souscontenu.style.display = "none";

      } console.log(souscontenu);


    }
    return {
      getFonctionsAction, showHide, roleId, open, data, idFonction, iAction, updateFunctionToRoleAction, loading0, type, laodingUpdateRole, dataP

    };
  },
};
</script>
