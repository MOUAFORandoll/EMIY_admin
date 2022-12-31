<template>
    <div class="py-4 container-fluid">
        <div class=" row">
            <div class="col-12" v-if="!next">
                <div class="card w-100 mb-4">
                    <div class="card-body">
                        <div class="part1">
                            <h4 class="card-title font-weight-bolder dark text-mobile">Creation d'un site web</h4>
                            <p class="card-text pb-2 border-bottom">Commencez par creer votre nom de domaine.</p>

                            <div class="row pt-2 d-flex justify-content-center">
                                <div class="col-lg-7 h-100     d-flex col-sm-12   ">

                                    <div class="col-lg-10">
                                        <input type="text" v-model="nom" @input="verifSpace" :readonly="loadingVerif"
                                            class="formNew form-control border ms-0 text-center" id="ass"
                                            placeholder="monsite.pubx.cm">
                                    </div>
                                    <div id="my-suffix" class="form-control text-center text-white"> <span> {{
                                            typeVitrine.id == 1
                                                ? ".pubx.cm" : "sms.pubx.cm"
                                    }}</span></div>

                                </div>
                                <div class="col-lg-3 col-sm-12  form-group">

                                    <!-- <select id="mySelect" @change="as('mySelect')" class="form-control form-select">


                                        <option disabled default value=0 selected>
                                            Selectionner type vitrine
                                        </option>
                                        <option v-for="type in optionstypeVitrines" :value="type.id"  :key="type.id">
                                            {{ type.label }}
                                        </option>
                                    </select> -->
                                    <SelectComp v-model="typeVitrine" :readonly="loadingVerif"
                                        :data="optionstypeVitrines" placeholder='Selectionner type vitrine' />

                                </div>




                            </div>

                            <div class="
                             d-flex justify-content-center col-lg-12 col-sm-12  ">

                                <CustomButton :title='"Verifier et Creer "' :loading='loadingVerif'
                                    @update:loading="loadingVerif = $event" @click='verifExist'
                                    :classe="nom.length != 0 && typeVitrine.id != 0 ? 'btn-primary ' + 'btn  pt-2 pb-2 ' : 'btn-secondary ' + 'btn  pt-2 pb-2 '" />

                            </div>
                        </div>
                    </div>


                </div>

                <div class="card w-100 mb-4">
                    <div class="card-body">
                        <div class="part1">

                            <div class="row ps-2 pb-8 pt-4 w-75">
                                Recommendations:
                                <ul>
                                    <li class=" ">Seul les noms de domaines gratuits sont disponibles pour le moment.
                                        Ils sont sous ce
                                        forma: exemple.pubx.cm
                                    </li>
                                    <li class=" ">
                                        Ecrivez nous ou appelez nous si vous désirez achetter un nom de domaine
                                        professionnel
                                        pour votre site web.
                                    </li>
                                    <li class=" ">
                                        N'utilisez pas de ..
                                    </li>
                                </ul>


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
                                    <h4 class="card-title font-weight-bolder dark text-mobile">Creation d'un site web
                                    </h4>
                                    <p class="card-text ">Commencez par creer votre nom de domaine.</p>
                                </div>
                                <div class='col text-primary' align='right'>
                                    <p highlight @click="next = !next; " class="align-baseline mouse">
                                        Retour
                                    </p>
                                </div>


                            </div>
                            <div class="row pt-2">
                                <div class="col-lg-4 col-sm-12 form-group">

                                    <label for="inputCity">Beneficiere</label>
                                    <!-- <select id="inputState" v-model='userSelect' class="form-control form-select">

                                        <option disabled selected default value=0>
                                            Selectionner le proprietaire
                                        </option>
                                        <option @change="userSelect = user" v-for="user in optionsUser" :value="user" :key="user.id">
                                            {{ user.nom }}
                                        </option>
                                    </select> -->
                                    <SelectComp v-model="userSelect" type="1" :data="optionsUser" placeholder="  Selectionner le proprietaire
" />
                                </div>
                                <div class="col-lg-4 col-sm-12 form-group">

                                    <label for="licence"> Titre de votre Vitrine</label>
                                    <input type="text" :readonly="loadingSave" v-model="titre"
                                        class="form-control text-center" placeholder="monsite.pubx.cm" id="nomP">
                                </div>


                                <div class="col-lg-4 col-sm-12  form-group  ">

                                    <label for="licence">Url</label>
                                    <input type="text" readonly v-model="url" @input="verifSpace"
                                        class="form-control text-center" placeholder="exemple.pubx.cm" id="nomP">

                                </div>

                                <!-- <div class="col-lg-12 col-sm-12  form-group  ">
                                    <label for="nomP">Description de la vitrine</label>

                                    <textarea type="text" v-model="description" class="form-control"
                                        placeholder="Entrer une description a votre vitrine" id="nomP"></textarea>
                                </div> -->



                            </div>
                            <div class="row">
                                <div class="col-lg-3 col-sm-12 form-group">
                                    <label for="nomP">Numero de téléphone</label>
                                    <MazPhoneNumberInput :readonly="loadingSave" Auto-detect size="sm" :translations="{
                                        countrySelector: {
                                            placeholder: 'code',
                                            error: 'Veuillez renseigner le code du pays',
                                        },
                                        phoneInput: {
                                            placeholder: 'Phone number',
                                            example: 'Ex:',
                                        },
                                    }" show-code-on-list :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
                                        :ignored-countries="['AC']" @update="results = $event"
                                        :success="results?.isValid" />

                                </div>
                                <div class="col-lg-3 col-sm-12 form-group">
                                    <label for="nomP">Numero de téléphone 2</label>
                                    <MazPhoneNumberInput :readonly="loadingSave" Auto-detect size="sm" :translations="{
                                        countrySelector: {
                                            placeholder: 'code',
                                            error: 'Veuillez renseigner le code du pays',
                                        },
                                        phoneInput: {
                                            placeholder: 'Phone number',
                                            example: 'Ex:',
                                        },
                                    }" show-code-on-list :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
                                        :ignored-countries="['AC']" @update="results1 = $event"
                                        :success="results1?.isValid" />

                                </div>
                                <div class="col-lg-3 col-sm-12 form-group">

                                    <label for="licence">Email</label>
                                    <input type="mail" :readonly="loadingSave"
                                        pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                                        v-model="email" @input="verifSpace" class="form-control text-center"
                                        placeholder="BOTOECH@gmail.com" id="nomP">

                                </div>


                                <div class="col-lg-3 col-sm-12  form-group  ">

                                    <label for="licence">Adresse</label>
                                    <input type="text " :readonly="loadingSave" v-model="adresse"
                                        class="form-control text-center"
                                        placeholder="Douala-Cameroun derriere le bananier" id="nomP">

                                </div>

                                <!-- <div class="col-lg-12 col-sm-12  form-group  " v-if="">
                                    <label for="nomP">Lien social</label>

                                    <textarea type="text" v-model="description" class="form-control"
                                        placeholder="Entrer une description a votre vitrine" id="nomP"></textarea>
                                </div> 
 -->


                            </div>


                            <CustomButton :title='"Sauvegarder et Creer "' :loading='loadingSave'
                                @update:loading="loadingSave = $event" @click='newVitrine'
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
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';
import { FormatData } from '../../boot/FormatData';
import SelectComp from '../../components/SelectComp.vue';

// import Datepicker from 'vuejs3-datepicker';
import { createToaster } from "@meforma/vue-toaster";
// import ArgonInput from "../../components/ArgonInput.vue";

// import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'; 

import VueCookies from 'vue-cookies';
import CustomButton from '../../components/CustomButton.vue';

import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
// import VuePhoneNumberInput from "vue-phone-number-input";
import "maz-ui/css/main.css";
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

// import { BIcon } from 'bootstrap-vue' 
export default {
    name: "NouvelleVitrine",
    components: {
        // Datepicker
        SelectComp,
        CustomButton, MazPhoneNumberInput
    },


    setup() {
        onMounted(async () => {
            await getChildren();

            await gettypeVitrine();
        });
        const userSelect = ref({ id: 0, nom: 'Aucun' });

        const optionsUser = ref([
            { id: VueCookies.get('id'), nom: 'Moi' }

        ]);
        async function getChildren() {
            const response = await new RequestApi().getParrainUserAction();
            if (response.status) {

                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index];
                    console.log(element);
                    optionsUser.value.push({

                        id: element['id'],


                        nom: element['name'],
                    })

                } console.log(optionsUser.value)
            }
            else {
                //
            }
        }

        const nom = ref('');
        const email = ref('');
        const titre = ref('');
        const adresse = ref('');
        const toast = createToaster();
        const description = ref('');

        const typeVitrine = ref({ id: 0, label: 'Aucun' });

        const optionstypeVitrines = ref([]);

        const loadingtypeVitrines = ref(false);
        const loadingSave = ref(false);
        const next = ref(false);

        const newVitrine = async () => {
            if (!(nom.value.indexOf(' ') >= 0)) {
                let verMail = new FormatData().verifCorrectMail(email.value);
                if (userSelect.value.id == 0) {
                    toast.error(`Veuillez selectionner un utilisateur`, {
                        // override the global option
                        position: "bottom"
                    });
                    return false;
                } if (!verMail) {
                    toast.error(`Veuillez entrer une addresse mail correct`, {
                        // override the global option
                        position: "bottom"
                    });
                    return false;

                } if (adresse.value.length == 0) {
                    toast.error(`Veuillez entrer une addresse de localisation`, {
                        // override the global option
                        position: "bottom"
                    });
                    return false;

                }
                if (
                    nom.value.length != 0 &&
                    // description.value.length != 0 &&
                    typeVitrine.value.id != 0 /*  &&mail.value.length != 0 */
                ) {
                    if (typeVitrine.value.id == 1 ? (results.value.isValid || results1.value.isValid) : true) {
                        loadingSave.value = true;
                        const vitrine = {
                            nom: nom.value,
                            description: description.value,
                            proprietaire: userSelect.value.id,
                            keySecret: VueCookies.get('keySecret'),
                            email: email.value,
                            numero1: results.value.isValid ? '+' + results.value.countryCallingCode + results.value.nationalNumber : "",
                            numero2: results1.value.isValid ? '+' + results1.value.countryCallingCode + results1.value.nationalNumber : '',
                            adresse: adresse.value,
                            titre: titre.value,
                            typeVitrine: typeVitrine.value.id
                        };
                        const response = await new RequestApi().newVitrineUser(vitrine);
                        if (response.status) {
                            loadingSave.value = false;
                            next.value = false;
                            toast.success(`Vitrine cree avec success.`, {
                                // override the global option
                                position: "bottom"
                            }); toast.success(`Votre Vitrine sera accessible dans 1h.`, {
                                // override the global option
                                position: "bottom"
                            });
                            nom.value = '';
                            email.value = '';
                            results.value = '';
                            results1.value = '';
                            adresse.value = '';

                            description.value = '';

                            typeVitrine.value.value = null;

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
                        toast.error(`Veuillez entrer des numeros corrects`, {
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
            } else {
                toast.error(`Veuillez entrer un nom de vitrine correct`, {
                    // override the global option
                    position: "bottom"
                });
            }

        };

        const gettypeVitrine = async () => {
            loadingtypeVitrines.value = true;

            const response = await new RequestApi().getListtypeVitrine();
            console.log(response.data);
            if (response.status) {
                optionstypeVitrines.value = response.data.map((x) => {
                    return {
                        id: x['id'],
                        label: x.libelle,
                    };
                });
            } else {
                toast.error(`Erreur lors du chargement des typeVitrines.`, {
                    // override the global option
                    position: "bottom"
                });
            }
            loadingtypeVitrines.value = false;
        };

        let comment = ref("Pas d'espace");
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


                if (typeVitrine.value.id != 0) {
                    const data = {
                        vitrine: nom.value,

                    };
                    loadingVerif.value = true;

                    const response = await new RequestApi().verifyVitrine(data);



                    if (response.statusR) {
                        if (response.status) {

                            loadingVerif.value = false;
                            next.value = true
                            setUrl()
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
                    toast.error(`Veuillez choisir un type de vitrine correct`, {
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


        }; let results = ref('')
        let url = ref('')

        const setUrl = () => {
            url.value = nom.value + (typeVitrine.value.id == 1
                ? ".pubx.cm" : "sms.pubx.cm");

        }
        let results1 = ref('')
        // const as = (as) => {
        //     let idt = document.getElementById(as).value
        //     typeVitrine.value = { id: idt, label: 'Aucun' };
        //     console.log(typeVitrine.value)
        // }
        return {
            // as,
            comment, loadingVerif, verifExist, results, results1, url, setUrl,
            verifSpace, email, adresse,
            userSelect,
            optionsUser,
            optionstypeVitrines,
            loadingtypeVitrines,
            gettypeVitrine,
            typeVitrine,
            nom,
            description,

            newVitrine,
            loadingSave,
            type: [{ label: 'free' },], next, titre

        };
    },
}
</script>
