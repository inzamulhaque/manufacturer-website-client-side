import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        const imgbbUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBBKEY}`;
        const image = data?.image[0];
        const formData = new FormData();
        formData.append("image", image);

        fetch(imgbbUrl, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result?.data?.url;

                    const item = {
                        email: user?.email,
                        name: data?.name,
                        price: data?.price,
                        availableQty: data?.availableQty,
                        minQty: data?.minQty,
                        desc: data?.desc,
                        img: img
                    };

                    fetch("http://localhost:5000/additem", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            "authorization": `Bearer ${localStorage.getItem('jotToken')}`
                        },
                        body: JSON.stringify(item)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success(`${data.name}, added successfuly`);
                                reset();
                            } else {
                                toast.error("faild to add the item");
                            }
                        })
                }
            });
    }
    return (
        <>
            <h4 className="dark:text-white text-[22px] font-medium">Add Item</h4>

            <form className='px-0 md:px-3 lg:px-5' onSubmit={handleSubmit(onSubmit)}>

                <input type="text" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("name", { required: true })} placeholder="Enter Item Name" />

                <p className="text-[18px] text-red-500 font-medium">
                    {errors.name?.type === 'required' && "Enter Item Name"}
                </p>

                <input type="number" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("price", { required: true })} placeholder="Enter Per Unit Price" />

                <p className="text-[18px] text-red-500 font-medium">
                    {errors.price?.type === 'required' && "Enter Unit Price"}
                </p>

                <input type="number" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("availableQty", { required: true })} placeholder="Enter Available Quantity" />

                <p className="text-[18px] text-red-500 font-medium">
                    {errors.availableQty?.type === 'required' && "Enter Quantity"}
                </p>

                <input type="number" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("minQty", { required: true })} placeholder="Enter Minimum Order Quantity" />

                <p className="text-[18px] text-red-500 font-medium">
                    {errors.minQty?.type === 'required' && "Enter Minimum Order Quantity"}
                </p>

                <input type="file" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2 dark:text-white" {...register("image", { required: true })} placeholder="Enter Product Image" />

                <p className="text-[18px] text-red-500 font-medium">
                    {errors.image?.type === 'required' && "Enter Product Image"}
                </p>

                <textarea className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" placeholder="Enter Product Description" {...register("desc", { required: true })} >

                </textarea>

                <p className="text-[18px] text-red-500 font-medium">
                    {errors.desc?.type === 'required' && "Enter Product Description"}
                </p>

                <button type="submit" className="my-2 py-2 px-3 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md">Add Item</button>

            </form>
        </>
    );
};

export default AddItem;