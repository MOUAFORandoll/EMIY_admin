<template>
  <div class="card  bg-primary ">

    <div class="row ms-1 me-1" role="alert">

      <div class="col-xs-12 col-sm-12 col-sm-12 col-lg-3    ">
        <div class="text-white">Credit Restant : {{ restCredit }}</div>

      </div>
      <div class="col-xs-12 col-sm-12 col-sm-12 col-lg-3    ">
        <div class="text-white">Credit A utiliser : {{ ncreUser }}

        </div>
      </div>


      <div class="col-xs-12 col-sm-12 col-sm-12 col-lg-3 ">

        <div class="text-white">Nombre Destinataires : {{ nbreDest }}</div>


      </div>
      <div class="col-xs-12 col-sm-12 col-sm-12 col-lg-3    ">
        <div class="text-white"> Date : {{ dateCourante }}</div>

      </div>

    </div>




  </div>

</template>

<script>

// import { formatDate } from '../../boot/formatDate';

export default {
  name: "compteur-component",
  props: {
    restCredit: {
     
      default: 0,
    },
    ncreUser: {
     default: 0,
    },
    nbreDest: { 
      default: 0,
    },
  },
};
</script>
