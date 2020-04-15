import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUser } from './../../actions/users';

import Field from '../../components/form/Field';

import '../../../css/registration.css';

const RegistrationPage = ({ createUser }) => {
	const [ user, setUser ] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: ''
	});

	const [ errors, setErrors ] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: ''
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		createUser(user);

		// try {
		//     const response = await AuthApi.register(user);
		//     console.log(response);
		// } catch(error) {
		//     const { violations } = error.response.data;

		//     if (violations) {
		//         const apiErrors = {};
		//         violations.forEach(violation => {
		//             apiErrors[violation.propertyPath] = violation.message;
		//         });

		//         setErrors(apiErrors);
		//     }

		//     console.log(errors);
		// }
	};

	const handleChange = ({ currentTarget }) => {
		const { name, value } = currentTarget;
		setUser({ ...user, [name]: value });
	};

	return (
		<div>
			<div className="col-md-6 offset-md-3">
				<h1>Registration</h1>
				<div className="form-box">
					<form onSubmit={handleSubmit}>
						<Field
							type="text"
							label="Prénom : "
							name="firstname"
							value={user.firstname}
							onChange={handleChange}
							error={errors.firstname}
							required
						/>
						<Field
							type="text"
							label="Nom : "
							name="lastname"
							value={user.lastname}
							onChange={handleChange}
							error={errors.lastname}
							required
						/>
						<Field
							type="text"
							label="Email : "
							name="email"
							value={user.email}
							onChange={handleChange}
							error={errors.email}
							required
						/>
						<Field
							type="password"
							label="Mot de passe : "
							name="password"
							value={user.password}
							onChange={handleChange}
							error={errors.password}
							required
						/>

						<div className="row">
							<div className="col-md-7">
								<p className="text-conditions">
									By clicking Register, you agree on our <a href="#">terms and condition</a>.
								</p>
							</div>

							<div className="col-md-5">
								<div className="form-group">
									<button className="btn btn-primary btn-block">Register</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

RegistrationPage.propTypes = {
	createUser: PropTypes.func
};

export default connect(null, { createUser })(RegistrationPage);
