<template>
  <div class="py-4 container-fluid " style="border: none;">
    <div class=" row">
      <div class="col-12">
        <div class="" style="border: none;">





          <div class="  " style="border: none;">


            <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">


              <div class="card ps-3 pe-3  mb-lg-0 mb-4 " v-if='!CONFIG'>

                <div class="p-2 pb-2 border-bottom">
                  <div class="d-flex justify-content-between">
                    <h4 class="mb-1 ml-0 mt-2 font-weight-bolder  text-mobile text-dark">Liste de vos Vitrines</h4>
                  </div>
                  <h6 class="text-mobile2">Parcourez et modifiez vos vitrines</h6>
                </div>

                <div class="table-responsive trx mt-1">
                  <div class="  d-flex justify-content-center pb-3" v-if="loading0">

                    <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                  </div>
                  <table class="table  " style="  overflow-y: hidden;overflow-x: hidden;" v-else>
                    <tbody>

                      <div class="  d-flex justify-content-center pb-3" v-if="Vitrine.length == 0">

                        Vide

                      </div>
                      <tr v-for="(v, index)  in Vitrine" v-show="start <= index && index < final" :key="v"
                        :class="this.$store.state.darkMode ? 'mouseA' : 'mouseB'">
                        <td class="">
                          <div>

                            <div class="">
                              <p class="mb-0 ml-2 text-xs ">Titre :</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ parse(v.title) }}</h6>
                            </div>
                          </div>
                        </td>
                        <td class="mobile">
                          <div>

                            <div class=" col2 ">
                              <p class="mb-0 ml-2 text-xs ">Description :</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark message">{{ parse(v.description)
                              }}</h6>
                            </div>
                          </div>
                        </td>

                        <td class="">
                          <div>

                            <div class="">
                              <p class="mb-0 ml-2 text-xs ">Propriétaire :</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ v.proprietaire }}</h6>
                            </div>
                          </div>
                        </td>
                        <td class="mobile">
                          <div>

                            <div class="">
                              <p class="mb-0 ml-2 text-xs ">Etat :</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ v.status }}</h6>
                            </div>
                          </div>
                        </td>
                        <td class="">
                          <div>

                            <div class="">
                              <p class="mb-0 ml-2 text-xs ">Url vitrine :</p>
                              <a class="mb-0 ml-2 text-sm font-weight-bolder  mouse" target='_blank' :href="v.url">{{
                                  v.url
                              }}</a>
                            </div>
                          </div>
                        </td>
                        <td class="mobile">
                          <div>

                            <div class="">
                              <p class="mb-0 ml-2 text-xs ">Type de vitrine :</p>
                              <h6 class="mb-0 ml-2 text-sm font-weight-bolder ">{{
                                  (v.typeVitrine == 1 ? "Vitrine Standard" : "Vitrine Sms")
                              }}</h6>
                            </div>
                          </div>
                        </td>
                        <td class='mobile'>
                          <div class="">
                            <p class="mb-0 text-xs ">Date de Création :</p>
                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ v.date }} </h6>
                          </div>
                        </td>


                        <td class="text-left mouse mobile" align='right' v-if='updateVitrine'>
                          <div class="text-left col">
                            <Popper class="theme" placement="left">
                              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                              <template #content>
                                <div class="  d-flex justify-content-center  " v-if="loadingAction">

                                  <i class="fa fa-spinner fa-spin" style="  font-size:50px; "></i>

                                </div>
                                <div class="mouse" v-if="!loadingAction">Achetez nom de domaine pro</div>
                                <div class="mouse" v-if="!loadingAction" @click="selectVitrine(v)">Managez votre site
                                  web</div>
                                <div class="mouse" v-if="!loadingAction" @click="stateVitrine(v)"> {{ v.status
                                    == 'Active' ? "Desactiver" : "Active"
                                }} cette
                                  vitrine</div>
                                <div class="mouse" v-if="!loadingAction && supprimerV" @click="deletteVitrine(v)">
                                  Supprimez cette
                                  vitrine</div>

                              </template>
                            </Popper>


                          </div>
                        </td>
                      </tr>
                    </tbody>

                  </table>


                </div>
                <div class='card-footer' v-if='(Vitrine.length > 10)' align='right'>
                  <div class="row   col-lg-1 col-md-4 col-xl-5 col-sm-5"
                    :class="this.$store.state.darkMode ? 'bg-default' : ''">
                    <div class="  mouseY">
                      <i @click="next" v-if='(final < Vitrine.length)' class="mouseY 	fa fa-angle-right"
                        style="font-size:36px; float:right"></i>
                      <select id="select_id" @change="changeVal($event)" style=' float:right'
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
                      <i class="mouseY	fa fa-angle-left" @click="prev" style="font-size:36px; "></i>
                    </div>

                  </div>
                </div>
              </div>
              <div class="  " v-else>



                <div v-if="typeVitrine == 1">

                  <div class="card w-100 mb-4">
                    <div class="card-body">
                      <div class="part1">
                        <div class='row d-flex justify-content-between border-bottom'>

                          <div class='col'>
                            <h4 class="card-title font-weight-bolder dark text-mobile">Personnalisez votre site web</h4>
                            <p class="card-text ">Modifier vos informations.</p>
                          </div>
                          <div class='col text-primary' align='right'>
                            <p highlight @click="CONFIG = false; " class="align-baseline mouse">
                              Retour
                            </p>
                          </div>


                        </div>


                        <div class="row">
                          <div class="col-lg-4 col-sm-12 form-group">

                            <label class="font-weight-normal" for="inputCity">Beneficiere</label>
                            <input type="text" readonly :value='vitrineS.Propriétaire' class="form-control  "
                              placeholder="100Web" id="nomP">

                          </div>
                          <div class="col-lg-4 col-sm-12 form-group">

                            <label class="font-weight-normal" for="licence"> Titre de votre Vitrine</label>
                            <input type="text" v-model="nom" @focusout='upDateND' class="form-control  "
                              placeholder="100Web" id="nomP">
                          </div>


                          <div class="col-lg-4 col-sm-12  form-group  ">

                            <label class="font-weight-normal" for="licence">Url</label>
                            <input type="text" @click='view = true' readonly :value='vitrineS.url'
                              class="form-control  " id="nomP">

                          </div>

                          <!-- <div class="col-lg-12 col-sm-12  form-group  ">
                                                        <label  class="font-weight-normal" for="nomP">Description de la vitrine</label>
                    
                                                        <textarea rows="4" type="text" v-model="description" class="form-control"
                                                            placeholder="Entrer une description a votre vitrine" id="nomP"></textarea>
                                                    </div> -->



                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-sm-12 form-group">
                            <label class="font-weight-normal" for="nomP">Numero de téléphone</label>
                            <MazPhoneNumberInput Auto-detect @focusout="updateContenu(15)" size="sm" :translations="{
                              countrySelector: {
                                placeholder: 'code',
                                error: 'Veuillez renseigner le code du pays',
                              },
                              phoneInput: {
                                placeholder: 'Phone number',
                                example: 'Ex:',
                              },
                            }" show-code-on-list :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
                              :ignored-countries="['AC']" @update="results = $event" :success="results?.isValid" />

                          </div>
                          <div class="col-lg-3 col-sm-12 form-group">
                            <label class="font-weight-normal" for="nomP">Numero de téléphone 2</label>
                            <MazPhoneNumberInput Auto-detect size="sm" @focusout="updateContenu(16)" :translations="{
                              countrySelector: {
                                placeholder: 'code',
                                error: 'Veuillez renseigner le code du pays',
                              },
                              phoneInput: {
                                placeholder: 'Phone number',
                                example: 'Ex:',
                              },
                            }" show-code-on-list :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
                              :ignored-countries="['AC']" @update="results1 = $event" :success="results1?.isValid" />

                          </div>
                          <div class="col-lg-3 col-sm-12 form-group">

                            <label class="font-weight-normal" for="licence">Email</label>

                            <ArgonInputVitrine length='50' v-model="emailC" @focusout="updateContenu(11)"
                              placeholder="BOTOECH@gmail.com" />

                          </div>


                          <div class="col-lg-3 col-sm-12  form-group  ">

                            <label class="font-weight-normal" for="licence">Adresse</label>
                            <!--  <input type="text" v-model="findUsC" @focusout="updateContenu(12)" class="form-control  "
                              placeholder="Douala-Cameroun derriere le bananier" id="nomP"> -->
                            <ArgonInputVitrine length='50' v-model="findUsC" @focusout="updateContenu(12)"
                              placeholder="Douala-Cameroun derriere le bananier" id="nomP" />
                          </div>




                        </div>



                      </div>
                    </div>


                  </div>
                  <div class="card w-100 mb-4">
                    <div class="card-body">
                      <div class="part1">
                        <div class="part1">
                          <h4 class="card-title font-weight-bolder dark text-mobile">E-reputation</h4>
                          <p class="card-text border-bottom text-mobile2 ">Renseingez les urls des differents liens de
                            vos reseaux
                            sociaux.</p>
                          <div class="row">

                            <div class="col-lg-3 col-sm-12 form-group">

                              <label for="licence" class="font-weight-normal"> Facebook</label>
                              <!--  <input type="text" @focusout="updateContenuER(idFb,hrLienFb)" v-model="hrLienFb"
                                class="form-control  " placeholder="BOTECH" id="nomP"> -->


                              <ArgonInputVitrine length='50' @focusout="updateContenuER(idFb, hrLienFb)"
                                v-model="hrLienFb" placeholder="Ex: https://facebook.com/gessiia" />
                            </div>
                            <div class="col-lg-3 col-sm-12 form-group">

                              <label for="licence" class="font-weight-normal"> Twitter</label>
                              <!--   <input type="text" @focusout="updateContenuER(idTw,hrLienTw)" v-model="hrLienTw"
                                class="form-control  " placeholder="Manager" id="nomP">
 -->


                              <ArgonInputVitrine length='50' @focusout="updateContenuER(idTw, hrLienTw)"
                                v-model="hrLienTw" placeholder="Ex: https://facebook.com/gessiia" />
                            </div>
                            <div class="col-lg-3 col-sm-12 form-group">

                              <label for="licence" class="font-weight-normal"> Instagram</label>
                              <!-- <input type="text" @focusout="updateContenuER(idIg,hrLienIg)" v-model="hrLienIg"
                                  placeholder="BOTECH" id="nomP"> -->



                              <ArgonInputVitrine length='50' @focusout="updateContenuER(idIg, hrLienIg)"
                                v-model="hrLienIg" placeholder="BOTECH" />
                            </div>
                            <div class="col-lg-3 col-sm-12 form-group">

                              <label for="licence" class="font-weight-normal">Snapchat</label>
                              <!--  <input type="text" @focusout="updateContenuER(idSc,hrLienSc)" v-model="hrLienSc"
                                  placeholder="Ex: https://facebook.com/gessiia"  id="nomP"> -->



                              <ArgonInputVitrine length='50' @focusout="updateContenuER(idSc, hrLienSc)"
                                v-model="hrLienSc" placeholder="Ex: https://facebook.com/gessiia" />
                            </div>
                            <div class="col-lg-3 col-sm-12 form-group">

                              <label for="licence" class="font-weight-normal">Telegram</label>
                              <!--   <input type="text" @focusout="updateContenuER(idTl,hrLienTl)" v-model="hrLienTl"
                                  placeholder="BOTECH" id="nomP">
 -->


                              <ArgonInputVitrine length='50' @focusout="updateContenuER(idTl, hrLienTl)"
                                v-model="hrLienTl" placeholder="BOTECH" />
                            </div>
                            <div class="col-lg-3 col-sm-12 form-group">

                              <label for="licence" class="font-weight-normal"> WhatsAPP</label>
                              <!-- <input type="text" @focusout="updateContenuER(idWh,hrLienWh)" v-model="hrLienWh"
                                  placeholder="Ex: https://facebook.com/gessiia"  id="nomP">

                                 -->

                              <ArgonInputVitrine length='50' @focusout="updateContenuER(idWh, hrLienWh)"
                                v-model="hrLienWh" placeholder="Ex: https://facebook.com/gessiia" />
                            </div>
                            <div class="col-lg-3 col-sm-12 form-group">

                              <label for="licence" class="font-weight-normal"> Stack Exchange</label>
                              <!-- <input type="text" @focusout="updateContenuER(idSt,hrLienSt)" v-model="hrLienSt"
                                  placeholder="BOTECH" id="nomP">
 -->


                              <ArgonInputVitrine length='50' @focusout="updateContenuER(idSt, hrLienSt)"
                                v-model="hrLienSt" placeholder="BOTECH" />
                            </div>
                            <div class="col-lg-3 col-sm-12 form-group">

                              <label for="licence" class="font-weight-normal"> TikTok</label>
                              <!--     <input type="text" @focusout="updateContenuER(idTk,hrLienTk)" v-model="hrLienTk"
                                  placeholder="Ex: https://facebook.com/gessiia"  id="nomP">
 -->


                              <ArgonInputVitrine length='50' @focusout="updateContenuER(idTk, hrLienTk)"
                                v-model="hrLienTk" placeholder="Ex: https://facebook.com/gessiia" />
                            </div>




                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card w-100 mb-4">
                    <div class="card-body">
                      <div class="part1">
                        <div class="part1">

                          <div class="row">
                            <div class="col-lg-6 col-sm-12  form-group  ">
                              <span class="font-weight-normal" for="nomP">Description rapide de votre activité ou
                                entreprise.</span>
                              <ArgonArea v-model="description" length='500' @focusout="upDateND" />
                              <!--  <textarea rows="4" type="text" v-model="description" @keyup="lengthText(description,5)"
                                @focusout="upDateND " class="form-control"
                                placeholder="Saisissez votre description en quelques precis et conscit"
                                id="nomP"></textarea>
                              <label class="font-weight-normal" for="nomP">il vous reste 500 caracteres</label>
 -->
                            </div>
                            <div class="col-lg-6 col-sm-12  form-group  ">
                              <span class="font-weight-normal" for="nomP">Fournir un message de contact</span>
                              <ArgonArea length='500' v-model="descriptionC" @focusout="updateContenu(10)" />


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card w-100 mb-4">
                    <div class="card-body">
                      <div class="part1">
                        <div class="part1">
                          <h4 class="card-title font-weight-bolder dark text-mobile">Personnalisation des sections</h4>
                          <p class="card-text border-bottom text-mobile2 ">Sentez vous libre et créatif pour rester
                            original dans
                            cette
                            tâche passionnante.</p>

                          <div class=" ">








                            <div class=' text-primary card-text mt-4 border-bottom d-flex justify-content-between'>

                              <div class='col-4'>
                                Referencement naturel:

                              </div>

                              <div class='col-lg-6 col-sm-12' align="right">

                                <TextButton :title='statusMeta ? "Desactiver" : `Activer`' color="success"
                                  :classe="'  me-2 '" />
                                <i :class='!promptMeta ? "fa fa-chevron-down" : "fa fa-chevron-up"'
                                  style="font-size:18px;" @click="promptMeta = !promptMeta" v-if="statusMeta"></i>
                              </div>

                            </div>
                            <div class="border-bottom pb-2   border-bottom  " v-if="promptMeta">
                              <div class='justify-content-between row'>
                                <div class='col-lg-6 col-sm-12'>
                                  <span class="font-weight-normal" for="nomP">Renseigner des mots clés decrivant votre
                                    activités</span>

                                  <textarea rows="4" type="text" v-model="metaKey" @focusout='upDateND'
                                    class="form-control" placeholder="Software, programmatio" id="nomP"></textarea>
                                  <label class="font-weight-normal  text-danger" for="nomP">Renseignez plusieurs en
                                    séparant par
                                    virgules (,)</label>

                                </div>
                                <div class='col-lg-6 col-sm-12'>
                                  <span class="font-weight-normal" for="nomP">Description rapide de votre activité ou
                                    entreprise.</span>
                                  <ArgonArea length='300' v-model="metaDescription" @focusout="upDateND" />

                                  <!-- <textarea rows="4" type="text" v-model="metaDescription" class="form-control"
                                    @focusout='upDateND'
                                    placeholder="Nous attendons que vous commencer a écrire ce contenu qui vous placera en premiere ligne dans les recherches sur internet."
                                    id="nomP"></textarea>
                                  <label class="font-weight-normal" for="nomP">il vous reste 200 caracteres</label>
 -->
                                </div>


                              </div>

                              <div class='justify-content-between row'>
                                <div class='col-lg-6 col-sm-12 row'>

                                  <div class='col-lg-6 col-sm-12 '>

                                    <span class="font-weight-normal">Votre logo</span>
                                    <argon-input accept=".png, .jpeg,.jpg" icon="../assets/img/team-2.jpg" type="file"
                                      placeholder="Description" aria-label="Name" @change="onFileChangeLogo" />

                                  </div>
                                  <div class='col-lg-6 col-sm-12 '>


                                    <span class="font-weight-normal">Favicon</span>
                                    <argon-input accept=".png, .jpeg,.jpg" icon="../assets/img/team-2.jpg" type="file"
                                      placeholder="Description" aria-label="Name" @change="onFileChangeFavIcon" />

                                  </div>

                                  <div class="col-12">
                                    <span class="font-weight-normal">Titre du site </span>
                                    <!--  <input class="form-control" v-model='titreSite' @focusout='upDateND'
                                      placeholder="Entrez une description" id="nomP" /> -->
                                    <ArgonInputVitrine length='70' v-model='titreSite' @focusout='upDateND'
                                      placeholder="Entrez une description" />


                                    <label class="font-weight-normal  text-danger" for="nomP">il vous reste {{
                                        (titreSite == null) ?
                                          0
                                          : (70 -
                                            (titreSite.split('').lemgth) > 0 ? (70 - (titreSite.split('').lemgth))
                                            : 0)
                                    }} caracteres</label>

                                  </div>
                                </div>

                                <div class='col-lg-6 col-sm-12 row'>



                                  <div class="col-6 sh" style="text-align: center;">
                                    <div class="col " style="text-align: center;">
                                      <!-- <span class="  load"> <i class="fa fa-spinner fa-spin"></i> </span> -->
                                      <img :src=verifImgExist(vitrineS.logo) class=" icon img-fluid" alt="...">
                                    </div>

                                    <div class="col " style="text-align: center;">

                                      <span>Logo</span>

                                    </div>
                                  </div>
                                  <div class="col-6" style="text-align: center;">

                                    <div class="col " style="text-align: center;">
                                      <img :src=verifImgExist(vitrineS.header.favIcon.url) class=" icon img-fluid"
                                        alt="...">

                                    </div>
                                    <div class="col " style="text-align: center;">
                                      <span>Favicon</span>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>






                            <!--  //header -->
                            <div class=' text-primary mt-4 border-bottom d-flex justify-content-between'>

                              <div class='col-4'>
                                Section d'acceuil

                              </div>


                              <div class='col-lg-6 col-sm-12' align="right">


                                <TextButton :title='statusH ? "Desactiver" : `Activer`' :classe="'   me-2 '"
                                  color="success" />
                                <i :class='!promptEntete ? "fa fa-chevron-down" : "fa fa-chevron-up"'
                                  style="font-size:18px;" @click="promptEntete = !promptEntete"></i>
                              </div>

                            </div>
                            <div class="border-bottom pb-2    " v-if="promptEntete">





                              <div class='justify-content-between row'>
                                <div class='col-lg-6 col-sm-12 row'>

                                  <div class='col-lg-6 col-sm-12 '>

                                    <span class="font-weight-normal" for="licence">Mini texte d'acceuil</span>
                                    <!--    <input type="text" v-model="premierTitre" @focusout="updateContenu(1)"
                                      class="form-control  " placeholder="BOTECH" id="nomP"> -->
                                    <ArgonInputVitrine length='50' v-model="premierTitre" @focusout="updateContenu(1)"
                                      placeholder="BOTECH" id="nomP" />
                                  </div>
                                  <div class='col-lg-6 col-sm-12'>

                                    <span class="font-weight-normal">Image d'acceuil(arrière plan)</span>
                                    <argon-input accept=".png, .jpeg,.jpg" icon="../assets/img/team-2.jpg" type="file"
                                      placeholder="Description" @change="onFileChangeH" />
                                  </div>

                                  <div class="col-12">
                                    <span class="font-weight-normal">Message d'acceuil</span>
                                    <!-- <textarea rows="4" type="text" v-model="secondTitre" @focusout="updateContenu(2)"
                                      class="form-control"
                                      placeholder="Saisissez votre description en quelques precis et conscit"
                                      id="nomP"></textarea>

                                    <label class="font-weight-normal" for="nomP">il vous reste 500 caracteres</label> -->
                                    <ArgonArea length='300' v-model="secondTitre" @focusout="updateContenu(2)" />

                                  </div>
                                </div>

                                <div class='col-lg-6 col-sm-12 row mt-2'>



                                  <div>
                                    <img :src=verifImgExist(vitrineS.header.image.url) class=" cimg img-fluid"
                                      alt="...">

                                  </div>


                                </div>


                              </div>


                            </div>


                            <!--  //aboutUs -->
                            <div class='  mt-4 text-primary border-bottom d-flex justify-content-between'>
                              <div class='col-4'>
                                Apropos
                              </div>
                              <div class='col-lg-6 col-sm-12' align="right">
                                <TextButton :title='statusA ? "Desactiver" : `Activer`' @click="updateSection(2)"
                                  :classe="'   me-2 '" :loading='loadingA' @update:loading="loadingA = $event"
                                  color="success" />
                                <!-- <span class="text-primary me-1" @click="updateSection(2)">{{statusA ? "Desactiver" :
                                `Activer`}}
                                </span> -->
                                <i :class='!promptAboutUs ? "fa fa-chevron-down" : "fa fa-chevron-up"'
                                  style="font-size:18px;" @click="promptAboutUs = !promptAboutUs" v-if="statusA"></i>

                              </div>
                            </div>
                            <div class="border-bottom pb-2  " v-if="promptAboutUs">

                              <div class='justify-content-between'>
                                <span class="font-weight-normal" for="licence"> Parlez nous de vous en quelques mots
                                  precis et concit </span>
                                <!-- 
                                <textarea rows="4" class="form-control" v-model="aboutUs" @focusout="updateContenu(3)"
                                  type="text" placeholder="Saisissez votre description en quelques precis et conscit"
                                  aria-label="Name"></textarea>

                                <label class="font-weight-normal" for="licence"> il vous reste 500 caracteres </label> -->
                                <ArgonArea length='500' v-model="aboutUs" @focusout="updateContenu(3)" />


                              </div>

                            </div>




                            <!-- //service -->
                            <div class='  mt-4 text-primary border-bottom d-flex justify-content-between'>
                              <div class='col-4'>
                                Service
                              </div>
                              <div class='col-lg-6 col-sm-12' align="right">

                                <TextButton :title='statusS ? "Desactiver" : " Activer"' @click="updateSection(3)"
                                  :classe="'  me-2 '" :loading='loadingS' @update:loading="loadingS = $event" />
                                <i :class='!promptService ? "fa fa-chevron-down" : "fa fa-chevron-up"'
                                  style="font-size:18px;" @click="promptService = !promptService" v-if="statusS"></i>

                              </div>

                            </div>
                            <div class="border-bottom pb-2   " v-if="promptService">
                              <div class='justify-content-between row'>
                                <div class='col-lg-6 col-sm-12 row'>

                                  <div class='col-lg-6 col-sm-12 '>

                                    <span class="font-weight-normal" for="licence">Mini texte d'acceuil</span>
                                    <!-- <input type="text" v-model="eService" @focusout="updateContenu(4)"
                                      class="form-control  " placeholder="BOTECH" id="nomP"> -->

                                    <ArgonInputVitrine length='50' v-model="eService" @focusout="updateContenu(4)"
                                      placeholder="BOTECH" id="nomP" />
                                  </div>
                                  <div class='col-lg-6 col-sm-12 '>


                                    <span class="font-weight-normal">Image d'acceuil(arriere plan)</span>
                                    <argon-input accept=".png, .jpeg,.jpg" icon="../assets/img/team-2.jpg" type="file"
                                      placeholder="Description" aria-label="Name" @change="onFileChangeServiceImage" />
                                  </div>

                                  <div class="col-12">
                                    <span class="font-weight-normal">Message d'acceuil</span>
                                    <!--   <textarea rows="4" type="text" v-model="dService" @focusout="updateContenu(5)"
                                      class="form-control"
                                      placeholder="Saisissez votre description en quelques precis et conscit"
                                      id="nomP"></textarea>

                                    <label class="font-weight-normal" for="nomP">il vous reste 500 caracteres</label> -->
                                    <ArgonArea length='500' v-model="dService" @focusout="updateContenu(5)" />

                                  </div>
                                </div>

                                <div class='col-lg-6 col-sm-12 row mt-2'>



                                  <div>
                                    <img :src=verifImgExist(vitrineS.service.image.url) class=" cimg img-fluid"
                                      alt="...">

                                  </div>


                                </div>


                              </div>


                              <div class=' row justify-content-between'>
                                <div class="border-bottom pb-2   ">Listes de services</div>

                              </div>
                              <div class='justify-content-between mt-2 row'>
                                <div class='col-lg-6 col-sm-12 row' v-for="(service, ) in listServices"
                                  :key="service.url">

                                  <div class='col-lg-6 col-sm-12 '>

                                    <span class="font-weight-normal" for="licence">Titre de service</span>
                                    <!-- <input type="text" v-model="service.title"
                                      @focusout="updateNewE(service.id,service.title,service.description)"
                                       placeholder="BOTECH" id="nomP"> -->

                                    <ArgonInputVitrine length='50' v-model="service.title"
                                      @focusout="updateNewE(service.id, service.title, service.description)"
                                      placeholder="BOTECH" />
                                  </div>
                                  <div class='col-lg-6 col-sm-12 '>


                                    <span class="font-weight-normal">icone de service</span>
                                    <argon-input accept=".png, .jpeg,.jpg" icon="../assets/img/team-2.jpg" type="file"
                                      placeholder="Description" aria-label="Name" @click='selectService = service.id'
                                      @change="onFileChangeX" v-if='service.id == 0' />
                                    <argon-input acceXt=".png, .jpeg,.jpg" icon="../assets/img/team-2.jpg" type="file"
                                      placeholder="Description" aria-label="Name" @click='selectService = service.id'
                                      @change="onFileChangeNew" v-else />
                                  </div>
                                  <div class="col-12 row">
                                    <div class="col-9">
                                      <span class="font-weight-normal">Decription de service</span>
                                      <!--   <textarea rows="4" type="text" v-model="service.description"
                                        @focusout="updateNewE(service.id,service.title,service.description)"
                                        class="form-control"
                                        placeholder="Saisissez votre description en quelques mots precis et conscit"
                                        id="nomP"></textarea>

                                      <label class="font-weight-normal" for="nomP">il vous reste 200 caracteres</label> -->
                                      <ArgonArea length='200' v-model="service.description"
                                        @focusout="updateNewE(service.id, service.title, service.description)" />

                                    </div>
                                    <div class="col-3  mt-4">



                                      <img :src="verifImgExist(service.url)" class="  cimg2" alt="...">





                                    </div>
                                  </div>
                                </div>


                                <div class='col-lg-6 col-sm-12  d-flex justify-content-center align-items-center'>


                                  <AddButton @click='addToListService' />
                                  <!-- <AddButton :loading='loadingAddG' @update:loading="loadingAddG = $event"
                                    @click='addToServiceOrGalerie(1)' /> -->



                                </div>


                              </div>




                            </div>


                            <!-- //Galerie -->
                            <div class='  mt-4 text-primary border-bottom d-flex justify-content-between'>
                              <div class='col-4'>
                                SHOWCASE / Galerie
                              </div>
                              <div class='col-lg-6 col-sm-12' align="right">

                                <TextButton :title='statusG ? "Desactiver" : `Activer`' color="success"
                                  @click="updateSection(4)" :classe="'  me-2 '" :loading='loadingG'
                                  @update:loading="loadingG = $event" />
                                <i :class='!promptGalerie ? "fa fa-chevron-down" : "fa fa-chevron-up"'
                                  style="font-size:18px;" @click="promptGalerie = !promptGalerie" v-if="statusG"></i>

                              </div>

                            </div>

                            <div class="border-bottom pb-2   " v-if="promptGalerie">


                              <div class='justify-content-between row'>
                                <div class='col-lg-6 col-sm-12 row'>

                                  <div class='col-lg-6 col-sm-12 '>

                                    <span class="font-weight-normal" for="licence">Mini texte d'acceuil</span>
                                    <!--   <input type="text" v-model="tGalerie" @focusout="updateContenu(6)"
                                      class="form-control  " placeholder="BOTECH" id="nomP"> -->

                                    <ArgonInputVitrine length='50' v-model="tGalerie" @focusout="updateContenu(6)"
                                      placeholder="BOTECH" />
                                  </div>



                                </div>
                                <div class="col-12  ">
                                  <span class="font-weight-normal">Message d'acceuil</span>
                                  <!--   <textarea rows="4" type="text" v-model="sGalerie" @focusout="updateContenu(7)"
                                    class="form-control"
                                    placeholder="Saisissez votre description en quelques precis et conscit"
                                    id="nomP"></textarea>

                                  <label class="font-weight-normal" for="nomP">il vous reste 500 caracteres</label>
 -->
                                  <ArgonArea length='500' v-model="sGalerie" @focusout="updateContenu(7)" />
                                </div>


                              </div>

                              <div class=' row justify-content-between'>
                                <div class="border-bottom pb-2   ">Listes de vos dernieres activites</div>

                              </div>
                              <div class='justify-content-between mt-2 row'>
                                <div class='col-lg-6 col-sm-12 row' v-for="(galerie, ) in listGaleries"
                                  :key="galerie.id">


                                  <div class='col-lg-6 col-sm-12 '>

                                    <span class="font-weight-normal" for="licence">Titre de l'activité</span>
                                    <!--  <input type="text" v-model="galerie.title"
                                      @focusout="updateNewE(galerie.id,galerie.title,galerie.description)"
                                      class="form-control  " placeholder="BOTECH" id="nomP"> -->

                                    <ArgonInputVitrine length='50' v-model="galerie.title"
                                      @focusout="updateNewE(galerie.id, galerie.title, galerie.description)"
                                      placeholder="BOTECH" />
                                  </div>
                                  <div class='col-lg-6 col-sm-12 '>


                                    <span class="font-weight-normal">icone de l'activite</span>

                                    <argon-input accept=".png, .jpeg,.jpg" icon="../assets/img/team-2.jpg" type="file"
                                      placeholder="Description" aria-label="Name" @click='selectService = galerie.id'
                                      @change="onFileChangeG" v-if='galerie.id == 0' />
                                    <argon-input accept=".png, .jpeg,.jpg" icon="../assets/img/team-2.jpg" type="file"
                                      placeholder="Description" aria-label="Name" @click='selectService = galerie.id'
                                      @change="onFileChangeNew" v-else />
                                  </div>
                                  <div class="col-12 row">
                                    <div class="col-9">
                                      <span class="font-weight-normal">Decription de l'activite</span>
                                      <!--  <textarea rows="4" type="text" v-model="galerie.description"
                                        @focusout="updateNewE(galerie.id,galerie.title,galerie.description)"
                                        class="form-control"
                                        placeholder="Saisissez votre description en quelques mots precis et conscit"
                                        id="nomP"></textarea>

                                      <label class="font-weight-normal" for="nomP">il vous reste 200 caracteres</label> -->
                                      <ArgonArea length='200' v-model="galerie.description"
                                        @focusout="updateNewE(galerie.id, galerie.title, galerie.description)" />

                                    </div>
                                    <div class="col-3 ">



                                      <img :src="verifImgExist(galerie.url)" class="  cimg2" alt="...">





                                    </div>
                                  </div>


                                </div>
                                <div class='col-lg-6 col-sm-12  d-flex justify-content-center align-items-center'>


                                  <AddButton @click='addToListAGalerie' />
                                  <!-- <AddButton :loading='loadingAddG' @update:loading="loadingAddG = $event"
                                      @click='addToServiceOrGalerie(1)' /> -->



                                </div>

                              </div>





                            </div>


                            <!-- //Temoignage -->
                            <div class='  mt-4 text-primary border-bottom d-flex justify-content-between'>
                              <div class='col-3'>
                                Temoignage
                              </div>
                              <div class='col-lg-6 col-sm-12' align="right">


                                <TextButton :title='statusT ? "Desactiver" : `Activer`' color="success"
                                  @click="updateSection(5)" :classe="'  me-2 '" :loading='loadingT'
                                  @update:loading="loadingT = $event" />
                                <i :class='!promptTemoignage ? "fa fa-chevron-down" : "fa fa-chevron-up"'
                                  style="font-size:18px;" @click="promptTemoignage = !promptTemoignage"
                                  v-if="statusT"></i>

                              </div>

                            </div>

                            <div class="border-bottom pb-2   " v-if="promptTemoignage">

                              <div class='justify-content-between mt-2 row'>
                                <div class='col-lg-10 col-sm-12 row' v-for="(temoignage, ) in listTemoignages"
                                  :key="temoignage.id">
                                  <div class="col-lg-10 col-sm-12  ">
                                    <div class="col-12 row">
                                      <div class='col-lg-4 col-sm-12 '>

                                        <span class="font-weight-normal" for="licence">Nom</span>
                                        <!--  <input type="text" v-model="temoignage.nom"
                                          @focusout="updateTemoin(temoignage.id,temoignage.nom,temoignage.poste,temoignage.description)"
                                          class="form-control  " placeholder="BOTECH" id="nomP"> -->
                                        <ArgonInputVitrine length='50' v-model="temoignage.nom"
                                          @focusout="updateTemoin(temoignage.id, temoignage.nom, temoignage.poste, temoignage.description)"
                                          placeholder="BOTECH" />
                                      </div>
                                      <div class='col-lg-4 col-sm-12 '>

                                        <span class="font-weight-normal" for="licence">Poste social</span>
                                        <!-- <input type="text" v-model="temoignage.poste"
                                          @focusout="updateTemoin(temoignage.id,temoignage.nom,temoignage.poste,temoignage.description)"
                                          class="form-control  " placeholder="BOTECH" id="nomP"> -->

                                        <ArgonInputVitrine length='50' v-model="temoignage.poste"
                                          @focusout="updateTemoin(temoignage.id, temoignage.nom, temoignage.poste, temoignage.description)"
                                          placeholder="BOTECH" />
                                      </div>
                                      <div class='col-lg-4 col-sm-12 '>


                                        <span class="font-weight-normal">icone de l'activite</span>
                                        <argon-input accept=".png, .jpeg,.jpg" icon="../assets/img/team-2.jpg"
                                          type="file" placeholder="Description" aria-label="Name"
                                          @click='selectTemoignage = temoignage.id' @change="onFileChangeT"
                                          v-if='temoignage.id == 0' />
                                        <argon-input accept=".png, .jpeg,.jpg" icon="../assets/img/team-2.jpg"
                                          type="file" placeholder="Description" aria-label="Name"
                                          @click='selectTemoignage = temoignage.id' @change="onFileChangeNewT" v-else />
                                      </div>
                                    </div>


                                    <div class="col-12 row">
                                      <div class="col-12">
                                        <span class="font-weight-normal">Temoignage</span>
                                        <!--  <textarea rows="4" type="text" v-model="temoignage.description"
                                          @focusout="updateTemoin(temoignage.id,temoignage.nom,temoignage.poste,temoignage.description)"
                                          class="form-control"
                                          placeholder="Saisissez votre description en quelques mots precis et conscit"
                                          id="nomP"></textarea>

                                        <label class="font-weight-normal" for="nomP">il vous reste 200
                                          caracteres</label> -->
                                        <ArgonArea length='200' v-model="temoignage.description"
                                          @focusout="updateTemoin(temoignage.id, temoignage.nom, temoignage.poste, temoignage.description)" />
                                      </div>

                                    </div>
                                  </div>
                                  <div class="col-lg-2 col-sm-12  ">



                                    <img :src="verifImgExist(temoignage.url)" class="  cimg2" alt="...">





                                  </div>
                                </div>


                                <div class='col-lg-2 col-sm-12  d-flex justify-content-center align-items-center'>


                                  <AddButton @click='addToListTemoin' />
                                  <!-- <AddButton :loading='loadingAddG' @update:loading="loadingAddG = $event"
                                    @click='addToServiceOrGalerie(1)' /> -->



                                </div>


                              </div>







                            </div>


                            <!-- //Nous font confiances / Clients -->
                            <div class='  mt-4 text-primary border-bottom d-flex justify-content-between'>
                              <div class='col-3'>
                                Nous font confiances / Clients
                              </div>
                              <div class='col-lg-6 col-sm-12' align="right">


                                <TextButton :title='statusConf ? "Desactiver" : `Activer`' color="success"
                                  @click="updateSection(7)" :classe="'  me-2 '" :loading='loadingConf'
                                  @update:loading="loadingConf = $event" />
                                <i :class='!promptConf ? "fa fa-chevron-down" : "fa fa-chevron-up"'
                                  style="font-size:18px;" @click="promptConf = !promptConf" v-if="statusConf"></i>

                              </div>
                            </div>

                            <div class="border-bottom pb-2   " v-if="promptConf">



                              <div class='justify-content-between mt-2 row'>
                                <div class='col-10  '>
                                  <div class='col-12 row' v-for="(confiance, ) in listConfiances" :key="confiance.id">

                                    <div class='col-lg-4 col-sm-12 '>

                                      <span class="font-weight-normal" for="licence">Nom du client</span>
                                      <!--   <input type="text" v-model="confiance.nom"
                                        @focusout='updateConfiance(confiance.id, confiance.nom, confiance.poste)'
                                        class="form-control  " placeholder="BOTECH" id="nomP">
 -->

                                      <ArgonInputVitrine length='50' v-model="confiance.nom"
                                        @focusout='updateConfiance(confiance.id, confiance.nom, confiance.poste)'
                                        placeholder="BOTECH" />

                                    </div>

                                    <div class='col-lg-4 col-sm-12 '>

                                      <span class="font-weight-normal" for="licence">Url du site web </span>
                                      <!--  <input type="text" v-model="confiance.poste"
                                        @focusout='updateConfiance(confiance.id, confiance.nom, confiance.poste)'
                                        class="form-control  " placeholder="BOTECH" id="nomP"> -->

                                      <ArgonInputVitrine length='50' v-model="confiance.poste"
                                        @focusout='updateConfiance(confiance.id, confiance.nom, confiance.poste)'
                                        placeholder="BOTECH" />
                                    </div>
                                    <div class='col-lg-4   col-sm-12 '>
                                      <div class='  row  '>
                                        <div class="col-lg-10 col-sm-12 ">

                                          <span class="font-weight-normal">Logo</span>

                                          <argon-input accept=".png, .jpeg,.jpg" icon="../assets/img/team-2.jpg"
                                            type="file" placeholder="Description" aria-label="Name"
                                            @click='selectConf = confiance.id' @change="onFileChangeC"
                                            v-if='confiance.id == 0' />
                                          <argon-input accept=".png, .jpeg,.jpg" icon="../assets/img/team-2.jpg"
                                            type="file" placeholder="Description" aria-label="Name"
                                            @click='selectConf = confiance.id' @change="onFileChangeNewConf" v-else />
                                        </div>


                                        <div class="col-lg-2  col-sm-12 ">

                                          <img :src="verifImgExist(confiance.url)" class=" col cimg3" alt="...">


                                        </div>
                                      </div>






                                    </div>




                                  </div>
                                </div>
                                <div class='col-lg-2 col-sm-12 d-flex   align-items-center'>


                                  <span class="border mouse mt-1 " @click='addToListAConfiance'
                                    style="  padding-top: 5px;  padding-bottom: 5px;  padding-left: 15px; padding-right: 15px; ">+

                                  </span>
                                </div>

                              </div>



                            </div>





                            <!-- <div class='  mt-4 text-primary border-bottom  '>
                              <div class='col-3'>
                                Couleur
                              </div>
                              <div class='col-12  row   d-flex ' style="text-align: center;">


                                <div :class="theme.status ? ' mouse container0 col-3  mt-3' : ' mouse col-3  mt-3'"
                                  v-for="(theme) in listTheme" @click='changeTheme(theme)' :key="theme.id">

                                  <div class='colorsApp'>

                                  </div>
                                  <i class="far fa-check-circle  centered"></i>
                                  <span>{{ theme.label }}</span>




                                </div>
                              </div>



                            </div> -->


                            <div class='  mt-4 text-primary border-bottom  '>
                              <div class='col-3'>
                                Theme
                              </div>
                              <div class='col-12  row   d-flex ' style="text-align: center;">


                                <div :class="theme.status ? ' mouse container0 col-3  mt-3' : ' mouse col-3  mt-3'"
                                  v-for="(theme) in listTheme" @click='changeTheme(theme)' :key="theme.id">



                                  <img :src="theme.image" class=" theme img-fluid" alt="...">
                                  <i class="far fa-check-circle  centered" v-if='theme.status'></i>
                                  <span>{{ theme.label }}</span>




                                </div>
                              </div>



                            </div>
                          </div>






                        </div>
                      </div>
                    </div>
                  </div>



                </div>
                <div v-else-if='typeVitrine == 2' class='  w-100 mb-4'>


                  <div class="     ">
                    <div class="card w-100 mb-4">
                      <div class="card-body">

                        <div class="part1">
                          <div class='row d-flex justify-content-between border-bottom'>

                            <div class='col'>
                              <h4 class="card-title font-weight-bolder dark text-mobile">Personnalisez votre site web
                              </h4>
                              <p class="card-text ">Modifier vos informations.</p>
                            </div>
                            <div class='col text-primary' align='right'>
                              <p highlight @click="CONFIG = false; " class="align-baseline mouse">
                                Retour
                              </p>
                            </div>


                          </div>


                          <div class="row">
                            <div class="col-lg-4 col-sm-12 form-group">

                              <label class="font-weight-normal" for="inputCity">Beneficiere</label>
                              <input type="text" readonly :value='vitrineS.Propriétaire' class="form-control  "
                                placeholder="100Web" id="nomP">

                            </div>
                            <div class="col-lg-4 col-sm-12 form-group">

                              <label class="font-weight-normal" for="licence"> Titre de votre Vitrine</label>
                              <input type="text" v-model="nom" @focusout='upDateND' class="form-control  "
                                placeholder="100Web" id="nomP">
                            </div>


                            <div class="col-lg-4 col-sm-12  form-group  ">

                              <label class="font-weight-normal" for="licence">Url</label>
                              <input type="text" @click='view = true' readonly :value='vitrineS.url'
                                class="form-control  " id="nomP">

                            </div>

                            <!-- <div class="col-lg-12 col-sm-12  form-group  ">
                                                                            <label  class="font-weight-normal" for="nomP">Description de la vitrine</label>
                                        
                                                                            <textarea rows="4" type="text" v-model="description" class="form-control"
                                                                                placeholder="Entrer une description a votre vitrine" id="nomP"></textarea>
                                                                        </div> -->



                          </div>
                          <div class="row">
                            <div class="col-lg-3 col-sm-12 form-group">
                              <label class="font-weight-normal" for="nomP">Numero de téléphone</label>
                              <MazPhoneNumberInput Auto-detect @focusout="updateContenu(15)" size="sm" :translations="{
                                countrySelector: {
                                  placeholder: 'code',
                                  error: 'Veuillez renseigner le code du pays',
                                },
                                phoneInput: {
                                  placeholder: 'Phone number',
                                  example: 'Ex:',
                                },
                              }" show-code-on-list :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
                                :ignored-countries="['AC']" @update="results = $event" :success="results?.isValid" />

                            </div>
                            <div class="col-lg-3 col-sm-12 form-group">
                              <label class="font-weight-normal" for="nomP">Numero de téléphone 2</label>
                              <MazPhoneNumberInput Auto-detect size="sm" @focusout="updateContenu(16)" :translations="{
                                countrySelector: {
                                  placeholder: 'code',
                                  error: 'Veuillez renseigner le code du pays',
                                },
                                phoneInput: {
                                  placeholder: 'Phone number',
                                  example: 'Ex:',
                                },
                              }" show-code-on-list :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
                                :ignored-countries="['AC']" @update="results1 = $event" :success="results1?.isValid" />

                            </div>
                            <div class="col-lg-3 col-sm-12 form-group">

                              <label class="font-weight-normal" for="licence">Email</label>

                              <ArgonInputVitrine length='50' v-model="emailC" @focusout="updateContenu(11)"
                                placeholder="BOTOECH@gmail.com" />

                            </div>


                            <div class="col-lg-3 col-sm-12  form-group  ">

                              <label class="font-weight-normal" for="licence">Adresse</label>
                              <!--  <input type="text" v-model="findUsC" @focusout="updateContenu(12)" class="form-control  "
                                                  placeholder="Douala-Cameroun derriere le bananier" id="nomP"> -->
                              <ArgonInputVitrine length='50' v-model="findUsC" @focusout="updateContenu(12)"
                                placeholder="Douala-Cameroun derriere le bananier" id="nomP" />
                            </div>




                          </div>



                        </div>
                      </div>


                    </div>
                    <div class="card w-100 mb-4">
                      <div class="card-body">
                        <div class="part1">
                          <div class="part1">
                            <h4 class="card-title font-weight-bolder dark text-mobile">Description</h4>
                            <p class="card-text border-bottom text-mobile2 ">Decrivez votre activite.</p>
                            <div>
                              <label for="example-text-input" class="form-control-label">description</label>
                              <ArgonArea v-model="description" length='500' @focusout="upDateND" />
                            </div>
                            <div class='justify-content-between row'>
                              <!-- <div class='col'>
                            <label class="font-weight-normal">titre meta</label>
                            <textarea rows="4" v-model="smsCorrect" class="form-control" placeholder="Entrez un titre"
                              id="nomP"></textarea>
  
                          </div> -->
                              <div class='col'>
                                <label class="font-weight-normal">description meta</label>

                                <ArgonArea v-model="metaDescription" length='500' @focusout="upDateND" />
                              </div>
                              <div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="card w-100 mb-4">
                      <div class="card-body">
                        <div class="part1">
                          <div class="part1">
                            <h4 class="card-title font-weight-bolder dark text-mobile">E-reputation</h4>
                            <p class="card-text border-bottom text-mobile2 ">Renseingez les urls des differents liens
                              de vos reseaux
                              sociaux.</p>
                            <div class="row">

                              <div class="col-lg-3 col-sm-12 form-group">

                                <label for="licence" class="font-weight-normal"> Facebook</label>
                                <!--  <input type="text" @focusout="updateContenuER(idFb,hrLienFb)" v-model="hrLienFb"
                                                    class="form-control  " placeholder="BOTECH" id="nomP"> -->


                                <ArgonInputVitrine length='50' @focusout="updateContenuER(idFb, hrLienFb)"
                                  v-model="hrLienFb" placeholder="Ex: https://facebook.com/gessiia" />
                              </div>
                              <div class="col-lg-3 col-sm-12 form-group">

                                <label for="licence" class="font-weight-normal"> Twitter</label>
                                <!--   <input type="text" @focusout="updateContenuER(idTw,hrLienTw)" v-model="hrLienTw"
                                                    class="form-control  " placeholder="Manager" id="nomP">
                     -->


                                <ArgonInputVitrine length='50' @focusout="updateContenuER(idTw, hrLienTw)"
                                  v-model="hrLienTw" placeholder="Ex: https://facebook.com/gessiia" />
                              </div>
                              <div class="col-lg-3 col-sm-12 form-group">

                                <label for="licence" class="font-weight-normal"> Instagram</label>
                                <!-- <input type="text" @focusout="updateContenuER(idIg,hrLienIg)" v-model="hrLienIg"
                                                      placeholder="BOTECH" id="nomP"> -->



                                <ArgonInputVitrine length='50' @focusout="updateContenuER(idIg, hrLienIg)"
                                  v-model="hrLienIg" placeholder="BOTECH" />
                              </div>
                              <div class="col-lg-3 col-sm-12 form-group">

                                <label for="licence" class="font-weight-normal">Snapchat</label>
                                <!--  <input type="text" @focusout="updateContenuER(idSc,hrLienSc)" v-model="hrLienSc"
                                                      placeholder="Ex: https://facebook.com/gessiia"  id="nomP"> -->



                                <ArgonInputVitrine length='50' @focusout="updateContenuER(idSc, hrLienSc)"
                                  v-model="hrLienSc" placeholder="Ex: https://facebook.com/gessiia" />
                              </div>
                              <div class="col-lg-3 col-sm-12 form-group">

                                <label for="licence" class="font-weight-normal">Telegram</label>
                                <!--   <input type="text" @focusout="updateContenuER(idTl,hrLienTl)" v-model="hrLienTl"
                                                      placeholder="BOTECH" id="nomP">
                     -->


                                <ArgonInputVitrine length='50' @focusout="updateContenuER(idTl, hrLienTl)"
                                  v-model="hrLienTl" placeholder="BOTECH" />
                              </div>
                              <div class="col-lg-3 col-sm-12 form-group">

                                <label for="licence" class="font-weight-normal"> WhatsAPP</label>
                                <!-- <input type="text" @focusout="updateContenuER(idWh,hrLienWh)" v-model="hrLienWh"
                                                      placeholder="Ex: https://facebook.com/gessiia"  id="nomP">
                    
                                                     -->

                                <ArgonInputVitrine length='50' @focusout="updateContenuER(idWh, hrLienWh)"
                                  v-model="hrLienWh" placeholder="Ex: https://facebook.com/gessiia" />
                              </div>
                              <div class="col-lg-3 col-sm-12 form-group">

                                <label for="licence" class="font-weight-normal"> Stack Exchange</label>
                                <!-- <input type="text" @focusout="updateContenuER(idSt,hrLienSt)" v-model="hrLienSt"
                                                      placeholder="BOTECH" id="nomP">
                     -->


                                <ArgonInputVitrine length='50' @focusout="updateContenuER(idSt, hrLienSt)"
                                  v-model="hrLienSt" placeholder="BOTECH" />
                              </div>
                              <div class="col-lg-3 col-sm-12 form-group">

                                <label for="licence" class="font-weight-normal"> TikTok</label>
                                <!--     <input type="text" @focusout="updateContenuER(idTk,hrLienTk)" v-model="hrLienTk"
                                                      placeholder="Ex: https://facebook.com/gessiia"  id="nomP">
                     -->


                                <ArgonInputVitrine length='50' @focusout="updateContenuER(idTk, hrLienTk)"
                                  v-model="hrLienTk" placeholder="Ex: https://facebook.com/gessiia" />
                              </div>




                            </div>
                          </div>
                        </div>
                      </div>
                    </div>



                    <!-- <CustomButton :title='" Modifier"' @click='upDateND' :loading='loadingUp'
                      @update:loading="loadingUp = $event" :classe="'btn btn-primary  me-2 w-100 pt-2 pb-2 ps-5 pe-5'"
                      color="success" fullWidth size="lg" /> -->

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>



  </div>
  <vue-final-modal v-model="showG" :click-to-close="false" class=" " classes="modal-container"
    content-class="modal-content">


    <div class="border-bottom pb-2  center ">
      <div class='col-12 mt-2 mb-2'>
        Modifier cette image de la Galerie:
      </div>
      <div class='row justify-content-between'>
        <div class='col-4' v-if="galSelect != null"> <img :src="verifImgExist(galSelect.url)" class=" imgH img-fluid"
            alt="...">
          <argon-input icon="../assets/img/team-2.jpg" accept=".png, .jpeg,.jpg" placeholder="Description" type='file'
            aria-label="Name" @change="onFileChange0" />
        </div>

        <div class='col-4'>
          titre image Galerie:
          <input class="form-control" type="text" v-model="galTitle" @focusout="updateGal(1)" />

        </div>

        <div class='col-4'>
          Decription image Galerie:
          <input class="form-control" type="text" v-model="galDescription" @focusout="updateGal(2)" />


        </div>
        <div class='row mr-2'>
          <div class='col-4'>
            <CustomButton :title='"Modifier Image"' :loading='loadingPatchVitrine'
              @update:loading="loadingPatchVitrine = $event" @click='updateImgH2' :classe="'btn btn-primary  '" />
          </div>

          <div class='col-4'>
            <button highlight @click="showG = false; " class="align-baseline btn btn-danger ms-3">
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>


  </vue-final-modal>

  <vue-final-modal v-model="showS" :click-to-close="false" class=" " classes="modal-container"
    content-class="modal-content">


    <div class="border-bottom pb-2  center ">
      <div class='col-12 mt-2 mb-2'>
        Modifier cette image de ce service:
      </div>
      <div class='row justify-content-between'>
        <div class='col-4' v-if="galSelect != null"> <img :src="verifImgExist(galSelect.url)" class=" imgH img-fluid"
            alt="...">
          <argon-input icon="../assets/img/team-2.jpg" accept=".png, .jpeg,.jpg" placeholder="Description" type='file'
            aria-label="Name" @change="onFileChange0" />
        </div>

        <div class='col-4'>
          titre service:
          <input class="form-control" type="text" v-model="galTitle" @focusout="updateGal(1)" />

        </div>

        <div class='col-4'>
          Decription service:
          <input class="form-control" type="text" v-model="galDescription" @focusout="updateGal(2)" />


        </div>
        <div class='row mr-2'>
          <div class='col-4'>
            <CustomButton :title='"Modifier Image"' :loading='loadingPatchVitrine'
              @update:loading="loadingPatchVitrine = $event" @click='updateImgH2' :classe="'btn btn-primary  '" />
          </div>

          <div class='col-4'>
            <button highlight @click="showS = false; " class="align-baseline btn btn-danger ms-3">
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>


  </vue-final-modal>
  <vue-final-modal v-model="showT" class=" " :click-to-close="false" classes="modal-container"
    content-class="modal-content">


    <div class="border-bottom pb-2  center ">
      <div class='col-12 mt-2 mb-2'>
        Modifier cette image de ce temoignage:
      </div>
      <div class='row justify-content-between'>
        <div class='col-4' v-if="galSelect != null"> <img :src="verifImgExist(galSelect.url)" class=" imgH img-fluid"
            alt="...">
          <argon-input icon="../assets/img/team-2.jpg" accept=".png, .jpeg,.jpg" placeholder="Description" type='file'
            aria-label="Name" @change="onFileChange0" />
        </div>

        <div class='col-4'>
          Nom de temoin:
          <input class="form-control" type="text" v-model="nomTemoin" @focusout="updateGal(3)" />

        </div>
        <div class='col-4'>
          Poste du temoin:
          <input class="form-control" type="text" v-model="posteTemoin" @focusout="updateGal(4)" />

        </div>

        <div class='col-4'>
          Decription temoignage:
          <input class="form-control" type="text" v-model="desciptionTemoin" @focusout="updateGal(5)" />


        </div>
        <div class='row mr-2'>
          <div class='col-4'>
            <CustomButton :title='"Modifier Image"' :loading='loadingPatchVitrine'
              @update:loading="loadingPatchVitrine = $event" @click='updateImgH2' :classe="'btn btn-primary  '" />
          </div>

          <div class='col-4'>
            <button highlight @click="showT = false; " class="align-baseline btn btn-danger ms-3">
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>


  </vue-final-modal>
  <vue-final-modal v-model="showText" class=" " :click-to-close="false" classes="modal-container"
    content-class="modal-content">


    <div class="border-bottom pb-2  center ">

      <div class='row justify-content-between'>

        <div class='row mr-2'>

          <div class='col-lg-6 col-sm-12'>
            texte :
            <input class="form-control" type="text" v-model="sText" @focusout="updateContenu(13)" />


          </div>
          <div class='col-lg-6 col-sm-12' v-if="selectText.url != null">
            lien :
            <input class="form-control" type="text" v-model="sLien" @focusout="updateContenu(13)" />


          </div>
        </div>

        <div class='row mr-2'>
          <div class='col-4'>
            <button highlight @click="showText = false; " class="align-baseline btn btn-danger ms-3">
              Retour
            </button>
          </div>


        </div>
      </div>
    </div>


  </vue-final-modal>
  <vue-final-modal :click-to-close="false" v-model="loadingPatchVitrine" class=" " classes="modal-container"
    content-class="modal-content">


    <div class="border-bottom pb-2  center ">
      <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

    </div>

  </vue-final-modal>
  <vue-final-modal v-model="view" style="" id='md' classes="modal-container-paiement   "
    content-class="modal-content-paiement">

    <iframe :src="vitrineS.url" id='md' height="600" width="1000">
      <p>Votre navigateur ne supporte aucune iframe !</p>
    </iframe>

  </vue-final-modal>
</template> 

<style scoped>
.container0 {
  position: relative;
  text-align: center;
  color: white;
  opacity: 0.3;
}

.colorsApp {
  width: 15vw;
  height: 15vw;
  background: linear-gradient(-45deg, blue, blue 49%, white 49%, white 51%, red 51%);
  border-radius: 50%;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  color: white;
  opacity: 1;
  left: 50%;
  font-size: 100px;
  transform: translate(-50%, -50%);
}


::v-deep .modal-container {
  display: flex;
  justify-content: center;
  /* overflow: scroll; */

  align-items: center;
  width: auto;
  padding-left: auto
}

::v-deep .modal-content {
  /* overflow: scroll; */
  width: auto;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0em 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

.load {
  height: 5em;
  padding: 2em;
  width: 5em;
  background-color: gray;
}

.sh {
  /* box-shadow: 0 0 2em blue; */
}

::v-deep .modal-container-paiement {
  display: flex;
  justify-content: center;


  align-items: center;
  width: auto;
  margin: auto
}

::v-deep .modal-content-paiement {
  width: auto;
  display: flex;
  flex-direction: column;
  max-height: 95%;
  margin: auto;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;

}

.cimg {
  height: 88%;
  width: 50%;
}

.cimg2 {
  height: 78%;
  width: 127%;
}

.cimg3 {
  margin-top: 1.5em;
  height: 2.5em;
  width: 2.5em;

}

.theme {
  height: 90%;
  width: 160%;
}

.icon {
  height: 5em;
  width: 5em;
}

.message {
  display: inline-block;

  max-width: 100%;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;

}

.col2 {
  width: 200px;
  flex: 1 0 0%;
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

::v-deep .modal-container {
  display: flex;
  justify-content: center;
  /* overflow: scroll; */

  align-items: center;
  width: auto;
  padding-left: auto
}

::v-deep .modal-content {
  /* overflow: scroll; */
  width: auto;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0em 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

.modal__title {
  margin: 0 2rem 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.modal__content {
  flex-grow: 1;
  /* overflow-y: auto; */
}

.modal__action {
  display: flex;
  flex-shrink: 0;
  padding: 1rem 0 0;
}

.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.dark-mode div .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
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
</style>
<script>
import { VueFinalModal } from 'vue-final-modal'
// import Editor from '@tinymce/tinymce-vue'
import { textToHtml } from '../../boot/parseHtml';

import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
import { FormatData } from '../../boot/FormatData';
import Popper from "vue3-popper";
import VueCookies from 'vue-cookies'
import CustomButton from '../../components/CustomButton.vue';
import TextButton from '../../components/TextButton.vue';
// import AddButton2 from '../../components/AddButton2.vue';
import AddButton from '../../components/AddButton.vue';
import ArgonInput from "../../components/ArgonInput.vue";
import ArgonInputVitrine from "../../components/ArgonInputVitrine.vue";
import ArgonArea from "../../components/ArgonArea.vue";

import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
// import VuePhoneNumberInput from "vue-phone-number-input";
import "maz-ui/css/main.css";
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

import { createToaster } from "@meforma/vue-toaster";
export default {
  name: "ListVitrine",
  components: {
    Popper,/*  Editor, */
    ArgonInput, ArgonArea, ArgonInputVitrine
    , CustomButton, TextButton, AddButton
    , VueFinalModal, MazPhoneNumberInput
  },
  methods: {



    addToListService: function () {
      let toast = createToaster();
      // console.log(this.listServices)
      // console.log(this.listImages)
      if (this.listServices.length >= 1) {


        if (this.listServices[this.listServices.length - 1].title != '' && this.listServices[this.listServices.length - 1].description != '') {


          if (this.listServices[this.listServices.length - 1].id == 0) {
            this.addToServiceOrGalerieCustom(1, this.listServices[this.listServices.length - 1].title, this.listServices[this.listServices.length - 1].description, this.imageSS)
          }




          this.listServices.push({ id: 0, title: '', description: '', url: '' });

        }
        else {
          toast.error(`Veuilez remplir tous les champs`, {
            // override the global option
            position: "bottom"
          });
        }


        // console.log(this.listServices)
        // console.log(this.listImages)
      }
      else {
        this.listServices.push({ id: 0, title: '', description: '', url: '' });
      }
    },
    addToListTemoin: function () {
      let toast = createToaster();
      // console.log(this.listTemoignages)
      if (this.listTemoignages.length >= 1) {


        if (this.listTemoignages[this.listTemoignages.length - 1].nom != '' && this.listTemoignages[this.listTemoignages.length - 1].poste != '' && this.listTemoignages[this.listTemoignages.length - 1].description != '') {


          if (this.listTemoignages[this.listTemoignages.length - 1].id == 0) {
            this.addTemoin(this.listTemoignages[this.listTemoignages.length - 1].nom, this.listTemoignages[this.listTemoignages.length - 1].poste, this.listTemoignages[this.listTemoignages.length - 1].description, this.imageSS)
          }




          this.listTemoignages.push({ id: 0, nom: '', poste: '', description: '', url: '' });

        }
        else {
          toast.error(`Veuilez remplir tous les champs`, {
            // override the global option
            position: "bottom"
          });
        }

      }
      else {
        this.listTemoignages.push({ id: 0, nom: '', poste: '', description: '', url: '' });
      }
    },
    addToListAGalerie: function () {
      let toast = createToaster();

      if (this.listGaleries.length >= 1) {
        if (this.listGaleries[this.listGaleries.length - 1].title != '' && this.listGaleries[this.listGaleries.length - 1].description != '') {


          if (this.listGaleries[this.listGaleries.length - 1].id == 0) {
            this.addToServiceOrGalerieCustom(2, this.listGaleries[this.listGaleries.length - 1].title, this.listGaleries[this.listGaleries.length - 1].description, this.imageSS)
          }




          this.listGaleries.push({ id: 0, title: '', description: '', url: '' });

        }


        else {
          toast.error(`Veuilez remplir tous les champs`, {
            // override the global option
            position: "bottom"
          });
        }


        // console.log(this.listGaleries)
        // console.log(this.listImagesG)
      }
      else {
        this.listGaleries.push({ id: 0, title: '', description: '', url: '' });
      }
    },
    addToListAConfiance: function () {
      let toast = createToaster();

      if (this.listConfiances.length >= 1) {
        if (this.listConfiances[this.listConfiances.length - 1].nom != '' && this.listConfiances[this.listConfiances.length - 1].poste != '') {


          if (this.listConfiances[this.listConfiances.length - 1].id == 0) {
            this.addToServiceOrConfianceCustom(this.listConfiances[this.listConfiances.length - 1].nom, this.listConfiances[this.listConfiances.length - 1].poste, this.imageSS)
          }




          this.listConfiances.push({ id: 0, nom: '', poste: '', url: '' });

        }


        else {
          toast.error(`Veuilez remplir tous les champs`, {
            // override the global option
            position: "bottom"
          });
        }


        // console.log(this.listConfiances)
        // console.log(this.listImagesG)
      }
      else {
        this.listConfiances.push({ id: 0, nom: '', poste: '', url: '' });
      }
    },
    onFileChangeC(e) {

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      // console.log(files[0])
      this.imageSS = files[0];

      this.addToListImageC(files[0])

    },
    addToListImageC(el) {
      this.listImagesC.push(el)
    },
    onFileChangeT(e) {

      // console.log('ddddddddddddddddddd')

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      // console.log(files[0])
      this.imageSS = files[0];
      this.addToListImageT(files[0])
      // console.log(this.listImagesT)

    },
    addToListImageT(el) {
      this.listImagesT.push(el)
    },

    onFileChangeX(e) {

      // console.log('ddddddddddddddddddd')

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      // console.log(files[0])
      this.imageSS = files[0]
      this.addToListImage(files[0])
      // console.log(this.listImages)

    },
    onFileChangeNewConf(e) {



      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.imageG = files[0]
      this.updateImgConfNew();
    }, onFileChangeNew(e) {



      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.imageG = files[0]
      this.updateImgH2New();
    }, onFileChangeNewT(e) {



      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.imageG = files[0]
      this.updateT2New();
    },
    addToListImage(el) {
      this.listImages.push(el)
    },

    onFileChangeG(e) {


      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      // console.log(files[0])
      this.imageSS = files[0];

      this.addToListImageG(files[0])
      // console.log(this.listImagesG)

    },
    addToListImageG(el) {
      this.listImagesG.push(el)
    },
    onFileChange(e) {

      // console.log('cdsdsv.value*****')

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      // console.log(files)
      this.imageH = files[0]
    }, onFileChangeH(e) {

      // console.log('cdsdsv.value*****')

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      // console.log(files)
      this.imageH = files[0]
      this.updateImgH()
    }, onFileChangeLogo(e) {

      console.log('logo.value*****')

      var files = e.target.files || e.dataTransfer.files;



      if (!files.length)
        return;
      // console.log(files)
      this.imageLogo = files[0];
      this.updateImgLogo()
    },
    onFileChangeFavIcon(e) {

      // console.log('Fav ivo***')

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      // console.log(files)
      this.faviconLogo = files[0];
      this.updateFavicon()
    }, onFileChange0(e) {

      // console.log('cdsdsv.value**rrrrr***')

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      console.log(files[0].mozFullPath)
      //  var   globalPic = new Image();
      //     globalPic.onload = function () {
      //       document.getElementById('as').src = globalPic.src;
      //     }
      //     globalPic.src = files[0];
      this.imageG = files[0]
      this.choisi = files[0]
    },
    onFileChange1(e) {

      // console.log('cdsdsv.value*****')

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      // console.log(files)
      this.imgT = files[0]
    }, onFileChangeServiceImage(e) {

      // console.log('Fav ivo***')

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      // console.log(files)
      this.imgT = files[0]
      this.updateBackService()
    }
    ,
    next() {
      console.log(this.Vitrine.length)
      if (this.final + this.moyenne < this.Vitrine.length) {
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
          this.moyenne = parseInt(this.Vitrine.length)
          this.start = 0;
        } else {
          this.moyenne = parseInt(event.target.value)
          this.start = 0;
          // this.final = this.final + this.moyenne;

        }
        this.final = this.moyenne;
      }

      console.log(this.final)
    }
  },
  data() {
    return {
      start: 0, final: 10,
      moyenne: 10,
      // max: this.Vitrine.value.length
    }
  },
  setup() {
    let loading = ref(true);
    let loading0 = ref(true);
    let CONFIG = ref(false);

    let loadingPatchVitrine = ref(false);
    let confirmPassword = ref('');

    let Vitrine = ref([]);

    let promptValid = ref(false);
    let promptEntete = ref(false);
    let promptAboutUs = ref(false);
    let promptService = ref(false);
    let promptGalerie = ref(false);
    let promptTemoignage = ref(false);
    let promptFooter = ref(false);
    let toast = createToaster();
    let nom = ref('');
    let description = ref('');

    // let VitrineId = ref(0); 
    onMounted(async () => {


      await getVitrine();

      loading.value = false;

    });
    async function getVitrine() {
      // loading0.value = true
      const response = await new RequestApi().getListVitrineUser();
      if (response.status) {
        loading0.value = false
        Vitrine.value = response.data
      }
      else {
        loading0.value = false

        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
      }
      // console.log('Vitrine.value***', Vitrine.value);

    }
    async function getVitrineUser() {
      // loading0.value = true
      const response = await new RequestApi().getVitrineUserSelect(nom.value);
      if (response.status) {
        loading0.value = false
        console.log(response.data);
        if (typeVitrine.value == 1) {
          selectVitrine(response.data)
        }
      }
      else {
        loading0.value = false

        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
      }
      // console.log('Vitrine.value***', Vitrine.value);

    }
    const openValid = () => {
      promptValid.value = !promptValid.value;


    };

    let header = ref('');
    let typeVitrine = ref('');
    let vitrineS = ref({});
    let premierTitre = ref('');
    let secondTitre = ref('');
    let aboutUs = ref('');
    let eService = ref('');
    let dService = ref('');
    let tGalerie = ref('');
    let sGalerie = ref('');
    let nomT = ref('');
    let posteT = ref('');
    let commentT = ref('');
    let imgT = ref(null);
    let imageG = ref(null);
    let commentF = ref('');
    let emailF = ref('');



    let statusH = ref(true);
    let statusA = ref(true);
    let statusS = ref(true);
    let statusG = ref(true);
    let statusT = ref(true);
    let statusF = ref(true);
    let statusC = ref(true);
    let updateVitrine = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '27') ? true : false : false;

    let descriptionC = ref('');
    let emailC = ref();
    let findUsC = ref();
    let followC = ref('');
    let contactC = ref('');
    let idVitrine = ref('');
    let numero1 = ref(0);
    let numero2 = ref(0);
    let listTheme = ref([]);
    const selectVitrine = (vitrine) => {
      // console.log('ddd', vitrine)
      vitrineS.value = vitrine;
      typeVitrine.value = vitrine.typeVitrine
      idVitrine.value = vitrine.id
      nom.value = vitrine.title;
      description.value = vitrine.description;
      metaDescription.value = vitrine.metaDescription;
      titreSite.value = vitrine.titreSite;
      metaKey.value = vitrine.metaKey;
      if (typeVitrine.value == 1) {
        premierTitre.value = vitrine.header.title.text ?? ''
        secondTitre.value = vitrine.header.description.text ?? ''
        statusH.value = vitrine.header.status


        statusA.value = vitrine.aboutUs.status
        if (statusA.value) {
          aboutUs.value = vitrine.aboutUs.description.text ?? ''
        } statusS.value = vitrine.service.status
        if (statusS.value) {
          eService.value = vitrine.service.title.text
          dService.value = vitrine.service.description.text
          listServices.value = (vitrine.service.data.length == 0) ? listServices.value : vitrine.service.data
          listServicesSave.value = listServices.value
          for (var i = 0; i < listServices.value.length; i++) {
            listImages.value.push(listServices.value[i].url)
          }
        }
        statusG.value = vitrine.galerie.status
        if (statusG.value) {
          tGalerie.value = vitrine.galerie.title.text
          sGalerie.value = vitrine.galerie.description.text
          listGaleries.value = (vitrine.galerie.data.length == 0) ? listGaleries.value : vitrine.galerie.data
          for (var j = 0; j < listGaleries.value.length; j++) {
            listImagesG.value.push(listGaleries.value[j].url)
          }
          // console.log(listImagesG.value)
        }
        // commentF.value = vitrine.contactUs.description.text
        // emailF.value = vitrine.contactUs.email.text
        statusC.value = vitrine.contactUs.status

        if (statusC.value) {
          descriptionC.value = vitrine.contactUs.description.text
          emailC.value = vitrine.contactUs.email.text

          findUsC.value = vitrine.contactUs.findUs.text
          followC.value = vitrine.contactUs.followUs
          contactC.value = vitrine.contactUs.contactUs
        }
        statusConf.value = vitrine.confiance.status
        if (statusConf.value) {
          listConfiances.value = (vitrine.confiance.data.length == 0) ? listConfiances.value : vitrine.confiance.data
          for (var l = 0; l < listConfiances.value.length; l++) {
            listImagesC.value.push(listConfiances.value[l].url)
          }
        }

        statusF.value = vitrine.footer.status
        statusT.value = vitrine.temoignage.status
        if (statusT.value) {

          listTemoignages.value = vitrine.temoignage.data.length == 0 ? listTemoignages.value : vitrine.temoignage.data

          for (var k = 0; k < listTemoignages.value.length; k++) {
            listImagesT.value.push(listTemoignages.value[k].url)
          }
        }
        listTheme.value = vitrine.theme;
        header.value = vitrine.header; getER(vitrine.ereputation); CONFIG.value = true
      }
      else {
        CONFIG.value = true;
        if (statusC.value) {
          descriptionC.value = vitrine.contactUs.description.text
          emailC.value = vitrine.contactUs.email.text

          findUsC.value = vitrine.contactUs.findUs.text

          // contactC.value = vitrine.contactUs.contactUs
        }
        getER(vitrine.ereputation)
      }

    }
    function focus() {
      // console.log('ffocus');
      // console.log('ffocus');
    }

    let loadingA = ref(false);
    let loadingS = ref(false);
    let loadingC = ref(false);
    let loadingG = ref(false);
    let loadingT = ref(false);
    let loadingConf = ref(false);
    let imageH = ref(null);
    let listGaleries = ref([{ id: 0, title: '', description: '', url: '' }])
    let listConfiances = ref([{ id: 0, nom: '', poste: '', url: '' }])
    let listServices = ref([{ id: 0, title: '', description: '', url: '' }])
    let listTemoignages = ref([{ id: 0, nom: '', poste: '', description: '', url: '' }])
    let listServicesSave = ref([{ id: 0, title: '', description: '', url: '' }])
    let listImages = ref([])
    let listImagesG = ref([])
    let listImagesC = ref([])
    let listImagesT = ref([])
    let loadingPatch1 = ref(false);
    let statusConf = ref(false)

    async function updateImgH() {
      if (imageH.value != null) {
        loadingPatch1.value = true;
        loadingPatchVitrine.value = true;
        // console.log('imageH.value', imageH.value)
        const response = await new RequestApi().ObjectUpdate(vitrineS.value.header.image.id, null, imageH.value);
        if (response.status) {
          await getVitrineUser();
          loadingPatch1.value = false;
          loadingPatchVitrine.value = false;
          //
          toast.success(`Success.`, {
            // override the global option
            position: "bottom"
          });
        }
        else {
          loadingPatchVitrine.value = false;
          loadingPatch1.value = false;
          toast.error(`Une erreur est survenu.`, {
            // override the global option
            position: "bottom"
          });
        }
      } else {
        loadingPatchVitrine.value = false;
        loadingPatchLogo.value = false;
        toast.error(`Veuillez choisir une image.`, {
          // override the global option
          position: "bottom"
        });
      }
      // console.log(loadingPatch1.value)

    }
    async function updateSection(i) {
      let data = [];
      // console.log(vitrineS.value)
      if (i == 2) {
        loadingA.value = true;
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          idSection: vitrineS.value.aboutUs.id
        }
      }
      else if (i == 3) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          idSection: vitrineS.value.service.id
        }
        loadingS.value = true;

      }
      else if (i == 4) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          idSection: vitrineS.value.galerie.id
        }
        loadingG.value = true;

      }
      else if (i == 5) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          idSection: vitrineS.value.temoignage.id
        }
        loadingT.value = true;

      }
      else if (i == 6) {

        data.value = {
          keySecret: VueCookies.get('keySecret'),
          idSection: vitrineS.value.contactUs.id
        }
        loadingC.value = true;
      } else if (i == 7) {

        data.value = {
          keySecret: VueCookies.get('keySecret'),
          idSection: vitrineS.value.confiance.id
        }
        loadingConf.value = true;
      }




      const response = await new RequestApi().sectionUpdate(data.value);
      // loading0.value = true;
      await getVitrineUser();

      if (response.status) {
        if (i == 2) {
          statusA.value = !statusA.value;
          promptAboutUs.value = false;

        }
        else if (i == 3) {

          statusS.value = !statusS.value;
          promptService.value = false;

        }
        else if (i == 4) {

          statusG.value = !statusG.value;
          promptGalerie.value = false;

        }
        else if (i == 5) {

          statusT.value = !statusT.value;
          promptTemoignage.value = false;
        } else if (i == 6) {

          statusC.value = !statusC.value;
          promptContactUs.value = false;
        } else if (i == 7) {

          statusConf.value = !statusConf.value;
          promptConf.value = false;
        }


      }
      loadingA.value = false;
      loadingS.value = false;
      loadingG.value = false;
      loadingT.value = false;
      loadingConf.value = false;
      loadingC.value = false;
      loading.value = false;
    }

    async function updateContenu(i) {

      let data = ref([]);
      // console.log(i)
      //header title
      if (i == 1) {

        data.value = {
          keySecret: VueCookies.get('keySecret'),
          idContenu: vitrineS.value.header.title.id,
          action: 3,
          description: premierTitre.value
        }
      }
      //header subtitle
      if (i == 2) {

        data.value = {
          keySecret: VueCookies.get('keySecret'),
          idContenu: vitrineS.value.header.description.id,
          action: 3,
          description: secondTitre.value
        }
      }
      //aboutUs containe
      else if (i == 3) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          idContenu: vitrineS.value.aboutUs.description.id,
          action: 3,
          description: aboutUs.value
        }
      }
      //service title
      else if (i == 4) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          idContenu: vitrineS.value.service.title.id,
          action: 3,
          description: eService.value
        }


      }
      //service subtitle
      else if (i == 5) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          idContenu: vitrineS.value.service.description.id,
          action: 3,
          description: dService.value
        }


      }
      //galerie title
      else if (i == 6) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          idContenu: vitrineS.value.galerie.title.id,
          action: 3,
          description: tGalerie.value
        }

      }
      //galerie subtitle
      else if (i == 7) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          idContenu: vitrineS.value.galerie.description.id,
          action: 3,
          description: sGalerie.value
        }

      }
      //footer comment
      else if (i == 8) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: vitrineS.value.footer.data[0].id,
          description: commentF.value
        }

      }
      //footer mail
      else if (i == 9) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: vitrineS.value.footer.data[1].id,
          description: emailF.value
        }

      }
      //description COnt
      else if (i == 10) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: vitrineS.value.contactUs.description.id,
          description: descriptionC.value
        }

      }

      // mail COnt
      else if (i == 11) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: vitrineS.value.contactUs.email.id,
          description: emailC.value
        }

      }
      //findUs COnt
      else if (i == 12) {
        console.log('ooo0')
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: vitrineS.value.contactUs.findUs.id,
          description: findUsC.value
        }

      }
      //follow COnt
      else if (i == 13) {
        data.value = (selectText.value.url != null) ? {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: selectText.value.id,
          description: sText.value,
          lien: sLien.value,
        } : {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: selectText.value.id,
          description: sText.value,

        }

      }
      //findUs COnt
      else if (i == 14) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: vitrineS.value.contactUs.findUs.id,
          description: findUsC.value
        }

      }
      //findUs COnt
      else if (i == 15) {
        if (results.value.isValid) {
          data.value = {
            keySecret: VueCookies.get('keySecret'),
            action: 3,
            idContenu: vitrineS.value.contactUs.contactUsPhone[0].id,
            description: '+' + results.value.countryCallingCode + results.value.nationalNumber
          }
        } else {
          toast.error(`Veuillez entrer des numeros corrects`, {
            // override the global option
            position: "bottom"
          });
          return false;
        }

      } else if (i == 16) {
        if (results1.value.isValid) {
          data.value = {
            keySecret: VueCookies.get('keySecret'),
            action: 3,
            idContenu: vitrineS.value.contactUs.contactUsPhone[1].id,
            description: '+' + results1.value.countryCallingCode + results1.value.nationalNumber
          }
        } else {
          toast.error(`Veuillez entrer des numeros corrects`, {
            // override the global option
            position: "bottom"
          });
          return false;

        }

      }


      await new RequestApi().sectionModifyContenu(data.value)
      await getVitrineUser();

    }

    let descriptionG = ref('');
    let titleG = ref('');
    let results = ref('');
    let results1 = ref('');
    let loadingAddG = ref(false);
    async function addToServiceOrGalerie(type) {
      if (imageG.value != null) {

        loadingAddG.value = true;


        let data = { type: type, idSection: type == 1 ? vitrineS.value.service.id : vitrineS.value.galerie.id, descriptionImg: descriptionG.value, titleImg: titleG.value }
        const response = await new RequestApi().sectionUpdateF(data, imageG.value);
        if (response.status) {
          await getVitrineUser();
          imageG.value = null;
          descriptionG.value = '';

          titleG.value = '';
          loadingAddG.value = false;
          //
          toast.success(`Success.`, {
            // override the global option
            position: "bottom"
          });
        }
        else {
          //
          loadingAddG.value = false;
          toast.error(`Une erreur est survenu.`, {
            // override the global option
            position: "bottom"
          });
        }
      }
      else {
        //
        // loadingPatchVitrine.value = false;
        toast.error(`Veuillez choisir une image.`, {
          // override the global option
          position: "bottom"
        });
      }
    }

    async function addToServiceOrGalerieCustom(type, title, description, image) {

      // console.log(image)

      loadingAddG.value = true;


      let data = { type: type, idSection: type == 1 ? vitrineS.value.service.id : vitrineS.value.galerie.id, descriptionImg: description, titleImg: title }
      const response = await new RequestApi().sectionUpdateF(data, image);
      if (response.status) {
        await getVitrineUser();
        imageG.value = null;
        descriptionG.value = '';
        titleG.value = '';
        loadingAddG.value = false;
        //
        toast.success(`Success.`, {
          // override the global option
          position: "bottom"
        });
      }
      else {
        //
        loadingAddG.value = false;
        toast.error(`Une erreur est survenu.`, {
          // override the global option
          position: "bottom"
        });
      }

    }
    let loadingAddConf = ref(false);
    async function addToServiceOrConfianceCustom(nom, poste, image) {


      loadingAddConf.value = true;


      let data = { type: 2, idSection: vitrineS.value.confiance.id, nomTemoin: nom, posteTemoin: poste, keySecret: VueCookies.get('keySecret'), }
      const response = await new RequestApi().sectionUpdateF(data, image);
      if (response.status) {
        await getVitrineUser();
        imgT.value = null;
        posteConf.value = '';
        titleG.value = '';
        loadingAddConf.value = false;
        //
        toast.success(`Success.`, {
          // override the global option
          position: "bottom"
        });
      }
      else {
        //
        loadingAddConf.value = false;
        toast.error(`Une erreur est survenu.`, {
          // override the global option
          position: "bottom"
        });
      }

    }

    let loadingAddT = ref(false);
    let loadingAddN = ref(false);
    let titreLien = ref('');
    let hrLien = ref('http://');
    let contactUsValue = ref('');


    async function addForContactUs(type) {



      let data = ref();
      if (type == 1) {
        data.value = { type: 1, idSection: vitrineS.value.contactUs.id, description: contactUsValue.value, }
        loadingAddT.value = true;
      }

      if (type == 2) {

        data.value = { type: 2, idSection: vitrineS.value.contactUs.id, lien: hrLien.value, description: titreLien.value, }
        loadingAddN.value = true;
      }
      const response = await new RequestApi().sectionUpdateC(data.value);
      if (response.status) {
        await getVitrineUser();

        contactUsValue.value = '';
        hrLien.value = 'http://';
        titreLien.value = '';

        loadingAddN.value = false;
        loadingAddT.value = false;
        toast.success(`Success.`, {
          // override the global option
          position: "bottom"
        });
      }
      else {
        //
        loadingAddN.value = false;
        loadingAddT.value = false;
        toast.error(`Une erreur est survenu.`, {
          // override the global option
          position: "bottom"
        });
      }

    }
    async function addTemoin(nom, poste, description, image) {
      if (image != null) {

        loadingAddT.value = true;


        let data = { type: 2, idSection: vitrineS.value.temoignage.id, nomTemoin: nom, posteTemoin: poste, description: description, titleImg: '', keySecret: VueCookies.get('keySecret'), }
        const response = await new RequestApi().sectionUpdateF(data, image);
        if (response.status) {
          await getVitrineUser();

          descriptionG.value = '';
          titleG.value = '';
          loadingAddT.value = false;
          //
          toast.success(`Success.`, {
            // override the global option
            position: "bottom"
          });
        }
        else {
          //
          loadingAddT.value = false;
          toast.error(`Une erreur est survenu.`, {
            // override the global option
            position: "bottom"
          });
        }
      }
      else {
        //
        // loadingPatchVitrine.value = false;
        toast.error(`Veuillez choisir une image.`, {
          // override the global option
          position: "bottom"
        });
      }
    }
    let loadingUp = ref(false);
    let metaDescription = ref('')
    let metaKey = ref('')
    let titreSite = ref('')
    const changeTheme = async (theme) => {
      if (theme.status == false) {



        loadingPatchVitrine.value = true;

        await new RequestApi().changeThemeVitrine(idVitrine.value, theme.id);
        await getVitrineUser();
        //if (response.status) {



        loadingPatchVitrine.value = false;


        //toast.success(`Vitrine mise a jour avec success.`, {
        // override the global option
        //  position: "bottom"
        //   });
        // } else {
        //   loadingPatchVitrine.value = false;
        //   if (response.aff) {
        //    toast.error(`Erreur mise a jour de la Vitrine.`, {
        // override the global option
        //      position: "bottom"
        //     });
        //    }



        // }
      } else {


        toast.error(`Veuillez selectionner un theme different.`, {
          // override the global option
          position: "bottom"
        });


      }
    }

    const upDateND = async () => {
      // console.log(new FormatData().verifCorrectText(nom.value))
      // console.log(new FormatData().verifCorrectText(description.value))
      if ((nom.value.length != 0)) {


        if (new FormatData().verifCorrectText(nom.value)) {

          const vitrine = {
            nom: nom.value,
            description: description.value,
            metaDescription: metaDescription.value,
            metaKey: metaKey.value,
            titreSite: titreSite.value,
            keySecret: VueCookies.get('keySecret'),
            idVitrine: idVitrine.value
          };
          // console.log(vitrine)
          loadingUp.value = true;
          const response = await new RequestApi().updateVitrineUser(vitrine);
          if (response.status) {
            await getVitrineUser();

            loadingUp.value = false;
            loading.value = false;

            toast.success(`Vitrine mise a jour avec success.`, {
              // override the global option
              position: "bottom"
            });
          } else {
            loadingUp.value = false;

            toast.error(`Erreur mise a jour de la Vitrine.`, {
              // override the global option
              position: "bottom"
            });


          }
        } else {
          loadingUp.value = false;

          toast.error(`Veuillez entrer du text uniquement `, {
            // override the global option
            position: "bottom"
          });


        }





      } else {
        toast.error(`Veuillez entrer des informations correct`, {
          // override the global option
          position: "bottom"
        });
      }


    }; const parse = (data) => {
      return new textToHtml().parse(data)
    }
    let promptContactUs = ref(false)


    function verifImgExist(src) {
      console.log(src)
      const img = new Image();
      img.src = src;
      let finalImg = ref("../../assets/img/default_images1.png")
      if (img.complete) {

        // console.log('8888***')
        return src;
      } else {
        img.onload = () => {
          // console.log('sssss***')
          finalImg.value = src

        };

        img.onerror = () => {
          finalImg.value = "../../assets/img/default_images1.png"
          console.log('errro***')
          // finalImg.value = "../../../public/assets/img/default_images1.png";

        };
      }
      return finalImg.value;


    }
    let showG = ref(false);
    let showS = ref(false);
    let showT = ref(false);
    let galSelect = ref(null)
    let galTitle = ref('')
    let galDescription = ref('')
    function showInfoPubVue(galerie) {
      galSelect.value = galerie;
      galTitle.value = galerie.title
      galDescription.value = galerie.description
      showG.value = true
    }
    function showInfoServiceVue(service) {
      galSelect.value = service;
      galTitle.value = service.title
      galDescription.value = service.description
      showS.value = true
    }
    function showInfoTVue(temoignage) {
      galSelect.value = temoignage;
      nomTemoin.value = temoignage.nom
      posteTemoin.value = temoignage.poste
      desciptionTemoin.value = temoignage.description
      showT.value = true
    }
    let showText = ref(false)
    let selectText = ref([])
    let sText = ref('')
    let sLien = ref('')
    function showModifyText(selectT) {
      selectText.value = selectT;
      sText.value = selectT.text
      sLien.value = selectT.url ?? ''
      showText.value = true
    }
    async function updateImgH2() {
      if (imageG.value != null) {
        showG.value = false
        let ok = formatdata.verifImage(imageG.value, 1)
        if (ok) {
          loadingPatchVitrine.value = true;
          const response = await new RequestApi().ObjectUpdate(galSelect.value.id, imageG.value);
          if (response.status) {
            loadingPatchVitrine.value = false;
            await getVitrineUser();
            //
            toast.success(`Success.`, {
              // override the global option
              position: "bottom"
            });
          }
          else {
            //
            loadingPatchVitrine.value = false;
            toast.error(`Une erreur est survenu.`, {
              // override the global option
              position: "bottom"
            });
          }
        }
        else {
          loadingPatchVitrine.value = false;
          loadingPatchLogo.value = false;
          toast.error(`Choisissez une image de largeur suppereiur a 1050px et de hauteur suppereiur a  700px au format 4x4`, {
            // override the global option
            position: "bottom"
          });
        }
      } else {
        //
        loadingPatchLogo.value = false;
        toast.error(`Veuillez choisir une image.`, {
          // override the global option
          position: "bottom"
        });
      }
    }
    let imageLogo = ref(null)
    let loadingPatchLogo = ref(false)
    let formatdata = new FormatData();
    async function updateImgLogo() {


      if (imageLogo.value != null) {
        let ok = formatdata.verifImage(imageLogo.value, 0)
        if (ok) {
          // console.lig(idVitrine.value,)
          loadingPatchLogo.value = true;
          loadingPatchVitrine.value = true;

          const response = await new RequestApi().ObjectUpdate(null, idVitrine.value, imageLogo.value);
          if (response.status) {
            await getVitrineUser();
            loadingPatchLogo.value = false;
            loadingPatchVitrine.value = false;
            //
            toast.success(`Success.`, {
              // override the global option
              position: "bottom"
            });
          }
          else {
            loadingPatchVitrine.value = false;
            loadingPatchLogo.value = false;
            toast.error(`Une erreur est survenu.`, {
              // override the global option
              position: "bottom"
            });
          }
        }
        else {
          loadingPatchVitrine.value = false;
          loadingPatchLogo.value = false;
          toast.error(`Choisissez une image de taille 96 => 96px au format 4x4`, {
            // override the global option
            position: "bottom"
          });
        }
      } else {
        loadingPatchVitrine.value = false;
        loadingPatchLogo.value = false;
        toast.error(`Veuillez choisir une image.`, {
          // override the global option
          position: "bottom"
        });
      }
    }
    let faviconLogo = ref(null)
    let loadingPatchIco = ref(false)

    async function updateFavicon() {


      if (faviconLogo.value != null) {
        let ok = formatdata.verifImage(faviconLogo.value, 0)
        if (ok) {
          loadingPatchVitrine.value = true;
          loadingPatchIco.value = true;
          const response = await new RequestApi().ObjectUpdate(vitrineS.value.header.favIcon.id, null, faviconLogo.value);
          if (response.status) {
            await getVitrineUser();
            loadingPatchIco.value = false;
            loadingPatchVitrine.value = false;
            //
            toast.success(`Success.`, {
              // override the global option
              position: "bottom"
            });
          }
          else {
            loadingPatchVitrine.value = false;
            loadingPatchIco.value = false;
            toast.error(`Une erreur est survenu.`, {
              // override the global option
              position: "bottom"
            });
          }
        }
        else {
          //
          loadingPatchVitrine.value = false; loadingPatchIco.value = false;
          toast.error(`Choisissez une image de taille 96 => 96px au format 4x4`, {
            // override the global option
            position: "bottom"
          });
        }
      } else {
        //
        loadingPatchVitrine.value = false; loadingPatchIco.value = false;
        toast.error(`Veuillez choisir une image.`, {
          // override the global option
          position: "bottom"
        });
      }
    }
    async function updateTemoin(id, nom, poste, description) {
      if (id != 0) {

        let data = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: id,
          nomTemoin: nom,
          posteTemoin: poste,
          description: description
        }


        const response = await new RequestApi().sectionModifyContenu(data)
        if (response.status) {

          await getVitrineUser();
          //
          toast.success(`Success.`, {
            // override the global option
            position: "bottom"
          });
        }
        else {
          //

          toast.error(`Une erreur est survenu.`, {
            // override the global option
            position: "bottom"
          });
        }
      }
    }

    async function updateConfiance(id, nom, poste) {
      if (id != 0) {

        let data = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: id,
          nomTemoin: nom,
          posteTemoin: poste,
        }

        console.log(data)
        const response = await new RequestApi().sectionModifyContenu(data)
        if (response.status) {
          await getVitrineUser();

          //
          toast.success(`Success.`, {
            // override the global option
            position: "bottom"
          });
        }
        else {
          //

          toast.error(`Une erreur est survenu.`, {
            // override the global option
            position: "bottom"
          });
        }
      }
    }

    async function updateGal(i) {
      // console.log(galSelect.value)
      let data = ref([])
      if (i == 1) {


        data.value = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: galSelect.value.id,
          titleImg: galTitle.value
        }

      } else if (i == 2) {



        data.value = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: galSelect.value.id,
          descriptionImg: galDescription.value
        }

      } else if (i == 3) {



        data.value = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: galSelect.value.id,
          nomTemoin: nomTemoin.value
        }

      } else if (i == 4) {



        data.value = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: galSelect.value.id,
          posteTemoin: posteTemoin.value
        }

      } else if (i == 5) {



        data.value = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: galSelect.value.id,
          description: desciptionTemoin.value
        }

      }
      const response = await new RequestApi().sectionModifyContenu(data.value)
      if (response.status) {
        await getVitrineUser();

        //
        toast.success(`Success.`, {
          // override the global option
          position: "bottom"
        });
      }
      else {
        //

        toast.error(`Une erreur est survenu.`, {
          // override the global option
          position: "bottom"
        });
      }
    }
    let statusMeta = ref(true)
    let promptMeta = ref(false)
    let nomTemoin = ref('')
    let posteTemoin = ref('')
    let desciptionTemoin = ref('')
    let nomConf = ref('')
    let posteConf = ref('')

    let promptConf = ref(false)
    async function updateBackService() {

      let ok = formatdata.verifImage(imgT.value, 1);
      console.log(ok);
      if (ok == true) {
        loadingPatchVitrine.value = true;
        // loadingPatchIco.value = true;
        const response = await new RequestApi().ObjectUpdate(vitrineS.value.service.image.id, null, imgT.value);
        if (response.status) {
          // loadingPatchIco.value = false;
          await getVitrineUser();
          loadingPatchVitrine.value = false;     //
          toast.success(`Success.`, {
            // override the global option
            position: "bottom"
          });
        }
        else {
          loadingPatchVitrine.value = false;     //
          // loadingPatchIco.value = false;
          toast.error(`Une erreur est survenu.`, {
            // override the global option
            position: "bottom"
          });
        }
      }
      else {
        loadingPatchVitrine.value = false;
        loadingPatchLogo.value = false;
        toast.error(`Choisissez une image de largeur suppereiur a 1050px et de hauteur suppereiur a  700px au format 4x4`, {
          // override the global option
          position: "bottom"
        });
      }

    }

    let hrLienFb = ref('')
    let hrLienTw = ref('')
    let hrLienIg = ref('')
    let hrLienSc = ref('')
    let hrLienTl = ref('')
    let hrLienWh = ref('')
    let hrLienSt = ref('')
    let hrLienTk = ref('')
    let idFb = ref('')
    let idTw = ref('')
    let idIg = ref('')
    let idSc = ref('')
    let idTl = ref('')
    let idWh = ref('')
    let idSt = ref('')
    let idTk = ref('')

    function getER(ereputation) {
      // console.log(ereputation.data)
      hrLienFb.value = ereputation.data[0].lien
      hrLienTw.value = ereputation.data[1].lien
      hrLienIg.value = ereputation.data[2].lien
      hrLienSc.value = ereputation.data[3].lien
      hrLienTl.value = ereputation.data[4].lien
      hrLienWh.value = ereputation.data[5].lien
      hrLienSt.value = ereputation.data[6].lien
      hrLienTk.value = ereputation.data[7].lien

      idFb.value = ereputation.data[0].id
      idTw.value = ereputation.data[1].id
      idIg.value = ereputation.data[2].id
      idSc.value = ereputation.data[3].id
      idTl.value = ereputation.data[4].id
      idWh.value = ereputation.data[5].id
      idSt.value = ereputation.data[6].id
      idTk.value = ereputation.data[7].id
    }
    async function updateContenuER(idContenu, lien) {

      let data = ref([]);
      if (lien.includes('http://') || lien.includes('https://')) {

        data = {
          keySecret: VueCookies.get('keySecret'),
          idContenu: idContenu,
          action: 3,
          lien: lien
        }




        const response = await new RequestApi().sectionModifyContenu(data)
        if (response.status) {
          await getVitrineUser();
          // loadingPatchIco.value = false;
          //
          toast.success(`Success.`, {
            // override the global option
            position: "bottom"
          });
        }
        else {
          //
          // loadingPatchIco.value = false;
          toast.error(`Une erreur est survenu.`, {
            // override the global option
            position: "bottom"
          });
        }
      }
      else {
        //
        // loadingPatchIco.value = false;
        toast.error(`Veuillez entrer un lien complet, Ex: http://www...`, {
          // override the global option
          position: "bottom"
        });
      }

    }

    let view = ref(false);
    async function updateNewE(id, title, description) {
      // console.log(galSelect.value)
      let data = ref([])


      if (id != 0) {
        data.value = {
          keySecret: VueCookies.get('keySecret'),
          action: 3,
          idContenu: id,
          titleImg: title,

          descriptionImg: description
        }


        const response = await new RequestApi().sectionModifyContenu(data.value)
        if (response.status) {
          await getVitrineUser();

          //
          toast.success(`Success.`, {
            // override the global option
            position: "bottom"
          });
        }
        else {
          //

          toast.error(`Une erreur est survenu.`, {
            // override the global option
            position: "bottom"
          });
        }
      }
      else {
        //

        // toast.error(`Veuillez remplir tous les champs.`, {
        //   // override the global option
        //   position: "bottom"
        // });
      }
    }

    let selectService = ref(0);
    async function updateImgH2New() {
      let ok = formatdata.verifImage(imageG.value, 1)
      if (ok) {
        showG.value = false
        // console.log(selectService.value, imageG.value)
        loadingPatchVitrine.value = true;
        const response = await new RequestApi().ObjectUpdate(selectService.value, null, imageG.value);
        if (response.status) {
          await getVitrineUser();
          loadingPatchVitrine.value = false;
          //
          toast.success(`Success.`, {
            // override the global option
            position: "bottom"
          });
        }
        else {
          //
          loadingPatchVitrine.value = false;
          toast.error(`Une erreur est survenu.`, {
            // override the global option
            position: "bottom"
          });
        }
      }
      else {
        loadingPatchVitrine.value = false;
        loadingPatchLogo.value = false;
        toast.error(`Choisissez une image de largeur suppereiur a 1050px et de hauteur suppereiur a  700px au format 4x4`, {
          // override the global option
          position: "bottom"
        });
      }

    }
    let selectConf = ref(0);
    async function updateImgConfNew() {
      let ok = formatdata.verifImage(imageG.value, 1)
      if (ok) {
        showG.value = false
        // console.log(selectConf.value, imageG.value)
        loadingPatchVitrine.value = true;
        const response = await new RequestApi().ObjectUpdate(selectConf.value, null, imageG.value);
        if (response.status) {
          await getVitrineUser();
          loadingPatchVitrine.value = false;
          //
          toast.success(`Success.`, {
            // override the global option
            position: "bottom"
          });
        }
        else {
          //
          loadingPatchVitrine.value = false;
          toast.error(`Une erreur est survenu.`, {
            // override the global option
            position: "bottom"
          });
        }
      }
      else {
        loadingPatchVitrine.value = false;
        loadingPatchLogo.value = false;
        toast.error(`Choisissez une image de largeur suppereiur a 1050px et de hauteur suppereiur a  700px au format 4x4`, {
          // override the global option
          position: "bottom"
        });
      }

    }
    let selectTemoignage = ref(0);

    async function updateT2New() {

      showG.value = false
      loadingPatchVitrine.value = true;
      const response = await new RequestApi().ObjectUpdate(selectTemoignage.value, null, imageG.value);
      if (response.status) {
        await getVitrineUser();
        loadingPatchVitrine.value = false;
        //
        toast.success(`Success.`, {
          // override the global option
          position: "bottom"
        });
      }
      else {
        //
        loadingPatchVitrine.value = false;
        toast.error(`Une erreur est survenu.`, {
          // override the global option
          position: "bottom"
        });
      }

    }

    let loadingAction = ref(false);
    async function deletteVitrine(vitrine) {

      loadingAction.value = true

      const response = await new RequestApi().deletteVitrineUser(vitrine.id);
      if (response.status) {
        getVitrine();
        loadingAction.value = false;
        //
        toast.success(`Success.`, {
          // override the global option
          position: "bottom"
        });
      }
      else {
        //
        loadingAction.value = false;
        if (response.aff) {
          toast.error(`Une erreur s'est produite`, {
            // override the global option
            position: "bottom"
          });
        }
      }

    }
    async function stateVitrine(vitrine) {

      loadingAction.value = true

      const response = await new RequestApi().stateVitrineUser(vitrine.id);
      if (response.status) {
        getVitrine();
        loadingAction.value = false;
        //
        toast.success(`Success.`, {
          // override the global option
          position: "bottom"
        });
      }
      else {
        //
        loadingAction.value = false;
        if (response.aff) {
          toast.error(`Une erreur s'est produite`, {
            // override the global option
            position: "bottom"
          });
        }
      }

    }

    const lengthText = (text, length) => {
      let tailleT = text.split('').length;
      console.log(tailleT, '*****************', length)

      if (tailleT > length) {
        console.log('*****************', text[tailleT - 1])
        text = text.replace(text[tailleT - 1], '');
        return text;
      }
      else {
        return text;
      }
    }
    let imageSS = ref(null)
    let supprimerV = (VueCookies.get('fonctions')) ? VueCookies.get('fonctions').split(',').some(value => value == '28') ? true : false : false;

    return {
      supprimerV, listTheme, changeTheme,
      deletteVitrine, loadingAction, stateVitrine,
      imageSS,
      numero1, numero2, lengthText
      , addToServiceOrGalerieCustom, updateNewE, updateImgH2New, selectTemoignage, updateT2New, selectService, listImagesG, listImagesT, updateTemoin,
      view,
      choisi: '/assets/img/default_images1.png',
      nomConf, loadingConf, statusConf, addToServiceOrConfianceCustom,
      posteConf, promptConf, loadingAddConf,
      updateContenuER, hrLienFb, hrLienTw, hrLienIg, hrLienSc, hrLienTl, hrLienWh, hrLienSt, hrLienTk,
      idFb, listImagesC, listConfiances,
      idTw,
      idIg,
      idSc,
      idTl,
      idWh,
      idSt,
      idTk,
      showModifyText, updateBackService, sText, showText, selectText, sLien, faviconLogo, updateFavicon, loadingPatchIco,
      nomTemoin, posteTemoin, desciptionTemoin, loadingAddN, addForContactUs, contactUsValue, titreLien, hrLien,
      statusMeta, promptMeta, updateImgLogo, loadingPatchLogo, imageLogo, showS, listServices, listImages,
      galTitle, galDescription, updateImgH2, updateGal, loadingPatch1,
      parse, verifImgExist, listGaleries, galSelect, showG, showInfoPubVue, showInfoServiceVue,
      loadingUp,
      upDateND,
      promptContactUs,
      descriptionC,
      emailC, results, results1,
      findUsC,
      followC,
      contactC,
      loadingAddG,
      addToServiceOrGalerie, descriptionG, titleG,
      updateImgH, imageH,
      loadingA, loadingS, loadingG, loadingT, loadingC,
      updateContenu, updateSection,
      focus, statusC,
      statusH, statusA, statusF, statusG, statusT, statusS,
      commentF, emailF,
      posteT, nomT, commentT, imgT, addTemoin, loadingAddT, listTemoignages, showT, showInfoTVue,
      tGalerie, sGalerie, imageG,
      dService, eService,
      aboutUs,
      secondTitre,
      premierTitre,
      header,
      vitrineS,
      description, nom, updateConfiance,
      openValid,
      typeVitrine, updateImgConfNew, selectConf,
      selectVitrine,
      loadingPatchVitrine,
      confirmPassword,
      promptEntete,
      promptAboutUs,
      promptService,
      promptGalerie,
      tinyKey: 'o13ry6lo0hlbqjpmdmjwq2cbe8ywkcejii6wg2mt3y5shif5',
      promptValid,
      promptTemoignage,
      promptFooter,
      loading0, open,
      Vitrine, show: false, loading, CONFIG, updateVitrine, idVitrine, metaKey, titreSite, metaDescription, toast

    };
  },
};
</script>
