import { 
    USER_AUTHENTICATION_START,
    USER_AUTHENTICATION_SUCCESS, 
    USER_AUTHENTICATION_FAILURE } from './UserActionTypes';

export const user_authentication_start = () => ({
    type: USER_AUTHENTICATION_START
});

export const user_authentication_sucess = (res) => ({
    type: USER_AUTHENTICATION_SUCCESS,
    payload: res
});

export const user_authentication_fail = (error) => ({
    type: USER_AUTHENTICATION_FAILURE,
    payload: error
});