import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeHeader from '../../views/components/home/HomeHeader';
import HomeFooter from '../../views/components/home/HomeFooter';
import { landingRoutes } from '../../routes';

function Website(){
    return(
        <>
            <HomeHeader />
            <Routes>
            {landingRoutes.map((route,index) => (
                <Route 
                    key={index} 
                    path={route.path}
                    name={route.name}
                    component={route.component} 
                    exact 
                />
            ))}
            </Routes>
            <HomeFooter/>
        </>
    )
}

export default Website;