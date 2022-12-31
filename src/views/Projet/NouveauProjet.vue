<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <div class="card w-100 mb-4">
          <div class="card-body">
            <div class="part1">
              <h4 class="card-title font-weight-bolder dark text-mobile">Projet</h4>
              <p class="card-text border-bottom text-mobile2 ">Creer un nouveau projet.</p>
              <div class="row">
                <div class="col-lg-6 col-sm-12 form-group  ">
                  <label for="nomP">Nom du projet</label>

                  <input type="text" :readonly="laodingCreateP" v-model="projetName" class="form-control"
                    placeholder="nom du projet" id="nomP">
                </div>

                <form-number :readonly="laodingCreateP" class="col-lg-6 col-sm-12 form-group" label="Quantite de sms"
                  v-model='projetQSms'>
                </form-number>
                <form-number :readonly="laodingCreateP" class="col-lg-6 col-sm-12 form-group" label="Stock Alerte"
                  v-model='stockAlerte'>
                </form-number>


                <div class="col-lg-6 col-sm-12 form-group">

                  <label for="licence">Licence a Utiliser</label>
                  <!-- <select id="licence" v-model="selectLicence" class="form-control form-select">
                   
<option disabled selected default>
  Selectionner la licence
</option>
                    <option v-for="option in optionsLicence" :value="option" :key="option.id">
                      {{ option.label }}
                    </option>
                  </select> -->

                  <SelectComp v-model="selectLicence" :readonly="laodingCreateP" type="1" :data="optionsLicence"
                    placeholder="  Selectionner la licence" />

                </div>


                <div class="col-lg-4 col-sm-12 form-group">
                  <CustomButton :title='"Creer"' :loading='laodingCreateP' @update:loading="laodingCreateP = $event"
                    @click='newProjet' :classe="'btn btn-primary  '" />


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
<script  >
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from '../../boot/RequestApi';

// import Datepicker from 'vuejs3-datepicker';
import { createToaster } from "@meforma/vue-toaster";
// import ArgonInput from "../../components/ArgonInput.vue";
import formNumber from '../components/formNumber.vue';

import VueCookies from 'vue-cookies';
import CustomButton from '../../components/CustomButton.vue';

import SelectComp from '../../components/SelectComp.vue';


// import { BIcon } from 'bootstrap-vue' 
export default {
  name: "NouveauProjet",
  components: {
    // Datepicker 
    SelectComp,
    formNumber,
    CustomButton,
  },


  setup() {
    let optionsLicence = ref([{ id: 0, label: 'Aucun' }]);
    let selectLicence = ref({ id: 0, label: 'Aucun' });
    let loadingLicence = ref(false);

    let projetName = ref('');
    let projetQSms = ref('');
    let toast = createToaster();
    let laodingCreateP = ref(false);

    onMounted(async () => {
      await getLSA();
    });

    const getLSA = async () => {


      const response = await new RequestApi().getListSmsAcheteIliForUserAction();
      console.log(response.status, response.data);

      if (response.status) {

        optionsLicence.value = response.data

      } else {


        toast.error(`Erreur lors du chargement des vos licences`, {
          // override the global option
          position: "bottom"
        });
      }
      // loadingGroupes.value = false;
    };
    let stockAlerte = ref(0);
    const newProjet = async () => {
      console.log('ffdf**********d', selectLicence.value.id);
      // if (stockAlerte.value > projetQSms.value / 2) {
      //   toast.error(`Le stock d'alerte ne peut pas depasser la moitie de la quantite d'sms `, {
      //     // override the global option
      //     position: "bottom"
      //   });

      //   return false;

      //  }
      if (selectLicence.value.id == 0) {
        toast.error(`Selectionner une licence `, {
          // override the global option
          position: "bottom"
        });

        return false;

      }
      if (parseInt(projetQSms.value) >= 20) {
        const data = {
          clientId: VueCookies.get('id'),
          quantiteSms: projetQSms.value,
          idListSmsAchette: selectLicence.value.id,
          nomProjet: projetName.value, stockAlerte: stockAlerte.value,
        };
        console.log(data);
        laodingCreateP.value = true;

        const response = await new RequestApi().newProjetAction(data);

        if (response.status) {
          // selectLicence.value = { id: 0, label: 'Aucun' };

          projetName.value = '';
          projetQSms.value = '';
          laodingCreateP.value = false;
          // confirmPassword.value = '';
          toast.success(`Creation de projet effectuee avec succes`, {
            // override the global option
            position: "bottom"
          });


        } else {
          laodingCreateP.value = false;
          if (response.aff) {
            toast.error(`Erreur lors de la creation du nouveau projet`, {
              // override the global option
              position: "bottom"
            });
          }

        }
      } else {
        toast.error(`minimum 20 sms pour la creation du nouveau projet`, {
          // override the global option
          position: "bottom"
        });

      }
    };


    return {

      newProjet,
      laodingCreateP, projetName,
      projetQSms, loadingLicence,
      selectLicence, stockAlerte,
      optionsLicence,
    };
  },
};
</script>
