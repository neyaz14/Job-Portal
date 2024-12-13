import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({child}) => {
    const {user, loading} = useContext(AuthContext);
    const loaction = useLocation();
    if(!loading){
        <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return child;
    }
    return <Navigate to={'/login'} state={loaction?.pathname}></Navigate>
};

export default PrivateRoute;