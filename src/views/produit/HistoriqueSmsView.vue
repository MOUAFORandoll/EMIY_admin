<template>

    <div class="py-4 container-fluid">
        <div class=" row">
            <div class="col-12 ">
                <div class="card  w-100   mb-4 ">
                    <div class="card-body">
                        <div class="part1">
                            <div class=" row border-bottom">
                                <div class="col">
                                    <h4 class="card-title font-weight-bolder dark text-mobile">Historique de vos sms
                                    </h4>

                                </div>
                                <div class="col-3 pb-2">
                                    <input class="form-control" v-model='search' @input="searchFunction"
                                        placeholder="search" type="search" />
                                </div>
                            </div>

                            <div class="row">

                                <div class="  d-flex justify-content-center pt-2" v-if="loading">

                                    <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

                                </div>

                                <div class="table-responsive trx" v-else>
                                    <div v-if="message.length != 0" class="row border-bottom pb-1">
                                        <div class="col ms-1">

                                            <h3 class="mb-1  font-weight-bolder text-dark">{{ contactSelect }}
                                                <p class=" ">{{ message }} </p>
                                            </h3>
                                        </div>


                                    </div>
                                    <table class="table scroll ">
                                        <tbody>
                                            <tr v-for="(sms, index)  in listSms"
                                                v-show="start <= index && index < final" :key="sms.message"
                                                :class="this.$store.state.darkMode ? 'mouseA' : 'mouseB'"
                                                @click="message = sms.message; contactSelect = sms.contact ">
                                                <td class="mobile">


                                                    <div class="ml-2">
                                                        <p class="mb-0 ml-2 text-xs ">Expediteur:</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bold text-dark">{{
                                                                sms.proprietaire
                                                        }}</h6>
                                                    </div>

                                                </td>
                                                <td class="">


                                                    <div class="ml-2">
                                                        <p class="mb-0 ml-2 text-xs ">Sender:</p>
                                                        <h6 class="mb-0 ml-2 text-sm font-weight-bold text-dark">{{
                                                                sms.senderId
                                                        }}</h6>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div class="text-left">
                                                        <p class="mb-0 text-xs ">Destinataire:</p>
                                                        <h6 class="mb-0 text-sm font-weight-bold text-dark">{{
                                                                sms.contact
                                                        }}
                                                        </h6>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="text-left  col2 ">
                                                        <p class="mb-0 text-xs ">Messages:</p>
                                                        <h6 class="mb-0 text-sm message font-weight-bold text-dark">{{
                                                                sms.message
                                                        }}</h6>
                                                    </div>
                                                </td>

                                                <td class="col mobile">
                                                    <div class="text-left">
                                                        <p class="mb-0 text-xs ">date:</p>
                                                        <h6 class="mb-0 text-sm font-weight-bold text-dark">{{ sms.date
                                                        }} </h6>
                                                    </div>
                                                </td>
                                                <td class="col mobile">
                                                    <div class="text-left">
                                                        <p class="mb-0 text-xs ">Etat:</p>
                                                        <h6 class="mb-0 text-sm font-weight-bold text-dark">{{
                                                                sms.status
                                                        }}
                                                        </h6>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>



                                </div>
                                <div class='card-footer' v-if='(listSms.length > 10)' align='right'>
                                    <div class="row   col-lg-1 col-md-4 col-xl-5 col-sm-5"
                                        :class="this.$store.state.darkMode ? 'bg-default' : ''">
                                        <div class="  mouseY">
                                            <i @click="next" v-if='(final < listSms.length)'
                                                class="mouseY 	fa fa-angle-right"
                                                style="font-size:36px; float:right"></i>
                                            <select id="select_id" @change="changeVal($event)" style=' float:right'
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
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>
 
<style scoped>
.mouse:hover {
    cursor: pointer;
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

.message {
    /* display: inline-block;
    max-width: 30%;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis; */
    width: 220px;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;

    text-overflow: ellipsis;
}
</style>
<script>
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';

import { createToaster } from "@meforma/vue-toaster";
export default {
    name: "NouveauSms",
    components: {

    }, data() {
        return {
            start: 0, final: 10,
            moyenne: 10,
            // max: this.users.value.length
        }
    },
    methods: {
        next() {
            console.log(this.listSms.length)
            if (this.final + this.moyenne < this.listSms.length) {
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
                    this.moyenne = parseInt(this.listSms.length)
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
            getListSmsUser();

        });
        let expliqSender = ref(true)
        let listSms = ref([]);
        let loading = ref(true);
        let contactSelect = ref('');
        let message = ref('');
        let toast = createToaster();
        async function getListSmsUser() {


            const response = await new RequestApi().getSmsAction();


            if (response.status) {



                loading.value = false;
                if (search.value.length == 0) {
                    listSms.value = response.data
                    listSmsSave.value = response.data

                }
                getListSmsUser();
            }
            else {
                loading.value = false

                toast.error(`UNe erreur est survenue.`, {
                    // override the global option
                    position: "bottom"
                });
            }


        }

        let listSmsSave = ref([])
        const searchFunction = () => {
            listSms.value = listSmsSave.value
            let result = ref([])

            if (search.value.length != 0) {
                listSms.value.forEach((value) => {
                    console.log('a')
                    if (
                        (value.senderId ?? '').toLowerCase().includes(search.value.toLowerCase()) || (value.contact ?? '').toLowerCase().includes(search.value.toLowerCase()) || (value.message ?? '').includes(search.value)) {
                        // console.log(value.nom.toLowerCase().includes(search.value.toLowerCase()) || value.prenom.toLowerCase().includes(search.value.toLowerCase()) || value.phone.includes(search.value))
                        console.log('2')

                        result.value.push(value);
                    }
                });
                listSms.value = result.value
            }
            else {
                listSms.value = listSmsSave.value
            }
            console.log(result.value, search.value);


        };
        let search = ref('')

        return {
            searchFunction, search,

            listSms, loading, expliqSender, contactSelect, message
        };
    },
}
</script>
