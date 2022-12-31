<template>
    <div class="py-4 container-fluid">
        <div class=" row">
            <div class="col-12">
                <div class="card w-100 mb-4">
                    <div class="card-body">

                        <div class=" border-bottom">
                            <div class="  mb-2 row justify-content-between ">
                                <div class="col-lg-4 col-sm-12">
                                    <h4 class="card-title font-weight-bolder dark text-mobile">Calendrier</h4>
                                    <p class="card-text  ">{{ !showModalCalendar ? "Gestion de vos calendrier" :
                                            `Remplir les
                                    champs suivants`}} </p>
                                </div>
                                <div class="col-lg-4 col-sm-12" align="right">
                                    <p @click='showModalCalendar = !showModalCalendar' class=" mouse text-info ">
                                        {{ !showModalCalendar ? "Nouveau" : "Retour" }}</p>

                                </div>
                            </div>
                        </div>

                        <div class="row mt-3 col-12 " v-if='!showModalCalendar'>
                            <div class="  d-flex justify-content-center pt-5" v-if="loadingC">

                                <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                            </div>
                            <div class="col-lg-3 col-xl-2 col-md-4 col-sm-12" v-if="!loadingC">

                                <datepicker :highlighted="state.highlighted" :inline="true" @selected="newEvent"
                                    v-model="dateChoisit">
                                </datepicker>
                            </div>
                            <div class="col-lg-9 col-xl-10 padd col-md-8 col-sm-12 " v-if="!loadingC">
                                <div class="row">
                                    <!-- <div class="  d-flex justify-content-center pb-3" v-if="loading">

                                        <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                                    </div> -->

                                    <div class="table-responsive mt-1 card">
                                        <div class="card-body">
                                            <div class="part1" v-if="!selectC">
                                                <h4
                                                    class="card-title font-weight-bolder dark text-mobile border-bottom">
                                                    Liste des
                                                    calendriers
                                                </h4>
                                                <!-- <hr/> -->

                                                <div class="row pb-1 border-bottom " v-if="message.length != 0">
                                                    <div class="col-12  ms-1">

                                                        <p class=" ">{{ message }} </p>

                                                    </div>


                                                </div>
                                                <div class="  d-flex justify-content-center pb-3"
                                                    v-if="listCalendar.length == 0">

                                                    Vide

                                                </div>
                                                <div class="row mouse border-bottom ps-1
                                     pt-2 pb-2" :class="this.$store.state.darkMode ? 'mouseA' : 'mouseB'"
                                                    v-for="calendar in listCalendar" @click='message = calendar.message'
                                                    :key="calendar.message">

                                                    <!-- <div class="text-left col">
                                                        <div class="mb-0 text-xs ">SenderId:</div>
                                                        <h6 class="mb-0 text-sm font-weight-bold text-dark">{{
                                                                calendar.senderId
                                                        }}
                                                        </h6>

                                                    </div> -->
                                                    <div class="col-6">
                                                        <div class="text-left  col2 ">
                                                            <p class="mb-0 text-xs ">Messages:</p>
                                                            <h6
                                                                class="mb-0 text-sm message1 font-weight-bold text-dark">
                                                                {{
                                                                        calendar.message
                                                                }}</h6>
                                                        </div>
                                                    </div>
                                                    <div class="col ms-3">
                                                        <div class="text-left">
                                                            <p class="mb-0 text-xs ">Date programme:</p>
                                                            <h6 class="mb-0 text-xs   text-dark" style="''">
                                                                {{
                                                                        calendar.dateProgramme
                                                                }} </h6>
                                                        </div>
                                                    </div>
                                                    <div class="col as">
                                                        <div class="text-left">
                                                            <p class="mb-0 text-xs ">Date creation:</p>
                                                            <h6 class="mb-0 text-xs   text-dark">
                                                                {{
                                                                        calendar.dateCreate
                                                                }}</h6>
                                                        </div>
                                                    </div>

                                                    <div class="col as">
                                                        <div class="text-left">
                                                            <p class="mb-0 text-xs ">Etat:</p>
                                                            <h6 class="mb-0 text-xs   text-dark">{{
                                                                    calendar.status
                                                            }}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div class="col" align='right'>
                                                        <div class="">
                                                            <p class="mb-0 text-xs "> </p>
                                                            <Popper class="theme" placement="left">
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <template #content>
                                                                    <div class="mouse"
                                                                        @click="selectCalendar(calendar);">
                                                                        Modifier</div>
                                                                    <!-- <div class="mouse" @click="selectGroupe(groupe)">>
                                                                                                                            Ajouter au groupe</div> -->
                                                                </template>
                                                            </Popper>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="part1" v-else>
                                                <div class='row d-flex justify-content-between border-bottom'>

                                                    <div class='col'>
                                                        <h4 class="card-title font-weight-bolder dark text-mobile">
                                                            Modifier</h4>
                                                        <p class="card-text  "> </p>
                                                    </div>
                                                    <div class='col text-primary' align='right'>
                                                        <p highlight @click="selectC = false; "
                                                            class="align-baseline mouse">
                                                            Retour
                                                        </p>
                                                    </div>


                                                </div>


                                                <div class="row">




                                                    <div
                                                        class="col-lg-12 col-xl-12 col-md-12 col-sm-12    form-group  ">
                                                        <label for="nomP">Message</label>
                                                        <textarea rows='6' :hint="nsms" @input="verifMessage2"
                                                            v-model="selctmessage" class="form-control"
                                                            placeholder="Message Entre" id="nomP"></textarea>
                                                        <label for="nomP">{{ nsms }}</label>


                                                    </div>
                                                    <div
                                                        class="col-lg-12 col-xl-12 col-md-12 col-sm-12    form-group  ">
                                                        <label for="nomP">Visualiser le Message</label>
                                                        <textarea rows='6' readonly v-model="smsCorrect"
                                                            class="form-control" placeholder="Message Correct envoye"
                                                            id="nomP"></textarea>
                                                        <label for="nomP">{{ nsmsc }}</label>


                                                    </div>

                                                    <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 ">

                                                        <label for="licence">Date programme</label>
                                                        <VueCtkDateTimePicker :min-date="dateMin"
                                                            v-model="selectDate" />

                                                    </div>

                                                </div>

                                                <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-4 ">

                                                    <div>
                                                        <CustomButton :title='" Mettre à jour"' :loading='loadingUC'
                                                            @update:loading="loadingUC = $event" @click='update'
                                                            :classe="'btn btn-primary'" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <div class="row col-12 mt-3" v-else>

                            <ul class="nav nav-tabs  " id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" @click='selected = 0'
                                        data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab"
                                        aria-controls="home" aria-selected="true">SINGLE USER</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" @click='selected = 1' data-bs-toggle="tab"
                                        data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                        aria-selected="false">CALENDRIER
                                        DE GROUPE</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" @click='selected = 2' data-bs-toggle="tab"
                                        data-bs-target="#contact" type="button" role="tab" aria-controls="contact"
                                        aria-selected="false">GENERAL</button>
                                </li>
                            </ul>

                            <div class="tab-content d-flex  " id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel"
                                    aria-labelledby="home-tab">
                                    <div class="container">
                                        <div class='row'>

                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12  form-group">
                                                <label for="inputCity">Contact</label>
                                                <!-- <select id="inputState" v-model='contact'
                                                    class="form-control form-select">
                                                    <option disabled selected default>
                                                        Selectionner le contact
                                                    </option>


                                                    <option v-for="user in optionsContact" :value="user.phone"
                                                        :key="user.id"> {{ user.nom }}
                                                    </option>
                                                </select> -->

                                                <SelectComp v-model="contact" type="1" :data="optionsContact"
                                                    placeholder='  Selectionner le contact' />

                                            </div>
                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12  form-group">
                                                <label for="nomP">Nom de l'expediteur</label>
                                                <input type="textarea" v-model="senderId" class="form-control"
                                                    placeholder="Nom de l'expediteur" id="nomP">
                                            </div>
                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12  form-group">

                                                <label for="licence">Pays</label>
                                                <!-- <select id="licence" v-model="pays" class="form-control form-select">

                                                    <option disabled selected default>
                                                        Selectionner le pays
                                                    </option>
                                                    <option v-for="option in optionsPays" :value="option"
                                                        :key="option.id">
                                                        {{ option.label }}
                                                    </option>
                                                </select> -->

                                                <SelectComp v-model="pays" :data="optionsPays"
                                                    placeholder='Selectionner le pays' />

                                            </div>



                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 ">
                                                <label for="licence">Date d'envoie</label>
                                                <VueCtkDateTimePicker :min-date="dateMin" v-model="dateChoisit" />

                                            </div>
                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12    form-group  ">
                                                <label for="nomP">Message</label>
                                                <textarea rows='6' :hint="nsms" @input="verifMessage" v-model="sms"
                                                    class="form-control" placeholder="Message Entre"
                                                    id="nomP"></textarea>
                                                <label for="nomP">{{ nsms }}</label>


                                            </div>

                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12    form-group  ">
                                                <div class="d-flex "> <label for="nomP">Visualiser le Message</label>

                                                    <input type="checkbox" :readonly='loadingProgress'
                                                        @click="specialCarc" class="ms-1 me-1" />
                                                    <label class="font-weight-normal"> caractères spéciaux</label>

                                                </div>

                                                <textarea rows='6' readonly v-model="smsCorrect" class="form-control"
                                                    placeholder="Message Correct envoye" id="nomP"></textarea>
                                                <label for="nomP">{{ nsmsc }}</label>


                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="container">
                                        <div class='row'>
                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12  form-group">

                                                <label for="inputCity">Groupe</label>
                                                <!-- <select id="licence" v-model="groupe"
                                                    @change="getContactForGroup(groupe.id)"
                                                    class="form-control form-select">

                                                    <option disabled selected default>
                                                        Selectionner le groupe
                                                    </option>
                                                    <option v-for="option in listGroupe" :value="option"
                                                        :key="option.id">
                                                        {{ option.nom }}
                                                    </option>
                                                </select> -->
                                                <SelectComp v-model="groupe" :data="listGroupe" type='1'
                                                    @focusout="getContactForGroup(groupe.id)"
                                                    placeholder=' Selectionner le groupe' />


                                            </div>
                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12   form-group  ">
                                                <label for="nomP">Nom de l'expediteur</label>

                                                <input type="textarea" v-model="senderId" class="form-control"
                                                    placeholder="Nom de l'expediteur" id="nomP">
                                            </div>
                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12  form-group">

                                                <label for="licence">Pays</label>
                                                <!-- <select id="licence" v-model="pays" class="form-control form-select">

                                                    <option disabled selected default>
                                                        Selectionner le pays
                                                    </option>
                                                    <option v-for="option in optionsPays" :value="option"
                                                        :key="option.id">
                                                        {{ option.label }}
                                                    </option>
                                                </select> -->
                                                <SelectComp v-model="pays" :data="optionsPays"
                                                    placeholder=' Selectionner le pays' />

                                            </div>


                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 ">
                                                <label for="licence">Date d'envoie</label>
                                                <VueCtkDateTimePicker :min-date="dateMin" v-model="dateChoisit" />

                                            </div>
                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12    form-group  ">
                                                <label for="nomP">Message</label>
                                                <textarea rows='6' :hint="nsms" @input="verifMessage" v-model="sms"
                                                    class="form-control" placeholder="Message Entre"
                                                    id="nomP"></textarea>
                                                <label for="nomP">{{ nsms }}</label>


                                            </div>

                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12  mb-3 form-group  ">
                                                <div class="d-flex "> <label for="nomP">Visualiser le Message</label>

                                                    <input type="checkbox" :readonly='loadingProgress'
                                                        @click="specialCarc" class="ms-1 me-1" />
                                                    <label class="font-weight-normal"> caractères spéciaux</label>

                                                </div>
                                                <textarea rows='6' readonly v-model="smsCorrect" class="form-control"
                                                    placeholder="Message Correct envoye" id="nomP"></textarea>
                                                <label for="nomP">{{ nsmsc }}</label>


                                            </div>

                                            <div class="col-lg-6 col-sm-12  ">

                                                <input type="checkbox" :readonly='loadingProgress'
                                                    @click="specialCarc" />
                                                <label class="font-weight-normal"> caractères spéciaux</label>

                                            </div>
                                            <!-- <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12    form-group  ">
                                                <label for="">Date d'envoie</label>
                                                <VueCtkDateTimePicker :min-date="dateMin"  v-model="dateChoisit" />

                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div class="container">
                                        <div class="row">

                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12   form-group  ">
                                                <label for="nomP">Nom de l'expediteur</label>

                                                <input type="textarea" v-model="senderId" class="form-control"
                                                    placeholder="Nom de l'expediteur" id="nomP">
                                            </div>
                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12  form-group">

                                                <label for="licence">Pays</label>
                                                <!-- <select id="licence" v-model="pays" class="form-control form-select">

                                                    <option disabled selected default>
                                                        Selectionner le pays
                                                    </option>
                                                    <option v-for="option in optionsPays" :value="option"
                                                        :key="option.id">
                                                        {{ option.label }}
                                                    </option>
                                                </select> -->
                                                <SelectComp v-model="pays" :data="optionsPays"
                                                    placeholder=' Selectionner le pays' />

                                            </div>


                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12    form-group  ">
                                                <label for="nomP">Message</label>
                                                <textarea rows='6' :hint="nsms" @input="verifMessage" v-model="sms"
                                                    class="form-control" placeholder="Message Entre"
                                                    id="nomP"></textarea>
                                                <label for="nomP">{{ nsms }}</label>


                                            </div>

                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12    form-group  ">
                                                <div class="d-flex "> <label for="nomP">Visualiser le Message</label>

                                                    <input type="checkbox" :readonly='loadingProgress'
                                                        @click="specialCarc" class="ms-1 me-1" />
                                                    <label class="font-weight-normal"> caractères spéciaux</label>

                                                </div>
                                                <textarea rows='6' readonly v-model="smsCorrect" class="form-control"
                                                    placeholder="Message Correct envoye" id="nomP"></textarea>
                                                <label for="nomP">{{ nsmsc }}</label>







                                            </div>

                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 ">
                                                <label for="licence">Date d'envoie</label>
                                                <VueCtkDateTimePicker :min-date="dateMin" v-model="dateChoisit" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal__action">
                                <CustomButton :title='" Sauvegarder"' :loading='laodingCreateSms'
                                    @update:loading="laodingCreateSms = $event" @click='onSubmit'
                                    :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>

    </div>
    <!-- <vue-final-modal v-model="showModalCalendar" style="" classes="modal-container" content-class="modal-content">

    </vue-final-modal> -->
</template>

<style scoped>
/* // Extra small devices (portrait phones, less than 576px)   */
@media (max-width: 575.98px) {
    .padd {
        margin-top: 2em
    }

    .as {
        display: none
    }
}

/* // Small devices (landscape phones, 576px and up)  */
@media (min-width: 576px) and (max-width: 767.98px) {
    .padd {

        /* padding-left: 11em;
         */
        width: 100%
    }
}

/* // Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) and (max-width: 991.98px) {
    .padd {
        padding-left: 5em;
    }
}

/* // Large devices (desktops, 992px and up)   */
@media (min-width: 992px) and (max-width: 1399.98px) {
    .padd {

        padding-left: 11em;
    }
}

/* // Extra large devices (large desktops, 1200px and up)  */
@media (min-width: 1400px) {
    .padd {


        padding-left: 12em;
    }
}

@media (min-width: 1800px) {
    .padd {

        padding-left: 5em;
    }
}

.message {
    display: inline-block;
    /* width: 500%; */
    max-width: 30%;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;

}

.message1 {
    /* border: 1px solid black; */
    width: 120px;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;

    text-overflow: ellipsis;
}

.nav-item {
    list-style: none;
}

.plus {
    padding-bottom: 10px;
    margin-left: 1.4rem;
    width: 3%;
    justify-content: center;
    color: blue;
    font-size: 30px;
    font-weight: bolder;

    align-items: center;

    position: absolute;
    left: 10px;
    top: 50px;
    z-index: 0;

}

.mouse:hover {
    cursor: pointer;
}

i:hover {
    cursor: pointer
}

.mouse:hover {
    cursor: pointer
}


.theme {
    --popper-theme-background-color: rgb(255, 255, 255);
    --popper-theme-background-color-hover: rgb(255, 255, 255);
    --popper-theme-text-color: #040404;
    --popper-theme-border-width: 2px;
    --popper-theme-border-style: solid;
    --popper-theme-border-color: rgb(224, 212, 212);
    --popper-theme-border-radius: 6px;
    --popper-theme-padding: 15px;

}

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

import Datepicker from 'vuejs3-datepicker';
import { createToaster } from "@meforma/vue-toaster";
// import ArgonInput from "../../components/ArgonInput.vue";
// import VCalendar from 'v-calendar';
import Popper from "vue3-popper";
import { formatDate } from '../../boot/formatDate';
import { FormatData } from '../../boot/FormatData';
import VueCookies from 'vue-cookies';
import CustomButton from '../../components/CustomButton.vue';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
// import { VueFinalModal } from 'vue-final-modal'
import SelectComp from '../../components/SelectComp.vue';

// import { BIcon } from 'bootstrap-vue' 
export default {
    name: "Calendrier",
    components: {
        // VCalendar
        SelectComp,
        Datepicker,
        // ArgonInput,
        CustomButton, /* VueFinalModal, */
        VueCtkDateTimePicker, Popper
    },


    setup() {
        onMounted(async () => {

            await getListCalendar();
            await getQteSms();
            await getGroupe();
            await getChildren();
            await getPays();

        });
        let nsms = ref('');
        let nsmsc = ref('');
        let ncara = ref(0);
        let selected = ref(0);
        let ncreUser = ref(0);
        let showModalCalendar = ref(false);
        const search = ref('');
        const loadingPays = ref(false);
        const loadingC = ref(true);
        let selectC = ref(false);
        let laodingCreateSms = ref(false);
        let toast = createToaster();

        const dateChoisit = ref(new Date(),
        );
        const contact = ref();

        const optionsContact = ref([


        ]);
        const dateCourante = formatDate(new Date(), 0);
        const destinataire = ref('');
        const pays = ref({ id: 0, label: 'Aucun' });
        const senderId = ref('');
        const sms = ref('');
        const qteSms = ref(0);
        let groupe = ref({ id: 0, label: 'Aucun' });
        const nbreDest = ref(0);
        // const getNbreDest = () => {
        //     nbreDest.value =
        //         destinataire.value == ''
        //             ? 0
        //             : destinataire.value.split(';')[
        //                 destinataire.value.split(';').length - 1
        //             ] == ''
        //                 ? destinataire.value.split(';').length - 1
        //                 : destinataire.value.split(';').length;
        // };
        const smsCorrect = ref('');
        const optionsPays = ref([{ id: 0, label: 'Aucun' }]);
        //const route = ref('');
        const statusProg = ref(false);
        async function getChildren() {
            const response = await new RequestApi().getListContactUser();
            if (response.status) {

                optionsContact.value = response.data;
                console.log(optionsContact.value)
            }
            else {
                //
            }
        }
        let listCalendar = ref([]);
        let listCalendarSave = ref([]);
        async function getListCalendar() {

            // let listDate = ref([]);
            //
            const response = await new RequestApi().getCalendarAction();
            if (response.status) {

                listCalendar.value = response.data;
                listCalendarSave.value = response.data;
                for (let index = 0; index < listCalendar.value.length; index++) {
                    const element = listCalendar.value[index];
                    console.log('wwww', element.dateProgramme)

                    state.value.highlighted.
                        dates.push(new Date(element.dateProgramme))
                }
                loadingC.value = false;
                console.log('wwww', state.value.highlighted.
                    dates)
                // state.value.highlighted.
                //     dates = listDate.value
            }
            else {
                loadingC.value = false;

                //
            }
        }

        const getPays = async () => {
            loadingPays.value = true;

            const response = await new RequestApi().getRouteAction1();

            if (response.status) {
                optionsPays.value = response.data;
            } else {
                toast.error(`Une erreur est survenu lors du chargement des pays.`, {
                    // override the global option
                    position: "bottom"
                });
            }
            loadingPays.value = false;
        };
        const getQteSms = async () => {

            const response = await new RequestApi().getInfoAccountAction();
            if (response.status) {

                qteSms.value = response.data[0].solde;
            } else {
                // $q.notify({
                //     message: 'Erreur lors du chargement de votre credit restant',
                //     type: 'negative',
                // });
            }
        };
        const onSubmit = async () => {
            // console.log(new Date(dateChoisit.value).getTime(), new Date().getTime(), new Date(dateChoisit.value).getTime() > new Date().getTime())
            if (
                pays.value.id === 0 ||
                sms.value.length === 0 ||
                senderId.value.length === 0
            ) {
                toast.error(`Veuillez remplir correctement tout les champs`, {
                    // override the global option
                    position: "bottom"
                })
                return false;
            }
            if (senderId.value.length > 12) {
                toast.error(`SenderId trop long, utilisez au maximum 12 caracteres.`, {
                    // override the global option
                    position: "bottom"
                });
                return false;
            }
            if (new Date(dateChoisit.value).getTime() < new Date().getTime()) {
                toast.error(`Veuillez entrer une date d'envoie correcte.`, {
                    // override the global option
                    position: "bottom"
                });
                return false;
            }
            let dataSms = (selected.value == 0) ? {
                keySecret: VueCookies.get('keySecret'),
                destinataire: contact.value.id,
                route: pays.value.id,
                senderId: senderId.value,
                message: smsCorrect.value,
                calendrier: dateChoisit.value,
                typeCalendar: selected.value
            } : (selected.value == 1) ? {
                keySecret: VueCookies.get('keySecret'),
                groupeContact: groupe.value.id,
                route: pays.value.id,
                senderId: senderId.value,
                message: smsCorrect.value,
                calendrier: dateChoisit.value,
                typeCalendar: selected.value

            } :
                {
                    keySecret: VueCookies.get('keySecret'),

                    route: pays.value.id,
                    senderId: senderId.value,
                    message: smsCorrect.value,
                    calendrier: dateChoisit.value,
                    typeCalendar: selected.value

                }
                ;
            laodingCreateSms.value = true;
            console.log(dataSms);
            const response1 = await new RequestApi().newCalendarAction(dataSms);

            if (response1.status) {

                await getListCalendar()
                toast.success(`Calendrier Enregistre.`, {
                    // override the global option
                    position: "bottom"
                });
                delette()
                laodingCreateSms.value = false;

            } else {
                if (response1.aff) {
                    toast.error(`Une erreur s'est produite`, {
                        // override the global option
                        position: "bottom"
                    });
                }

                laodingCreateSms.value = false;

            }
            laodingCreateSms.value = false;

        };
        let ncara2 = ref(0);
        let statusSpecial = ref(false); const specialCarc = () => {
            statusSpecial.value = !statusSpecial.value
            // verifMessage2()

            verifMessage()
        }
        const verifMessage = () => {
            smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value));

            ncara2.value = sms.value.split('').length;
            ncara.value = smsCorrect.value.split('').length;

            nsms.value = new FormatData().getNumberOfSMSsegments(sms.value)/* ) Math.ceil(ncara2.value / (statusSpecial.value ? 70 : 159)) */
                .toString()
                .concat(' Message(s) pour ')
                .concat(ncara2.value.toString())
                .concat(' Caractere(s)');

            ncreUser.value = nbreDest.value * new FormatData().getNumberOfSMSsegments(sms.value);

            nsmsc.value = new FormatData().getNumberOfSMSsegments(smsCorrect.value)
                .toString()
                .concat(' Message(s) pour ')
                .concat(smsCorrect.value.split('').length.toString())
                .concat(' Caractere(s)');
        };
        const verifMessage2 = () => {
            smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value));

            ncara2.value = sms.value.split('').length;
            ncara.value = smsCorrect.value.split('').length;

            nsms.value = new FormatData().getNumberOfSMSsegments(sms.value)/* ) Math.ceil(ncara2.value / (statusSpecial.value ? 70 : 159)) */
                .toString()
                .concat(' Message(s) pour ')
                .concat(ncara2.value.toString())
                .concat(' Caractere(s)');

            ncreUser.value = nbreDest.value * new FormatData().getNumberOfSMSsegments(sms.value);

            nsmsc.value = new FormatData().getNumberOfSMSsegments(smsCorrect.value)
                .toString()
                .concat(' Message(s) pour ')
                .concat(smsCorrect.value.split('').length.toString())
                .concat(' Caractere(s)');
        };
        const delette = () => {
            sms.value = '';
            dateChoisit.value = null;
            destinataire.value = '';

            senderId.value = '';
            smsCorrect.value = '';
            groupe.value = null;
            pays.value = { id: 0, label: 'Aucun' };
        };

        let listGroupe = ref([]);
        let loadingGroupes = ref(false);
        const getGroupe = async () => {
            loadingGroupes.value = true;
            listGroupe.value.pop();


            const response = await new RequestApi().getListGroupeUser();

            if (response.status) {

                listGroupe.value = response.data;


                loadingGroupes.value = false;
            } else {

                loadingGroupes.value = false;

                toast.error(`Erreur lors du chargement des groupes.`, {
                    // override the global option
                    position: "bottom"
                });
            }
            loadingGroupes.value = false;
        }; const getContactForGroup = async (idGroupe) => {
            // loadingContact.value = true;
            console.log('response.data', idGroupe);

            const response = await new RequestApi().getActionContactForGroup(
                idGroupe
            );
            console.log(response.data);
            if (response.status) {
                destinataire.value = response.data.map((x) => {
                    console.log('voici .....', x.contact.phone);
                    return x.contact.phone;
                });
                console.log('voici .....', destinataire.value.join(';'));
            } else {
                toast.error(`Erreur lors du chargement des contacts du groupes`, {
                    // override the global option
                    position: "bottom"
                });
            }
            // loadingContact.value = false;
        };

        var state = ref({
            highlighted: {
                dates: [ // Highlight an array of dates

                ],
                // a custom function that returns true of the date is highlighted
                // this can be used for wiring you own logic to highlight a date if none
                // of the above conditions serve your purpose
                // this function should accept a date and return true if is highlighted

                includeDisabled: true // Highlight disabled dates
            }
        });
        const newEvent = () => {
            let savR = ref([]);
            listCalendar.value = [];
            for (let index = 0; index < listCalendarSave.value.length; index++) {
                const element = listCalendarSave.value[index];

                if ((new Date(element.dateProgramme).getDate() == new Date(dateChoisit.value).getDate()) && (new Date(element.dateProgramme).getMonth() == new Date(dateChoisit.value).getMonth())) {
                    savR.value.push(element);

                }
                console.log('uuu', new Date(element.dateProgramme));
                console.log(new Date(element.dateProgramme).getDate());
            }

            listCalendar.value = savR.value;


            // if (listCalendar.value.length == 0) {
            //     if ((dateMin.value.getFullYear() > dateChoisit.value.getFullYear())) {
            //         dateChoisit.value = dateMin.value

            //         console.log('dddd');
            //     }
            //     else if ((dateMin.value.getFullYear() == dateChoisit.value.getFullYear())) {
            //         if ((dateMin.value.getMonth() > dateChoisit.value.getMonth())) {
            //             dateChoisit.value = dateMin.value
            //             console.log('aaaa', dateChoisit.value);

            //         } else if ((dateMin.value.getMonth() == dateChoisit.value.getMonth())) {
            //             if ((dateMin.value.getDate() > dateChoisit.value.getDate())) {
            //                 dateChoisit.value = dateMin.value
            //                 console.log('dddd', dateChoisit.value);

            //             }


            //         }
            //         else {
            //             //


            //         }

            //         console.log('0000');
            //     }
            //     console.log('dddd');

            //     showModalCalendar.value = true;
            // }
            // console.log(dateMin.value.getFullYear() , dateChoisit.value.getFullYear());
            //   console.log((dateMin.value.getFullYear() == dateChoisit.value.getFullYear()),);
        }
        let message = ref('')
        let selctmessage = ref('')
        let selectDate = ref('')
        let idCalendar = ref('')
        let selectStatus = ref(false)
        const selectCalendar = (calendrier) => {
            console.log(calendrier)
            idCalendar.
                value = calendrier.idCalendrier
            selctmessage.
                value = calendrier.message
            selectDate.
                value = new Date(calendrier.dateProgramme),
                selectStatus.
                    value = calendrier.status
            verifMessage2()
            selectC.value = true;
        }
        let loadingUC = ref(false)
        async function update() {




            let data = {
                id: idCalendar.value,
                message: selctmessage.
                    value,
                dateProgramme: selectDate.
                    value,

            }
            loadingUC.value = !loadingUC.value
            const response = await new RequestApi().updateCalendar(data);
            if (response.status) {
                await getListCalendar(); toast.success(`Mise a jour effectuee avec success`, {
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
        const date = new Date();

        date.setDate(date.getDate() - 1);
        const dateMin = ref(date)
            ;
        console.log(dateMin.value)
        return {
            dateMin,
            loadingC, message, selectC, selctmessage, selectDate, selectCalendar, loadingUC,
            state, listCalendar, update,
            showModalCalendar,
            optionsContact, contact,
            newEvent,
            getContactForGroup,
            groupe,
            listGroupe,
            optionsPays,
            search,
            sms,
            getPays,
            senderId,
            smsCorrect,
            destinataire,
            statusProg,
            // eslint-disable-next-line vue/no-dupe-keys
            verifMessage,
            // verifNumber,
            ncreUser,
            delette,
            // getNbreDest,
            nbreDest,
            pays,
            loadingPays,
            onSubmit,
            dateChoisit,
            dateCourante,
            qteSms,
            nsms,
            ncara,
            laodingCreateSms,
            nsmsc, selected, verifMessage2, ncara2, statusSpecial, specialCarc
        };
    },
}
</script>
