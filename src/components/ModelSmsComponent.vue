<template>

  <vue-final-modal v-model="showModal" style="" classes="modal-container " content-class="modal-content">
    <!-- <span class="modal__title text-warning">Alert
    </span> -->
    <span class="modal__title border-bottom mb-1 font-weight-normal"> Ajouter ce message a vos model sms
    </span><span class="modal__title ">Mot de passe
    </span>
    <div class="modal__content">

      <div class=" row d-flex justify-content-end">

        <!--   <div class="col-lg-4 col-sm-12" align="right">
                                    <CustomButton :title="'Retour'" @click="showConfig = !showConfig"
                                        :classe="'btn btn-primary    '" />
                                </div> -->
      </div>
      <div class="row">

        <div class="col-lg-6 col-sm-12  form-group  ">
          <label for="nomP">Titre</label>

          <argon-input :readonly='loading' type="text" v-model="titre" placeholder="titre" aria-label="titre" />
        </div>
        <div class="col-lg-6 col-sm-12  form-group  ">
          <label for="nomP">Mot clef(renseignez plusieurs mots clé en séparant par des virgules (,))</label>

          <argon-input :readonly='loading' type="text" v-model="motCle" placeholder="Mot clef" aria-label="Mot clef" />
        </div>
        <div class="col-lg-12 col-sm-12  form-group  ">
          <label for="nomP">Message</label>

          <argon-area length="4000" :see='false' :readonly='loading' type="text" v-model="message" placeholder="Message"
            aria-label="Message" />
        </div>




      </div>


      <CustomButton :title='" Ajouter"' :loading='loading' @update:loading="loading = $event" @click='newModelSms'
        :classe="'btn btn-primary  me-2 '" color="success" fullWidth size="lg" />
      <CustomButton :title='" Anuller"' @click='showModal =false' :classe="'btn btn-danger  '" fullWidth size="lg" />


    </div>
  </vue-final-modal>



</template>
<style scoped>
#menu {
  background-color: rgb(236, 243, 236);
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px
}

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

::v-deep .modal-container {
  display: flex;
  justify-content: center;

  overflow-y: hidden;
  /* Hide vertical scrollbar */
  overflow-x: hidden;
  /* Hide horizontal scrollbar */
  align-items: center;
  width: auto;
  /* padding-left:auto */
}

::v-deep .modal-content {
  width: auto;
  display: flex;
  justify-content: center;

  overflow-y: hidden;
  /* Hide vertical scrollbar */
  overflow-x: hidden;
  /* Hide horizontal scrollbar */

  align-items: center;
  flex-direction: column;
  max-height: 90%;
  margin: 0em 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

@media only screen and (max-width: 992px) {

  ::v-deep .modal-container {
    display: flex;
    justify-content: center;

    align-items: center;
    width: auto;
    padding-left: auto
  }

  ::v-deep .modal-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    max-height: 90%;
    margin: 0em 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
  }

}

.modal__title {
  /* margin: 0 2rem 0.5rem 0; */
  font-size: 0.8rem;
  font-weight: 0;
}

.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}

.modal__action {
  display: flex;
  flex-shrink: 0;
  padding: 1rem 0 0;
}

.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.dark-mode div .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
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
</style> 
<script>
import { VueFinalModal } from 'vue-final-modal'
import { createToaster } from "@meforma/vue-toaster";
import VueCookies from 'vue-cookies'
import { RequestApi } from '../boot/RequestApi';
import { ref } from "vue";

export default {
  name: "signin",
  components: {
    VueFinalModal
  },
  setup(props) {

    let toast = createToaster();
    const loading = ref(false);
    let lModelSms = ref([])
    let titre = ref(props.titre0)
    let motCle = ref(props.motCle0)
    let message = ref(props.message0)

    const newModelSms = async () => {

      let data =
      {
        keySecret: VueCookies.get('keySecret'),

        titre: titre.value,
        message: message.value,

        motCle: motCle.value,
      }
        ;
      loading.value = true;

      const response1 = await new RequestApi().newModelSmsAction(data);

      if (response1.status) {
        lModelSms.value = response1.data;

        toast.success(`Ajout effectuee`, {
          // override the global option
          position: "bottom"
        });
        loading.value = false;
        showModal.value = false;
        // getModel()showNew = !showNew
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
    let showModal = ref(true);
    return {
      newModelSms,
      loading, titre, motCle, message, showModal
    };
  }, props: {
    title: { type: String, default: '' },
    motCle0: { type: String, default: '' },
    message0: { type: String, default: '' },
    titre0: { type: String, default: '' },



  },
  methods: {

  },
};
</script> 