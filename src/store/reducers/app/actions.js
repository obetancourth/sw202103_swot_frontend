import { set401Interceptor, privateAxios } from "../../utils/Axios";
export const initiatedApp = (dispatch) => {
  dispatch({type:"APP_INITIATING", payload:null});
  set401Interceptor(()=>{
    dispatch({type:"SECURITY_UNAUTHORIZED", payload:null});
  });
  //dispararUna accion que verifique si esta un Ping Autenticado
  privateAxios.get('/api/sec/ping')
    .then(r=>console.log(r))
    .catch(e=>console.log(e));

  setTimeout(()=>{
    dispatch({ type: "APP_LOADED", payload: null });
  }, 3000);
}
