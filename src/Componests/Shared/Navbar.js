import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.jpg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="w-full container mx-auto">
                <nav className="flex items-center py-2 justify-between px-1">
                    <div>
                        <Link to="/" className='flex items-center'>
                            <img src={logo} alt="logo" className='w-[30px] h-[30px]' />
                            <h3 className="text-[20px] lg:text-[25px] text-blue-400  font-bold pl-2">IH Electronics</h3>
                        </Link>
                    </div>

                    <div>
                        {/* add open and closing menu icons for phone */}
                        {
                            menuOpen ? <FontAwesomeIcon onClick={() => setMenuOpen(!menuOpen)} icon={faXmark} className='w-[30px] h-[30px] lg:hidden inline' /> :
                                <FontAwesomeIcon onClick={() => setMenuOpen(!menuOpen)} icon={faBars} className='w-[30px] h-[30px] lg:hidden inline' />
                        }

                        <ul className={`text-[18px] lg:flex items-center lg:top-0 lg:relative font-semibold absolute duration-300 ease-in-out ${menuOpen ? "top-15 bg-black left-0 w-full text-left px-5 py-7 w-full block" : "top-[-300px] hidden"}`}>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black"} to="/">Home</NavLink>
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black"} to="/allitems">All Items</NavLink>
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black"} to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black"} to="/blogs">Blogs</NavLink>
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black"} to="/signin">Sign In</NavLink>
                            </li>
                        </ul>

                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;