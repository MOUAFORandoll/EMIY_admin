<script setup>
import {
  mdiCommentProcessing,
  mdiPlusBox,
} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";

import CardBoxComponentEmpty from "@/components/CardBoxComponentEmpty.vue";

import { mdiEye, mdiTrashCan } from "@mdi/js";
import CardBoxModal from "@/components/CardBoxModal.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
// import NegociationAvatar from "@/components/NegociationAvatar.vue"; 
import io from "socket.io-client";
import { onMounted, computed, ref, nextTick } from "vue";
import { RequestApi } from "@/boot/RequestApi";
let request = new RequestApi();
const isModalActive = ref(false);
const perPage = ref(5);
const currentPage = ref(0);
let listNegociation = ref([]);
let listMessageNegociation = ref([]);
let loading = ref(true);
let loadingMessage = ref(false);
let reloading = ref(true);
let codeNegociationSave = ref("");
const itemsPaginated = computed(() =>
  listNegociation.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() =>
  Math.ceil(listNegociation.value.length / perPage.value)
);

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }
  console.log(pagesList);
  return pagesList;
});

onMounted(async () => {
  await getNegociationList();
});

async function getNegociationList() {
  reloading.value = true;
  const response = await request.getNegociationListAction();
  if (response.status) {
    reloading.value = false;
    loading.value = false;
    listNegociation.value = response.data;
  } else {
    reloading.value = false;
    loading.value = false;
  }
}

async function getNegociationMessageList(codeNegociation) {
  isModalActive.value = true;
  loadingMessage.value = true;
  codeNegociationSave.value = codeNegociation;
  const response = await request.getNegociationMessageListAction(
    codeNegociation
  );
  if (response.status) {
    loadingMessage.value = false;
    listMessageNegociation.value = response.data;

    await nextTick(async () => {
      // Code à exécuter après le rendu du composant ServiceClientView
      let messageD = document.querySelector("#message");
      console.log("------------------", messageD, messageD.scrollHeight);
      messageD.scrollTo(50, 150);
    });
  } else {
    loadingMessage.value = false;
  }
} /* 
const connectToSocket = () => {

  let socket = io(new ApiManage().sockerUrl);

  // Listen for events from the server
  socket.on('service_client', (data) => {
    console.log('Received message:', data);
    if (data['canal'] == codeNegociationSave.value) {
      print('-----------------');
      listMessageNegociation.value.push(
        data['data']
      );
    }
  });
} */
</script>

<template>
  <CardBoxModal v-model="isModalActive" title="Negociation">
    <div class="mb-2 max-h-96">
      <div class="mb-2 mt-5 max-h-96 overflow-y-auto">
        <Loader v-if="loadingMessage" />
        <div class="flex flex-col h-full" ref="messageContainer" id="message" v-else>
          <!-- Messages -->
          <Message :message="message.message" :typemessage="message.emetteurId" :date="message.date + ' ' + message.heure"
            :key="message.date" v-for="message in listMessageNegociation" />
          <!-- Add more messages here -->
        </div>
      </div>

      <!-- Input field and send button -->
    </div>
  </CardBoxModal>

  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiCommentProcessing" title="Negociations" main>
        <BaseButton @click="getNegociationList" :loading="reloading" target="_blank" :icon="mdiPlusBox" label="Actualiser"
          color="contrast" rounded-full small />
      </SectionTitleLineWithButton>

      <Loader v-if="loading" />
      <CardBox class="mb-2" has-table v-else>
        <table>
          <thead>
            <tr>
              <th>Titre Produit</th>
              <th>Prix negocie</th>
              <th>Code de Negociation</th>

              <th>Date de Creation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="communication in itemsPaginated" :key="communication.id">
              <td data-label="titre_produit">
                {{ communication.titre_produit }}
              </td>
              <td data-label="prixNegocie">
                {{ communication.prixNegocie ?? 0 }} FCFA
              </td>
              <td data-label="codeNegociation">
                {{ communication.codeNegociation }}
              </td>

              <td data-label="date">
                {{ communication.date }}
              </td>
              <td data-label="codeNegociation">
                <BaseButton color="info" :icon="mdiEye" small @click="
                  getNegociationMessageList(communication.codeNegociation)
                  " />
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
