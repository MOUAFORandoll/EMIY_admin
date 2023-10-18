<script setup>
import { mdiHomeGroup, mdiReload, mdiCog } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";

import { mdiEye, mdiTrashCan } from "@mdi/js";
import CardBoxModal from "@/components/CardBoxModal.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
// import UserAvatar from "@/components/UserAvatar.vue";

import * as chartConfig from "@/components/Charts/chart.config.js";
import LineChart from "@/components/Charts/LineChart.vue";
import { onMounted, computed, ref } from "vue";
import { RequestApi } from "@/boot/RequestApi";
let request = new RequestApi();

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import CardBoxTransaction from "@/components/CardBoxTransaction.vue";
import CardBoxClient from "@/components/CardBoxClient.vue";
const isModalProjetActive = ref(false);
const isModalAgregateurActive = ref(false); 
import { useMainStore } from "@/stores/main";

const chartData = ref(null);

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData();
};
const isModalDangerActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);
let listTransactions = ref([]);
let loading = ref(true);
let loadingTProjet = ref(false);
let loadingTAgregateur = ref(false);
let isProduits = ref(true);
let transaction = ref({ nom: "" });
let loadingProduits = ref(true);
let produits = ref([]);
let loadingCommandes = ref(true);

const itemsPaginated = computed(() =>
  listTransactions.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() =>
  Math.ceil(listTransactions.value.length / perPage.value)
);

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});
const mainStore = useMainStore();

onMounted(async () => {
  fillChartData();
  await getTransactionsList();
  
});

async function getTransactionsList() {
    loading.value = true;
  console.log(loading.value);
  const response = await request.getListAllTransaction();
  if (response.status) {
   
    loading.value = false;
    listTransactions.value = response.data;
  } else {
   toast.error('Une erreur est survenue !', {
      autoClose: 2000,
    });
    loading.value = false;
  }
}
async function getProjetTransaction(projetsecretKey) {
  loading.value = true;
  loadingTProjet.value = true;

  console.log(loading.value);
  isModalProjetActive.value = false;
  const response = await request.getTransactionProjet(projetsecretKey);
  if (response.status) {

    loading.value = false;
    listTransactions.value = response.data;
  } else {
    toast.error('Une erreur est survenue !', {
      autoClose: 2000,
    });
    loading.value = false;
  }
  loadingTProjet.value = false;

}
async function getAgregateurTransaction(apiKey) {
  loading.value = true;
  loadingTAgregateur.value = true;

  console.log(loading.value);
  isModalAgregateurActive.value = false;
  const response = await request.getTransactionAgregateur(apiKey);
  if (response.status) {
    loading.value = false;
    listTransactions.value = response.data;
  } else {
    toast.error('Une erreur est survenue !', {
      autoClose: 2000,
    });
    loading.value = false;
  }
  loadingTAgregateur.value = false;


}

</script>


<template>
  <CardBoxModal v-model="isModalProjetActive" title="Selectionnez un projet">
    

      <CardBox class="my-2 max-h-70 overflow-y-auto">
        

      
         <ul>
<li  v-for="data in mainStore.listProjet">
   <BaseButton    :icon="mdiPlusBox" :label="data['titre']" color="contrast" rounded-full
                  small @click="getProjetTransaction(data['projetsecretKey'])" />  </li>
  

         </ul>
       

      </CardBox>
     
    </CardBoxModal>
   <CardBoxModal v-model="isModalAgregateurActive" title="Selectionner un agregateur">
     
     <CardBox class="my-2 max-h-70 overflow-y-auto">
        

      
           <ul>
  <li  v-for="data in mainStore.listAgregator">
     <BaseButton    :icon="mdiPlusBox" :label="data['agregateur']" color="contrast" rounded-full
                    small @click="getAgregateurTransaction(data['apiKey'])" />  </li>
  

           </ul>
       

        </CardBox>
     
    </CardBoxModal>


  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiHomeGroup" title="Transactions" main>
      
          <BaseButton :loading="loading" target="_blank" :icon="mdiPlusBox" label="All" color="contrast" rounded-full
              small @click="getTransactionsList()" />  
                <BaseButton :loading="loadingTProjet" target="_blank" :icon="mdiPlusBox" label="Projet" color="contrast" rounded-full
              small @click="isModalProjetActive = true" />   
              <BaseButton :loading="loadingTAgregateur" target="_blank" :icon="mdiPlusBox" label="Agregateur" color="contrast" rounded-full
            small @click="isModalAgregateurActive = true" /> 
             <BaseButton  target="_blank" :icon="mdiPlusBox" label="Depots" color="contrast" rounded-full
            small @click="isModalProjetActive = true" />
              <BaseButton   target="_blank" :icon="mdiPlusBox" label="Retrait" color="contrast" rounded-full
            small @click="isModalProjetActive = true" />
         <BaseButton :icon="mdiCog" icon-w="w-4" icon-h="h-4" color="whiteDark" @click="navigate" small />
       </SectionTitleLineWithButton>
    
      <Loader v-if="loading" />
      <CardBox v-else class="mb-2" has-table>
        <table>
          <thead>
            <tr>
              <th>Motif de la Transaction</th>
              <th>Numero de la Transaction</th>
              <th>Montant de la Transaction</th>
              <th>Etat de la Transaction</th>
              <th>Type de Transaction</th>
              <th>Date d'initialisation de la Transaction</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in itemsPaginated" :key="transaction.id">
              <td data-label="motif">
                {{ transaction.motif }}
              </td>
              <td data-label="numero">
                {{ transaction.numero }}
              </td>
              <td data-label="montant">
                {{ transaction.montant }} XAF
              </td>

              <td data-label="etat">
                {{ transaction.status }}
              </td>
              <td data-label="typeTransaction">
                {{ transaction.typeTransaction }}
              </td>
              <td data-label="dateCreated">
                {{ transaction.dateCreated }}
              </td>
              <td class="before:hidden lg:w-1 whitespace-nowrap">
                <BaseButtons type="justify-start lg:justify-end" no-wrap>
                  <BaseButton color="info" :icon="mdiEye" small @click="getInfoTransaction(transaction)" />

                </BaseButtons>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
          <BaseLevel>
            <BaseButtons>
              <BaseButton v-for="page in pagesList" :key="page" :active="page === currentPage" :label="page + 1"
                :color="page === currentPage ? ' lightDark' : 'whiteDark'" small @click="currentPage = page" />
            </BaseButtons>
            <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
          </BaseLevel>
        </div>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
