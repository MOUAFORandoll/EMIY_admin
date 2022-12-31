<template>
    <div class="py-4 container-fluid">
        <div class=" row">
            <div class="col-12">
                <div class="card w-100 mb-4">
                    <div class="card-body">
                        <div class="part1">
                            <h4 class="card-title font-weight-bolder dark text-mobile">Notification</h4>
                            <p class="card-text border-bottom text-mobile2  pb-2">Ajouter une nouvelle notification.
                            </p>
                            <!--  <div class="card  bg-primary ">
                                <div class="row ms-1 me-1" role="alert">

                                    <div class="col-xs-12 col-sm-12 col-sm-12 col-lg-3    ">
                                        <div class="text-white">Credit Restant : {{ qteSms }} - {{ nmsms }} X nombre de
                                            contact
                                           </div>

                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-sm-12 col-lg-3    ">
                                        <div class="text-white">Credit A utiliser : {{ nmsms }} X nombre de contact

                                        </div>
                                    </div>


                                    <div class="col-xs-12 col-sm-12 col-sm-12 col-lg-3 ">

                                        <div class="text-white">Nombre Destinataires : {{ nbreDest }}</div>


                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-sm-12 col-lg-3    ">
                                        <div class="text-white"> Date : {{ dateCourante }}</div>

                                    </div>

                                </div>
                            </div> -->

                            <p class='text-mobile2 '>
                                Personnalisez vos notifications en rajoutant les informations de votre contact #nom ,
                                #prenom pour respectivement les noms et prenoms de vos contact



                            </p>

                            <div class="row">

                                <div class="col-lg-6 col-sm-12  form-group  ">

                                    <label for="nomP">Message</label>
                                    <textarea rows='6' :hint="nsms" @input="verifMessage" v-model="message"
                                        class="form-control" placeholder="Message Entre" id="nomP"></textarea>
                                    <label for="nomP">{{ nsms }}</label>
                                </div>

                                <div class="col-lg-6 col-sm-12   form-group  ">
                                    <label for="nomP">Visualiser le Message</label>
                                    <textarea rows='6' readonly v-model="smsCorrect" class="form-control"
                                        placeholder="Message Correct envoye" id="nomP"></textarea>
                                    <label for="nomP">{{ nsmsc }}</label>


                                </div>
                                <div class="col-lg-6 col-sm-12 form-group">

                                    <label for="licence">Type de notification</label>
                                    <!-- <select id="licence" v-model="type" class="form-control form-select">
                                        <option disabled selected default>
                                            Selectionner le type de notification
                                        </option>
                                        <option v-for="option in optionsType" :value="option" :key="option.id">
                                            {{ option.label }}
                                        </option>
                                    </select> -->

                                    <SelectComp v-model="type" :data="optionsType" placeholder=' Selectionner le type de notification
' />


                                </div>
                                <div class="col-lg-6 col-sm-12 form-group" v-if="type.id == 2">

                                    <label for="licence">Frequence d'envoi de vos
                                        notifications</label>
                                    <!-- <select id="licence" v-model="frequence" class="form-control form-select">
                                        <option disabled selected default>
                                            Selectionner la frequence
                                        </option>

                                        <option v-for="option in optionsFrequence" :value="option" :key="option.id">
                                            {{ option.label }}
                                        </option>
                                    </select> -->
                                    <SelectComp v-model="frequence" :data="optionsFrequence" placeholder=' Selectionner la frequence
    ' />
                                </div>

                                <div class="col-lg-6 col-sm-12 form-group">

                                    <label for="nomP">Sender name</label>

                                    <input type="textarea" v-model="senderId" class="form-control"
                                        placeholder="Nom de l'expediteur" id="nomP">


                                </div>

                                <div class="col-lg-6 col-sm-12   form-group">
                                    <label for="licence">Heure d'execution</label>
                                    <VueCtkDateTimePicker label='Select hours' :min-date="dateMin" :no-header='true' :only-time='true' v-model="dateChoisit" />

                                </div>



                                <!-- <div class="col-lg-6 col-sm-12 mb-2 ">
                                    <label for="licence">Date d'envoie</label>
                                    <VueCtkDateTimePicker   only-time=true v-model="dateChoisit" />

                                </div> -->




                            </div>

                            <div class="row ms-1  ">

                                <div class="col-lg-6 col-sm-12 form-group  ">
                                    <div class="row d-flex justify-content-between">

                                        <CustomButton :title='"Ajouter notification"' :loading='loadingSave'
                                            @update:loading="loadingSave = $event" @click='addNotification'
                                            :classe="'btn btn-primary    col-lg-5 col-sm-12 '" />

                                        <!--     <CustomButton :title='"Effacer"' @click='delette'
                                            :classe="'btn btn-danger  col-lg-5 col-sm-12 '" />
 -->


                                    </div>
                                </div>


                                <!-- <div class="col-lg-6 col-sm-12 form-group">

                                    <label for="licence">Licence a Utiliser</label>
                                    <select id="licence" v-model="selectLicence" class="form-control form-select">
                                        <option selected>Choose...</option>

                                        <option v-for="option in optionsLicence" :value="option" :key="option.id">
                                            {{ option.label }}
                                        </option>
                                    </select>

                                </div> -->





                            </div>
                        </div>
                    </div>


                </div>
                <div class="card w-100 mb-10">
                    <div class="card-body">
                        <div class="part1">
                            <h5 class="card-title font-weight-bolder dark text-mobile">Liste des notifications</h5>


                            <div class="col-lg-12 col-sm-12 form-group  trx mt-2">

                                <h6 for="inputState" class="border-bottom text-mobile2 ">Gerer vos notifications</h6>
                                <div class="  d-flex justify-content-center pt-5" v-if="loadingNotif">

                                    <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                                </div>
                                <div v-else>
                                    <div class="part1" v-if="!selectC">

                                        <div class="row  justify-content-between mouse border-bottom ps-1
                                     pt-2 pb-1" :class="this.$store.state.darkMode ? 'mouseA' : 'mouseB'"
                                            v-for="(notif, index)   in listNotif"
                                            v-show="start <= index && index < final" :key="notif.id">

                                            <div class="text-left col">
                                                <div class="mb-0 text-xs ">SenderId:</div>
                                                <h6 class="mb-0 text-sm font-weight-bold text-dark">{{
        notif.senderId
}}
                                                </h6>

                                            </div>
                                            <div class="col-2">
                                                <div class="text-left  col2 ">
                                                    <p class="mb-0 text-xs ">Messages:</p>
                                                    <h6 class="mb-0 text-sm message1 font-weight-bold text-dark">{{
        notif.message
}}</h6>
                                                </div>
                                            </div>
                                            <div class="col mobile">
                                                <div class="text-left">
                                                    <p class="mb-0 text-xs ">Date creation: </p>
                                                    <h6 class="mb-0 text-sm font-weight-bold text-dark">
                                                        {{ notif.date
}} </h6>
                                                </div>
                                            </div>
                                            <div class="col ms-1  ">
                                                <div class="text-left">
                                                    <p class="mb-0 text-xs ">Type de notification :</p>
                                                    <h6 class="mb-0 text-sm font-weight-bold text-dark">
                                                        {{ notif.typeNotification
}} </h6>
                                                </div>
                                            </div>
                                            <div class="col mobile">
                                                <div class="text-left">
                                                    <p class="mb-0 text-xs ">Frequence:</p>
                                                    <h6 class="mb-0 text-sm font-weight-bold text-dark">
                                                        {{ notif.frequence == 1 ? 'Journaliere' : (notif.frequence
        == 2 ?
        'Hebdomadaire' : notif.frequence == 3 ? 'Week-end'
            : notif.frequence == 4 ? 'Mensuel' : "Aucune")
}} </h6>
                                                </div>
                                            </div>
                                            <div class="col mobile">
                                                <div class="text-left">
                                                    <p class="mb-0 text-xs ">Etat:</p>
                                                    <h6 class="mb-0 text-sm font-weight-bold text-dark">{{
        notif.status
}}
                                                    </h6>
                                                </div>
                                            </div>
                                            <div class="col mobile" align="right">
                                                <div class="">
                                                    <p class="mb-0 text-xs "> </p>
                                                    <Popper class="theme" placement="left">
                                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                        <template #content>
                                                            <div class=" " v-if="loadingUC">

                                                                <i class="fa fa-spinner fa-spin"
                                                                    style="  font-size:70px; "></i>

                                                            </div>
                                                            <div class="mouse" v-if="!loadingUC"
                                                                @click="changeStatus(notif.id)">{{
        notif.s1 ? "Desactiver" : "Activer"
}}
                                                            </div>


                                                            <div class="mouse" @click="selectNotification(notif)">
                                                                Modifier</div>

                                                            <!-- <div class="mouse" @click="selectGroupe(groupe)">>
                                                                                                                                                            Ajouter au groupe</div> -->
                                                        </template>
                                                    </Popper>
                                                </div>
                                            </div>
                                        </div>
                                        <!--   <div class="row brx col-lg-1 col-md-4 col-xl-5 col-sm-5"
                                            :class="this.$store.state.darkMode ? 'bg-default' : ''">
                                            <div class="col-lg-1 col-md-3 col-xl-2 col-sm-4 mouseY" @click="prev">Prev
                                            </div>
                                            <div class="col-lg-8 col-md-6 col-xl-4 col-sm-4 mouseY">
                                                <select id="select_id" @change="changeVal($event)"
                                                    class="form-control form-select">

                                                    <option value=10>
                                                        10
                                                    </option>
                                                    <option value=20>
                                                        20
                                                    </option>
                                                    <option value=40>
                                                        40
                                                    </option>
                                                    <option value=100>
                                                        100
                                                    </option>
                                                    <option value=x>
                                                        Tous
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col-lg-1 col-md-3 col-xl-2 col-sm-4 mouseY" @click="next">Next
                                            </div>
                                        </div> -->
                                        <div class='card-footer' v-if='(listNotif.length > 10)' align='right'>
                                            <div class="row   col-lg-1 col-md-4 col-xl-5 col-sm-5"
                                                :class="this.$store.state.darkMode ? 'bg-default' : ''">
                                                <div class="  mouseY">
                                                    <i @click="next" v-if='(final < listNotif.length)'
                                                        class="mouseY 	fa fa-angle-right"
                                                        style="font-size:36px; float:right"></i>
                                                    <select id="select_id" @change="changeVal($event)"
                                                        style=' float:right'
                                                        class="mx-2 w-auto form-control form-select">

                                                        <option value=10>
                                                            10
                                                        </option>
                                                        <option value=20>
                                                            20
                                                        </option>
                                                        <option value=40>
                                                            40
                                                        </option>
                                                        <option value=100>
                                                            100
                                                        </option>
                                                        <option value=x>
                                                            Tous
                                                        </option>
                                                    </select>
                                                    <i class="mouseY	fa fa-angle-left" @click="prev"
                                                        style="font-size:36px; "></i>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="part1" v-else>
                                        <div class='row d-flex justify-content-between border-bottom'>

                                            <div class='col'>
                                                <h4 class="card-title font-weight-bolder dark text-mobile">Modifier</h4>
                                                <p class="card-text  "> </p>
                                            </div>
                                            <div class='col text-primary' align='right'>
                                                <p highlight @click="selectC = false; " class="align-baseline mouse">
                                                    Retour
                                                </p>
                                            </div>


                                        </div>


                                        <div class="row">




                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12    form-group  ">
                                                <label for="nomP">Message</label>
                                                <textarea rows='6' :hint="nsms" @input="verifMessage2"
                                                    v-model="selctmessage" class="form-control"
                                                    placeholder="Message Entre" id="nomP"></textarea>
                                                <label for="nomP">{{ nsms }}</label>


                                            </div>
                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12    form-group  ">
                                                <label for="nomP">Visualiser le Message</label>
                                                <textarea rows='6' readonly v-model="selctmessageC" class="form-control"
                                                    placeholder="Message Correct envoye" id="nomP"></textarea>
                                                <label for="nomP">{{ nsmsc }}</label>


                                            </div>

                                            <div class="col-lg-6 col-sm-12 form-group">

                                                <label for="nomP">Sender name</label>

                                                <input type="textarea" v-model="selectSenderId" class="form-control"
                                                    placeholder="Nom de l'expediteur" id="nomP">


                                            </div>
                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 ">
                                                <label for="licence">Valider</label>
                                                <div>
                                                    <CustomButton :title='" Mettre à jour"' :loading='loadingUN'
                                                        @update:loading="loadingUN = $event" @click='update'
                                                        :classe="'btn btn-primary'" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--     <table class="table scroll ">
                                        <tbody>
                                            <tr v-for="notif in listNotif" :key="notif.id" class="mouse"
                                                @click="message = notif.message; contactSelect = notif.contact ">

                                                <td>
                                                    <div class="text-left ms-1">
                                                        <p class="mb-0 text-xs ">SenderId:</p>
                                                        <h6 class="mb-0 text-sm font-weight-bold text-dark">{{
                                                                notif.senderId
                                                        }}
                                                        </h6>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="text-left  col2 ">
                                                        <p class="mb-0 text-xs ">Messages:</p>
                                                        <h6 class="mb-0 text-sm message font-weight-bold text-dark">{{
                                                                notif.message
                                                        }}</h6>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div class="text-left">
                                                        <p class="mb-0 text-xs ">date:</p>
                                                        <h6 class="mb-0 text-sm font-weight-bold text-dark">
                                                            {{ notif.date
                                                            }} </h6>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="text-left">
                                                        <p class="mb-0 text-xs ">type :</p>
                                                        <h6 class="mb-0 text-sm font-weight-bold text-dark">
                                                            {{ notif.typeNotification
                                                            }} </h6>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="text-left">
                                                        <p class="mb-0 text-xs ">frequence:</p>
                                                        <h6 class="mb-0 text-sm font-weight-bold text-dark">
                                                            {{ notif.frequence == 1 ? 'Journaliere' : (notif.frequence
                                                                    == 2 ?
                                                                    'Hebdomadaire' : notif.frequence == 3 ? 'Week-end'
                                                                        : notif.frequence == 4 ? 'Mensuel' : "Aucune")
                                                            }} </h6>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="text-left">
                                                        <p class="mb-0 text-xs ">Etat:</p>
                                                        <h6 class="mb-0 text-sm font-weight-bold text-dark">{{
                                                                notif.status
                                                        }}
                                                        </h6>
                                                    </div>
                                                </td>
                                                <td align='right'>

                                                    <div class="">
                                                        <p class="mb-0 text-xs ">Action:</p>
                                                        <Popper class="theme" placement="left">
                                                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                            <template #content>
                                                                <div class=" " v-if="loadingUC">

                                                                    <i class="fa fa-spinner fa-spin"
                                                                        style="  font-size:70px; "></i>

                                                                </div>
                                                                <div class="mouse" v-if="!loadingUC"
                                                                    @click="changeStatus(notif.id)">{{
                                                                            notif.s1 ? "Desactiver" : "Activer"
                                                                    }}
                                                                </div>


                                                                <div class="mouse" v-if="!loadingUC">Modifier</div>

                                                                
                                                            </template>
                                                        </Popper>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> -->
                                </div>

                            </div>

                            <!-- <div class="col-lg-12 col-sm-12 form-group  mt-5">

                <h6 for="inputState" class="border-bottom">Hier</h6>
                <div class="row justify-content-between ">
                  <div class="d-flex px-2 py-1 col-lg-10 col-sm-6">

                    <div>
                      <img src="../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1" />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm font-weight-bolder">Recharge</h6>
                      <p class="text-xs text-secondary mb-0">14 juin 2022 vers 13h23min</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-6 ">
                    XAF 15000
                  </div>
                </div>

              </div> -->


                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
.mouse:hover {
    cursor: pointer;
}

.message1 {
    /* border: 1px solid black; */
    width: 120px;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;

    text-overflow: ellipsis;
}
</style>
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
import SelectComp from '../../components/SelectComp.vue';

// import Datepicker from 'vuejs3-datepicker';
import { createToaster } from "@meforma/vue-toaster";
// import ArgonInput from "../../components/ArgonInput.vue";
import Popper from "vue3-popper";

// import { formatDate } from '../../boot/formatDate';
import { FormatData } from '../../boot/FormatData';
import VueCookies from 'vue-cookies';
import CustomButton from '../../components/CustomButton.vue';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

// import { BIcon } from 'bootstrap-vue' 
export default {
    components: {
        // Datepicker 
        // ArgonInput,
        SelectComp,
        CustomButton, Popper, VueCtkDateTimePicker
    },


    name: 'Notification', data() {
        return {
            start: 0, final: 10,
            moyenne: 10,

        }
    },
    methods: {
        next() {
            console.log(this.listNotif.length)
            if (this.final + this.moyenne < this.listNotif.length) {
                this.start = this.start + this.moyenne;
            }
            this.final = this.final + this.moyenne;
            console.log(this.start, this.final)
        },
        prev() {
            console.log(this.start, this.final)
            if (this.start >= this.moyenne) {

                this.start = this.start - this.moyenne;
                this.final = this.final - this.moyenne;

            }
        },
        changeVal(event) {
            console.log(event.target.value)
            if (this.moyenne != event.target.value) {
                if ('x' == event.target.value) {
                    this.moyenne = parseInt(this.listNotif.length)
                    this.start = 0;
                } else {
                    this.moyenne = parseInt(event.target.value)
                    this.start = 0;
                    // this.final = this.final + this.moyenne;

                } this.final = this.moyenne;
            }

            console.log(this.final)
        }
    },
    setup() {
        onMounted(async () => {
            //   await getQteSms();
            await getListNotif();
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
            if (senderId.value.length > 12) {
                toast.error(`SenderId trop long, utilisez au maximum 12 caracteres.`, {
                    // override the global option
                    position: "bottom"
                });
                return false;
            }

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
                        executionHours: dateChoisit.value
                    };

                    console.log(dataNotification);

                    const response = await new RequestApi().makeNotificationAction(
                        dataNotification
                    );
                    // type.value = { id: 0, label: 'Aucun' };

                    console.log('response.status', response.status);
                    if (response.status) {
                        await getListNotif();
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
            smsCorrect.value = new FormatData().correctVerifMessage(message.value);
            nsmsc.value = Math.ceil(smsCorrect.value.split('').length / 159)
                .toString()
                .concat(' Message(s) pour ')
                .concat(smsCorrect.value.split('').length.toString())
                .concat(' Caractere(s)');
            console.log('****', smsCorrect.value);
        };
        const delette = () => {
            frequence.value = { id: 0, label: 'Aucun' };
            senderId.value = '';
            message.value = '';
            smsCorrect.value = '';
            // type.value = { id: 0, label: 'Aucun' }
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
        let listNotif = ref([]);
        let loadingNotif = ref(true);
        async function getListNotif() {


            const response = await new RequestApi().getListNotif();


            if (response.status) {


                listNotif.value = response.data
                loadingNotif.value = false;

            }
            else {
                loadingNotif.value = false

                toast.error(`UNe erreur est survenue.`, {
                    // override the global option
                    position: "bottom"
                });
            }


        }
        let loadingUC = ref(false);
        async function changeStatus(id) {




            let data = {
                id: id,


            }
            loadingUC.value = !loadingUC.value
            const response = await new RequestApi().updateNotifStatus(data);
            if (response.status) {
                await getListNotif(); toast.success(`Mise a jour effectuee avec success`, {
                    // override the global option
                    position: "bottom"
                });

                loadingUC.value = false

            }
            else if (response.aff == true) {
                toast.error(`Une erreur est survenue`, {
                    // override the global option
                    position: "bottom"
                });

                loadingUC.value = false

            }
        }
        let selctmessage = ref('')
        let selctmessageC = ref('')
        let selectSenderId = ref('')
        let idNotif = ref('')
        let selectC = ref(false);
        const verifMessage2 = () => {
            let ncara = message.value.split('').length;
            nmsms.value = Math.ceil(selctmessageC.value.split('').length / 159);
            nsms.value = Math.ceil(ncara / 159)
                .toString()
                .concat(' Message(s) pour ')
                .concat(ncara.toString())
                .concat(' Caractere(s)');
            selctmessageC.value = new FormatData().verifMessage(selctmessage.value);
            nsmsc.value = Math.ceil(selctmessageC.value.split('').length / 159)
                .toString()
                .concat(' Message(s) pour ')
                .concat(selctmessageC.value.split('').length.toString())
                .concat(' Caractere(s)');
            console.log('****', selctmessageC.value);
        };
        const selectNotification = (notification) => {
            console.log(notification)
            idNotif.
                value = notification.id
            selctmessage.
                value = notification.message
            selectSenderId.
                value = notification.senderId,

                verifMessage2()
            selectC.value = true;
        }
        let loadingUN = ref(false)
        async function update() {
            if (selectSenderId.value.length > 12) {
                toast.error(`SenderId trop long, utilisez au maximum 12 caracteres.`, {
                    // override the global option
                    position: "bottom"
                });
                return false;
            }



            let data = {
                id: idNotif.value,
                message: selctmessageC.
                    value,
                senderId: selectSenderId.
                    value,
                // executionHours: dateChoisit.value
            }
            loadingUN.value = !loadingUN.value
            const response = await new RequestApi().updateNotification(data);
            if (response.status) {
                await getListNotif(); toast.success(`Mise a jour effectuee avec success`, {
                    // override the global option
                    position: "bottom"
                });

                loadingUN.value = false
                selectC.value = false;
            }
            else if (response.aff == true) {
                toast.error(`Une erreur est survenue`, {
                    // override the global option
                    position: "bottom"
                });

                loadingUN.value = false

            }
        }
        const date = new Date();

        date.setDate(date.getDate() - 1);
        const dateMin = ref(date)
            ;
        return {
            dateMin,
            selectNotification, selctmessage, update, verifMessage2, selectSenderId, loadingUN,
            nmsms, listNotif, loadingNotif, changeStatus, loadingUC, selectC, selctmessageC,
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
