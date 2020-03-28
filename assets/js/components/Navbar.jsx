import React, { Component } from 'react';

const Navbar = props => {
    return (
        <nav className="flex flex-no-wrap justify-between bg-white p-5">
            <div className="flex items-center flex-shrink-0 text-grey-darkest mr-6">
                {/* add logo here */}
                <span className="font-semibold text-xl tracking-tight text-shadow-md">Build up</span>
            </div>
            <div className="block lg:hidden">
                <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
                <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                    <span class="navicon bg-grey-darkest flex items-center relative"></span>
                </label>
            </div>
        </nav>
    )
}

export default Navbar;