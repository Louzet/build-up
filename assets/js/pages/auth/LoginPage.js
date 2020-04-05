import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { login } from './../../actions/users'

import '../../../css/login.css'

import AuthApi from '../../api/AuthApi'
import MaterialField from '../../components/form/MaterialField'
import MaterialCheckboxField from '../../components/form/MaterialCheckboxField'

const LoginPage = (props) => {
	const [user, setUser] = useState({
		email: '',
		password: '',
		remember: false,
	})

	const [errors, setErrors] = useState({
		email: '',
		password: '',
	})

	const [failed, setFailed] = useState({
		code: '',
		message: '',
	})

	const handleSubmit = async (event) => {
		event.preventDefault()
		login(user)

		// try {
		// 	await AuthApi.login(user)

		// 	setErrors('')
		// 	setFailed({})

		// 	props.history.push('/')
		// } catch (error) {
		// 	const { violations } = error.response.data

		// 	if (violations) {
		// 		const apiErrors = {}
		// 		violations.forEach((violation) => {
		// 			apiErrors[violation.propertyPath] = violation.message
		// 		})

		// 		setErrors(apiErrors)
		// 	}
		// 	if (error.response.data.code == 401) {
		// 		let msg = {
		// 			...failed,
		// 			code: error.response.data.code,
		// 			message: 'vos identifiants sont incorrects',
		// 		}
		// 		setFailed(msg)
		// 	}
		// }
	}

	const handleChange = (event) => {
		const target = event.target
		const value = target.name === 'remember' ? target.checked : target.value
		const name = target.name
		setUser({ ...user, [name]: value })

		// const target = event.target
		// const name = target.name
		// if (target.type === 'checkbox' && target.checked) {
		// 	value = 1
		// } else {
		// 	value = 0
		// }
		// const value = target.value

		// setUser({ ...user, [name]: value })
	}

	return (
		<div className="pt-10">
			{failed.message.length > 0 ? (
				<div
					className="flex flex-row justify-between items-center bg-red-100 border-l-8 border-t border-b border-r border-red-400 text-red-700 p-5 rounded relative w-5/6 xs:w-5/6 sm:w-1/2 md:w-1/2 lg:w-4/12 mx-auto"
					role="alert"
				>
					<span className="block text-sm sm:inline">
						<strong className="font-bold underline mr-2">Error: </strong>
						{failed.message}
					</span>
					<span>
						<svg
							className="fill-red ml-4 h-6 w-6 text-red-500"
							role="button"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<title className="ml-3">Close</title>
							<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
						</svg>
					</span>
				</div>
			) : null}
			<div className="flex flex-row justify-center items-center w-5/6 xs:w-5/6 sm:w-1/2 md:w-1/2 lg:w-4/12 mx-auto border border-indigo-800 rounded pt-10">
				<form method="POST" onSubmit={handleSubmit} className="w-full rounded-lg">
					<MaterialField
						type="email"
						label="Email"
						name="email"
						value={user.email}
						onChange={handleChange}
						error={errors.email}
						placeholder="john@doe.fr"
					/>
					<MaterialField
						type="password"
						label="Mot de passe"
						name="password"
						value={user.password}
						onChange={handleChange}
						error={errors.password}
						placeholder="********"
					/>
					<div>
						<MaterialCheckboxField
							name="remember"
							label="Se souvenir de moi"
							id="remember"
							checked={user.remember}
							onChange={handleChange}
						/>
					</div>
					<br />
					<div className="form-group">
						<button
							className="block w-full py-2 cursor-pointer px-4 mt-1 border rounded text-gray-200 bg-indigo-800 hover:text-white hover:bg-indigo-900 border-gray-500 font-semibold sm:mt-0"
							type="submit"
						>
							Connexion
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	users: state.userReducer.users,
})

export default connect(mapStateToProps, { login })(LoginPage)
