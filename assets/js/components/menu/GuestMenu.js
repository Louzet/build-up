import React from 'react';
import { Link } from 'react-router-dom';

export const GuestMenu = ({ navStatus, closeMenu }) => {
	return (
		<nav>
			<ul className={'sm:flex sm:items-center sm:p-0 px-2 pt-2 pb-4 ' + navStatus}>
				<li className="block mb-2">
					<Link
						onClick={closeMenu}
						to="/registration"
						className="block py-1 px-2 mt-1 rounded leading-none text-sm text-gray-800 font-semibold no-underline hovering-a hover:text-red-700 sm:mt-0"
					>
						Inscription
					</Link>
				</li>
				<li className="block mb-2">
					<Link
						onClick={closeMenu}
						to="/login"
						className="block py-2 px-4 mt-1 border rounded text-gray-800 border-gray-800 font-semibold hover:bg-gray-600 hover:text-white sm:mt-0"
					>
						Connexion
					</Link>
				</li>
			</ul>
		</nav>
	);
};
