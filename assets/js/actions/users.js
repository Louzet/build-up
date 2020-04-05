import axios from 'axios'

import { GET_USERS, CREATE_USER, GET_USER, CONNECT_USER } from './types'

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

// GET ONLY ONE USER
export const getUser = (id) => (dispatch) => {
	axios
		.get(`/api/members/${id}`)
		.then((res) => {
			dispatch({
				type: GET_USER,
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

export const login = (user) => (dispatch) => {
	axios
		.post('/api/login_check', user)
		.then((res) => {
			dispatch({
				type: CONNECT_USER,
				payload: res.data,
			})
		})
		.catch((err) => console.log(err))
}
