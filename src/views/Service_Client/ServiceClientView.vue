<script setup>
import {
  mdiMonitorCellphone,
  mdiPhoneSettings,
  mdiTableOff,
  mdiReload, mdiCogOutline, mdiContentCopy, mdiLock, mdiAccountAlertOutline, mdiGamepadCircle, mdiPlusBox, mdiSend
} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import CardBox from "@/components/CardBox.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";

import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import CardBoxComponentEmpty from "@/components/CardBoxComponentEmpty.vue";

import { mdiEye, mdiTrashCan } from "@mdi/js";
import CardBoxModal from "@/components/CardBoxModal.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
// import NotificationAvatar from "@/components/NotificationAvatar.vue";
import moment from 'moment';
import io from 'socket.io-client';
import { useMainStore } from "@/stores/main";
import { onMounted, computed, ref, createApp, nextTick } from 'vue';
import { RequestApi } from '@/boot/RequestApi';
import { ApiManage } from "@/boot/ApiManage";
let request = new RequestApi();
const isModalActive = ref(false);
const perPage = ref(5);
const currentPage = ref(0);
let listCommunication = ref([]);
let listMessageCommunication = ref([]);
let loading = ref(true);
let loadingMessage = ref(false);
let loadingUpdate = ref(false);
let loadingSend = ref(false);
let reloading = ref(true);
let produits = ref([]);
const mainStore = useMainStore();

let message = ref('');
let codeCommunicationSave = ref('');
const itemsPaginated = computed(() =>
  listCommunication.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(listCommunication.value.length / perPage.value));

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
  await getCommunicationList();
});

async function getCommunicationList() {

  const response = await request.getCommunicationListAction();
  if (response.status) {
    reloading.value = false;
    loading.value = false;
    listCommunication.value = response.data;

  } else {
    reloading.value = false;
    loading.value = false;
  }
}

async function getCommunicationMessageList(codeCommunication) {
  isModalActive.value = true;
  loadingMessage.value = true;
  codeCommunicationSave.value = codeCommunication;
  const response = await request.getCommunicationMessageListAction(codeCommunication);
  if (response.status) {
    loadingMessage.value = false;
    listMessageCommunication.value = response.data;
    connectToSocket();
    await nextTick(async () => {
      // Code à exécuter après le rendu du composant ServiceClientView
      let messageD = document.querySelector('#message');
      console.log('------------------', messageD, messageD.scrollHeight);
      messageD.scrollTo(50, 150);
    });

  } else {
    loadingMessage.value = false;

  }
}
const connectToSocket = () => {

  let socket = io(new ApiManage().sockerUrl);

  // Listen for events from the server
  socket.on('service_client', (data) => {
    console.log('Received message:', data);
    if (data['canal'] == codeCommunicationSave.value) {
      print('-----------------');
      listMessageCommunication.value.push(
        data['data']
      );
    }
  });
}
const newCommunication = async () => {
  loadingSend.value = true;
  let data = {
    message: message.value,
    codeCommunication: codeCommunicationSave.value,
    keySecret: request.keySecret,
  }
  const response = await request.newCommunicationAction(
    data
  );
  if (response.status) {
    let dataFinal = {
      message: message.value,
      is_service: 0,
      date: moment().format('YYYY-MM-DD'), heure: moment().format('HH:mm')

    }
    listMessageCommunication.value.push(
      dataFinal
    );
    message.value = ''

    loadingSend.value = false;
  }

  else {

    loadingSend.value = false;
  }
};

</script>


<template>
  <CardBoxModal v-model="isModalActive" title="Communication">
    <div class="mb-2 max-h-96">
      <div class="mb-2 mt-5 max-h-96 overflow-y-auto">
        <Loader v-if="loadingMessage" />
        <div class="flex flex-col h-full" ref="messageContainer" id='message' v-else>
          <!-- Messages -->
          <Message :message="message.message" :typemessage="message.is_service" :date="message.date + ' ' + message.heure"
            :key="message.date" v-for="message in listMessageCommunication" />
          <!-- Add more messages here -->
        </div>
      </div>

      <!-- Input field and send button -->
      <div class="flex  ">
        <input type="text" placeholder="Type your message" v-model="message"
          class="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

        <BaseButton @click="newCommunication" :loading="loadingSend" target="_blank"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg" :icon="mdiSend" label="Send"
          color="contrast" small />
      </div>
    </div>
  </CardBoxModal>


  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiPhoneSettings" title="Service Client" main>


        <BaseButton @click="getCommunicationList" :loading="reloading" target="_blank" :icon="mdiPlusBox" label="Ajouter"
          color="contrast" rounded-full small />
      </SectionTitleLineWithButton>


      <Loader v-if="loading" />
      <CardBox class="mb-2" has-table v-else>

        <table>
          <thead>
            <tr>


              <th>Initiateur</th>
              <th>Code de Communication</th>

              <th>Date de Creation</th>
              <th>Action</th>


            </tr>
          </thead>
          <tbody>
            <tr v-for="communication in itemsPaginated" :key="communication.id">


              <td data-label="Initiateur">
                {{ communication.user_create }}
              </td>
              <td data-label="codeCommunication">
                {{ communication.codeCommunication }}
              </td>



              <td data-label="date">
                {{ communication.date }}
              </td>
              <td data-label="codeCommunication">

                <BaseButton color="info" :icon="mdiEye" small
                  @click="getCommunicationMessageList(communication.codeCommunication)" />
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
