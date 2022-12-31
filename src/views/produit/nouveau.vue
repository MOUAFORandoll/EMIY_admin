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
                                            <h4 class="mb-1 ml-0 mt-2 font-weight-bolder text-mobile text-dark">Ajouter
                                                un produit
                                            </h4>
                                        </div>
                                        <h6 class="text-mobile2">Remplissez les champs</h6>
                                    </div>


                                </div>


                                <div class=" row d-flex ">




                                    <div class="col-lg-3 col-sm-12  form-group  ">
                                        <label for="nomP">Titre </label>

                                        <argon-input :readonly='loading' type="text" v-model="titre"
                                            placeholder="Exemple :Iphone X" aria-label="titre" />
                                    </div>
                                    <div class="col-lg-3 col-sm-12  form-group  ">
                                        <label for="nomP">Prix Unitaire </label>
                                        <argon-input type="phone" :readonly='loading' v-model='prixUnitaire'
                                            placeholder="Prix" name="Prix" size="lg" />
                                    </div>

                                    <div class="col-lg-3 col-sm-12  form-group  ">
                                        <label for="nomP">Quantite </label>
                                        <argon-input type="phone" :readonly='loading' v-model='quantite'
                                            placeholder="Quantite" name="Quantite" size="lg" />
                                    </div>



                                    <div class="col-lg-3 col-sm-12  ">

                                        <label class="font-weight-normal" for="licence">Categorie</label>

                                        <SelectComp :readonly='loadingProgress' v-model="category"
                                            :data="optionsCategory" placeholder='                                            Selectionner une categorie
                                        ' />









                                    </div>
                                    <div class="col-lg-6 col-sm-12  ">
                                        <label class="font-weight-normal">Inserer image </label>
                                        <argon-input :multiple='true' :readonly='loadingProgress'
                                            icon="../assets/img/team-2.jpg" type="file" placeholder="Description"
                                            aria-label="Name" accept=".png, .jpeg,.jpg" @change="onFileChange" />



                                    </div>

                                    <div class="col-lg-12 col-sm-12  form-group  ">
                                        <label for="nomP">Description de votre produit</label>
                                        <argon-area length='300' :readonly='loading' v-model="descriptionProduit" />
                                    </div>

                                </div>



                                <CustomButton :title='" Nouveau"' :loading='loading' @update:loading="loading = $event"
                                    @click='newProduit' :classe="'btn btn-primary  '" color="success" fullWidth
                                    size="lg" />






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
// import VueCookies from 'vue-cookies';
export default {
    name: "Nouveautitre",
    components: {
        // Datepicker
        //   Editor,


    },

    data() {
        return {
            start: 0, final: 10,
            moyenne: 10,

        }
    },
    methods: {
        onFileChange(e) {

            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;

            console.log(files)
            this.listImages = files;

            console.log(this.listImages)


        },
        next() {
            console.log(this.listSender.length)
            if (this.final + this.moyenne < this.listSender.length) {
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
                    this.moyenne = parseInt(this.listSender.length)
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

            await getCategory();




        });

        let toast = createToaster();
        const loadingcategory = ref(false);

        const category = ref({ id: 0, codePhone: 0, label: 'Aucun' });

        const searchFunction = () => {
            // listSender.value = titreSave.value
            // let result = ref([])

            // if (search.value.length != 0) {
            //     listSender.value.forEach((value) => {
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
            //     listSender.value = result.value
            // }
            // else {
            //     listSender.value = titreSave.value
            // }
            // console.log(result.value, search.value);


        };
        let optionsCategory = ref([])
        async function getCategory() {
            const response = await new RequestApi().getListcatp();
            if (response.status) {
                optionsCategory.value = response.data
            } else {

                toast.error(`Une erreur s'est produite`, {
                    // override the global option
                    position: "bottom"
                });
            }
            // console.log(lcategory.value)

        }
        let search = ref('')
        let descriptionProduit = ref('')
        let titre = ref('')
        let prixUnitaire = ref('')
        let quantite = ref('')
        let idBoutique = ref('1')
        let loading = ref(false)
        let loadingData = ref(false)
        let loading0 = ref(false)
        const newProduit = async () => {
            let file = ref(new FormData());


            file.value.append('keySecret', '1234')
            file.value.append('titre', titre.value)
            file.value.append('idCategory', category.value.id)
            file.value.append('descriptionProduit', descriptionProduit.value)
            file.value.append('prixUnitaire', prixUnitaire.value)
            file.value.append('idBoutique', idBoutique.value)
            file.value.append('quantite', quantite.value)
            file.value.append('countImage', listImages.value.length)
            for (var i = 0; i < listImages.value.length; i++) {
                const myNewFile = new File([listImages.value[i]], listImages.value[i].name.replace(/\s/g, '').trim(), { type: listImages.value[i].type });
                file.value.append('file' + i, myNewFile);
            }


            loading.value = true;

            console.log(file.value)
            const response1 = await new RequestApi().newProduitAction(file.value);

            if (response1.status) {


                loading.value = false;
                toast.success(`succes.`, {
                    // override the global option
                    position: "bottom"
                });


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

        // const changerEtatDemande = async (id) => {

        //     let data =
        //     {
        //         keySecret: VueCookies.get('keySecret'),

        //         idtitre: id

        //     }
        //     loading0.value = true;

        //     console.log(data)
        //     const response1 = await new RequestApi().chagerEtatDemandeAction(data);

        //     if (response1.status) {
        //         listSender.value = response1.data
        //         toast.success(`succes.`, {
        //             // override the global option
        //             position: "bottom"
        //         });
        //         loading.value = false;
        //     } else {
        //         if (response1.aff) {
        //             toast.error(`Une erreur s'est produite`, {
        //                 // override the global option
        //                 position: "bottom"
        //             });
        //         }
        //         loading0.value = false;

        //     }
        //     loading0.value = false;

        // }; const supprimertitre = async (id) => {

        //     let data =
        //     {
        //         keySecret: VueCookies.get('keySecret'),

        //         idtitre: id

        //     }
        //     loading0.value = true;

        //     console.log(data)
        //     const response1 = await new RequestApi().deletteDemandeAction(data);

        //     if (response1.status) {
        //         listSender.value = response1.data
        //         toast.success(`succes.`, {
        //             // override the global option
        //             position: "bottom"
        //         });
        //         loading.value = false;
        //     } else {
        //         if (response1.aff) {
        //             toast.error(`Une erreur s'est produite`, {
        //                 // override the global option
        //                 position: "bottom"
        //             });
        //         }
        //         loading0.value = false;

        //     }
        //     loading0.value = false;

        // };

        // let lModelSms = ref([])

        // async function getModel() {
        //     const response = await new RequestApi().getModelAction();
        //     if (response.status) {

        //         lModelSms.value = response.data;


        //     }
        //     else {
        //         loading.value = false;

        //         if (response.aff) {
        //             toast.error(`Une erreur s'est produite`, {
        //                 // override the global option
        //                 position: "bottom"
        //             });
        //         }
        //     }
        // }
        // function selectModel() {
        //     console.log(mod.value, 'mod.value')

        // }

        let listImages = ref([]);
        return {
            // selectModel, lModelSms,
            search, searchFunction,/*  status1, status2, status3, */
          /*   listSender, */ show: false, loading,

            showMenuU: false, tinyKey: 'm6yavinfzfbyst94a2pcwfod9i5v0893zk4wibpuyx3z3w4z',
            optionsCategory,
            // delette,
            descriptionProduit,
            titre,
            prixUnitaire,
            quantite,
            idBoutique,
            category, loading0, loadingData,
            loadingcategory, newProduit, listImages    /*  changerEtatDemande, supprimertitre */
            // onSubmit,

        };
    },
}
</script>
