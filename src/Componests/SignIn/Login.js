import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useNewUser from '../../hooks/useNewUser';
import PageTitle from '../PageTitle/PageTitle';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [setUser, token] = useNewUser();

    useEffect(() => {
        if (user) {
            setUser(user?.user?.email, user?.user?.displayName);
        }
    }, [user]);

    useEffect(() => {
        if (user && token) {
            navigate(from, { replace: true });
        }
    }, [user, token]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <>
            <PageTitle title={"SignIn"} />
            <h3 className="text-[25px] text-center text-orange-500 font-bold">Sign In</h3>

            <form className='px-0 md:px-3 lg:px-5' onSubmit={handleSubmit(onSubmit)}>
                <input type="email" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("email", { required: true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })} placeholder="Enter Your Email" />

                <p className="text-[18px] text-red-500 font-medium">
                    {errors.email?.type === 'required' && "Email is required"}
                    {errors.email?.type === 'pattern' && "Please enter valid email"}
                </p>

                <input type="password" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("password", { required: true })} placeholder="Enter Your Password" />

                <p className="text-[18px] text-red-500 font-medium">
                    {errors.password?.type === 'required' && "Password is required"}
                </p>

                <button type="submit" className="my-2 py-2 px-3 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md">Sign In</button>
            </form>

            {
                error && <p className="text-[18px] text-red-500 font-medium">
                    {error.code}
                </p>
            }

            <p className="text-[18px] font-normal m-3 md:mx-5 lg:mx-7">
                You've No Account? <span className="text-orange-300 cursor-pointer" onClick={() => navigate("/signin/newaccount")}> Sign Up </span>
            </p>
            <p className="text-[18px] font-normal m-3 md:mx-5 lg:mx-7">
                ForGot Your Password? <span className="text-orange-300 cursor-pointer" onClick={() => navigate("/signin/resetpass")}> Reset Password </span>
            </p>
        </>
    );
};

export default Login;