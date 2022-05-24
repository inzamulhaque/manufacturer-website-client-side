import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../RequireAuth/Loading';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { data: profile, isLoading, refetch } = useQuery("profile", () => fetch(`http://localhost:5000/profile/${user?.email}`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('jotToken')}`
        }
    }).then(res => res.json()));

    if (isLoading || loading) {
        return <Loading />
    }

    const onSubmit = async data => {
        const phone = data.phone || profile?.phone;
        const edu = data.edu || profile?.edu;
        const city = data.city || profile?.city;
        const linkedin = data.linkedin || profile?.linkedin;

        fetch(`http://localhost:5000/profile/${user?.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            },
            body: JSON.stringify({ phone, edu, city, linkedin })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }

    return (
        <>
            <h4 className="dark:text-white text-[22px] font-medium">My Profile</h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="rounded-lg shadow-lg">
                    <h4 className="dark:text-white text-[22px] font-bold">Name: {user?.displayName}</h4>
                    <p className="dark:text-white text-[20px] font-bold">Email: {user?.email}</p>

                    {
                        profile?.phone &&
                        <p className="dark:text-white text-[18px] font-medium">Phone Number:{profile.phone} </p>
                    }

                    {
                        profile?.edu &&
                        <p className="dark:text-white text-[18px] font-medium">Education:{profile.edu} </p>
                    }

                    {
                        profile?.city && <p className="dark:text-white text-[18px] font-medium">City:{profile.city} </p>
                    }
                    {
                        profile?.linkedin && <a target="_blank" href={profile.linkedin} className="dark:text-white text-[18px] font-medium">LinkedIn Profile</a>
                    }


                </div>

                <div className="rounded-lg shadow-lg">
                    <h4 className="dark:text-white my-3 text-[22px] text-center font-bold">Update Your Profile</h4>
                    <form className='px-0 md:px-3 lg:px-5' onSubmit={handleSubmit(onSubmit)}>
                        <input type="number" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("phone")} placeholder="Enter Your Phone Number" />

                        <input type="text" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("edu")} placeholder="Enter Your Education" />

                        <input type="text" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("city")} placeholder="Enter Your City Name" />

                        <input type="text" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" {...register("linkedin")} placeholder="Enter Your LinkedIn Profile Link" />

                        <button type="submit" className="my-2 py-2 px-3 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MyProfile;