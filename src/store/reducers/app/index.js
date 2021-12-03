const initialState = {
  appInitiated: false,
  loading:false
}

const appReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type){
    case "APP_INITIATING":
      return {
        ...state,
        loading:false
      }
    case "APP_LOADED":
      return {
        appInitiated:true,
        loading:false
      }
    default:
      return state;
  }
}

export default appReducer;
