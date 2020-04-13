import { combineReducers } from 'redux'
import userReducer from './userReducer'
import authReducer from './authReducer'
import setupReducer from './setupReducer'
import loginReducer from './loginReducer'

export default combineReducers({
	userReducer,
	authReducer,
	setupReducer,
	loginReducer,
})
