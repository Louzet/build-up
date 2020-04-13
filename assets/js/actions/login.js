import axios from 'axios';
import { API_URL } from './../config';
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
		.post(`${API_URL}/login_check`, { email, password })
		.then((response) => {
			localStorage.setItem('token', response.data.token);
			// set axios default header with token
			axios.defaults.headers['Authorization'] = 'Bearer ' + response.data.token;
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
