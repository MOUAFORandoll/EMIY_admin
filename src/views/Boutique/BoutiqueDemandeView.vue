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

import { onMounted, computed, ref } from "vue";
import { RequestApi } from "@/boot/RequestApi";
let request = new RequestApi();

const isModalActive = ref(false);


const perPage = ref(5);

const currentPage = ref(0);
let listBoutiques = ref([]);
let loading = ref(true);
let reloading = ref(true);
let loadingUpdate = ref(false);
let boutique = ref({ nom: "" });

const itemsPaginated = computed(() =>
  listBoutiques.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() =>
  Math.ceil(listBoutiques.value.length / perPage.value)
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
  await getBoutiquesRequestList();
});

async function getBoutiquesRequestList() {
  reloading.value = true;
  const response = await request.getBoutiquesRequestListAction();
  if (response.status) {
    reloading.value = false;
    loading.value = false;
    listBoutiques.value = response.data;
  } else {
    reloading.value = false;
    loading.value = false;
  }
}
function modalConfirm(boutiqueSeclect) {
  boutique.value = boutiqueSeclect;
  isModalActive.value = true;
}
const stateBoutique = async () => {
  loadingUpdate.value = true;

  const response = await request.stateBoutiqueAction(
    boutique.value.codeBoutique
  );
  if (response.status) {
    await getBoutiquesRequestList();
    loadingUpdate.value = false;

    isModalActive.value = false;
  } else {
    loadingUpdate.value = false;
  }
}; 
</script>

<template>
  <CardBoxModal v-model="isModalActive" :title="'La Boutique ' + boutique.titre">
    <p><b>A ete cree par : </b>{{ boutique.user }}</p>
    <p><b>Parle de : </b>{{ boutique.description }}</p>
    <p v-if="isModalActive">
      <b>Se trouve a : </b> {{ boutique.localisation.ville }}
    </p>
    <p>
      Vous allez activer cette
      boutique
    </p>

    <BaseButton label="Confirmer" :loading="loadingUpdate" color="info" @click="stateBoutique" />


  </CardBoxModal>

  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiHomeGroup" title="Demande d'activation des boutiques" main>
        <BaseButton :loading="reloading" target="_blank" :icon="mdiReload" label="Actualise" color="contrast" rounded-full
          small @click="getBoutiquesRequestList" />
      </SectionTitleLineWithButton>

      <Loader v-if="loading" />
      <CardBox v-else class="mb-2" has-table>
        <table>
          <thead>
            <tr>
              <th>Titre de la Boutique</th>
              <th>Code de la Boutique</th>
              <th>Proprietaire de la Boutique</th>

              <th>Ville de la Boutique</th>
              <th>Etat de la Boutique</th>
              <th>Date de creation de la Boutique</th>
              <th>Date de la derniere desactivation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="boutique in itemsPaginated" :key="boutique.id">
              <td data-label="titre">
                {{ boutique.titre }}
              </td>
              <td data-label="codeBoutique">
                {{ boutique.codeBoutique }}
              </td>
              <td data-label="user">
                {{ boutique.user }}
              </td>

              <td data-label="ville">
                {{ boutique.localisation.ville }}
              </td>
              <td data-label="etat">
                {{ "En attente d'Activation" }}
              </td>
              <td data-label="dateCreated">
                {{ boutique.dateCreated }}
              </td>
              <td data-label="dateLastDesactivated">
                {{ boutique.dateLastDesactivated }}
              </td>
              <!-- <td data-label="Progress" class="lg:w-32">
          <progress class="flex w-2/5 self-center lg:w-full" max="100" :value="boutique.progress">
            {{ boutique.progress }}
          </progress>
        </td> -->

              <td class="before:hidden lg:w-1 whitespace-nowrap">
                <BaseButtons type="justify-start lg:justify-end" no-wrap>
                  <BaseButton color="info" :icon="mdiTrashCan" small @click="modalConfirm(boutique)" />

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
