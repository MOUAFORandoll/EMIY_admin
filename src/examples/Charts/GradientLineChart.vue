<template>
  <div class="card">
    <div class="pb-0 card-header mb-0 font-weight-bolder">
      <h4 class="  font-weight-bolder">{{ title }}</h4>
      <p class="text-sm">

        <span class="font-weight-bold">{{ detail1 }}</span>

      </p>
    </div>
    <div class="  d-flex justify-content-center pt-5 pb-5" v-if="loading">

      <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

    </div>
    <!-- <img type="image/svg+xml" class='' src="../assets/img/loader/devoo-animate.svg" alt="My Happy SVG"
            v-if="loading" /> -->



    <div class="p-3 card-body" v-else>
      <div class="chart">
        <canvas id="chart-line" class="chart-canvas" height="300"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from "../../boot/RequestApi";
export default {
  name: "gradient-line-chart",

  props: {
    title: {
      type: String,
      default: "Consommation de sms",
    },
    detail1: {
      type: String,
      default: "Visualisez votre consommation de notre service de sms",
    },

  },
  setup() {
    var chart = null;
    onMounted(async () => {
      await getConso();

      getChart();



    })

    const getChart = () => {
       chart = document.getElementById("chart-line");
      if (chart) {
        var ctx1 = chart.getContext("2d");

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
                  data: nmbreContact.value,
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
      } else { getChart() }
    }
    let label = ref([]);
    let nmbreContact = ref([]);
    let loading = ref(true);
    // let conso = ref([]);
    const getConso = async () => {
      const response = await new RequestApi().getConsommationSmsParMoisAction();



      if (response.status) {

        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index].dateEnvoi;
          label.value.push(element)
          const element0 = response.data[index].nbreContact;
          nmbreContact.value.push(element0)
        }
        loading.value = false;
      }
      else {
        loading.value = false;
      }

      // console.log(label.value)
      // console.log(nmbreContact.value)

    }



    return {
      loading
    }
  },
  mounted() {

  },
};
</script>
