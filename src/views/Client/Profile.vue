<template>

  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card w-100 mb-4 mt-8" v-if="loadingUser">
          <div class="card-body">
            <div class="   d-flex justify-content-center ">

              <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

            </div>
          </div>
        </div>

        <div class="page-header min-height-150" v-if="!loadingUser">
          <span class="mask  opacity-6"></span>
        </div>
        <div class="card shadow-lg mt-n6" v-if="!loadingUser">
          <div class="card-body p-3">

            <div class="row gx-4">
              <div class="col-auto">
                <div class="avatar avatar-xl position-relative">
                  <img :src='verifImgExist(profile)' alt="profile_image"
                    class="shadow-sm w-100 rounded-circle h-100 border-radius-lg" />
                </div>
              </div>
              <div class="col-auto my-auto">
                <div class="h-100">
                  <h5 class="mb-1">{{ nom }} {{ prenom }}</h5>
                  <p class="mb-0 font-weight-bold text-sm">{{ societe }}</p>
                </div>
              </div>
              <div class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0">
                <div class="nav-wrapper position-relative end-0">
                  <ul class="p-1 bg-transparent nav nav-pills nav-fill" role="tablist">
                    <li class="nav-item" @click="appState = 0">
                      <a class="px-0 py-1 mb-0 nav-link active" data-bs-toggle="tab" href="javascript:;" role="tab"
                        aria-selected="true">
                        <svg class="text-dark" width="16px" height="16px" viewBox="0 0 42 42" version="1.1"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(603.000000, 0.000000)">
                                  <path class="color-background"
                                    d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z" />
                                  <path class="color-background"
                                    d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"
                                    opacity="0.7" />
                                  <path class="color-background"
                                    d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"
                                    opacity="0.7" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <span class="ms-1">App</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="px-0 py-1 mb-0 nav-link" data-bs-toggle="tab" href="javascript:;" role="tab"
                        aria-selected="false">
                        <svg class="text-dark" width="16px" height="16px" viewBox="0 0 40 44" version="1.1"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <title>document</title>
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(154.000000, 300.000000)">
                                  <path class="color-background"
                                    d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                    opacity="0.603585379" />
                                  <path class="color-background"
                                    d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <span class="ms-1">Messages</span>
                      </a>
                    </li>
                    <li class="nav-item" @click="appState = 1">
                      <a class="px-0 py-1 mb-0 nav-link" data-bs-toggle="tab" href="javascript:;" role="tab"
                        aria-selected="false">
                        <svg class="text-dark" width="16px" height="16px" viewBox="0 0 40 40" version="1.1"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <title>settings</title>
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(304.000000, 151.000000)">
                                  <polygon class="color-background" opacity="0.596981957"
                                    points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667" />
                                  <path class="color-background"
                                    d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                    opacity="0.596981957" />
                                  <path class="color-background"
                                    d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <span class="ms-1">Settings</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="py-4  " v-if="!loadingUser">
          <div class="row" v-if="appState == 0">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header pb-0">
                  <div class="d-flex align-items-center">
                    <p class="mb-0 mb-3">Edit Profile</p>
                    <p color="primary" style="cursor:pointer" size="sm" class="ms-auto text-info" @click="plus = !plus">
                      {{ !plus
                          ?
                          `Mettre a jour mes
                                            informations personnels ` : 'Modifier mot de passe '
                      
                      
                      
                      
                      
                      }} </p>
                  </div>
                </div>
                <div class="card-body">
                  <div v-if="plus">

                    <p class="text-uppercase text-sm">User Information</p>
                    <div class="   row justify-content-between ">
                      <div class="col-md-6">
                        <label for="example-text-input" class="form-control-label">First name</label>
                        <input class="form-control" v-model="nom" type="text" />
                      </div>
                      <div class="col-md-6">
                        <label for="example-text-input" class="form-control-label">Last name</label>
                            <argon-input  :readonly='loadingPatchUser' type="text" v-model="prenom" />
                      </div>
                    </div>
                    <div class="   row justify-content-between ">
                      <div class="col-md-6">
                        <label for="example-text-input" class="form-control-label">Phone Number</label>
                        <input class="form-control" readonly v-model="numero" type="text" />

                      </div>
                      <div class="col-md-6">
                        <label for="example-text-input" class="form-control-label">Nom Entreprise</label>
                            <argon-input  :readonly='loadingPatchUser' v-model="societe" type="text" />
                      </div>
                    </div>
                    <div class="   row justify-content-between ">
                      <div class="col-md-6">
                        <label for="example-text-input" class="form-control-label">Poste sociale</label>
                            <argon-input  :readonly='loadingPatchUser' v-model="posteSocial" type="text" />
                      </div>
                      <div class="col-md-6 ">
                        <label for="example-text-input" class="form-control-label">Cle secrete</label>
                        <div class='  form-group form-control row col-12 ms-1 d-flex '>
                          <div class="row col-11">
                            <div class="col-10 message">
                              <span class='ms-1' v-if="voir">
                                {{ keySecret }}
                              </span>
                              <span class='ms-1' v-if="!voir">
                                ******************************************
                              </span>
                            </div>



                            <div class="col-2" align="right">
                              <i class="fa fa-eye " style="font-size:15px" v-if="!voir" @click="verifSee = true"></i>
                              <i class="fa fa-eye-slash" style="font-size:15px" @click="voir = !voir" v-else></i>
                            </div>



                          </div>





                          <div class="col-1">
                            <i class="fa fa-copy " @click="copy" style="font-size:20px" v-show="voir"></i>
                          </div>

                        </div>
                      </div>
                    </div>


                    <CustomButton :title='"  Mettre à jour"' @click='openValid' :classe="'btn btn-primary '"
                      color="success" />

                  </div>
                  <div v-else>
                    <!-- <hr class="horizontal dark" /> -->
                    <p class="text-uppercase text-sm">UPDATE PASSWORD</p>
                    <div class="row">
                      <div class="col-md-12">
                        <label for="example-text-input" class="form-control-label">Ancien mot de passe</label>
                            <argon-input  :readonly='loadingPatchPassword' v-model='password' type="password"
                          value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                      </div>
                      <div class="col-md-6">
                        <label for="example-text-input" class="form-control-label">Nouveau mot depasse</label>
                            <argon-input  :readonly='loadingPatchPassword' v-model='newMdp' @keyup='verifPassword()' type="password" />
                      </div>
                      <div class="col-md-6">
                        <label for="example-text-input" class="form-control-label">Repeter Nouveau mot depasse</label>
                            <argon-input  :readonly='loadingPatchPassword' type="password" v-model='rnewMdp' />
                      </div>
                    </div>
                    <div class="row fs  ">
                      <!-- <div col="col-6"></div>
                    <div col="col-6"></div> -->
                      <div class="col-md-6   p-2">
                        <div :class='v1 && v5 ? "bg-info form-control " : " bg-light form-control "'>
                          <i class="far fa-check-circle centered"></i> 8 characteres et 1 special
                        </div>
                      </div>
                      <div class="col-md-6   p-2">
                        <div :class='v2 ? "bg-info form-control " : " bg-light form-control "'>
                          <i class="far fa-check-circle centered"></i> Capital letter (A-Z)
                        </div>
                      </div>
                      <div class="col-md-6   p-2">
                        <div :class='v3 ? "bg-info form-control " : " bg-light form-control "'>
                          <i class="far fa-check-circle centered"></i> Lowercase letter (a-z)
                        </div>
                      </div>
                      <div class="col-md-6   p-2">
                        <div :class='v4 ? "bg-info form-control " : " bg-light form-control "'>
                          <i class="far fa-check-circle centered"></i> Number (0-9)
                        </div>
                      </div>


                    </div>
                    <CustomButton :title='" Mettre à jour"' :loading='loadingPatchPassword'
                      @update:loading="loadingPatchPassword = $event" @click='patchPassword'
                      :classe="'btn btn-primary '" color="success" />
                    <!-- 

                <hr class="horizontal dark" /> -->
                    <!-- <p class="text-uppercase text-sm">About me</p>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label">About me</label>
                      <argon-input  :readonly='loading' type="text" value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source." />
                </div>
              </div> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-profile">
                <img :src="verifImgExist(couverture)" alt="Image de couverture" class="card-img-top  " style="
                height: 10em;
            " />
                <div class="row justify-content-center" style=' position: relative;
    top: -2em;'>
                  <div class="col-4 col-lg-4 order-lg-2">
                    <!-- <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                      <a href="javascript:;">
                        <img :src='verifImgExist(profile)' class="rounded-circle img-fluid border border-2   h-100 border-white" />
                      </a>
                    </div> -->
                    <div class="avatar avatar-xl position-relative">
                      <img :src='verifImgExist(profile)' alt="Image de profile"
                        class="shadow-sm w-100 rounded-circle img-fluid h-100 border-radius-lg" style=' border: 3px solid white;
' />
                    </div>
                  </div>
                </div>

                <div class="card-body pt-0" v-if="!show" style=' position: relative;
    top: -2em;'>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex justify-content-center">
                        <div class="d-grid text-center">
                          <span class="text-lg font-weight-bolder">{{ friend }}</span>
                          <span class="text-sm opacity-8">Clients</span>
                        </div>
                        <div class="d-grid text-center mx-4">
                          <span class="text-lg font-weight-bolder">{{ project }}</span>
                          <span class="text-sm opacity-8">Projets</span>
                        </div>
                        <div class="d-grid text-center">
                          <span class="text-lg font-weight-bolder">{{ vitrine }}</span>
                          <span class="text-sm opacity-8">Vitrines</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center mt-2">
                    <h5>
                      {{ nom }}
                      {{ prenom }}
                      <!-- <span class="font-weight-light">, 35</span> -->
                    </h5>
                    <!-- <div class="h6 font-weight-300">
                      <i class="ni location_pin mr-2"></i>Bucharest, Romania
                    </div> -->
                    <small>
                      {{ posteSocial }}
                      à {{ societe }}
                    </small>
                  </div>
                </div>


                 
                <div class=" ms-2 me-2 text-center border-0 pt-0 pb-4 pb-lg-3" style=' position: relative;
    top: -1em;'>
                  <div class="d-flex justify-content-center">
                    <a href="javascript:;" class="btn btn-sm btn-primary  mb-0 d-none d-lg-block"
                      style='text-decoration:none'>Social
                      Connect</a>
                    <a href="javascript:;" class="btn btn-sm btn-info mb-0 d-block d-lg-none">
                      <i class="ni ni-collection"></i>
                    </a>
                    <!--  <a href="javascript:;" class="btn btn-sm btn-dark float-right mb-0 d-none d-lg-block"
                      @click="modif">Modifier</a>
                    <a href="javascript:;" class="btn btn-sm btn-dark float-right mb-0 d-block d-lg-none">
                      <i class="ni ni-email-83"></i>
                    </a> -->
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div class="row" v-if="appState == 1">

            <div class=" col-xl-12 col-lg-12 col-md-7 ">
              <div class="card  ">


                <div class="card-body pt-0">
                  <div class="col-1" v-if="loadingUpdate">

                    <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>


                  </div>
                  <div class="  mt-0" v-else>
                    <div class="row justify-content-center">
                      <div class="col-lg-5 text-center mx-auto">
                        <h1 class=" mb-2 mt-2">Setting!</h1>
                        <p class="text-lead  e">Mettre a jour votre photo de profil et image publicitaire.</p>
                      </div>
                    </div>
                    <div class='row'>

                      <div class="col-lg-4 col-sm-12 position-relative">
                        <img :src='verifImgExist(couverture)' alt="Image de profile"
                          class="shadow-sm w-100   img-fluid h-100 border-radius-lg" style=' border: 3px solid white;
                      ' />
                      </div>
                      <div class="col-lg-6 col-sm-12  ">
                        <label>Inserer image De Profil</label>

                            <argon-input   icon="../assets/img/team-2.jpg" type="file" placeholder="Description"
                          aria-label="Name" accept=".png, .jpeg,.jpg" @change="onFileChange" />



                      </div>
                    </div>
                    <div class='row'>
                      <div class="col-lg-4 col-sm-12 position-relative">
                        <img :src='verifImgExist(profile)' alt="Image de profile"
                          class="shadow-sm w-100   img-fluid h-100 border-radius-lg" style=' border: 3px solid white;
  ' />
                      </div>
                      <div class="col-lg-6 col-sm-12  ">
                        <label>Inserer image publicitaire</label>
                            <argon-input    icon="../assets/img/team-2.jpg" type="file" placeholder="Description"
                          aria-label="Name" accept=".png, .jpeg,.jpg" @change="onFileChange2" />



                      </div>
                    </div>







                  </div>
                </div>
                <!--   <div class=" ms-2 me-2 text-center border-0 pt-0 pb-4 pb-lg-3" style=' position: relative;
      top: -1em;'>
                  <div class="d-flex justify-content-between">

                    <a href="javascript:;" class="btn btn-sm btn-dark float-right mb-0 d-none d-lg-block"
                      @click="modif">Modifier</a>
                    <a href="javascript:;" class="btn btn-sm btn-dark float-right mb-0 d-block d-lg-none">
                      <i class="ni ni-email-83"></i>
                    </a>
                  </div>
                </div> -->
              </div>

            </div>
          </div>


















          <vue-final-modal v-model="verifSee" style="" classes="modal-container" content-class="modal-content">

            <!-- <span class="modal__title">Finalisation de la mise a jour</span> -->
            <span class="border-bottom mb-3">Veuillez saisir votre mot de passe</span>
            <div class="modal__content">

              <label for="">Mot de passe</label>
              <input type="password"  :readonly='loadingPatchUser' v-model="confirmPassword" class="form-control col-2 ">

            </div>
            <div class="modal__action">
              <CustomButton :title='"Confirmer"' :loading='loadingPatchUser' @update:loading="loadingPatchUser = $event"
                @click='seeKey' :classe="'btn btn-primary '" />

            </div>
          </vue-final-modal>
          <vue-final-modal v-model="promptValid" style="" classes="modal-container" content-class="modal-content">

            <span class="modal__title">Finalisation de la mise a jour</span>
            <span class="border-bottom mb-3">Veuillez saisir votre mot de passe</span>
            <div class="modal__content">

              <label for="">Mot de passe</label>
              <input type="password " :readonly='loadingPatchUser'  v-model="confirmPassword" class="form-control col-2 ">

            </div>
            <div class="modal__action">
              <CustomButton :title='"Confirmer"' :loading='loadingPatchUser' @update:loading="loadingPatchUser = $event"
                @click='patchUser' :classe="'btn btn-primary '" />

            </div>
          </vue-final-modal>
          <vue-final-modal v-model="achat" style="" classes="modal-container-paiement   "
            content-class="modal-content-paiement">

            <iframe :src="srcValidPaiement" height="600" width="500">
              <p>Votre navigateur ne supporte aucune iframe !</p>
            </iframe>

          </vue-final-modal>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
/* // Extra large devices (large desktops, 1200px and up)  */
@media (min-width: 1200px) {
  .message {

    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;

    text-overflow: ellipsis;
  }
}

@media (min-width: 1800px) {
  .message {

    width: 330px;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;

    text-overflow: ellipsis;
  }
}

::v-deep .modal-container-paiement {
  display: flex;
  justify-content: center;


  align-items: center;
  width: auto;
  margin-left: auto
}

::v-deep .modal-content-paiement {
  width: auto;
  display: flex;
  flex-direction: column;
  max-height: 95%;
  margin: 0em 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;

}

::v-deep .modal-container {
  display: flex;
  justify-content: center;


  align-items: center;
  width: auto;
  padding-left: auto
}

::v-deep .modal-content {
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
  overflow-y: auto;
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
</style>
<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
/* import ProfileCard from "./../components/ProfileCard.vue"; */
import ArgonInput from "@/components/ArgonInput.vue";
// import ArgonButton from "@/components/ArgonButton.vue";
import VueCookies from 'vue-cookies'
import CustomButton from '@/components/CustomButton.vue';
import { VueFinalModal } from 'vue-final-modal'

import { ref, onMounted } from 'vue';
import { ApiManage } from '../../boot/ApiManage';

import { RequestApi } from '../../boot/RequestApi';
import { FormatData } from '../../boot/FormatData';
import { api } from '../../boot/axios';
const body = document.getElementsByTagName("body")[0];
import { createToaster } from "@meforma/vue-toaster";

export default {
  name: "profile",
  data() {
    return {
      showMenu: false, toast: createToaster(),
      loadingUpdate: ref(false),

    };
  },
  components: { ArgonInput, /* ArgonButton, */ CustomButton, VueFinalModal },

  beforeRouteEnter(to, from, next) {
    if (
      VueCookies.get('token') != undefined &&
      VueCookies.get('token') != 'undefined' &&
      VueCookies.get('token') != null
    ) {
      console.log(
        VueCookies.get('token') != undefined &&
        VueCookies.get('token') != 'undefined' &&
        VueCookies.get('token') != null
      );
      // console.log('iiiiixzzxioooiioi', VueCookies.get('token'));
      // await refreshAuthenticated();
      next();
    } else {
      //  console.log('llllllllll');
      next({ name: 'Signin' });

    }
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();
  },
  beforeMount() {
    // this.$store.state.imageLayout = "profile-overview";
    // this.$store.state.showNavbar = false;
    // this.$store.state.showFooter = true;
    // this.$store.state.hideConfigButton = true;
    // body.classList.add("profile-overview");
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = false;
    body.classList.remove("profile-overview");
  },

  methods: {

    async onFileChange(e) {

      console.log('cdsdsv.value*****')

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      console.log(files)
      this.image = files[0]
      this.loadingUpdate = true;
      console.log('hgfggf')
      const response = await new RequestApi().uploadUserImage(this.image, 1);
      console.log(response)
      if (response.status) {


        VueCookies.set('profile', new ApiManage().baseUrl + '/images/client/' + response.filePath)

        this.toast.success(`Mise a jour effectue avec success.`, {
          // override the global option
          position: "bottom"
        });
        this.getP();
        console.log(new ApiManage().baseUrl + '/images/client/' + response.filePath)
        this.loadingUpdate = false;
      }
      else {
        //
        this.loadingUpdate = false;
        this.toast.error(`Une erreur est survenu.`, {
          // override the global option
          position: "bottom"
        });
      }
    },
    async onFileChange2(e) {

      console.log('cdsdsv.value*****')

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      console.log(files)
      this.image = files[0]
      this.loadingUpdate = true;
      const response = await new RequestApi().uploadUserImage(this.image, 2);
      if (response.status) {
        VueCookies.set('couverture', new ApiManage().baseUrl + '/images/client/' + response.filePath)

        this.getP();
        this.loadingUpdate = false;

        this.toast.success(`Mise a jour effectue avec success.`, {
          // override the global option
          position: "bottom"
        });
      }

      else {
        //
        this.loadingUpdate = false;
        this.toast.error(`Une erreur est survenu.`, {
          // override the global option
          position: "bottom"
        });
      }
    },
    getP() {
      this.profile = VueCookies.get('profile'),
        this.couverture = VueCookies.get('couverture')
    }
  },

  setup() {
    let toast = createToaster();

    onMounted(async () => {

      await getUser();
      await getNumProject();
      await getNVitrine()
      await getChildren();
    });
    const clientId = VueCookies.get('id');
    const loadingUser = ref(true);

    const loadingPatchUser = ref(false);
    const loadingPatchPassword = ref(false);
    let friend = ref(0);
    let nom = ref('');
    // let type = ref('');
    let prenom = ref('');
    let email = ref('');

    let numero = ref('');
    let project = ref('0');
    let societe = ref('');
    let posteSocial = ref('');
    let about = ref('');
    let plus = ref(true);
    let confirmPassword = ref('');
    let password = ref('');
    let newMdp = ref('');
    let rnewMdp = ref('');
    let promptValid = ref(false);
    // const name:string = Cookies.get('nom').toString() + Cookies.get('prenom') .toString();
    const qteSms = ref(0);

    function isUpper(str) {
      return /[A-Z]/.test(str);
    };
    function isLawer(str) {
      return /[a-z]/.test(str);
    };
    function containsNumbers(str) {
      return /\d/.test(str);
    }
    ;

    function verifPassword() {
      v1.value = (newMdp.value.length >= 8);

      v2.value = isUpper(newMdp.value)
      v3.value = isLawer(newMdp.value)
      v4.value = containsNumbers(newMdp.value)

      v5.value = newMdp.value.includes('@');
      console.log(v5.value,)
    };
    const patchUser = async () => {
      const data = {
        clientId: clientId,
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        phone: numero.value,
        nomEntreprise: societe.value,
        posteSocial: posteSocial.value,
      };
      if (loadingPatchUser.value == false) {
        loadingPatchUser.value = true;
        if (confirmPassword.value != '') {
          await api
            .post('/api/auth', {
              phone: VueCookies.get('phone'),
              password: confirmPassword.value.toString(),
            })
            .then(async (response) => {

              if (response.status == 200) {

                const response = await new RequestApi().pathUserAction(
                  data,
                  0
                );
                //  console.log('get qte statu', response.data);
                if (response.status) {

                  loadingPatchUser.value = false;
                  confirmPassword.value = ''; toast.success(`Mise a jour de vos information effectuee avec succes`, {
                    // override the global option
                    position: "bottom"
                  });
                } else {
                  confirmPassword.value = '';
                  loadingPatchUser.value = false;
                  toast.error(`Une erreur s'est produite`, {
                    // override the global option
                    position: "bottom"
                  });
                }
              } else {
                loadingPatchUser.value = false;
                confirmPassword.value = '';
                toast.error(`Une erreur s'est produite`, {
                  // override the global option
                  position: "bottom"
                });
              }
            })
            .catch((e) => {
              console.log(e);
              loadingPatchUser.value = false;
              toast.error(`Veuillez verifier votre mot de passe`, {
                // override the global option
                position: "bottom"
              });
            });
        } else {
          loadingPatchUser.value = false;
          toast.error(`Veuillez entrer un mot de passe`, {
            // override the global option
            position: "bottom"
          });
        }
      } else {
        loadingPatchUser.value = false;

        toast.success(`Une Mise a Jour est en cours`, {
          // override the global option
          position: "bottom"
        });
      }
    };

    const patchPassword = async () => {

      verifPassword();
      console.log(v1.value, v5.value, v2.value, v3.value, v4.value)
      let toast = createToaster();
      if (!v1.value || !v2.value || !v3.value || !v4.value) {
        toast.error(`Veuillez respecter les criteres du mot de passe`, {
          // override the global option
          position: "bottom"
        });
        return false;
      }



      const data = {
        clientId: clientId,
        password: newMdp.value,
      };
      if (loadingPatchPassword.value == false) {
        if (newMdp.value == rnewMdp.value) {
          loadingPatchPassword.value = true;

          await api
            .post('/api/auth', {
              phone: VueCookies.get('phone'),
              password: password.value.toString(),
            })
            .then(async (response) => {

              if (response.status == 200) {
                const response1 =
                  await new RequestApi().pathPasswordAction(data);
                //  console.log('get qte statu', response.data);
                if (response1.status) {

                  loadingPatchPassword.value = false;
                  newMdp.value = '';
                  rnewMdp.value = '';
                  password.value = '';
                  toast.success(`Mise a jour de vos informations effectuee avec succes`, {
                    // override the global option
                    position: "bottom"
                  });
                } else {
                  loadingPatchPassword.value = false; toast.error(`Erreur lors de la Mise a jour de vos information`, {
                    // override the global option
                    position: "bottom"
                  });

                }
              } else {
                loadingPatchPassword.value = false; toast.error(`Mot de passe utilisateur incorrect`, {
                  // override the global option
                  position: "bottom"
                });

              }
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          toast.error(`Les Mots de passes entres sont differents`, {
            // override the global option
            position: "bottom"
          });

        }
      } else {
        toast.success(`Une Mise a Jour est en cours`, {
          // override the global option
          position: "bottom"
        });

      }
    };


    async function getChildren() {

      const response = await new RequestApi().getParrainUserAction();
      if (response.status) {

        friend.value = response.data.length
      }
      else {


        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
      }


    }

    async function getNumProject() {

      const response = await new RequestApi().getListProjetAction();
      if (response.status) {

        project.value = response.data.length
      }
      else {


        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
      }


    }

    const getUser = async () => {

      const response = await new RequestApi().getUserAction();
      console.log('get qte statu', response.data);
      if (response.status) {

        nom.value = response.data['nom'];

        prenom.value = response.data['prenom'];
        numero.value = response.data['phone'];

        email.value = response.data['email'];
        societe.value = response.data['nomEntreprise'];
        posteSocial.value = response.data['posteSocial'];
        profile = new ApiManage().baseUrl + '/images/client/' + response.data.profile['filePath'],
          couverture = new ApiManage().baseUrl + '/images/client/' + response.data.couverture['filePath'],
          about.value = '';
        loadingUser.value = false;
      } else {
        toast.error(`Erreur lors du chargement de vos informations`, {
          // override the global option
          position: "bottom"
        });
        loadingUser.value = false;
      }
    };
    // const onSubmit = async () => {

    // };
    /**
     * @type represente le cas 0 => info user , 1 => mot de passe
     */
    const openValid = () => {
      promptValid.value = !promptValid.value;


    };
    let vitrine = ref(0)
    const getNVitrine = async () => {
      const response = await new RequestApi().getListVitrineUser();
      if (response.status) {

        vitrine.value = response.length;
      }
      else {


        toast.error(`Error`, {
          // override the global option
          position: "bottom"
        });
      }



    }
    async function seeKey() {
      if (loadingPatchUser.value == false) {
        loadingPatchUser.value = true;
        if (confirmPassword.value != '') {
          await api
            .post('/api/auth', {
              phone: VueCookies.get('phone'),
              password: confirmPassword.value.toString(),
            })
            .then(async (response) => {

              if (response.status == 200 || response.status == 201) {
                voir.value = true; loadingPatchUser.value = false;
                confirmPassword.value = ''; verifSee.value = false;
              } else {
                loadingPatchUser.value = false;
                toast.error(`Veuillez verifier votre mot de passe`, {
                  // override the global option
                  position: "bottom"
                });

                confirmPassword.value = '';

              }
            }).catch(() => {
              loadingPatchUser.value = false;
              toast.error(`Veuillez verifier votre mot de passe`, {
                // override the global option
                position: "bottom"
              });


              confirmPassword.value = '';

            });
        }
      }
    }
    function verifImgExist(src) {

      return new FormatData().verifImgExist(src);


    }
    let keySecret = ref(VueCookies.get('keySecret'));
    function copy() {

      navigator.clipboard.writeText(keySecret.value)
      toast.success(`Copie`, {
        // override the global option
        position: "bottom"
      });

    }
    let voir = ref(false);
    let verifSee = ref(false);

    function modif() {
      show.value = !show.value
    } let profile = ref((VueCookies.get('profile') != undefined && VueCookies.get('profile') != undefined) && VueCookies.get('profile') != 'undefined' ? VueCookies.get('profile') : null,)
    let couverture = ref((VueCookies.get('couverture') != undefined && VueCookies.get('couverture') != undefined) && VueCookies.get('couverture') != 'undefined' ? VueCookies.get('couverture') : null)

    let image = ref();
    let show = ref(false);
    let v1 = ref(false);
    let v2 = ref(false);
    let v3 = ref(false);
    let v4 = ref(false);
    let v5 = ref(false);
    let appState = ref(0);
    return {
      v1,
      v2,
      v3, appState,
      v4, v5,
      image,
      show,
      modif, verifImgExist,
      openValid, vitrine, voir,
      nom, copy, verifSee,
      qteSms, seeKey,
      loadingUser, project,
      prenom, keySecret,
      profile,
      couverture,
      email, plus,
      numero,
      societe,
      about,
      rnewMdp,
      confirmPassword,
      password,
      posteSocial,
      newMdp,
      loadingPatchUser,
      patchUser,
      patchPassword,
      loadingPatchPassword,
      promptValid, friend, verifPassword
    };
  },
};
</script>