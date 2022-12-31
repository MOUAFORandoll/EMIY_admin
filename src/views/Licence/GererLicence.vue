<template>
    <div class="py-4 container-fluid " style="border: none;">
        <div class=" row">
            <div class="col-12">
                <div class="" style="border: none;">





                    <div class="  " style="border: none;">


                        <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <!-- <div class="card plus">+</div> -->


                            <div class="card ps-3 pe-3 mb-lg-0 mb-4 ">
                                <div class="row p-2  pb-2 border-bottom">
                                    <div class="col">
                                        <div class="d-flex  justify-content-between">
                                            <h4 class="mb-1 ml-0 mt-2 font-weight-bolder  text-mobile text-dark">Manager les licences
                                            </h4>
                                        </div>
                                        <h6 class=""></h6>
                                    </div>

                                    <div class="col-3 mt-3  " align="right">
                                        <!--  <input class="form-control" v-model='search' @input="searchFunction"
                                            v-if="!statusAdd" placeholder="search" type="search" /> -->

                                        <div class="" v-if="!statusAdd">
                                            <p @click="statusAdd = !statusAdd">Ajouter</p>
                                        </div>
                                        <div class="col-lg-4 col-sm-12 mouse" v-if="statusAdd">
                                            <p @click="statusAdd = !statusAdd">Cancel</p>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="!statusAdd">
                                    <div class="table-responsive trx mt-1">
                                        <div class="  d-flex justify-content-center pb-3" v-if="loadingData">

                                            <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                                        </div>
                                        <table class="table  " v-else>

                                            <div class="  d-flex justify-content-center pb-3"
                                                v-if="listLicence.length == 0">

                                                Vide

                                            </div>
                                            <tbody>
                                                <tr v-for="(licence, index)  in listLicence"
                                                    v-show="start <= index && index < final" :key="licence.label"
                                                    class="mouse"
                                                    :class="this.$store.state.darkMode ? 'mouseA' : 'mouseB'">
                                                    <td class=" ">
                                                        <div>

                                                            <div class="ml-2">
                                                                <p class="mb-0 ml-2 text-xs ">Nom :</p>
                                                                <h6
                                                                    class="mb-0 ml-2 text-sm font-weight-bolder text-dark">
                                                                    {{ licence.nom }}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class=" ">
                                                        <div>

                                                            <div class="ml-2">
                                                                <p class="mb-0 ml-2 text-xs ">duree (Jours) :</p>
                                                                <h6
                                                                    class="mb-0 ml-2 text-sm font-weight-bolder text-dark">
                                                                    {{ licence.duree }}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class='mobile'>
                                                        <div class="text-left">
                                                            <p class="mb-0 text-xs ">Taux :</p>
                                                            <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{
                                                                    licence.taux
                                                            }}</h6>
                                                        </div>
                                                    </td>
                                                    <td class=" ">
                                                        <div>

                                                            <div class="ml-2">
                                                                <p class="mb-0 ml-2 text-xs ">description :</p>
                                                                <h6
                                                                    class="mb-0 ml-2 text-sm font-weight-bolder text-dark">
                                                                    {{ licence.description }}</h6>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <!-- <td class=" ">
                                                        <div>

                                                            <div class="ml-2">
                                                                <p class="mb-0 ml-2 text-xs ">Status :</p>
                                                                <h6
                                                                    class="mb-0 ml-2 text-sm font-weight-bolder text-dark">
                                                                    {{ licence.status ? "Actif" : "Inactif" }}</h6>
                                                            </div>
                                                        </div>
                                                    </td> -->



                                                  <!--   <td class="text-left   ">
                                                        <div class="text-left col">
                                                            <Popper class="theme" placement="left">
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true"
                                                                    @click="selectlicence(licence)"></i>
                                                                <template #content>
                                                                    <i class="fa fa-spinner fa-spin" v-if="loading0"
                                                                        style="  font-size:30px; "></i>
                                                                    <div class="mouse"
                                                                        v-if="!loading0 && licence.ad == 0"
                                                                        @click="changerEtatDemande(licence.id)">
                                                                        {{ !licence.status ? "Activer" : "Desactiver"
                                                                        }}
                                                                    </div>
                                                                    <div class="mouse" v-if="!loading0"
                                                                        @click="supprimerSenderId(licence.id)">
                                                                        Supprimer</div>

                                                                </template>
                                                            </Popper>


                                                        </div>
                                                    </td> -->
                                                </tr>
                                            </tbody>
                                        </table>


                                    </div>
                                    <div class='card-footer' v-if='(listLicence.length > 10)' align='right'>
                                        <div class="row   col-lg-1 col-md-4 col-xl-5 col-sm-5"
                                            :class="this.$store.state.darkMode ? 'bg-default' : ''">
                                            <div class="  mouseY">
                                                <i @click="next" v-if='(final < listLicence.length)'
                                                    class="mouseY 	fa fa-angle-right"
                                                    style="font-size:36px; float:right"></i>
                                                <select id="select_id" @change="changeVal($event)" style="float:right"
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
                                                <i class="mouseY	fa fa-angle-left" @click="prev"
                                                    style="font-size:36px; "></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div v-else>

                                    <div class=" row d-flex justify-content-end">




                                        <div class="col-lg-6 col-sm-12  form-group  ">
                                            <label for="nomP">Titre licence</label>

                                            <argon-input :readonly='loading' type="text" v-model="nom"
                                                placeholder="Exemple :Titre " aria-label="licence" />
                                        </div>
                                        <div class="col-lg-6 col-sm-12  form-group  ">
                                            <label for="nomP">Type Licence</label>

                                            <SelectCompN v-model="typeLicence" :readonly="loading"
                                                :data="optionsTypeLicence" placeholder="  Selectionner le type de licence
                                                                              " />
                                        </div>
                                        <div class="col-lg-6 col-sm-12  form-group  ">
                                            <label for="nomP">Duree</label>

                                            <argon-input :readonly='loading' type="phone" v-model="duree"
                                                placeholder="Duree" aria-label="Duree" />
                                        </div>
                                        <div class="col-lg-6 col-sm-12  form-group  ">
                                            <label for="nomP">Taux</label>

                                            <argon-input :readonly='loading' type="phone" v-model="taux"
                                                placeholder="Duree" aria-label="Duree" />
                                        </div>
                                        <!--    <div class="col-lg-6 col-sm-12  form-group  ">
                                            <label for="nomP">Modele de contenu de sms</label>
                                            <SelectCompModel v-model="mod" @input='selectModel'
                                                :readonly='loadingProgress' :data="lModelSms"
                                                placeholder="  Selectionner un model de sms" />
                                        </div> -->
                                        <div class="col-12  form-group  ">
                                            <label for="nomP">Description de la licence</label>
                                            <argon-area length='300' v-model="description" />
                                        </div>

                                    </div>



                                    <CustomButton :title='" Ajouter"' :loading='loading'
                                        @update:loading="loading = $event" @click='newLicence'
                                        :classe="'btn btn-primary  '" color="success" fullWidth size="lg" />






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
import ArgonInput from "@/components/ArgonInput.vue";
import VueCookies from 'vue-cookies';
export default {
    name: "Nouveaulicence",
    components: {
        // Datepicker
        //   Editor,
        ArgonInput

    },

    data() {
        return {
            start: 0, final: 10,
            moyenne: 10,

        }
    },
    methods: {
        next() {
            console.log(this.listLicence.length)
            if (this.final + this.moyenne < this.listLicence.length) {
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
                    this.moyenne = parseInt(this.listLicence.length)
                    this.start = 0;
                } else {
                    this.moyenne = parseInt(event.target.value)
                    this.start = 0;
                    // this.final = this.final + this.moyenne;

                }
                // this.start = this.start + this.moyenne;
                this.final = this.moyenne;
            }

            console.log(this.final)
        }
    },

    setup() {
        onMounted(async () => {
            await getlicence(); await getTypeLicence();





        });

        let toast = createToaster();
        const loadingPays = ref(false);

        const typeLicence = ref({ id: 0, codePhone: 0, label: 'Aucun' });

        const delette = () => {

            typeLicence.value = { id: 0, label: 'Aucun' };
        };
        let statusAdd = ref(false)

        let licenceS = ref(null)
        let listLicence = ref([]);

        let licenceSave = ref([])
        async function getlicence() {
            loadingData.value = true;
            const response = await new RequestApi().getLicenceAction2();
            if (response.status) {

                listLicence.value = response.data
                licenceSave.value = response.data
                loadingData.value = false;

            }
            else {

                loadingData.value = false;

                toast.error(`Error`, {
                    // override the global option
                    position: "bottom"
                });
            }


        }


        const searchFunction = () => {
            // listLicence.value = licenceSave.value
            // let result = ref([])

            // if (search.value.length != 0) {
            //     listLicence.value.forEach((value) => {
            //         console.log('a')
            //         if (

            //             (value.nom ?? '').toLowerCase().includes(search.value.toLowerCase()) ||
            //             (value.adresse ?? '').toLowerCase().includes(search.value.toLowerCase()) ||
            //             (value.subject ?? '').toLowerCase().includes(search.value.toLowerCase()) ||
            //             (value.message ?? '').toLowerCase().includes(search.value.toLowerCase())
            //         ) {
            //             // console.log(value.nom.toLowerCase().includes(search.value.toLowerCase()) || value.prenom.toLowerCase().includes(search.value.toLowerCase()) || value.phone.includes(search.value))
            //             console.log('2')

            //             result.value.push(value);
            //         }
            //     });
            //     listLicence.value = result.value
            // }
            // else {
            //     listLicence.value = licenceSave.value
            // }
            // console.log(result.value, search.value);


        };
        let optionsTypeLicence = ref([])
        async function getTypeLicence() {
            const response = await new RequestApi().getTypeLicenceAction();
            if (response.status) {
                optionsTypeLicence.value = response.data
            } else {

                toast.error(`Une erreur s'est produite`, {
                    // override the global option
                    position: "bottom"
                });
            }
            // console.log(lPays.value)

        }
        let search = ref('')
        let description = ref('')
        let licence = ref('')
        let loading = ref(false)
        let loadingData = ref(false)
        let loading0 = ref(false)
        const newLicence = async () => {

            let data =
            {
                keySecret: VueCookies.get('keySecret'),
                nom: nom.value,
                description: description.value,
                duree: duree.value,
                taux: taux.value,
                typeLicence: typeLicence.value.id,

            }
            loading.value = true;

            console.log(data)
            const response1 = await new RequestApi().newLicenceAction(data);

            if (response1.status) {
                listLicence.value = response1.data
                await getlicence()
                toast.success(`succes.`, {
                    // override the global option
                    position: "bottom"
                });
                loading.value = false;

            } else {
                if (response1.aff) {
                    toast.error(`Une erreur s'est produite`, {
                        // override the global option
                        position: "bottom"
                    });
                }
                loading.value = false;

            }
            loading.value = false;

        };
/* 
        const changerEtatDemande = async (id) => {

            let data =
            {
                keySecret: VueCookies.get('keySecret'),

                idSenderId: id

            }
            loading0.value = true;

            console.log(data)
            const response1 = await new RequestApi().chagerEtatDemandeAction(data);

            if (response1.status) {
                listLicence.value = response1.data
                toast.success(`succes.`, {
                    // override the global option
                    position: "bottom"
                });
                loading.value = false;
            } else {
                if (response1.aff) {
                    toast.error(`Une erreur s'est produite`, {
                        // override the global option
                        position: "bottom"
                    });
                }
                loading0.value = false;

            }
            loading0.value = false;

        }; */ const supprimerSenderId = async (id) => {

            let data =
            {
                keySecret: VueCookies.get('keySecret'),

                idSenderId: id

            }
            loading0.value = true;

            console.log(data)
            const response1 = await new RequestApi().deletteDemandeAction(data);

            if (response1.status) {
                listLicence.value = response1.data
                toast.success(`succes.`, {
                    // override the global option
                    position: "bottom"
                });
                loading.value = false;
            } else {
                if (response1.aff) {
                    toast.error(`Une erreur s'est produite`, {
                        // override the global option
                        position: "bottom"
                    });
                }
                loading0.value = false;

            }
            loading0.value = false;

        };

        let nom = ref('');
        let duree = ref('');
        let taux = ref('');
        return {

            search, searchFunction,
            listLicence, show: false, loading,
            statusAdd,
            licenceS,
            showMenuU: false, tinyKey: 'm6yavinfzfbyst94a2pcwfod9i5v0893zk4wibpuyx3z3w4z',
            optionsTypeLicence,

            delette,
            nom, duree, taux,
            typeLicence, loading0, loadingData,
            loadingPays, newLicence, description, licence, supprimerSenderId
            // onSubmit,

        };
    },
}
</script>
