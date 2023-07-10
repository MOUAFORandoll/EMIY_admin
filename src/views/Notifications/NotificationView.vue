<script setup>
import {
  mdiMonitorCellphone,
  mdiBell,
  mdiTableOff,
  mdiReload, mdiCogOutline, mdiContentCopy, mdiLock, mdiAccountAlertOutline, mdiGamepadCircle
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

import { useMainStore } from "@/stores/main";
import { onMounted, computed, ref } from 'vue';
import { RequestApi } from '@/boot/RequestApi';

const isModalActive = ref(false);
const perPage = ref(5);
const currentPage = ref(0);
let listNotifications = ref([]);
let loading = ref(true);
let loadingUpdate = ref(false);
let reloading = ref(true);
let produits = ref([]);
const mainStore = useMainStore();

const itemsPaginated = computed(() =>
  listNotifications.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(listNotifications.value.length / perPage.value));

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
  await getNotificationList();
});

async function getNotificationList() {
  const response = await request.getNotificationsListAction();
  if (response.status) {
    reloading.value = false;
    loading.value = false;
    listNotifications.value = response.data;

  } else {
    reloading.value = false;
    loading.value = false;
  }
}


let title = ref('');
let description = ref('');

const newNotification = async () => {
  loadingUpdate.value = true;
  let data = {
    title: title.value,
    description: description.value,
    adminkeySecret: request.keySecret,
  }
  const response = await request.newNotificationAction(
    data
  );
  if (response.status) {
    await getNotificationList();
    title.value = ''
    description.value = ''
    isModalActive.value = false;
    loadingUpdate.value = false;
  }

  else {

    loadingUpdate.value = false;
  }
};

</script>


<template>
  <CardBoxModal v-model="isModalActive" title="Emettre une notification">
    <div class="mb-2 max-h-96 overflow-y-auto">
      <p>Emettre une notification</p>
      <CardBox form @submit.prevent="submit">
        <div class="mb-2 mt-5 max-h-96 overflow-y-auto">
          <FormField label="Title" help="Do not enter the leading zero">
            <FormControl v-model="title" type="title" />
          </FormField>
          <FormField label="Description" help="The description. Max 255 characters">
            <FormControl type="textarea" v-model="description" />
          </FormField>
          <BaseButton target="_blank" :loading="loadingUpdate" :icon="mdiCogOutline" label="Envoyer" color='info' small
            @click="newNotification" />

        </div>
      </CardBox>
    </div>


  </CardBoxModal>

  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiBell" title="Notifications" main>


        <BaseButton @click="isModalActive = true" :loading="reloading" target="_blank" :icon="mdiReload" label="Ajouter"
          color="contrast" rounded-full small />
      </SectionTitleLineWithButton>


      <Loader v-if="loading" />
      <CardBox class="mb-2" has-table v-else>

        <table>
          <thead>
            <tr>


              <th>Initiateur</th>
              <th>title</th>
              <th>description</th>

              <th>Date de Creation</th>


            </tr>
          </thead>
          <tbody>
            <tr v-for="notification in itemsPaginated" :key="notification.id">


              <td data-label="Initiateur">
                {{ notification.user_create }}
              </td>
              <td data-label="title">
                {{ notification.title }}
              </td>

              <td data-label="description">
                {{ notification.description }}
              </td>

              <td data-label="date">
                {{ notification.date }}
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
