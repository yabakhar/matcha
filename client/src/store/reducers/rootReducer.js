import { combineReducers } from "redux";
import { userLoginReducer, registerRducer } from "./userReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: registerRducer,
});

export default rootReducer;
