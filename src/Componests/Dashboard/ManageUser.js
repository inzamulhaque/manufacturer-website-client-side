import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageUser = () => {
    const [users, setUsers] = useState([]);
    const [countUpdate, setCountUpdate] = useState([]);

    useEffect(() => {
        fetch("https://ih-electronics.herokuapp.com/users", {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [countUpdate]);

    const handleMakeAdmin = (id, name) => {
        fetch(`https://ih-electronics.herokuapp.com/users/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setCountUpdate(countUpdate + 1);
                Swal.fire(
                    'Create New Admin!',
                    `${name}`,
                    'success'
                );
            })
    }
    return (
        <>
            <h4 className="dark:text-white text-[22px] font-medium">Manage User</h4>

            <div className="my-3 overflow-x-auto">
                <table className="table-auto border-collapse border-2 border-slate-400 w-full dark:text-white">
                    <thead>
                        <tr>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'></th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Name</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Email</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={index}>
                                <th className='border md:border-2 border-slate-300 md:py-1 md:px-2 text-center'>{index + 1}</th>
                                <th className='border md:border-2 border-slate-300 md:py-1 md:px-2 text-center'>{user?.name}</th>
                                <th className='border md:border-2 border-slate-300 md:py-1 md:px-2 text-center'>{user?.email}</th>
                                <th className='border md:border-2 border-slate-300 md:py-1 md:px-2 text-center'>
                                    {
                                        user?.role !== "admin" && <button className="my-2 py-2 px-3 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md" onClick={() => handleMakeAdmin(user?._id, user?.name)}>Make Admin</button>
                                    }
                                    {
                                        user?.role === "admin" && <span className="text-[20px] font-bold">Admin</span>
                                    }
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageUser;