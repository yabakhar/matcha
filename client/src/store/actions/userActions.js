import {
    loginActionTypes,
    registerActionTypes,
    profileActionTypes,
} from "./actionTypes";
import axios from "axios";

export const userLoginAction = (username, password) => async (dispatch) => {
    try {
        dispatch({ type: loginActionTypes.USER_LOGIN_REQUEST });
        const data = await axios.post(
            "http://localhost:1337/user/authentification",
            { username, password }
        );
        // localStorage.setItem('user', JSON.stringify(data.data));
        localStorage.setItem("user", JSON.stringify(data.data));
        dispatch({
            type: loginActionTypes.USER_LOGIN_SUCCESS,
            payload: data.data,
        });
    } catch (error) {
        dispatch({
            type: loginActionTypes.USER_LOGIN_FAIL,
            payload: error.response.data,
        });
    }
};

export const userRegisterAction =
    (username, email, password) => async (dispatch) => {
        try {
            dispatch({ type: registerActionTypes.USER_REGISTER_REQUEST });
            const data = await axios.post("http://localhost:1337/user/signup", {
                username,
                email,
                password,
            });
            dispatch({
                type: registerActionTypes.USER_REGISTER_SUCCESS,
                payload: data.data,
            });
        } catch (error) {
            dispatch({
                type: registerActionTypes.USER_REGISTER_FAIL,
                payload: error.response.data,
            });
        }
    };

export const userProfileAction = (username, token) => async (dispatch) => {
    try {
        dispatch({ type: profileActionTypes.USER_PROFILE_REQUEST });
        console.log(username);

        const data = await axios.get(
            `http://localhost:1337/user/searshuser?username=${username}`,

            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        // console.log(data.data.result);
        dispatch({
            type: profileActionTypes.USER_PROFILE_SUCCESS,
            payload: data.data.result,
        });
    } catch (error) {
        dispatch({
            type: profileActionTypes.USER_PROFILE_FAIL,
            payload: error.response.data,
        });
    }
};
