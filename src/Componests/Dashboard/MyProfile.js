import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../RequireAuth/Loading';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    // const { data: profile, isLoading } = useQuery("profile", () => fetch(`http://localhost:5000/user`, {
    //     method: "GET",
    //     headers: {
    //         "authorization": `Bearer ${localStorage.getItem('jotToken')}`
    //     }
    // }).then(res => res.json()));

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <h4 className="dark:text-white text-[22px] font-medium">My Profile</h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="rounded-lg shadow-lg">
                    <h4 className="dark:text-white text-[22px] font-bold">Name: {user?.displayName}</h4>
                    <p className="dark:text-white text-[20px] font-bold">Email: {user?.email}</p>

                    <p className="dark:text-white text-[18px] font-medium">Education: </p>
                    <p className="dark:text-white text-[18px] font-medium">City: </p>
                    <p className="dark:text-white text-[18px] font-medium">LinkedIn Profile</p>
                </div>
            </div>
        </>
    );
};

export default MyProfile;