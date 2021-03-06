import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Componests/RequireAuth/Loading';

const BuyNow = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [qty, setQty] = useState(0);
    const navigate = useNavigate();

    // fetch data
    useEffect(() => {
        fetch(`https://ih-electronics.herokuapp.com/item/${id}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setTool(data);
                setQty(data.minQty);
            });
    }, [id]);

    if (loading) {
        return <Loading />
    }

    const { _id, name, price, img, availableQty, minQty, desc } = tool || {};
    const onSubmit = event => {
        event.preventDefault();
        const totalPrice = parseFloat(price) * qty;
        const phone = event.target.phone.value;
        const address = event.target.address.value;

        const order = {
            email: user.email,
            name: user.displayName,
            itemName: name,
            itemId: _id,
            itemPrice: price,
            img: img,
            qty: qty,
            paid: false,
            status: "unpaid",
            phone,
            address,
            totalCost: totalPrice
        };

        fetch("https://ih-electronics.herokuapp.com/order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                navigate(`/paynow/${result.insertedId}`)
            })
    }
    return (
        <>
            <div className="container mx-auto">
                <h4 className="text-[25px] font-bold dark:text-white">{user?.displayName}</h4>
                <h5 className="text-[22px] font-bold dark:text-white">{user?.email}</h5>
                <div className="my-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="rounded-lg shadow-lg p-3 dark:bg-white">
                        <div className="w-3/4 mx-auto h-[250px] mb-2">
                            <img src={img} alt="Tool Image" className='w-full h-full rounded-lg' />
                        </div>
                        <h4 className="text-[22px] font-bold">Name: {name}</h4>
                        <p className="text-[20px] font-medium">price: ${price}</p>
                        <p className="text-[20px] font-medium">Minimum Order Quantity: {minQty} unit</p>
                        <p className="text-[20px] font-medium">Available Quantity: {availableQty} unit</p>
                        <p className="text-[18px] font-normal">Description: {desc}</p>
                    </div>
                    <div className="rounded-lg shadow-lg p-3 dark:bg-white">
                        <form className='px-0 md:px-3 lg:px-5' onSubmit={onSubmit}>
                            <input type="number" name="qty" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" placeholder='Enter Item Quantity' onChange={(e) => setQty(e.target.value)} value={qty} min={minQty} max={availableQty} required />

                            {
                                parseInt(qty) < parseInt(minQty) &&
                                <p className="text-[20px] text-red-500 font-medium">
                                    Please Order Minimum {minQty} Quantity
                                </p>
                            }
                            {
                                parseInt(availableQty) < parseInt(qty) &&
                                <p className="text-[20px] text-red-500 font-medium">
                                    Please Order Maximum {availableQty} Quantity
                                </p>
                            }

                            <input type="number" name="phone" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" placeholder='Enter Your Phone Number' required />

                            <input type="text" name="address" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" placeholder='Enter Your Address' required />

                            <button disabled={(parseInt(qty) < parseInt(minQty) || (parseInt(availableQty) < parseInt(qty)))} type='submit' className="my-2 py-2 px-3 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md">Order Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuyNow;