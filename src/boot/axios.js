 import { ApiManage } from './ApiManage.js' 


import axios from 'axios'
import { refreshAuthenticated } from './refreshAuthenticated.js';

// Vue.prototype.$axios = axios
// ^ ^ ^ this will allow you to use this.$axios
//       so you won't necessarily have to import axios in each vue file

const api = axios.create({ baseURL: new ApiManage().baseUrl });
// if (VueCookies.get('token') != undefined && VueCookies.get('token') != 'undefined') {
  
// api.defaults.headers.common['Authorization'] =   'Bearer ' + VueCookies.get('token')  ;
// }
// Vue.prototype.$api = api
// ^ ^ ^ this will allow you to use this.$api
//       so you can easily perform requests against your app's API

// Response interceptor for API calls
 
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    // console.log('ici.............');
   
    const originalRequest = error.config;
    if (
      (error.response.status === 403 || error.response.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      await refreshAuthenticated();
     
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);
 const delette = ()=>{
  delete axios.defaults.headers.common["Authorization"];
 }
export { axios, api,delette }
