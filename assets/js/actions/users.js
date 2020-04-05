import axios from 'axios'

import { GET_USERS, CREATE_USER } from './types'

// GET USERS
export const getUsers = () => (dispatch) => {
	axios
		.get('/api/members')
		.then((res) => {
			dispatch({
				type: GET_USERS,
				payload: res.data,
			})
		})
		.catch((err) => console.log(err))
}

// CREATE USER
export const createUser = (user) => (dispatch) => {
	axios
		.post('/api/members', user)
		.then((res) => {
			dispatch({
				type: CREATE_USER,
				payload: res.data,
			})
		})
		.catch((err) => console.log(err))
}
