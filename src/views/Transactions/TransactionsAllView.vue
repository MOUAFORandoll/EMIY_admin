<script setup>
import { mdiHomeGroup, mdiReload } from "@mdi/js";
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

import CardBoxTransaction from "@/components/CardBoxTransaction.vue";
import CardBoxClient from "@/components/CardBoxClient.vue";
const isModalActive = ref(false);

const chartData = ref(null);

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData();
};
const isModalDangerActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);
let listTransactions = ref([]);
let loading = ref(true);
let reloading = ref(true);
let loadingUpdate = ref(false);
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

onMounted(async () => {
  fillChartData();
  await getTransactionsList();
});

async function getTransactionsList() {
  reloading.value = true;
  const response = await request.getListAllTransaction();
  if (response.status) {
    reloading.value = false;
    loading.value = false;
    listTransactions.value = response.data;
  } else {
    reloading.value = false;
    loading.value = false;
  }
}
async function getInfoTransaction(transaction) {
  transaction.value = transaction;
  isModalActive.value = true;
}

</script>


<template>
  <CardBoxModal v-model="isModalActive" :title="'La Transaction '">
    <p><b>Parle de : </b> </p>

    <CardBox class="my-2 max-h-96 overflow-y-auto">
      <SectionTitleLineWithButton :icon="mdiChartPie" title="Graphique de ventes Mensuel">
        <BaseButton :icon="mdiReload" color="whiteDark" @click="fillChartData" />
      </SectionTitleLineWithButton>

      <CardBox class="my-2 ">
        <table>
          <thead class="thead">
            <tr>
              <th>Image</th>
              <th>Titre</th>
              <th>Prix</th>
              <th>Description</th>
              <th>Quantite</th>
              <th>Like</th>
              <th>Code du Produit</th>
              <th>Date d'ajout du produit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="produit in produits" :key="produit.id">
              <td class="border-b-0  ">
                <ImageVue :src="produit.images[0].src" />
              </td>
              <td data-label="titre">
                {{ produit.titre }}
              </td>
              <td data-label="prix">{{ produit.prix }} XAF</td>
              <td data-label="description">{{ produit.description }} XAF</td>
              <td data-label="quantite">
                {{ produit.quantite }}
              </td>
              <td data-label="like">
                {{ produit.like }}
              </td>
              <td data-label="codeProduit">
                {{ produit.codeProduit }}
              </td>
              <td data-label="date ">
                {{ produit.date }}
              </td>
              <!-- <td data-label="codeProduit" class="lg:w-32">
          <progress class="flex w-2/5 self-center lg:w-full" max="100" :value="produit.progress">
            {{ produit.progress }}
          </progress>
        </td> -->
            </tr>
          </tbody>
        </table>
      </CardBox>

    </CardBox>
  </CardBoxModal>


  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiHomeGroup" title="Transactions" main>
        <!-- <BaseButton :loading="reloading" target="_blank" :icon="mdiReload" label="Actualise" color="contrast" rounded-full
          small @click="getTransactionsList" /> -->
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
