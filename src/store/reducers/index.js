import { combineReducers } from "redux";

// My Reducer 
import securityReducer from './security';

const rootReducer = combineReducers(
  {
    //All Reducers
    security: securityReducer,
  }
)

export default rootReducer;
