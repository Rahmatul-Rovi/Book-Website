import React from 'react';
import { useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const isAuthenticated = false; 
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;