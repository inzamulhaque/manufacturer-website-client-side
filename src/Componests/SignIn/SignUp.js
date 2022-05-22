import React from 'react';
import auth from '../../firebase.init';
import useNewUser from '../../hooks/useNewUser';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [setUser] = useNewUser();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        signupError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, profileError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        setUser(data.name, data.email, "user");
        Swal.fire(
            'Good job!',
            'Sign Up Successfully',
            'success'
        );
        navigate("/signin");
    }

    return (
        <>
            <h3 className="text-[25px] text-center text-orange-500 font-bold">Sign Up</h3>

            <form className='px-0 md:px-3 lg:px-5' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("name", { required: true })} placeholder="Enter Your Full Name" />

                <p className="text-[18px] text-red-500 font-medium">
                    {errors.name?.type === 'required' && "Name is required"}
                </p>

                <input type="email" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("email", { required: true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })} placeholder="Enter Your Email" />

                <p className="text-[18px] text-red-500 font-medium">
                    {errors.email?.type === 'required' && "Email is required"}
                    {errors.email?.type === 'pattern' && "Please enter valid email"}
                </p>

                <input type="password" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("password", { required: true, pattern: /^(?=.*[A-Za-z]).{6,}$/ })} placeholder="Enter Your Password" />

                <p className="text-[18px] text-red-500 font-medium">
                    {errors.password?.type === 'required' && "Password is required"}
                    {errors.password?.type === 'pattern' && "password must be 6 character or more and one lower and upper case later both"}
                </p>

                <button type="submit" className="my-2 py-2 px-3 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md">Sign Up</button>

                {
                    (signupError || profileError) && <p className="text-[18px] text-red-500 font-medium">
                        {signupError?.code || profileError?.code}
                    </p>
                }
            </form>
        </>
    );
};

export default SignUp;