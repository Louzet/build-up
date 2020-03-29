import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

// stylesheets
require('../../css/components/Navbar.css')

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	let navStatus = isOpen ? 'block' : 'hidden'

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
			<nav>
				<ul className={'sm:flex sm:items-center sm:p-0 px-2 pt-2 pb-4 ' + navStatus}>
					<li className="block mb-2">
						<a
							href="#responsive-header"
							className="block px-2 py-1 rounded text-gray-800 font-semibold no-underline hovering-a hover:text-red-700 sm:mt-0"
						>
							Docs
						</a>
					</li>
					<li className="block mb-2">
						<a
							href="#responsive-header"
							className="block py-1 px-2 mt-1 rounded text-gray-800 font-semibold no-underline hovering-a hover:text-red-700 sm:mt-0"
						>
							Examples
						</a>
					</li>
					<li className="block mb-2">
						<a
							href="#responsive-header"
							className="block py-1 px-2 mt-1 rounded text-gray-800 font-semibold no-underline hovering-a hover:text-red-700 sm:mt-0"
						>
							Blog
						</a>
					</li>
					<li className="block mb-2">
						<Link
							onClick={closeMenu}
							to="/login"
							className="block py-1 px-2 mt-1 rounded text-gray-800 font-semibold hover:bg-gray-600 sm:mt-0"
						>
							Login
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
