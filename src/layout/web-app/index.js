import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from '../../views/components/user/Footer';
import NavBar from '../../views/components/user/NavBar';
import { appRoutes } from '../../routes';

function WebApp(){
    const location = useLocation();
    return(
        <>
            <NavBar />
            <Routes location={location} key={location.pathname}>
                {appRoutes.map((route,index) => {
                    return (
                    route.component && (<Route 
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        name={route.name}
                        element={<route.component />}
                    />)
                )})}
                </Routes>
            <Footer/>
        </>
    )
}

export default WebApp;