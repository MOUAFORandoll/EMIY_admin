<template>
  <div class=" container-fluid w-75" style="border: none;">
    <div class="mt-2 row">
      <div class="col-12">
        <div class="" style="border: none;">
          <div class=" pb-0 ">
            <div class="row d-flex">
              <div class="col-md-1 col-sm-1  h-25	col-lg-1	col-xl-1">
                <router-link to="/dashboard-default">

                  <!--   <i class="fa fa-angle-left"></i> -->

                  <img height="30" width="30" class="h-25"
                    src="data:image/png;base64,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" />

                </router-link>

              </div>


              <nav class=" navbar-expand-sm col-11">
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
                  <div class="collapse navbar-collapse " id="mynavbar">

                    <form class="d-flex  col-12 ">
                      <input class="form-control me-2 h-25  " type="text" placeholder="Search">
                      <button class="btn btn-primary" type="button">Search</button>
                    </form>
                  </div>
                </div>
              </nav>


              <!-- <div class=" col-md-8 col-sm-8  h-25	col-lg-8	col-xl-8  ml-0  p-0 border rounded-pill">

              <div class="col-12 h-10 row d-flex" style="height:30px ; border-radius:30px 0 0 30px; margin-left:0px; ">


                <div class="p-1 bg-primary col-2 " style="width:15% ; border-radius:30px 0 0 30px; margin-left:0px">
                  Filtre
                </div>
                <div class="p-1  col-2  filtre">
                  Plus Recent <i class="fas fa-angle-down"></i>
                </div>
                <div class="p-1  col-2 filtre">
                  Bas Prix<i class="fas fa-angle-down"></i>
                </div>
                <div class="p-1 col-2 filtre">
                  Pretataire <i class="fas fa-angle-down"></i>
                </div>
                <div class="p-1 col-2 filtre">
                  Region Cible<i class="fas fa-angle-down"></i>
                </div>


              </div>


            </div>
            <div class="row  col-md-3 col-sm-3  h-50	col-lg-3	col-xl-3 mb-2 ml-0 pl-0 mr-0 pr-0 rounded-pill">
              <div class="input-group">
                <div class="  form-outline col-10  mr-0 pr-0">
                  <input type="search" id="form1" placeholder="Que recherchez vous ?"
                    class="form-control  form-control form-control-sm" style="  border-radius:30px 0 0 30px; " />
                </div>
                <div class="col-2  ml-0 pl-0 mr-0 pr-0 " style="  border-radius:0 30px 30px 0; "> <button type="button"
                    class="btn btn-primary " style=" height:60%; border-radius:0 30px 30px 0; ">
                    <i class="fa fa-search"></i>
                  </button></div>
              </div>
            </div> -->


              <!--end of col-->

              <!--end of col-->

            </div>

            <nav class="  navbar-expand-sm">
              <nav class="container-fluid">


                <button class="shadow-none navbar-toggler ms-2" type="button" data-bs-toggle="collapse"
                  data-bs-target="#mynavbar0" aria-controls="navigation" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="mt-2 navbar-toggler-icon">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                  </span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar0">
                  <div class="row d-flex mb-2">
                    <li class="none col-md-1 col-sm-1  h-25	col-lg-1	col-xl-1 ">
                      <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        filtre
                      </a>

                    </li>
                    <li class="nav-item dropdown none col-md-1 col-sm-1  h-25	col-lg-1	col-xl-1 ">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Plus recent
                      </a>

                    </li>
                    <li class="nav-item dropdown none col-md-1 col-sm-1  h-25	col-lg-1	col-xl-1 ms-5">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bas Prix
                      </a>

                    </li>
                    <li class="nav-item dropdown none col-md-1 col-sm-1  h-25	col-lg-1	col-xl-1 ms-5">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Prestataire
                      </a>

                    </li>

                    <li class="nav-item dropdown none col-md-1 col-sm-1  h-25	col-lg-1	col-xl-1 ms-5">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Region Cible
                      </a>

                    </li>
                  </div>

                </div>
              </nav>
            </nav>
            <!-- <div class="card-header pb-0">
            <div class=" row">


              <div class="col-8  border  rounded-pill mb-2 ">
                <div class=" h-50 row">


                </div>
              </div>


              <div class="col-4 mb-2 rounded-pill float-right" align="right">
                <input class="form-control form-control-lg form-control-borderless rounded-pill float-right"
                  type="search" placeholder="Search topics or keywords">
              </div>

            </div>

        </div> -->
          </div>

          <!-- <div class="card-header pb-0">
            <div class=" row">


              <div class="col-8  border  rounded-pill mb-2 ">
                <div class=" h-50 row">


                </div>
              </div>


              <div class="col-4 mb-2 rounded-pill float-right" align="right">
                <input class="form-control form-control-lg form-control-borderless rounded-pill float-right"
                  type="search" placeholder="Search topics or keywords">
              </div>

            </div>

        </div> -->
          <div class="  d-flex justify-content-center pt-5" v-if="loading">

            <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

          </div>
          <div class="card-body  " style="border: none;" v-else>
            <div class="row justify-content-between" style=" border: none;">
              <div class="col-lg-3 col-md-3 col-xl-3 col-sm-1">
                <div class="card  mb-10">

                  <div class="card-body text-dark " v-if="!plus">
                    <h5 class="text-dark  font-weight-bolder "> Categories de Promo</h5>
                    <div class="font-weight-normal">
                      Parcourez et Decouvrez Plus...
                    </div>
                  </div>
                  <div class="card-body text-dark  font-weight-bolder  retour" @click="plus = false" v-else>

                    <img height="65" width="45" class="h-50"
                      src="data:image/png;base64,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" />
                    Retour

                  </div>
                  <div v-if="!plus" class="mb-2">
                    <ul class=" list-group list-group-flush border-0" v-for="category in lCategory"
                      :key="category.category">
                      <li class="list-group-item ml-5 border-0" :id="category.id" @click="selectBc(category)">{{
                          category
                            .title
                      }}</li>
                    </ul>
                  </div>

                  <div v-else>
                    <ul class="list-group list-group-flush pl-5 border-0" v-for="scategory in lSCategory"
                      :key="scategory.category">
                      <li class="list-group-item ml-5 border-0" :id='scategory.id' @click="selectBc(scategory)"> {{
                          scategory
                            .title
                      }} </li>
                    </ul>
                  </div>

                </div>

                <div class="card border-0 bg-light pl-5 mt-10   ">
                  <a disabled="disabled" class="btn btn-primary roundN ">Aller sur PubX.com</a>
                </div>
              </div>
              <div class="col-lg-9 col-lg-9 col-xl-9 col-sm-1">


                <div class="  " style=" border: none;">

                  <div class="pb-0 border-bottom table-responsive">
                    <img :src="listPub.length == 0 ? '' : selectedPub.image" class="img-fluid" style="width:100%"
                      alt="Responsive image">
                  </div>

                  <div class="mt-4 ">
                    <div class="row">
                      <div class="col-10">
                        <h4 class="font-weight-bolder text-dark">{{ listPub.length == 0 ? '' : selectedPub.title }}
                        </h4>

                      </div>
                      <div class="col-1" align="right ">


                        <i class="fa fa-share btns" aria-hidden="true"></i>

                      </div>
                      <div class="col-1 ">


                        <i class="fa fa-share-alt btns" aria-hidden="true"></i>

                      </div>
                    </div>
                    <div class="row">
                      <p class=" mb-3">{{ listPub.length == 0 ? '' : selectedPub.description }}
                      </p>
                    </div>

                    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magni voluptatibus tenetur
                      nobis. Culpa, harum. Voluptas sequi enim tenetur mollitia nobis expedita optio commodi illo non,
                      tempora ab consequatur minus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magni voluptatibus tenetur
                      nobis. Culpa, harum. Voluptas sequi enim tenetur mollitia nobis expedita optio commodi illo non,
                      tempora ab consequatur minus?</p> -->
                  </div>


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
.roundN {
  border-radius: 28px;

}

li {
  list-style: none;
}

.filtre {
  text-decoration: underline;
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
import { ApiManage } from '../../boot/ApiManage';
const body = document.getElementsByTagName("body")[0];
// import Popper from "vue3-popper";
import VueCookies from 'vue-cookies'

// import { createToaster } from "@meforma/vue-toaster";
// import { BIcon } from 'bootstrap-vue' 
export default {
  name: "list-pub",
  components: {


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
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  setup() {
    let lsms = ref([])
    let selectPub = ref('')
    let descripPub = ref('')
    let selectedPub = ref({
      title: '',
      description: '',
      image: '',

    })
    let lsmsInit = ref([])
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
      i.value =
        VueCookies.get('idPublicite');
      console.log('voici idP', VueCookies.get('idPublicite'))
      console.log('voici idCategory', VueCookies.get('idCategory'))
      await getListPub();
      filterData(VueCookies.get('idCategory'), VueCookies.get('idPublicite'))
      lsmsInit.value = lsms.value;

    });
    function filterData(idCategory, id) {
      let selectedAll = document.querySelectorAll('li');
      selectedAll.forEach((elt) => {
        elt.classList.remove('bg-info')
        elt.classList.remove('text-primary')
      })
      let selectedCAt = document.getElementById(idCategory);
      console.log(selectedCAt, idCategory, id);

      selectedCAt.classList.add('bg-info')
      selectedCAt.classList.add('bg-info')
      for (let index = 0; index < listPub.value.length; index++) {
        console.log(id, listPub.value[index].id);

        if (id == listPub.value[index].id) {
          //console.log('***************************', listPub.value[index])

          selectedPub.value = listPub.value[index]
        }
        else {
          console.log('-------------------------')

        }

      }




    }

    function selectBc(category) {
      if (category.sousCategory.length != 0) {
        plus.value = !plus.value;
        // listPub.value = [];
        lSCategory.value = category.sousCategory
        console.log(category.sousCategory)

        for (let index = 0; index < category.sousCategory.length; index++) {
          const element = category.sousCategory[index];
          for (let index = 0; index < element['publications'].length; index++) {
            const element2 = element['publications'][index];

            let pub = {
              id: element2.id,
              title: element2.title,
              description: element2.description,
              image: new ApiManage().baseUrl + '/images/publications/' + element2.publicationObject['filePath'],

            }

            listPub.value.push(pub)
          }
          // eslint-disable-next-line require-atomic-updates

        }
        filterData(category.sousCategory[0].id, listPub.value[0].id)
      }
      else {
        listPub.value = [];

        for (let index = 0; index < category['publications'].length; index++) {
          const element2 = category['publications'][index];

          let pub = {

            id: element2.id,

            title: element2.title,
            description: element2.description,
            image: new ApiManage().baseUrl + '/images/publications/' + element2.publicationObject['filePath'],

          }

          listPub.value.push(pub)
        }
        filterData(category.id, listPub.value[0].id)
      }
    }

    async function getListPub() {
      loading.value = !loading.value
      const response = await new RequestApi().getListPub();

      if (response.status) {


        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];
          if (element['categoryProduit'] == null) {
            lCategory.value.push(element)

            for (let index = 0; index < element['publications'].length; index++) {

              const element2 = element['publications'][index];

              let pub = {
                id: element2.id,

                title: element2.title,
                description: element2.description,
                image: new ApiManage().baseUrl + '/images/publications/' + element2.publicationObject['filePath'],

              }
              listPub.value.push(pub)


            }
          }
          // eslint-disable-next-line require-atomic-updates

        } console.log(listPub.value)
        // eslint-disable-next-line require-atomic-updates
        loading.value = !loading.value
      }
      else {

        // eslint-disable-next-line require-atomic-updates
        loading.value = !loading.value

      }

    }
    return {
      open, loading, data, idFonction, iAction,
      lsms, listPub, filterData, expliqSender, lCategory, selectPub, lSCategory, descripPub, plus, i, selectBc, selectedPub

    };
  },
};
</script>
