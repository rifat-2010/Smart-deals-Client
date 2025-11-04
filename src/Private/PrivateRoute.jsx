import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';


const PrivateRoute = ({children}) => {
const {user, loading} = use(AuthContext);

const location = useLocation();
// console.log(location)

if(loading){
    // return <Loading></Loading>;
    return <span className='loading loading-spinner text-success'></span>
}

if(!user){
    return <Navigate to={'/register'} state={location.pathname}></Navigate>
}

    return children
};

export default PrivateRoute;