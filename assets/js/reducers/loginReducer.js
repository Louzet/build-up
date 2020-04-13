import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from './../actions/types'

const initialState = {
	loading: false,
	error: '',
}

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGIN_LOADING:
			return {
				...state,
				loading: action.payload,
			}
		case LOGIN_ERROR:
			return {
				...state,
				error: action.payload,
			}
		default:
			return state
	}
}
