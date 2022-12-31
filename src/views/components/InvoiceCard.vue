<template>
  <div class="card pb-4">
    <div class=" pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0 font-weight-bolder">FACTURE</h6>
        </div>
        <div class="col-6 text-end">
          <argon-button color="success" size="sm" @click="generateReport()" variant="outline"><!-- VOIR TOUS --><i
              class="fa fa-share"></i>
          </argon-button>
        </div>
      </div>
    </div>
    <div class="  d-flex justify-content-center pt-5" v-if="loading0">

      <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

    </div>
    <div class="card-body   " v-else>
      <ul class=" list-group">
        <li v-for="facture in lFacture" :key="facture.id"
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-1  border-radius-lg">
          <div class="d-flex flex-column">
            <h6 class="text-dark mb-1 font-weight-bolder text-sm ">{{ convertDateToString2(facture.date) }}</h6>

          </div>
          <div class="d-flex align-items-center text-sm">
            XAF {{ facture.montant }}


          </div>
          <div class="d-flex align-items-center text-sm mouse" @click="generateReport(facture)">
            <i class="fas fa-file-pdf   me-1" style="font-size: 0.8em" aria-hidden="true"></i>
            <span class="mouse" style="font-size: 0.8em"> PDF </span>


          </div>

        </li>

      </ul>
    </div>
    <!-- <div ref="content" v-show="false">
      <div class="container d-flex">
        <div class="d-flex justify-content-center">
          Facture
        </div>
        <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col">Motif</th>
              <th scope="col">Montant</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="factureS != null">
              <th scope="col" class="col">{{ factureS.motif }}</th>
              <th scope="col" class="col">{{ factureS.montant }}</th>
              <th scope="col" class="col">{{ factureS.date }}</th>
            </tr>
          </tbody>
        </table>
      </div>


    </div> -->
  </div>
  <vue-final-modal :click-to-close="false" v-model="loadingDownload" class=" " classes="modal-container"
    content-class="modal-content">


    <div class="border-bottom pb-2  center ">
      <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

    </div>

  </vue-final-modal>
</template>
<style>
.mouse :hover {
  cursor: pointer;
}

::v-deep .modal-container {
  display: flex;
  justify-content: center; /* overflow: scroll; */

  align-items: center;
  width: auto;
  padding-left: auto
}

::v-deep .modal-content {
  /* overflow: scroll; */
  width: auto;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0em 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
</style>
<script>
import ArgonButton from "@/components/ArgonButton.vue";
import { convertDateToString2 } from "../../boot/formatDate";
import { onMounted, ref } from '@vue/runtime-core';
import jsPDF from 'jspdf';

import { RequestApi } from '../../boot/RequestApi';
import { createToaster } from "@meforma/vue-toaster";
export default {
  name: "invoice-card",
  components: {
    ArgonButton
  }, data() {
    return {
      loadingDownload: false
    }
  }, methods: {


    generateReport(facture) {
      this.loadingDownload = true
      this.factureS = facture;
      // let id = facture.id;
      let date = facture.date;
      let montant = facture.montant;
      let nom = facture.nom;
      let phone = facture.phone;
      // let pays = facture.pays;
      let pu = facture.pu;
      let quantite = facture.quantite;
      let motif = facture.motif;
      let modepaiement = facture.modepaiement;
      let idTransaction = facture.idTransaction

      let content = document.createElement('html');
      content.innerHTML = `
        <div id="facture" class="container border bg-red h-100 w-100">
          <div class="row font-weight-bolder text-dark bg-info h-0 text-center justify-content-center py-3 ">

            <div class="col ">Recu</div>
          </div>
          <div class="row">

            <div class="col-6" align="left">
              <div class="col  font-weight-bolder text-dark mb-2">GESSIIA&ensp;SARL</div>
              <div class="col">https://dashboard.pubx.cm/</div>
              <div class="col">+237 679 170 000</div>
            </div>
            <div class="col-6" align="right">
              <div class="col font-weight-bolder text-dark mb-2">REÇU&ensp;DE&ensp;PAIEMENT</div>
              <div class="col me-1">N° : ${idTransaction}</div>
            </div>



          </div>
          <div class="row bg-info font-weight-bolder text-dark h-10 text-center justify-content-center my-3">
            Informations

          </div>
          <div class="row  pb-5">

            <div class="col-6" align="left">
              <div class="col font-weight-bolder text-dark">INFORMATIONS&ensp;FACTURE</div>
              <div class="col"> ${motif}</div>
              <div class="col">gessiia2014@gmail.com</div>
            </div>
            <div class="col-6" align="right">



              <div class="col font-weight-bolder text-dark">INFORMATIONS&ensp;CLIENT</div>
              <div class="col">Nom prenom: ${nom} </div>
              <div class="col">Numéro de téléphone: ${phone} </div>
            </div>



          </div>
          <div class="row font-weight-bolder text-dark bg-info h-10 text-center justify-content-center my-3 py-2">
            <div class="col-3">Description</div>
            <div class="col-3">Quantite</div>
            <div class="col-3">Prix unitaire</div>
            <div class="col-3">Montant Total</div>

          </div>
          <div class="row h-10 text-center justify-content-center my-1 p-3 bg-secondary">

            <div class="col-3">Description</div>
            <div class="col-3"> ${quantite}  </div>
            <div class="col-3"> ${pu}   XAF</div>
            <div class="col-3"> ${montant}   XAF</div>


          </div>
          <div class="row pb-5">

            <div class="col-12" align="left">
              <div class="col">INFORMATIONS&ensp;SUR&ensp;LA&ensp;TRANSACTION</div>
              <div class="col">Date de paiement : ${date}</div>
              <div class="col">ID Transaction : ${idTransaction} </div>
              <div class="col">Moyen de paiement : ${modepaiement}  </div>
            </div>

          </div>
        </div>

      `
      // console.log(facture)
      // console.log(this.factureS)
      // let content = document.createElement('div')
      // content.setAttribute('ref', 'content')
      // content.setAttribute('v-show', false)
      // let d1 = document.createElement('div')
      // d1.classList.add('container')
      // d1.classList.add('d-flex')

      // let d2 = document.createElement('div')
      // d2.classList.add('d-flex')
      // d2.classList.add('justify-content-center')
      // d2.textContent = 'Facture'
      // let table = document.createElement('table')
      // table.classList.add('table')
      // table.classList.add('mt-5')
      // let thead = document.createElement('thead')
      // let tr = document.createElement('tr')
      // let th0 = document.createElement('th')
      // let th1 = document.createElement('th')
      // let th2 = document.createElement('th')
      // th0.classList.add('col')
      // th1.classList.add('col')
      // th2.classList.add('col')
      // th0.textContent = 'Motif'
      // th1.textContent = 'Montant'
      // th2.textContent = 'Date'

      // let tbody = document.createElement('tbody')
      // let tr1 = document.createElement('tr')
      // let thb0 = document.createElement('th')
      // let thb1 = document.createElement('th')
      // let thb2 = document.createElement('th')
      // thb0.classList.add('col')
      // thb1.classList.add('col')
      // thb2.classList.add('col')
      // thb0.textContent = this.factureS.motif
      // thb1.textContent = this.factureS.montant + ' XAF'
      // thb2.textContent = convertDateToString2(this.factureS.date)
      // tr.appendChild(th0)
      // tr.appendChild(th1)
      // tr.appendChild(th2)
      // thead.appendChild(tr)




      // tr1.appendChild(thb0)
      // tr1.appendChild(thb1)
      // tr1.appendChild(thb2)
      // tbody.appendChild(tr1)
      // table.appendChild(thead)
      // table.appendChild(tbody)

      // d1.appendChild(d2)
      // d1.appendChild(table)
      // content.appendChild(d1)
      // console.log(content)
      var doc = new jsPDF('p', 'pt', 'A4');

      let data = content // this.$refs.content.innerHTML;

      doc.html(data, {
        margin: [10, 10, 10, 10],
        padding: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 575, //target width in the PDF document
        windowWidth: 675, //window width in CSS pixels
        callback: function (doc) {
          doc.save('Facture.pdf')
          this.loadingDownload = false

        }


      });
      this.loadingDownload = false

    }
  }, setup() {
    let loading0 = ref(true);
    let lFacture = ref([])
    let toast = createToaster();
    onMounted(async () => {

      await getFacture();


    })
    async function getFacture() {
      const response = await new RequestApi().getListFactureUser(2);
      if (response.status) {
        lFacture.value = response.data
        //   for (let i = 0; i < response.data.length; i++) {

        //     const Facture = response.data[i];
        //     lFacture.value.push({
        //       factureId: Facture['id'], 
        //       dateCreate: formatDate(Facture['date'], 1),
        //       montant: Facture['montant']

        //     })

        //   }
        loading0.value = !loading0.value;


      } else {
        loading0.value = !loading0.value;

        // eslint-disable-next-line require-atomic-updates
        // loading.value = !loading.value;
        toast.error(`Une erreur s'est produite`, {
          // override the global option
          position: "bottom"
        });
      }


    }
    let factureS = ref(null);

    return {
      lFacture, loading0, factureS, convertDateToString2

    };
  },
};
</script>
