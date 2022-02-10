import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
                        exact={route.exact}
                        path={route.path}
                        name={route.name}
                        element={route.component}
                    />
                ))}
                </Routes>
            <Footer/>
        </>
    )
}

export default React.memo(WebApp);