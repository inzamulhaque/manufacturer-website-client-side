import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    let { _id, name, price, img, availableQty, minQty, desc } = tool || {};

    const navigate = useNavigate();

    return (
        <>
            <div className='rounded-lg shadow-lg p-3 dark:bg-white'>
                <div className="w-full h-[250px] mb-2">
                    <img src={img} alt="Tool Image" className='w-full h-full rounded-lg' />
                </div>
                <h4 className="text-[22px] font-bold">Name: {name}</h4>
                <p className="text-[20px] font-medium">price: ${price}</p>
                <p className="text-[20px] font-medium">Minimum Order Quantity: {minQty} unit</p>
                <p className="text-[20px] font-medium">Available Quantity: {availableQty} unit</p>
                <p className="text-[18px] font-normal">Description: {
                    desc?.length > 30 ? <>
                        {desc.slice(0, 30)}
                        <span onClick={() => navigate(`/readmore/${_id}`)} className='text-[18px] font-medium cursor-pointer'> Read More...</span>
                    </> : desc
                }</p>

                <button className="my-2 py-2 px-3 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md">Buy Now</button>
            </div>
        </>
    );
};

export default Tool;