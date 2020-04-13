import { AUTH_LOG_OUT_USER, AUTH_SET_CURRENT_USER } from './../actions/types';
import { LOGIN_SUCCESS } from './../actions/types';

import loginReducer from './loginReducer';

const initialState = {
	isAuthenticated: false,
	user: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !Object.keys(action.payload).length > 0 && action.payload.constructor === Object,
				user: action.payload
			};
		case AUTH_LOG_OUT_USER:
			return {
				...state,
				isAuthenticated: false,
				user: {}
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user
			};
		default:
			return {
				...state,
				login: loginReducer(state.login, action)
			};
	}
};

export default authReducer;
