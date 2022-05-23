import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useLogOut from '../../hooks/useLogOut';
import Loading from './Loading';

const RequireUser = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    let location = useLocation();
    const [logOut] = useLogOut();

    if (loading || adminLoading) {
        return <Loading />
    }

    if (!user || admin) {
        logOut();
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireUser;