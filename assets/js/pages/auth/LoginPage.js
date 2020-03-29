import React, { Component, useState } from 'react'
import Field from '../../components/form/Field'

import AuthApi from '../../api/AuthApi'
import MaterialField from '../../components/form/MaterialField'

const LoginPage = (props) => {
	const [user, setUser] = useState({
		username: '',
		password: '',
		remember: false,
	})

	const [errors, setErrors] = useState({
		username: '',
		password: '',
		remember: '',
	})

	const handleSubmit = async (event) => {
		event.preventDefault()

		try {
			await AuthApi.login(user)
			setErrors('')
			props.history.push('/')
		} catch (error) {
			const { violations } = error.response.data

			if (violations) {
				const apiErrors = {}
				violations.forEach((violation) => {
					apiErrors[violation.propertyPath] = violation.message
				})

				setErrors(apiErrors)
			}
		}
	}

	const handleChange = (event) => {
		const target = event.target
		const name = target.name
		const value = target.type === 'checkbox' ? target.checked : target.value

		setUser({ ...user, [name]: value })
	}

	return (
		<div className="p-10">
			<div className="flex flex-row justify-center items-center pt-16">
				<form onSubmit={handleSubmit} className="rounded-lg">
					<MaterialField
						type="text"
						label="Email"
						name="username"
						value={user.username}
						onChange={handleChange}
						error={errors.username}
						placeholder=""
						required
					/>
					<MaterialField
						type="password"
						name="password"
						value={user.password}
						onChange={handleChange}
						error={errors.password}
						placeholder="******************"
						required
					/>
					<div>
						<label className="inline-flex items-center" htmlFor="remember">
							<input
								type="checkbox"
								name="remember"
								className="form-checkbox"
								id="remember"
								onChange={handleChange}
								checked={user.remember}
							/>
							<span className="ml-2">se souvenir de moi</span>
						</label>
					</div>
					<br />
					<div className="form-group">
						<button className="block w-full py-2 px-4 mt-1 border rounded text-gray-800 border-gray-800 font-semibold hover:bg-gray-600 hover:text-white sm:mt-0">
							Connexion
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginPage
