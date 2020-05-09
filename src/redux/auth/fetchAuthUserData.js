import axios from 'axios';
import qs from 'query-string';
import { fetchDataError, fetchDataPreload, fetchDataSuccess } from './actions';

const url = 'http://localhost:8080/users/login';

export const fetchAuthUserData = (username, password) => {
    const loginUserCredentials = {
        username,
        password,
    };

    return async (dispatch) => {
        dispatch(fetchDataPreload());
        try {
            let response = await axios.post(
                url,
                qs.stringify(loginUserCredentials)
            );
            const data = response.data;
            dispatch(fetchDataSuccess(data));
            // token here
            localStorage.setItem('token', data.token);
            console.log('RESPONSE INSIDE FUNCTION');
            console.log(response);
            return response;
        } catch (e) {
            dispatch(fetchDataError());
            // show login error
        }
    };
};
