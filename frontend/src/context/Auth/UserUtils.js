import axios from 'axios';
import { 
    user_authentication_start,
    user_authentication_sucess,
    user_authentication_fail } from './UserActions';

export const loginWithEmail = async (email, password, dispatchUser) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });
    dispatchUser(user_authentication_start());
    try{
        const res = await axios.post(`http://localhost:8000/accounts/auth/jwt/create/`, body, config);
        dispatchUser(user_authentication_sucess(res))
    }
    catch(error){
        dispatchUser(user_authentication_fail(error))
    }
};

export const logout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');

};
