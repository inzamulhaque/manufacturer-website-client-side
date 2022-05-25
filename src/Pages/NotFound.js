import React from 'react';
import PageTitle from '../Componests/PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* add page tilte */}
            <PageTitle title={"404"} />

            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto my-5 rounded-lg shadow-lg dark:bg-white text-blue-500 my-3 p-3 text-center min-h-[300px] flex justify-center items-center">
                <div>
                    <h3 className="text-[25px] font-bold">
                        Opps! 404! Page Not Found
                    </h3>
                    <button className="block mx-auto bg-blue-500 py-2 px-3 text-[22px] border-2 border-blue-500 text-white font-semibold hover:bg-white hover:text-blue-500 duration-300 ease-in-out rounded-lg shadow-md" onClick={() => navigate("/")}>
                        Back To Home
                    </button>
                </div>
            </div>
        </>
    );
};

export default NotFound;