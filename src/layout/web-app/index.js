import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Footer from '../../views/components/user/Footer';
import NavBar from '../../views/components/user/NavBar';
import { appRoutes } from '../../routes';

function WebApp(){
    return(
        <>
            <NavBar />
                <Routes>
                {appRoutes.map((route,index) => (
                    <Route 
                        key={index} 
                        path={route.path} 
                        component={route.component} 
                        exact={route.exact} 
                    />
                ))}
                </Routes>
            <Footer/>
        </>
    )
}

export default WebApp;