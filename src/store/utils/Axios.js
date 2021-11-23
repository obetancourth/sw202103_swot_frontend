import axios from 'axios';

export const publicAxios = axios.create();
export const privateAxios = axios.create();

publicAxios.defaults.baseURL = process.env.REACT_APP_URL;
publicAxios.defaults.headers.common['cache-control'] = "no-cache";
publicAxios.defaults.headers.post['Content-Type'] = "application/json";
publicAxios.defaults.headers.put['Content-Type'] = "application/json";

privateAxios.defaults.baseURL = process.env.REACT_APP_URL;
privateAxios.defaults.headers.common['cache-control'] = "no-cache";
privateAxios.defaults.headers.post['Content-Type'] = "application/json";
privateAxios.defaults.headers.put['Content-Type'] = "application/json";

export const setJWT = (jwt) => {
  privateAxios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export const set401Interceptor = (handler) => {
  privateAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            handler();
            break;
          default:
            console.log(error);
        }
      } else {
        console.log(error)
      }
      return Promise.reject(error);
    }
  ); // end use
}
