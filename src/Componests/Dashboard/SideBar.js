import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            {/* add menu toggle button for phone */}
            {
                menuOpen ? <FontAwesomeIcon onClick={() => setMenuOpen(!menuOpen)} icon={faXmark} className='w-[30px] h-[30px] lg:hidden inline dark:text-white' /> :
                    <FontAwesomeIcon onClick={() => setMenuOpen(!menuOpen)} icon={faBars} className='w-[30px] h-[30px] lg:hidden inline dark:text-white' />
            }
            <div className={`absolute w-full ${menuOpen ? "block" : "hidden"} lg:relative lg:block`}>
                <ul className="text-white text-[22px] font-semibold bg-black">
                    <li className="py-3 text-center rounded-lg">
                        <NavLink to="/dashboard/myprofile" className={({ isActive }) => isActive ? "font-bold bg-orange-500" : ""}>My Profile</NavLink>
                    </li>

                    {/* just for normal user */}
                    <li className="py-3 text-center rounded-lg">
                        <NavLink to="/dashboard/myorders" className={({ isActive }) => isActive ? "font-bold bg-orange-500" : ""}>My Orders</NavLink>
                    </li>
                    <li className="py-3 text-center rounded-lg">
                        <NavLink to="/dashboard/addreview" className={({ isActive }) => isActive ? "font-bold bg-orange-500" : ""}>Add A Review</NavLink>
                    </li>
                    {/* just for normal user */}
                </ul>
            </div>
        </>
    );
};

export default SideBar;