<template>
    <div class="py-4 container-fluid ">
        <div class=" row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header pb-0">
                        <div>
                            <div class="border-bottom ">
                                <div class="text-h4  card-title font-weight-bolder dark text-mobile">Roles des
                                    utilisateurs</div>
                                <div class="text-caption pb-2 text-mobile2">
                                    Tout utilisateur qui exploite la plateforme peut avoir un role
                                    different en faonction de ce qu'il doit y faire.
                                    <a href="/">En savoir plus</a>
                                </div>
                            </div>

                            <div>

                                <!-- <form> -->
                                <div class="row col-gutter-md" style="margin-top: 25px">
                                    <div class="col-lg-12 col-md-12 col-xl-4 col-sm-12">
                                        Nom du role
                                        <argon-input :readonly='loading' type="text" v-model="nom" placeholder="Name"
                                            aria-label="Name" />
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-xl-4 col-sm-12">
                                        Description
                                        <argon-input :readonly='loading' type="text" v-model="description"
                                            placeholder="Description" aria-label="description" />
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-xl-4 col-sm-12">
                                        Avatar
                                        <argon-input :readonly='loading' icon="../assets/img/team-2.jpg" type="file"
                                            accept=".png, .jpeg,.jpg" placeholder="Description" aria-label="Name" />

                                        <!-- <div class="avatar form-group">
                                                  
                                                    <img class="avatar__image" src="../assets/img/team-2.jpg" /> Choise
                                                    avatar
                                                </div> -->
                                    </div>

                                </div>
                                <CustomButton :title='"Enreg ist    rer"' :loading='loading'
                                    @update:loading="loading = $event" @click='newProfile'
                                    :classe="'btn btn-primary float-right'" />


                                <!-- </form> -->
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";
import { ref } from '@vue/reactivity';
import { RequestApi } from "../../boot/RequestApi";
import VueCookies from 'vue-cookies'
import CustomButton from '../../components/CustomButton.vue';
import { createToaster } from "@meforma/vue-toaster";

export default {
    name: "ProfileUsers", components: { ArgonInput, CustomButton },
    data() {

        return {
            showMenu: false
        };
    },

    beforeRouteEnter(to, from, next) {
        if (
            VueCookies.get('token') != undefined &&
            VueCookies.get('token') != 'undefined' &&
            VueCookies.get('token') != null
        ) {
            console.log(
                VueCookies.get('token') != undefined &&
                VueCookies.get('token') != 'undefined' &&
                VueCookies.get('token') != null
            );
            // console.log('iiiiixzzxioooiioi', VueCookies.get('token'));
            // await refreshAuthenticated();
            next();
        } else {
            //  console.log('llllllllll');
            next({ name: 'Signin' });

        }
    },
    setup: () => {
        let toast = createToaster();

        const nom = ref('');
        const description = ref('');
        let loading = ref(false);

        async function newProfile() {
            if (nom.value.length != 0 || description.value.length != 0) {
                loading.value = true;
                let data = {
                    nom: nom.value,
                    description: description.value,
                    keySecret: VueCookies.get('keySecret')

                }
                let newP = await new RequestApi().newProfile(data)
                console.log(newP)
                if (newP.status) {
                    loading.value = false;

                    toast.success(`Success`, {
                        // override the global option
                        position: "bottom"
                    });
                }
                else {
                    loading.value = false;

                    toast.error(`Error`, {
                        // override the global option
                        position: "bottom"
                    });
                }
            } else {


                toast.error(`Veuillez remplir tout les champs`, {
                    // override the global option
                    position: "bottom"
                });
            }

        }

        return {
            nom, description, loading,
            newProfile
        }
    }
}
</script>
<style scoped>
.avatar__image {
    /* Rounded border */
    border-radius: 20%;

    /* Take full size */
    height: 60%;
    width: 60%;
}
</style>