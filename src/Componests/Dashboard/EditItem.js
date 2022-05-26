import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowItem from '../Shared/ShowItem';

const EditItem = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [updated, setUpdated] = useState(0);

    // get item
    useEffect(() => {
        fetch(`https://ih-electronics.herokuapp.com/item/${id}`, {
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

    // update item
    const handleUpdate = event => {
        event.preventDefault();
        const newName = event.target.name.value || data?.name;
        const newImg = event.target.img.value || data?.img;
        const newPrice = event.target.price.value || data?.price;
        const newMinOrder = event.target.minOrder.value || data?.minQty;
        const newDecs = event.target.desc.value || data?.desc;

        fetch(`https://ih-electronics.herokuapp.com/item/${data?._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            },
            body: JSON.stringify({ name: newName, img: newImg, price: newPrice, minQty: newMinOrder, desc: newDecs })
        })
            .then(res => res.json())
            .then(data => setUpdated(updated + 1));
        event.target.reset();
    }

    return (
        <>
            <div className="container mx-auto">
                <h3 className="dark:text-white text-[25px] font-medium text-center">Edit Item</h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* show item info */}
                    <ShowItem data={data} />

                    <div className="dark:bg-white rounded-lg shadow-xl my-2 py-2 px-3">
                        <form onSubmit={handleUpdate} className="px-3 py-2">
                            <h4 className="text-[22px] font-medium text-center">Update</h4>

                            <input type="text" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" name="name" placeholder="Enter New Name" />

                            <input type="text" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" name="price" placeholder="Enter New Name" />

                            <input type="text" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" name="minOrder" placeholder="Enter New Minimum Order Quantity" />

                            <input type="text" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" name="desc" placeholder="Enter New Description" />

                            <input type="text" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" name="img" placeholder="Enter New Image URL" />

                            <button type="submit" className="my-2 py-2 px-3 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditItem;