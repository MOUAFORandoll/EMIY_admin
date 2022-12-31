<template>
    <div class="py-4 container-fluid">
        <div class=" row">
            <div class="col-12">
                <div class="card w-100 mb-4">
                    <div class="card-body">
                        <div class="part1  border-bottom row justify-content-between ">
                            <div class="col-lg-6 col-sm-12">
                                <h4 class="card-title font-weight-bolder dark text-mobile">{{ showConfig ? "Modifiez " +
                                        commissionSms.libelle :
                                        "Configuration des Commissions"
                                
                                
                                
                                }}</h4>

                            </div>
                            <div class="col-lg-4 col-sm-12 mouse" align="right" v-if="showConfig">
                                <p @click="showConfig = !showConfig">Cancel</p>
                            </div>
                        </div>

                        <div class="table-responsive mt-1" v-if="!showConfig">
                            <div class="  d-flex justify-content-center pb-3" v-if="loading0">

                                <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                            </div>
                            <div v-else>
                                <table class=" table">
                                    <tbody>
                                        <tr>
                                            <td class="">
                                                <div>

                                                    <div class="">
                                                        <p class=" mb-0 ml-2 text-xs ">Titre :</p>
                                                        <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">{{
                                                                commissionSms.libelle
                                                        }}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>

                                                    <div class="">
                                                        <p class="mb-0 ml-2 text-xs ">Description :</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{
                                                                commissionSms.description
                                                        }}</h6>
                                                    </div>
                                                </div>
                                            </td>

                                            <td class="mobile">
                                                <div>

                                                    <div class="">
                                                        <p class="mb-0 ml-2 text-xs ">Pourcentage Partage :</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{
                                                                commissionSms.pourcentagePartage
                                                        }}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>

                                                    <div class="">
                                                        <p class="mb-0 ml-2 text-xs ">Pourcentage Parrain :</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{
                                                                commissionSms.pourcentageParrain
                                                        }}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>

                                                    <div class="">
                                                        <p class="mb-0 ml-2 text-xs ">Pourcentage Parrain2 :</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{
                                                                commissionSms.pourcentageParrain2
                                                        }}</h6>
                                                    </div>
                                                </div>
                                            </td>

                                            <td class="text-left mobile mouse" align='right'>
                                                <div class="text-left col">
                                                    <Popper class="theme" placement="left">
                                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                        <template #content>

                                                            <div class="mouse" @click="showConfig = !showConfig; showUpTranche = false;
                                                            showUpRoute = false;">Modifier
                                                            </div>

                                                        </template>
                                                    </Popper>


                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>



                            </div>

                        </div>
                        <div v-else>

                            <div class=" row d-flex justify-content-end">

                                <!--   <div class="col-lg-4 col-sm-12" align="right">
                                    <CustomButton :title="'Retour'" @click="showConfig = !showConfig"
                                        :classe="'btn btn-primary    '" />
                                </div> -->
                            </div>
                            <div class="row">

                                <div class="col-lg-3 col-sm-12  form-group  ">
                                    <label for="nomP">pourcentage Partage</label>

                                    <input type="text" v-model="pourcentagePartage" class="form-control"
                                        placeholder="pourcentage Partage" id="nomP">
                                </div>
                                <div class="col-lg-3 col-sm-12  form-group  ">
                                    <label for="nomP">pourcentage Parrain</label>

                                    <input type="text" v-model="pourcentageParrain" class="form-control"
                                        placeholder="pourcentageParrain" id="nomP">
                                </div>
                                <div class="col-lg-3 col-sm-12  form-group  ">
                                    <label for="nomP">pourcentage Parrain 2</label>

                                    <input type="text" v-model="pourcentageParrain2" class="form-control"
                                        placeholder="pourcentageParrain2" id="nomP">
                                </div>


                            </div>

                            <CustomButton :title='" Modifier"' :loading='loadingU' @update:loading="loadingU = $event"
                                @click='updateC' :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />






                        </div>
                    </div>






                </div>
                <div class="card w-100 mb-4">
                    <div class="card-body">
                        <div class="part1  border-bottom row justify-content-between ">
                            <div class="col-lg-6 col-sm-12">
                                <h4 class="card-title font-weight-bolder dark text-mobile"> {{ showUpTranche ? "Modifiez   tranche " +
                                selectTranche.id :
                                    "Configuration des rabais par tranche"
                                
                                
                                
                                }}

                                </h4>
                                <!-- <p class="card-text">{{ !showModalCalendar ? "Gestion de vos calendrier" : `Remplir les
                                champs suivants`}} </p> -->
                            </div>
                            <div class="col-lg-4 col-sm-12 mouse" align="right" v-if="showUpTranche">
                                <p @click="showUpTranche = !showUpTranche">Cancel</p>
                            </div>
                        </div>

                        <div class="table-responsive mt-1" v-if="!showUpTranche">
                            <div class="  d-flex justify-content-center pb-3" v-if="loading0">

                                <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                            </div>
                            <div v-else>
                                <table class=" table">
                                    <tbody>
                                        <tr v-for="(tranche) in tranches" :key="tranche.id">
                                            <td class="">
                                                <div>

                                                    <div class="">
                                                        <p class=" mb-0 ml-2 text-xs ">Titre :</p>
                                                        <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                                                            Tranche {{
                                                                    tranche.id
                                                            }}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="mobile">
                                                <div>

                                                    <div class="">
                                                        <p class="mb-0 ml-2 text-xs ">Nombre Minimun :</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{
                                                                tranche.min
                                                        }}</h6>
                                                    </div>
                                                </div>
                                            </td>

                                            <td class="mobile">
                                                <div>

                                                    <div class="">
                                                        <p class="mb-0 ml-2 text-xs ">Nombre Maximum :</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{
                                                                tranche.max
                                                        }}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>

                                                    <div class="">
                                                        <p class="mb-0 ml-2 text-xs ">Pourcentage de reduction :</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{
                                                                tranche.pourcentage
                                                        }}</h6>
                                                    </div>
                                                </div>
                                            </td>

                                            <td class="text-left mouse mobile" align='right'>
                                                <div class="text-left col">
                                                    <Popper class="theme" placement="left">
                                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                        <template #content>

                                                            <div class="mouse" @click="select(tranche)">Modifier
                                                            </div>

                                                        </template>
                                                    </Popper>


                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>



                            </div>

                        </div>
                        <div v-else>

                            <div class=" row d-flex justify-content-end">

                                <!--   <div class="col-lg-4 col-sm-12" align="right">
                                    <CustomButton :title="'Retour'" @click="showUpTranche = !showUpTranche"
                                        :classe="'btn btn-primary    '" />
                                </div> -->

                            </div>
                            <div class="row">

                                <div class="col-lg-3 col-sm-12  form-group  ">
                                    <label for="nomP">Nombre Minimum</label>

                                    <input type="text" v-model="min" class="form-control" placeholder="Nombre Minimum"
                                        id="nomP">
                                </div>
                                <div class="col-lg-3 col-sm-12  form-group  ">
                                    <label for="nomP">Nombre Maximum</label>

                                    <input type="text" v-model="max" class="form-control" placeholder="Nombre Maximum"
                                        id="nomP">
                                </div>
                                <div class="col-lg-3 col-sm-12  form-group  ">
                                    <label for="nomP">Pourcentage de reduction</label>

                                    <input type="text" v-model="pourcentageR" class="form-control"
                                        placeholder="Pourcentage de reduction" id="nomP">
                                </div>


                            </div>

                            <CustomButton :title='" Modifier"' :loading='loadingP' @update:loading="loadingP = $event"
                                @click='updateP' :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />






                        </div>
                    </div>






                </div>
                <div class="card w-100 mb-4">
                    <div class="card-body">
                        <div class="part1  border-bottom row justify-content-between ">
                            <div class="col-lg-6 col-sm-12">
                                <h4 class="card-title font-weight-bolder dark text-mobile">{{ showUpRoute ? "Modifiez  la route " +   selectRoute.nom :
                                    "Configuration des routes"
                                
                                
                                
                                }}</h4>
                                <!-- <p class="card-text">{{ !showModalCalendar ? "Gestion de vos calendrier" : `Remplir les
                                champs suivants`}} </p> -->
                            </div>
                            <div class="col-lg-4 col-sm-12 mouse" align="right" v-if="showUpRoute">
                                <p @click="showUpRoute = !showUpRoute">Cancel</p>
                            </div>
                        </div>

                        <div class="table-responsive mt-1" v-if="!showUpRoute">
                            <div class="  d-flex justify-content-center pb-3" v-if="loading0">

                                <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                            </div>
                            <div v-else>
                                <table class=" table">
                                    <tbody>
                                        <tr v-for="(route) in routes" :key="route.id">
                                            <td class="mobile">
                                                <div>

                                                    <div class="">
                                                        <p class=" mb-0 ml-2 text-xs ">Titre :</p>
                                                        <h6 class=" mb-0 ml-2 text-sm font-weight-bolder text-dark">
                                                            {{
                                                                    route.nom
                                                            }}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="mobile">
                                                <div>

                                                    <div class="">
                                                        <p class="mb-0 ml-2 text-xs ">Description :</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{
                                                                route.description
                                                        }}</h6>
                                                    </div>
                                                </div>
                                            </td>

                                            <td class="">
                                                <div>

                                                    <div class="">
                                                        <p class="mb-0 ml-2 text-xs ">Pays :</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{
                                                                route.pays
                                                        }}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>

                                                    <div class="">
                                                        <p class="mb-0 ml-2 text-xs ">Code Phone :</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{
                                                                route.codePhone
                                                        }}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div>

                                                    <div class="">
                                                        <p class="mb-0 ml-2 text-xs ">Prix Sms :</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{
                                                                route.prix
                                                        }}</h6>
                                                    </div>
                                                </div>
                                            </td>

                                            <td class="mobile">
                                                <div>

                                                    <div class="">
                                                        <p class="mb-0 ml-2 text-xs ">Limite d'envoie :</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{
                                                                route.limite_envois
                                                        }}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-left mouse mobile" align='right'>
                                                <div class="text-left col">
                                                    <Popper class="theme" placement="left">
                                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                        <template #content>

                                                            <div class="mouse" @click="selectR(route)">Modifier
                                                            </div>

                                                        </template>
                                                    </Popper>


                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>



                            </div>

                        </div>
                        <div v-else>

                            <div class=" row d-flex justify-content-end">

                                <!--    <div class="col-lg-4 col-sm-12" align="right">
                                    <CustomButton :title="'Retour'" @click="showUpRoute = !showUpRoute"
                                        :classe="'btn btn-primary    '" />
                                </div> -->
                            </div>
                            <div class="row">

                                <div class="col-lg-3 col-sm-12  form-group  ">
                                    <label for="nomP">Prix du sms</label>

                                    <input type="text" v-model="prix" class="form-control" placeholder="Nombre Minimum"
                                        id="nomP">
                                </div>
                                <div class="col-lg-3 col-sm-12  form-group  ">
                                    <label for="nomP">limite d'envoie</label>

                                    <input type="text" v-model="limiteEnvoi" class="form-control"
                                        placeholder="Nombre Maximum" id="nomP">
                                </div>


                            </div>

                            <CustomButton :title='" Modifier"' :loading='loadingR' @update:loading="loadingR = $event"
                                @click='updateR' :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />






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
import { createToaster } from "@meforma/vue-toaster";
// import ArgonInput from "../../components/ArgonInput.vue";
// import VCalendar from 'v-calendar';
import Popper from "vue3-popper";

// import { formatDate } from '../../boot/formatDate';
// import { FormatData } from '../../boot/FormatData';
import VueCookies from 'vue-cookies';
import CustomButton from '../../components/CustomButton.vue';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
// import { VueFinalModal } from 'vue-final-modal'

// import { BIcon } from 'bootstrap-vue' 
export default {
    name: "Commission",
    components: {
        CustomButton, Popper
    },


    setup() {

        let toast = createToaster();
        let pourcentagePartage = ref(0);
        let pourcentageParrain = ref(0);
        let pourcentageParrain2 = ref(0);
        let min = ref(0);
        let max = ref(0);
        let prix = ref(0);
        let limiteEnvoi = ref(0);
        let pourcentageR = ref(0);
        let loading0 = ref(true);
        let loadingU = ref(false);
        let loadingP = ref(false);
        let loadingR = ref(false);
        let commissionSms = ref();
        let tranches = ref([]);
        let selectTranche = ref();
        let routes = ref([]);
        let selectRoute = ref();
        const statusProg = ref(false);
        const showUpTranche = ref(false);
        let showUpRoute = ref(false);
        let showConfig = ref(false);
        onMounted(async () => {
            await getCommissionSms();
        });

        function select(T) {
            selectTranche.value = T;
            showUpTranche.value = !showUpTranche.value
            showUpRoute.value = false;
            showConfig.value = false;
            min.value = T.min;
            max.value = T.max;
            pourcentageR.value = T.pourcentage;
        }
        function selectR(R) {
            selectRoute.value = R;
            showUpRoute.value = !showUpRoute.value
            showUpTranche.value = false;
            showConfig.value = false;
            prix.value = R.prix;
            limiteEnvoi.value = R.limite_envois;
            console.log(prix,)
            // pourcentageR.value = T.pourcentage;
        }
        async function getCommissionSms() {
            const response = await new RequestApi().getCommissionSmsAction();
            if (response.status) {

                commissionSms.value = response.data.sms;
                tranches.value = response.data.tranche;
                routes.value = response.data.route;

                pourcentagePartage.value = response.data.sms.pourcentagePartage
                pourcentageParrain.value = response.data.sms.pourcentageParrain
                pourcentageParrain2.value = response.data.sms.pourcentageParrain2
                loading0.value = false;
                console.log(commissionSms.value)
            }
            else {
                loading0.value = false;

                toast.error(`Erreur`, {
                    // override the global option
                    position: "bottom"
                })
            }
        }

        const updateC = async () => {

            let data =
            {
                keySecret: VueCookies.get('keySecret'),

                pourcentagePartage: pourcentagePartage.value,

                pourcentageParrain: pourcentageParrain.value,
                pourcentageParrain2: pourcentageParrain2.value

            }
                ;
            loadingU.value = true;

            const response1 = await new RequestApi().updateCommissionSmsAction(data);

            if (response1.status) {

                toast.success(`Mise a Jour effectuee`, {
                    // override the global option
                    position: "bottom"
                });
                loadingU.value = false;
                getCommissionSms();
            } else {
                toast.error(`Une erreur est survenu lors de l'operation.`, {
                    // override the global option
                    position: "bottom"
                });

                loadingU.value = false;

            }
            loadingU.value = false;

        };
        const updateP = async () => {

            let data =
            {
                keySecret: VueCookies.get('keySecret'),
                id: selectTranche.value.id,
                min: min.value,

                max: max.value,
                pourcentage: pourcentageR.value

            }
                ;
            loadingP.value = true;

            const response1 = await new RequestApi().updateCommissionTrancheAction(data);

            if (response1.status) {

                toast.success(`Mise a Jour effectuee`, {
                    // override the global option
                    position: "bottom"
                });
                loadingP.value = false;
                getCommissionSms();
            } else {
                toast.error(`Une erreur est survenu lors de l'operation.`, {
                    // override the global option
                    position: "bottom"
                });

                loadingP.value = false;

            }
            loadingP.value = false;

        }
        const updateR = async () => {

            let data =
            {
                keySecret: VueCookies.get('keySecret'),
                id: selectRoute.value.id,
                prix: prix.value,

                limiteEnvoi: limiteEnvoi.value,


            }
                ;
            loadingR.value = true;

            const response1 = await new RequestApi().updateCommissionRouteAction(data);

            if (response1.status) {

                toast.success(`Mise a Jour effectuee`, {
                    // override the global option
                    position: "bottom"
                });
                loadingR.value = false;
                getCommissionSms();
            } else {
                toast.error(`Une erreur est survenu lors de l'operation.`, {
                    // override the global option
                    position: "bottom"
                });

                loadingR.value = false;

            }
            loadingR.value = false;

        }

        return {
            selectTranche,
            updateP, loadingP, loadingR, selectRoute, routes, showUpRoute, selectR, prix, limiteEnvoi, updateR,
            loadingU, select, tranches, showUpTranche, min, max, pourcentageR,
            pourcentagePartage, pourcentageParrain, pourcentageParrain2,
            statusProg, updateC, commissionSms, showConfig, loading0
        };
    },
}
</script>
