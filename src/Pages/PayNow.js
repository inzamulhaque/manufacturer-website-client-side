import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Componests/Payment/CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPEKEY);

const PayNow = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [id]);

    return (
        <>
            <div className="container mx-auto">
                <h4 className="dark:text-white text-[22px] font-bold">Hi! <span className="text-orange-500">{order.name}</span>,</h4>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* show order details */}
                    <div className="dark:bg-white rounded-lg shadow-xl my-2 py-2 px-3">
                        <div className="w-3/4 mx-auto h-[250px] mb-2">
                            <img src={order?.img} alt="Tool Image" className='w-full h-full rounded-lg' />
                        </div>
                        <h4 className="text-[22px] font-bold">Your Name: {order?.name}</h4>
                        <h5 className="text-[20px] font-bold">Your Email: {order?.email}</h5>
                        <h5 className="text-[20px] font-bold">Item Name: {order?.itemName}</h5>
                        <p className="text-[18px] font-medium">Price <span className="text-[16px] font-normal">(per unit)</span>: ${order?.itemPrice}</p>
                        <p className="text-[18px] font-medium">Quantity: {order?.qty}</p>
                        <p className="text-[18px] font-medium">Total Cost: ${order?.totalCost}</p>
                    </div>
                    <div className="dark:bg-white rounded-lg shadow-xl my-2 py-2 px-3">
                        {/* add checkout form for collect user card info */}
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayNow;