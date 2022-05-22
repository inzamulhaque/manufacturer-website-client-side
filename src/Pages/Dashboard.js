import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import SideBar from '../Componests/Dashboard/SideBar';
import PageTitle from '../Componests/PageTitle/PageTitle';
import auth from '../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../Componests/RequireAuth/Loading';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const { data: myUser, isLoading } = useQuery("myUser", () => fetch(`http://localhost:5000/user/${user.email}`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('jotToken')}`
        }
    }).then(res => res.json()));

    // for data loading spinner
    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <PageTitle title={"Dashboard"} />
            <div className="mx-auto container">
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    <div>
                        <SideBar myUser={myUser} />
                    </div>
                    <div className="col-span-3">
                        {/* show user name */}
                        <h4 className="text-[22px] dark:text-white">Welcome <span className="text-orange-500">{user?.displayName}</span>!</h4>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;