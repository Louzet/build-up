import axios from 'axios';
import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from './types';

const loginLoading = (payload) => ({
	type: LOGIN_LOADING,
	payload
});

const loginError = (payload) => ({
	type: LOGIN_ERROR,
	payload
});

const loginSuccess = (payload) => ({
	type: LOGIN_SUCCESS,
	payload
});

const login = (email, password) => (dispatch) => {
	dispatch(loginLoading(true));
	return axios
		.post('/api/login_check', { email, password })
		.then((response) => {
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('user', JSON.stringify(response.data.user));
			dispatch(loginLoading(false));
			dispatch(loginSuccess(response.data));
		})
		.catch((error) => {
			dispatch(loginLoading(false));
			if (error.response) {
				return dispatch(loginError(error.response.data));
			}
			return dispatch(
				loginError({
					error: { message: 'Server unreachable for the moment' }
				})
			);
		});
};

export default login;
