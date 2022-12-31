<template>
    <div class="py-4 container-fluid">
        <div class=" row">
            <div class="col-12">
                <div class="card w-100 mb-4" v-if='examin == 0'>
                    <div class="card-body">
                        <div class="part1">
                            <h4 class="card-title font-weight-bolder dark text-mobile">Sms de groupe</h4>
                            <p class="card-text border-bottom text-mobile2 ">Creer un sms pour les membres de vos
                                groupes.</p>
                            <div class="card  bg-primary ">

                                <div class="row ms-1 me-1  pb-2 pt-2" role="alert">

                                    <div class="col-xs-12 col-sm-12 col-sm-12 col-lg-3    ">
                                        <div class="text-white">Credit Restant : {{ qteSms }}<i
                                                class="ni ni-money-coins ms-2  " @mouseover="show = true"
                                                @mouseout="show = false"></i>
                                            <nav v-if="show"
                                                class="bg-grey-2 navbar navbar-expand-lg c position-absolute   blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow radius">
                                                <div class="container ">

                                                    <div class="collapse navbar-collapse" id="navigation">
                                                        <div class="  d-flex align-items-center justify-content-center mt-3 mb-3 ms-3 me-5"
                                                            v-if="loadingConso">

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
                                    <div class="col-xs-12 col-sm-12 col-sm-12 col-lg-3    ">
                                        <div class="text-white">Credit A utiliser : {{ ncreUser }}

                                        </div>
                                    </div>


                                    <div class="col-xs-12 col-sm-12 col-sm-12 col-lg-3 ">

                                        <div class="text-white">Nombre Destinataires : {{ nbreDest }}</div>


                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-sm-12 col-lg-3    ">
                                        <div class="text-white"> Date : {{ dateCourante }}</div>

                                    </div>

                                </div>




                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-sm-12 form-group">

                                    <label for="licence" class="font-weight-normal">Groupe</label>
                                    <!-- <select id="licence" v-model="groupe" @change="getContactForGroup(groupe.id)"
                                        class="form-control form-select">
                                        <option disabled selected default>
                                            Selectionner le groupe
                                        </option>

                                        <option v-for="option in listGroupe" :value="option" :key="option.id">
                                            {{ option.nom }}
                                        </option>
                                    </select> -->
                                    <SelectComp v-model="groupe" :readonly='loadingProgress' :data="listGroupe" type='1'
                                        @focusout="getContactForGroup(groupe.id)"
                                        placeholder=' Selectionner le groupe' />

                                </div>
                                <div class="col-lg-6 col-sm-12 form-group  ">
                                    <label for="nomP" class="font-weight-normal">Numero des Destinataires</label>
                                    <textarea readonly v-model="destinataire" class="form-control" @input="verifNumber"
                                        placeholder="Numero des Destinataires"></textarea>

                                </div>

                            </div>
                            <div class="row">

                                <div class="col-lg-6 col-sm-12  form-group  ">
                                    <label for="nomP" class="font-weight-normal">Nom de l'expediteur</label>

                                    <input type="textarea" :readonly='loadingProgress' v-model="senderId"
                                        class="form-control" placeholder="Nom de l'expediteur" id="nomP">
                                </div>


                                <div class="col-lg-6 col-sm-12 form-group">

                                    <!-- <label for="licence" class="font-weight-normal">Pays</label> -->
                                    <!--     <select id="licence" v-model="pays" class="form-control form-select">

                                        <option disabled selected default>
                                            Selectionner le pays
                                        </option>
                                        <option v-for="option in optionsPays" :value="option" :key="option.id">
                                            {{ option.label }}
                                        </option>
                                    </select> -->
                                    <!-- 

                                    <SelectComp v-model="pays" :data="optionsPays"
                                        placeholder="  Selectionner le pays" /> -->
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
                                    <label for="nomP" class="font-weight-normal">Message</label>
                                    <textarea rows='6' :readonly='loadingProgress' :hint="nsms" @input="verifMessage"
                                        v-model="sms" class="form-control" placeholder="Message Entre"
                                        id="nomP"></textarea>
                                    <label for="nomP" class="font-weight-normal">{{ (sms.length != 0) ? nsms : `Ecrivez
                                        un
                                        mots ici` }}</label>


                                </div>

                                <div class="col-lg-6 col-sm-12   form-group  ">
                                    <label for="nomP" class="font-weight-normal">Visualiser le Message</label>
                                    <textarea rows='6' readonly v-model="smsCorrect" class="form-control"
                                        placeholder="Message Correct envoye" id="nomP"></textarea>
                                    <label for="nomP" class="font-weight-normal">{{ (smsCorrect.length != 0) ?
        nsmsc : ` `
}}</label>


                                </div>





                            </div>
                            <div class="row mt-0">

                                <div class="col-lg-6 col-sm-12  ">

                                    <input :readonly='loadingProgress' type="checkbox"
                                        @click="statusProg = !statusProg" />
                                    <label class="font-weight-normal">Programmer le Message</label>

                                </div>
                                <div class="col-lg-6 col-sm-12  ">

                                    <input :readonly='loadingProgress' type="checkbox" v-model='statusExcepte'
                                        @click="addStop" />
                                    <label class="font-weight-normal">Lien STOP</label>

                                </div>
                                <div class="col-lg-6 col-sm-12  ">

                                    <VueCtkDateTimePicker :min-date="dateMin" v-model="dateChoisit"
                                        v-show="statusProg" />

                                </div>




                            </div>

                            <div class="row mt-0">

                                <div class="col-lg-6 col-sm-12  ">

                                    <input :readonly='loadingProgress' type="checkbox" @click="addMedia" />
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

                                    <label for="licence" class="font-weight-normal">Categorie</label>
                                    <!-- <select id="licence" v-model="category" class="form-control form-select">
                                        <option disabled selected default>
                                            Selectionner une categorie
                                        </option>
                                        <option v-for="categori in optionsCatPub" :value="categori" :key="categori.id">
                                            {{ categori.label }}
                                        </option>
                                    </select> -->

                                    <SelectComp v-model="category" :data="optionsCatPub"
                                        placeholder='Selectionner type vitrine' />

                                </div>

                                <div class="col-lg-6 col-sm-12  ">
                                    <label class="font-weight-normal">Inserer image publicitaire</label>
                                    <argon-input :readonly='loadingProgress' icon="../assets/img/team-2.jpg" type="file"
                                        placeholder="Description" aria-label="Name" accept=".png, .jpeg,.jpg"
                                        @change="onFileChange" />



                                </div>

                                <div class="col-lg-12 col-sm-12 mb-2 ">

                                    <label for="nomP" class="font-weight-normal">Description de votre media</label>


                                    <!-- <textarea type="text" rows='6' v-model="description" class="form-control"
                                        placeholder="Entrer une description  " id="nomP"></textarea> -->

                                    <tinymce id="d1" :apiKey="tinyKey" :init="{
    plugins: 'lists link image table code help wordcount'
}" v-model="description"> </tinymce>
                                </div>




                            </div>
                            <div class="row mt-0">







                            </div>
                            <div class="row ms-1  me-1">

                                <div class="col-lg-6 col-sm-12 form-group  ">
                                    <div class="row d-flex justify-content-between">

                                        <CustomButton :title='"Valider"' :loading='loadingProgress'
                                            @update:loading="loadingProgress = $event" @click='getSmsExaminer'
                                            :classe="'btn btn-primary    col-lg-5 col-sm-12 '" />

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
                    <div class="row mb-3 mt-3" v-if="ExaminerData.message.length != 0  ">
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


                    <div class="row  mb-3  " v-if="ExaminerData.destinataires.length != 0  "> 
                        <div class="col">
                            <div class="col">Numero interdits:</div>
                            <div class="col  flex-n">

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
                    <div class="row  mb-3 "  v-if="ExaminerData.remarques.length != 0 || ExaminerData.operator.length != 0">
                        <div class="col">
                            <div class="col">Remarques:</div>
                            <div class="col text-danger">
                                {{ ExaminerData.operator }} {{ ExaminerData.remarques }}


                            </div>
                        </div>

                    </div>
                    <div class="row   mb-2" v-if="ExaminerData.suggestions.length != 0  ">
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

                    <div class="row mt-2 mb-3 "  v-if="ExaminerData.remarques.length != 0 || ExaminerData.operator.length != 0">
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
                                    <label>Inserer Lien STOP (Fortement recommander)</label>


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


                <div class="col-12 row">

                    <div class="col-lg-6 col-sm-12 form-group">

                        <label for="licence" class="font-weight-normal">Groupe</label>
                        <!-- <select id="licence" v-model="groupe" @change="getContactForGroup(groupe.id)"
                                        class="form-control form-select">
                                        <option disabled selected default>
                                            Selectionner le groupe
                                        </option>

                                        <option v-for="option in listGroupe" :value="option" :key="option.id">
                                            {{ option.nom }}
                                        </option>
                                    </select> -->
                        <SelectComp v-model="groupe" :readonly='loadingProgress' :data="listGroupe" type='1'
                            @focusout="getContactForGroup(groupe.id)" placeholder=' Selectionner le groupe' />

                    </div>
                    <div class="col-lg-6 col-sm-12 form-group  ">
                        <label for="nomP" class="font-weight-normal">Numero des Destinataires</label>
                        <textarea readonly v-model="destinataire" class="form-control" @input="verifNumber"
                            placeholder="Numero des Destinataires"></textarea>

                    </div>

                </div>
                <div class="col-12  form-group  ">
                    <label for="nomP" class="font-weight-normal">Nom de l'expediteur</label>

                    <input type="textarea" :readonly='loadingProgress' v-model="senderId" class="form-control"
                        placeholder="Nom de l'expediteur" id="nomP">
                </div>




            </div>
            <div class="  mb-3    ">
                <div class=" col-12   ">
                    <label for="nomP">Message</label>
                    <textarea :hint="nsms" @input="verifMessage2" v-model="sms" class="form-control"
                        placeholder="Message Entre" id="nomP"></textarea>
                    <label for="nomP">{{ nsms }}</label>


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
<vue-final-modal :click-to-close="false" v-model="loadingContact" class=" " classes="modal-container"
    content-class="modal-content">


    <div class="border-bottom pb-2  center ">
        <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

    </div>

</vue-final-modal>
        <ModelSmsComponent v-if="showmodel" :message0='savesms' />


        <!-- <vue-final-modal v-model="loadingProgress" class=" " classes="modal-container" content-class="modal-content">

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
.sty {
    display: flex;

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
::v-deep .modal-container0 {
    /* display: flex; */
    justify-content: center;

    /* overflow-y: hidden; */
    /* Hide vertical scrollbar */
    /* overflow-x: hidden; */

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
// import LoadingComponent from '../../components/LoadingComponent.vue';
import { ApiManage } from '../../boot/ApiManage';
import { VueFinalModal } from 'vue-final-modal'
import ArgonInput from "@/components/ArgonInput.vue";

import { formatDate } from '../../boot/formatDate';
import { FormatData } from '../../boot/FormatData';
import VueCookies from 'vue-cookies';
import CustomButton from '../../components/CustomButton.vue';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import SelectComp from '../../components/SelectComp.vue';

// import { BIcon } from 'bootstrap-vue' 
export default {
    name: "NouveauSms",
    components: {
        // Datepicker 
        SelectComp,
        ArgonInput,
        CustomButton, VueCtkDateTimePicker, VueFinalModal,
    },

    methods: {
        async onFileChange(e) {

            console.log('cdsdsv.value*****')

            var files = e.target.files || e.dataTransfer.files;
            if (files.length != 0) {
                console.log(files[0])
                this.image = files[0]
            } else {


                return;

            }
        }
    },
    setup() {
        onMounted(async () => {
            await getPays(); await getModel();
            await getConso();
            await getQteSms();
            await getGroupe();

            await getCatPub();

        });
        let nsms = ref('');
        let nsmsc = ref('');
        let ncara = ref(0);
        let ncreUser = ref(0);

        const search = ref('');
        const loadingPays = ref(false);
        let laodingCreateSms = ref(false);
        let toast = createToaster();

        const dateChoisit = ref(new Date());

        const dateCourante = formatDate(new Date(), 0);
        const destinataire = ref('');
        const pays = ref({ id: 0, label: 'Aucun', });
        const senderId = ref('');
        const sms = ref('');
        const qteSms = ref(0);
        let groupe = ref({ id: 0, label: 'Aucun' });
        const nbreDest = ref(0);

        const smsCorrect = ref('');
        const optionsPays = ref([{ id: 0, label: 'Aucun' }]);
        //const route = ref('');
        const statusProg = ref(false);

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
        let statusExcepte = ref(false);
        let statusExcepte1 = ref(false);

        const statusMedia = ref(false);
        const statusSpecial = ref(false);
        const addStop = () => {

            statusExcepte.value = !statusExcepte.value;
            statusExcepte1.value = true
            mY();
            verifMessage()
        }
        const addStop1 = () => {
            statusExcepte.value = !statusExcepte.value;

            verifMessage()
        }
        const addMedia = () => {
            statusMedia.value = !statusMedia.value

            verifMessage()
        }
        const specialCarc = () => {
            statusSpecial.value = !statusSpecial.value

            verifMessage()
        }
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
        //     console.log('loadingProgress.value******************', loadingProgress.value)
        //     finish.value = false;
        //     let data = { "senderId": senderId.value, "codePhone": pays.value.codePhone, "destinataire": destinataire.value }

        //     console.log(data)
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
        const conso = ref([]);
        let loadingConso = ref(false);
        const getConso = async () => {
            loadingConso.value = true;
            const response = await new RequestApi().getConsommationSmsAction();


            if (response.status) {

                conso.value = response.data.map((x) => {
                    return {

                        country: x['nomPays'],
                        solde: x['nbreSms'],
                        taux: x['taux'],
                    };
                });
                loadingConso.value = false
            }
            else {
                loadingConso.value = false

            }
        }
        let image = ref();
        let title = ref('')
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
        let savesms = ref('')
        let showmodel = ref(false);

        const sendSms = async () => {
            if (
                pays.value.id === 0 ||
                sms.value.length === 0 ||
                senderId.value.length === 0
            ) {
                toast.error(`Veuillez remplir correctement tout les champs`, {
                    // override the global option
                    position: "bottom"
                })
                return 0;
            }

            let dataSms = statusProg.value
                ? {
                    keySecret: VueCookies.get('keySecret'),
                    groupeContact: groupe.value.id,
                    route: pays.value.id,
                    senderId: senderId.value,
                    message: smsCorrect.value,
                    calendrier: dateChoisit.value,
                    statusSpecial: statusSpecial.value,
                    media: statusMedia.value

                }
                : {
                    keySecret: VueCookies.get('keySecret'),
                    groupeContact: groupe.value.id,
                    route: pays.value.id,
                    senderId: senderId.value,
                    message: smsCorrect.value,
                    statusSpecial: statusSpecial.value,
                    media: statusMedia.value

                };

            savesms.value = smsCorrect.value

            laodingCreateSms.value = true;
            loadingProgress.value = false;
            const response1 = await new RequestApi().newMessageAction(dataSms);

            if (response1.status) {
                if (statusMedia.value) {
                    console.log(image.value);
                    var reqUp = await new RequestApi().upload(image.value, title.value, description.value, response1.data.id, category.value.id);
                    if (reqUp.status) {
                        laodingCreateSms.value = false;
                        loadingProgress.value = false;
                        finish.value = true;
                        showmodel.value = true
                        nbreDest.value = 0;
                        ncreUser.value = 0;
                        toast.success(`Message Envoye.`, {
                            // override the global option
                            position: "bottom"
                        });
                        delette();
                        VueCookies.set('message', '')
                        VueCookies.set('senderId', '')
                        verifMessage();

                    } else {
                        laodingCreateSms.value = false;
                        loadingProgress.value = false;
                        finish.value = true;
                        toast.error(`Erreur d'envoi de media.`, {
                            // override the global option
                            position: "bottom"
                        });
                    }
                }
                else {
                    showmodel.value = true
                    delette(); nbreDest.value = 0;
                    ncreUser.value = 0;
                    laodingCreateSms.value = false;
                    loadingProgress.value = false;
                    finish.value = true;
                    toast.success(`Message Envoye.`, {
                        // override the global option
                        position: "bottom"
                    });
                }
            } else {
                laodingCreateSms.value = false;
                loadingProgress.value = false;
                finish.value = true;
                if (response1.aff) {
                    toast.error(`Une erreur s'est produite`, {
                        // override the global option
                        position: "bottom"
                    });
                }



                // laodingCreateSms.value = false;
            }

        };

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

            nsms.value = new FormatData().getNumberOfSMSsegments(sms.value)/* )Math.ceil(ncara2.value / (statusSpecial.value ? 70 : 159))*/
                .toString()
                .concat(' Message(s) pour ')
                .concat(ncara2.value.toString())
                .concat(' Caractere(s)');

            ncreUser.value = nbreDest.value * Math.ceil(ncara.value / (statusSpecial.value ? 70 : 159));
            nsmsc.value = new FormatData().getNumberOfSMSsegments(smsCorrect.value) //Math.ceil(smsCorrect.value.split('').length / (statusSpecial.value ? 70 : 159))
                .toString()
                .concat(' Message(s) pour ')
                .concat(smsCorrect.value.split('').length.toString())
                .concat(' Caractere(s)');
            console.log('****', smsCorrect.value);
        };
        /*  const verifMessage2 = () => {
 
             smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value)) + ((statusMedia.value == true) ? '\n' + new ApiManage().pub : '') + ((statusExcepte.value == true) ? '\n' + new ApiManage().textExcepte : '');
             let ncara2 = ref(0);
             ncara2.value = sms.value.split('').length;
             ncara.value = smsCorrect.value.split('').length;
 
             nsms.value = Math.ceil(ncara2.value / (statusSpecial.value ? 70 : 159))
                 .toString()
                 .concat(' Message(s) pour ')
                 .concat(ncara2.value.toString())
                 .concat(' Caractere(s)');
 
             ncreUser.value = nbreDest.value * Math.ceil(ncara.value / (statusSpecial.value ? 70 : 159));
             nsmsc.value = Math.ceil(smsCorrect.value.split('').length / (statusSpecial.value ? 70 : 159))
                 .toString()
                 .concat(' Message(s) pour ')
                 .concat(smsCorrect.value.split('').length.toString())
                 .concat(' Caractere(s)');
             // console.log('****', smsCorrect.value);
         }; */
        const verifMessage2 = () => {

            smsCorrect.value = (statusSpecial.value ? sms.value : new FormatData().correctVerifMessage(sms.value)) + ((statusMedia.value == true) ? ' ' + new ApiManage().pub : '') + ((statusExcepte.value == true) ? '\n' + new ApiManage().textExcepte : '');
            let ncara2 = ref(0);
            ncara2.value = sms.value.split('').length;
            ncara.value = smsCorrect.value.split('').length;
            nsmsc.value = new FormatData().getNumberOfSMSsegments(smsCorrect.value)
                .toString()
                .concat(' Message(s) pour ')
                .concat(smsCorrect.value.split('').length.toString())
                .concat(' Caractere(s)');
        };
        const delette = () => {
            sms.value = '';
            dateChoisit.value = null;
            image.value = null;
            category.value = null;
            title.value = '';
            description.value = null; nbreDest.value = 0;
            ncreUser.value = 0;
            groupe.value = '';
            statusProg.value = false;
            statusMedia.value = false;
            statusExcepte1.value = false;
            senderId.value = '';
            smsCorrect.value = ''; examin.value = 0;
            correction.value = false;
            pays.value = { id: 0, label: 'Aucun', };
        };

        let listGroupe = ref([]);
        let loadingGroupes = ref(false);
        const getGroupe = async () => {
            loadingGroupes.value = true;
            listGroupe.value.pop();


            const response = await new RequestApi().getListGroupeUser();

            if (response.status) {

                listGroupe.value = response.data;


            } else {
                toast.error(`Erreur lors du chargement des groupes.`, {
                    // override the global option
                    position: "bottom"
                });
            }
            loadingGroupes.value = false;


        }; 
        let       loadingContact  = ref(false);
 
        const getContactForGroup = async (idGroupe) => {
          
            if (idGroupe != 0) {
                loadingContact.value = true;
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
                    loadingContact.value = false;

                    console.log('voici .....', destinataire.value); nbreDest.value = destinataire.value.length;

                } else {
                    loadingContact.value = false;

                    toast.error(`Erreur lors du chargement des contacts du groupes`, {
                        // override the global option
                        position: "bottom"
                    });
                }
            }
            loadingContact.value = false;
        };
        const optionsCatPub = ref([{ id: 0, label: 'Aucun' }]);
        const category = ref({ id: 0, label: 'Aucun' });
        let examin = ref(0);
        let correction = ref(false);

        let ExaminerData = ref([]);

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
            } if (smsCorrect.value.length == 0) {
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
                toast.error(`Veuillez choisir un groupe de contact.`, {
                    // override the global option
                    position: "bottom"

                });

                return false;
            }

            verifMessage2()
            let data = {
                "senderId": senderId.value,
                "destinataire": destinataire.value,
                "message": smsCorrect.value,
                "idRoute": pays.value.id,

                'mediatise': statusMedia.value,
                'statusSpecial': statusSpecial.value


            };
            console.log(data)
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
        let mod = ref('');
        let lModelSms = ref([])

        async function getModel() {
            const response = await new RequestApi().getModelAction();
            if (response.status) {

                lModelSms.value = response.data;


            }
            else {


                if (response.aff) {
                    toast.error(`Une erreur s'est produite`, {
                        // override the global option
                        position: "bottom"
                    });
                }
            }
        } let med = ref(false);
        let st = ref(false);
        function selectModel() {
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
            selectModel, lModelSms, mod,
            dateMin,
            examin, correction, getSmsExaminer, ExaminerData, verifMessage2, sendSms,
            showMenuU: false, loadingConso, conso,
            show: ref(false), savesms, showmodel,
            tinyKey: 'm6yavinfzfbyst94a2pcwfod9i5v0893zk4wibpuyx3z3w4z',
            optionsCatPub, category, statusSpecial, image,
            addStop, addMedia, specialCarc, title, description, loadingProgress, excepte, finish,
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
            statusMedia,
            ncreUser,
            delette,
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
            nsmsc, statusExcepte1, addStop1, loadingContact
        };
    },
}
</script>
