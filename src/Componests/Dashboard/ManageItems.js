import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageItems = () => {
    const [allItems, setAllItems] = useState([]);
    const [countDelete, setCountDelete] = useState(0);

    // get all items
    useEffect(() => {
        fetch("http://localhost:5000/item")
            .then(res => res.json())
            .then(data => setAllItems(data));
    }, [countDelete]);

    // handle delete
    const handleDelete = (id, name) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't be able to revert ${name}!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/item/${id}`, {
                    method: "DELETE",
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem('jotToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        setCountDelete(countDelete + 1);
                        Swal.fire(
                            'Deleted!',
                            `${name} has been deleted.`,
                            'success'
                        );
                    });
            }
        });
    }
    return (
        <>
            <h4 className="dark:text-white text-[22px] font-medium">Manage Items</h4>

            <div className="my-3 overflow-x-auto">
                <table className="table-auto border-collapse border-2 border-slate-400 w-full dark:text-white">
                    <thead>
                        <tr>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'></th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                Image
                            </th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Item Name</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Price</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Available Quantity</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Edit</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allItems?.map((item, index) => <tr key={item._id}>
                                <th className='border md:border-2 border-slate-300 md:py-1 md:px-2 text-center'>{index + 1}</th>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    <img src={item?.img} alt="item image" className="w-[30px] h-[30px] rounded-md mx-auto" />
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    {item?.name}
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    ${item?.price}
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    {item?.availableQty}
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    <Link className='text-[18px] font-normal text-blue-400' to={`/edit/${item?._id}`}>Edit</Link>{" / "}
                                    <Link className='text-[18px] font-normal text-blue-400' to={`/updateQty/${item?._id}`}>Update Quantity</Link>
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    <button className="py-2 px-3 rounded-lg shadow-md bg-red-500 border-2 border-red-500 duration-300 ease-in-out text-white hover:bg-transparent hover:text-red-500" onClick={() => handleDelete(item._id, item?.name)}>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageItems;