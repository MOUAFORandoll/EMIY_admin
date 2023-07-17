<script setup>
import {
  mdiMonitorCellphone,
  mdiTableBorder,
  mdiTableOff,
  mdiReload,
} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import CardBox from "@/components/CardBox.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";

import CardBoxComponentEmpty from "@/components/CardBoxComponentEmpty.vue";

import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import { mdiEye, mdiTrashCan } from "@mdi/js";
import CardBoxModal from "@/components/CardBoxModal.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
// import UserAvatar from "@/components/UserAvatar.vue";
import * as THREE from 'three';
import { useMainStore } from "@/stores/main";
import { onMounted, computed, ref } from 'vue';
import { RequestApi } from '@/boot/RequestApi';
let request = new RequestApi();

let r1 = ref("");
let syst = ref("");
let run = ref(true);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight, // Ratio d'aspect
  0.1, // Proche
  1000 // Loin
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// Créez un cube
const geometry = new THREE.BoxGeometry();



function rotation() {
  let a = Math.floor(Math.random() * 20);

  return a;
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generate() {
  let data = [1, 2, 3, 4, 5, 6];
  let a = Math.floor(Math.random() * 6) + 1;
  let b = Math.floor(Math.random() * 6) + 1;
  const shuffledNumbers = shuffleArray(data);

  console.log(shuffledNumbers);
  return shuffledNumbers;
}
let cube;
function play() {
  scene.remove(cube);
  let materials = [];
  run.value = true;

  let result =
    generate();
  for (let i = 0; i < 6; i++) {
    materials.push(new THREE.MeshBasicMaterial({ map: generateTexture(result[i]) }));
  }
  if (cube) {
    scene.remove(cube);
  }


  cube = new THREE.Mesh(geometry, materials);

  console.log(cube);
  animate();
  scene.add(cube);
  r1.value = result;
}
function animate() {
  let container = document.querySelector('#container');

  // setInterval(() => {
  //   time++;
  //   console.log('time----', time);
  // }, 10);


  container.appendChild(renderer.domElement);
  requestAnimationFrame(animate);
  if (run.value) {
    // Rotation sur l'axe X
    cube.rotation.x += rotation();

    // Rotation sur l'axe Y
    cube.rotation.y += rotation();

    // Rotation sur l'axe Z
    cube.rotation.z += rotation();

  }
  else {
    cube.rotation.x = 0;
    cube.rotation.y = 0;
    cube.rotation.z = 0;
  }
  renderer.render(scene, camera);
}

// Arrêter la rotation et afficher la première face supérieure
function stopOnFirstFace() {
  run.value = false
  // const faces = cube.geometry.faces;
  // const firstFace = faces[0];
  // firstFace.color.set(0xff0000); // Couleur rouge (vous pouvez ajuster la couleur selon vos besoins)
  // cube.geometry.colorsNeedUpdate = true;
}



function generateTexture(points) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const size = 128; // Taille de la texture
  canvas.width = size;
  canvas.height = size;
  context.fillStyle = 'white';
  context.fillRect(0, 0, size, size);
  context.font = 'bold 48px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = 'black';
  context.fillText(points.toString(), size / 2, size / 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}
onMounted(() => {

})
</script>
<style>
#container {
  width: 10px;
  height: 50%;
}
</style>
<template>
  <LayoutAuthenticated>

    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Game" main>
        <BaseButton @click="play()" target="_blank" :icon="mdiReload" label="Joueur 1" color="contrast" rounded-full
          small />
        <BaseButton @click="jouer(1)" target="_blank" :icon="mdiReload" label="Systeme" color="contrast" rounded-full
          small />
        <BaseButton @click="stopOnFirstFace()" target="_blank" :label="!run ? 'Run' : 'Stop'" color="contrast"
          rounded-full small />
      </SectionTitleLineWithButton>



      <CardBox class="mb-2" has-table>

        Resultat
        User 1 : {{ r1 }}

      </CardBox>

      <CardBox class="mb-2" has-table>

        Resultat
        Systeme : {{ syst }}

      </CardBox>


      <div id="container"></div>
    </SectionMain>
  </LayoutAuthenticated>
</template>
