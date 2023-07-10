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
import { RequestApi } from '@/boot/RequestApi';

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);
let listBoutiques = ref([]);
let loading = ref(true);
let isProduits = ref(false);
let isBoutiques = ref(false);
let boutique = ref({ nom: "" });
let loadingProduits = ref(true);
let produits = ref([]);
let loadingCommandes = ref(true);
let commandes = ref([]);

const mainStore = useMainStore();

const itemsPaginated = computed(() =>
  listBoutiques.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(listBoutiques.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

onMounted(async () => {
  await getBoutiquesList();
});

async function getBoutiquesList() {
  const response = await request.getBoutiquesListAction();
  if (response.status) {
    loading.value = false;
    listBoutiques.value = response.data;
  } else {
    loading.value = false;

  }
}
async function getListProduits(codeBoutique) {
  const response = await request.geBoutiqueProduitAction(codeBoutique);
  if (response.status) {
    loadingProduits.value = false;
    return response.data;
  } else {
    loadingProduits.value = false;
    return [];
  }
}

async function getListCommandes(codeBoutique) {
  const response = await request.geBoutiqueCommandesAction(codeBoutique);
  if (response.status) {
    loadingCommandes.value = false;
    console.log(response.data);
    return response.data;
  } else {
    loadingCommandes.value = false;
    return [];
  }
}


function setItems(isProd) {
  if (isProd) {
    isProduits.value = true;
  }
  else {
    isProduits.value = false;
  }

}




const getInformations = async (boutiqueSeclect) => {
  isModalActive.value = true;
  boutique.value = boutiqueSeclect;
  produits.value = [];
  const responseProduits = await getListProduits(boutiqueSeclect.codeBoutique);

  produits.value = responseProduits;

  const responseCommandes = await getListCommandes(boutiqueSeclect.codeBoutique);
  console.log('---------------responseCommandes');
  console.log(responseCommandes);

  commandes.value = responseCommandes;

};
const modalStyle = {
  width: "95%",
  height: "95%",
};

</script>

<template>
  <CardBoxModal v-model="isModalActive" :title="'La Boutique ' + boutique.titre">
    <p><b>Parle de : </b>{{ boutique.description }}</p>
    <p v-if="isModalActive"><b>Se trouve a : </b> {{ boutique.localisation.ville }}</p>


    <div class="row    flex  justify-center  ">

      <BaseButton @click="setItems(true)" target="_blank" :icon="mdiReload" label="Produit"
        :color="!isProduits ? 'text-orange-800' : 'contrast'" rounded-full small />
      <BaseButton @click="setItems(false)" target="_blank" :icon="mdiReload" label="Commandes" class="ms-2"
        :color="isProduits ? 'text-orange-800' : 'contrast'" rounded-full small />

    </div>
    <CardBox v-if="isProduits" class="my-2 max-h-96 overflow-y-auto">
      <table>
        <thead>
          <tr>
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


            <td data-label="titre">
              {{ produit.titre }}
            </td>
            <td data-label="prix">
              {{ produit.prix }} XAF
            </td>
            <td data-label="description">
              {{ produit.description }} XAF
            </td>
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
    <CardBox v-else class="my-2 max-h-96 overflow-y-auto">
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

          </tr>
        </thead>
        <tbody>
          <tr v-for="commande in commandes" :key="commande.id">


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
            <!-- <td data-label="codeProduit" class="lg:w-32">
          <progress class="flex w-2/5 self-center lg:w-full" max="100" :value="produit.progress">
            {{ produit.progress }}
          </progress>
        </td> -->

          </tr>
        </tbody>
      </table>
    </CardBox>
  </CardBoxModal>

  <CardBoxModal v-model="isModalDangerActive" title="Please confirm" button="danger" has-cancel>
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <LayoutAuthenticated>

    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Boutiques" main>
        <BaseButton @click="getBoutiquesList" target="_blank" :icon="mdiReload" label="Actualise" color="contrast"
          rounded-full small />
      </SectionTitleLineWithButton>


      <CardBox class="mb-2" has-table>

        <table>
          <thead>
            <tr>


              <th>Titre de la Boutique</th>
              <th>Code de la Boutique</th>
              <th>Proprietaire de la Boutique</th>

              <th>Ville de la Boutique</th>
              <th>Etat de la Boutique</th>
              <th>Date de creation de la Boutique</th>

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
                {{ boutique.status == true ? "Active" : "Suspendue" }}
              </td>
              <td data-label="dateCreated">
                {{ boutique.dateCreated }}
              </td>
              <!-- <td data-label="Progress" class="lg:w-32">
          <progress class="flex w-2/5 self-center lg:w-full" max="100" :value="boutique.progress">
            {{ boutique.progress }}
          </progress>
        </td> -->

              <td class="before:hidden lg:w-1 whitespace-nowrap">
                <BaseButtons type="justify-start lg:justify-end" no-wrap>
                  <BaseButton color="info" :icon="mdiEye" small @click="getInformations(boutique)" />
                  <BaseButton color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true" />
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
