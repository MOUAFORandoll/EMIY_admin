<template>

    <div class="py-4 container-fluid">
        <div class=" row">
            <div class="col-12 ">
                <div class="card w-100 mb-4" v-if='examin == 0'>
                    <div class="card-body">
                        <div class="part1">
                            <h4 class="card-title font-weight-bolder dark text-mobile">Mail</h4>
                            <p class="card-text border-bottom text-mobile2 ">Envoyer un mail.</p>
                            <!--  <div class="card  bg-primary ">

                                <div class="row ms-1 me-1 pb-2 pt-2" role="alert">

                                    <div class="  col-xs-12 col-sm-12 col-sm-12 col-lg-3   ">
                                        <div class="text-white ">Credit Restant : {{ qteSms }}

                                            <i class="ni ni-money-coins  ms-2 " @mouseover="show = true"
                                                @mouseout="show = false"></i>
                                            <nav v-if="show"
                                                class="bg-grey-2 navbar navbar-expand-lg c position-absolute   blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow radius">
                                                <div class="container ">

                                                    <div class="collapse navbar-collapse" id="navigation">
                                                        <div class="  d-flex align-items-center justify-content-center mt-3 mb-3 ms-3 me-5"
                                                            v-if="loading">

                                                            <i class="fa fa-spinner fa-spin"
                                                                style="  font-size:50px; color:blue "></i>

                                                        </div>
                                                        <div class="table-responsive col-12  mb-2" v-else>
                                                            <table class="table col-12 align-items-center">
                                                                <tbody>
                                                                    <tr v-for="cons in conso" :key="cons"
                                                                        class="border-bottom col-12">
                                                                        <td>
                                                                            <div
                                                                                class="px-2 py-1 d-flex align-items-center">
                                                                                
                                                                                <div class="ms-4">
                                                                                    <p
                                                                                        class="mb-0 text-xs font-weight-bold">
                                                                                        Country:</p>
                                                                                    <h6
                                                                                        class="mb-0 text-sm font-weight-bolder">
                                                                                        {{ cons.country }}</h6>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="text-start">
                                                                                <p
                                                                                    class="mb-0 text-xs font-weight-bold">
                                                                                    Solde Actuel:</p>
                                                                                <h6
                                                                                    class="mb-0 text-sm font-weight-bolder">
                                                                                    {{ cons.solde }} U</h6>
                                                                            </div>
                                                                        </td>
                                                                        <td class="text-sm align-middle">
                                                                            <div class="text-start col">
                                                                                <p
                                                                                    class="mb-0 text-xs font-weight-bold">
                                                                                    Taux D'utilisation:</p>
                                                                                <h6
                                                                                    class="mb-0 text-sm font-weight-bolder">
                                                                                    {{ cons.taux }} %</h6>
                                                                            </div>
                                                                        </td>

                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </nav>

                                        </div>

                                    </div>

                                    <div class=" col-xs-12 col-sm-12 col-sm-12 col-lg-3   ">
                                        <div class="text-white">Credit A utiliser : {{ ncreUser }}

                                        </div>
                                    </div>


                                    <div class=" col-xs-12 col-sm-12 col-sm-12 col-lg-3">

                                        <div class="text-white">Nombre Destinataires : {{ nbreDest }}</div>


                                    </div>
                                    <div class=" col-xs-12 col-sm-12 col-sm-12 col-lg-3   ">
                                        <div class="text-white"> Date : {{ dateCourante }}</div>

                                    </div>

                                </div>




                            </div> -->
                            <div class="col-12  form-group  ">
                                <label for="nomP" class="font-weight-normal">Object du mail</label>

                                <input type="textarea" :readonly='loadingProgress' v-model="subject"
                                    class="form-control" placeholder="Nom de l'expediteur" id="nomP">
                            </div>
                            <div class="row">
                                <div class="col-12   ">
                                    <label for="nomP" class="font-weight-normal">Email des Destinataires</label>
                                    <textarea :readonly='loadingProgress' v-model="destinataire" class="form-control"
                                        placeholder="Email des Destinataires"></textarea>
                                    <label for="nomP" class="font-weight-normal"> Vous pouvez saisir plusieurs adresse
                                        email en separant par des points virgules(;)</label>
                                </div>

                            </div>
                            <!--    <div class="row">

                                <div class="col-lg-6 col-sm-12  form-group  ">
                                    <label for="nomP" class="font-weight-normal">Nom de l'expediteur</label>

                                    <input type="textarea" :readonly='loadingProgress' v-model="subject"
                                        class="form-control" placeholder="Nom de l'expediteur" id="nomP">
                                </div>


                                <div class="col-lg-6 col-sm-12 form-group">
                                    <div class="row">

                                        <div class="col-lg-6 col-sm-12  form-group  ">
                                            <label for="nomP" class="font-weight-normal"> Model sms</label>

                                            <SelectCompModel v-model="mod" @input='selectModel'
                                                :readonly='loadingProgress' :data="lModelSms"
                                                placeholder="  Selectionner un model de sms" />
                                        </div>


                                        <div class="col-lg-6 col-sm-12 form-group">
                                            <label class="font-weight-normal" for="licence">Pays</label>
                                            
                                            <SelectComp v-model="pays" :readonly='loadingProgress' :data="optionsPays"
                                                placeholder="  Selectionner le pays" />

                                        </div>




                                    </div>

                                </div>




                            </div> -->

                            <div class="row">

                                <div class="  col-sm-12   form-group  ">
                                    <label for="nomP" class="font-weight-normal">Message (Utilser model sms)</label>

                                    <tinymce id="d1" :apiKey="tinyKey" :init="{
                                        plugins: 'lists link image table code help wordcount'
                                    }" v-model="sms"></tinymce>
                                    <label for="nomP" class="font-weight-normal">{{ (sms.length != 0) ? '' : `Ecrivez
                                    un
                                    mots ici` }}</label>


                                </div>






                            </div>
                            <!--    <div class="row mt-0">

                                <div class="col-lg-6 col-sm-12  ">

                                    <input type="checkbox" :readonly='loadingProgress'
                                        @click="statusProg = !statusProg" />
                                    <label class="font-weight-normal">Programmer le Message</label>

                                </div>
                                <div class="col-lg-6 col-sm-12  ">

                                    <input type="checkbox" :readonly='loadingProgress' v-model='statusExcepte'
                                        @click="addStop" />
                                    <label class="font-weight-normal">Lien STOP</label>

                                </div>
                                <div class="col-lg-6 col-sm-12  " v-show="statusProg">
                                    <label for="licence">Date d'envoie</label>
                                    <VueCtkDateTimePicker :min-date="dateMin" v-model="dateChoisit" />

                                </div>




                            </div>
                           <div class="row mt-0">

                                <div class="col-lg-6 col-sm-12  ">

                                    <input type="checkbox" :readonly='loadingProgress' @click="addMedia" />
                                    <label class="font-weight-normal">Mediatiser Votre sms</label>

                                </div>


                                <div class="col-lg-6 col-sm-12  ">

                                    <input type="checkbox" :readonly='loadingProgress' @click="specialCarc" />
                                    <label class="font-weight-normal"> caractères spéciaux</label>

                                </div>


                            </div>   -->

                            <div class="row mt-0">







                            </div>
                            <div class="row ms-1  me-1">

                                <div class="col-lg-6 col-sm-12 form-group  ">
                                    <div class="row d-flex justify-content-between">

                                        <CustomButton :title='"ENVOYER"' :loading='laodingCreateSms'
                                            @update:loading="laodingCreateSms = $event" @click='sendMail'
                                            :classe="'btn btn-primary    col-lg-7 col-sm-12 '" />




                                    </div>
                                </div>








                            </div>
                        </div>
                    </div>


                </div>
                <div class="card  W-100 mb-4 p-4" v-if='examin == 1'>

                    <div class=" pb-2 ">
                        <div class="d-flex justify-content-between">
                            <h6 class="  ml-0 font-weight-bolder text-dark">Rapport d'examin de votre envoi de mail
                            </h6>
                            <div class="col-lg-4 col-sm-12 mouse" align="right">
                                <p @click="examin = 0"> Retour
                                </p>
                                <!-- <p v-else> <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>
                </p> -->
                            </div>
                        </div>
                        <p class="mb-2 ">Detail du rapport</p>
                    </div>
                    <div class="row mb-2">
                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3  ">
                            <div class="col">Object du mail:</div>
                            <div class="col font-weight-bolder" style='font-size: 23px'>
                                {{ ExaminerData.subject }}
                            </div>
                        </div>
                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                            <div class="col">Nombre de contacts:</div>
                            <div class="col  font-weight-bolder" style='font-size: 23px'>
                                {{ ExaminerData.nombreContact }}
                            </div>
                        </div>


                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                            <div class="col">Envoi reussi:</div>
                            <div class="col d-flex  font-weight-bolder" style='font-size: 23px'>
                                {{ ExaminerData.success.length }}

                            </div>
                        </div>
                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                            <div class="col">Envoi echoue:</div>
                            <div class="col d-flex  font-weight-bolder" style='font-size: 23px'>
                                {{ ExaminerData.echec.length }}

                            </div>
                        </div>
                    </div>
                    <div class="row  mb-3  ">
                        <div class="col">
                            <div class="col">Envoi reussi :</div>
                            <div class="col   flex-n ">

                                <span v-for="(email, index) in   ExaminerData.success" :key='email'>

                                    <p :class="'text-success'">
                                        {{ (index ==
                                                ExaminerData.success.length - 1) ?
                                                email : email + ','
                                        }}
                                    </p>
                                </span>


                            </div>

                        </div>
                    </div>
                    <div class="row  mb-3  ">
                        <div class="col">
                            <div class="col">Envoi Echoue :</div>
                            <div class="col   flex-n ">

                                <span v-for="(email, index) in   ExaminerData.echec" :key='email'>

                                    <p :class="'text-danger'">
                                        {{ (index ==
                                                ExaminerData.success.length - 1) ?
                                                email : email + ','
                                        }}
                                    </p>
                                </span>


                            </div>

                        </div>
                    </div>
                    <div class="row  pb-3">
                        <div class="col">
                            <div class="col">Message:</div>
                            <div class="col">{{ ExaminerData.message }}</div>





                        </div>

                    </div>

                    <div class="hr2">


                    </div>
                    <!--  <div class="row mb-3 mt-3">
        <div class="col">
            <div class="col">Mots interdits:</div>
            <div class=" col flex-n">

                <span v-for="(message ) in   ExaminerData.message" :key='message.text'>

                    <p :class="message.status ? 'none' : 'text-danger'">

                        {{ message.text }}&nbsp;
                    </p>
                </span>


            </div>
        </div>
    </div> -->


                    <!--  <div class="row  mb-3  ">
        <div class="col">
            <div class="col">Numero interdits:</div>
            <div class="col   flex-n ">

                <span v-for="(destinataireX, index) in   ExaminerData.destinataires" :key='destinataireX.phone'>

                    <p :class="destinataireX.status ? 'none' : 'text-danger'">
                        {{ (index ==
                        ExaminerData.destinataires.length - 1) ?
                        destinataireX.phone : destinataireX.phone + ','
                        }}
                    </p>
                </span>


            </div>

        </div>
    </div> -->
                    <!--   <div class="row  mb-3 ">
        <div class="col">
            <div class="col">Remarques:</div>
            <div class="col text-danger">
                {{ ExaminerData.operator }} {{ ExaminerData.remarques }}


            </div>
        </div>

    </div>
    <div class="row   mb-2">
        <div class="col">
            <div class="col">Suggestions:</div>
            <div class="col  text-success">
                {{ ExaminerData.suggestions }}

            </div>
        </div>

    </div> -->

                    <div class="hr2 mb-3">
                    </div>

                    <div class=" ms-1 col-lg-4 col-sm-12 mt-2 mb-1 row d-flex justify-content-between">

                        <!--     <CustomButton :title='"CORRIGER"' :loading='loadingProgress'
                                @update:loading="loadingProgress = $event" @click='correction = true'
                                :classe="'btn btn-primary    col-lg-5 col-sm-12 '" />

                            <CustomButton :title='"ANNULER"' @click='delette'
                                :classe="'btn btn-danger  col-lg-5 col-sm-12 '" /> -->













                    </div>

                </div>


            </div>
        </div>
    </div>

</template>

<style>
select:required:invalid {
    color: #666;
}

option[value=""][disabled] {
    display: none;
}

option {
    color: #000;
}

.hr2 {
    border: none;
    border-top: 2px solid rgb(202, 196, 196);
    color: rgb(216, 212, 212);
    overflow: visible;
    text-align: center;
    height: 5px;
}
</style>
<style scoped>
.radius {
    border-radius: 10px 10px 10px 10px;
}

.bg {
    opacity: 0.8;
}

.mask {
    position: absolute;
    background-size: cover;
    background-position: center center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
}

.scroll {
    max-height: 100%;
    overflow-y: hidden;
    /* Hide vertical scrollbar */
    overflow-x: hidden;
    /* Hide horizontal scrollbar */
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

li {
    text-decoration: none;
}

li:hover {
    cursor: pointer;
}

li:active {
    color: rgb(44, 85, 208);
}

ul {
    list-style-type: none;
}
</style>
<script>
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
// import Datepicker from 'vuejs3-datepicker';
import { createToaster } from "@meforma/vue-toaster";
// import { Tooltip } from "bootstrap"
import { formatDate } from '../../boot/formatDate';
import { FormatData } from '../../boot/FormatData';
import VueCookies from 'vue-cookies';
import CustomButton from '../../components/CustomButton.vue';
// import LoadingComponent from '../../components/LoadingComponent.vue';
// import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
// import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
// import Editor from '@tinymce/tinymce-vue';
export default {
    name: "NouveauMail",
    components: {
        // Datepicker
        //   Editor,

        CustomButton,/*  VueCtkDateTimePicker,   */
    },
    methods: {


    },

    setup() {
        onMounted(async () => {



        });
        let nsms = ref('');
        let nsmsc = ref('');
        let ncara = ref(0);
        let ncreUser = ref(0);

        const search = ref('');
        const loadingPays = ref(false);
        const statusMedia = ref(false);
        const statusSpecial = ref(false);
        let laodingCreateSms = ref(false);
        let toast = createToaster();

        const dateChoisit = ref(new Date());

        const dateCourante = formatDate(new Date(), 0);
        const destinataire = ref('');
        const pays = ref({ id: 0, codePhone: 0, label: 'Aucun' });
        const category = ref({ id: 0, label: 'Aucun' });
        const subject = ref('');
        const sms = ref('');
        const destiText = ref('');
        const qteSms = ref(0);

        const nbreDest = ref(0);
        const getNbreDest = () => {

            nbreDest.value =
                destinataire.value == ''
                    ? 0
                    : destinataire.value.split(';')[
                        destinataire.value.split(';').length - 1
                    ] == ''
                        ? destinataire.value.split(';').length - 1
                        : destinataire.value.split(';').length;
        };
        let smsCorrect = ref('');
        const optionsPays = ref([{ id: 0, label: 'Aucun' }]);
        const optionsCatPub = ref([{ id: 0, label: 'Aucun' }]);
        const ExaminerData = ref([]);
        const statusProg = ref(false);
        const loading = ref(false);

        const sendMail = async () => {

            verifMail()
            if (destinataire.value.split(';').length == 0 || destinataire.value.length == 0 || destinataire.value == '') {
                toast.error(`Entrez des adresses mails corrects.`, {
                    // override the global option
                    position: "bottom"
                });
                return false;
            }
            if (subject.value.length == 0 || subject.value == '') {
                toast.error(`Entrez l'object du mail'.`, {
                    // override the global option
                    position: "bottom"
                });
                return false;
            } if (sms.value.length == 0 || sms.value == '') {
                toast.error(`Entrez du texte a votre mail'.`, {
                    // override the global option
                    position: "bottom"
                });
                return false;
            }
            let dataMail = {
                keySecret: VueCookies.get('keySecret'),
                destinataire: destinataire.value.split(';'),

                subject: subject.value,
                message: sms.value,

            }


            laodingCreateSms.value = true;

            const response1 = await new RequestApi().newMailAction(dataMail);

            if (response1.status) {
                examin.value = 1
                ExaminerData.value = response1.data
                toast.success(`Mail Envoye.`, {
                    // override the global option
                    position: "bottom"
                });
                delette();

                laodingCreateSms.value = false;

            } else {
                laodingCreateSms.value = false;

                if (response1.aff) {

                    toast.error(`Verifier votre configuration de serveur smtp`, {
                        // override the global option
                        position: "bottom"
                    });
                }
            }



        };

        const addStop = () => {
            statusExcepte.value = !statusExcepte.value;



        }
        const addStop1 = () => {
            statusExcepte.value = !statusExcepte.value;



        }
        const addMedia = () => {
            statusMedia.value = !statusMedia.value

        }
        const specialCarc = () => {
            statusSpecial.value = !statusSpecial.value


        }


        let statusExcepte = ref(false);
        const delette = () => {
            sms.value = '';
            dateChoisit.value = null;
            image.value = null;

            destinataire.value = '';
            statusProg.value = false;
            ;
            statusMedia.value = false;
            subject.value = '';

            smsCorrect.value = '';
            pays.value = { id: 0, label: 'Aucun' };
        };
        let image = ref();
        let examin = ref(0);
        const verifMail = () => {

            let final = destinataire.value.split(';');
            let taille = destinataire.value.split(';').length;
            destinataire.value = '';
            for (var i = 0; i < taille; i++) {

                let Co = new FormatData().verifCorrectMail(final[i])

                if (
                    Co && final[i] != '' && final[i].length != 0
                ) {
                    destinataire.value += i == taille - 1 ? final[i] : final[i].concat(';')
                    destinataire.value = destinataire.value.toString().replace(/\s+/g, '');
                }
            }
            getNbreDest();


        };
        return {
            examin,
            sendMail,
            specialCarc,
            showMenuU: false,
            show: ref(false),
            tinyKey: 'm6yavinfzfbyst94a2pcwfod9i5v0893zk4wibpuyx3z3w4z',
            verifMail,
            optionsCatPub, category,
            image,
            optionsPays,
            search,
            sms,
            subject,
            smsCorrect,
            destinataire,
            statusProg,

            ncreUser,
            delette,
            getNbreDest,
            nbreDest,
            pays,
            loadingPays,
            // onSubmit,
            dateChoisit,
            dateCourante,
            qteSms,
            nsms,
            ncara,
            laodingCreateSms,
            nsmsc, statusMedia, statusExcepte, addStop, addMedia, loading, ExaminerData, destiText, addStop1,
        };
    },
}
</script>
