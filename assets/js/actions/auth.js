import { AUTH_LOG_OUT_USER, AUTH_SET_CURRENT_USER } from './types';

const logout = () => ({
	type: AUTH_LOG_OUT_USER
});

export const setLoggedInUser = (user) => ({
	type: AUTH_SET_CURRENT_USER,
	payload: user
});

const logOutUser = () => (dispatch) => {
	localStorage.removeItem('user');
	localStorage.removeItem('token');
	dispatch(logout());
};

export default logOutUser;
