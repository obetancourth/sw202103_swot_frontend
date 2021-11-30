import { setJWT } from "../../utils/Axios";

const initialState = {
  loginAttempts : 0,
  isLogged:false,
  user:{},
  isFetching: false,
  errors: [],
  hasErrors: false
};

//setJWT on Init if found on localStorage
setJWT(localStorage.getItem("jwt_token")|| "");
initialState.user = JSON.parse(localStorage.getItem("user_data")) || {};
if (initialState.user?.email && true){
  initialState.isLogged = true;
}

const securityReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type){
    case "SEC_NEW_ATTEMPT":
      return {
        ...state,
        loginAttempts : state.loginAttempts+=1,
      };
    case "SEC_LOGIN_FETCH":
      return {
        ...state,
        isFetching: true,
      }
    case "SEC_LOGIN_SUCCESS":
      const {jwt, user} = payload;
      setJWT(jwt);
      localStorage.setItem("jwt_token", jwt);
      localStorage.setItem("user_data", JSON.stringify(user));
      return {
        ...state,
        user: user,
        isLogged : true,
        isFetching : false,
        hasErrors:false,
        errors:[]
      }
    case "SEC_LOGIN_ERROR":
      return {
        ...state,
        isFetching:false,
        hasErrors:true,
        errors : [payload],
        user:{},
        isLogged:false
      }
    case "SEC_SIGNIN_FETCH":
      return {
        ...state,
        isFetching: true,
        hasErrors: false,
        errors:[]
      }
    case "SEC_SIGNIN_SUCCESS":
      return {  
        ...state,
        isFetching: false,
        hasErrors: false,
        errors:[]
      }
    case "SEC_SIGNIN_ERROR":
      return {
        ...state,
        isFetching: false,
        hasErrors: true,
        errors: [payload]
      }
    default:
      return state;
  }
}

export default securityReducer;
