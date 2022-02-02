import { actionTypes } from './actionTypes';
import axios from 'axios';

export const userLoginAction = (username, password) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.USER_LOGIN_REQUEST });
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // };
        const data = await axios.post(
            'http://localhost:1337/user/authentification',
            { username, password }
        );
        // localStorage.setItem('user', JSON.stringify(data.data));
        dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({
            type: actionTypes.USER_LOGIN_FAIL,
            payload: error.response.data,
        });
    }
};
