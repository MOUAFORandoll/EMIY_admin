import { createApp  } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/styleModal.css";
import "./assets/css/styleModal.css";
import "./assets/css/nucleo-icons.css";
import "./assets/css/mystyle.css";
import ArgonDashboard from "./argon-dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/src/jquery.js'
import Popper from "vue3-popper"; 
import 'vue3-popper/dist/popper.min.js'
import 'vue3-popper/dist/popper.esm'
import 'vue3-popper/dist/popper.ssr'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "bootstrap" 
import Toaster from "@meforma/vue-toaster";
import VueCookies from 'vue-cookies'
import VuePapaParse from 'vue-papa-parse'; 
import { createI18n } from 'vue-i18n'
import { createToaster } from "@meforma/vue-toaster";
import SelectCompModel from './components/SelectCompModel.vue';
import SelectComp from './components/SelectComp.vue';
import SelectComp2 from './components/SelectComp2.vue';
import SelectCompN from './components/SelectCompN.vue';  
import { VueFinalModal } from 'vue-final-modal'
const i18n = createI18n({ locale: 'en',
  messages: {
     en: {
       as : "ddsdd",
      message: {
        hello: 'hello world',
        greeting: 'good morning, world!'
      }
    },
     fr: {
       as : "0000",
       
      message: {
        hello: 'こんにちは、世界',
        greeting: 'おはよう、世界！'
      }
    }
  }
})
import TableComponentVue from './views/components/TableComponent.vue';
import CustomButton from './components/CustomButton.vue';
import argonInput from './components/ArgonInput.vue';
import argonArea from './components/ArgonArea.vue';
import ModelSmsComponent from './components/ModelSmsComponent.vue';
import formNumber from './views/components/formNumber.vue';
import formPassword from './views/components/formText.vue';
 
import MarqueeText from 'vue-marquee-text-component'
import Editor from '@tinymce/tinymce-vue';
 
const appInstance = createApp(App).use(router).use(store).use(VuePapaParse).use(Popper).use(i18n) .use(createToaster);
import 'vue-phone-number-input/dist/vue-phone-number-input.css'; 
 
appInstance.use(Popper); 
appInstance.use(require('vue-cookies'))
 appInstance.use(VueCookies, { expire: '7d'})
appInstance.use(store);   
appInstance.component('tinymce', Editor)
appInstance.component('VueFinalModal', VueFinalModal)
appInstance.component('marquee-text', MarqueeText)
appInstance.component('form-number', formNumber)
appInstance.component('form-password', formPassword)
appInstance.component('SelectComp', SelectComp)
appInstance.component('SelectComp2', SelectComp2)
appInstance.component('SelectCompN', SelectCompN)
appInstance.component('SelectCompModel', SelectCompModel)
appInstance.component('TableComponentVue', TableComponentVue)
appInstance.component('CustomButton', CustomButton)
appInstance.component('argon-input', argonInput)
appInstance.component('argon-area', argonArea)
appInstance.component('ModelSmsComponent', ModelSmsComponent)
// appInstance.component('tinymce', Editor)
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.use(VuePapaParse)
appInstance.use(Toaster)

appInstance.mount("#app");
