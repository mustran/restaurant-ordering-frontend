import {
    FETCH_DATA_ERROR,
    FETCH_DATA_PRELOAD,
    FETCH_DATA_SUCCESS,
    LOG_OUT_USER,
    LOGIN_TOGGLER,
} from './actions';

const initialState = {
    preload: false,
    username: '',
    token: [],
    isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_PRELOAD:
            return {
                ...state,
                preload: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                token: action.payload.token,
                preload: false,
                loggedIn: true,
            };
        case FETCH_DATA_ERROR:
            return {
                ...state,
                preload: false,
            };
        case LOG_OUT_USER:
            return {
                ...initialState,
            };
        case LOGIN_TOGGLER:
            return {
                ...initialState,
                isLoggedIn: !state.isLoggedIn,
            };
        default:
            return state;
    }
};

export const getUsername = (state) => state.auth.username;
export const getToken = (state) => state.auth.token;
export const getPreload = (state) => state.auth.preload;
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authReducer;
