<template>
  <div class="card bg-transparent shadow-xl">
  
  
  <div class="overflow-hidden position-relative border-radius-xl"
      :style="{backgroundImage: 'url(' + require('../../assets/img/card-visa.jpg') + ')'}">
      <div class="chart">
        <canvas id="chart-line" class="chart-canvas" height="210"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../../assets/img/card-visa.jpg";
import img1 from "../../assets/img/logos/mastercard.png";
import Chart from "chart.js/auto";

import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from "../../boot/RequestApi";
import { convertDateToString } from "../../boot/formatDate";
export default {
  name: "DashWallet-card",
  components: {

  },
  props: {
    cardHolderText: {
      type: String,
      default: "Card Holder",
    },
    name: {
      type: String,
      default: "Jack Peterson",
    },
    cardExpirationText: {
      type: String,
      default: "Expires",
    },
  },
  data() {
    return {
      img,
      img1,
    };
  },

  setup() {
    onMounted(async () => {
      await getConso();

      var ctx1 = document.getElementById("chart-line").getContext("2d");

      var gradientStroke1 = ctx1.createLinearGradient(0, 230, 0, 50);

      gradientStroke1.addColorStop(1, "rgba(94, 114, 228, 0.2)");
      gradientStroke1.addColorStop(0.2, "rgba(94, 114, 228, 0.0)");
      gradientStroke1.addColorStop(0, "rgba(94, 114, 228, 0)");
      new Chart(ctx1,
        {
          type: "line",
          data: {
            labels: label.value,
            datasets: [
              {
                label: "Bulk",
                tension: 0.4,
                borderWidth: 0,
                pointRadius: 0,
                borderColor: "#4384B5 ",
                backgroundColor: gradientStroke1,
                // eslint-disable-next-line no-dupe-keys
                borderWidth: 3,
                fill: true,
                data: nbreTrans.value,
                maxBarThickness: 6,
              },
            ],
          },



          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            interaction: {
              intersect: false,
              mode: "index",
            },
            scales: {
              y: {
                grid: {
                  drawBorder: false,
                  display: true,
                  drawOnChartArea: true,
                  drawTicks: false,
                  borderDash: [5, 5],
                },
                ticks: {
                  display: true,
                  padding: 10,
                  color: "#fbfbfb",
                  font: {
                    size: 11,
                    family: "Open Sans",
                    style: "normal",
                    lineHeight: 2,
                  },
                },
              },
              x: {
                grid: {
                  drawBorder: false,
                  display: false,
                  drawOnChartArea: false,
                  drawTicks: false,
                  borderDash: [5, 5],
                },
                ticks: {
                  display: true,
                  color: "#ccc",
                  padding: 20,
                  font: {
                    size: 11,
                    family: "Open Sans",
                    style: "normal",
                    lineHeight: 2,
                  },
                },
              },
            },
          },
        });
    })

    let label = ref([]);
    let nbreTrans = ref([]);

    // let conso = ref([]);
    const getConso = async () => {
      const response = await new RequestApi().getTransactionParMoisChartAction();



      if (response.status) {
        for (let index = 0; index < response.data.length; index++) {
          const element = convertDateToString( response.data[index].dateEnvoi);
          label.value.push(element)
          const element0 = response.data[index].nbreTrans;
          nbreTrans.value.push(element0)
        }

      }


      console.log(label.value)
      console.log('=**********************************', response.data)
      console.log(nbreTrans.value)

    }



    return {

    }
  },
};
</script>
