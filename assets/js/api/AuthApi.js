import axios from 'axios';
import jwt from 'jwt-decode';

function init() {
	const token = window.localStorage.getItem('AuthorizationToken');

	if (token) {
		const { exp: expiration } = jwt(token);

		if (expiration * 1000 > new Date().getTime()) {
			axios.defaults.headers['Authorization'] = 'Bearer ' + token;
			return true;
		}
		return false;
	}

	return false;
}

function register(user) {
	return axios.post('http://localhost:8001/api/members', user);
}

function login(user) {
	return axios.post('http://localhost:8001/api/login_check', user).then((response) => response.data).then((data) => {
		if (data.token) {
			token = data.token;

			window.localStorage.setItem('AuthorizationToken', token);

			axios.defaults.headers['Authorization'] = 'Bearer ' + token;

			return true;
		}
		return false;
	});
}

export default {
	init,
	register,
	login
};
