import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [countDelete, setCountDelete] = useState(0);
    const navigate = useNavigate();

    // get orders for this user
    useEffect(() => {
        fetch("https://ih-electronics.herokuapp.com/order", {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [countDelete]);

    // for delete order
    const handleDelete = (order) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't be able to revert ${order?.itemName}!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://ih-electronics.herokuapp.com/order?id=${order?._id}&itemId=${order?.itemId}&qty=${order?.qty}`, {
                    method: "DELETE",
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem('jotToken')}`
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        setCountDelete(countDelete + 1);
                        Swal.fire(
                            'Deleted!',
                            'Your order has been deleted.',
                            'success'
                        )
                    });
            }
        });
    }

    return (
        <>
            <h4 className="dark:text-white text-[22px] font-medium">My Orders</h4>

            <div className="my-3 overflow-x-auto">
                <table className="table-auto border-collapse border-2 border-slate-400 w-full dark:text-white">
                    <thead>
                        <tr>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'></th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                Image
                            </th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Item Name</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Per Unit Price</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Quantity</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Total Price</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Status</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Delivery Info.</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2 text-red-500'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={index}>
                                <th className='border md:border-2 border-slate-300 md:py-1 md:px-2 text-center'>{index + 1}</th>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    <img src={order?.img} alt="item image" className="w-[30px] h-[30px] rounded-md" />
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    {order?.itemName}
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    ${order?.itemPrice}
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
                                    {order?.phone}
                                    <br />
                                    {order?.address}
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    {order?.paid || <>
                                        <button className="my-2 py-2 px-2 text-[20px] font-medium bg-red-500 border-2 border-red-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-red-500 rounded-md" disabled={order?.paid} onClick={() => handleDelete(order)}>
                                            Cancel Order
                                        </button>
                                        <button className="my-2 py-2 px-2 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md" disabled={order?.paid} onClick={() => navigate(`/paynow/${order._id}`)}>
                                            Pay Now
                                        </button>
                                    </>}

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyOrder;