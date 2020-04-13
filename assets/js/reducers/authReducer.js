import { AUTH_LOG_OUT_USER, AUTH_SET_CURRENT_USER } from './../actions/types';
import { LOGIN_SUCCESS } from './../actions/types';

import loginReducer from './loginReducer';
import { userData, isLoggedIn } from '../utils/userUtils';

const initialState = {
	isAuthenticated: false,
	user: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload
			};
		case AUTH_LOG_OUT_USER:
			return {
				...state,
				isAuthenticated: false,
				user: {}
			};
		case LOGIN_SUCCESS:
			let user = {};
			if (isLoggedIn()) {
				user = userData();
			}

			return {
				...state,
				isAuthenticated: true,
				user: user
			};
		default:
			return {
				...state,
				login: loginReducer(state.login, action)
			};
	}
};

export default authReducer;
