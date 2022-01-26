import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {


    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            localStorage.getItem('token') ?
                <Component {...props} />
            : <Navigate to="/" replace={true}/>
        )} />
    );
};

export default PrivateRoute;