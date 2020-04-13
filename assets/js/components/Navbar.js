import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logOutUser, { logout } from './../actions/auth';
import { AuthMenu } from './menu/AuthMenu';
import { GuestMenu } from './menu/GuestMenu';

// stylesheets
require('../../css/components/Navbar.css');

const Navbar = ({ auth, logoutEvent }) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const handleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	let navStatus = isOpen ? 'block' : 'hidden';

	const handleLogout = () => {
		logoutEvent();
	};

	return (
		<header className="bg-white border-b-1 border-gray-400 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
			<div className="flex items-center justify-between px-4 py-3 sm:p-0">
				<div className="brand">
					<Link to="/" onClick={closeMenu} className="focus:outline-none">
						<h1 className="sm:text-xl md:text-2xl cursor-pointer uppercase font-extrabold text-gray-800">
							Build up
						</h1>
					</Link>
				</div>
				<div className="sm:hidden">
					<button
						type="button"
						onClick={handleMenu}
						className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
					>
						<svg className="h-6 w-6 fill-grey" viewBox="0 0 24 24">
							{isOpen ? (
								<path
									fillRule="evenodd"
									d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								/>
							) : (
								<path
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>
			{auth.isAuthenticated ? (
				<AuthMenu handleLogout={handleLogout} navStatus={navStatus} closeMenu={closeMenu} />
			) : (
				<GuestMenu navStatus={navStatus} closeMenu={closeMenu} />
			)}
		</header>
	);
};

Navbar.propTypes = {
	logoutEvent: PropTypes.func
};

const mapStateToProps = (state) => ({
	auth: state.authReducer
});

const mapDispatchToProps = (dispatch) => ({
	logoutEvent() {
		return dispatch(logOutUser());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
