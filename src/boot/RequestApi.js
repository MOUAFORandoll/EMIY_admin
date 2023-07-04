
import { api } from './axios';
import { formatDate } from './formatDate';
// import VueCookies from 'vue-cookies' 
import jwt_decode from 'jwt-decode';
import { ApiManage } from './ApiManage.js'


import axios from 'axios'
// import store from "../stores/main.js";
// import { ref } from '@vue/runtime-core';
export class RequestApi {


  constructor() {
    this.clientId = 0// VueCookies.get('id');
    this.number = 0 //VueCookies.get('phone');
    this.keySecret = "1234";//VueCookies.get('keySecret'); 
  };



  logIn = async (number, password) => {
    // //console.log('sdddsd'); 
    let dataRes = { status: true };

    await axios.create({ baseURL: new ApiManage().baseUrl })
      .post('/api/logins', {
        phone: number,
        password: password,
      })
      .then(async (response) => {
        let id = jwt_decode(String(response.data.token)).id;
        // await this.newConnexionUser();
        dataRes = {
          status: true, id: id

        };

      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };




  logInValidate = async (password) => {
    // //console.log('sdddsd'); 
    let dataRes = { status: true };

    await api
      .post('/api/logins', {
        phone: this.number,
        password: password,
      })
      .then((response) => {
        let id = jwt_decode(String(response.data.token)).id;
        console.log(jwt_decode(String(response.data.token)))
        dataRes = {
          status: true,
          id: id
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };


  getCommandesListAction = async () => {
    let dataRes = { status: true, data: [] };


    await api
      .get('/dashboard/commande?' + "keySecret=" + this.keySecret)
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
      .get('dashboard/boutique?' + "keySecret=" + this.keySecret)
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
      .get('/dashboard/boutique/produit?' + "codeBoutique=" + codeBoutique + "&keySecret=" + this.keySecret)
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
      .get('/dashboard/boutique/commande?' + "codeBoutique=" + codeBoutique + "&keySecret=" + this.keySecret)
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
      .post('/dashboard/boutique/state', { keySecret: this.keySecret, codeBoutique: codeBoutique }, {

      })
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
      .get('/dashboard/user?keySecret=' + this.keySecret)
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
  

  getLivreurAction = async () => {
    let dataRes = { status: true, data: [] };


    await api
      .post('/livreur/read', { keySecret: " VueCookies.get('keySecret')" })
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
  getAdminAction = async () => {
    let dataRes = { status: true, data: [] };


    await api
      .post('/admin/read', { keySecret: " VueCookies.get('keySecret')" })
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

  makeSimpleUserAction = async (id) => {

    let dataRes = { status: true, data: [] };
    // //console.log(data);
    await api
      .post('/client/make', { adminkeySecret: " VueCookies.get('keySecret')", id: id }, {

      })
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };

  creer_livreur = async (data) => {

    let dataRes = { status: true, };

    await api
      .post('/api/user_plateforms', data)
      .then(async (response) => {
        //  await this.newConnexionUser();
        let data = {
          adminkeySecret: this.keySecret,
          keySecret: response.data['keySecret'],
        };

        await api
          .post('/livreur/new', data)
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
  stateClientAction = async (id) => {

    let dataRes = { status: true, data: [] };
    // //console.log(data);
    await api
      .post('/client/state', { adminkeySecret: " VueCookies.get('keySecret')", id: id }, {

      })
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data
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
      .post('/livreur/new', { adminkeySecret: " VueCookies.get('keySecret')", keySecret: keySecret }, {

      })
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data
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
      .post('/admin/new', { adminkeySecret: " VueCookies.get('keySecret')", keySecret: keySecret }, {

      })
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };











}
