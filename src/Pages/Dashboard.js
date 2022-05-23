import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import SideBar from '../Componests/Dashboard/SideBar';
import PageTitle from '../Componests/PageTitle/PageTitle';
import auth from '../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../Componests/RequireAuth/Loading';
import { Outlet } from 'react-router-dom';
import useLogOut from '../hooks/useLogOut';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [logOut] = useLogOut();
    const { data: myUser, isLoading } = useQuery("myUser", () => fetch(`http://localhost:5000/user/${user.email}`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('jotToken')}`
        }
    }).then(res => res.json()));

    useEffect(() => {
        if (myUser?.message === "unauthorized access" || myUser?.message === "forbidden access") {
            logOut();
        }
    }, [myUser]);

    // for data loading spinner
    if (isLoading || loading) {
        return <Loading />
    }


    return (
        <>
            <PageTitle title={"Dashboard"} />
            <div className="mx-auto container">
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    <div>
                        <SideBar myUser={myUser} user={user} />
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