import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomeHeader from '../../views/components/home/HomeHeader';
import HomeFooter from '../../views/components/home/HomeFooter';
// import { landingRoutes } from '../../routes';
import LandingPage from '../../views/pages/LandingPages';

function Website(){
    // const location = useLocation();
    return(
        <>
            <HomeHeader />
            <Routes >
            {/* {landingRoutes.map((route,index) => ( */}
                
                <Route 
                    
                    path="/"
                    name="Home"
                    component={<LandingPage />} 
                    exact
                />
            {/* ))} */}
            </Routes>
            <HomeFooter/>
        </>
    )
}

export default Website;