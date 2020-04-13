import { GET_USERS, CREATE_USER, GET_USER, CONNECT_USER } from './../actions/types.js'

const initialState = {
	users: [],
}
export default function (state = initialState, action) {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload,
			}
		case GET_USER:
			return {
				...state,
				users: [action.payload],
			}
		case CREATE_USER:
			return {
				...state,
				users: [...state.users, action.payload],
			}
		case CONNECT_USER:
			return {
				...state,
				users: action.payload,
			}
		default:
			return state
	}
}
