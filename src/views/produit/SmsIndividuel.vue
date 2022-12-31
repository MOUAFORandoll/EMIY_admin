<template>

    <div class="py-4 container-fluid">
        <div class=" row">
            <div class="col-12 ">
                <div class="card w-100 mb-4" v-if='examin == 0'>
                    <div class="card-body">
                        <div class="part1">
                            <h4 class="card-title font-weight-bolder dark text-mobile">Sms</h4>
                            <p class="card-text border-bottom text-mobile2 ">Creer un sms.</p>
                            <div class="card  bg-primary ">

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
                                                                                <!-- <div>
                            <img :src="sale.flag" alt="Country flag" />
                          </div> -->
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




                            </div>

                            <div class="row">
                                <div class="col-12   ">
                                    <label for="nomP" class="font-weight-normal">Numero des Destinataires</label>
                                    <textarea :readonly='loadingProgress' v-model="destinataire" class="form-control"
                                        @input="verifNumber" placeholder="Numero des Destinataires"></textarea>
                                    <label for="nomP" class="font-weight-normal"> {{ destiText }}</label>
                                </div>

                            </div>
                            <div class="row">

                                <div class="col-lg-6 col-sm-12  form-group  ">
                                    <label for="nomP" class="font-weight-normal">Nom de l'expediteur</label>

                                    <input type="textarea" :readonly='loadingProgress' v-model="senderId"
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
                                            <!-- <select id="licence" v-model="pays" class="form-control ">
                                                                            <option value="" default disabled selected>Choisissez le pays
                                                                                cible</option>
                                                                            <option disabled selected default>
                                                                                Selectionner le pays
                                                                            </option>
                                                                            <option v-for="option in optionsPays" :value="option" :key="option.id">
                                                                                {{ option.label }}
                                                                            </option>
                                                                        </select>  -->
                                            <SelectComp v-model="pays" :readonly='loadingProgress' :data="optionsPays"
                                                placeholder="  Selectionner le pays" />

                                        </div>




                                    </div>

                                </div>




                            </div>

                            <div class="row">

                                <div class="col-lg-6 col-sm-12   form-group  ">
                                    <label for="nomP" class="font-weight-normal">Message (Utilser model sms)</label>
                                    <textarea rows='6' :readonly='loadingProgress' :hint="nsms" @input="verifMessage"
                                        v-model="sms" class="form-control" placeholder="Message Entre"
                                        id="nomP"></textarea>
                                    <label for="nomP" class="font-weight-normal">{{ (sms.length != 0) ? nsms : `Ecrivez
                                        un
                                        mots ici` }}</label>


                                </div>

                                <div class="col-lg-6 col-sm-12   form-group  ">
                                    <label for="nomP" class="font-weight-normal">Visualiser le Message</label>
                                    <textarea rows='6' readonly disabled v-model="smsCorrect" class="form-control"
                                        placeholder="Message Correct envoye" id="nomP"></textarea>
                                    <label for="nomP" class="font-weight-normal">{{ (smsCorrect.length != 0) ? nsmsc
        : ' '
}}</label>


                                </div>





                            </div>
                            <div class="row mt-0">

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
                                    <!-- <label for="licence">Date d'envoie</label> -->
                                    <VueCtkDateTimePicker :min-date="dateMin" v-model="dateChoisit" />

                                </div>




                            </div>
                            <div class="row mt-0">

                                <div class="col-lg-6 col-sm-12  ">

                                    <input type="checkbox" :readonly='loadingProgress' v-model="statusMedia"
                                        @click="addMedia" />
                                    <label class="font-weight-normal">Mediatiser Votre sms</label>

                                </div>


                                <div class="col-lg-6 col-sm-12  ">

                                    <input type="checkbox" :readonly='loadingProgress' @click="specialCarc" />
                                    <label class="font-weight-normal"> caractères spéciaux</label>

                                </div>


                            </div>
                            <div class="row mt-0" v-show="statusMedia">

                                <div class="col-lg-3 col-sm-12  form-group  ">
                                    <label for="nomP" class="font-weight-normal">Titre publicite</label>

                                    <input type="textarea" :readonly='loadingProgress' v-model="title"
                                        class="form-control" placeholder="Titre publicite" id="nomP">
                                </div>
                                <div class="col-lg-3 col-sm-12  ">

                                    <label class="font-weight-normal" for="licence">Categorie</label>
                                    <!--  <select id="licence" v-model="category" class="form-control form-select">
                                         <option disabled selected default>
                                            Selectionner une categorie
                                        </option>
                                        <option v-for="categori in optionsCatPub" :value="categori" :key="categori.id">
                                            {{ categori.label }}
                                        </option>
                                    </select> -->
                                    <SelectComp :readonly='loadingProgress' v-model="category" :data="optionsCatPub"
                                        placeholder='                                            Selectionner une categorie
' />

                                </div>

                                <div class="col-lg-6 col-sm-12  ">
                                    <label class="font-weight-normal">Inserer image publicitaire</label>
                                    <argon-input :readonly='loadingProgress' icon="../assets/img/team-2.jpg" type="file"
                                        placeholder="Description" aria-label="Name" accept=".png, .jpeg,.jpg"
                                        @change="onFileChange" />



                                </div>

                                <div class="col-lg-12 col-sm-12 mb-2 ">

                                    <label for="nomP" class="font-weight-normal">Description de votre media</label>
                                    <tinymce id="d1" :apiKey="tinyKey" :init="{
    plugins: 'lists link image table code help wordcount'
}" v-model="description">
                                    </tinymce>

                                </div>




                            </div>
                            <div class="row mt-0">







                            </div>
                            <div class="row ms-1  me-1">

                                <div class="col-lg-6 col-sm-12 form-group  ">
                                    <div class="row d-flex justify-content-between">

                                        <CustomButton :title='"DEMARREZ VOTRE CAMPAGNE"' :loading='loadingProgress'
                                            @update:loading="loadingProgress = $event" @click='getSmsExaminer'
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
                            <h6 class="  ml-0 font-weight-bolder text-dark">Rapport d'examin de votre campagne SMS</h6>

                        </div>
                        <p class="mb-2 ">Detail du rapport</p>
                    </div>
                    <div class="row mb-2">
                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3  ">
                            <div class="col">Sender ID:</div>
                            <div class="col  font-weight-bolder" style='font-size: 23px'>
                                {{ ExaminerData.senderId }}
                            </div>
                        </div>
                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                            <div class="col">Nombre de contacts:</div>
                            <div class="col  font-weight-bolder" style='font-size: 23px'>
                                {{ ExaminerData.nombreContact }}
                            </div>
                        </div>


                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                            <div class="col">Contacts exceptes:</div>
                            <div class="col d-flex  font-weight-bolder" style='font-size: 23px'>
                                {{ ExaminerData.nombreExcepte }}

                            </div>
                        </div>
                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                            <div class="col">Destination:</div>
                            <div class="col  font-weight-bolder" style='font-size: 23px'>
                                {{ ExaminerData.route }}
                            </div>
                        </div>
                    </div>
                    <div class="row  pb-3">
                        <div class="col">
                            <div class="col">Message:</div>
                            <div class="col">{{ ExaminerData.messageStart }}</div>





                        </div>

                    </div>

                    <div class="hr2">


                    </div>
                    <div class="row mb-3 mt-3" v-if="ExaminerData.message.length != 0">
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
                    </div>


                    <div class="row  mb-3  "  v-if="ExaminerData.destinataires.length != 0">
                        <div class="col">
                            <div class="col">Numero interdits:</div>
                            <div class="col   flex-n ">

                                <span v-for="(destinataireX, index) in   ExaminerData.destinataires"
                                    :key='destinataireX.phone'>

                                    <p :class="destinataireX.status ? 'none' : 'text-danger'">
                                        {{ (index ==
        ExaminerData.destinataires.length - 1) ?
        destinataireX.phone : destinataireX.phone + ','
}}
                                    </p>
                                </span>


                            </div>

                        </div>
                    </div>
                    <div class="row  mb-3 "  v-if="ExaminerData.remarques.length!= 0">
                        <div class="col">
                            <div class="col">Remarques:</div>
                            <div class="col text-danger">
                                {{ ExaminerData.operator }} {{ ExaminerData.remarques }}


                            </div>
                        </div>

                    </div>
                    <div class="row   mb-2" v-if="ExaminerData.suggestions.length != 0">
                        <div class="col">
                            <div class="col">Suggestions:</div>
                            <div class="col  text-success">
                                {{ ExaminerData.suggestions }}

                            </div>
                        </div>

                    </div>

                    <div class="hr2 mb-3">
                    </div>

                    <div class=" ms-1 col-lg-4 col-sm-12 mt-2 mb-1 row d-flex justify-content-between">

                        <CustomButton :title='"CORRIGER"' :loading='loadingProgress'
                            @update:loading="loadingProgress = $event" @click='correction = true'
                            :classe="'btn btn-primary    col-lg-5 col-sm-12 '" />

                        <CustomButton :title='"ANNULER"' @click='delette'
                            :classe="'btn btn-danger  col-lg-5 col-sm-12 '" />













                    </div>

                </div>



                <!-- <div class="card  W-100 mb-4 p-4" v-if='examin == 2'>

                    <div class=" pb-2 ">
                        <div class="d-flex justify-content-between">
                            <h6 class="  ml-0 font-weight-bolder text-dark">Rapport d'examin de votre campagne SMS
                            </h6>

                        </div>
                        <p class="mb-2 ">Lisez attentivement</p>
                    </div>
                    <div class="row mb-2">
                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3  ">
                            <div class="col">Sender ID:</div>
                            <div class="col  font-weight-bolder" style='font-size: 23px'>
                                {{ExaminerData.senderId}}
                            </div>
                        </div>
                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                            <div class="col">Nombre de contacts:</div>
                            <div class="col  font-weight-bolder" style='font-size: 23px'>
                                {{ExaminerData.nombreContact}}
                            </div>
                        </div>


                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                            <div class="col">Contacts exceptes:</div>
                            <div class="col d-flex  font-weight-bolder" style='font-size: 23px'>
                                {{ ExaminerData.nombreExcepte }}

                            </div>
                        </div>
                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                            <div class="col">Destination:</div>
                            <div class="col  font-weight-bolder" style='font-size: 23px'>
                                {{ExaminerData.route}}
                            </div>
                        </div>
                    </div>
                    <div class="row    pb-3">
                        <div class="col">
                            <div class="col">Message:</div>
                            <div class="col">

                                {{ExaminerData.messageStart}}



                            </div>
                        </div>

                    </div>
                    <div class="hr2">


                    </div>

                    <div class="row mt-2 mb-3 ">
                        <div class="col">
                            <div class="col">Remarques:</div>
                            <div class="col text-success">
                                {{ExaminerData.remarques}}


                            </div>
                        </div>

                    </div>
                    <div class="row    ">
                        <div class="col">
                            <div class="col">Suggestions:</div>
                            <div class="row">
                                <div class="col col-lg-6 col-sm-12">
                                    {{ExaminerData.suggestions}}
                                </div>

                                <div class="col col-lg-6 col-sm-12" align='right'>


                                    <input type="checkbox" v-model='statusExcepte' @click="addStop" />
                                    <label>Inserer Lien STOP (Fortement recommander)</label>


                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="hr2 mt-3 mb-3">
                    </div>

                    <div class=" ms-1 col-lg-4 col-sm-12 mt-2 mb-1 row d-flex justify-content-between">

                        <CustomButton :title='"POURSUIVRE"' :loading='loadingProgress'
                            @update:loading="loadingProgress = $event" @click='examin = 3'
                            :classe="'btn btn-primary    col-lg-5 col-sm-12 '" />

                        <CustomButton :title='"ANNULER"' @click='delette'
                            :classe="'btn btn-danger  col-lg-5 col-sm-12 '" />













                    </div>

                </div> -->
                <div class="card  W-100 mb-4 p-4" v-if='examin == 2'>

                    <div class=" pb-2 ">
                        <div class="d-flex justify-content-between">
                            <h6 class="  ml-0 font-weight-bolder text-dark">Rapport d'examin de votre campagne SMS
                            </h6>

                        </div>
                        <p class="mb-2 ">Lisez attentivement</p>
                    </div>
                    <div class="row mb-2">
                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3  ">
                            <div class="col">Sender ID:</div>
                            <div class="col  font-weight-bolder" style='font-size: 23px'>
                                {{ ExaminerData.senderId }}
                            </div>
                        </div>
                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                            <div class="col">Nombre de contacts:</div>
                            <div class="col  font-weight-bolder" style='font-size: 23px'>
                                {{ ExaminerData.nombreContact }}
                            </div>
                        </div>


                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                            <div class="col">Contacts exceptes:</div>
                            <div class="col d-flex  font-weight-bolder" style='font-size: 23px'>
                                {{ ExaminerData.nombreExcepte }}

                            </div>
                        </div>
                        <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                            <div class="col">Destination:</div>
                            <div class="col  font-weight-bolder" style='font-size: 23px'>
                                {{ ExaminerData.route }}
                            </div>
                        </div>
                    </div>
                    <div class="row    pb-3">
                        <div class="col">
                            <div class="col">Message:</div>
                            <div class="col">

                                {{ ExaminerData.messageStart }}



                            </div>
                        </div>

                    </div>
                    <div class="hr2">


                    </div>

                    <div class="row mt-2 mb-3 " v-if="ExaminerData.remarques.length != 0 || ExaminerData.operator.length != 0">
                        <div class="col">
                            <div class="col">Remarques:</div>
                            <div class="col text-success">
                                {{ ExaminerData.operator }} {{ ExaminerData.remarques }}

                            </div>
                        </div>

                    </div>

                    <div class="row    " v-if="ExaminerData.suggestions.length != 0">
                        <div class="col">
                            <div class="col">Suggestions:</div>
                            <div class="row">
                                <div class="  col-lg-6 col-sm-12">
                                    {{ ExaminerData.suggestions }}
                                </div>

                                <div class="  col-lg-6 col-sm-12" v-if="!statusExcepte1" align='right'>


                                    <input type="checkbox" @click="addStop1" />
                                    <label>Inserer Lien STOP (Fop1ement recommander)</label>


                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="hr2 mt-3 mb-3">
                    </div>

                    <div class=" ms-1 col-lg-12 col-sm-12 mt-2 mb-1 row d-flex justify-content-between">

                        <CustomButton :title='"Re-Examiner"'
                            v-if='ExaminerData.remarques.length != 0 || ExaminerData.operator.length != 0'
                            @click='correction = true' :classe="'btn btn-primary    col-lg-3 col-sm-12 '" />

                        <CustomButton :title='"ANNULER"' @click='delette'
                            :classe="'btn btn-danger  col-lg-3 col-sm-12 '" />





                        <CustomButton :title='"ENVOYER"' :loading='laodingCreateSms' align="right"
                            @update:loading="laodingCreateSms = $event" @click='sendSms'
                            :classe="'btn btn-primary    col-lg-3 col-sm-12 '" />







                    </div>

                </div>
            </div>

        </div>

        <vue-final-modal v-model="correction" class=" " classes="modal-container0" content-class="modal-content0">

            <div class=" pb-2 ">
                <div class="d-flex justify-content-between">
                    <h6 class="  ml-0 font-weight-bolder text-dark">Corrigez rapidement votre campagne sms</h6>

                </div>
                <p class="mb-2 ">Et seduisez votre cible</p>
            </div>
            <div class="row mb-2">
                <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3  ">
                    <div class="col">Sender ID:</div>
                    <div class="col  font-weight-bolder" style='font-size: 23px'>
                        {{ ExaminerData.senderId }}
                    </div>
                </div>
                <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                    <div class="col">Nombre de contacts:</div>
                    <div class="col  font-weight-bolder" style='font-size: 23px'>
                        {{ ExaminerData.nombreContact }}
                    </div>
                </div>


                <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                    <div class="col">Contacts exceptes:</div>
                    <div class="col d-flex  font-weight-bolder" style='font-size: 23px'>
                        {{ ExaminerData.nombreExcepte }}

                    </div>
                </div>
                <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                    <div class="col">Destination:</div>
                    <div class="col  font-weight-bolder" style='font-size: 23px'>
                        {{ ExaminerData.route }}
                    </div>
                </div>
            </div>
            <div class="row    pb-3">
                <div class="col">
                    <div class="col">Visualisez le message:</div>
                    <div class="col">
                        {{ ExaminerData.messageStart }}

                    </div>
                </div>

            </div>
            <div class="hr2">


            </div>
            <div class="   mt-3   ">


                <div class="col-12">
                    <label for="nomP" class="font-weight-normal">Numero des Destinataires</label>
                    <textarea rows='6' :readonly='loadingProgress' v-model="destinataire" class="form-control"
                        @input="verifNumber" placeholder="Numero des Destinataires"></textarea>
                    <label for="nomP" class="font-weight-normal"> {{ destiText }}</label>
                </div>


                <div class="col-12  form-group  ">
                    <label for="nomP" class="font-weight-normal">Nom de l'expediteur</label>

                    <input type="textarea" :readonly='loadingProgress' v-model="senderId" class="form-control"
                        placeholder="Nom de l'expediteur" id="nomP">
                </div>



            </div>
            <div class="  mb-3    ">
                <div class=" col-12   ">
                    <label for="nomP" class="font-weight-normal">Message</label>
                    <textarea rows='6' :readonly='loadingProgress' :hint="nsms" @input="verifMessage2" v-model="sms"
                        class="form-control" placeholder="Message Entre" id="nomP"></textarea>
                    <label for="nomP" class="font-weight-normal">{{ nsms }}</label>


                </div>
            </div>
            <div class="row mb-3">



                <div class="col-12  " v-show="statusProg">
                    <label for="licence">Date d'envoie</label>
                    <VueCtkDateTimePicker :min-date="dateMin" v-model="dateChoisit" />

                </div>




            </div>
            <div class="hr2 mb-3">
            </div>

            <div class=" ms-1 col-lg-4 col-sm-12 mt-2 mb-1 row d-flex justify-content-between">

                <CustomButton :title='"RE-EXAMINER"' :loading='loadingProgress' @click="getSmsExaminer"
                    @update:loading="loadingProgress = $event" :classe="'btn btn-primary    col-lg-5 col-sm-12 '" />

                <CustomButton :title='"ANNULER"' @click='correction = !correction'
                    :classe="'btn btn-danger  col-lg-5 col-sm-12 '" />













            </div>


        </vue-final-modal>
        <ModelSmsComponent v-if="showmodel" :message0='savesms' />

        <!--   <vue-final-modal v-model="loadingProgress" class=" " classes="modal-container" content-class="modal-content">

            <span class="">{{ laodingCreateSms ? "Verification de vos contatcs" : "Envoi en cours" }} </span>
            <div class="modal__content center ">
                <i class="fa fa-spinner fa-spin"></i>
            </div>

        </vue-final-modal>
        <vue-final-modal v-model="finish" class=" " classes="modal-container" content-class="modal-content">

            <span class="text-success">Message envoye avec success</span>
            <span class=""></span>
            <ul class="list-group m-0" v-if="excepte.length != 0">
                <li class="list-group-item text-warning">Liste des numeros exceptes :</li>
                <li class="list-group-item" v-for="e in excepte" :key="e.id">{{ e }}</li>

            </ul>


        </vue-final-modal> -->


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

::v-deep .modal-container0 {
    /* display: flex; */
    justify-content: center;

    /* overflow-y: hidden; */
    /* Hide vertical scrollbar */
    /* overflow-x: hidden; */
    overflow: auto;
    width: auto;
    margin: 3rem;
    /* padding-left:auto */
}

::v-deep .modal-content0 {
    width: auto;
    /* display: flex; */
    justify-content: center;

    /* overflow-y: hidden; */
    /* Hide vertical scrollbar */
    /* overflow-x: hidden; */
    /* Hide horizontal scrollbar */

    align-items: center;
    flex-direction: column;
    height: auto;
    max-height: auto;
    margin: 0rem 1rem;
    padding: 1.8rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
}


::v-deep .modal-container {
    display: flex;
    justify-content: center;

    overflow-y: hidden;
    /* Hide vertical scrollbar */
    overflow-x: hidden;
    /* Hide horizontal scrollbar */
    align-items: center;
    width: auto;
    /* padding-left:auto */
}

::v-deep .modal-content {
    width: auto;
    display: flex;
    justify-content: center;

    overflow-y: hidden;
    /* Hide vertical scrollbar */
    overflow-x: hidden;
    /* Hide horizontal scrollbar */

    align-items: center;
    flex-direction: column;
    max-height: 90%;
    margin: 0em 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
}

.modal__content {
    /* flex-grow: 1; */
    overflow-y: hidden;
    /* Hide vertical scrollbar */
    overflow-x: hidden;
    /* Hide horizontal scrollbar */
}


.dark-mode div .modal-content {
    border-color: #2d3748;
    background-color: #1a202c;
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
import { VueFinalModal } from 'vue-final-modal'
// import { Tooltip } from "bootstrap"
import { formatDate } from '../../boot/formatDate';
import { ApiManage } from '../../boot/ApiManage';
import { FormatData } from '../../boot/FormatData';
import VueCookies from 'vue-cookies';
import CustomButton from '../../components/CustomButton.vue';
// import LoadingComponent from '../../components/LoadingComponent.vue';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import ArgonInput from "@/components/ArgonInput.vue";
import SelectComp from '../../components/SelectComp.vue';
// import Editor from '@tinymce/tinymce-vue';
export default {
    name: "NouveauSms",
    components: {
        // Datepicker
        //   Editor,
        SelectComp,
        ArgonInput,
        CustomButton, VueCtkDateTimePicker, VueFinalModal
    },
    methods: {
        async onFileChange(e) {



            var files = e.target.files || e.dataTransfer.files;
            if (files.length != 0) {
                console.log(files[0])
                this.image = files[0]
            } else {


                return;

            }
        },

    },

    setup() {
        onMounted(async () => {
            sms.value = VueCookies.get('message') ?? ""
            senderId.value = VueCookies.get('senderId') ?? ""
            await getPays();
            await getModel()
            await getConso();
            await getQteSms(); 
            await getCatPub();
            console.log('sms.value', sms.value);

            verifMessage();
            // getNbreDest();


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
        const senderId = ref('');
        const sms = ref('');
        const destiText = ref('');
        const qteSms = ref(0);

        const nbreDest = ref(0);
        const getNbreDest = () => {
            if (destinataire.value.split(';').length != 0) {
                destiText.value = ' Vous pouvez saisir  plusieurs numero en separant par des points virgules(;)';
            } else {
                destiText.value = ''
            }
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
        const conso = ref([]);
        const statusProg = ref(false);
        const loading = ref(false);
        const getConso = async () => {
            loading.value = true;
            const response = await new RequestApi().getConsommationSmsAction();


            if (response.status) {

                conso.value = response.data.map((x) => {
                    return {

                        country: x['nomPays'],
                        solde: x['nbreSms'],
                        taux: x['taux'],
                    };
                });
                loading.value = false
            }
            else {
                loading.value = false

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
        const getCatPub = async () => {
            // loadingPays.value = true;

            const response = await new RequestApi().getListCateforyPub();

            if (response.status) {
                optionsCatPub.value = response.data.map((x) => {
                    return {

                        id: x['@id'],



                        label: x.title,
                    };
                });
            } else {
                toast.error(`Une erreur est survenu lors du chargement des categories .`, {
                    // override the global option
                    position: "bottom"
                });
            }
            // loadingPays.value = false;
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
        let description = ref('')
        let excepte = ref([]);
        let loadingProgress = ref(false);
        let finish = ref(false)
        // const onSubmit = async () => {
        //     if (
        //         pays.value.id === 0 ||
        //         sms.value.length === 0 ||
        //         senderId.value.length === 0
        //     ) {
        //         toast.error(`Veuillez remplir correctement tout les champs`, {
        //             // override the global option
        //             position: "bottom"
        //         })
        //         return 0;
        //     }

        //     loadingProgress.value = true;
        //     // console.log('loadingProgress.value******************', loadingProgress.value)
        //     finish.value = false;
        //     let data = { "senderId": senderId.value, "codePhone": pays.value.codePhone, "destinataire": destinataire.value.split(';') }


        //     const response = await new RequestApi().getValidDestAction(data);
        //     if (response.status) {
        //         destinataire.value = response.destinataire
        //         excepte.value = response.excepte

        //         if (destinataire.value.length != 0) {


        //             await sendSms();
        //         } else {
        //             toast.error(`Tous vos destinataire ont exceptes ce senderId`, {
        //                 // override the global option
        //                 position: "bottom"
        //             })
        //         }
        //     }
        // }

        let savesms = ref('')
        let title = ref('')
        let showmodel = ref(false);
        const sendSms = async () => {


            let dataSms = statusProg.value
                ? {
                    keySecret: VueCookies.get('keySecret'),
                    destinataire: destinataire.value.split(';'),
                    route: pays.value.id,
                    senderId: senderId.value,
                    message: smsCorrect.value,
                    calendrier: dateChoisit.value,
                    statusSpecial: statusSpecial.value, media: statusMedia.value
                }
                : {
                    keySecret: VueCookies.get('keySecret'),
                    destinataire: destinataire.value.split(';'),
                    route: pays.value.id,
                    senderId: senderId.value,
                    message: smsCorrect.value,
                    statusSpecial: statusSpecial.value, media: statusMedia.value

                };
            savesms.value = smsCorrect.value
            laodingCreateSms.value = true;
            loadingProgress.value = false;
            console.log(dataSms);
            const response1 = await new RequestApi().newMessageAction(dataSms);

            if (response1.status) {
                if (statusMedia.value) {
                    var reqUp = await new RequestApi().upload(image.value, title.value, description.value, response1.data.id, category.value.id);
                    if (reqUp.status) {

                        nbreDest.value = 0;
                        ncreUser.value = 0;
                        finish.value = true;
                        showmodel.value = true
                        toast.success(`Message Envoye.`, {
                            // override the global option
                            position: "bottom"
                        });
                        delette();
                        VueCookies.set('message', '')
                        VueCookies.set('senderId', '')
                        verifMessage();
                        getNbreDest();
                        laodingCreateSms.value = false;

                    } else {
                        laodingCreateSms.value = false;


                        finish.value = true;
                        toast.error(`Erreur d'envoi de media.`, {
                            // override the global option
                            position: "bottom"
                        });
                    }
                }
                else {
                    showmodel.value = true
                    delette();
                    laodingCreateSms.value = false;
                    nbreDest.value = 0;
                    ncreUser.value = 0;

                    finish.value = true;
                    toast.success(`Message Envoye.`, {
                        // override the global option
                        position: "bottom"
                    });
                }
            } else {
                laodingCreateSms.value = false;
                if (response1.aff) {
                    toast.error(`Une erreur s'est produite`, {
                        // override the global option
                        position: "bottom"
                    });
                }

                finish.value = true;
                // toast.error(`Une erreur est survenu lors de l'operation.`, {
                //     // override the global option
                //     position: "bottom"
                // });


                // laodingCreateSms.value = false;
            }
            // laodingCreateSms.value = false;

        };
        let statusExcepte1 = ref(false);
        const addStop = () => {
            statusExcepte.value = !statusExcepte.value;
            statusExcepte1.value = true;
            mY();
            // verifMessage2()
            verifMessage()

        }
        const addStop1 = () => {
            statusExcepte.value = !statusExcepte.value;

            mY();
            // verifMessage2()
            verifMessage()

        }
        const addMedia = () => {
            statusMedia.value = !statusMedia.value
            // verifMessage2()

            verifMessage()
        }
        const specialCarc = () => {
            statusSpecial.value = !statusSpecial.value
            // verifMessage2()

            verifMessage()
        }
        const verifMessage = () => {
            if (med.value || st.value) {
                if (med.value) {
                    statusMedia.value = true
                    if (st.value) {
                        statusExcepte.value = true
                        smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value));

                    } else {
                        smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value)) + ((statusExcepte.value == true) ? '\n' + new ApiManage().textExcepte : '');

                    }
                } if (st.value) {
                    statusExcepte.value = true
                    if (med.value) {
                        statusMedia.value = true
                        smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value));

                    } else {
                        smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value)) + ((statusMedia.value == true) ? ' ' + new ApiManage().pub : '');

                    }
                }
            }
            else {

                smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value)) + ((statusMedia.value == true) ? ' ' + new ApiManage().pub : '') + ((statusExcepte.value == true) ? '\n' + new ApiManage().textExcepte : '');

            } let ncara2 = ref(0);
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
            // console.log('****', smsCorrect.value);
        }; const verifMessage2 = () => {

            // smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value)) + ((statusMedia.value == true) ? ' ' + new ApiManage().pub : '') + ((statusExcepte.value == true) ? '\n' + new ApiManage().textExcepte : '');
            if (med.value || st.value) {
                if (med.value) {
                    statusMedia.value = true
                    if (st.value) {
                        statusExcepte.value = true
                        smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value));

                    } else {
                        smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value)) + ((statusExcepte.value == true) ? '\n' + new ApiManage().textExcepte : '');

                    }
                } if (st.value) {
                    statusExcepte.value = true
                    if (med.value) {
                        statusMedia.value = true
                        smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value));

                    } else {
                        smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value)) + ((statusMedia.value == true) ? ' ' + new ApiManage().pub : '');

                    }
                }
            }
            else {

                smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value)) + ((statusMedia.value == true) ? ' ' + new ApiManage().pub : '') + ((statusExcepte.value == true) ? '\n' + new ApiManage().textExcepte : '');

            } let ncara2 = ref(0);
            ncara2.value = sms.value.split('').length;
            ncara.value = smsCorrect.value.split('').length;
            nsmsc.value = new FormatData().getNumberOfSMSsegments(smsCorrect.value)
                .toString()
                .concat(' Message(s) pour ')
                .concat(smsCorrect.value.split('').length.toString())
                .concat(' Caractere(s)');
        };
        const verifNumber = () => {
            destinataire.value = new FormatData().verifNumber(destinataire.value)

            let taille = destinataire.value.split('').length;
            ncreUser.value = nbreDest.value * new FormatData().getNumberOfSMSsegments(sms.value);

            for (var i = 0; i < taille; i++) {


                if (
                    Number.isInteger(parseInt(destinataire.value[i])) ||
                    destinataire.value[i] == ';'
                ) {
                    // console.log('pas modif', typeof parseInt(destinataire.value[i]));
                } else {
                    // console.log('modifi', 'number');

                    destinataire.value = destinataire.value.replace(
                        destinataire.value[i],
                        ''
                    );
                }
            }
            getNbreDest();
            ncara.value = sms.value.split('').length;
            ncreUser.value = nbreDest.value * Math.ceil(ncara.value / 159);

        };
        let file = ref(null)
        const selectedFile = (event) => {
            file.value = event.target.files[0]

        };
        let statusExcepte = ref(false);
        const delette = () => {
                                 ncreUser.value = 0;
            sms.value = '';
            // dateChoisit.value = null;
            image.value = null;
            title.value = '';
            description.value = null;
            destinataire.value = '';
            statusProg.value = false;
            statusExcepte1.value = false;
            statusMedia.value = false;
            senderId.value = '';
            examin.value = 0;
            correction.value = false;
            smsCorrect.value = '';
            pays.value = { id: 0, label: 'Aucun' };
        };
        let image = ref(null);
        let examin = ref(0);
        let correction = ref(false);

        let ExaminerData = ref([]);
        // let ExaminerData = ref({

        //     "senderId": "Devoo",
        //     "message": [
        //         {
        //             "text": "imbecile",
        //             "status": false
        //         },
        //         {
        //             "text": "Bonjur",
        //             "status": true
        //         },
        //         {
        //             "text": "idiot",
        //             "status": false
        //         }
        //     ],
        //     "messageStart": "imbecile Bonjur idiot",
        //     "destinataires": [
        //         {
        //             "phone": "690863838",
        //             "status": false
        //         },
        //         {
        //             "phone": "65622075",
        //             "status": true
        //         },
        //         {
        //             "phone": "66525455",
        //             "status": true
        //         }
        //     ],
        //     "route": "CAMEROUN",
        //     "nombreContact": 3,
        //     "nombreExcepte": 1,
        //     "remarques": "Aucune",
        //     "suggestions": "Aucune"

        // })

        async function getSmsExaminer() {
            if (statusProg.value) {
                if (new Date(dateChoisit.value).getTime() < new Date().getTime()) {
                    toast.error(`Veuillez entrer une date d'envoie correcte.`, {
                        // override the global option
                        position: "bottom"
                    });
                    return false;
                }
            }

            if (senderId.value.length == 0) {
                toast.error(`Veuillez remplir le champ senderID.`, {
                    // override the global option
                    position: "bottom"
                });
                return false;
            }

            if (senderId.value.length > 12) {
                toast.error(`SenderId trop long, utilisez au maximum 12 caracteres.`, {
                    // override the global option
                    position: "bottom"
                });
                return false;
            }

            if (smsCorrect.value.length == 0) {
                toast.error(`Veuillez entrer un message.`, {
                    // override the global option
                    position: "bottom"

                });

                return false;
            } if (pays.value.id == 0) {
                toast.error(`Veuillez choisir une destination .`, {
                    // override the global option
                    position: "bottom"

                });

                return false;
            }
            if (destinataire.value.length == 0) {
                toast.error(`Veuillez entrer les numeros de vos destinataires.`, {
                    // override the global option
                    position: "bottom"

                });

                return false;
            }
            // verifMessage2()
            let data = {
                "senderId": senderId.value,
                "destinataire": destinataire.value.split(';'),
                "message": smsCorrect.value,
                "idRoute": pays.value.id,
                'mediatise': statusMedia.value,
                'statusSpecial': statusSpecial.value

            };

            loadingProgress.value = true;
            const response = await new RequestApi().ExaminerInfoSms(data);


            if (response.status) {
                ExaminerData.value = response.data;
                console.log(ExaminerData.value)
                if (ExaminerData.value.correct && !ExaminerData.value.senderIdExcepte) {
                    examin.value = 2;
                    correction.value = false;
                }
                else {
                    correction.value = false;
                    examin.value = 1;

                }

                loadingProgress.value = false;

            } else {
                loadingProgress.value = false;


                toast.error(`Une erreur est survenu lors de l'operation.`, {
                    // override the global option
                    position: "bottom"
                });


                // laodingCreateSms.value = false;
            }


        }
        const date = new Date();

        date.setDate(date.getDate() - 1);
        const dateMin = ref(date)
            ;
        console.log(dateMin.value)
        let as = () => {
            // let tiny = document.getElementById('d1');
            console.log('sassaas', description.value)
        }
        let ae = '';
        let mod = ref('');
        let lModelSms = ref([])

        async function getModel() {
            const response = await new RequestApi().getModelAction();
            if (response.status) {

                lModelSms.value = response.data;


            }
            else {
                loading.value = false;

                if (response.aff) {
                    toast.error(`Une erreur s'est produite`, {
                        // override the global option
                        position: "bottom"
                    });
                }
            }
        }

        let med = ref(false);
        let st = ref(false);
        function selectModel() {
            statusExcepte.value = false;

            console.log(mod.value, 'mod.value')

            sms.value = mod.value;
            mY();
            verifMessage();
            console.log(mod.value, sms.value)
        } function mY() {

            if (sms.value.includes(new ApiManage().textExcepte)) {
                st.value = true;
                med.value = false;
            }

            else {
                st.value = false;
                med.value = false;
            }

        }
        return {
            selectModel, lModelSms, mod, dateMin, as, ae,
            examin, correction, getSmsExaminer, ExaminerData, verifMessage2, sendSms,
            loadingProgress, specialCarc,
            showMenuU: false,
            show: ref(false),
            tinyKey: 'm6yavinfzfbyst94a2pcwfod9i5v0893zk4wibpuyx3z3w4z',
            finish,
            selectedFile,
            statusSpecial, excepte,
            optionsCatPub, category,
            image,
            optionsPays,
            search,
            sms,
            getPays,
            senderId,
            smsCorrect,
            destinataire,
            statusProg, description,
            verifMessage,
            verifNumber,
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
            nsms, savesms,
            ncara, title,
            laodingCreateSms,
            nsmsc, statusMedia, statusExcepte, statusExcepte1, addStop, addMedia, loading, conso, destiText, addStop1, showmodel
        };
    },
}
</script>
