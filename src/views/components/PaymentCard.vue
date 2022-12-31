<template>

  <div class="card mt-5">
    <div class="card-body">
      <div class="part1">
        <h4 class="card-title font-weight-bolder dark text-mobile">Ajoutez des fonds</h4>
        <p class="card-text border-bottom text-mobile2 "> Augmentez la valeur de votre solde local.</p>
        <div class="row">
          <div class="col-lg-4 col-sm-12 form-group  ">
            <label for="inputState">Montant (Minimum 500 FCFA)</label>

            <argon-input :readonly='loading' type="phone" v-model="montant" placeholder="montant" aria-label="Name" />

          </div>
          <div class="col-lg-4 col-sm-12 form-group">

            <label for="inputCity">Moyen de recharge</label>
            <!-- <select id="inputState" v-model="paiementSelect" class="form-control form-select">
<option disabled selected default>
  Selectionner le moyen de paiement
</option>
              <option v-for="paiement in  optionsPaiement" :value="paiement" :key="paiement.id">
                {{ paiement.label }}
              </option>
            </select> -->

            <SelectComp v-model="paiementSelect" :data="optionsPaiement"
              placeholder='Selectionner le moyen de paiement' />

          </div>

        </div>

        <CustomButton :title='"Rechargez"' :loading='loading' @update:loading='"loading = $event"'
          v-show="(paiementSelect.id != 0 && montant >= 500 && montant.toString().split('')[0] != 0) ? true : false"
          @click='RechargerCompte' :classe="'btn btn-primary'" />

      </div>
      <vue-final-modal v-model="achat" style="" classes="modal-container-paiement    "
        content-class="modal-content-paiement">

        <iframe :src="srcValidPaiement" height="600" width="500">
          <p>Votre navigateur ne supporte aucune iframe !</p>
        </iframe>

      </vue-final-modal>
    </div>
  </div>

</template>


<style scoped>
::v-deep .modal-container-paiement {
  display: flex;
  justify-content: center;


  align-items: center;
  width: auto;
  margin: auto
}

::v-deep .modal-content-paiement {
  width: auto;
  display: flex;
  flex-direction: column;
  max-height: 95%;
  margin: 0em 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;

}
</style>

<script>import {
  VueFinalModal
}

  from 'vue-final-modal'
import CustomButton from '../../components/CustomButton.vue';

import img1 from "@/assets/img/logos/mastercard.png";
import img2 from "@/assets/img/logos/visa.png";
import ArgonInput from "@/components/ArgonInput.vue";
import SelectComp from '../../components/SelectComp.vue';

import {
  createToaster
}

  from "@meforma/vue-toaster";
import VueCookies from 'vue-cookies'

import {
  onMounted,
  ref
}

  from '@vue/runtime-core';

import {
  RequestApi
}

  from "../../boot/RequestApi";
// import store from "../../store";

export default {

  name: "payment-card",
  components: {
    VueFinalModal, SelectComp,
    ArgonInput, CustomButton
  }

  ,
  setup() {
    let toast = createToaster();
    let loading = ref(false);
    var continues = ref(true);

    let achat = ref(false);
    let montant = ref()

    let srcValidPaiement = ref('');

    const paiementSelect = ref({ id: '', label: 'Aucun' });
    const optionsPaiement = ref([

    ]);
    onMounted(async () => {

      await getModePaiement();



    });

    const getModePaiement = async () => {

      const response = await new RequestApi().getModePaiementAction();

      for (var i = 0; i < response.data.length; i++) {
        let x = response.data[i];



        if (x['id'] != 1) {
          optionsPaiement.value.push({

            id: x['@id'],


            label: x.libelle,
          })
        }
      }

      // optionsPaiement.value = response.data.map((x) => {
      //     return {

      //       id: x['@id'],


      //       label: x.libelle,
      //     };
      //   });

    };


    async function RechargerCompte() {
      console.log(loading.value);
      if (parseInt(montant.value) >= 500) {

        if (paiementSelect.value.id.split('/')[3] != 3) {
          loading.value = !loading.value

          let data = {
            montant: montant.value,
            type: 'MOBILE_MONEY',
            typeTransaction: '/api/type_transactions/1',
            modePaiement: paiementSelect.value.id.split('/')[3],
            clientId: VueCookies.get('id')
          }
          console.log(data);
          const response = await new RequestApi().rechargerSolde(data);
          if (response.status) {



            achat.value = response.status
            srcValidPaiement.value = response.paymentUrl

            let dataVerfitrans = {

              token: response.paymentToken,


              modePaiement: paiementSelect.value.id.toString().split('/')[3],


            };
            let i = ref(0);


            while (continues.value == true && i.value < 20) {

              const response0 = await new RequestApi().waitStaterechargerSolde(dataVerfitrans, 0);

              if (response0.data['code'] == '00') {
                // eslint-disable-next-line require-atomic-updates
                continues.value = false;

                // eslint-disable-next-line require-atomic-updates
                loading.value = !loading.value
                toast.success(`Recharge Effectue avec success`, {
                  // override the global option
                  position: "bottom"
                });
              }

              if (i.value == 19) {
                // eslint-disable-next-line require-atomic-updates
                continues.value = false;
                achat.value = false;
                // eslint-disable-next-line require-atomic-updates
                loading.value = !loading.value

                toast.error(`Vous n'avez pas valide la transaction a tant`, {
                  // override the global option
                  position: "bottom"
                }); break;
              }

              else {
                i.value++;
              }
            }
          } else {
            // eslint-disable-next-line require-atomic-updates
            loading.value = !loading.value
            if (response.aff) {
              toast.error(`Une erreur s'est produite`, {
                // override the global option
                position: "bottom"
              });
            }

          }
        } else {
          loading.value = !loading.value

          let data = {
            montant: montant.value,

            clientId: VueCookies.get('id')
          }
          console.log(data);
          const response = await new RequestApi().transfertCompteAction(data);
          if (response.status) {



            // eslint-disable-next-line require-atomic-updates
            loading.value = !loading.value
            toast.success(`Recharge locale Effectue avec success`, {
              // override the global option
              position: "bottom"
            });


          } else {
            // eslint-disable-next-line require-atomic-updates
            loading.value = !loading.value
            if (response.aff) {
              toast.error(`Une erreur s'est produite, verifier votre solde avant d'effectuer la recharge`, {
                // override the global option
                position: "bottom"
              });
            }
          }
        }

      }
      else {

        toast.error(`Veuillez entrer un montant correct,minimum 100 FCFA `, {
          // override the global option
          position: "bottom"
        });

      }
    }


    return {
      paiementSelect, optionsPaiement, montant, achat, RechargerCompte, srcValidPaiement, loading

    };
  },
  data() {
    return {
      img1,
      img2,
    };
  },
};
</script>
