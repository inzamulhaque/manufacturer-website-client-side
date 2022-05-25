import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowItem from '../Shared/ShowItem';

const UpdateQty = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [updatedQty, setUpdatedQty] = useState(0);
    const [updated, setUpdated] = useState(0);

    // get item
    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                setData(result);
            });
    }, [id, updated]);

    // handle Remanufacture
    const handleRemanufacture = () => {
        const availableQty = parseInt(data?.availableQty) + parseInt(updatedQty);
        fetch(`http://localhost:5000/item/${data?._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            },
            body: JSON.stringify({ availableQty })
        })
            .then(res => res.json())
            .then(data => {
                setUpdatedQty(0);
                setUpdated(updated + 1);
            });
    }

    // handle Sell Off Line
    const handleSellOffLine = () => {
        const availableQty = parseInt(data?.availableQty) - parseInt(updatedQty);
        fetch(`http://localhost:5000/item/${data?._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            },
            body: JSON.stringify({ availableQty })
        })
            .then(res => res.json())
            .then(data => {
                setUpdatedQty(0);
                setUpdated(updated + 1);
            });
    }

    return (
        <>
            <div className="container mx-auto">
                <h3 className="dark:text-white text-[25px] font-medium text-center">Update Quantity</h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* show item info */}
                    <ShowItem data={data} />

                    {/* update Quantity */}
                    <div className="dark:bg-white rounded-lg shadow-xl my-2 py-2 px-3">

                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            <button type="submit" className="my-2 py-2 px-3 text-[20px] font-medium bg-red-500 border-2 border-red-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-red-500 rounded-md" onClick={handleSellOffLine}>Sell Off Line</button>

                            <input type="number" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" name="img" placeholder="Enter Quantity" onChange={e => setUpdatedQty(e.target.value)} value={updatedQty} />

                            <button type="submit" className="my-2 py-2 px-3 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md" onClick={handleRemanufacture}>Remanufacture</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateQty;