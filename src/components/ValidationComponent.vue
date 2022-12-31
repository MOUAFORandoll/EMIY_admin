<template>

  <vue-final-modal :click-to-close="false" v-model="showModal" style="" classes="modal-container "
    content-class="modal-content">
    <span class="modal__title text-warning">Alert
    </span>
    <span class="modal__title border-bottom mb-1 font-weight-normal"> Veuillez metttre a jour votre mot de passe
      pour continuer
    </span><span class="modal__title ">Mot de passe
    </span>
    <div class="modal__content">



      <input type="password" @keyup='verifPassword()' :readonly="loading" v-model="newMdp" class="form-control  " />

    </div>

    <div class="col-12  my-2 ">
      <div :class='v1 && v5 ? "bg-info form-control " : " bg-light form-control "'>
        <i class="far fa-check-circle centered"></i> 8 characteres et 1 special
      </div>
    </div>
    <div class="col-12  my-2">
      <div :class='v2 ? "bg-info form-control " : " bg-light form-control "'>
        <i class="far fa-check-circle centered"></i> Capital letter (A-Z)
      </div>
    </div>
    <div class="col-12   my-2">
      <div :class='v3 ? "bg-info form-control " : " bg-light form-control "'>
        <i class="far fa-check-circle centered"></i> Lowercase letter (a-z)
      </div>
    </div>
    <div class="col-12   my-2">
      <div :class='v4 ? "bg-info form-control " : " bg-light form-control "'>
        <i class="far fa-check-circle centered"></i> Number (0-9)
      </div>
    </div>



    <div class="modal__action">
      <CustomButton :title='"Valider"' :loading='loadingPatchPassword' @update:loading="loadingPatchPassword = $event"
        @click='patchPassword' :classe="'btn btn-primary '" />

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

  align-items: center;
  width: auto;
  padding-left: auto
}

::v-deep .modal-content {
  width: 20%;
  display: flex;
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
import jwt_decode from 'jwt-decode';
import { api } from '../boot/axios';
import { ref } from "vue";
import { onMounted } from '@vue/runtime-core';

export default {
  name: "signin",
  components: {
    VueFinalModal
  },
  setup() {
    // console.log(VueCookies.get('firstConnexion'))
    // console.log('props.showModal', props.showModal)
    function isUpper(str) {
      return /[A-Z]/.test(str);
    };
    function isLawer(str) {
      return /[a-z]/.test(str);
    };
    function containsNumbers(str) {
      return /\d/.test(str);
    }
    ;
    let newMdp = ref('');
    let v1 = ref(false);
    let v2 = ref(false);
    let v3 = ref(false);
    let v4 = ref(false);

    let v5 = ref(false);
    let loadingPatchPassword = ref(false);
    function verifPassword() {
      v1.value = (newMdp.value.length >= 8);

      v2.value = isUpper(newMdp.value)
      v3.value = isLawer(newMdp.value)
      v4.value = containsNumbers(newMdp.value)

      v5.value = newMdp.value.includes('@');
      console.log(v1.value,
        v2.value,
        v3.value,
        v4.value,
        v5.value)
    };

    const patchPassword = async () => {

      verifPassword();
      console.log(v1.value, v5.value, v2.value, v3.value, v4.value)
      let toast = createToaster();
      if (!v1.value || !v2.value || !v3.value || !v4.value) {
        toast.error(`Veuillez respecter les criteres du mot de passe`, {
          // override the global option
          position: "bottom"
        });
        return false;
      }



      const data = {
        clientId: VueCookies.get('id'),
        password: newMdp.value,
      };
      if (loadingPatchPassword.value == false) {
        // if (newMdp.value == rnewMdp.value) {
        loadingPatchPassword.value = true;


        const response =
          await new RequestApi().pathPasswordActionX(data);
        //  console.log('get qte statu', response.data);
        if (response.status) {
          let decode = ref([])
          console.log(String(response.data))
          api.defaults.headers.common['Authorization'] =
            'Bearer ' + String(response.data.token);

          VueCookies.set('token', String(response.data.token));
          VueCookies.set('refreshToken', String(response.data.refreshToken));

          decode.value = jwt_decode(String(response.data.token));

          VueCookies.set('nom', String(decode.value.nom));
          VueCookies.set('prenom', String(decode.value.prenom));
          VueCookies.set('phone', String(decode.value.phone));
          VueCookies.set('id', parseInt(String(decode.value.id)));
          VueCookies.set('firstConnexion', String(decode.value.firstConnexion));
          // VueCookies.set('idRole', parseInt(String(decode.value.idRole)));
          VueCookies.set('keySecret', String(decode.value.keySecret));
          VueCookies.set('fonctions', (decode.value.fonctions));


          if (parseInt(String(decode.value.idRole)) == '1') {
            VueCookies.set('admin', '1');
          } else {
            VueCookies.set('admin', '0');
          }
          let aujourdhui = new Date();


          VueCookies.set('date', aujourdhui.toLocaleString().split(',')[0].split('/')[0]);



          // VueCookies.set('decode', this.decode);
          console.log(VueCookies.get('nom'))
          console.log('id*********************', VueCookies.get('id'));
          loadingPatchPassword.value = false;
          newMdp.value = '';

          toast.success(`Mise a jour de vos informations effectuee avec succes`, {
            // override the global option
            position: "bottom"
          });
          document.location.reload()
        } else {
          loadingPatchPassword.value = false; toast.error(`Erreur lors de la Mise a jour de vos information`, {
            // override the global option
            position: "bottom"
          });

        }
      } else {
        loadingPatchPassword.value = false; toast.error(`Operation en cours`, {
          // override the global option
          position: "bottom"
        });

      }

    };

    let showModal = ref(false);
    onMounted(async () => {
      showModal.value = (VueCookies.get('token') != undefined &&
        VueCookies.get('token') != 'undefined' &&
        VueCookies.get('token') != null) ? VueCookies.get('firstConnexion') == 'true' : false;

      console.log('showModal.value', showModal.value)

    })
    return {
      showModal,
      v1,
      v2,
      v3,
      v4, v5, verifPassword, newMdp, patchPassword, loadingPatchPassword
    }
  }, props: {
    title: { type: String, },



  },
  methods: {

  },
};
</script> 