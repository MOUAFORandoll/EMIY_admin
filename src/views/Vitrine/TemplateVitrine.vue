<template>
    <div class="py-4 container-fluid">
        <div class=" row">
            <div class="col-12" v-if="!next">
                <div class="card w-100 mb-4">
                    <div class="card-body">
                        <div class="part1">
                            <h4 class="card-title font-weight-bolder dark text-mobile">Creation d'un template pour
                                vitrine</h4>
                            <p class="card-text pb-2 border-bottom">Commencez par creer votre nom de domaine.</p>

                            <div class="row pt-2 d-flex justify-content-center">
                                <div class="col-lg-8 h-100     d-flex col-sm-12   ">

                                    <div class="col-lg-10">
                                        <input type="text" v-model="nom" @input="verifSpace"
                                            class="  form-control border ms-0 text-center" id="ass"
                                            placeholder="stargo">
                                    </div>


                                </div>
                                <div class="col-lg-4 h-100     d-flex col-sm-12   ">

                                    <div class="col-lg-10">
                                        <CustomButton :title='"Verifier et Creer "' :loading='loadingVerif'
                                            @update:loading="loadingVerif = $event" @click='verifExist'
                                            :classe="nom.length != 0 ? 'btn-primary ' + 'btn  pt-2 pb-2 ' : 'btn-secondary ' + 'btn  pt-2 pb-2 '" />

                                    </div>


                                </div>



                            </div>


                        </div>
                    </div>


                </div>


            </div>


            <div class="col-12" v-else>
                <div class="card w-100 mb-4">
                    <div class="card-body">
                        <div class="part1">

                            <div class='row pb-2 d-flex justify-content-between border-bottom'>

                                <div class='col'>
                                    <h4 class="card-title font-weight-bolder dark text-mobile">Creation d'un template
                                        pour vitrine
                                    </h4>
                                    <p class="card-text ">Chargez les informations(Cette action prend du temps).</p>
                                </div>
                                <div class='col text-primary' align='right'>
                                    <p highlight @click="next = !next; " class="align-baseline mouse">
                                        Retour
                                    </p>
                                </div>


                            </div>
                            <div class="row pt-2">
                                <div class="col-lg-4 col-sm-12 form-group">

                                    <label for="inputCity">nom</label>
                                    <input type="text" v-model="nom" read-only
                                        class="  form-control border ms-0 text-center" id="ass" placeholder="stargo">
                                </div>
                                <div class="col-lg-4 col-sm-12 form-group">

                                    <label for="licence"> logo vitrine</label>
                                    <argon-input :readonly='loadingSave' accept=".png, .jpeg,.jpg"
                                        icon="../assets/img/team-2.jpg" type="file" placeholder="Description"
                                        aria-label="Name" @change="onFileChangePhoto" />
                                </div>


                                <div class="col-lg-4 col-sm-12  form-group  ">

                                    <label for="licence">Fichier : (Compresse au format zip)</label>
                                    <argon-input :readonly='loadingSave' accept=".zip" icon="../assets/img/team-2.jpg"
                                        type="file" placeholder="Description" aria-label="Name"
                                        @change="onFileChangeFile" />
                                </div>




                            </div>


                            <CustomButton :title='"Sauvegarder et Creer "' :loading='loadingSave'
                                @update:loading="loadingSave = $event" @click='newTemplate'
                                :classe="'btn btn-primary   '" />
                            <!-- <CustomButton :title='"Retour "' @click='next=false' :classe="'btn btn-danger  ms-2 '" /> -->

                        </div>
                    </div>


                </div>
                <!-- <div class="card w-100 mb-4">
    <div class="card-body">
        <div class="part1">

            <div class="row ps-2 pb-8 pt-4 w-75">
                 

            </div>
        </div>
    </div>


</div> -->
            </div>
        </div>

    </div>
</template>
 
<style scoped>
ul {
    list-style: ">";
}

ul li {
    padding-left: 7px
}

#my-input-container {
    border-radius: 0.475rem;
    border: 1px solid #ced4da;
    padding: 0;
    margin-right: 10px
}

.formNew {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* border-radius: 0.375rem; */
}

#ass {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
}

#my-suffix {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #6c757d;
    background-clip: padding-box;
    /* border: 1px solid #ced4da; */
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-left: none;

    appearance: none;
    /* border-radius: 0.375rem; */
}

.flex {
    display: flex;
}

.mouse:hover {


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
<script>
import { ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
// import Datepicker from 'vuejs3-datepicker';
import { createToaster } from "@meforma/vue-toaster";
import ArgonInput from "../../components/ArgonInput.vue";

// import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'; 

// import VueCookies from 'vue-cookies';
import CustomButton from '../../components/CustomButton.vue';


// import { BIcon } from 'bootstrap-vue' 
export default {
    name: "NouvelleVitrine",
    components: {
        // Datepicker
        ArgonInput,
        CustomButton,
    },

    methods: {
        onFileChangePhoto(e) {

            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;

            // console.log(files[0])
            this.imagePhoto = files[0];

            this.addToListImageC(files[0])

        },
        onFileChangeFile(e) {

            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;

            // console.log(files[0])
            this.imageFile = files[0];



        },
    },
    setup() {

        let imagePhoto = ref(null);
        let imageFile = ref(null);



        const nom = ref('');
        const toast = createToaster();

        const loadingSave = ref(false);
        const next = ref(false);

        const newTemplate = async () => {
            if (!(nom.value.indexOf(' ') >= 0)) {

                if (
                    nom.value.length != 0
                ) {
                    loadingSave.value = true;

                    const response = await new RequestApi().uploadTemplate(nom.value, imagePhoto.value, imageFile.value);
                    if (response.status) {
                        loadingSave.value = false;
                        next.value = false;
                        toast.success(`Template ajoute avec success.`, {
                            // override the global option
                            position: "bottom"
                        });
                        nom.value = '';


                    } else {
                        if (response.aff) {
                            toast.error(`Une erreur s'est produite`, {
                                // override the global option
                                position: "bottom"
                            });
                        }
                        loadingSave.value = false;

                    }
                    loadingSave.value = false;





                } else {
                    toast.error(`Veuillez entrer des informations correct`, {
                        // override the global option
                        position: "bottom"
                    });
                }
            } else {
                toast.error(`Veuillez entrer un nom de vitrine correct`, {
                    // override the global option
                    position: "bottom"
                });
            }

        };
        let comment = ref('');
        const verifSpace = () => {
            if (nom.value.indexOf(' ') >= 0) {
                comment.value = 'Veuillez retirer les espaces';
            }
            else {
                comment.value = "Pas d'espace";

            }
        }

        let loadingVerif = ref(false)
        const verifExist = async () => {
            if (!(nom.value.indexOf(' ') >= 0) && nom.value.length != 0) {



                const data = {
                    nom: nom.value,

                };
                loadingVerif.value = true;

                const response = await new RequestApi().verifyTemplateVitrine(data);



                if (response.statusR) {
                    if (response.status) {

                        loadingVerif.value = false;
                        next.value = true

                    } else {
                        toast.error(`Ce nom de domaine est deja utilise`, {
                            // override the global option
                            position: "bottom"
                        });
                        loadingVerif.value = false;

                    }
                } else {

                    toast.error(`Une erreur est survenue`, {
                        // override the global option
                        position: "bottom"
                    });
                    loadingVerif.value = false;

                }
                loadingVerif.value = false;






            } else {
                toast.error(`Veuillez entrer un nom de template correct`, {
                    // override the global option
                    position: "bottom"
                });
            }


        };

        return {
            imageFile,
            imagePhoto, loadingVerif, verifExist,
            verifSpace,

            nom,

            newTemplate,
            loadingSave,
            next, comment

        };
    },
}
</script>
