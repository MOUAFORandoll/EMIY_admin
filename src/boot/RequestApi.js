/* eslint-disable prettier/prettier */
import { api } from "./axios";
import { ApiEndPoint } from "./ApiEndPoint";
// import VueCookies from 'vue-cookies'
import jwt_decode from "jwt-decode";
import { useMainStore } from "@/stores/main";

// import { ref } from '@vue/runtime-core';
export class RequestApi {
  constructor() {
    this.clientId = 0; // VueCookies.get('id');
    this.number = 0; //VueCookies.get('phone');
    this.ApiEndPoint = new ApiEndPoint();
  }

  /**
   *
   * @param {*} data   les donnees de l'utilisateur pour se connecter
   * @returns
   */
  logIn = async (data) => {
    // //console.log('sdddsd');
    let dataRes = { status: true };

    const mainStore = useMainStore();
    api.defaults.headers.common["Authorization"] = null;
    await api
      .post(this.ApiEndPoint.login, data)
      .then(async (response) => {
        let id = jwt_decode(String(response.data.token)).id;
        // let keySecret = jwt_decode(String(response.data.token)).keySecret;
        console.log(response.data);
        mainStore.setUser(response.data);

        dataRes = {
          status: true,
          id: id,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };

  /**
   *
   * @param {*} livraisons
   * @returns retourne les  livraisons en attente
   */
  getLivraisonsAwaiting = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get(this.ApiEndPoint.livraisons + "/awaiting")
      .then(async (response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });

    return dataRes;
  };
  /**
   *
   * @param {*} livraisons
   * @returns retourne les  livraisons en cours
   */
  getLivraisonsInProcess = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get(this.ApiEndPoint.livraisons + "/inprocess")
      .then(async (response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });

    return dataRes;
  };
  /**
   *
   * @param {*} livraisons
   * @returns retourne les  livraisons terminee
   */
  getLivraisonsFinish = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get(this.ApiEndPoint.livraisons + "/finish")
      .then(async (response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });

    return dataRes;
  };
  /**
   *
   * @param {*} livraisons
   * @returns retourne les  livraisons terminee
   */
  getBabanaList = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get(this.ApiEndPoint.babana + "/read")
      .then(async (response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });

    return dataRes;
  };
  /**
   *
   * @param {*}  data les informations du affectLivreur
   * @returns  les informations actualisees
   */
  affectLivreur = async (data) => {
    let dataRes = { status: true, data: [] };

    await api
      .patch(this.ApiEndPoint.livraisons + "/affect_livreur", data)
      .then(async (response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    //console.log(dataRes)
    return dataRes;
  };
}
