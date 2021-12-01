import { combineReducers } from "redux";

// My Reducer 
import securityReducer from './security';
import swotReducer from './swot';

const rootReducer = combineReducers(
  {
    //All Reducers
    security: securityReducer,
    swot: swotReducer
  }
)

export default rootReducer;
