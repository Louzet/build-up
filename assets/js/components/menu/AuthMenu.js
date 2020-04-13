import React from 'react';
import { Link } from 'react-router-dom';

export const AuthMenu = ({ handleLogout, navStatus, closeMenu }) => {
	return (
		<nav>
			<ul className={'sm:flex sm:items-center sm:p-0 px-2 pt-2 pb-4 ' + navStatus}>
				<li className="block mb-2">
					<Link
						onClick={closeMenu}
						to="/profile"
						className="block py-2 px-4 mt-1 border rounded text-gray-800 border-gray-800 font-semibold hover:bg-gray-600 hover:text-white sm:mt-0"
					>
						Profile
					</Link>
				</li>
				<button
					onClick={handleLogout}
					className="block mb-2 py-2 px-4 mt-1 border rounded text-gray-800 border-gray-800 font-semibold hover:bg-gray-600 hover:text-white sm:mt-0"
				>
					Deconnexion
				</button>
			</ul>
		</nav>
	);
};
