import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Componests/RequireAuth/Loading';

const SideBar = ({ myUser, user }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [admin, adminLoading] = useAdmin(user);

    if (adminLoading) {
        return <Loading />
    }

    return (
        <>
            {/* add menu toggle button for phone */}
            {
                menuOpen ? <FontAwesomeIcon onClick={() => setMenuOpen(!menuOpen)} icon={faXmark} className='w-[30px] h-[30px] lg:hidden inline dark:text-white' /> :
                    <FontAwesomeIcon onClick={() => setMenuOpen(!menuOpen)} icon={faBars} className='w-[30px] h-[30px] lg:hidden inline dark:text-white' />
            }
            <div className={`bg-black lg:bg-transparent absolute w-full ${menuOpen ? "block" : "hidden"} lg:relative lg:block`}>
                <ul className="text-black dark:text-white text-[22px] font-semibold">
                    <li className="py-3 text-center rounded-lg">
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "font-bold bg-orange-500 py-2 px-5 rounded-lg" : ""}>My Profile</NavLink>
                    </li>

                    {/* just for normal user */}
                    {myUser?.role === "user" &&
                        <>
                            <li className="py-3 text-center rounded-lg">
                                <NavLink to="/dashboard/myorders" className={({ isActive }) => isActive ? "font-bold bg-orange-500 py-2 px-5 rounded-lg" : ""}>My Orders</NavLink>
                            </li>
                            <li className="py-3 text-center rounded-lg">
                                <NavLink to="/dashboard/addreview" className={({ isActive }) => isActive ? "font-bold bg-orange-500 py-2 px-5 rounded-lg" : ""}>Add A Review</NavLink>
                            </li>
                        </>
                    }
                    {/* just for normal user */}

                    {/* just for admin */}
                    {admin && <>
                        <li className="py-3 text-center rounded-lg">
                            <NavLink to="/dashboard/additem" className={({ isActive }) => isActive ? "font-bold bg-orange-500 py-2 px-5 rounded-lg" : ""}>Add Item</NavLink>
                        </li>
                        <li className="py-3 text-center rounded-lg">
                            <NavLink to="/dashboard/manageOrders" className={({ isActive }) => isActive ? "font-bold bg-orange-500 py-2 px-5 rounded-lg" : ""}>Manage Orders</NavLink>
                        </li>
                        <li className="py-3 text-center rounded-lg">
                            <NavLink to="/dashboard/manageItems" className={({ isActive }) => isActive ? "font-bold bg-orange-500 py-2 px-5 rounded-lg" : ""}>Manage Items</NavLink>
                        </li>
                        <li className="py-3 text-center rounded-lg">
                            <NavLink to="/dashboard/manageUser" className={({ isActive }) => isActive ? "font-bold bg-orange-500 py-2 px-5 rounded-lg" : ""}>Manage User</NavLink>
                        </li>
                    </>}
                    {/* just for admin */}
                </ul>
            </div>
        </>
    );
};

export default SideBar;