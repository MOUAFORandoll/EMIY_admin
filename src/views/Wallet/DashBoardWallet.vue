<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8">
        <div class="row mt-4">
          <div class="col-xl-6 mb-xl-0 mb-4">
            <DashWallet-card />

          </div>
          <div class="col-xl-6">
            <div class="row">
              <div class="col-md-6">

                <wallet-info-card :classIcon="salary.classIcon" :title="salary.title" :desc="salary.desc"
                  :price="salary.price" />
              </div>
              <div class="col-md-6 topx">
                <wallet-info-card :classIcon="paypal.classIcon" :title="paypal.title" :desc="paypal.desc"
                  :price="paypal.price" />
              </div>
            </div>
          </div>
          <div class="col-md-12 mb-4">
            <payment-card />
            <billing-card class="mt-4" />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <invoice-card class="mt-4" />
        <transaction-card class="mt-4" />
      </div>
    </div>
    <div class="row">



    </div>

  </div>
</template>

<script>

import DashWalletCard from "@/examples/Cards/DashWalletCard.vue";
import WalletInfoCard from "@/examples/Cards/WalletInfoCard.vue";
import PaymentCard from "../components/PaymentCard.vue";
import InvoiceCard from "../components/InvoiceCard.vue";
import BillingCard from "../components/BillingCard.vue";
import TransactionCard from "../components/TransactionCard.vue";
import { onMounted, ref } from '@vue/runtime-core';
import { RequestApi } from "../../boot/RequestApi";
import store from "../../store";
import VueCookies from 'vue-cookies'

export default {
  name: "Billing",

  components: {
    DashWalletCard,
    WalletInfoCard,
    PaymentCard,
    InvoiceCard,
    BillingCard,
    TransactionCard,
  },

  beforeRouteEnter(to, from, next) {
    if (
      VueCookies.get('token') != undefined &&
      VueCookies.get('token') != 'undefined' &&
      VueCookies.get('token') != null
    ) {
      console.log(
        VueCookies.get('token') != undefined &&
        VueCookies.get('token') != 'undefined' &&
        VueCookies.get('token') != null
      );
      // console.log('iiiiixzzxioooiioi', VueCookies.get('token'));
      // await refreshAuthenticated();
      next();
    } else {
      console.log('llllllllll');
      next({ name: 'Signin' });

    }
  },
  setup() {
    onMounted(async () => {

      await new RequestApi().getModePaiementAction();
      await new RequestApi().getSoldeAccountAction(2);
      await new RequestApi().getSoldeAccountAction(3);
      console.log(store.state.soldeLocal)
      salary.value = {
        classIcon: "text-white fas fa-landmark",
        title: "SOLDE LOCAL",
        desc: "Local Wallet",
        price: "XAF ".concat((store.state.soldeLocal != null) ? store.state.soldeLocal : '0'),
      }
      paypal.value = {
        classIcon: "text-white fab fa-paypal",
        title: "PORTE FEUILLE",
        desc: "Wallet",
        price: "XAF ".concat((store.state.soldePorteFeuille != null) ? store.state.soldePorteFeuille : '0'),

      }
    })
    let salary = ref({
      classIcon: "text-white fas fa-landmark",
      title: "SOLDE LOCAL",
      desc: "Local Wallet",
      price: "XAF ".concat((store.state.soldeLocal != null) ? store.state.soldeLocal : '0'),
    })

    let paypal = ref({
      classIcon: "text-white fab fa-paypal",
      title: "PORTE FEUILLE",
      desc: "Wallet",
      price: "XAF ".concat((store.state.soldePorteFeuille != null) ? store.state.soldePorteFeuille : '0'),

    })




    return {
      salary,
      paypal,
    };
  },
};
</script>
