import { SETUP_SUCCESS, SETUP_FAILED } from './../actions/types';

const initialState = {
	token: null,
	tokenIsValid: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SETUP_SUCCESS:
			return {
				token: action.token,
				tokenIsValid: action.tokenIsValid
			};
		case SETUP_FAILED:
			return {
				token: null,
				tokenIsValid: false
			};
		default:
			return state;
	}
}
