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
   * @returns La liste des agregateurs du systems
   */
  getListAgregateur = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get(this.ApiEndPoint.agregateur_read_all)
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
  /**
   *
   * @param {*} agregateur
   * @returns retourne les informations de l'agregateur
   */
  getAgregateur = async (agregateur) => {
    let dataRes = { status: true, data: [] };

    await api
      .get(
        this.ApiEndPoint.agregateur_read_unique + "?idAgregateur=" + agregateur
      )
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

  /**
   *
   * @param {*} agregateur
   * @returns change le status de l'agregateur
   */
  changestatusAgregateur = async (agregateur) => {
    let dataRes = { status: true, data: [] };

    await api
      .get(this.ApiEndPoint.agregateur_status + "?idAgregateur=" + agregateur)
      .then(async (response) => {
        dataRes = {
          status: true,
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
  /**
   *
   * @param {*}  data les informations du projets
   * @returns  les informations actualisees
   */
  newProjet = async (data) => {
    let dataRes = { status: true, data: [] };

    await api
      .post(this.ApiEndPoint.projet_new, data)
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

  /**
   *
   * @param {*} data les informations du projets a mettre a jour
   * @returns le status et les informations actualisees
   */
  updateProjet = async (data) => {
    let dataRes = { status: true, data: [] };

    await api
      .patch(this.ApiEndPoint.projet_update, data)
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

  /**
   *
   * @param {*} projetsecretKey
   * @returns change le projetsecretKey du projet
   */
  keyRefreshProjet = async (projetsecretKey) => {
    let dataRes = { status: true, data: [] };

    await api
      .get(
        this.ApiEndPoint.projet_key_refresh +
          "?projetsecretKey=" +
          projetsecretKey
      )
      .then(async (response) => {
        dataRes = {
          status: true,
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

  /**
   *
   * @param {*} projetsecretKey
   * @returns retourne les informations du projetsecretKey
   */
  getProjetInfo = async (projetsecretKey) => {
    let dataRes = { status: true, data: [] };

    await api
      .get(this.ApiEndPoint.projet_info + "?projetsecretKey=" + projetsecretKey)
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

  /**
   *
   * @param {*} agregateur
   * @returns change le status de l'agregateur
   */
  changestatusProjet = async (projetsecretKey) => {
    let dataRes = { status: true, data: [] };

    await api
      .get(
        this.ApiEndPoint.projet_status + "?projetsecretKey=" + projetsecretKey
      )
      .then(async (response) => {
        dataRes = {
          status: true,
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

  /**
   *
   * @returns La liste des projets du systems
   */
  getListProjet = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get(this.ApiEndPoint.projet_read_all)
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

  /**
   *
   * @param {*} data  les informations du users pour effectuer le depot
   * @returns le status ou l'url de paiement
   */
  newDepot = async (data) => {
    let dataRes = { status: true, data: [] };

    await api
      .post(this.ApiEndPoint.transaction_depot_new, data)
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
  /**
   *
   * @param {*} data  les informations du users pour effectuer le retrait
   * @returns le status
   */
  newRetrait = async (data) => {
    let dataRes = { status: true, data: [] };

    await api
      .post(this.ApiEndPoint.transaction_retrait_new, data)
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

  /**
   *
   * @param {*} type de transaction du system : Depot = 1 , retrait = 2
   * @returns retourne les transaction du type selectionne
   */
  getTransactionForType = async (type) => {
    let dataRes = { status: true, data: [] };

    await api
      .get(this.ApiEndPoint.transaction_for_type + "type=" + type)
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

  /**
   *
   * @param {*} apiKey de l'agregateur
   * @returns retourne les transaction de l'agregateur
   */
  getTransactionAgregateur = async (apiKey) => {
    let dataRes = { status: true, data: [] };

    await api
      .get(this.ApiEndPoint.transaction_for_agregateur + "apiKey=" + apiKey)
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

  /**
   *
   * @param {*} projetsecretKey
   * @returns retourne les transaction du projet
   */
  getTransactionProjet = async (projetsecretKey) => {
    let dataRes = { status: true, data: [] };

    await api
      .get(
        this.ApiEndPoint.transaction_for_projet +
          "?projetsecretKey=" +
          projetsecretKey
      )
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

  /**
   *
   * @returns La liste des transaction du systems
   */
  getListAllTransaction = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get(this.ApiEndPoint.transaction_read_all)
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

  /**
   *
   * @returns La liste des transaction du systems
   */
  getListAllTypeTransaction = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get(this.ApiEndPoint.type_transaction_read)
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
