import { set401Interceptor } from "../../utils/Axios";
export const initiatedApp = (dispatch) => {
  dispatch({type:"APP_INITIATING", payload:null});
  set401Interceptor(()=>{
    dispatch({type:"SECURITY_UNAUTHORIZED", payload:null});
  });
  //dispararUna accion que verifique si esta un Ping Autenticado
  setTimeout(()=>{
    dispatch({ type: "APP_LOADED", payload: null });
  }, 3000);
}
