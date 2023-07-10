/* eslint-disable prettier/prettier */
import { api } from "./axios";
// import VueCookies from 'vue-cookies'
import jwt_decode from "jwt-decode";
import { useMainStore } from '@/stores/main';

// import { ref } from '@vue/runtime-core';
export class RequestApi {
  constructor() {
    this.clientId = 0; // VueCookies.get('id');
    this.number = 0; //VueCookies.get('phone');
    this.keySecret = localStorage.getItem("keySecret"); //VueCookies.get('keySecret');
  }

  logIn = async (data) => {
    // //console.log('sdddsd');
    let dataRes = { status: true };

    const mainStore = useMainStore();
    api.defaults.headers.common["Authorization"] =
      null;
    await api
      .post("/dashboard/auth/user", data)
      .then(async (response) => {

        let id = jwt_decode(String(response.data.token)).id;
        // let keySecret = jwt_decode(String(response.data.token)).keySecret;
        console.log(response.data)
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

  getDashBoardAction = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get("/dashboard/?" + "keySecret=" + this.keySecret)
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
  getCommandesListAction = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get("/dashboard/commande?" + "keySecret=" + this.keySecret)
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

  getBoutiquesListAction = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get("dashboard/boutique?" + "keySecret=" + this.keySecret)
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
  getBoutiquesRequestListAction = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get("/dashboard/boutique/request?" + "keySecret=" + this.keySecret)
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
  geBoutiqueProduitAction = async (codeBoutique) => {
    let dataRes = { status: true, data: [] };

    await api
      .get(
        "/dashboard/boutique/produit?" +
        "codeBoutique=" +
        codeBoutique +
        "&keySecret=" +
        this.keySecret
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

  geBoutiqueCommandesAction = async (codeBoutique) => {
    let dataRes = { status: true, data: [] };

    await api
      .get(
        "/dashboard/boutique/commande?" +
        "codeBoutique=" +
        codeBoutique +
        "&keySecret=" +
        this.keySecret
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

  stateBoutiqueAction = async (codeBoutique) => {
    let dataRes = { status: true, data: [] };
    // //console.log(data);
    await api
      .post(
        "/dashboard/boutique/state",
        { keySecret: this.keySecret, codeBoutique: codeBoutique },

      )
      .then(() => {
        dataRes = {
          status: true,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };

  getUsersListAction = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get("/dashboard/user?keySecret=" + this.keySecret)
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

  creer_livreur = async (data) => {
    let dataRes = { status: true };

    await api
      .post("/api/user_plateforms", data)
      .then(async (response) => {
        //  await this.newConnexionUser();
        let data = {
          adminkeySecret: this.keySecret,
          keySecret: response.data["keySecret"],
        };

        await api
          .post("/livreur/new", data)
          .then(async () => {
            //  await this.newConnexionUser();
            dataRes = {
              status: true,
            };
          })
          .catch(() => {
            // console.log('dsdds',e['response']['data']['hydra:description'].includes('Duplicata'));
            dataRes = {
              status: false,
            };
          });
      })
      .catch(() => {
        // console.log('dsdds',e['response']['data']['hydra:description'].includes('Duplicata'));
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  makeClientAction = async (keySecret) => {
    let dataRes = { status: true, data: [] };
    // //console.log(data);
    await api
      .post(
        "/dashboard/client/make",
        { adminkeySecret: this.keySecret, keySecret: keySecret },

      )
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };

  makeLivreurAction = async (keySecret) => {
    let dataRes = { status: true, data: [] };
    // //console.log(data);
    await api
      .post(
        "/dashboard/livreur/make",
        {
          adminkeySecret: this.keySecret,
          keySecret: keySecret,
        },

      )
      .then((response) => {
        dataRes = {
          status: true,
          // data: response.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  makeAdminAction = async (keySecret) => {
    let dataRes = { status: true, data: [] };
    // //console.log(data);
    await api
      .post(
        "/dashboard/admin/make",
        {
          adminkeySecret: this.keySecret,
          keySecret: keySecret,
        },

      )
      .then((response) => {
        dataRes = {
          status: true,
          // data: response.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  stateUserAction = async (keySecret) => {
    let dataRes = { status: true, data: [] };
    // //console.log(data);
    await api
      .post(
        "/dashboard/client/state",
        { adminkeySecret: this.keySecret, keySecret: keySecret },

      )
      .then((response) => {
        dataRes = {
          status: true,
          // data: response.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  resetPasswordUserAction = async (keySecret) => {
    let dataRes = { status: true, data: [] };
    // //console.log(data);
    await api
      .patch(
        "/dashboard/password/reset",
        { adminkeySecret: this.keySecret, keySecret: keySecret },

      )
      .then((response) => {
        dataRes = {
          status: true,
          password: response.data.password,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  getNotificationsListAction = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get("/dashboard/notifications?keySecret=" + this.keySecret)
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
  newNotificationAction = async (data) => {
    let dataRes = { status: true, data: [] };
    // //console.log(data);
    await api
      .post(
        "/dashboard/notifications",

        data
      )
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  getCommunicationListAction = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get("/dashboard/communication/list?keySecret=" + this.keySecret)
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
  getCommunicationMessageListAction = async (codeCommunication) => {
    let dataRes = { status: true, data: [] };

    await api
      .get("/dashboard/communication/message/list?code=" + codeCommunication)
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
  newCommunicationAction = async (data) => {
    let dataRes = { status: true, data: [] };
    // //console.log(data);
    await api
      .post(
        "/communication/message/new",

        data
      )
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };



  getNegociationListAction = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get("/dashboard/negociation/list?keySecret=" + this.keySecret)
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
  getNegociationMessageListAction = async (codeNegociation) => {
    let dataRes = { status: true, data: [] };

    await api
      .get("/dashboard/negociation/message/list?code=" + codeNegociation)
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
