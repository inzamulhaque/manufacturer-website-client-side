import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ResetPass = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async data => {
        await sendPasswordResetEmail(data.email);
        toast.success(`Please Check Your Email! ${data.email}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <>
            <h3 className="text-[25px] text-center text-orange-500 font-bold">Reset Password</h3>

            <form className='px-0 md:px-3 lg:px-5' onSubmit={handleSubmit(onSubmit)}>
                <input type="email" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("email", { required: true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })} placeholder="Enter Your Email" />

                <p className="text-[18px] text-red-500 font-medium">
                    {errors.email?.type === 'required' && "Email is required"}
                    {errors.email?.type === 'pattern' && "Please enter valid email"}
                </p>

                <button type="submit" className="my-2 py-2 px-3 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md">Reset Password</button>
            </form>

            <p className="text-[18px] font-normal m-3 md:mx-5 lg:mx-7">
                <span className="text-orange-300 cursor-pointer" onClick={() => navigate("/signin")}> Sign In </span>
            </p>
        </>
    );
};

export default ResetPass;