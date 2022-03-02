import { combineReducers } from "redux";
import { userLoginReducer, registerRducer, profileRducer } from "./userReducer";
import completeProfileReducer from "./completeProfileReducer";

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: registerRducer,
    completeProfile: completeProfileReducer,
    userProfile: profileRducer,
});

export default rootReducer;
