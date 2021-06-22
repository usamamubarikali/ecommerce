import React, { createContext, useReducer } from 'react';
import {
    USER_AUTHENTICATION_START,
    USER_AUTHENTICATION_SUCCESS,
    USER_AUTHENTICATION_FAILURE,
    LOGOUT
} from './UserActionTypes';
import { logout } from './UserUtils';


export const User = createContext()

const UserContext = (props) => {

    const userReducer = (state, action) => {
        const { payload, type } = action;
        switch (type) {
            case USER_AUTHENTICATION_START:
                console.log("Authentication Start", state);
                return {
                    ...state,
                    userLoading: true,
                    isAuthenticated: false,
                    error: ""
                }
            case USER_AUTHENTICATION_SUCCESS:
                console.log("Authentication Success", state)
                return {
                    ...state,
                    access: payload.data.access,
                    refresh: payload.data.refresh,
                    isAuthenticated: true,
                    userLoading: false
                }
            case USER_AUTHENTICATION_FAILURE:
                console.log("Authentication Failed", state)
                return {
                    ...state,
                    isAuthenticated: false,
                    userLoading: false,
                    error: payload.response.data.detail
                }
            case LOGOUT:
                logout()
                return {
                    ...state,
                    isAuthenticated: false,
                    user: null,
                    refresh: "",
                    access: ""
                }
            default:
                return state
        }
    }

    const initialUser = {
        user: null,
        refresh: "",
        access: "",
        isAuthenticated: false,
        userLoading: false,
        error: ""
    }

    const [user, dispatchUser] = useReducer(userReducer, initialUser);

    return (
        <User.Provider value={{ user, dispatchUser }}>
            {props.children}
        </User.Provider>
    )
}

export default UserContext;