<template>


  <div class="card">

    <div class="  d-flex justify-content-center pt-5 pb-5" v-if="loading">

      <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

    </div>
    <div v-else>

      <div class=" pb-0 px-3">
        <h4 class="mb-0 mt-4 pb-2">Operations financieres les plus recents</h4>
      </div>
      <div class="card-body pt-4 p-3">
        <ul class="list-group" v-for="commission in lCommission" :key="commission.id">
          <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg justify-content-between ">

            <!-- <div class='row'>
              <div class='col-6'>
                <div class='row'>
                  <div class='col-3 '>
                    Nom:
                  </div>
                  <div class='col-3 text-truncate'>
                    {{ commission.nom }}
                  </div>



                </div>
                <div class='row'>
                  <div class='col'>
                    Telephone:
                  </div>
                  <div class='col-3  '>
                    {{ commission.phone }}
                  </div>



                </div>
                <div class='row'>
                  <div class='col'>
                    Entreprise:
                  </div>
                  <div class='col-3 text-truncate'>
                    {{ commission.entreprise }}
                  </div>



                </div>


              </div>
              <div class='col-6'>
                <div class='row'>
                  <div class='col-3 '>
                    Commission produit:
                  </div>
                  <div class='col-3 text-truncate'>
                    {{ commission.commissionT }}
                  </div>



                </div>
                <div class='row'>
                  <div class='col'>
                    Vos Commissions:
                  </div>
                  <div class='col-3 text-truncate'>
                    {{ commission.commission }}
                  </div>



                </div>
                <div class='row'>
                  <div class='col'>
                    Derniere activite:
                  </div>
                  <div class='col-3 text-truncate'>
                    {{ commission.date }}
                  </div>



                </div>

              </div>

            </div>
 -->

            <div class="d-flex justify-content-between  flex-column ">
              <span class="mb-2 text-xs">
                Nom:
                <span class="text-dark font-weight-bolder ms-sm-2">{{ commission.nom }}</span>
              </span>
              <span class="  mobile mb-2 text-xs">
                Telephone:
                <span class="text-dark ms-sm-2 font-weight-bolder">{{ commission.phone }}</span>
              </span>
              <span class=" mobile text-xs">
                Entreprise:
                <span class="text-dark ms-sm-2 font-weight-bolder">{{ commission.entreprise }}</span>
              </span>
            </div>
            <div class="justify-content-between  mobile d-flex flex-column me-10">
              <span class="mb-2 text-xs mobile">
                Commission produit:
                <span class="text-dark font-weight-bolder ms-sm-2">XAF {{ commission.commissionT }}</span>
              </span>
              <span class="mb-2 text-xs">
                Vos Commissions:
                <span class="text-dark ms-sm-2 font-weight-bolder">XAF {{ commission.commission }}</span>
              </span>
              <span class="mobile text-xs">
                Derniere activite:
                <span class="text-dark ms-sm-2 font-weight-bolder">{{ commission.date }}</span>
              </span>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import { onMounted, ref } from '@vue/runtime-core';
import { createToaster } from "@meforma/vue-toaster";
import { RequestApi } from "../../boot/RequestApi";
import { formatDate } from "../../boot/formatDate";

export default {
  name: "billing-card", setup() {
    let toast = createToaster();
    let lCommission = ref([])
    let date = formatDate(new Date(), 0);
    let loading = ref(true);

    onMounted(async () => {


      await getListCommission();

    })

    async function getListCommission() {

      const response = await new RequestApi().getListCommissionUser();
      console.log('commsiosio', response.data);

      if (response.status) {
        lCommission.value = response.data.data;

        loading.value = !loading.value
      } else {

        // eslint-disable-next-line require-atomic-updates
        loading.value = !loading.value;
        toast.error(`Une erreur s'est produite`, {
          // override the global option
          position: "bottom"
        });
      }


    }


    return {
      lCommission, date, loading
    };
  },
};
</script>
