<script setup>
import { mdiHomeGroup, mdiReload, mdiEye, mdiAxis } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";

import CardBoxModal from "@/components/CardBoxModal.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
// import UserAvatar from "@/components/UserAvatar.vue";

import { onMounted, computed, ref } from "vue";
import { RequestApi } from "@/boot/RequestApi";
let request = new RequestApi();

const isModalActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);
let listLivraisons = ref([]);
let loading = ref(true);
let reloading = ref(true);
let loadingUpdate = ref(false);
let livraison = ref({ id: "" });
let keySecretBabana = ref("");

const itemsPaginated = computed(() =>
  listLivraisons.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() =>
  Math.ceil(listLivraisons.value.length / perPage.value)
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
  await getLivraisonsList();
});

async function getLivraisonsList() {
  const response = await request.getLivraisonsInProcess();
  if (response.status) {
    reloading.value = false;
    loading.value = false;
    listLivraisons.value = response.data;
  } else {
    reloading.value = false;
    loading.value = false;
  }
}
async function actualiser() {
  reloading.value = true;

  await getLivraisonsList();
}
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiHomeGroup"
        title="Livraison en cours"
        main
      >
        <BaseButton
          :loading="reloading"
          target="_blank"
          :icon="mdiReload"
          label="Actualise"
          color="contrast"
          rounded-full
          small
          @click="actualiser()"
        />
      </SectionTitleLineWithButton>

      <Loader v-if="loading" />
      <CardBox v-else class="mb-2" has-table>
        <table>
          <thead>
            <tr>
              <th>Titre de la Livraison</th>
              <th>Categorie de la Livraison</th>
              <th>Initiateur de la Livraison</th>

              <th>Valeur de la Livraison</th>

              <th>Service</th>
              <th>Date de creation de la Livraison</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="livraison in itemsPaginated" :key="livraison.id">
              <td data-label="libelle">
                {{ livraison.libelle }}
              </td>
              <td data-label="categorie">
                {{ livraison.categorie }}
              </td>
              <td data-label="initiatedUser">
                {{ livraison.initiatedUser }}
              </td>

              <td data-label="valeur">
                {{ livraison.valeur }}
              </td>
              <td data-label="service">
                {{ livraison.service }}
              </td>
              <td data-label="dateCreated">
                {{ livraison.date }}
              </td>
              <td data-label="Status">
                {{
                  livraison.status == 1
                    ? "En attente de recuperation"
                    : "En attente de livraison"
                }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
          <BaseLevel>
            <BaseButtons>
              <BaseButton
                v-for="page in pagesList"
                :key="page"
                :active="page === currentPage"
                :label="page + 1"
                :color="page === currentPage ? ' lightDark' : 'whiteDark'"
                small
                @click="currentPage = page"
              />
            </BaseButtons>
            <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
          </BaseLevel>
        </div>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
