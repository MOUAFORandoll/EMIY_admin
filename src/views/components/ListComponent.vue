<template>
  <div class="card w-100 mb-4">
    <div class="card-body">
      <div class="part1">
        <h4 class="card-title font-weight-bolder dark text-mobile">{{ title }} </h4>
        <p class="card-text border-bottom text-mobile2 ">{{ subTitle }}</p>
        <div class="row">
          <div class="  d-flex justify-content-center pb-3" v-if="loading0">

            <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

          </div>

          <div class="table-responsive mt-1" v-else>
            <table class="table  ">
              <tbody>
                <tr v-for="(lfa) in lFacture" :key="lfa.id" class="mouse"
                  @click="message = lfa.message; selectSenderId = lfa.senderId ">
                  <td class="w-30">
                    <div>

                      <div class="ml-2">
                        <p class="mb-0 ml-2 text-xs ">Motif :</p>
                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ lfa.motif }}</h6>
                      </div>
                    </div>
                  </td>
                  <td class="w-30">
                    <div>

                      <div class="ml-2">
                        <p class="mb-0 ml-2 text-xs ">Pays :</p>
                        <h6 class="mb-0 ml-2 text-sm font-weight-bolder text-dark">{{ lfa.pays }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="text-left">
                      <p class="mb-0 text-xs ">motant :</p>
                      <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ lfa.montant }} </h6>
                    </div>
                  </td>
                  <td>
                    <div class="text-left">
                      <p class="mb-0 text-xs ">date achat:</p>
                      <h6 class="mb-0 text-sm font-weight-bolder text-dark">{{ lfa.date }}</h6>
                    </div>
                  </td>


                </tr>
              </tbody>
            </table>
          </div>


        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "list-component",
  props: {
    title: {
      type: String,
      default: "Liste",
    },
    subTitle: {
      type: String,
      default: "",
    },
    header: {
      type: String,
      default: "$2400, Design changes",
    },
  },
};
</script>
