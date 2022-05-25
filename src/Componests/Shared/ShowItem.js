import React from 'react';

const ShowItem = ({ data }) => {
    return (
        <>
            <div className="dark:bg-white rounded-lg shadow-xl my-2 py-2 px-3">
                <div className="w-3/4 mx-auto h-[250px] mb-2">
                    <img src={data?.img} alt="Tool Image" className='w-full h-full rounded-lg' />
                </div>
                <h4 className="text-[22px] font-bold">Name: {data?.name}</h4>
                <p className="text-[18px] font-medium">Price <span className="text-[16px] font-normal">(per unit)</span>: ${data?.price}</p>
                <p className="text-[18px] font-medium">Available Order Qty: {data?.availableQty}</p>
                <p className="text-[18px] font-medium">Minimum Order Qty: {data?.minQty}</p>
                <p className="text-[18px] font-medium">{data?.desc}</p>
            </div>
        </>
    );
};

export default ShowItem;