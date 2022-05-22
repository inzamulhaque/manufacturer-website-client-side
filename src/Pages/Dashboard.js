import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import SideBar from '../Componests/Dashboard/SideBar';
import PageTitle from '../Componests/PageTitle/PageTitle';
import auth from '../firebase.init';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
            <PageTitle title={"Dashboard"} />
            <div className="mx-auto container">
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    <div>
                        <SideBar />
                    </div>
                    <div className="col-span-3">
                        {/* show user name */}
                        <h4 className="text-[22px] dark:text-white">Welcome <span className="text-orange-500">{user?.displayName}</span>!</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;