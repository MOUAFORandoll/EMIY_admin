<template>
    <div class="py-4 container-fluid">
        <div class=" row">
            <div class="col-12">
                <div class="card w-100 mb-4">
                    <div class="card-body">
                        <div class="part1">
                            <h4 class="card-title font-weight-bolder text-mobile dark">NOUVEAU CONTACT</h4>
                            <p class="card-text border-bottom text-mobile2  text-mobile">Remplissez le formulaire
                                ci-dessus pour créer un nouveau
                                contact.</p>

                            <div class="row">
                                <div class="col-lg-4   col-sm-12 form-group  ">
                                    <label for="nomP">Nom du contact</label>

                                    <input type="text" v-model="nom" class="form-control" placeholder="Entrer un nom"
                                        id="nomP">

                                </div>



                                <div class="col-lg-4 col-sm-12  form-group  ">
                                    <label for="nomP">Prenom</label>

                                    <input type="text" v-model="prenom" class="form-control"
                                        placeholder="Entrer un prenom" id="nomP">
                                </div>

                                <div class=" col-lg-4 col-sm-12 form-group ">
                                    <label for="nomP">Telephone</label>

                                    <MazPhoneNumberInput size="sm" :translations="{
                                        countrySelector: {
                                            placeholder: 'code',
                                            error: 'Veuillez renseigner le code du pays',
                                        },
                                        phoneInput: {
                                            placeholder: 'Phone number',
                                            example: 'Ex:',
                                        },
                                    }" v-model="numero" show-code-on-list
                                        :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
                                        :ignored-countries="['AC']" @update="results = $event"
                                        :success="results?.isValid" />
                                </div>



                                <div class="col-lg-4 col-sm-12 form-group ">
                                    <label for="licence">Date de naissance</label>

                                    <input type="date" v-model='dateChoisit' class="form-control" id="inputCity" />

                                </div>
                                <div class="col-lg-4 col-sm-12 form-group">

                                    <label for="licence">Groupe</label>
                                    <!-- <select id=" " v-model="groupe" class="form-control form-select">
                                         
<option disabled selected default>
    Selectionner le contact
</option>
                                        <option v-for="option in optionsGroupes" :value="option" :key="option.id">
                                            {{ option.label }}
                                        </option>
                                    </select> -->
                                    <SelectComp v-model="groupe" :data="optionsGroupes"
                                        placeholder=' Selectionner le groupe' />

                                </div>



                            </div>



                            <div class="row ms-1  me-1">

                                <div class="col-lg-6 col-sm-12 form-group  ">
                                    <div class="row d-flex justify-content-between">

                                        <CustomButton :title='"Enregistre contact"' :loading='loadingSave'
                                            @update:loading="loadingSave = $event" @click='newContact'
                                            :classe="'btn btn-primary    col-lg-5 col-sm-12 '" />


                                    </div>
                                </div>


                                <!-- <div class="col-lg-6 col-sm-12 form-group">

                                    <label for="licence">Licence a Utiliser</label>
                                    <select id="licence" v-model="selectLicence" class="form-control form-select">
                                        <option selected>Choose...</option>

                                        <option v-for="option in optionsLicence" :value="option" :key="option.id">
                                            {{ option.label }}
                                        </option>
                                    </select>

                                </div> -->





                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    </div>
</template>

<style scoped>
.maze {
    color: red
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
// import VueCountryCode from "vue-country-code";
// import Datepicker from 'vuejs3-datepicker';
import { createToaster } from "@meforma/vue-toaster";
// import ArgonInput from "../../components/ArgonInput.vue";
import VueCookies from 'vue-cookies';
import CustomButton from '../../components/CustomButton.vue';
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
// import VuePhoneNumberInput from "vue-phone-number-input";
import "maz-ui/css/main.css";
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import SelectComp from '../../components/SelectComp.vue';

// import { BIcon } from 'bootstrap-vue' 
export default {
    name: "NouveauContact",
    components: {
        SelectComp,
        MazPhoneNumberInput,
        // ArgonInput,
        CustomButton,/*  VuePhoneNumberInput */
    },
    setup() {
        onMounted(async () => {
            console.log('voici parun', /^\d+$/.test('690*-'));
            await getGroupe();
        });

        const nom = ref('');
        const toast = createToaster();
        const prenom = ref('');

        const mail = ref('');
        const dateChoisit = ref(new Date());

        const numero = ref('');

        const groupe = ref({ id: 0, label: 'Aucun' });
        const search = ref('');
        const optionsGroupes = ref([{ id: 0, label: 'Aucun' }]);

        const loadingGroupes = ref(false);
        const loadingSave = ref(false);
        // let codeNumber = ref();
        let telnumber = ref(null);
        let codePhone = ref();
        const newContact = async () => {
            // numero.value = telnumber.value.number;
            // codeNumber.value = telnumber.value.valid;
            console.log(results.value)
            if (
                nom.value.length != 0 &&
                prenom.value.length != 0 &&
                numero.value.length != 0 /*  &&mail.value.length != 0 */
            ) {


                if (results.value.isValid) {
                    const contact = groupe.value.id === 0 ? {
                        nom: nom.value,
                        prenom: prenom.value,
                        phone: results.value.nationalNumber,
                        // email:mail.value,
                        phoneCode: '+' + results.value.countryCallingCode,
                        attribute: 'string',
                        keySecret: VueCookies.get('keySecret'),
                        birdDay: dateChoisit.value
                    } : {
                        nom: nom.value,
                        prenom: prenom.value,
                        phone: results.value.nationalNumber,
                        // email:mail.value,
                        phoneCode: '+' + results.value.countryCallingCode,
                        attribute: 'string',
                        keySecret: VueCookies.get('keySecret'),
                        birdDay: dateChoisit.value,
                        idGroupe: groupe.value.id
                    };
                    loadingSave.value = !loadingSave.value;
                    const response = await new RequestApi().newContactUser(contact);
                    if (response.status) {
                        loadingSave.value = !loadingSave.value;

                        toast.success(`contact enregistre avec success.`, {
                            // override the global option
                            position: "bottom"
                        });
                    } else {
                        loadingSave.value = !loadingSave.value;

                        toast.error(`Erreur enregistrement contact.`, {
                            // override the global option
                            position: "bottom"
                        });

                    }
                    loadingSave.value = false;

                    nom.value = '';

                    prenom.value = '';

                    mail.value = '';

                    numero.value = '';

                    search.value = '';
                    dateChoisit.value = null

                } else {
                    toast.error(`Veuillez entrer un numero correct`, {
                        // override the global option
                        position: "bottom"
                    });
                }
            } else {
                toast.error(`Veuillez entrer des informations correctes`, {
                    // override the global option
                    position: "bottom"
                });
            }
        };

        const getGroupe = async () => {
            loadingGroupes.value = true;

            const response = await new RequestApi().getListGroupeUser();
            console.log(response.data);
            if (response.status) {
                optionsGroupes.value = response.data.map((x) => {
                    return {
                        id: x['id'],
                        label: x.nom,
                    };
                });
            } else {
                toast.error(`Erreur lors du chargement des groupes.`, {
                    // override the global option
                    position: "bottom"
                });
            }
            loadingGroupes.value = false;
        };

        let results = ref('')
        return {
            telnumber,
            search,
            optionsGroupes,
            loadingGroupes,
            getGroupe,
            groupe,
            nom,
            prenom,
            mail,
            numero, results,
            newContact,
            loadingSave,
            dateChoisit, codePhone,

            phoneNumber: null,
            defaultCountry: "FR",
            countriesList: ["FR", "BE", "DE"],
            countriesIgnored: ["AF", "AD", "AL"],
            dark: false,
            disabled: false,
            hasLoaderActive: false,
            hasErrorActive: false,
        };
    },
}
</script>
