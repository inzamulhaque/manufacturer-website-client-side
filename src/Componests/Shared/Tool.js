import React from 'react';
import slider1 from '../../images/slider1.jpg';

const Tool = () => {
    return (
        <>
            <div className='rounded-lg shadow-lg p-3'>
                <div className="w-full h-[250px] mb-2">
                    <img src={slider1} alt="Tool Image" className='w-full h-full rounded-lg' />
                </div>
                <h4 className="text-[22px] font-bold">Name:</h4>
                <p className="text-[20px] font-medium">price:</p>
                <p className="text-[20px] font-medium">Minimum Order Quantity:</p>
                <p className="text-[20px] font-medium">Available Quantity:</p>
                <p className="text-[18px] font-normal">description</p>

                <button className="my-2 py-2 px-3 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md">Buy Now</button>
            </div>
        </>
    );
};

export default Tool;