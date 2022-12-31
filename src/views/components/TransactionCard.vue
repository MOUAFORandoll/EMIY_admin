<template>
  <div class="card   mb-4 scroll">
    <div class="  pb-0 px-3">
      <div class="row mt-3">
        <div class="col-md-6 ">
          <h6 class="mb-0 ">Liste des transactions</h6>
        </div>
        <div class="col-md-6 d-flex justify-content-end align-items-center">
          <!-- <small class="font-weight-bolder">{{date}}</small> -->
          <!-- <datepicker v-model="date" wrapper-class="input" @change="selected"></datepicker> -->
          <!-- <i class="far fa-calendar-alt me-2" aria-hidden="true"></i> -->

          <input type="date" v-model='date' @change="selected" class="form-control" id="inputCity" />
        </div>
      </div>
    </div>
    <div class="  d-flex justify-content-center pt-5" v-if="loading">

      <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

    </div>

    <div class="card-body pt-4 p-3 " v-else-if="search">
      <h6 class="text-uppercase text-body text-xs font-weight-bolder    ">Transaction search</h6>
      <div class="degrade-horizontal2" id="grD"></div>

      <ul class="list-group">
        <li v-for="transaction in lTransactionF" :key="transaction.id"
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
          <div class="d-flex align-items-center">
            <argon-button color="danger" v-if='(transaction.typeTransaction.id == 2)' variant="outline" size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center">
              <i class="fas fa-arrow-up" aria-hidden="true"></i>

            </argon-button>

            <argon-button color="success" v-else variant="outline" size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center">

              <i class="fas fa-arrow-down" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">{{ transaction.description }}</h6>
              <span class="text-xs">{{ transaction.dateCreate.split('T')[0] }}</span>
            </div>
          </div>
          <div class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">XAF
            {{ transaction.montant }}</div>
        </li>

      </ul>

    </div>
    <div v-else>
      <div class="card-body pt-4 p-3 " v-if="lTransactionToDay.length != 0">
        <h6 class="text-uppercase text-body text-xs font-weight-bolder    ">Nouveautes</h6>
        <div class="degrade-horizontal" id="grD"></div>

        <ul class="list-group ">
          <li v-for="transaction in lTransactionToDay" :key="transaction.id"
            class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
            <div class="d-flex align-items-center">
              <argon-button color="danger" v-if='(transaction.typeTransaction.id == 2)' variant="outline" size="sm"
                class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center">
                <i class="fas fa-arrow-up" aria-hidden="true"></i>

              </argon-button>

              <argon-button color="success" v-else variant="outline" size="sm"
                class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center">

                <i class="fas fa-arrow-down" aria-hidden="true"></i>
              </argon-button>
              <div class="d-flex flex-column">
                <h6 class="mb-1 text-dark text-sm">{{ transaction.description }}</h6>
                <span class="text-xs">{{ transaction.dateCreate.split('T')[0] }}</span>
              </div>
            </div>
            <div class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">XAF
              {{ transaction.montant }}</div>
          </li>

        </ul>

      </div>

      <div class="card-body pt-4 p-3 " v-if="lTransactionYesterDay.length != 0">
        <h6 class="text-uppercase text-body text-xs font-weight-bolder    ">
          Transaction d'hier</h6>
        <div class="degrade-horizontal2" id="grD"></div>

        <ul class="list-group">
          <li v-for="transaction in lTransactionYesterDay" :key="transaction.id"
            class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
            <div class="d-flex align-items-center">
              <argon-button color="danger" v-if='(transaction.typeTransaction.id == 2)' variant="outline" size="sm"
                class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center">
                <i class="fas fa-arrow-up" aria-hidden="true"></i>

              </argon-button>

              <argon-button color="success" v-else variant="outline" size="sm"
                class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center">

                <i class="fas fa-arrow-down" aria-hidden="true"></i>
              </argon-button>
              <div class="d-flex flex-column">
                <h6 class="mb-1 text-dark text-sm">{{ transaction.description }}</h6>
                <span class="text-xs">{{ transaction.dateCreate.split('T')[0] }}</span>
              </div>
            </div>
            <div class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">XAF
              {{ transaction.montant }}</div>
          </li>

        </ul>

      </div>
    </div>
  </div>
</template>

<style scoped>
.input {}

.degrade-horizontal {
  background: linear-gradient(0.25turn, rgb(219, 214, 215) 0%, rgb(26, 26, 190), rgb(219, 214, 215)) 0%;

}

.degrade-horizontal2 {
  background: linear-gradient(0.25turn, rgb(219, 214, 215) 0%, rgb(133, 26, 190), rgb(219, 214, 215)) 0%;

}

#grD {

  height: 2px;
}

.scroll {

  height: 50%;
  overflow: scroll;
}

.scroll::-webkit-scrollbar {
  width: 12px;
}

.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
// import Datepicker from 'vuejs3-datepicker';
import { onMounted, ref } from '@vue/runtime-core';
import { createToaster } from "@meforma/vue-toaster";
import { RequestApi } from "../../boot/RequestApi";
import { formatDate } from "../../boot/formatDate";

export default {
  name: "transaction-card",
  components: {
    ArgonButton,/* Datepicker */

  },
  setup() {
    let toast = createToaster();
    let lTransactionToDay = ref([])
    let lTransactionAll = ref([])
    let lTransactionYesterDay = ref([])
    let lTransactionF = ref([])
    let date = /*  */ref(new Date())/*  */;
    let loading = ref(true);
    let search = ref(false);
    onMounted(async () => {


      await getListTransaction();

    })


    async function getListTransaction() {

      const response = await new RequestApi().getListTransactionUserNew();
      if (response.status) {
        lTransactionToDay.value = response.toDay;
        lTransactionYesterDay.value = response.yesterday;
        lTransactionAll.value = response.all;
        loading.value = !loading.value;
        console.log('today', lTransactionToDay.value);
        console.log('lTransactionYesterDay', lTransactionYesterDay.value);
        console.log('lTransactionAll', lTransactionAll.value);

      } else {

        // eslint-disable-next-line require-atomic-updates
        loading.value = !loading.value;
        toast.error(`Une erreur s'est produite`, {
          // override the global option
          position: "bottom"
        });
      }
    }
    // async function getListTransaction() {
    //   const response = await new RequestApi().getListTransactionUserNew();
    //      if (response.status) {

    //       for (let i = 0; i < response.data.length; i++) {
    //         if (lTransaction.value.length < 12) {   const transaction = response.data[i];
    //         lTransaction.value.push({
    //           transactionId:transaction['id'],
    //           type: transaction['typeTransaction']['id'],
    //           description: transaction['description'],
    //           dateCreate: transaction['dateCreate'],
    //           montant: transaction['montant']

    //         })
    //       }

    //     }
    //        lTransactionF.value = lTransaction.value
    //     loading.value = !loading.value
    //   } else {

    //     // eslint-disable-next-line require-atomic-updates
    //      loading.value = !loading.value;
    //     toast.error(`Une erreur s'est produite`, {
    //       // override the global option
    //       position: "bottom"
    //     });
    //   }


    // }
    function selected() {
      lTransactionF.value = [];
      console.log('transaction')
      console.log(lTransactionAll.value)

      for (var i = 0; i < lTransactionAll.value.length; i++) {
        let transaction = lTransactionAll.value[i];
        console.log('transaction.dateCreate')
        console.log(transaction.dateCreate)
        console.log(formatDate(date.value, 1).toString())
        console.log(formatDate(transaction.dateCreate, 1) == formatDate(date.value, 1))
        if (formatDate(transaction.dateCreate, 1) == formatDate(date.value, 1)) {
          lTransactionF.value.push(transaction);
        }
      }
      console.log('final  transaction')
      console.log(lTransactionF.value)
      if (lTransactionF.value.length != 0) {
        search.value = true
      } else {
        search.value = false

      }

    }

    return {
      search,
      lTransactionF, date, loading, selected, lTransactionToDay, lTransactionYesterDay, lTransactionAll
    };
  },
};
</script>
