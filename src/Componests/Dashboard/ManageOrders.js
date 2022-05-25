import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [countUpdateStatus, setCountUpdateStatus] = useState(0);

    // get all orders
    useEffect(() => {
        fetch("http://localhost:5000/allOrders", {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [countUpdateStatus]);

    // update order status
    const handleStatus = (id) => {
        fetch(`http://localhost:5000/shipped/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setCountUpdateStatus(countUpdateStatus + 1));
    }

    return (
        <>
            <h4 className="dark:text-white text-[22px] font-medium">Manage Orders</h4>

            <div className="my-3 overflow-x-auto">
                <table className="table-auto border-collapse border-2 border-slate-400 w-full dark:text-white">
                    <thead>
                        <tr>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'></th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Customer Name</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Email</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Item Name</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Quantity</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Total Amount</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Status</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* show all orders */}
                        {
                            orders?.map((order, index) => <tr key={index}>
                                <th className='border md:border-2 border-slate-300 md:py-1 md:px-2 text-center'>{index + 1}</th>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    {order?.name}
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    {order?.email}
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    {order?.itemName}
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    {order?.qty}
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    ${order?.totalCost}
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    {order?.status}
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    {/* add status update button */}
                                    {
                                        order?.status === "pending" &&
                                        <button onClick={() => handleStatus(order?._id)} disabled={order?.status !== "pending"} className="my-2 py-2 px-3 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md">Shipped </button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageOrders;