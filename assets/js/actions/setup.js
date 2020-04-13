import axios from 'axios'
import jwtDecode from 'jwt-decode'

import { SETUP_SUCCESS, SETUP_FAILED } from './types'

export const setup = () => (dispatch) => {
	const token = window.localStorage.getItem('authToken')

	if (token) {
		const jwtData = jwtDecode(token)
		console.log(jwtData.exp, new Date().getTime())
		return dispatch(setupSuccess())
	}
	return dispatch(setupFailed())
}

export const setupSuccess = () => {
	return {
		type: SETUP_SUCCESS,
		token: token,
		tokenIsValid: true,
	}
}

export const setupFailed = () => {
	return {
		type: SETUP_FAILED,
		token: null,
		tokenIsValid: false,
	}
}
