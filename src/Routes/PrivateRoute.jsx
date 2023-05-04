import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Facebook } from 'react-spinners-css';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Facebook color="#54f1d2" />
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' replace state={{from: location}}></Navigate>;
};

export default PrivateRoute;