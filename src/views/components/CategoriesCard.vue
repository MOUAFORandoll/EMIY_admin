<template>
  <div class="card">
    <div class="p-3 pb-0  ">
      <div class="row justify-content-between  ps-2">
        <div class="p-1 ps-0 pb-0 col-9 ">
          <div class="d-flex  justify-content-between">
            <h6 class="mb-0">{{ cardTitle }}</h6>

          </div>

        </div>
        <div class="col-3 pt-2 ps-6   elt0   " align=" ">


          <!-- Voir tous -->
          <i class="fa fa-share btns" aria-hidden="true"></i>


        </div>
      </div>

    </div>
    <div class="  d-flex justify-content-center pt-5 pb-5" v-if="loading">

      <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

    </div>
    <div class="p-3  " v-else>
      <ul class="list-group" :class="this.$store.state.isRTL ? 'pe-0' : ''">
        <router-link id='decnone' to="/Sms/Examiner">
          <li class="mb-2 border-0 list-group-item d-flex justify-content-between border-radius-lg mouse"
            :class="this.$store.state.isRTL ? 'pe-0' : 'ps-0'" v-for="data in lsms" :key="data.id"
            @click="setSenderId(data.senderId, data.senderIdId)">

            <div class="d-flex align-items-center">
              <div class="text-center shadow icon icon-shape icon-sm bg-gradient-dark"
                :class="this.$store.state.isRTL ? 'ms-3' : 'me-3'">
                <i class=" text-white opacity-10">{{ data.senderId.split('')[0].toUpperCase() }}
                  <!-- <span class="badge badge-secondary">New</span> -->
                </i>
              </div>
              <div class="d-flex flex-column">
                <h6 class="mb-1 text-sm text-dark">{{ data.senderId }}</h6>
                <span class="text-xs">
                  {{ data.nombreSms }} SMS vers {{ data.tailleContacts }} Contacts

                </span>
              </div>
            </div>

            <div class="d-flex  ">
              <button class="my-auto ps-5 btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right">
                <i class="ni ni-bold-right" aria-hidden="true"></i>
              </button>
            </div>

          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.btns {
  color: #585FE1;

}

.elt0 {
  display: flex;


}

@media only screen and (max-width: 991.98px) {

  .elt0 {
    display: none;
  }
}
</style>
<script>
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
import VueCookies from 'vue-cookies'

export default {
  name: "categories-card",
  props: {
    cardTitle: {
      type: String,
      default: "SMS par senderId",
    },

  },

  setup() {

    let lsms = ref([])
    let lsenderId = ref([])
    let data = ref([]);
    let idFonction = ref('');
    let iAction = ref(0);
    let loading = ref(true);
    // let toast =  createToaster( );
    onMounted(async () => {
      VueCookies.set('senderIdName', 'null');
      VueCookies.set('senderIdId', 'null'); VueCookies.set('senderIdName', null);
      VueCookies.set('senderIdId', null);
      await getSms();

    });

    function setSenderId(title, id) {
      console.log('voici id', id)
      VueCookies.set('senderIdName', title);
      VueCookies.set('senderIdId', id);
      // console.log('00000')

      // console.log('sendrid...', VueCookies.get('senderIdName'), VueCookies.get('senderIdId'));
    }

    async function getSms() {
      const response = await new RequestApi().getSmsBySenderIdDashAction();



      if (response.status) {
        lsms.value = response.data
        loading.value = false;
      }
      else {
        loading.value = false;

      }
      // console.log(lsms.value);

    }
    return {
      loading,
      open, data, idFonction, iAction,
      lsms, lsenderId, setSenderId

    };
  },
};
</script>
