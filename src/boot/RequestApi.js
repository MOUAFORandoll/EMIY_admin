
import { api } from './axios';
import { formatDate } from './formatDate';
import VueCookies from 'vue-cookies'
import {mapMutations, mapActions } from "vuex";
import jwt_decode from 'jwt-decode';
import { createToaster } from "@meforma/vue-toaster";
 import { ApiManage } from './ApiManage.js'


import axios from 'axios'
import store from "../../src/store";
import { ref } from 'vue';
 export  class RequestApi  {
  
  
constructor( ) {
    this.clientId =  VueCookies.get('id');
    this.number =  VueCookies.get('phone');
  this.keySecret = VueCookies.get('keySecret');
  this.toast = createToaster(); 
};


/***
 * data doit contenir  {
  emetteurId,
  recepteurId,
  routeId,
  quantite
 
}
 * 
 */
  crediterCompteAction = async (data ) => {
    
    let dataRes  = { status: true, data: [] };

    await api
      .post('/transaction/sms', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else {
         dataRes = {
           status: true,
           data: response.data['hydra:member'],
         } };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      });
    return dataRes;
  };
/***
 * data doit contenir  {
  emetteurId,
  recepteurId,
  routeId,
  quantite
 
}
 * 
 */
  crediterProjetAction = async (data ) => {
    
    let dataRes  = { status: true, data: [] };

    await api
      .post('/projet/crediter', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else {
         dataRes = {
           status: true,
           data: response.data['hydra:member'],
         } };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      });
    return dataRes;
  };
  updateStockProjetAction = async (data ) => {
    
    let dataRes  = { status: true, data: [] };

    await api
      .post('/projet/stock/update', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else {
         dataRes = {
           status: true,
           data: response.data['hydra:member'],
         } };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      });
    return dataRes;
  };
  
/***
 * data doit contenir  {
  clientId,
  montant
 
}
 * 
 */
  transfertCompteAction = async (data ) => {
    
    let dataRes  = { status: true, data: [] };

    await api
      .post('/transaction/locale', data)
      .then(async(response) => {
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
          dataRes = {
            status: false, aff: false,
            id: '0',
          };
        } else {
          dataRes = {
            status: true,
            data: response.data['hydra:member'],
          };
          store.dispatch('updatesoldeLocal', null)
          store.dispatch('updatesoldePorteFeuille', null)
          store.state.soldeLocal == null
          store.state.soldePorteFeuille == null
          await this.getSoldeAccountAction(2)
          await this.getSoldeAccountAction(3)
        }   })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      });
    return dataRes;
  };

  async  unpdateFunctionToRole (data, type){
  
      let dataRes;
    await api
      .post((!type)?'/fonction/add':'/fonction/remove', data)
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data,
        };
         api.defaults.headers.common['Authorization'] =
            'Bearer ' + String(response.data.token);
          VueCookies.set('token', String(response.data.token));
          VueCookies.set('refreshToken', String(response.data.refreshToken));
          this.decode = jwt_decode(String(response.data.token));
          VueCookies.set('nom', String(this.decode.nom));
        VueCookies.set('prenom', String(this.decode.prenom));
        VueCookies.set('firstConnexion', String(this.decode.firstConnexion));
          VueCookies.set('phone', String(this.decode.phone));
            VueCookies.set('keySecret', String(this.decode.keySecret));
            VueCookies.set('fonctions', (this.decode.fonctions));
   mapMutations(["getUser" ]),
   
 mapActions(["updateUser"])
       store.commit('getUser', this.decode)
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
    return dataRes;
     };


   
       async   newProfile(data) {
       
           
           let dataRes;
            
         await api                .post('/role/new', data)
                .then((response) => {
                     
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

   
     async getProfile() {
       
           
         let dataRes;
       
            
         await api                .post('/role/read',{keySecret:  this.keySecret})
                .then((response) => {
                     
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


       //console.log('--------------', dataRes);
           return dataRes;
        };
          async getFonctions() {
       
           
         let dataRes;
           let  listFonction=[ ];
           let  listIdFonction=[ ];
             let  listFonctionE=[ ];
             let  listIdFonctionE=[ ];
            
            
            await api.get('api/fonctions?exists%5BlistRoleFonctions%5D=true')
              .then((response) => {
                for (let index = 0; index < response.data['hydra:member'].length; index++) {
                  const fonction = response.data['hydra:member'][index];
             listIdFonctionE.push(fonction['@id']);
                         
                  listFonctionE.push({
                    id: fonction['@id'],
                    name: fonction['nom'],
                    description: fonction['description']
                  })
                         
                }
 
              })
              .catch(() => {
                     
              //
              });
            

            
         await api.get('/api/fonctions')
           .then((response) => {
           
             for (let index = 0; index < response.data['hydra:member'].length; index++) {
              
               const fonction = response.data['hydra:member'][index];
               
             
                 if (listIdFonction.includes(fonction['@id'])) {
                  //  //console.log('napas',listIdFonctionE)
                 } else {
                   if (listIdFonctionE.includes(fonction['@id'])) {
                   listIdFonction.push(fonction['@id']);
                  //  //console.log('0000')
                               
                   listFonction.push({
                     id: fonction['@id'],
                     name: fonction['nom'],
                     description: fonction['description'],
                      check: true,
                   })
                   }
                   else {
                   listIdFonction.push(fonction['@id']);

                  //  //console.log('1111')
                     
                       listFonction.push({
                     id: fonction['@id'],
                     name: fonction['nom'],
                     description: fonction['description'],
                      check: false
                   })
                     
                   }
               }
                               
            
             } 
                    
 
                  // //console.log(listIdFonction)
 
                  dataRes = {
          status: true,
          data: listFonction,
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
   
          async getProfileFonction(idRole) {
       
           
         let dataRes;
         await api.post('/fonction/all', {role:idRole})
           .then((response) => {
           
       
           

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
  * @param {*} data doit contenir l'id du role a attribuer au client
  * @param {*} idClient doit contenir l'{@id} du cleint a qui on doit attribuer le role ou prolfile
  * @returns 
  */
  async  addRoleToClient (data, idClient){
  
      let dataRes;
    await api
      .patch(idClient, data)
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data,
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
  * @param {*} idClient doit contenir l'{@id} du cleint a qui on doit retirer les roles ou prolfiles
  * @returns 
  */
  async  removeRoleToClient (idClient){
  
      let dataRes;
    await api
      .patch(idClient, {role:null})
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data,
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

     async   getListLotSmsEnvoyeAction ()   {
    
       let data = [];
       let dataRes;
    await api
      .get('/api/list_sms_lots_envoyes?sms.clientId='.concat(this.clientId))
      .then((response) => {
        for (let i = 0; i < response.data['hydra:member'].length; i++) {
            
       
          for (
            let j = 0;
            j < response.data['hydra:member'][i]['listSmsContacts'].length;
            j++
          ) {
            const dataS = response.data['hydra:member'][i];

            if (dataS['sms']!= null) {
              // //console.log(dataS['sms']['senderId'],response.dataS['hydra:member'][i]['listSmsContacts'].length)
              if (dataS['sms']['senderId'] != null) {
                if (dataS['listSmsContacts'][j]!= null) {
                  let message = {
                    id: dataS['sms']['id'],
                    message: dataS['sms']['message'],
              
                    senderId:
                      dataS['sms']['senderId']['senderId'],
                    senderIdElt:
                      dataS['sms']['senderId'],
                    status: true,
              
                    destinataire:
                      dataS['listSmsContacts'][j][
                      'contact'
                      ]['phone'],
              
                    date:  dataS['dateCreated']
                  };
                  // //console.log('rest*********', message);
                  data.push(message);
                }
              }
            }
          }
        }

        dataRes = {
          status: true,
          data: data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
      // //console.log('rest*********', dataRes.data)
    return dataRes;
  };

  
     async   getSmsBySenderIdDashAction ()   {
    
       let data = [];
       let dataRes;
    await api
      .get('/api/list_sms_lots_envoyes?sms.clientId='.concat(this.clientId))
      .then((response) => {
      
         //console.log( response.data['hydra:member'].length,'dataRes***********************************')
    
          for (let i = 0; i < response.data['hydra:member'].length; i++) {
         
              if (data.length  <4 && response.data['hydra:member'][i]['sms']['senderId'] !=null) {
            let dash1 = {
              id: response.data['hydra:member'][i]['id'],
              nombreSms: 1,
            
              message: response.data['hydra:member'][i]['sms']['message'],
              
              senderId:
                response.data['hydra:member'][i]['sms']['senderId'] ?response.data['hydra:member'][i]['sms']['senderId']['senderId'] :"Erreur",
              senderIdId:
            response.data['hydra:member'][i]['sms']['senderId'] ?    response.data['hydra:member'][i]['sms']['senderId']['id'] :"Erreur",
              
              
              
              tailleContacts:
                response.data['hydra:member'][i]['listSmsContacts'].length,
            
            };
            data.push(dash1);
         
          }//console.log( data )
        }
        dataRes = {
          status: true,
          data: data,
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

   
     async   getSmsByStateAction ()   {
    
       let data = [];
       let dataRes;
    await api
      .get('/api/list_sms_lots_envoyes?sms.clientId='.concat(this.clientId))
      .then((response) => {
      
      
          for (let i = 0; i < response.data['hydra:member'].length; i++) {
         
              if (data.length  <4) {
            let dash1 = {
              id: response.data['hydra:member'][i]['id'],
              nombreSms: 1,
            
              message: response.data['hydra:member'][i]['sms']['message'],
              
              senderId:
                response.data['hydra:member'][i]['sms']['senderId']['senderId'],
              senderIdId:
                response.data['hydra:member'][i]['sms']['senderId']['id'],
              
              
              
              tailleContacts:
                response.data['hydra:member'][i]['listSmsContacts'].length,
            
            };
            data.push(dash1);
         
          }
        }
        dataRes = {
          status: true,
          data: data,
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

async  getSenderIdsAction () {
   let dataRes ;

    await api
      .get('/api/sender_ids?clientId='.concat(this.clientId))
      .then((response) => {
        dataRes = {
          status: true,
          data:  response.data['hydra:member'],
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
 async getPaysAction ()  {
    let dataRes;
if (store.state.listPays == null) {

    await api
      .get('/api/pays')
      .then((response) => {
        dataRes = {
          status: true,
          data:response.data['hydra:member'],
        };
            
   mapMutations(["getlistPays" ]),
   
 mapActions(["updatelistPays"])
       store.commit('getlistPays', response.data['hydra:member'])
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      }); }
else {
  dataRes = {
          status: true,
          data:  store.state.listPays,
        };
    }
    return dataRes;
  };


 async getRouteAction1 ()  {
    let dataRes;
if (store.state.listRoute == null) {

    await api
      .get('/route/read')
      .then((response) => {
        dataRes = {
          status: true,
          data:response.data.data ,
        };
            
   mapMutations(["getlistRoute" ]),
   
 mapActions(["updatelistRoute"])
       store.commit('getlistRoute', response.data.data )
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      }); }
else {
  dataRes = {
          status: true,
          data:  store.state.listRoute,
        };
    }
    return dataRes;
  };


 async getSoldeAccountAction (type)  {
    let dataRes;

    await api
      .get('/api/comptes?clientId='.concat(this.clientId)+'&typeCompte='.concat(type))
      .then((response) => {
        dataRes = {
          status: true,
          data:response.data['hydra:member'],
        };
       
    
    store.dispatch((type==2) ?'updatesoldeLocal' : 'updatesoldePorteFeuille',  response.data['hydra:member'][0]['solde'])
      })
    
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    return dataRes;
  };
     
   
   
 async getRetraitAccountAction ()  {
    let dataRes;

    await api
      .get('/api/Comptes?clientId='.concat(this.clientId)+'&typeCompte=3')
      .then((response) => {
        dataRes = {
          status: true,
          data:response.data['hydra:member'],
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
     
 async getDepotAccountAction ()  {
    // let dataRes;

    // await api
    //   .get('/api/pays')
    //   .then((response) => {
    //     dataRes = {
    //       status: true,
    //       data:response.data['hydra:member'],
    //     };
    //   })
    //   .catch(() => {
    //     dataRes = {
    //       status: false,
    //       data: [],
    //     };
    //   });
    // return dataRes;
  };

   
 async getExistParrainUserAction (lienParrainnage)  {
    let dataRes;

    await api
      .post('/client/exist',{lienParrainnage:lienParrainnage})
      .then((response) => {
        dataRes = {
          status: true,
          exist:response.data.exist,
          id:response.data.id,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          exist: false,
        };
      });
    return dataRes;
  };

  getParrainUserAction = async () => {
    let dataRes = { status: true, data: [] };
    const dataFinal = [];
    let User = {
      id: 0,
      phone: '',
      name: '',
      mail: '',
      firstname: '',
      surname: '',
      organisation: '',
      solde: 0,
    
    };
    
    
if (store.state.listUserParrain == null) {
       //console.log('iiiiii**respp0'  )

    await api
      .post('/client/read',{keySecret:  VueCookies.get('keySecret')})
      .then(async (response) => {
       //console.log('**respp0',response.data.data, response.data.data.length )
    
      
        
        // const datas = [];
        // for (let i = 0; i < response.data.data.length; i++) {
      //  if(VueCookies.get('keySecret')){
      //         datas.push(response.data.data[i]);

      //  }
      //  else{

       
      //    if (response.data.data[i]['codeParrain'] != null) {
      //      if (
           
      //        response.data.data[i]['codeParrain'].split('@')[0] ==
      //        this.clientId
      //      ) {
        //  //console.log('00000000000', response.data.data);
      //        datas.push(response.data.data[i]);
      //      } else {
      //        //
      //      }
      //    }   }
      //   }
       
        for (let i = 0; i < response.data.data.length; i++) {
          
          let datas = response.data.data;
          //console.log('ccccccccccccccc', datas);
          if (datas[i]['dateCreated'] != null) {
            User = {
              id: datas[i]['id'],
              phone: datas[i]['phone'],
            
              name:
              
                datas[i]['nom'],

              firstname:
              
                datas[i]['nom'],
              mail:
              
                datas[i]['email'],
              solde:
              
                datas[i]['solde'],
              role:
              
                datas[i]['role'],
              surname: datas[i]['prenom'],
posteSocial: datas[i]['posteSocial'],
              organisation: datas[i]['nomEntreprise'],
              dateCreated: formatDate(datas[i]['dateCreated'], 1)
             
            };
            dataFinal.push(User);
          }
        }
        dataRes = {
          status: true,
          data: dataFinal,
        };
        
   mapMutations(["getParrainUser" ]),
   
 mapActions(["updateParrainUser"])
       store.commit('getParrainUser', dataFinal)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });  }
else {
  dataRes = {
          status: true,
          data:  store.state.listUserParrain,
        };
    }
//console.log(dataRes) 
    return dataRes;
  };

   
  pathPasswordAction2 = async (data) => {
     
    let dataRes = { status: true, data:[] };
    // //console.log(data);
    await api
      .patch('/update/password/client', data, {
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
      })
      .then((response) => {
        dataRes = {
          status: true,
          data:response.data.password
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  logIn = async (number , password ) => {
    // //console.log('sdddsd'); 
    let dataRes = { status: true };

    await axios.create({ baseURL:new ApiManage().baseUrl })
      .post('/api/auth', {
        phone: number,
        password: password,
      })
      .then(async (response) => {
           let id = jwt_decode(String(response.data.token)).id;
          // await this.newConnexionUser();
        dataRes = {
          status: true,   id:id
          
        };
        
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };


  
  
  logInValidate = async ( password ) => {
    // //console.log('sdddsd'); 
    let dataRes = { status: true };

    await api
      .post('/api/auth', {
        phone:  this.number,
        password: password,
      })
      .then((response) => {
        let id = jwt_decode(String(response.data.token)).id;
        console.log(jwt_decode(String(response.data.token)))
        dataRes = {
          status: true,
          id:id
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };


  
  signUp = async (data ) => {
    
    let dataRes  = {statusDu:false, status: true, data: [] };

    await api
      .post('/api/clients', data)
      .then(async (response) => {
        //  await this.newConnexionUser();
        dataRes = {
          status: true,statusDu:false,
          data: response.data['hydra:member'],
        };
        store.state.listUserParrain == null,
         mapMutations(["getParrainUser" ]),
   
 mapActions(["updateParrainUser"])
        store.commit('getParrainUser', null)
        
      })
      .catch((e) => {
        // console.log('dsdds',e['response']['data']['hydra:description'].includes('Duplicata'));
        dataRes = {
          status: false,
          statusDu: e['response']['data']  ?e['response']['data']['hydra:description'].includes('Duplicata') :false,
          data: [],
        };
      });
    return dataRes;
  };
  
  makeListSmsAcheteAction = async (data) => {
    let dataRes= { status: true };

    await api
      .post('/api/list_s_m_s_achettes', data)
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

  // /**
  //  * @argument data doit contenir l'id du client et l'id de la licence qu'il a choisit
  //  */
  // buyLicenceSmSAction = async (data) => {
  //   const dataFact = {
  //     licence: data.licence,
  //     clientId: parseInt(this.clientId),
  //     montant: data.montant,
  //   };
  //   let dataRes = { status: true };
  //   const response = await this.makeFactureAction(dataFact);

  //   if (response.status) {
  //     const dataLsa = {
  //       facture: response.id,
  //       routeId: data.routeId,
  //       quantite: data.quantite,
  //     };
  //     const response0 = await this.makeListSmsAcheteAction(dataLsa);
  //     if (response0.status) {
  //       const dataPay = {
  //         montant: data.montant,
  //         type: 'MOBILE_MONEY',
  //         facture: response.id.split('/')[3],
  //         clientId: this.clientId,
  //         modePaiement: data.modePaiement.split('/')[3],
  //       };
       

  //       await this.makePaiementAction(dataPay);

  //       dataRes = {
  //         status: true,
  //       };
  //     } else {
  //       dataRes = {
  //         status: false,
  //       };
  //     }
  //   } else {
  //     dataRes = {
  //       status: false,
  //     };
  //   }

  //   return dataRes;
  // };

  /**
   * @argument data doit contenir l'id du client et l'id de la licence qu'il a choisit
   */
  makeFactureAction = async (data) => {
    let dataRes = { status: true, id: '' };

    await api
      .post('/api/factures', data)
      .then((response) => {
        dataRes = {
          status: true,
          
          id: response.data['@id'],
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };
  createSenderIdAction = async (senderId) => {
    let dataRes = { status: true, data: [] };

    const dataSenderId = {
      
      senderId: senderId,
      description: 'string',
      status: true,
      clientId: this.clientId,
    };

    await api
      .post('/api/sender_ids', dataSenderId)
      .then((response1) => {
        
        dataRes = {
          status: true,
          
          data:response1.data,
        };
        // //console.log('xxxxxxxxxxx cas................', response1.data);
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });

    
    return dataRes;
  };


  getModePaiementAction = async () => { 
    let dataRes  = { status: true, data: [] };

if (store.state.listModePaiement == null) {



    await api
      .get('/api/mode_paiements')
      .then((response) => {
        dataRes = {
          status: true,
          data:  response.data['hydra:member'],
        };
   mapMutations(["modePaiement" ]),
   
 mapActions(["updateModePaiement"])
       store.commit('modePaiement',  response.data['hydra:member'])
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    }
else {
  dataRes = {
          status: true,
          data:  store.state.listModePaiement,
        };
    }
    // //console.log('ress',dataRes)
    return dataRes;
  };

 getInfoAccountAction = async () => { 
    let dataRes  = { status: true, data: [] };
//console.log(store.state.infoCompte)
// if (store.state.infoCompte == null) {


////console.log('*****cas 1')

    await api
      .get('/api/comptes?clientId='.concat(this.clientId))
      .then((response) => {
        dataRes = {
          status: true,
          data:  response.data['hydra:member'],
        };
        
//    mapMutations(["getInfoCompte" ]),
   
//  mapActions(["updateInfoCompte"])
//        store.commit('getInfoCompte',  response.data['hydra:member'])
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
//     }
// else {
//   dataRes = {
//           status: true,
//           data:  store.state.infoCompte,
//         };
// ////console.log('*****cas 2....')
//     }
    return dataRes;
  };


   
  getTranchesSmsAction = async () => {
    let dataRes= { status: true, data: [] };

if (store.state.trancheSms == null) {


    await api
      .get('/api/tranche_sms')
      .then((response) => {
        dataRes = {
          status: true,
          data:response.data['hydra:member'],
        };
        
        
   mapMutations(["gettrancheSms" ]),
   
 mapActions(["updatetrancheSms"])
       store.commit('gettrancheSms',  response.data['hydra:member'])
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
  }
else {
  dataRes = {
          status: true,
          data:  store.state.trancheSms,
        };
    }
    return dataRes;
  };

   
    async   rechargerSolde(data) {
       
           
           let dataRes;
            
         await api                .post('/moneytransaction ', data)
                .then((response) => {
                  if (response.status == 203) {
                    this.toast.error(response.data['message'], {
                      // override the global option
                      position: "bottom"
                    });
                    dataRes = {
                      status: false, aff: false,
                      id: '0',
                    };
                  } else {
                    dataRes = {
                      status: true, paymentUrl: response.data['payment_url'],
                      paymentToken: response.data['payment_token'],
                    };
                  }
                 
                })
                .catch(() => {
                     
                      dataRes = {
                        af:true,
          status: false,
          data: [],
        };
                  
                });
           return dataRes;
     };
   
    async   updateCalendar(data) {
       
           
           let dataRes;
            
         await api                .post('/calendrier/update ', data)
                .then((response) => {
                  if (response.status == 203) {
                    this.toast.error(response.data['message'], {
                      // override the global option
                      position: "bottom"
                    });
                    dataRes = {
                      status: false, aff: false,
                     
                    };
                  } else {
                    dataRes = {
                      status: true, 
                    };
                  }
                 
                })
                .catch(() => {
                     
                      dataRes = {
                        af:true,
          status: false,
          data: [],
        };
                  
                });
           return dataRes;
     };

    async   updateNotifStatus(data) {
       
           
           let dataRes;
            
         await api                .post('/notification/status', data)
                .then((response) => {
                  if (response.status == 203) {
                    this.toast.error(response.data['message'], {
                      // override the global option
                      position: "bottom"
                    });
                    dataRes = {
                      status: false, aff: false,
                     
                    };
                  } else {
                    dataRes = {
                      status: true, 
                    };
                  }
                 
                })
                .catch(() => {
                     
                      dataRes = {
                        af:true,
          status: false,
          data: [],
        };
                  
                });
           return dataRes;
     };
    async   updateNotification(data) {
       
           
           let dataRes;
            
         await api                .post('/notification/update', data)
                .then((response) => {
                  if (response.status == 203) {
                    this.toast.error(response.data['message'], {
                      // override the global option
                      position: "bottom"
                    });
                    dataRes = {
                      status: false, aff: false,
                     
                    };
                  } else {
                    dataRes = {
                      status: true, 
                    };
                  }
                 
                })
                .catch(() => {
                     
                      dataRes = {
                        af:true,
          status: false,
          data: [],
        };
                  
                });
           return dataRes;
     };

     
   /**
    * token
    * modePaiement
    * 
    */
    async   waitStaterechargerSolde (data) {

      
           let dataRes;
         await api                .post('/moneytransaction/notify', data)
                .then((response) => {
                     
                 
 
                
                    dataRes = {
                      status: true,
                      data: response.data,
                    }
 
                 
                })
                .catch(() => {
                     
                      dataRes = {
          status: false,
                        data: [],
        };
                  
                });
           
            
           return dataRes;
     };

     
   
    async   retraitSolde(data) {
       
           
           let dataRes;
            
         await api                .post('/moneytransaction ', data)
                .then(( response) => {
                 if (response.status == 203) {
                    this.toast.error(response.data['message'], {
                      // override the global option
                      position: "bottom"
                    });
                    dataRes = {
                      status: false, aff: false,
                      id: '0',
                    };
                  } else {     
                   dataRes = {
                     status: true,
                   } };
                 
                })
                .catch(() => {
                     
                      dataRes = {
                        aff:true,
          status: false,
          
        };
                  
                });
           return dataRes;
     };


  /**
   * @argument data doit contenir l'id du client et l'id de la licence qu'il a choisit
   */
  makePaiementAction = async (data) => {
    let dataRes= { status: true,sourcePaiement:2,typePaiement:0 ,paymentUrl: '',paymentToken:'' ,idListSmsAchete:''};
        // //console.log(data);
    await api
      .post('/licence/paid', data)
      .then((response) => {
        
       
        //console.log('response........',response);
         
        
        if (data.sourcePaiement == 1) {
  
          if (response.status == 203) {
            this. toast.error(response.data['message'], {
          // override the global option
          position: "bottom"
        });
         dataRes = {
          status: false,aff:false,
          id: '0',
        };
          } else {

          
            dataRes = {
              status: true,
              sourcePaiement: 1,
              paymentUrl: response.data['message'],
            };
          }
          
        }
        else {

         if ( response.data['code'] == 201) {
          
  dataRes = {
    status: true,
     sourcePaiement : 2,
              paymentUrl: response.data['payment_url'],
              paymentToken: response.data['payment_token'],
              idListSmsAchete: response.data['idListSmsAchete']
            };
          
          
        
          
         } else {
            dataRes = {
          status: false,
          aff:true,
          id: '0',
        };
          } }
      })
      .catch(() => {
        dataRes = {
          aff:true,
          status: false,
          id: '',
        };
      });
    //console.log(dataRes);
    return dataRes;
  };
   
  
     
   /**
    * quantite
    * token
    * modePaiement
    * idListSmsAchete
    * 
    */
    async   waitStateLicenceTransaction(data) {

      
           let dataRes;
         await api                .post('/licence/notify', data)
                .then((response) => {
                     
                 
 
                
                    dataRes = {
                      status: true,
                      data: response.data,
                    }
 
                 
                })
                .catch(() => {
                     
                      dataRes = {
          status: false,
                        data: [],
        };
                  
                });
           
            
           return dataRes;
     };


     


   
  
  getListSmsAcheteForPaysAction = async (id) => {
    let dataRes= { status: true,data:[] };
    // //console.log('/api/list_s_m_s_achettes?routeId='.concat(id) + '&facture.clientid='.concat(this.clientId));
    await api
      .get('/api/list_s_m_s_achettes?routeId='.concat(id) +'&facture.clientId='.concat(this.clientId))
      .then((response) => {
        dataRes = {
          status: true,data: response.data['hydra:member'],
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };


  getRouteForIdAction = async (id) => {
    let dataRes= { status: true,data:[] };
 
    await api
      .get('/api/routes/'.concat(id))
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };

  
  getListSmsManipule = async () => {
    let dataRes= { status: true,data:[] };
 
    await api
      .post('/manipulation/read', { keySecret: VueCookies.get('keySecret') })
      .then( async(response) => {
    
    //     for (let i = 0; i < response.data['hydra:member'].length; i++){
    //       let ls = response.data['hydra:member'][i];
         
    //     let route = await this.getRouteForIdAction(ls['routeId'])
    //  let a ={
    //         id: ls['id'],
    //         quantite: ls['quantite'],
    //         route: route.data['nom'],
    //         date:formatDate(
                
    //             new Date(ls['date']),0)
        
    //   }
        
    //   //  //console.log(a)
    //     data.value.push(a)  
     
    //     } 
       
        dataRes = {
          status: true,
          data:  response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };

  getListSmsAcheteForUserAction = async () => {
    let dataRes= { status: true,data:[] };
 
    await api
      .post('/licence/read', { keySecret: VueCookies.get('keySecret') })
      .then( async(response) => {
    
    //     for (let i = 0; i < response.data['hydra:member'].length; i++){
    //       let ls = response.data['hydra:member'][i];
         
    //     let route = await this.getRouteForIdAction(ls['routeId'])
    //  let a ={
    //         id: ls['id'],
    //         quantite: ls['quantite'],
    //         route: route.data['nom'],
    //         date:formatDate(
                
    //             new Date(ls['date']),0)
        
    //   }
        
    //   //  //console.log(a)
    //     data.value.push(a)  
     
    //     } 
       
        dataRes = {
          status: true,
          data:  response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };

  getListSmsAcheteIliForUserAction = async () => {
    let dataRes= { status: true,data:[] };
 
    await api
      .post('/licence/readili', { keySecret: VueCookies.get('keySecret') })
      .then( async(response) => {
    
    //     for (let i = 0; i < response.data['hydra:member'].length; i++){
    //       let ls = response.data['hydra:member'][i];
         
    //     let route = await this.getRouteForIdAction(ls['routeId'])
    //  let a ={
    //         id: ls['id'],
    //         quantite: ls['quantite'],
    //         route: route.data['nom'],
    //         date:formatDate(
                
    //             new Date(ls['date']),0)
        
    //   }
        
    //   //  //console.log(a)
    //     data.value.push(a)  
     
    //     } 
       
        dataRes = {
          status: true,
          data:  response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };


  
  getCommissionSmsAction = async () => {
    let dataRes= { status: true,data:[] };
 
if (store.state.commissionAll == null) {



    await api
      .post('/commission/read',{keySecret:  VueCookies.get('keySecret')})
      .then((response) => {
        

        dataRes = {
          status: true,
          data: response.data,
        };
    
   mapMutations(["getCommissionAll" ]),
   
 mapActions(["updateCommissionAll"])
       store.commit('getCommissionAll',  response.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    }
else {
  dataRes = {
          status: true,
          data:  store.state.commissionAll ,
        };
    }
       
    return dataRes;
  };
  updateCommissionSmsAction = async (data) => {
    let dataRes= { status: true,data:[] };
  


    await api
      .post('/commission/sms/update',data)
      .then((response) => {
        

        dataRes = {
          status: true,
          data: response.data.data,
        };
    
   mapMutations(["getCommissionAll" ]),
   
 mapActions(["updateCommissionAll"])
       store.commit('getCommissionAll',  response.data.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
   
    return dataRes;
  };

  updateCommissionRouteAction = async (data) => {
    let dataRes= { status: true,data:[] };
  


    await api
      .post('/commission/route/update',data)
      .then((response) => {
        

        dataRes = {
          status: true,
          data: response.data.data,
        };
    
   mapMutations(["getCommissionAll" ]),
   
 mapActions(["updateCommissionAll"])
       store.commit('getCommissionAll',  response.data.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
   
    return dataRes;
  };
   

  updateCommissionTrancheAction = async (data) => {
    let dataRes= { status: true,data:[] };
  


    await api
      .post('/commission/tranche/update',data)
      .then((response) => {
        

        dataRes = {
          status: true,
          data: response.data.data,
        };
    
   mapMutations(["getCommissionAll" ]),
   
 mapActions(["updateCommissionAll"])
       store.commit('getCommissionAll',  response.data.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
   
    return dataRes;
  };
   
  getExceptionAction = async () => {
    let dataRes= { status: true,data:[] };
 
if (store.state.exceptionAll == null) {



    await api
      .post('/exception/all/read',{keySecret:  VueCookies.get('keySecret')})
      .then((response) => {
        

        dataRes = {
          status: true,
          data: response.data,
        };
    
   mapMutations(["getexceptionAll" ]),
   
 mapActions(["updateexceptionAll"])
       store.commit('getexceptionAll',  response.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    }
else {
  dataRes = {
          status: true,
          data:  store.state.exceptionAll ,
        };
    }
       
    return dataRes;
  };

   
  newExceptionAction = async (data) => {
    let dataRes= { status: true,data:[] };
  
  await api
      .post('/exception/add',data)
      .then((response) => {
        

        dataRes = {
          status: true,
          data: response.data,
        };
    
   mapMutations(["getexceptionAll" ]),
   
 mapActions(["updateexceptionAll"])
       store.commit('getexceptionAll',  response.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
   
    return dataRes;
  };
  updateExceptionAction = async (data) => {
    let dataRes= { status: true,data:[] };
  
  await api
      .post('/exception/modify',data)
      .then((response) => {
        

        dataRes = {
          status: true,
          data: response.data,
        };
    
   mapMutations(["getexceptionAll" ]),
   
 mapActions(["updateexceptionAll"])
       store.commit('getexceptionAll',  response.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
   
    return dataRes;
  };
 desableExceptionAction = async (data) => {
    let dataRes= { status: true,data:[] };
  
  await api
      .post('/exception/desable',data)
      .then((response) => {
        

        dataRes = {
          status: true,
          data: response.data,
        };
    
   mapMutations(["getexceptionAll" ]),
   
 mapActions(["updateexceptionAll"])
       store.commit('getexceptionAll',  response.data)
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
   * @argument data doit contenir l'id de la route et l'id de la licence qu'il a choisit et la quantite d'sms
   */
  getrouteListSmsLotEnvoyeForPaysAction = async (id) => {
    let dataRes= { status: true ,data:[]};

    await api
      .get('/api/route_list_sms_lots_envoyes?routeId='.concat(id) +'&listSmsLotsEnvoye.sms.clientId='.concat(this.clientId))
       .then((response) => {
        dataRes = {
          status: true,data: response.data['hydra:member'],
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };
  
  /**
   * @argument data doit contenir l'id de la route et l'id de la licence qu'il a choisit et la quantite d'sms
   */
  getrouteListSmsLotEnvoyeForAllPaysAction = async () => {
    let dataRes= { status: true ,data:[]};

    await api
      .get('/api/route_list_sms_lots_envoyes?listSmsLotsEnvoye.sms.clientId='.concat(this.clientId))
       .then((response) => {
        dataRes = {
          status: true,data: response.data['hydra:member'],
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };


  /**
   * @argument data doit contenir l'id de la route et l'id de la licence qu'il a choisit et la quantite d'sms
   */
  getrouteListSmsLotEnvoyeForFilterAction = async (filter) => {
    let dataRes= { status: true ,data:[]};

    await api
      .get('/api/route_list_sms_lots_envoyes?'.concat(filter))
       .then((response) => {
        dataRes = {
          status: true,data: response.data['hydra:member'],
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };

  
  getListSmsContactAction = async (filter) => {
    let dataRes= { status: true ,data:[]};

    await api
      .get('/api/list_sms_contacts?'.concat(filter))
       .then((response) => {
        dataRes = {
          status: true,data: response.data['hydra:member'],
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };


   
  getConsommationSmsAction = async () => {
    let dataRes= { status: true, data: [] };

    let listData = [];
    const payss = await this.getPaysAction();
        //  let lsC = await this.getListSmsContactAction('contact.clientId='.concat(this.clientId));
      const rlseAll = await this.getrouteListSmsLotEnvoyeForAllPaysAction();


    for (let index = 0; index < payss.data.length; index++) {
    
      const pays = payss.data[index];
    
      const lsa = await this.getListSmsAcheteForPaysAction(pays.routes[0].id);

 let nmbSmsAchete = 0;
        for (let j = 0; j < lsa.data.length; j++) {
        nmbSmsAchete = nmbSmsAchete + lsa.data[j]['quantite'];
    
      }
      const rlse = await this.getrouteListSmsLotEnvoyeForPaysAction(pays.routes[0].id);
      // let nmbSmsTotalRoute = 0;
      // for (let k = 0; k < rlsa.data.length; k++) {
  
      // nmbSmsTotalRoute = nmbSmsTotalRoute +  (rlsa.data[k]['listSmsLotsEnvoye']['listSmsContacts'] ? rlsa.data[k]['listSmsLotsEnvoye']['listSmsContacts'].length :0);
    
      // }
      let taux = (rlse.data.length / rlseAll.data.length) * 100;
      taux = taux || 0;
      let final = {
        nomPays: pays.nom,
        nbreSms: isNaN(nmbSmsAchete) ?0 :nmbSmsAchete,
        taux:Math.round( taux) ,
        
      }
   //console.log(rlse.data.length);

   //console.log(rlseAll.data.length);

      //console.log(final);
      
      listData.push(final)
      
    }

    dataRes = {
      status: true, data: listData
    };
      //console.log('dsssdddsdsd');
    //console.log(dataRes);
    return dataRes
  };
   

   
   
  getConsommationSmsParMoisAction = async () => {
    let dataRes= { status: true, data: [] };

    let listData = ref([]);
         var nmbre = ref(0);

    // let awaitData;
    await api
      .get('/api/list_sms_lots_envoyes?sms.clientId='.concat(this.clientId))
       .then((response) => {
         let saveDate = ref('00');
         for (let i = 0; i < response.data['hydra:member'].length; i++) {
           const lsle = response.data['hydra:member'][i];
           const nbreContact = lsle['listSmsContacts'].length;
           let dateEnvoi = lsle['dateCreated'].split('-')[1];
          
           if (dateEnvoi == saveDate.value) {
             
            //  //console.log('oooo',nbreContact)
             nmbre.value = nbreContact + nmbre.value;
          //  //console.log('nbreContact', nmbre.value);
           }
           else {
             saveDate.value = dateEnvoi;
          
             listData.value.push({
               nbreContact: nmbre.value,
               dateEnvoi: dateEnvoi
             });
             
            //  //console.log('.....***')
           }

           if (listData.value.length == 0) {
            //  //console.log('iciiiiiiiiiiiiiiiiiiiii')
             
              listData.value.push({
               nbreContact: nmbre.value,
               dateEnvoi: dateEnvoi
             }); 
           }
         }
        //console.log('conso ***listData***********************');
      //console.log(listData.value);
          dataRes = {
          status: true,
          data: listData.value,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };
   
   
  getTransactionParMoisChartAction = async () => {
    let dataRes= { status: true, data: [] };

    let listData = ref([]);
         var nmbre = ref(0);

    // let awaitData;
    await api
      .get('/api/transaction_comptes?status=1&clientId='.concat(this.clientId))
       .then((response) => {
         let saveDate = ref('00');
         for (let i = 0; i < response.data['hydra:member'].length; i++) {
           const transaction = response.data['hydra:member'][i];
        
           let dateEnvoi = transaction['dateCreate'].split('-')[0]+ transaction['dateCreate'].split('-')[1];
          
          //  //console.log(dateEnvoi)
           if (listData.value.length == 0) {
            //  //console.log('iciiiiiiiiiiiiiiiiiiiii')
             
             listData.value.push({
               nbreTrans: nmbre.value,
               dateEnvoi: dateEnvoi
             });
             saveDate.value = dateEnvoi;

           }
           else {
             if (dateEnvoi == saveDate.value) {
               nmbre.value = nmbre.value + 1;
               //
             }
             else {
             
               for (let j = 0; j < listData.value.length; j++) {
                 
                // //console.log(listData.value[j].dateEnvoi == dateEnvoi)
                 if (listData.value[j].dateEnvoi == dateEnvoi) {
                      //  //console.log('....AA.***',listData.value[j].nbreTrans)
                   listData.value[j].nbreTrans = listData.value[j].nbreTrans + 1;
                      //  //console.log('....bb.***',listData.value[j].nbreTrans)

                   break;
                   
                 } else {
                   listData.value.push({
                     nbreTrans: nmbre.value,
                     dateEnvoi: dateEnvoi
                   });
                   break;
                    
                 }
             
               }
                  saveDate.value = dateEnvoi;
               
             }
           }
         
         }
        //  //console.log('listData***********************');
        //  //console.log(listData.value);
          dataRes = {
          status: true,
          data: listData.value,
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };
   

  /**
   * 
   * @param {*} type  type 0  all , type 1 depot, type 2 retrait
   * @returns 
   */
  getListTransactionUser= async (type) => {
    let dataRes= { status: true ,data:[]};
    let filter = '';
    if (type == 1) {
  filter ='typeTransaction.id=1'
} else if (type == 2) {
  filter ='typeTransaction.id=2'
} else {
  filter =''
}
//console.log('fil*****************',type,filter)
    await api
      .get('/api/transaction_comptes?status=1&'.concat(filter)+'&clientId='.concat(this.clientId))
       .then((response) => {
        dataRes = {
          status: true,
          data: response.data['hydra:member'],
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };


  
  /**
   * 
   * @param {*} type  type 0  all , type 1 depot, type 2 retrait
   * @returns 
   */
   getListCommissionUser = async () => {
     let dataRes = { status: true, data: [] };
     
     await api
       .post('/transaction/commission',{'clientId' : this.clientId})
       .then((response) => {
        dataRes = {
          status: true,
          data: response.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };

  /**
   * 
   * @param {*} type  type 0  all , type 1 depot, type 2 retrait
   * @returns 
   */
  getListFactureUser= async () => {
    let dataRes= { status: true ,data:[]};
     
    await api
      .post('/facture/read',{keySecret:  VueCookies.get('keySecret')})
       .then((response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };


  getUserAction = async () => {
     
    let dataRes  = { status: true, data: [] };

if (store.state.user == null) {

    await api
      .get('/api/clients/'.concat(this.clientId))
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data ,
        };
    
   mapMutations(["getUser" ]),
   
 mapActions(["updateUser"])
       store.commit('getUser',  response.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    }
else {
  dataRes = {
          status: true,
          data:  store.state.user,
        };
    }
  //console.log(dataRes)
    return dataRes;
  };

  pathUserAction = async (data , connected) => {
    let dataRes = { status: true };
    //console.log(data);
    await api
      .patch('/update/profil/client', data, {
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
      })
      .then((response) => {
        if (connected == 0) {
          api.defaults.headers.common['Authorization'] =
            'Bearer ' + String(response.data.token);
          VueCookies.set('token', String(response.data.token));
          VueCookies.set('refreshToken', String(response.data.refreshToken));
          this.decode = jwt_decode(String(response.data.token));
          VueCookies.set('nom', String(this.decode.nom));
          VueCookies.set('prenom', String(this.decode.prenom));
          VueCookies.set('phone', String(this.decode.phone));
           VueCookies.set('firstConnexion', String(this.decode.firstConnexion));
   mapMutations(["getUser" ]),
   
 mapActions(["updateUser"])
       store.commit('getUser', this.decode)
        dataRes = {
          status: true,
        };
        }
        
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  pathRoleAction = async (data ) => {
    let dataRes = { status: true };
    //console.log(data);
    await api
      .patch('/update/role/client', data, {
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
      })
      .then((response) => {
        
          api.defaults.headers.common['Authorization'] =
            'Bearer ' + String(response.data.token);
          VueCookies.set('token', String(response.data.token));
          VueCookies.set('refreshToken', String(response.data.refreshToken));
          this.decode = jwt_decode(String(response.data.token));
          VueCookies.set('nom', String(this.decode.nom));
          VueCookies.set('prenom', String(this.decode.prenom));
          VueCookies.set('phone', String(this.decode.phone));
    
        
   mapMutations(["getUser" ]),
   
 mapActions(["updateUser"])
       store.commit('getUser', this.decode)
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

  pathPasswordAction = async (data ) => { 
    let dataRes  = { status: true };
    //console.log(data);
    await api
      .patch('/update/password/client', data, {
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
      })
      .then((/* response */) => {
        // api.defaults.headers.common['Authorization'] =
        //   'Bearer ' + String(response.data.token);
        // VueCookies.set('token', String(response.data.token));
        // VueCookies.set('refreshToken', String(response.data.refreshToken));
        // this.decode = jwt_decode(String(response.data.token));
        // VueCookies.set('nom', String(this.decode.nom));
        // VueCookies.set('prenom', String(this.decode.prenom));
        // VueCookies.set('phone', String(this.decode.phone));

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
  
  pathPasswordActionX = async (data ) => { 
    let dataRes  = { status: true };
    //console.log(data);
    await api
      .patch('/update/password/client', data, {
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
      })
      .then(( response ) => {
       

        dataRes = {
          status: true,
          data:response.data
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  
   
  getStateSendingSmsAction = async () => {
    let dataRes= { status: true, data: [] };

// if (store.state.trancheSms == null) {


    await api
      .post('/state/sendingsms', { 'clientId': this.clientId })
      .then((response) => {
       
        dataRes = {
          status: true,
          data:response.data.data,
        };
        
        
//    mapMutations(["gettrancheSms" ]),
   
//  mapActions(["updatetrancheSms"])
//        store.commit('gettrancheSms',  response.data.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
  // }
// else {
//   dataRes = {
//           status: true,
//           data:  store.state.trancheSms,
//         };
//     }
    return dataRes;
  };


  getProjetAction = async (id) => {
    
    let dataRes= { status: true, data: [] };

    await api
      .get('/api/projets/'.concat(id))
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data,
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
  newProjetAction = async (data) => {
    
    let dataRes= { status: true, data: [] };

    await api
      .post('/projet/new', data)
      .then((response) => {
       
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
        }else{
 dataRes = {
          status: true,
          data: response.data,
        };
        }
      })
      .catch(() => {
        dataRes = {
          aff:true,
          status: false,
          data: [],
        };
      });
    return dataRes;
  };

  regenerateProjetApiKeyAction = async (data) => {
    
    let dataRes= { status: true, data: [] };

    await api
      .post('/projet/refresh', data)
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data,
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
  getListProjetAction = async () => { 
        let dataRes  = { status: true, data: [] };
 
    
    await api
      .post("/projet/read",{keySecret:  VueCookies.get('keySecret')})
      .then((response) => {

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

   
  getLSAAction = async () => {
    let dataRes = { status: true, data: [] };
    const dataFinal = [];
    let LSA = { id: '0', date: '', pays: '', quantite: '', status: true };
    await api
      .get('/api/list_s_m_s_achettes?facture.clientId='.concat(this.clientId))
      .then(async (response) => {
       
        for (let i = 0; i < response.data['hydra:member'].length; i++) {
          
          const paysNom = await this.getPaysFromRouteAction(
            
            response.data['hydra:member'][i].routeId
          );

          
          LSA = {
            
            id: response.data['hydra:member'][i]['id'],
            date: formatDate(
              
              
              new Date(response.data['hydra:member'][i]['date']),0
            ),
            pays: paysNom.data,
            
            quantite: response.data['hydra:member'][i]['quantite'],
            
            status: response.data['hydra:member'][i]['status'],
          };
          dataFinal.push(LSA);
        }
        dataRes = {
          status: true,
          data:dataFinal,
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
   
  getPaysFromRouteAction = async (idRoute) => {
    let dataRes = { status: true, data: '' };

    await api
      .get('/api/pays?routes='.concat(idRoute))
      .then((response) => {
        dataRes = {
          status: true,
          
          data: response.data['hydra:member'][0]['nom'],
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: '',
        };
      });

    return dataRes;
  };
  newMessageAction = async (data ) => {
   let dataRes  = { status: true, data: [] };

    await api
      .post('/sendSmsApi', data)
      .then((response) => {
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
       
          dataRes = {
            status: false, aff: false,
            id: '0',
          };
        } else {
        
          dataRes = {
            status: true,
            data: response.data,
          };
          mapMutations(["getlistSenderIdSms"]),
   
            mapActions(["updateSenderIdSms"])
          store.commit('getlistSenderIdSms', null)
        }
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
   *Format Data =>   {"senderId":"MOUAfo","codePhone":"237","destinataire":["690863838","690863839"]}  
   * **/
  getValidDestAction = async (data ) => {
   let dataRes  = { status: true, data: [] };

    await api
      .post('/exception/senderIdContact/verif', data)
      .then((response) => {
        dataRes = {
          status: true,
          destinataire: response.data.destinataire,
          excepte: response.data.excepte,
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
  newCalendarAction = async (data ) => {
   let dataRes  = { status: true, data: [] };

    await api
      .post('/calendrier/new', data)
      .then((response) => {
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
       
          dataRes = {
            status: false, aff: false,
            id: '0',
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    return dataRes;
  };
  
  getCalendarAction = async ( ) => {
   let dataRes  = { status: true, data: [] };

    await api
      .post('/calendrier/read', {'keySecret' : this.keySecret})
      .then((response) => {
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
   getRolesAction = async () => {
      let dataRes  = { status: true, data: [] };

    await api
      .get('/api/roles')
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data['hydra:member'],
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    return dataRes; 
  }
  
   getRolesUAction = async () => {
      let dataRes  = { status: true, data: [] };

    await api
      .post('/role/readu',{'keySecret' : this.keySecret})
      .then((response) => {
        dataRes = {
          status: true,
          data: response.data.data ,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    return dataRes; 
  }
 
   getListGroupeUser = async () => {
     let dataRes = { status: true, data: [] };
     
if (store.state.listGroupe == null) {
     await api
       .post('/groupe/read',{'keySecret' : this.keySecret})
       .then((response) => {
        dataRes = {
          status: true,
          data: response.data.data,
         };
         mapMutations(["getGroupeUser"]),
   
 mapActions(["updateGroupeUser"])
       store.commit('getGroupeUser', response.data.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      }); }
else {
  dataRes = {
          status: true,
          data:  store.state.listGroupe,
        };
    }//console.log(dataRes)
    return dataRes;
  };
  
  
   newGroupeUser = async (data) => {
     let dataRes = { status: true, data: [] };
     
     await api
       .post('/groupe/new',data)
       .then((response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
        mapMutations(["getGroupeUser" ]),
   
 mapActions(["updateGroupeUser"])
         store.commit('getGroupeUser',null)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };
  
   addContactToGroupeUser = async (data) => {
     let dataRes = { status: true, data: [] };
     
     await api
       .post('/groupe/addContact',data)
       .then((response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };

  
  getActionContactForGroupA = async (groupeId) => {
      let dataRes = { status: true, data: [] };
     
    await api
      .get('/api/list_groupe_contacts?groupeContact='.concat(groupeId))
      .then((response) => {
let datF =ref([])
        for (var i = 0; i < response.data['hydra:member'].length; i++){
          datF.value.push(response.data['hydra:member'][i]['contact'])
             console.log('dsdsddsdsd',datF.value,)
        }

     
        dataRes = {
          status: true,
          data:datF.value,
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
   getListContactUser = async () => {
     let dataRes = { status: true, data: [] };
if (store.state.listContact == null) {
     
     await api
       .post('/contact/read',{'keySecret' : this.keySecret})
       .then((response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };

         mapMutations(["getContact" ]),
   
 mapActions(["updateContact"])
         store.commit('getContact', response.data.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });}
else {
  dataRes = {
          status: true,
          data:  store.state.listContact,
        };
    }
    return dataRes;
  };
   newContactUser = async (data) => {
     let dataRes = { status: true, data: [] };
     
     await api
       .post('/contact/new',data)
       .then((response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
            mapMutations(["getContact" ]),
   
 mapActions(["updateContact"])
         store.commit('getContact',null)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };

  getActionContactForGroup = async (groupeId) => {
    let dataRes  = { status: true, data: [] };

    await api
      .get('/api/list_groupe_contacts?groupeContact.id='.concat(groupeId))
      .then((response) => {
        dataRes = {
          status: true,
          data:  response.data['hydra:member'],
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

   pathContactUser = async (data) => {
     let dataRes = { status: true, data: [] };
     
     await api
       .post('/contact/modify',data)
       .then((response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };
  getTypeNotificationAction = async () => {
   
    let dataRes = { status: true, data: [] };

    await api
      .get('/api/type_notifications')
      .then((response) => {
        dataRes = {
          status: true,
          data:response.data['hydra:member'],
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
   * @argument data doit contenir l'id du client,l'id du type de notification qu'il a choisit, le message
   */
  makeNotificationAction = async (data) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/api/notifications', data)
      .then((response) => {
        dataRes = {
          status: true,
          id: response.data['@id'],
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };






  
  getListtypeVitrine = async () => {
   
    let dataRes = { status: true, data: [] };

    await api
      .get('/api/type_vitrines')
      .then((response) => {
        dataRes = {
          status: true,
          data:response.data['hydra:member'],
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
 
  newVitrineUser = async (data) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/vitrine/new', data)
      .then((response) => {
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
          dataRes = {
            status: false,
            aff: false,
            data: [],
          };
        } else {
          dataRes = {
            status: true,
           
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };
  deletteVitrineUser = async (idVitrine) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/vitrine/delette', {keySecret:  VueCookies.get('keySecret'), 'idVitrine':idVitrine })
      .then((response) => {
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
          dataRes = {
            status: false,
            aff: false,
            data: [],
          };
        } else {
          dataRes = {
            status: true,
            
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
   };
   stateVitrineUser = async (idVitrine) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/vitrine/state', {keySecret:  VueCookies.get('keySecret'), 'idVitrine':idVitrine })
      .then((response) => {
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
          dataRes = {
            status: false,
            aff: false,
            data: [],
          };
        } else {
          dataRes = {
            status: true,
            
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };






   
  verifyVitrine = async (data) => {
      let dataRes  = {statusR:true, status: true, id: '' };

    await api
      .post('/vitrine/verify/exist', data)
      .then((response) => {
        dataRes = {
          statusR: true,
          status: response.data['status'],
          
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          statusR: false,
          id: '',
        };
      });
    return dataRes;
  };
  verifyTemplateVitrine = async (data) => {
      let dataRes  = {statusR:true, status: true, id: '' };

    await api
      .post('/vitrine/template/exist', data)
      .then((response) => {
        dataRes = {
          statusR: true,
          status: response.data['status'],
          
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          statusR: false,
          id: '',
        };
      });
    return dataRes;
  };

/**
 * envoi id vitrine object et la nouvelle image
 */
  uploadTemplate = async (nom,logo,fileU) => {
      let dataRes  = { status: true, id: '' };
    let file = new FormData();
     
    if (logo == null) {
       dataRes = {
          status: false,
          id: '',
      };
        return dataRes;
    }   if (fileU == null) {
       dataRes = {
          status: false,
          id: '',
      };
        return dataRes;
    } if (nom == null) {
         dataRes = {
          status: false,
          id: '',
        };
          return dataRes;
    }
    file.append('file', fileU)
           file.append('logo', logo)
         file.append('nom', nom)  
       
         
          //console.log('*****----*************')
    await api
      .post('/vitrine/template/new', file,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
      .then((response) => {
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
         
        };
       } else if(response.status == 201) {
         dataRes = {
           status: true,
         
         } };
      
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };

   
 
  updateVitrineUser = async (data) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/vitrine/update', data)
      .then(() => {
        dataRes = {
          status: true,
        
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };

/**
 * envoi id section pour activer ou desactiver
 */
  sectionUpdate = async (data) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/section/update', data)
      .then((response) => {
        dataRes = {
          status: true,
          id: response.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };


/**
 * envoi id section pour ajouter
 */
  sectionUpdateC = async (data) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/section/contact/add', data)
      .then(async(response) => {
     dataRes = {
          status: true,
          id: response.data,
        };   
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };



/**
 * envoi id section pour ajouter
 */
  sectionUpdateF = async (data, file) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/section/upload/add', data)
      .then(async(response) => {
    await this.ObjectUpdate(response.data['id'],null,   file)
       
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };


/**
 * envoi id vitrine object et la nouvelle image
 */
  ObjectUpdate = async (idContenu,idVitrine,image) => {
      let dataRes  = { status: true, id: '' };
    let file = new FormData();
      const myNewFile = new File([image], image.name.replace(/\s/g, '').trim(), { type: image.type });
          file.append('file', myNewFile);
          
    if (idVitrine != null) {
      file.append('idVitrine', idVitrine)
    } if (idContenu != null) {
       file.append('contenu', idContenu)
    }
         
          
       
         
          //console.log('*****----*************')
    await api
      .post('/api/vitrine_objects', file,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
      .then((response) => {
        dataRes = {
          status: true,
          id: response.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };

   

  
//         async upload(image,title,description,sms) {

//       let dataRes  = { status: true, id: '' };
//  //console.log( image)
//  //console.log( 'image')
//           let file = new FormData()
//           file.append('file', image)
//           //console.log( image, file)
//           await api.post('/api/publication_objects', file,
//             {
//               headers: {
//                 'Content-Type': 'multipart/form-data'
//               }
//             })
//             .then(async(response) => {
             
//               let data = {
//                 publicationObject: response.data['@id'],
//                 title:title,
//                 description:description,
//                 sms:sms
//               };

//           await api.post('/api/publications', data,
//             )
//             .then(response => {
//                dataRes = {
//           status: true,
//           id: response.data['@id'],
//         };
//             })
//             .catch(() => {
//                dataRes = {
//           status: false,
//           id: '',
//         };
//             })
//             })
//             .catch(() => {
//                dataRes = {
//           status: false,
//           id: '',
//         };
//             })

//     return dataRes;

//         }
/**
 * voir backend
 */
  sectionModifyContenu = async (data) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/section/modifyContains', data)
      .then((response) => {
        dataRes = {
          status: true,
          id: response.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };
  
   getListVitrineUser = async () => {
     let dataRes = { status: true, data: [], length:0 };
     
     await api
       .post('/vitrine/read',{'keySecret' : this.keySecret})
       .then((response) => {
        dataRes = {
          status: true,
          data: response.data.data,
          length: response.data.data.length,
         };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[], length:0
        };
      });
    return dataRes;
  };    getListNotif= async () => {
     let dataRes = { status: true, data: [], length:0 };
     
     await api
       .post('/notifications/read',{'keySecret' : this.keySecret})
       .then((response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        
         };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[], length:0
        };
      });
    return dataRes;
  };   getVitrineUserSelect = async (vitrine) => {
     let dataRes = { status: true, data: [], length:0 };
     
     await api
       .post('/vitrine/user',{'vitrine' :  vitrine, propio : '1'})
       .then((response) => {
        dataRes = {
          status: true,
          data: response.data,
         
         };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[], length:0
        };
      });
    return dataRes;
  };
  
  changeThemeVitrine = async (idVitrine,idTheme) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/vitrine/theme/update', { theme: idTheme, idVitrine:idVitrine ,'keySecret' : this.keySecret}    )
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
         
        };
       } else if(response.status == 201) {
         dataRes = {
           status: true,
         
         } };
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };
        async upload(image,title,description,sms,category) {

      let dataRes  = { status: true, id: '' };
 //console.log( image)
 //console.log( 'image')
          let file = new FormData()
       const myNewFile = new File([image], image.name.replace(/\s/g, '').trim(), { type: image.type });
          file.append('file', myNewFile);
         
          //console.log( image, file)
          await api.post('/api/publication_objects', file,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
            .then(async(response) => {
             
              let data = {
                publicationObject: response.data['@id'],
                title:title,
                description:description,
                sms:sms,categoryProduit: category,
              };

          await api.post('/api/publications', data,
            )
            .then(response => {
               dataRes = {
          status: true,
          id: response.data['@id'],
        };
            })
            .catch(() => {
               dataRes = {
          status: false,
          id: '',
        };
            })
            })
            .catch(() => {
               dataRes = {
          status: false,
          id: '',
        };
            })

    return dataRes;

        }

        async uploadUserImage(image,type ) {
 let dataRes  = { status: true, filePath: '' };
          let file = new FormData();
          // console.log( image .name.replace(/\s/g, '').trim())
          const myNewFile = new File([image], image .name.replace(/\s/g, '').trim(), { type: image.type });
          file.append('file', myNewFile);
          file.append('id', this.clientId)
          file.append('type', type)
        
          //console.log(file)
    await api
      .post('/api/client_objects', file,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
      .then((response) => {
        dataRes = {
          status: true,
          filePath: response.data.filePath,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          filePath: '',
        };
      });
          return dataRes;
        }

     async getListPubNew(clef)   {
    let dataRes= { status: true ,data:[]};
     

    await api
      .post('/publications/read',{clef:clef})
      .then((response) => {
        

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
    
  getListTransactionUserNew= async () => {
    let dataRes= { status: true ,yesterday:[],toDay:[],all:[]};
   
    await api
      .post('/transaction/read',{'keySecret' : this.keySecret})
       .then((response) => {
        dataRes = {
          status: true,
          yesterday: response.data.yesterday,
          toDay: response.data.toDay,
          all: response.data.all,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
   };
   
  getListTransactionUserAccount= async (typeCompte) => {
    let dataRes= { status: true ,data:[]};
   
    await api
      .post('/transaction/account/read',{'keySecret' : this.keySecret,'typeCompte':typeCompte})
       .then((response) => {
        dataRes = {
         status: true ,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data:[]
        };
      });
    return dataRes;
  };

   
  getInfoSms = async (id ) => {
    
    let dataRes  = { status: true, data: [] };
    let data = {
  'idSms':id
}
    await api
      .post('/sms/examiner', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else if(response.status == 201) {
         dataRes = {
           status: true,
           data: response.data.data ,
         } };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      });
    return dataRes;
  };
   
 ExaminerInfoSms = async (data ) => {
    
    let dataRes  = { status: true, data: [] };
    
    await api
      .post('sms/datas/examiner', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else if(response.status == 201) {
         dataRes = {
           status: true,
           data: response.data.data ,
         } };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      });
    return dataRes;
  };

  
     async getListSmsSenderIdAction()   {
    let dataRes= { status: true ,data:[]};
    
if (store.state.listSenderIdSms == null) {



    await api
      .post('/smssender/read',{keySecret:  VueCookies.get('keySecret')})
      .then((response) => {
        

        dataRes = {
          status: true,
          data: response.data ,
       
        };
    
   mapMutations(["getlistSenderIdSms" ]),
   
 mapActions(["updateSenderIdSms"])
       store.commit('getlistSenderIdSms',  dataRes)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    }
else {
  dataRes =   store.state.listSenderIdSms
        ;
    }
       
   
      // //console.log('rest', dataRes)
    return dataRes;
  };
  getSmsAction = async () => {
    let dataRes= { status: true, data: [] };
 
    await api
      .post('/sms/read',{keySecret:  VueCookies.get('keySecret')})
      .then((response) => {
       
        dataRes = {
          status: true,
          data:response.data.data,
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


    systemCreditAction = async (data) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/system/credit', data)
      .then((response) => {
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
          dataRes = {
            status: false,
            aff: false,
            data: [],
          };
        } else {
          dataRes = {
            status: true,
            
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };
  
    systemAskCreditAction = async (data) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/system/credit/ask', data)
      .then((response) => {
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
          dataRes = {
            status: false,
            aff: false,
            data: [],
          };
        } else {
          dataRes = {
            status: true,
            
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
  };
  
    systemValidateCreditAction = async (data) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/system/credit/validate', data)
      .then((response) => {
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
          dataRes = {
            status: false,
            aff: false,
            data: [],
          };
        } else {
          dataRes = {
            status: true,
            
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '', aff: true,
        };
      });
    return dataRes;
  };

    systemReadCreditAction = async ( ) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/system/credit/read',{keySecret:  this.keySecret}  )
      .then((response) => {
           
 dataRes = {
          status: true,
          data: response.data.data,
        };
                 
      })
      .catch(() => {
        dataRes = {
          status: false,
          id: '',
        };
      });
    return dataRes;
   };

    reinitialiseAction = async (data ) => {
      let dataRes  = { status: true, id: '' };

    await api
      .post('/forgot/password',data )
      .then((response) => {
           if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
          dataRes = {
            status: false,
            aff: false,
            data: [],
          };
        } else {
         
 dataRes = {
          status: true,
          data: response.data,
        };
        } 
                 
      })
      .catch(() => {
        dataRes = {
          status: false,
            aff: true,
          id: '',
        };
      });
    return dataRes;
   };

   
  bestUsedAction = async () => { 
    let dataRes  = { status: true, bests: [],
          bestc:  [], };
 

    await api
      .get('/best/use')
      .then((response) => {
        dataRes = {
          status: true,
          bests:  response.data.bests,
          bestc:  response.data.bestc,
        };
   
      })
      .catch(() => {
        dataRes = {
          status: false,
        bests: [],
          bestc:  [],
        };
      });
        return dataRes;

   
}


  getPositionAction = async () => { 
    let dataRes  = { status: true, bests: [],
          bestc:  [], };
 

    await axios
      .get('https://ipapi.co/json/')
      .then((response) => {
        dataRes = response.data;
   
      })
      .catch(() => {
        dataRes = {
        
        };
      });
console.log(dataRes)
    
        return dataRes['ip'];
   
}


   
   newConnexionUser = async () => {
    let ip = await  this. getPositionAction ()
let data  ={
  clientId: this.clientId,
  userAgent:window.navigator.userAgent,
  ip: ip
}
    await api
      .post('/client/connexion', data)
      .then(() => {
       
      })
      .catch(() => {
        
      });
    return ;
  };

   
  getModelAction = async (  ) => {
    
    let dataRes  = { status: true, data: [] };
if (store.state.listModel == null) {
 let data =
      {
        keySecret: VueCookies.get('keySecret'),

        

      }
    await api
      .post('/modelsms/read', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else {
         dataRes = {
           status: true,
           data: response.data.data,
         }
         mapMutations(["getlistModel"]),
   
            mapActions(["updatelistModel"])
          store.commit('getlistModel', response.data.data) };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      }); }
else {
  dataRes = {
          status: true,
          data:  store.state.listModel,
        };
    }
    return dataRes;
   };
   
  deleteModelAction = async (data ) => {
    
    let dataRes  = { status: true, data: [] };

    await api
      .post('/modelsms/delete', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else {
         dataRes = {
           status: true,
           data: response.data.data,
         },
           mapMutations(["getlistModel"]),
   
            mapActions(["updatelistModel"])
          store.commit('getlistModel', response.data.data)  };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      });
    return dataRes;
  };
  desableModelAction = async (data ) => {
    
    let dataRes  = { status: true, data: [] };

    await api
      .post('/modelsms/statuschange', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else {
         dataRes = {
           status: true,
           data: response.data.data,
         } , mapMutations(["getlistModel"]),
   
            mapActions(["updatelistModel"])
          store.commit('getlistModel', response.data.data)  };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      });
    return dataRes;
   };
   updateModelAction = async (data) => {
    
    let dataRes  = { status: true, data: [] };

    await api
      .post('/modelsms/update', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else {
         dataRes = {
           status: true,
           data: response.data.data,
         } , mapMutations(["getlistModel"]),
   
            mapActions(["updatelistModel"])
          store.commit('getlistModel', response.data.data) };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      });
    return dataRes;
  }; newModelSmsAction = async (data ) => {
    
    let dataRes  = { status: true, data: [] };

    await api
      .post('/modelsms/add', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else {
         dataRes = {
           status: true,
           data: response.data.data,
         }, mapMutations(["getlistModel"]),
   
            mapActions(["updatelistModel"])
          store.commit('getlistModel', response.data.data)  };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      });
    return dataRes;
  };

  getlistMailVitrine  = async ( ) => {
    
    let dataRes  = { status: true, data: [] };

 
if (store.state.listSmsVitrine == null) {
 let data =
      {
        keySecret: VueCookies.get('keySecret'),

        

      }
    await api
      .post('/mail/vitrine/read', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else {
         dataRes = {
           status: true,
           data: response.data.data,
         }
         mapMutations(["getListSmsVitrine"]),
   
            mapActions(["updateListSmsVitrine"])
          store.commit('getListSmsVitrine', response.data.data) };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      }); }
else {
  dataRes = {
          status: true,
          data:  store.state.listSmsVitrine,
        };
    }
    return dataRes;
  };

   mailResponseAction = async (data ) => {
    
    let dataRes  = { status: true, data: [] };

    await api
      .post('/mail/response', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else {
         dataRes = {
           status: true,
           data: response.data.data,
         }, mapMutations(["getListSmsVitrine"]),
   
            mapActions(["updateListSmsVitrine"])
          store.commit('getListSmsVitrine', null)  };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      });
    return dataRes;
  };
   newMailAction = async (data ) => {
    
    let dataRes  = { status: true, data: [] };

    await api
      .post('/mail/new', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else {
         dataRes = {
           status: true,
           data: response.data,
         }, mapMutations(["getMail"]),
   
            mapActions(["updateMail"])
          store.commit('getMail', null)  };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      });
    return dataRes;
  };
  
  getlistMail   = async ( ) => {
    
    let dataRes  = { status: true, data: [] };

 
if (store.state.listMail == null) {
 let data =
      {
        keySecret: VueCookies.get('keySecret'),

        

      }
    await api
      .post('/mail/read', data)
      .then((response) => {
       if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
           dataRes = {
          status: false,
          aff:false,
          data: [],
        };
       } else {
         dataRes = {
           status: true,
           data: response.data.data,
         }
         mapMutations(["getMail"]),
   
            mapActions(["updateMail"])
          store.commit('getMail', response.data.data) };
      })
      .catch(() => {
        dataRes = {
          status: false,
          aff:true,
          data: [],
        };
      }); }
else {
  dataRes = {
          status: true,
          data:  store.state.listMail,
        };
    }
    return dataRes;
   };
   



   
  getConfigMailAction = async () => {
    let dataRes= { status: true,data:[] };
 
if (store.state.configMail == null) {



    await api
      .post('/mail/config/read',{keySecret:  VueCookies.get('keySecret')})
      .then((response) => {
        

        dataRes = {
          status: true,
           data: response.data.data,
        };
    
   mapMutations(["getConfigMail" ]),
   
 mapActions(["updatConfigMail"])
       store.commit('getConfigMail',  response.data.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    }
else {
  dataRes = {
          status: true,
          data:  store.state.configMail ,
        };
    }
       
    return dataRes;
  };

   
  newConfigAction = async (data) => {
    let dataRes= { status: true,data:[] };
  
  await api
      .post('/mail/config/new',data)
      .then((response) => {
        

        dataRes = {
          status: true,
          data: response.data.data,
        };
    
   mapMutations(["getConfigMail" ]),
   
 mapActions(["updatConfigMail"])
       store.commit('getConfigMail',  response.data.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
   
    return dataRes;
  };
  updateConfgiMailAction = async (data) => {
    let dataRes= { status: true,data:[] };
  
  await api
      .post('/mail/config/update',data)
      .then((response) => {
        

        dataRes = {
          status: true,
        data: response.data.data,
        };
    
   mapMutations(["getConfigMail" ]),
   
 mapActions(["updatConfigMail"])
       store.commit('getConfigMail',  response.data.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
   
    return dataRes;
  };
 activateConfigAction = async (data) => {
    let dataRes= { status: true,data:[] };
  
  await api
      .post("/mail/config/activate",data)
      .then((response) => {
        

        dataRes = {
          status: true,
       data: response.data.data,
        };
    
   mapMutations(["getConfigMail" ]),
   
 mapActions(["updatConfigMail"])
       store.commit('getConfigMail',  response.data.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
   
    return dataRes;
  };
   

   
  getlistSenderAction = async () => {
    let dataRes= { status: true,data:[] };
 
if (store.state.listSenderId == null) {



    await api
      .post('/senderId/read',{keySecret:  VueCookies.get('keySecret')})
      .then((response) => {
        

        dataRes = {
          status: true,
           data: response.data.data,
        };
    
   mapMutations(["getlistSenderId" ]),
   
 mapActions(["updateSenderId"])
       store.commit('getlistSenderId',  response.data.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    }
else {
  dataRes = {
          status: true,
          data:  store.state.listSenderId ,
        };
    }
       
    return dataRes;
  };

   sendDemandActivateSenderID = async (data) => {
    let dataRes= { status: true,data:[] };
  
  await api
      .post("/senderId/verif",data)
      .then((response) => {
        
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
          dataRes = {
            status: false,
            aff: false,
            data: [],
          };
        } else {
          dataRes = {
            status: true,
              data: response.data.data ?? store.state.listSenderId,
          }
   mapMutations(["getlistSenderId" ]),
   
 mapActions(["updateSenderId"])
       store.commit('getlistSenderId',  response.data.data ?? store.state.listSenderId)
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
   
    return dataRes;
  };
   chagerEtatDemandeAction = async (data) => {
    let dataRes= { status: true,data:[] };
  
  await api
      .post("/senderId/state",data)
      .then((response) => {
        
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
          dataRes = {
            status: false,
            aff: false,
            data: [],
          };
        } else {
          dataRes = {
            status: true,
      data: response.data.data ?? store.state.listSenderId,
          }
   mapMutations(["getlistSenderId" ]),
   
 mapActions(["updateSenderId"])
       store.commit('getlistSenderId',  response.data.data ?? store.state.listSenderId)
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
   
    return dataRes;
  };
   
   deletteDemandeAction = async (data) => {
    let dataRes= { status: true,data:[] };
  
  await api
      .post("/senderId/delette",data)
      .then((response) => {
        
        if (response.status == 203) {
          this.toast.error(response.data['message'], {
            // override the global option
            position: "bottom"
          });
          dataRes = {
            status: false,
            aff: false,
            data: [],
          };

           
        } else {
                  dataRes = {
          status: true,
           data:response.data.data ?? store.state.listSenderId,
        };
    
   mapMutations(["getlistSenderId" ]),
   
 mapActions(["updateSenderId"])
       store.commit('getlistSenderId', response.data.data ?? store.state.listSenderId)
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
   
    return dataRes;
  };
   

  
 async getLicenceAction1 ()  {
    let dataRes;
if (store.state.listLicence == null) {

    await api
      .get('/licence/sms/read')
      .then((response) => {
        dataRes = {
          status: true,
          data:response.data.data ,
        };
            
   mapMutations(["getlistLicence" ]),
   
 mapActions(["updatelistLicence"])
       store.commit('getlistLicence', response.data.data )
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      }); }
else {
  dataRes = {
          status: true,
          data:  store.state.listLicence,
        };
    }
    return dataRes;
  };


   
  newProduitAction = async (data) => {
    let dataRes= { status: true,data:[] };
  
  await api
      .post('/produit/new',data,    {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
      .then((response) => {
        

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

   
  
     async getListcatp()   {
    let dataRes= { status: true ,data:[]};
    
if (store.state.listCategoryProduit == null) {



    await api
      .get('/category/read')
      .then((response) => {
        

        dataRes = {
          status: true,
          data: response.data.data,
        };
    
   mapMutations(["getlistCatProduit"]),
   
 mapActions(["updatelistCatProduit"])
       store.commit('getlistCatProduit',  response.data.data)
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    }
else {
  dataRes = {
          status: true,
          data:  store.state.listCategoryProduit,
        };
    }
       
   
      // //console.log('rest', dataRes)
    return dataRes;
  };
  
   
 async getLicenceAction2 ()  {
    let dataRes;
// if (store.state.listLicence == null) {

    await api
      .get('/licence/readAdmin')
      .then((response) => {
        dataRes = {
          status: true,
          data:response.data.data ,
        };
            
//    mapMutations(["getlistLicence" ]),
   
//  mapActions(["updatelistLicence"])
//        store.commit('getlistLicence', response.data.data )
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      }); /* }
else {
  dataRes = {
          status: true,
          data:  store.state.listLicence,
        };
    } */
    return dataRes;
  };
 async getTypeLicenceAction ()  {
    let dataRes; 
    await api
      .get('/api/type_licences')
      .then((response) => {
        dataRes = {
          status: true,
          data:response.data['hydra:member'] ,
        };
       
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      }); /* }
else {
  dataRes = {
          status: true,
          data:  store.state.listLicence,
        };
    } */
    return dataRes;
  };

}
 