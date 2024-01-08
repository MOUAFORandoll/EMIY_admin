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

import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import { mdiEye, mdiTrashCan } from "@mdi/js";
import CardBoxModal from "@/components/CardBoxModal.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
// import UserAvatar from "@/components/UserAvatar.vue";

import { useMainStore } from "@/stores/main";
import { onMounted, computed, ref } from 'vue';
import { RequestApi } from '@/boot/RequestApi';
let request = new RequestApi();

const isModalActive = ref(false);

const isModalInfoActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);
let listCategories = ref([]);
let loading = ref(true);
let isProduits = ref(false);
let isCategories = ref(false);
let categorySelect = ref({ nom: "" });
let loadingProduits = ref(true);
let produits = ref([]);
let loadingBoutique = ref(true);
let commandes = ref([]);

const mainStore = useMainStore();

const itemsPaginated = computed(() =>
  listCategories.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(listCategories.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

onMounted(async () => {
  await getCategoriesList();
});

async function getCategoriesList() {
  const response = await request.getCategoriesListAction();
  if (response.status) {
    loading.value = false;
    listCategories.value = response.data;
  } else {
    loading.value = false;

  }
}

async function getInfoCategorie(category) {
  categorySelect.value = category
  isModalInfoActive.value = !isModalInfoActive.value;
  const response = await request.getInfoCategorie(categorySelect.value.id);
  if (response.status) {
    loadingBoutique.value = false;
    console.log(response.data);
    return response.data;
  } else {
    loadingBoutique.value = false;
    return [];
  }
}



let libelle = ref('');
let description = ref('');

const newCategory = async () => {
  loadingUpdate.value = true;
  let data = {
    libelle: libelle.value,
    description: description.value,
    adminkeySecret: request.keySecret,
  }
  const response = await request.newCategoryAction(
    data
  );
  if (response.status) {
    await getCategoriesList();
    libelle.value = ''
    description.value = ''
    isModalActive.value = false;
    loadingUpdate.value = false;
  }

  else {

    loadingUpdate.value = false;
  }
};


const stateCategorie = async () => {
  loadingUpdate.value = true;

  const response = await request.stateCategorieAction(
    categorySelect.value.id
  );
  if (response.status) {
    await getCategoriesList();
    loadingUpdate.value = false;

    isModalStateActive.value = false;
  } else {
    loadingUpdate.value = false;
  }
};

let isModalStateActive = ref(false);
let loadingUpdate = ref(false);
function modalConfirm(category) {
  categorySelect.value = category
  isModalStateActive.value = true;
}
</script>

<template>
  <CardBoxModal v-model="isModalInfoActive" v-if="isModalInfoActive" :title="'La Categorie ' + categorySelect.libelle">
    <p><b>Parle de : </b>{{ categorySelect.description }}</p>
    <p v-if="isModalActive"><b>Se trouve a : </b> {{ boutique.localisation.ville }}</p>



    <CardBox class="my-2 max-h-96 overflow-y-auto">
      
    </CardBox>

  </CardBoxModal>
  <CardBoxModal v-model="isModalActive" title="Creer une categorie">
    <div class="mb-2 max-h-96 overflow-y-auto">
      <p>Nouvelle categorie</p>
      <CardBox form @submit.prevent="submit">
        <div class="mb-2 mt-5 max-h-96 overflow-y-auto">
          <FormField label="Title" help="Do not enter the leading zero">
            <FormControl v-model="libelle" type="libelle" />
          </FormField>
          <FormField label="Description" help="The description. Max 255 characters">
            <FormControl type="textarea" v-model="description" />
          </FormField>
          <BaseButton target="_blank" :loading="loadingUpdate" :icon="mdiCogOutline" label="Creer" color='info' small
            @click="newCategory" />

        </div>
      </CardBox>
    </div>


  </CardBoxModal>

  <CardBoxModal v-model="isModalStateActive" v-if="categorySelect != null" title="Please confirm" button="danger">
    <p>
      Vous allez {{ categorySelect.status == true ? "desactiver" : "activer" }} cette
      categorie <b>{{ categorySelect.libelle }}</b>
    </p>

    <BaseButton label="Confirmer" :loading="loadingUpdate" color="info" @click="stateCategorie" />
  </CardBoxModal>

  <LayoutAuthenticated>

    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Categories" main>
        <BaseButton @click="isModalActive = !isModalActive" target="_blank" :icon="mdiReload" label="Ajouter"
          color="contrast" rounded-full small />
      </SectionTitleLineWithButton>


      <Loader v-if="loading" />
        <CardBox v-else class="mb-2" has-table>

        <table>
          <thead>
            <tr>


              <th>Libelle de la Categorie</th>
              <th>Description de la Categorie</th>

              <th>Etat de la Categorie</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="categorie in itemsPaginated" :key="categorie.id">

              <td data-label="libelle">
                {{ categorie.libelle }}
              </td>
              <td data-label="description">
                {{ categorie.description }}
              </td>

              <td data-label="etat">
                {{ categorie.status == true ? "Active" : "Desactive" }}
              </td>

              <!-- <td data-label="Progress" class="lg:w-32">
          <progress class="flex w-2/5 self-center lg:w-full" max="100" :value="categorie.progress">
            {{ boutique.progress }}
          </progress>
        </td> -->

              <td class="before:hidden lg:w-1 whitespace-nowrap">
                <BaseButtons type="justify-start lg:justify-end" no-wrap>
                  <BaseButton color="info" :icon="mdiEye" small @click="getInfoCategorie(categorie)" />
                  <BaseButton color="danger" :icon="mdiTrashCan
                    " small @click="modalConfirm(categorie)" />
                </BaseButtons>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
          <BaseLevel>
            <BaseButtons>
              <BaseButton v-for="page in pagesList" :key="page" :active="page === currentPage" :label="page + 1"
                :color="page === currentPage ? ' lightDark' : 'whiteDark'" small @click=" currentPage = page" />
            </BaseButtons>
            <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
          </BaseLevel>
        </div>
      </CardBox>


    </SectionMain>
  </LayoutAuthenticated>
</template>
