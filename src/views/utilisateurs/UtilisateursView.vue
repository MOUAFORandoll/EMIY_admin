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
let listUsers = ref([]);
let loading = ref(true);
let loadingUpdate = ref(false);
let reloading = ref(true);
let produits = ref([]);

const mainStore = useMainStore();

const itemsPaginated = computed(() =>
  listUsers.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(listUsers.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

onMounted(async () => {
  await getUsersList();
});

async function getUsersList() {
  reloading.value = true;
  const response = await new RequestApi().getUsersListAction();
  if (response.status) {
    reloading.value = false;
    loading.value = false;
    listUsers.value = response.data;
  } else {
    reloading.value = false;
    loading.value = false;

  }
}



</script>

<template>
  <CardBoxModal v-model="isModalActive" title="Liste des Utilisateurs">
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
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Utilisateurs" main>
        <BaseButton @click="getUsersList" :loading="reloading" target="_blank" :icon="mdiReload" label="Actualise"
          color="contrast" rounded-full small />
      </SectionTitleLineWithButton>


      <loader v-if="loading" />
      <CardBox class="mb-2" has-table v-else>

        <table>
          <thead>
            <tr>


              <th>Nom</th>
              <th>Prenom</th>
              <th>Email</th>
              <th>Phone </th>
              <th>Solde</th>
              <th>Ville</th>
              <th>Status du Compte</th>
              <th>Type Utilisateur</th>
              <th>Date de Creation</th>
              <th>Action</th>


            </tr>
          </thead>
          <tbody>
            <tr v-for="user in itemsPaginated" :key="user.id">


              <td data-label="nom">
                {{ user.nom }}
              </td>
              <td data-label="prenom">
                {{ user.prenom }}
              </td>
              <td data-label="email">
                {{ user.email }}
              </td>
              <td data-label="phone">
                {{ user.phone }}
              </td>
              <td data-label="solde">
                {{ user.solde }} XAF
              </td>
              <td data-label="Ville">
                {{ user.localisation.ville }}
              </td>
              <td data-label="status">
                {{ user.status }}
              </td>
              <td data-label="type_user">
                {{ user.type_user }}
              </td>
              <td data-label="date">
                {{ user.date }}
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
