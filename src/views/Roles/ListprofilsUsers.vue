<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card">

          <div class="card-header pb-0">
            <div class="row">

              <div class="col-md-6 card-title font-weight-bolder dark text-mobile">Role des Utilisateurs
              </div>

              <div align="right" class="col-md-6">

                <router-link class="nav-link me-2" to="/createProfile">

                  + New Role
                </router-link>
              </div>

            </div>

            <h6 class='text-mobile2'> Tout utilisateur qui exploite la plateforme peut avoir un role
              different en fonction de ce qu'il doit y faire.
              <a href="/">En savoir plus</a>
            </h6>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive mt-1">
              <div class="  d-flex justify-content-center pb-3" v-if="loading0">

                <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

              </div>

              <div class="row" v-else id="row">
                <div class="col-lg-12 col-md-12 col-xl-4 col-sm-12" v-for="item in data" :key="item.name">
                  <profilUserComponent v-bind:title='item.name' v-bind:idRole="item.id"
                    v-bind:description='item.description' />
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
#row {
  margin-left: 12px;
  margin-right: 10px
}

#rol {
  text-decoration: none;
  color: black;
}

a:link {
  text-decoration: none;
  color: black;
}
</style>
<script  >
import { onMounted, ref } from '@vue/runtime-core';
import profilUserComponent from "../components/profilUserComponent.vue";
import { RequestApi } from '../../boot/RequestApi';
import { createToaster } from "@meforma/vue-toaster";
import VueCookies from 'vue-cookies'

export default {
  name: "list-profil-users",
  components: {
    profilUserComponent,
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
    let toast = createToaster();
    let loading0 = ref(true);
    let data = ref([])
    onMounted(async () => {
      await getListProfile();
    });

    async function getListProfile() {


      let listP = await new RequestApi().getProfile()
      console.log(listP)
      if (listP.status) {
        data.value = listP.data
        loading0.value = false;
      } else {
        loading0.value = false;

        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
      }

    };

    return {
      loading0,
      data

    };
  },
};
</script>
