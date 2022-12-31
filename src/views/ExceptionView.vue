<template>

  <main>


    <div class="container mt-6">
      <div class="row d-flex justify-content-center  mt-2">
        <div class="  col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
          <div class="  card card-plain">
            <div class="pb-0 card-header text-start">
              <h4 class="font-weight-bolder">Vous desirez ne plus recevoir les message de :</h4>
              <p class="mb-0">Entrez le SenderId a bloquer, le codePhone du pays et votre numero</p>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label>Code Phone</label>
                    <argon-input  :readonly='loading' type="text" placeholder="Code Phone" v-model='codePhone' name="codePhone" size="lg" />
              </div>
              <div class="mb-3">
                <label>Sender id</label>
                    <argon-input  :readonly='loading' type="text" placeholder="senderId" v-model='senderId' name="senderId" size="lg" />
              </div>
              <div class="mb-3">
                <label>Votre numero</label>

                    <argon-input  :readonly='loading' type="phone" v-model='number' placeholder="phone" name="phone" size="lg" />

              </div>

              <div class="text-center">


                <CustomButton :title='" Bloquer"' :loading='loading' @update:loading="loading = $event"
                  @click='onSubmit' :classe="'btn btn-primary w-100 pt-2 mt-3 pb-2 ps-5 pe-5'" color="success" fullWidth
                  size="lg" />

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </main>
</template>
 
 
<script>
import { createToaster } from "@meforma/vue-toaster";

import ArgonInput from "@/components/ArgonInput.vue";
import { api } from '../boot/axios';
import { ref } from '@vue/reactivity';
import CustomButton from '../components/CustomButton.vue';

const body = document.getElementsByTagName("body")[0];
export default {
  name: "ExceptionView",
  components: {

    ArgonInput,
    // ArgonSwitch,
    CustomButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://oss.maxcdn.com/respond/1.4.2/respond.min.js')
    document.head.appendChild(externalScript)

    let externalScript1 = document.createElement('script')
    externalScript1.setAttribute('src', 'https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js')
    document.head.appendChild(externalScript1)

    let externalScript2 = document.createElement('script')
    externalScript2.setAttribute('src', 'js/jquery-2.1.1.js')
    document.head.appendChild(externalScript2)

    let externalScript3 = document.createElement('script')
    externalScript3.setAttribute('src', 'js/swiper.jquery.min.js')
    document.head.appendChild(externalScript3)

    let externalScript4 = document.createElement('script')
    externalScript4.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js')
    document.head.appendChild(externalScript4)

    let externalScript5 = document.createElement('script')
    externalScript5.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js')
    document.head.appendChild(externalScript5)

    let externalScript6 = document.createElement('script')
    externalScript6.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js')
    document.head.appendChild(externalScript6)

  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");


  },

  setup() {

    let number = ref('')
    let senderId = ref('')
    let codePhone = ref('');
    let loading = ref(false);
    let toast = createToaster();

    const onSubmit = async () => {

      loading.value = !loading.value;

      await api
        .post('/exception/senderIdContact/create', {

          contact: number.value,
          codePhone: codePhone.value,
          senderId: senderId.value
        })
        .then((response) => {
          console.log(response.data)
          number.value = ''
          codePhone.value = ''
          senderId.value = ''
          toast.success(`Success`, {
            // override the global option
            position: "bottom"
          });
          loading.value = !loading.value;

        })
        .catch(() => {
          toast.error(` Erreur  `, {
            // override the global option
            position: "bottom"
          });
          loading.value = !loading.value;
          console.log('ewwewe')
        });
    }

    return {
      onSubmit, number, senderId, loading, codePhone

    };
  }, data() {

    return {


    };
  },
  methods: {

  },
};
</script>
