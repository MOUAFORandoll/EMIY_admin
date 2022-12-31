
<template>

    <div class="py-4 container-fluid">

        <div class=" row">
            <div class="col-12">

                <div class="card" v-if="loadingPub">
                    <div class="  d-flex justify-content-center pt-5 pb-5 ">

                        <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                    </div>
                </div>
                <div v-else>
                    <!-- <div class="progress mb-1" style="height: 8px;">
                        <div id="theBar" class="progress-bar progress-bar-info progress-bar-striped active"
                            role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                            style="width: 10%;">
                            60%
                        </div>
                    </div> -->
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="card-body">

                            <div class="carousel-inner" data-interval="10000">
                                <div class="carousel-item " :class="index == 0 ? 'active' : ''"
                                    v-for="(pub, index) in optionsPub" :key="pub.id">


                                    <img :src="pub.path" style="width: 100vw;height: 40vh;" class="img-fluid"
                                        alt="Responsive image">

                                    <h5 class="card-title">{{ parse(pub.title) }}</h5>
                                    <p class="card-text mt-2">{{ parse(pub.description) }}</p>
                                </div>
                            </div>
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon bg-info" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon bg-info" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
.carousel-indicators [data-bs-target] {
    position: relative;
    width: 60px;
    height: 6px;
    border: none;
    border-radius: 24px;
}

.carousel-indicators [data-bs-target] span {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #7952b3;
    border-radius: inherit;
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

// import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

// import VueCookies from 'vue-cookies';
// import CustomButton from '../../components/CustomButton.vue';

import { textToHtml } from '../../boot/parseHtml';

const body = document.getElementsByTagName("body")[0];
// import { BIcon } from 'bootstrap-vue' 
export default {
    name: "Pub-View",
    components: {
        // Datepicker 
        // ArgonInput,
        // CustomButton 
    },
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
    beforeMount() {
        this.$store.state.hideConfigButton = true;
        this.$store.state.showNavbar = false;
        this.$store.state.showSidenav = false;
        this.$store.state.showFooter = false;
        body.classList.remove("bg-gray-100");
    },

    setup() {

        onMounted(async () => {

            await getPub();
        });
        let toast = createToaster();
        let loadingPub = ref(true);
        let optionsPub = ref([]);
        const getPub = async () => {
            loadingPub.value = true;
            console.log(window.location.href.split('/')[window.location.href.split('/').length - 1]);
            const response = await new RequestApi().getListPubNew(window.location.href.split('/')[window.location.href.split('/').length - 1]);
            console.log(response.data);
            if (response.status) {
                optionsPub.value = response.data
            } else {
                toast.error(`Erreur lors du chargement des typeVitrines.`, {
                    // override the global option
                    position: "bottom"
                });
            }
            loadingPub.value = false;
        };



        const parse = (data) => {
            return new textToHtml().parse(data)
        }
        return {
            parse,
            optionsPub,
            loadingPub,
            getPub,


        };
    },
}
</script>
