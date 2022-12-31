<template>
  <div class=" container-fluid  lss" style="border: none;">
    <div class="mt-2 row">
      <div class="col-12">
        <div class="" style="border: none;">
          <div class=" pb-0 ">
            <div class="row d-flex  mt-4">



              <nav class=" navbar-expand-sm col-12">
                <div class=" container-fluid ">


                  <button class="shadow-none navbar-toggler ms-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#mynavbar" aria-controls="navigation" aria-expanded="false"
                    aria-label="Toggle navigation">
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

                        <!-- <img height="70" width="30" class="h-25"
                          src="data:image/png;base64,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" /> -->
                        <a href="javascript:;" class="border-0 avatar avatar-sm rounded-circle" data-bs-toggle="tooltip"
                          data-bs-placement="top">
                          <i class="fas fa-angle-left back"></i>
                        </a>
                      </router-link>

                    </div>
                    <form class="d-flex  col-11 ">
                      <input class="form-control rounded-pill  me-2 h-25  " v-model="searchVal"
                        @input="searchAutoComplete" @click="search = true" type="text" placeholder="Search">
                      <button class="btn btn-primary  rounded-pill m-0" type="button"
                        @click="searchFilter">Search</button>
                      <nav v-if="search && result.length != 0 && searchVal.length != 0"
                        class="bg-grey-5 navbar scroll navbar-expand-lg  position-absolute  col-8 mt-5   blur border-radius-lg  py-2   shadow radius"
                        style="  z-index: 1;">
                        <div class="container ">

                          <div class="table-responsive col-12  mb-2">
                            <table class="table col-12 align-items-center">
                              <tbody>
                                <tr class="border-bottom mouse col-12 list-group-item ml-8 border-0"
                                  v-for="pub in result" :key="pub.id" @click="filterData(pub)">{{
                                      pub
                                        .label
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  }}

                                </tr>
                              </tbody>
                            </table>

                          </div>
                        </div>
                      </nav>
                    </form>




                  </div>


                  <!-- Use any element to open the sidenav -->


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
                          <i class="fa fa-angle-right arr" id='set' aria-hidden="true"></i>
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
                        <div class="dropdown mt-1 ms-2">

                          <p class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Choisir Prestataire
                          </p>
                          <ul class="dropdown-menu m-0" aria-labelledby="dropdownMenuButton1">
                            <li class='dropdown-item mx-auto'><a class="nav-link2 " @click="moinsUse"
                                href="#">Prestataire</a></li>

                          </ul>
                        </div>
                        <div class="dropdown mt-1 ms-2">

                          <p class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Region cible
                          </p>
                          <ul class="dropdown-menu m-0" aria-labelledby="dropdownMenuButton1">
                            <li class='dropdown-item mx-auto'><a class="nav-link2 " @click="moinsUse"
                                href="#">Cameroun</a></li>
                            <li class='dropdown-item mx-auto'><a class="nav-link2 " @click="moinsUse"
                                href="#">Guinee</a></li>
                            <li class='dropdown-item mx-auto'><a class="nav-link2 " @click="moinsUse" href="#">Cote
                                d'ivoire</a></li>

                          </ul>
                        </div>
                        <!-- <li class="dropdown">
                          <a class="nav-link   " href="#" role="button" @click='selectMenu(0)'>
                            <p style="  width: 90px; "> Plus Recent
                            </p>
                            <i class="fa mt-2 fa-angle-up " v-if="showMenu0"></i><i class="fa mt-2 fa-angle-down"
                              v-else></i>
                          </a>
                          <ul id='nav-home'
                            class="bg-grey-2  index position-absolute   blur border-radius-lg  p-2   shadow radius"
                            v-if="showMenu0">
                            <li class='nav-item ' @click="selectWeek(2)"><a class="nav-link2 " href="#">Ajourd'hui </a>
                            </li>
                            <li class='nav-item'><a class="nav-link2 " href="#" @click="selectWeek(0)">Cette semaine</a>
                            </li>
                            <li class='nav-item'><a class="nav-link2 " href="#" @click="selectWeek(1)">Ce mois</a></li>
                            <li class='nav-item'><a class="nav-link2 " href="#" @click="selectWeek(3)">Cette annee</a>
                            </li>
                          </ul>
                        </li> -->


                        <!-- <li class="dropdown">
                          <a class="nav-link space " href="#" role="button" @click='selectMenu(1)'>
                            <p style="  width: 90px; "> Bas prix</p><i class="fa mt-2 fa-angle-up "
                              v-if="showMenu1"></i><i class="fa mt-2 fa-angle-down" v-else></i>
                          </a>
                          <ul
                            class="bg-grey-2    index   nav-home  position-absolute   blur border-radius-lg  p-2   shadow radius"
                            v-if="showMenu1">
                            <li class='nav-item mx-auto'><a class="nav-link2 " href="#">Bas prix</a></li>
                            <li class='nav-item mx-auto'><a class="nav-link2 " href="#">Prix élevé</a></li>
                            <li class='nav-item mx-auto'><a class="nav-link2 " href="#">Bas rabais</a></li>
                            <li class='nav-item'><a class="nav-link2 " href="#">Sans rabais</a></li>
                            <li class='nav-item'><a class="nav-link2 " href="#">Rabais élevé</a></li>
                          </ul>
                        </li> -->
                        <!-- <li class="dropdown">
                          <a class="nav-link  " href="#" role="button" @click='selectMenu(2)'>
                            <p style="  width: 90px; "> Prestataire </p> <i class="fa mt-2 fa-angle-up "
                              v-if="showMenu2"></i><i class="fa mt-2 fa-angle-down" v-else></i>
                          </a>
                          <ul
                            class="bg-grey-2 nav-home   position-absolute   blur border-radius-lg  p-2   shadow radius"
                            style="  z-index: 1;" v-if="showMenu2">
                            <li class='nav-item'><a class="nav-link2 " href="#">Choisir Prestataire</a></li>

                          </ul>
                        </li>
                        <li class="dropdown">
                          <a class="nav-link  " href="#" role="button" @click='selectMenu(3)'>
                            <p style="  width: 90px; "> Region cible</p> <i class="fa mt-2 fa-angle-up "
                              v-if="showMenu3"></i><i class="fa mt-2 fa-angle-down" v-else></i>
                          </a>
                          <ul
                            class="bg-grey-2  nav-home  position-absolute   blur border-radius-lg  p-2   shadow radius"
                            style="  z-index: 1;" v-if="showMenu3">
                            <li class='nav-item'><a class="nav-link2 " href="#">Plus Recent</a></li>
                          </ul>
                        </li> -->
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
                              <a class="  ms-2"> Retour
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
                          <li class="nav-item  border-bottom pb-2 mt-2">
                            <div class="it d-flex justify-content-between" @click="selectMenu(2)">

                              <span class="nav-link-text   me-2 ms-2">Prestataire</span>
                              <i class="fa mt-2 fa-angle-up me-2" v-if='showMenu2' align="right"></i><i
                                class="fa mt-2 fa-angle-down  me-2" align="right" v-else></i>

                            </div>
                            <div>

                              <ul v-if='showMenu2'>
                                <li class='d-flex justify-content-start'><a class="nav-link2 " href="#">Prestataire</a>
                                </li>
                                <li class='d-flex justify-content-start'><a class="nav-link2 " href="#">Prix élevé</a>
                                </li>


                              </ul>
                            </div>
                          </li>
                          <li class="nav-item  border-bottom pb-2 mt-2">
                            <div class="it d-flex justify-content-between" @click="selectMenu(3)">

                              <span class="nav-link-text   me-2 ms-2">Region cible</span>
                              <i class="fa mt-2 fa-angle-up me-2" v-if='showMenu3' align="right"></i><i
                                class="fa mt-2 fa-angle-down  me-2" align="right" v-else></i>

                            </div>
                            <div>

                              <ul v-if='showMenu3'>
                                <li class='d-flex justify-content-start'><a class="nav-link2 " href="#">Region cible</a>
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
          <div class="card-body   " v-else>
            <div class="row justify-content-between" style=" border: none;">
              <div class="col-lg-3 col-md-3 col-xl-3 col-sm-12">
                <div class="card  mb-10">

                  <div class="card-body text-dark " v-if="!plus">
                    <h6 class="text-dark  font-weight-bold  ">Categories de promo</h6>
                    <div class="text-sm">
                      Parcourez et Decouvrez Plus...
                    </div>
                    <!-- <hr /> -->
                  </div>


                  <div class="mb-2">
                    <ul class=" list-group list-group-flush border-0" v-for="cat in optionsCatPub" :key="cat.id">
                      <li class="list-group-item ml-5  text-sm border-0" :id="cat.id" @click="filterData(cat)">{{
                          cat
                            .label
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      }}</li>
                    </ul>
                  </div>


                </div>

                <div class="card border-0 bg-none pl-5 mt-10   " style="background-color: #e5ebf2c7 ">
                  <a disabled="disabled" class="btn btn-primary roundN ">Aller sur PubX.com</a>
                </div>
              </div>
              <div class="col-lg-9 col-lg-9 col-xl-9 col-sm-12">


                <div class="  " style=" border: none;">

                  <div v-if="(listPub.length != 0)">

                    <div class="row " v-if="!info">
                      <div class="  col-md-4" v-for="(pub, ) in listPub" :key="pub.id">



                        <div class=" bg-white border-0   he" @click="showInfoPubVue(pub)">
                          <div class=" row mt-1    pt-2 d-flex" style="margin-left:0em">
                            <div class="col-2">
                              <a href="javascript:;" class="border-0 avatar avatar-sm rounded-circle"
                                data-bs-toggle="tooltip" data-bs-placement="top" title="1 New Message">
                                <img alt="Image h-50 " :src="verifImgExist(pub.profileUser)" />
                              </a>
                            </div>
                            <div class="col-8 ms-1">
                              <div class='font-weight-bold' style='font-size:14px'> {{ pub.title }}</div>
                              <div style="font-size:10px">
                                {{ dateReturn(pub.date) }}
                              </div>
                              <!-- <div class='   '> {{ pub.date }}</div> -->
                            </div>
                          </div>
                          <img :src="verifImgExist(pub.path)" class="card-img-top imgH img-fluid" alt="...">
                          <div class="mt-1">
                            <div class="card-title ms-2 d-flex mt-0  font-weight-bold">
                              {{ pub.title }}
                            </div>
                            <div class="card-text ms-2 overflow-hidden hd text-secondary ">{{
                                parse(pub.description)
                            }}
                            </div>
                            <div class="bg-white   pe-1 pt-2 ">
                              <div class='row'>
                                <div class="col-2  ms-2 font-weight-bold " style='color:red ; '>
                                  <strike> $882</strike>
                                </div>
                                <div class="col-2 font-weight-bold "
                                  style='color: white;background-color: blue;padding: 0;margin-left: 10px;  '>
                                  $1000
                                </div>
                                <div class="col text-secondary  " align="right">
                                  6 Commentaires
                                </div>
                              </div>
                              <hr class=" m-0 p-0 mb-2   " />
                              <div class="row ms-1 me-3  text-secondary pb-2 ">
                                <div class="col-3  " style=' font-size: 12px; '>
                                  <div class="row ">
                                    <div class="col-4  " style='  '>
                                      <i class="fa  fa-clock-o text-secondary"></i>
                                    </div>
                                    <div class="col-4  ">
                                      Suivre
                                    </div>
                                  </div>
                                </div>
                                <div class="col-3 ms-1 me-2" style=' font-size: 12px; '>
                                  <div class="row ">
                                    <div class="col-4  " style='  '>
                                      <i class="fa  fa-clock-o text-secondary"></i>
                                    </div>
                                    <div class="col-4  ">
                                      Commenter
                                    </div>
                                  </div>
                                </div>
                                <div class="col-3 ms-4  " style=' font-size: 12px; '>
                                  <div class="row ">
                                    <div class="col-4  " style='  '>
                                      <i class="fa  fa-clock-o text-secondary"></i>
                                    </div>
                                    <div class="col-4  " style=' '>
                                      Partager
                                    </div>
                                  </div>
                                </div>
                                <!-- <div class="col-3  ">
                                <div class="row ">
                                  <div class="col-4  ">
                                    <i class="fa  fa-clock-o text-secondary"></i>
                                  </div>
                                  <div class="col-4  ">

                                  </div>
                                </div>
                              </div> -->

                              </div>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>
                    <div class="row " v-else>
                      <div class="col">

                        <div class="   border-0  he">
                          <img :src="verifImgExist(selectPub.path)" class="card-img-top mb-3 img-fluid" alt="...">
                          <div class=" ">
                            <h5 class=" mt-2">{{ selectPub.title }}</h5>
                            <p class=" m-0 p-0   font-weight-bold  ">{{ parse(selectPub.description) }}</p>
                            <div class="row ">
                              <div class="col-4 font-weight-bold " style='color:red' align=" ">$1000</div>
                              <div class="col-8 font-weight-bold " align=" right"> <i
                                  class="fa fa-clock-o font-weight-normal "></i>{{ selectPub.date }}</div>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>

                  </div>
                  <div v-else class="d-flex justify-content-center  align-items-center">Vide</div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>
.avatar-sm {
  width: 42px !important;
  height: 43px !important;
  font-size: 0.985rem;
  background-color: rgb(255, 255, 255);
}

.back {
  color: rgb(8, 119, 215);
}

.avatar img {
  width: 95%;
  height: 95%;
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

  .lss {
    margin-left: 1px;
    margin-right: 1px;
    width: 98%;
    /* background-color: red */
  }

  #set {
    display: contents;
    text-decoration: none;
    padding-left: 18px;
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

  /* The navigation menu links */
  .sidenav a {
    padding: auto;
    text-decoration: none;
    font-size: 25px;
    color: #818181;

  }

  /* When you mouse over the navigation links, change their color */
  .sidenav a:hover {
    color: #f1f1f1;
  }

  /* Position and style the close button (top right corner) */
  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 150px;
  }

  .closebtn {

    align-content: space-between;
    text-decoration: none;

  }

  .sidenav a {
    font-size: 18px;
  }


  #nav-home {
    width: 95%;

  }

  .nav-link2 {
    text-decoration: none;
    color: rgb(223, 223, 223);

  }

  .dropdown {
    margin-left: 50%;
  }

  .dropdown .nav-item {
    width: 40%
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

.he {

  /* height: 300px; */
}

.hd {
  font-size: 15px;
  height: 20px;
  display: inline-block;
  max-width: 100%;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
}

.searchCont {

  background: #c99c9c;
  width: 60.5%;
  height: auto;
  text-align: justify;
  font-family: 'Dosis', sans-serif;
  padding: 0.1rem 1rem;
  font-size: 1rem;
  position: absolute;
  top: 6%;
  left: 20%;
  overflow: hidden;
  /* box-shadow: 2px 4px 25px rgba(0, 0, 0, .1); */
  border-radius: 0 0 12px 12px;
}

.roundN {
  border-radius: 28px;

}

li {
  list-style: none;
}

.filtre {

  display: block;
}

.filtre:hover {
  cursor: pointer
}

.btns {
  color: #585FE1;
  font-size: 25px;
}

.retour:hover {
  cursor: pointer
}

i:hover {
  cursor: pointer
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
<script  >
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
import { textToHtml } from '../../boot/parseHtml';
import { formatDate } from '../../boot/formatDate';
// import { ApiManage } from '../../boot/ApiManage';
const body = document.getElementsByTagName("body")[0];
// import Popper from "vue3-popper";
// import VueCookies from 'vue-cookies'
import { createToaster } from "@meforma/vue-toaster";
// import Dropdown from '../components/DropDown';

// import { createToaster } from "@meforma/vue-toaster";
// import { BIcon } from 'bootstrap-vue' 
export default {
  name: "list-pub",
  components: {

    // Dropdown
  },

  // beforeRouteEnter(to, from, next) {
  //   if (
  //     VueCookies.get('token') != undefined &&
  //     VueCookies.get('token') != 'undefined' &&
  //     VueCookies.get('token') != null
  //   ) {
  //     console.log(
  //       VueCookies.get('token') != undefined &&
  //       VueCookies.get('token') != 'undefined' &&
  //       VueCookies.get('token') != null
  //     );
  //     // console.log('iiiiixzzxioooiioi', VueCookies.get('token'));
  //     // await refreshAuthenticated();
  //     next();
  //   } else {
  //     //  console.log('llllllllll');
  //     next({ name: 'Signin' });

  //   }
  // },

  created() {
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
    // body.classList.add("bg-gray-1");
    body.style.backgroundColor = '#e5ebf2c7'
  },
  setup() {
    let lsms = ref([])
    let descripPub = ref('')
    let selectedPub = ref({
      id: 0,
      title: '',
      description: '',
      image: '',

    })
    let lCategory = ref([])
    let lSCategory = ref([])
    let listPub = ref([])
    let data = ref([]);
    let idFonction = ref('');
    let iAction = ref(0);
    let i = ref(0);
    let expliqSender = ref(true)
    let plus = ref(false)
    let loading = ref(false)
    // let toast =  createToaster( );
    onMounted(async () => {
      await getCatPub();
      console.log(optionsCatPub.value)
      console.log(optionsCatPub.value.length)
      if (optionsCatPub.value.length != 0) {
        filterData(optionsCatPub.value[0])

      }

    });
    function filterData(category) {
      info.value = false;
      if (category.publications != undefined && category.publications != 'undefined') {
        listPub.value = category.publications;

        let selectedAll = document.querySelectorAll('li');
        selectedAll.forEach((elt) => {
          elt.classList.remove('bg-light')
          elt.classList.remove('text-primary')
        })
        let selectedCAt = document.getElementById(category.id);
        // console.log( selectedCAt,id,id);
        search.value = false
        selectedCAt.classList.add('bg-light')
        selectedCAt.classList.add('text-primary')
        // for (let index = 0; index < listPub.value.length; index++) {
        //   // console.log(id, listPub.value[index].id);

        //   if (category.id == listPub.value[index].id) {
        //     //console.log('***************************', listPub.value[index])

        //     selectedPub.value = listPub.value[index]
        //   }
        //   else{
        //     // console.log('-------------------------')

        //   }


        // }



        search.value = false

        result.value = [];
      }
    }

    let result = ref([]);

    function searchFilter() {
      result.value = [];
      search.value = true;
      console.log('search', search.value, searchVal.value)

      for (var i = 0; i < optionsCatPub.value.length; i++) {
        if (optionsCatPub.value[i].label.toUpperCase().includes(searchVal.value.toUpperCase())/*  || optionsCatPub.value[i].description.toUpperCase().includes(searchVal.value.toUpperCase()) */) {
          result.value.push(optionsCatPub.value[i]);
        }
      }
      // for (var j = 0; j < optionsCatPubSave.value.length; j++) {
      // for (var k = 0; k < result.value.length; k++) {
      //   if (optionsCatPubSave.value[j].title.toUpperCase()==result.value[k].title.toUpperCase()) {

      //     result.value.push(optionsCatPubSave.value[j]);
      //   }
      //   }
      // }
      if (result.value.length != 0) {  //  
      }
      else {
        search.value = false
        optionsCatPub.value = optionsCatPubSave.value

      }
      search.value = ''
      console.log('ppp', result.value)
    }
    function searchAutoComplete() {
      result.value = [];
      search.value = true;
      for (var i = 0; i < optionsCatPub.value.length; i++) {
        if (optionsCatPub.value[i].label.toUpperCase().includes(searchVal.value.toUpperCase())/*  || optionsCatPub.value[i].description.toUpperCase().includes(searchVal.value.toUpperCase()) */) {
          result.value.push(optionsCatPub.value[i]);
        }
      }
    }

    let optionsCatPubSave = ref([]);
    let search = ref(false);
    let searchVal = ref('');




    let optionsCatPub = ref([{ id: 0, label: 'Aucun' }]);
    let optionsCatRecentDay = ref([{ id: 0, label: 'Aucun' }]);
    let optionsCatThisWeek = ref([{ id: 0, label: 'Aucun' }]);
    let optionsCatThisMonth = ref([{ id: 0, label: 'Aucun' }]);
    let optionsCatRecentYear = ref([{ id: 0, label: 'Aucun' }]);
    let toast = createToaster();

    const getCatPub = async () => {
      loading.value = true;

      const response = await new RequestApi().getListCateforyPub2();

      if (response.status) {
        optionsCatPub.value = response.data.data;
        console.log('*****', response.data)
        optionsCatPubSave.value = optionsCatPub.value;
        optionsCatThisWeek.value = response.data.thisWeek;
        optionsCatThisMonth.value = response.data.thisMonth;
        optionsCatRecentDay.value = response.data.thisDay;
        optionsCatRecentYear.value = response.data.thisYear;


      } else {
        toast.error(`Une erreur est survenu lors du chargement des categories .`, {
          // override the global option
          position: "bottom"
        });
      }
      loading.value = false;

    };
    const parse = (data) => {
      return new textToHtml().parse(data)
    }
    function plusRecent() {
      let final = ref(null);
      if (optionsCatPubSave.value.length != 0) {
        for (let i = 0; i < optionsCatPubSave.value.length; i++) {
          let cat = optionsCatPubSave.value[i];

          if (cat.publications.length != 0) {
            final.value = { categorie: cat, publication: cat.publications[cat.publications.length - 1] }

            let pubs = cat.publications;
            console.log(final.value)
            for (let j = 0; j < pubs.length; j++) {
              if (pubs[j].date > final.value.publication.date) {
                final.value = { categorie: cat, publication: pubs[j] }

              }
            }
          }
        }
      }
      if (final.value != null) {
        filterData(final.value.categorie)
      }
      console.log(final.value)
    }
    let info = ref(false)
    let selectPub = ref(null);
    function showInfoPubVue(pub) {
      info.value = !info.value
      selectPub.value = pub
      selectMenu(4)
      console.log(info.value);
    }


    let showMenu0 = ref(false);
    let showMenu1 = ref(false);
    let showMenu2 = ref(false);
    let showMenu3 = ref(false);
    function selectMenu(index) {
      if (index == 0) {
        showMenu0.value = !showMenu0.value;
        showMenu1.value = false;
        showMenu2.value = false;
        showMenu3.value = false;
      } if (index == 1) {
        showMenu0.value = false;
        showMenu1.value = !showMenu1.value;
        showMenu2.value = false;
        showMenu3.value = false;
      } if (index == 2) {
        showMenu0.value = false;
        showMenu1.value = false;
        showMenu2.value = !showMenu2.value;
        showMenu3.value = false;
      } if (index == 3) {
        showMenu0.value = false;
        showMenu1.value = false;
        showMenu2.value = false;
        showMenu3.value = !showMenu3.value;
      }
      if (index == 4) {
        showMenu0.value = false;
        showMenu1.value = false;
        showMenu2.value = false;
        showMenu3.value = false;
      }
    }
    function selectWeek(index) {
      if (index == 0) {

        if (optionsCatThisWeek.value[0] != null) {
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
    }
    // function callback(exists) {

    //   if (exists) {
    //     console.log(exists)
    //   } else {
    //     console.log(exists)

    //   }
    // }
    function verifImgExist(src) {
      console.log(src)
      const img = new Image();
      img.src = src;
      let finalImg = ref("../../assets/img/default_images1.png")
      if (img.complete) {

        console.log('8888***')
        return src;
      } else {
        img.onload = () => {
          console.log('sssss***')
          finalImg.value = src

        };

        img.onerror = () => {

          console.log('errro***')
          // finalImg.value = "../../../public/assets/img/default_images1.png";

        };
      }
      return finalImg.value;
      // var xhr = new XMLHttpRequest();
      // xhr.open('get', src, true);
      // xhr.send();
      // console.log('xhr.status', xhr.status, '44564554')
      // return new Promise(res => {
      //   xhr.onload = () => {
      //     return res(xhr.status != 404) ? `public/assets/img/default_images1.jpg` : src;

      //   };
      //   xhr.onerror = () => {
      //     res(false);
      //   }
      // });

    }

    // function thisWeek() {
    //   let final = ref(null);
    //   if (optionsCatPubSave.value.length != 0) {
    //     for (let i = 0; i < optionsCatPubSave.value.length; i++) {
    //       let cat = optionsCatPubSave.value[i];

    //       if (cat.publications.length != 0) {
    //         final.value = { categorie: cat, publication: cat.publications[cat.publications.length - 1] }

    //         let pubs = cat.publications;
    //         console.log(final.value)
    //         for (let j = 0; j < pubs.length; j++) {
    //           if (pubs[j].date > final.value.publication.date) {
    //             final.value = { categorie: cat, publication: pubs[j] }

    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (final.value != null) {
    //     filterData(final.value.categorie)
    //   }
    //   console.log(final.value)
    // }


    const dateReturn = (date) => {

      var now = new Date();
      console.log(date, formatDate(now, 3).split(' '))
      if (date == formatDate(now, 3).split(' ')[0]) {
        return "Aujourd'hui à " + formatDate(now, 3).split(' ')[1]
      }
      else { return date; }


    }
    return {

      openNav, closeNav, nav, verifImgExist, selectWeek, dateReturn,
      showMenu0, showMenu1, showMenu2, showMenu3, selectMenu,
      plusRecent, showInfoPubVue,

      showMenu: false, info,
      parse, searchAutoComplete,
      optionsCatPub,
      result,
      search, searchVal, searchFilter,
      open, loading, data, idFonction, iAction,
      lsms, listPub, filterData, expliqSender, lCategory, selectPub, lSCategory, descripPub, plus, i, selectedPub

    };
  }, data() {
    return {
      services: [
        {
          title: 'Web',
          link: '#'
        },
        {
          title: 'Design',
          link: '#'
        },
        {
          title: 'Videos',
          link: '#'
        }
      ]
    }
  }
};
</script>
