import { AUTH_LOG_OUT_USER, AUTH_SET_CURRENT_USER } from './types';
import axios from 'axios';

const logout = () => ({
	type: AUTH_LOG_OUT_USER
});

export const setLoggedInUser = (user) => ({
	type: AUTH_SET_CURRENT_USER,
	payload: user
});

const logOutUser = () => (dispatch) => {
	localStorage.removeItem('token');
	delete axios.defaults.headers['Authorization'];
	dispatch(logout());
};

export default logOutUser;
