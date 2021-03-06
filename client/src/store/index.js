import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const userFromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

const initialState = {
    userLogin: { user: userFromLocalStorage },
    userRegister: {},
    userProfile: {},
};

export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);
