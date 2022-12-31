<template>
  <div class="py-4 container-fluid   lss" style="border: none;">
    <div class=" row">
      <div class="col-12">
        <div class="" style="border: none;">
          <div class=" pb-0 ">
            <div class="row d-flex  mt-4">



              <nav class=" navbar-expand-sm col-12" v-if="examiner != 2">
                <div class=" container-fluid ">


                  <button class="shadow-none navbar-toggler ms-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#mynavbar" aria-controls="navigation" aria-expanded="false"
                    aria-label="Toggle navigation" @click='close'>
                    <span class="mt-2 navbar-toggler-icon">
                      <span class="navbar-toggler-bar bar1"></span>
                      <span class="navbar-toggler-bar bar2"></span>
                      <span class="navbar-toggler-bar bar3"></span>
                    </span>
                  </button>
                  <div class="collapse navbar-collapse" id="mynavbar">
                    <div class="col-md-1 col-sm-1  h-25	col-lg-1	col-xl-1">
                      <router-link to="/dashboard-default">

                        <!--   <i class="fa fa-angle-left"></i> -->

                        <a href="javascript:;" class="border-0 avatar avatar-sm rounded-circle" data-bs-toggle="tooltip"
                          data-bs-placement="top">
                          <i class="fas fa-angle-left back"></i>
                        </a>
                      </router-link>


                    </div>
                    <form class="d-flex  col-11 ">
                      <input class="form-control rounded-pill  me-2 h-25  " @input='searchAutoComplete()'
                        v-model="searchVal" @click="search = true" type="text" placeholder="Search">
                      <button class="btn btn-primary  rounded-pill m-0" @click="searchFilter"
                        type="button">Search</button>
                      <nav v-if="search && result.length != 0 && searchVal.length != 0"
                        class="bg-grey-5 navbar scroll navbar-expand-lg  position-absolute  col-8 mt-5   blur border-radius-lg  py-2   shadow radius"
                        style="  z-index: 1;">
                        <div class="container ">

                          <div class="table-responsive col-12  mb-2">
                            <table class="table col-12 align-items-center">
                              <tbody>
                                <tr class="border-bottom mouse col-12 list-group-item ml-8 border-0"
                                  v-for="senderId in result" :key="senderId.id" @click="getSenderByTitleId(senderId
                                  ['senderId'], senderId.id)">{{
                                  senderId
                                  ['senderId']
                                  }}

                                </tr>
                              </tbody>
                            </table>

                          </div>
                        </div>
                      </nav>
                    </form>



                  </div>
                  <div class=" navbar-collapse ">


                    <ul class=" navbar shadow-none">
                      <li class="nav-item" @click="openNav()">
                        <a class="nav-link  filtre" v-if="!nav" href="#" id=" " role="button" aria-haspopup="true"
                          aria-expanded="false">
                          <i class="fa fa-cog" id='set' aria-hidden="true"></i>
                          filtre
                        </a>
                      </li>


                      <ul class="  shadow-none sidenav  " id="mySidenav">
                        <a href="javascript:void(0)" v-if="nav" class="closebtn  " @click="closeNav()" id=" "
                          role="button" aria-haspopup="true" aria-expanded="false">
                          <a> filtre
                          </a>
                          <i class="fa fa-angle-right arr me-3" id='set' aria-hidden="true"></i>
                        </a>


                        <div class="dropdown mt-1 ms-4">
                          <p class="  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Plus Recent
                          </p>
                          <ul class="dropdown-menu m-0" aria-labelledby="dropdownMenuButton1">

                            <li class='dropdown-item ' @click="selectWeek(2)"><a class="nav-link2 " href="#">Ajourd'hui
                              </a>
                            </li>
                            <li class='dropdown-item'><a class="nav-link2 " @click="selectWeek(0)" href="#">Cette
                                semaine</a>
                            </li>
                            <li class='dropdown-item'><a class="nav-link2 " href="#" @click='selectWeek(1)'>Ce mois</a>
                            </li>
                            <li class='dropdown-item'><a class="nav-link2 " href="#" @click='selectWeek(3)'>Cette
                                annee</a>
                            </li>

                          </ul>
                        </div>



                        <div class="dropdown mt-1 ms-2">

                          <p class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Moins Utilise
                          </p>
                          <ul class="dropdown-menu m-0" aria-labelledby="dropdownMenuButton1">
                            <li class='dropdown-item mx-auto'><a class="nav-link2 " @click="moinsUse" href="#">Moins
                                Utilise</a></li>
                            <li class='dropdown-item mx-auto'><a class="nav-link2 " href="#">Prix élevé</a></li>
                            <li class='dropdown-item mx-auto'><a class="nav-link2 " href="#">Bas rabais</a></li>
                            <li class='dropdown-item'><a class="nav-link2 " href="#">Sans rabais</a></li>
                            <li class='dropdown-item'><a class="nav-link2 " href="#">Rabais élevé</a></li>
                          </ul>
                        </div>

                      </ul>
                    </ul>


                  </div>
                  <aside
                    class="my-3 overflow-auto border-0 drop  navbar navbar-vertical fixed-start ms-2 navbar-expand-xs border-radius-xl"
                    id="sidenav-main">

                    <aside
                      class="my-3 overflow-auto border-0   navbar navbar-vertical navbar-expand-xs border-radius-xl"
                      :class="` 
                                                                                                      ${this.$store.state.layout === 'landing'
                        ? 'bg-transparent shadow-none'
                        : ''
                      } ${this.$store.state.sidebarType}`" id="sidenav-main">


                      <div class="collapse navbar-collapse w-auto h-auto h-50 " id="side-drawer-collapse-main">
                        <ul class="navbar-nav ps-1 mt-2" style='display:block;'>

                          <li class="nav-item me-2 border-bottom pb-2 mt-2 pt-3">

                            <a href="javascript:void(0)" v-if="nav" class="closebtn  d-flex justify-content-between"
                              @click="closeNav()" id=" " role="button" aria-haspopup="true" aria-expanded="false">
                              <a class=" mouse ms-2"> Retour
                              </a>
                              <i class="fa fa-angle-right   me-2" id=' ' aria-hidden="true"></i>
                            </a>
                          </li>
                          <li class="nav-item border-bottom pb-2 mt-2">
                            <div class="it d-flex justify-content-between" @click="selectMenu(0)">

                              <span class="nav-link-text   me-2 ms-2">Plus Recent</span>
                              <i class="fa mt-2 fa-angle-up  me-2" v-if='showMenu0' align="right"></i><i
                                class="fa mt-2 fa-angle-down  me-2" align="right" v-else></i>
                            </div>
                            <div>

                              <ul v-if='showMenu0'>
                                <li class=' d-flex justify-content-start ' @click="selectWeek(2)"><a class="nav-link2 "
                                    href="#">Ajourd'hui
                                  </a>
                                </li>
                                <li class='d-flex justify-content-start '><a class="nav-link2 " @click="selectWeek(0)"
                                    href="#">Cette
                                    semaine</a>
                                </li>
                                <li class='d-flex justify-content-start '><a class="nav-link2 " href="#"
                                    @click='selectWeek(1)'>Ce
                                    mois</a>
                                </li>
                                <li class='d-flex justify-content-start'><a class="nav-link2 " href="#"
                                    @click='selectWeek(3)'>Cette
                                    annee</a>
                                </li>

                              </ul>
                            </div>
                          </li>
                          <li class="nav-item  border-bottom pb-2 mt-2">
                            <div class="it d-flex justify-content-between" @click="selectMenu(1)">

                              <span class="nav-link-text   me-2 ms-2">Moins Utilise</span>
                              <i class="fa mt-2 fa-angle-up me-2" v-if='showMenu1' align="right"></i><i
                                class="fa mt-2 fa-angle-down  me-2" align="right" v-else></i>
                            </div>
                            <div>

                              <ul v-if='showMenu1'>
                                <li class='d-flex justify-content-start'><a class="nav-link2 " @click="moinsUse"
                                    href="#">Moins
                                    Utilise</a></li>
                                <li class='d-flex justify-content-start'><a class="nav-link2 " href="#">Prix élevé</a>
                                </li>
                                <li class='d-flex justify-content-start'><a class="nav-link2 " href="#">Bas rabais</a>
                                </li>
                                <li class='d-flex justify-content-start'><a class="nav-link2 " href="#">Sans rabais</a>
                                </li>
                                <li class='d-flex justify-content-start'><a class="nav-link2 " href="#">Rabais élevé</a>
                                </li>
                              </ul>
                            </div>
                          </li>


                        </ul>
                      </div>


                    </aside>
                  </aside>

                </div>
              </nav>




            </div>

          </div>




















          <div class="  d-flex justify-content-center pt-5" v-if="loading">

            <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

          </div>

          <div class="card-body  " style="border: none;" v-else>
            <div class="row justify-content-between" v-if="examiner == 0 || examiner == 1">
              <div class="col-lg-3 col-md-3 col-xl-3 col-sm-12 mt-3">
                <div class="card pl-5" v-if='lsenderIdSearch.length == 0'>
                  <div class="card-body text-dark  font-weight-bold ">
                    Liste de vos SenderID
                    <div class="text-sm">
                      Parcourez et Decouvrez Plus...
                    </div>
                    <hr />
                  </div>

                  <ul class="list-group list-group-flush pl-5 border-0" v-for="senderId in optionsSenderIdSms"
                    :key="senderId.senderId">
                    <li class="list-group-item ml-5 border-0" :id=senderId.id @click="filterData(senderId)">{{
                    senderId
                    .senderId
                    }}</li>
                  </ul>
                </div>

                <div class="card pl-5" v-else>
                  <div class="card-body text-dark  ">
                    Resultat de votre recherche
                    <div class="text-sm">
                      Parcourez et Decouvrez Plus...
                    </div>
                    <hr />
                  </div>

                  <ul class="list-group list-group-flush pl-5 border-0" v-for="senderId in optionsSenderIdSms"
                    :key="senderId.senderId">
                    <li class="list-group-item ml-5 border-0" :id=senderId.id @click="filterData(senderId)">{{
                    senderId
                    .senderId
                    }}</li>
                  </ul>
                </div>



              </div>



              <div class="col-lg-9 col-xl-9 col-sm-12">

                <div v-if="expliqSender" class="row">
                  <div class="col-10">

                    <h3 class="mb-1 ml-0  font-weight-bolder text-dark">{{ selectSenderId }}
                      <p class=" ">{{ message }} </p>
                    </h3>
                  </div>
                  <div class="col-1" align="right " v-show="message.length != 0">
                    <div class="mouse" @click="saveM(message, selectSenderId)">
                      <router-link id='decnone' to="/Sms/Nouveau"><i class="fa fa-share btns" aria-hidden="true"></i>
                      </router-link>
                    </div>


                  </div>
                  <div class="col-1" v-show="message.length != 0">

                    <i class="fa fa-share-alt btns" aria-hidden="true"></i>

                  </div>
                </div>


                <div class="card  mb-lg-0 mb-4 ">

                  <div class="p-2 pb-2 card-body text-dark  font-weight-bolder ">
                    Liste de sms par senderId
                    <div class="text-sm font-weight-normal">
                      Vous pouvez toujours republier votre message
                    </div>
                    <hr />
                  </div>
                  <div class="table-responsive">
                    <table class="table scroll ">
                      <tbody>
                        <tr v-for="sms in lsms" :key="sms.message" class="mouse"
                          @click="message = sms.message; selectSenderId = sms.senderId ">
                          <td class="w-30">
                            <div>

                              <div class="ml-2">
                                <p class="mb-0 ml-2 text-xs ">Sender:</p>
                                <h6 class="mb-0 ml-2 text-sm font-weight-bold text-dark">{{ sms.senderId }}</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="text-left">
                              <p class="mb-0 text-xs ">Contacts:</p>
                              <h6 class="mb-0 text-sm font-weight-bold text-dark">{{ sms.nombreContact }} </h6>
                            </div>
                          </td>
                          <td>
                            <div class="text-left  col2 ">
                              <p class="mb-0 text-xs ">Messages:</p>
                              <h6 class="mb-0 text-sm message font-weight-bold text-dark">{{ sms.message }}</h6>
                            </div>
                          </td>

                          <td class="text-left" align='right'>
                            <div class="text-left col">
                              <Popper class="theme" placement="left">
                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                <template #content>
                                  <div class="mouse" v-if="examiner == 0" @click="saveM(sms.message, sms.senderId)">
                                    <router-link id='decnone' to="/Sms/Nouveau">Renvoyer ce sms
                                    </router-link>
                                  </div>
                                  <div class="mouse" v-if="examiner == 0" @click="examinerMessage(sms.idSms)">
                                    Examiner</div>
                                  <i class="fa fa-spinner fa-spin" v-else-if="examiner == 1"
                                    style="  font-size:30px; "></i>
                                </template>
                              </Popper>


                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>


                </div>
              </div>

            </div>
            <div class="row justify-content-between" v-if="examiner == 2">




              <div class="card  mb-lg-0 mb-4 p-4">

                <div class=" pb-2 ">
                  <div class="d-flex justify-content-between">
                    <h6 class="  ml-0 font-weight-bolder text-dark">List de sms par senderId</h6>
                    <a align="right" class="mouse" style='text-decoration:none' @click="examinerMessage(0)">Retour</a>
                  </div>
                  <p class="mb-2 ">Vous pouvez toujours republier votre message</p>
                </div>
                <div class="row mb-2">
                  <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3  ">
                    <div class="col text-xs">Sender ID:</div>
                    <div class="col  font-weight-bolder" style='font-size: 20px'>{{ ExaminerData.senderId }}</div>
                  </div>
                  <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                    <div class="col  text-xs">Nombre de contacts:</div>
                    <div class="col  font-weight-bolder" style='font-size: 20px'>{{ ExaminerData.nombreContact }} </div>
                  </div>


                  <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                    <div class="col  text-xs">Contacts exceptes:</div>
                    <div class="col d-flex  font-weight-bolder" style='font-size: 20px'>
                      {{ ExaminerData.excepte.length }}
                      <!-- <a href="javascript:;"
                        class="border avatar  rounded-circle   " data-bs-toggle="tooltip"
                        data-bs-placement="top"><i class="fa fa-question" style="  font-size:30px; "></i>

                      </a> -->

                    </div>
                  </div>
                  <div class="   col-xs-12 col-sm-12 col-sm-12 col-lg-3">
                    <div class="col  text-xs">Destination:</div>
                    <div class="col  font-weight-bolder" style='font-size: 23px'>{{ ExaminerData.route }}</div>
                  </div>
                </div>
                <div class="row pb-2">
                  <div class="col">
                    <div class="col  text-xs">Message:</div>
                    <div class="col" style=' flex-flow: row wrap; '>{{ ExaminerData.message }}</div>
                  </div>

                </div>
                <div class="hr2">


                </div>
                <div class="  ">
                  <div class="col mt-2  text-xs">Envois reussi:</div>
                  <div class="col flex-n " v-if="ExaminerData.reussis.length != 0">

                    <li v-for="(c, index) in ExaminerData.reussis" :key="c">{{ c }}
                      {{ (index == ExaminerData.reussis.length - 1) ? '' : ',' }}
                    </li>
                  </div>
                  <div class="col  " v-else>

                    Aucun
                  </div>
                </div>
                <div class="   ">
                  <div class="col  text-xs flex-n">En attente d'envois:</div>
                  <div class="col flex-n  " v-if="ExaminerData.attente.length != 0">

                    <li v-for="(c, index) in ExaminerData.attente" :key="c">{{ c }}{{ (index ==
                    ExaminerData.attente.length - 1) ? '' : ','
                    }}</li>


                  </div>
                  <div class="col  " v-else>

                    Aucun
                  </div>
                </div>
                <div class="   ">
                  <div class="col  text-xs">Echec d'envois:</div>
                  <div class="col flex-n " v-if="ExaminerData.echec.length != 0">
                    <li v-for="(c, index) in ExaminerData.echec" :key="c">{{ c }}
                      {{ (index == ExaminerData.echec.length - 1) ? '' : ',' }} </li>

                  </div>
                  <div class="col  " v-else>

                    Aucun
                  </div>
                </div>


              </div>
              <div class="card  mb-lg-0 mb-4 mt-4 p-4">

                <div class="table-responsive">


                  <div class=" pb-2 ">
                    <div class="d-flex justify-content-between">
                      <h6 class="  ml-0 font-weight-bolder text-dark">Historique d'envois</h6>

                    </div>
                    <p class="mb-2  text-xs">Visualisez l'evolution de vos campagnes de sms</p>
                  </div>
                  <table class="table  ">
                    <tbody>

                      <tr>
                        <td class="w-30">
                          <div>

                            <div class="ml-2">
                              <p class="mb-0 ml-2 text-xs ">Numero telephone</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-left">
                            <p class="mb-0 text-xs ">Heure d'envois</p>
                          </div>
                        </td>
                        <td align="right ">
                          <div class="text-left   " align="right ">
                            <p class="mb-0 text-xs "></p>
                          </div>
                        </td>


                      </tr>


                      <tr v-for="examiner in ExaminerData.historique" :key="examiner.phone" class="mouse">
                        <td class="w-30">
                          <div>

                            <div class="ml-2">

                              <h6 class="mb-0 ml-2 text-sm font-weight-bold text-dark flex-n">{{ examiner.phone }}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-left">

                            <h6 class="mb-0 text-sm font-weight-bold text-dark">{{ examiner.date }} </h6>
                          </div>
                        </td>
                        <td align="right ">
                          <div class="text-left " align="right ">

                            <h6 class="mb-0 text-sm message font-weight-bold text-dark">{{ examiner.status == 0
                            ? 'Pending' : examiner.status == 1 ? 'Success' : 'Failed'
                            }}</h6>
                            <a href="javascript:;" class="border-0 avatar  rounded-circle h-30 w-30 ava2"
                              :class="examiner.status == 0 ? 'bg-dark' : examiner.status == 1 ? 'bg-primary' : 'bg-danger'"
                              data-bs-toggle="tooltip" data-bs-placement="top">

                            </a>
                          </div>
                        </td>


                      </tr>

                    </tbody>
                  </table>
                </div>


              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>



<style>
.flex-n {
  display: flex;
  flex-flow: row wrap;

}
</style>

<style scoped>
.scroll {

  height: 30%;
  overflow: scroll;
}

#decnone {
  text-decoration: none;
  color: #040404;

}

.ava2 {

  width: 14px !important;
  height: 14px !important;
  margin-left: 8px;
  margin-bottom: 2.5px;
}

.hr2 {
  border: none;
  border-top: 2px solid rgb(202, 196, 196);
  color: rgb(216, 212, 212);
  overflow: visible;
  text-align: center;
  height: 5px;
}

#set {
  display: none;
  text-decoration: none;
}

i {
  text-decoration: none;
}


/* The navigation menu links */
.sidenav a {

  color: #818181;

}

.dropdown .nav-link {
  margin-left: 30px;
  display: flex;
  flex-direction: row;

}

.sidenav {
  margin-top: 1rem !important;
  display: flex;
  flex-direction: row;
  position: absolute;
}

.lss {

  width: 75%;

}

/* On smaller screens, where height is less than 992px, change the style of the sidenav (less padding and a smaller font size) */
@media only screen and (min-width: 993px) {
  .drop {
    display: none;
  }
}

/* On smaller screens, where height is less than 992px, change the style of the sidenav (less padding and a smaller font size) */
@media only screen and (max-width: 992px) {
  .sidenav {
    margin-top: 1rem !important;
    display: none;
    flex-direction: row;
    position: absolute;
  }

  .drop {
    /* display:block; */
    /* --bs-navbar-padding-y: 28.8rem; */
    height: 100%;
    /* 100% Full-height */
    width: 50%;
    /* 0 width - change this with JavaScript */
    position: fixed;
    display: none;
    /* Stay in place */
    z-index: 1;
    text-align: center;
    /* Stay on top */
    top: 0;
    margin-top: 0;
    /* Stay at the top */
    left: 0;
    /* background-color: rgb(5, 47, 162); */
    color: black;
    /* Black*/
    overflow-x: hidden;
    /* padding-left: 10px; */

    margin-top: 0;
    /* Disable horizontal scroll */
    /* padding-top: 60px; */
    /* Place content 60px from the top */
    transition: 0.5s;
    /* 0.5 second transition effect to slide in the sidenav */
  }

  .lss {
    margin-left: 1px;
    margin-right: 1px;
    width: 98%;
    /* background-color: red */
  }

  #set {
    display: contents;
    text-decoration: none;
    /* padding-left: 18px; */
  }

  i {
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  .arr {
    margin-left: 10px;
    margin-top: 10px
  }

  .filtre {
    border: 2px solid blue;
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 5px;
    padding-top: 5px;
    text-decoration: none;
  }

  .closebtn {

    align-content: space-between;
    text-decoration: none;

  }




  .space {
    align-content: space-between;

  }

  .index {
    z-index: 0;
  }
}

.index {
  z-index: 1;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {}


/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {}

.imgH {

  height: 150px;
}

#nav-home {
  /* width: 150%; */
  height: auto;

  margin: auto;
}

.nav-link2 {
  text-decoration: none;
  color: black;
  /* 
  height: auto;
  padding: auto;
  margin: auto; */
}

.nav-link2:hover {
  color: #0C6DE4
}

i:hover {
  cursor: pointer
}

.mouse:hover {
  cursor: pointer;
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

.avatar-sm {
  width: 30px !important;
  height: 30px !important;
  font-size: 0.985rem;
  background-color: rgb(255, 255, 255);
}

.back {
  color: rgb(8, 119, 215);
}

i:hover {
  cursor: pointer
}

.col2 {
  width: 200px;
  flex: 1 0 0%;
}

.message {
  /* border: 1px solid black; */
  width: 120px;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;

  text-overflow: ellipsis;
}

li {
  list-style: none;
}

.filtre {
  text-decoration: underline;
}

.filtre:hover {
  text-decoration: underline;
  cursor: pointer
}

/* 
.scroll {
  height: 30%;
  overflow: scroll;
} */

.mouse:hover {
  cursor: pointer
}

.searchCont {

  background: #FFFFFF;
  width: 60.5%;
  height: auto;
  text-align: justify;
  font-family: 'Dosis', sans-serif;
  padding: 1.5rem 2rem;
  font-size: 1rem;
  position: absolute;
  top: 8%;
  left: 20%;
  overflow: hidden;
  /* box-shadow: 2px 4px 25px rgba(0, 0, 0, .1); */
  border-radius: 0 0 12px 12px;
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
<script  >
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
const body = document.getElementsByTagName("body")[0];
import VueCookies from 'vue-cookies'
// import Popper from "vue3-popper";
// import SideDrawerList from "../components/SideDrawerList.vue";

import { createToaster } from "@meforma/vue-toaster";
// import { BIcon } from 'bootstrap-vue' 
export default {
  name: "ListSmsSenderId",
  components: {
    // Popper,


  },

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
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.style.backgroundColor = '#e5ebf2c7'

    body.classList.remove("bg-gray-100");
  },
  beforeMount() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.style.backgroundColor = '#e5ebf2c7'

    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.style.backgroundColor = '#e5ebf2c7'
  },
  setup() {

    let senderIdName = VueCookies.get('senderIdName');
    let senderIdId = VueCookies.get('senderIdId');
    let loading = ref(true);
    let examiner = ref(0);
    let lsms = ref([])
    let selectSenderId = ref('')
    let message = ref('')
    let lsenderId = ref([])
    let data = ref([]);
    let idFonction = ref('');
    let iAction = ref(0);
    let expliqSender = ref(true)
    let toast = createToaster();
    onMounted(async () => {

      await getListSmsSenderId();



      loading.value = false;

      getSenderByTitleId(senderIdName, senderIdId);
      VueCookies.set('senderIdName', 'null');
      VueCookies.set('senderIdId', 'null'); VueCookies.set('senderIdName', null);
      VueCookies.set('senderIdId', null);
    });

    let result = ref([])
    let lsenderIdSearch = ref([])
    let search = ref(false)
    let searchVal = ref('')
    function searchFilter() {
      result.value = [];
      search.value = true;

      for (var i = 0; i < lsenderId.value.length; i++) {
        if (lsenderId.value[i]['senderId'].toUpperCase().includes(searchVal.value.toUpperCase())) {
          result.value.push(lsenderId.value[i]);
        }
      }

      if (result.value.length != 0) {
        lsenderIdSearch.value = result.value
        filterData(lsenderIdSearch.value[0].senderId, lsenderIdSearch.value[0].id)
      }
      else {
        search.value = false
        lsenderIdSearch.value = []
        filterData(lsenderId.value[0].senderId, lsenderId.value[0].id)

      }
      search.value = ''
      console.log(result.value)
    }
    function searchAutoComplete() {
      result.value = [];
      search.value = true;
      console.log(searchVal.value)
      for (var i = 0; i < optionsSenderIdSmsSave.value.length; i++) {
        if (optionsSenderIdSmsSave.value[i]['senderId'].toUpperCase().includes(searchVal.value.toUpperCase())) {
          result.value.push(optionsSenderIdSmsSave.value[i]);
        }
      }


      console.log('hghghg', result.value)
    }
    function getSenderByTitleId(title, id) {
      if (title != undefined && title != 'undefined' && id != undefined && id != 'undefined') {
        for (var i = 0; i < optionsSenderIdSms.value.length; i++) {
          if (optionsSenderIdSms.value[i]['senderId'].toUpperCase() == title.toUpperCase() && optionsSenderIdSms.value[i]['id'] == id) {
            filterData(optionsSenderIdSms.value[i]);
            break;
          }
        }
      }
    }

    async function filterData(senderId/* title, id,  */) {

      message.value = '';

      if (senderId.sms != undefined && senderId.sms != 'undefined') {
        lsms.value = []; lsms.value = senderId.sms;
        selectSenderId.value = senderId.senderId;
        let selectedAll = document.querySelectorAll('li');
        selectedAll.forEach((elt) => {
          elt.classList.remove('bg-light')
          elt.classList.remove('text-primary')
        })
        let selectedCAt = document.getElementById(senderId.id);

        search.value = false
        selectedCAt.classList.add('bg-light')
        selectedCAt.classList.add('text-primary')



        search.value = false

        result.value = [];
      }

      // if (title != null && title != 'null' && title != 'all') {
      //   // console.log('cas 1')
      //   let selectedAll = document.querySelectorAll('li');
      //   selectedAll.forEach((elt) => {
      //     elt.classList.remove('bg-light')
      //     elt.classList.remove('text-primary')
      //   })



      //   let selected = document.getElementById(id);

      //   if (selected != null
      //   ) {

      //     selected.classList.add('bg-light')
      //     selected.classList.add('text-primary')


      //   } selectSenderId.value = title;
      //   lsmsFilter.value = []
      //   for (let index = 0; index < lsmsInit.value.length; index++) {
      //     const element = lsmsInit.value[index];

      //     if (element['senderId'] == title) {
      //       lsmsFilter.value.push(element);
      //     }
      //   }

      //   lsms.value = lsmsFilter.value;



      // } else {

      //   lsms.value = lsmsInit.value;
      // }
      VueCookies.set('senderIdName', 'null');
      VueCookies.set('senderIdId', 'null'); VueCookies.set('senderIdName', null);
      VueCookies.set('senderIdId', null);
      result.value = [];
    }

    let optionsSenderIdSms = ref([{ id: 0, label: 'Aucun' }]);
    let optionsSenderIdSmsSave = ref([{ id: 0, label: 'Aucun' }]);
    let optionsCatRecentDay = ref([{ id: 0, label: 'Aucun' }]);
    let optionsCatThisWeek = ref([{ id: 0, label: 'Aucun' }]);
    let optionsCatThisMonth = ref([{ id: 0, label: 'Aucun' }]);
    let optionsCatRecentYear = ref([{ id: 0, label: 'Aucun' }]);
    async function getListSmsSenderId() {


      const response = await new RequestApi().getListSmsSenderIdAction();


      if (response.status) {
        lsms.value = response.data.all;
        optionsSenderIdSms.value = response.data.data;
        optionsSenderIdSmsSave.value = optionsSenderIdSms.value;
        optionsCatThisWeek.value = response.data.thisWeek;
        optionsCatThisMonth.value = response.data.thisMonth;
        optionsCatRecentDay.value = response.data.thisDay;
        optionsCatRecentYear.value = response.data.thisYear;



      }
      console.log(lsms.value)


    }

    function selectWeek(index) {
      if (index == 0) {
        console.log('0000')

        if (optionsCatThisWeek.value[0] != null) {
          console.log('0000', optionsCatThisWeek.value)

          filterData(optionsCatThisWeek.value[0])
        }
        else {
          toast.error(`Aucune nouveaute cette semaine.`, {
            // override the global option
            position: "bottom"
          });
        }
      } if (index == 1) {
        if (optionsCatThisMonth.value[0] != null) {
          console.log('111', optionsCatThisMonth.value)

          filterData(optionsCatThisMonth.value[0])
        } else {
          toast.error(`Aucune nouveaute ce mois.`, {
            // override the global option
            position: "bottom"
          });
        }
      } if (index == 2) {

        if (optionsCatRecentDay.value[0] != null) {
          filterData(optionsCatRecentDay.value[0])
        } else {
          toast.error(`Aucune nouveaute aujourd'hui.`, {
            // override the global option
            position: "bottom"
          });
        }
      }
      if (index == 3) {

        if (optionsCatRecentYear.value[0] != null) {
          filterData(optionsCatRecentYear.value[0])
        } else {
          toast.error(`Aucune nouveaute aujourd'hui.`, {
            // override the global option
            position: "bottom"
          });
        }
      }
    }
    let plusR = ref(true)

    function plusRecent() {
      if (plusR.value) {
        let smsSave = ref(lsms.value[0]);
        let senderSaveTrue = ref(lsenderIdSave.value[0]);

        // for (let i = 1; i < lsenderIdSave.value.length; i++) {
        //   const senderId = lsenderIdSave.value[i];

        for (let j = 1; j < lsms.value.length; j++) {

          const sms = lsms.value[j];



          console.log(new Date(smsSave.value.date), new Date(sms.date), new Date(smsSave.value.date).getTime() < new Date(sms.date).getTime())


          if (new Date(smsSave.value.date).getTime() > new Date(sms.date).getTime()) {

            //
          } else {
            senderSaveTrue.value = sms.senderIdElt
          }
          smsSave.value = sms
        }

        console.log(senderSaveTrue.value)
        // if (senderSaveTrue.value != null) {


        filterData(senderSaveTrue.value.senderId, senderSaveTrue.value.id)
        // }
        // if (plusR.value) {
        //   lsenderId.value = [];
        //   let lsenderIdSaveX = ref(lsenderIdSave.value);
        //   lsenderIdSaveX.value.reverse();
        //   lsenderId.value = lsenderIdSaveX.value;
        //   filterData(lsenderId.value[0].senderId, lsenderId.value[0].id)
        moinsU.value = true
        plusR.value = false
        //   // lsenderIdSaveX = ref(lsenderIdSave.value);
      }
    }

    let moinsU = ref(true)
    let plusU = ref(true)

    function plusUse() {
      if (plusU.value) {

        lsenderId.value = [];
        let listTF = ref([]);
        let saveSender = ref(null);
        for (let i = 0; i < lsms.value.length; i++) {
          if (saveSender.value != null) {
            // if (lsms.value[i]['date']  > ){

            // }
          }
        }

        listTF.value.sort(function (a, b) {
          return a.value - b.value;
        });

        filterData(lsenderId.value[0].senderId, lsenderId.value[0].id)

        moinsU.value = true
        plusU.value = false
      } closeNav()
    }
    let lsenderIdSave = ref([])
    // async function getSenderId() {
    //   const response = await new RequestApi().getSenderIdsAction();
    //   if (response.status) {
    //     lsenderId.value = response.data
    //     lsenderIdSave.value = response.data

    //   }
    //   console.log(lsms.value);

    // }
    function saveM(M, S) {
      console.log(M, S)
      VueCookies.set('message', null)
      VueCookies.set('senderId', null)
      VueCookies.set('message', M)
      VueCookies.set('senderId', S)
    }
    function close() {
      // let colcapse = document.querySelector('#mynavbar')
      // console.log(colcapse)
      // colcapse.classList.remove('show', 'collapsing')
      // colcapse.classList.add('navbar-collapse')
      let colcaps0e = document.querySelector('#mynavbar')
      console.log(colcaps0e)
    }


    let showMenu0 = ref(false);
    let showMenu1 = ref(false);
    function selectMenu(index) {
      if (index == 0) {
        showMenu0.value = !showMenu0.value;
        showMenu1.value = false;

      } if (index == 1) {
        showMenu0.value = false;
        showMenu1.value = !showMenu1.value;

      }
      if (index == 4) {
        showMenu0.value = false;
        showMenu1.value = false;

      }
    }
    let nav = ref(false);
    function openNav() {

      nav.value = true
      document.querySelector(".drop").style.transition = "all 2s"
      document.querySelector(".drop").style.display = "block";

    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
      nav.value = false
      document.querySelector(".drop").style.transition = "all 2s"

      document.querySelector(".drop").style.display = "none";
    } /* Set the width of the side navigation to 0 */
    function examinerMessage(id) {
      if (id != 0) {
        console.log(id)
        examiner.value = 1
        getSmsExaminer(id);
      }
      else {
        examiner.value = 0
      }
    }

    let ExaminerData = ref([]);
    async function getSmsExaminer(id) {


      const response = await new RequestApi().getInfoSms(id);


      if (response.status) {
        ExaminerData.value = response.data;
        examiner.value = 2


      } else {
        examiner.value = 0;
        toast.error(`Une erreur est survenue.`, {
          // override the global option
          position: "bottom"
        });

      }


    }
    return {
      examiner, examinerMessage, getSmsExaminer, ExaminerData,
      selectMenu, openNav, closeNav, showMenu0, showMenu1, nav,
      plusUse, plusRecent, lsenderIdSearch, close,
      result, search, searchVal, searchFilter, searchAutoComplete,
      saveM,
      open, data, idFonction, iAction,
      lsms, lsenderId, filterData, expliqSender, selectSenderId, message, show: false, loading, selectWeek, optionsSenderIdSms, getSenderByTitleId

    };
  },
};
</script>
