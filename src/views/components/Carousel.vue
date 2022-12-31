<template>
  <div class="card card-carousel overflow-hidden h-100 p-0">

    <div class="  d-flex justify-content-center mt-8 " v-if="loading">

      <i class="fa fa-spinner fa-spin" style="  font-size:70px; "></i>

    </div>


    <div id="carouselExampleCaptions" class="carousel cont slide " data-bs-ride="carousel" v-else>

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="p-2">

          <div class="carousel-inner" data-interval="10000">
            <div class="carousel-item " :class="index == 0 ? 'active' : ''" v-for="(pub, index) in listPub"
              :key="pub.id">


              <img :src="imgVerif(pub.images)" style="width: 100vw;height: 40vh;" class="img-fluid"
                alt="Responsive image">

              <h5 class="card-title">{{ pub.title }}</h5>
              <p class="card-text mt-2" style="  height: 3em;">{{ pub.description }}</p>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev  w-5 danger me-3" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden shadow ">Previous</span>
        </button>
        <button class="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden shadow ">Next</span>
        </button>

      </div>
    </div>

    <!-- <div class="carousel-inner border-radius-lg h-100" id="carrou">
        <div class="carousel-item h-100   active" v-for='pub in listPub' :key="pub.id"
          :style="{ backgroundImage: 'url(' + pub.images + ')', backgroundSize: 'cover' }">
          <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">

            <p class='shadow-2 w-25'>{{ pub.title }}</p>
          </div>
        </div>


      </div>
      <button class="carousel-control-prev  w-5 danger me-3" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden shadow ">Previous</span>
      </button>
      <button class="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden shadow ">Next</span>
      </button>
    </div> -->
  </div>
</template>

<style>
.cont {
  height: 40%;
  margin-bottom: 15px;
}
</style>
<script>
import { onMounted, ref } from 'vue';
import { RequestApi } from '../../boot/RequestApi';
import { FormatData } from '../../boot/FormatData';
import { ApiManage } from '../../boot/ApiManage.js'
import VueCookies from 'vue-cookies'
import router from '../../router';

export default {
  name: "carousel",
  setup() {
    // let baseUrl = new ApiManage().baseUrl
    let listPub = ref([])
    let loading = ref(true);
    let baseUrl = new ApiManage().baseUrl + '/images/publications/62c2a031a9d17_s.jpg'

    onMounted(async () => {

      await getListPub();

      // makeCaroussel();
    });

    async function getListPub() {
      // console.log('sadrfgfg');

      const response = await new RequestApi().getListPubNew();
      // console.log(response.data);
      if (response.status) {

        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index];


          let pub = {
            title: element.title,
            id: element.id,
            description: element.description,
            images: element.path,

          }
          // makeCaroussel(index, pub.title, pub.description, pub.images, pub.id, element.id)
          // console.log(pub);
          loading.value = false;

          listPub.value.push(pub)
        }
      } else {
        loading.value = false;
      }
    }

    function imgVerif(src) {

      return new FormatData().verifImgExist(src);

    } function setCaroussel(idCategory, idPublicite) {
      // console.log('voici idP', idPublicite)
      // console.log('voici idCategory', idCategory)
      VueCookies.set('idPublicite', idPublicite);
      VueCookies.set('idCategory', idCategory);
      router.push({ name: 'list-pub' });

    }

    function makeCaroussel(index, title, description, images, idPub, idCategory) {
      const carrou = document.getElementById('carrou');
      let p = document.createElement('p');
      p.textContent = title;

      let h5 = document.createElement('h5');
      h5.classList = "text-white mb-1";
      h5.textContent = description;

      let icon = document.createElement('i');
      // icon.classList = "ni ni-camera-compact text-dark opacity-10";

      let divIcon = document.createElement('div');
      divIcon.classList = "icon icon-shape icon-sm bg-white text-center border-radius-md mb-3";
      divIcon.appendChild(icon)
      let carouselCaption = document.createElement('div');
      carouselCaption.classList = "carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5";
      carouselCaption.appendChild(divIcon)
      carouselCaption.appendChild(h5)
      carouselCaption.appendChild(p)

      let carouselItem = document.createElement('div');
      carouselItem.classList = index == 0 ? "carousel-item   w-100  h-100 img-fluid active " : "carousel-item   w-100  h-100 img-fluid  ";
      console.log(index, carouselItem.classList)
      carouselItem.style.backgroundImage = 'url(' + images + ')';
      // carouselItem.style.backgroundRepeat = ' no-repeat';
      carouselItem.style.backgroundSize = 'cover';

      carouselItem.style.cursor = 'pointer';
      carouselItem.appendChild(carouselCaption)
      console.log(carrou, carouselItem)
      carouselItem.addEventListener('click', (() => {
        return setCaroussel(idCategory, idPub)
      }))
      carrou.appendChild(carouselItem)

    }
    return {
      listPub, baseUrl, makeCaroussel, loading, imgVerif

    };
  },
};
</script>
