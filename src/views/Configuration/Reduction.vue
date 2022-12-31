<template>
    <div class="py-4 container-fluid">
        <div class=" row">
            <div class="col-12">
                <div class="card w-100 mb-4">
                    <div class="card-body">

                    </div>


                </div>

            </div>
        </div>

    </div>
</template>

<style scoped>
#menu {
    background-color: rgb(236, 243, 236);
    margin-top: 10px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px
}

/* article {
      width: 20%;
     padding: 0px;
      margin:0px; 
      border:1px solid rgb(204, 205, 206);
      float: left;
    }
   */

#title {
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid black;
}

.scales {
    padding-right: 5px;
}

input[type=checkbox] {
    position: relative;
    cursor: pointer;
}

input[type=checkbox]:before {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    border: 2px solid #0C6DE4;
    border-radius: 3px;
    background-color: white;
}

input[type=checkbox]:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid rgb(2, 133, 138);
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
}

li:hover {
    cursor: pointer;
}

li:active {
    color: rgb(44, 85, 208);
}

ul {
    list-style-type: "→";
}
</style>
<script>
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';

// import Datepicker from 'vuejs3-datepicker';
import { createToaster } from "@meforma/vue-toaster";
// import ArgonInput from "../../components/ArgonInput.vue";

// import { formatDate } from '../../boot/formatDate';
import { FormatData } from '../../boot/FormatData';
import VueCookies from 'vue-cookies';
// import CustomButton from '../../components/CustomButton.vue';
// import  VueCtkDateTimePicker  from  'vue-ctk-date-time-picker' ; 
// import  'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css' ; 

// import { BIcon } from 'bootstrap-vue' 
export default {
    components: {
        // Datepicker 
        // ArgonInput,
        /* VueCtkDateTi mePicker*/
    },


    name: 'Notification',
    setup() {
        onMounted(async () => {
            //   await getQteSms();
            await getTypeNotification();
        });

        const toast = createToaster();
        const message = ref('');
        let nsms = ref('');
        let nsmsc = ref('');
        const dateChoisit = ref(new Date());

        const senderId = ref('');

        const model = ref({ id: 0, label: 'Aucun' });
        const type = ref({ id: 0, label: 'Aucun' });
        const frequence = ref({ id: 0, label: 'Aucun' });
        const search = ref('');
        const optionsModel = ref([{ id: 0, label: 'Aucun' }]);
        const optionsType = ref([{ id: 0, label: 'Aucun' }]);
        const optionsFrequence = ref([
            { id: 1, label: 'Journaliere' },
            { id: 2, label: 'Hebdomadaire' },
            { id: 3, label: 'Week-end' },
            { id: 4, label: 'Mensuel' },
        ]);
        const heure = ref('08:00');
        const loadingModel = ref(false);
        const loadingType = ref(false);
        const loadingSave = ref(false);
        const loadingFrequence = ref(false);


        const getTypeNotification = async () => {
            loadingModel.value = true;

            const response = await new RequestApi().getTypeNotificationAction();
            console.log(response.data);
            if (response.status) {
                optionsType.value = response.data.map((x) => {
                    return {
                        id: x['id'],
                        label: x.libelle,
                    };
                });
            } else {
                toast.
                    error('Erreur lors du chargement des type de notification', {
                        // override the global option
                        position: "bottom"
                    });
            }
            loadingModel.value = false;
        };
        const addNotification = async () => {
            if (type.value.id == 0) {
                toast.
                    error('Veuillez selectionner un type de notification', {
                        // override the global option
                        position: "bottom"
                    });
            } else {
                if (
                    message.value == '' ||
                    senderId.value == '' ||
                    (type.value.id == 2 ? frequence.value.id == 0 : false)
                ) {
                    toast.
                        error('Veuillez remplir correctement tous les champs', {
                            // override the global option
                            position: "bottom"
                        });
                } else {
                    loadingSave.value = !loadingSave.value;

                    let dataNotification = {
                        typeNotification: '/api/type_notifications/'.concat(
                            type.value.id.toString()
                        ),
                        clientId: parseInt(VueCookies.get('id')),
                        frequence: frequence.value.id,
                        senderId: senderId.value,
                        message: message.value,
                    };

                    console.log(dataNotification);

                    const response = await new RequestApi().makeNotificationAction(
                        dataNotification
                    );
                    console.log('response.status', response.status);
                    if (response.status) {
                        // eslint-disable-next-line require-atomic-updates
                        loadingSave.value = false;

                        toast.success(`Ajout de la notification reussit.`, {
                            // override the global option
                            position: "bottom"
                        });
                        delette();
                    } else {
                        loadingSave.value = !loadingSave.value;
                        toast.
                            error('Une erreur s\'est produite', {
                                // override the global option
                                position: "bottom"
                            });

                    }
                }
            }
        };
        const nmsms = ref(0);
        const verifMessage = () => {
            let ncara = message.value.split('').length;
            nmsms.value = Math.ceil(smsCorrect.value.split('').length / 159);
            nsms.value = Math.ceil(ncara / 159)
                .toString()
                .concat(' Message(s) pour ')
                .concat(ncara.toString())
                .concat(' Caractere(s)');
            smsCorrect.value = new FormatData().verifMessage2(message.value);
            nsmsc.value = Math.ceil(smsCorrect.value.split('').length / 159)
                .toString()
                .concat(' Message(s) pour ')
                .concat(smsCorrect.value.split('').length.toString())
                .concat(' Caractere(s)');
            console.log('****', smsCorrect.value);
        };
        const delette = () => {
            frequence.value = null;
            senderId.value = '';
            message.value = '';
            smsCorrect.value = '';
            type.value = null
        }
        let smsCorrect = ref('');


        const qteSms = ref(0);
        // const getQteSms = async () => {

        //     const response = await new RequestApi().getInfoAccountAction();
        //     if (response.status) {

        //         qteSms.value = response.data[0].solde;
        //     } else {
        //         // $q.notify({
        //         //     message: 'Erreur lors du chargement de votre credit restant',
        //         //     type: 'negative',
        //         // });
        //     }
        // };
        return {
            nmsms,
            qteSms,
            nsms, nsmsc,
            delette,
            smsCorrect,
            verifMessage,
            search,
            optionsModel,
            loadingModel,
            model,
            message,
            loadingSave,
            dateChoisit,
            senderId,
            loadingType,
            optionsType,
            type,
            loadingFrequence,
            frequence,
            optionsFrequence,
            addNotification,
            heure,
        };
    },
}
</script>
