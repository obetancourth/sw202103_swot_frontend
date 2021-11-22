const initialState = {
  loginAttempts : 0,
  isLogged:false,
  user:{}
};


const securityReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type){
    case "SEC_NEW_ATTEMPT":
      return {
        ...state,
        loginAttempts : state.loginAttempts+=1,
      };
    default:
      return state;
  }
}

export default securityReducer;
