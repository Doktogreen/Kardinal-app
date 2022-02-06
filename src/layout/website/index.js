import React from 'react';
import LandingPage from '../../views/pages/LandingPages';
import HomeHeader from '../../views/components/home/HomeHeader';
import HomeFooter from '../../views/components/home/HomeFooter';

function Website(){
    return(
        <>
            <HomeHeader />
                  <LandingPage />
            <HomeFooter/>
        </>
    )
}

export default Website;