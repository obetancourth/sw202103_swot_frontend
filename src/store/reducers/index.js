import { combineReducers } from "redux";

// My Reducer 
import securityReducer from './security';
import swotReducer from './swot';
import appReducer from './app';

const rootReducer = combineReducers(
  {
    //All Reducers
    app: appReducer,
    security: securityReducer,
    swot: swotReducer
  }
)

export default rootReducer;
