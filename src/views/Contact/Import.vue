<template>
    <div class="py-4 container-fluid">
        <div class=" row">
            <div class="col-12">
                <div class="card w-100 mb-4">
                    <div class="card-body">
                        <div class="part1">
                            <h4 class="card-title font-weight-bolder dark text-mobile">NOUVEAU CONTACT</h4>
                            <p class="card-text border-bottom text-mobile2 ">Importez rapidement votre liste de
                                contact.</p>
                            <p class="card-text text-mobile2">Cette liste doit etre fourni au format CSV et doit contenir les
                                colonnes ci-apres: Nom,
                                Prenom, telephone, Code Pays, date d'anniversaire.</p>

                            <div class="row">
                                <div class="col-lg-4 col-sm-12  form-group  ">



                                    <label for="formFileLg" class="form-label">Csv File</label>
                                    <input class="form-control form-control " @change="onFileChange" id="formFileLg"
                                        type="file" accept=".csv">
                                </div>



                                <div class=" col-lg-4 col-sm-12 form-group">

                                    <label for="licence">Groupe</label>
                                    <!-- <select id=" " v-model="groupe" class="form-control form-select">
                                   
<option disabled selected default>
    Selectionner le groupe
</option>
                                        <option v-for="option in optionsGroupes" :value="option" :key="option.id">
                                            {{ option.label }}
                                        </option>
                                    </select> -->
                                    <SelectComp v-model="groupe" :data="optionsGroupes"
                                        placeholder='Selectionner un groupe' />

                                </div>
                                <div class="col-12 form-group">

                                    <p @click="explecsv" id="csv" rel="noopener noreferrer">Telecharger un exemple
                                    </p>
                                </div>
                            </div>




                            <div class="row ms-1  me-1">

                                <div class="col-lg-6 col-sm-12 form-group  ">
                                    <div class="row d-flex justify-content-between">

                                        <CustomButton :title='"Enregistre contact"' :loading='loadingSave'
                                            @update:loading="loadingSave = $event" @click='csvToContact'
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
#csv:hover {
    cursor: pointer;
}

#csv {
    color: rgb(44, 85, 208);
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
import { ApiManage } from '../../boot/ApiManage.js'

import VueCookies from 'vue-cookies';
import CustomButton from '../../components/CustomButton.vue';
import SelectComp from '../../components/SelectComp.vue';



// import VuePapaParse from 'vue-papa-parse'
// import { BIcon } from 'bootstrap-vue' 
export default {
    name: "NouveauSms",
    components: {
        // Datepicker 
        // ArgonInput,
        SelectComp,
        CustomButton,
    },
    methods: {
        onFileChange(e) {

            console.log('csv.value*****')

            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            console.log(files)
            this.cs = files[0]
        },
        async csvToContact() {
            let errorSave = 0;
            let correctSave = 0;
            // listCont.pop();
            console.log('csv.value*****')
            console.log(this.cs)
            this.$papa.parse(this.cs, {
                delimiter: ',',

                complete: async (result) => {
                    // loadingSave.value = true; 
                    for (var i = 1; i < result.data.length - 1; i++) {
                        console.log(i, result.data[i][0])
                        const [month, day, year] =
                            result.data[i][0].split(';')[4].split('/');


                        const date = new Date(+year, +month - 1, +day);
                        let data = (this.groupe.id == 0) ? {

                            nom: result.data[i][0].split(';')[0],
                            prenom: result.data[i][0].split(';')[1],

                            phone: result.data[i][0].split(';')[2],
                            phoneCode: "+".concat(result.data[i][0].split(';')[3]),
                            birdDay: date,
                            attribute: result.data[i][0].split(';')[5],
                            keySecret: VueCookies.get('keySecret'),

                        } : {

                            nom: result.data[i][0].split(';')[0],
                            prenom: result.data[i][0].split(';')[1],

                            phone: result.data[i][0].split(';')[2],
                            phoneCode: "+".concat(result.data[i][0].split(';')[3]),
                            birdDay: date,
                            attribute: /* result.data[i][0].split(';')[5] */ 'Aucun',
                            keySecret: VueCookies.get('keySecret'),
                            idGroupe: this.groupe.id
                        }
                        console.log(data)
                        if (result.data[i][0].split(';')[3] != null || result.data[i][0].split(';')[3].length != 0) {
                            const response = await new RequestApi().newContactUser(data);
                            if (response.status) {
                                correctSave++;
                            }
                            else {
                                errorSave++;
                            }
                        }

                    }
                    this.loadingSave = false;
                    if (errorSave == 0) {
                        this.$toast.success(correctSave.toString() + 'Contatcs enregistres avec success',
                            {
                                position: "bottom"
                            })
                        this.loadingSave = false;

                    } else {
                        this.$toast.error(
                            correctSave.toString() +
                            '  enregistre avec success et ' +
                            errorSave.toString() +
                            ' non enregistre.', {
                            position: "bottom"
                        }
                        );
                        this.$loadingSave = false;


                    }
                },
            });
            this.loadingSave = true;

        }
    },
    data() {
        return { cs: null, loadingSave: false, groupe: { id: 0, label: 'Aucun' } }
    },
    setup() {
        onMounted(async () => {
            console.log('voici parun', /^\d+$/.test('690*-'));
            await getGroupe();
        });
        const nom = ref('');
        const toast = createToaster();
        const prenom = ref('');
        const csv = ref();
        const mail = ref('');
        const dateChoisit = ref(new Date());

        const numero = ref('');

        // const groupe = ref({ id: 0, label: 'Aucun' });
        const search = ref('');
        const optionsGroupes = ref([{ id: 0, label: 'Aucun' }]);

        const loadingGroupes = ref(false);
        //    const onFileChange=(e)=> {

        //        console.log('csv.value*****')

        //         var files = e.target.files || e.dataTransfer.files;
        //         if (!files.length)
        //             return;
        //         console.log(files)
        //        csv.value =files
        //     }


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
        const explecsv = () => {
            console.log('exple*****', new ApiManage().baseUrl + '/others/CsvExemple.csv');

            document.location.assign(new ApiManage().baseUrl + '/others/CsvExemple.csv');
            console.log('exple***** fin+++++');

        }


        return {
            search, csv,
            optionsGroupes,
            loadingGroupes,
            getGroupe, explecsv,
            // groupe,
            nom,
            prenom,
            mail,
            numero,


            dateChoisit,
        };
    },
}

</script>
