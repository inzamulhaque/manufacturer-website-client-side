import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useLogOut from '../../hooks/useLogOut';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [logOut] = useLogOut();
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const html = window.document.documentElement;
        html.classList.remove("light");
        html.classList.remove("dark");
        html.classList.add(theme);
        localStorage.setItem("theme", theme);

    }, [theme]);

    return (
        <>
            <header className="w-full container mx-auto">
                <nav className="flex items-center py-2 justify-between px-1">
                    <div>
                        <Link to="/" className='flex items-center'>
                            <img src={logo} alt="logo" className='w-[30px] h-[30px]' />
                            <h3 className="text-[20px] lg:text-[25px] text-blue-400  font-bold pl-2  dark:text-white">IH Electronics</h3>
                        </Link>
                    </div>

                    <div>
                        {/* add open and closing menu icons for phone */}
                        {
                            menuOpen ? <FontAwesomeIcon onClick={() => setMenuOpen(!menuOpen)} icon={faXmark} className='w-[30px] h-[30px] lg:hidden inline dark:text-white' /> :
                                <FontAwesomeIcon onClick={() => setMenuOpen(!menuOpen)} icon={faBars} className='w-[30px] h-[30px] lg:hidden inline dark:text-white' />
                        }

                        <ul className={`text-[18px] lg:flex items-center lg:top-0 lg:relative font-semibold absolute duration-300 ease-in-out ${menuOpen ? "top-15 bg-black left-0 w-full text-left px-5 py-7 w-full block" : "top-[-300px] hidden"}`}>
                            <li className="py-2 px-3 text-white lg:text-black dark:text-white">
                                D {theme === "dark" ? <FontAwesomeIcon icon={faToggleOff} onClick={() => setTheme("light")} /> : <FontAwesomeIcon icon={faToggleOn} onClick={() => setTheme("dark")} />} L
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black  dark:text-white"} to="/">Home</NavLink>
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/allitems">All Items</NavLink>
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/blogs">Blogs</NavLink>
                            </li>

                            {
                                user ? <>
                                    <li className="py-2 px-3">
                                        <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/dashboard">Dashboard</NavLink>
                                    </li>
                                    <li className="py-2 px-3">
                                        <button onClick={logOut} className="text-red-500">
                                            SignOut
                                        </button>
                                    </li>
                                </> : <li className="py-2 px-3">
                                    <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/signin">Sign In</NavLink>
                                </li>
                            }

                        </ul>

                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;