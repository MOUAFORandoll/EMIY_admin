<script setup >
import {
  mdiMonitorCellphone,
  mdiTableBorder,
  mdiTableOff,
  mdiReload,
} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import CardBox from "@/components/CardBox.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";

import CardBoxComponentEmpty from "@/components/CardBoxComponentEmpty.vue";

import { mdiEye, mdiTrashCan } from "@mdi/js";
import CardBoxModal from "@/components/CardBoxModal.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
// import UserAvatar from "@/components/UserAvatar.vue";

import { useMainStore } from "@/stores/main";
import { onMounted, computed, ref } from 'vue';
import { RequestApi } from '../../boot/RequestApi';

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);
let listCommandes = ref([]);
let loading = ref(true);
let reloading = ref(true);
let loadingUpdate = ref(false);
let isInfo = ref(false);
let isCommandes = ref(false);
let commande = ref({ nom: "MOuafo" });
let produits = ref([]);

const mainStore = useMainStore();

const itemsPaginated = computed(() =>
  listCommandes.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(listCommandes.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

onMounted(async () => {
  await getCommandesList();
});

async function getCommandesList() {
  reloading.value = true;
  const response = await new RequestApi().getCommandesListAction();
  if (response.status) {
    reloading.value = false;
    loading.value = false;
    listCommandes.value = response.data;
  } else {

    reloading.value = false;

    loading.value = false;

  }
}


const getCommandeproduits = async (commandeSeclect) => {
  isModalActive.value = true;
  produits.value = commandeSeclect.produits;
  console.log(produits.value);
};

</script>

<template>
  <CardBoxModal v-model="isModalActive" title="Liste des produits">
    <div class="mb-2 max-h-96 overflow-y-auto">
      <table>
        <thead>
          <tr>

            <th />
            <th>titre</th>
            <th>prix</th>
            <th>quantite</th>
            <th>Boutique</th>

            <th>codeProduit</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr v-for="produit in produits" :key="produit.id">

            <td class="border-b-0 lg:w-6 before:hidden">
              <UserAvatar :username="produit.name" class="w-24 h-24 mx-auto lg:w-6 lg:h-6" />
            </td>
            <td data-label="titre">
              {{ produit.titre }}
            </td>
            <td data-label="prix">
              {{ produit.prix }} XAF
            </td>
            <td data-label="quantite">
              {{ produit.quantite }}
            </td>
            <td data-label="boutique ">
              {{ produit.boutique.titre }}
            </td>
            <td data-label="codeProduit">
              {{ produit.codeProduit }}
            </td>
            <!-- <td data-label="codeProduit" class="lg:w-32">
          <progress class="flex w-2/5 self-center lg:w-full" max="100" :value="produit.progress">
            {{ produit.progress }}
          </progress>
        </td> -->

          </tr>
        </tbody>
      </table>
    </div>
  </CardBoxModal>

  <CardBoxModal v-model="isModalDangerActive" title="Please confirm" button="danger" has-cancel>
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Commandes" main>
        <BaseButton @click="getCommandesList" :loading="reloading" target="_blank" :icon="mdiReload" label="Actualise"
          color="contrast" rounded-full small />
      </SectionTitleLineWithButton>

      <loader v-if="loading" />
      <CardBox class="mb-2" has-table v-else>

        <table>
          <thead>
            <tr>


              <th>Code de la Commande</th>
              <th>Point de livraison</th>
              <th>Nom client</th>
              <th>Phone client</th>
              <th>Nombre de produits</th>
              <th>Montant</th>
              <th>Jour</th>

              <th>Progress</th>
              <th>Action</th>

            </tr>
          </thead>

          <tbody>

            <tr v-for="commande in itemsPaginated" :key="commande.id">


              <td data-label="codeCommande">
                {{ commande.codeCommande }}
              </td>
              <td data-label="point_livraison">
                {{ commande.point_livraison }}
              </td>
              <td data-label="user">
                {{ commande.user_name }}
              </td>
              <td data-label="phone">
                {{ commande.user_phone }}
              </td>
              <td data-label="nombre_produit">
                {{ commande.nombre_produit }}
              </td>
              <td data-label="montant">
                {{ commande.montant }} XAF
              </td>
              <td data-label="date">
                {{ commande.date }}
              </td>
              <td data-label="Progress">
                {{ commande.status }}
              </td>
              <!-- <td data-label="Progress" class="lg:w-32">
          <progress class="flex w-2/5 self-center lg:w-full" max="100" :value="commande.progress">
            {{ commande.progress }}
          </progress>
        </td> -->

              <td class="before:hidden lg:w-1 whitespace-nowrap">
                <BaseButtons type="justify-start lg:justify-end" no-wrap>
                  <BaseButton color="info" :icon="mdiEye" small @click="getCommandeproduits(commande)" />
                  <!-- <BaseButton color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true" /> -->
                </BaseButtons>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
          <BaseLevel>
            <BaseButtons>
              <BaseButton v-for="page in pagesList" :key="page" :active="page === currentPage" :label="page + 1"
                :color="page === currentPage ? 'lightDark' : 'whiteDark'" small @click="currentPage = page" />
            </BaseButtons>
            <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
          </BaseLevel>
        </div>
      </CardBox>


    </SectionMain>
  </LayoutAuthenticated>
</template>
