import React from 'react';
import { Outlet } from 'react-router-dom';
import google from '../images/google.png';

const SignIn = () => {
    return (
        <>
            <div className="mx-auto my-5 w-full md:w-3/4 lg:1/2 dark:bg-white rounded-lg shadow-lg p-3">
                <Outlet />
                <div className="flex items-center mt-3">
                    {/* add or line */}
                    <div className="w-1/2 h-[3px] bg-orange-500"></div>
                    <div className="text-center text-[22px] font-normal">OR</div>
                    <div className="w-1/2 h-[3px] bg-orange-500"></div>
                </div>

                <button className="flex py-2 px-3 items-center bg-[#FF4B26] rounded-lg text-[20px] text-white font-bold block mx-auto border-2 border-[#FF4B26] duration-300 easy-in-out hover:bg-transparent hover:text-[#FF4B26]">
                    <img className="w-[20px] h-[20px]" src={google} alt="google icon" /> &nbsp;
                    Sign In With Google
                </button>
            </div>
        </>
    );
};

export default SignIn;