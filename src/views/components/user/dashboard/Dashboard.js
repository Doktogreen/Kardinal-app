import React from 'react';
import Loader from '../Loader';
import Main from './Main';
import NavBar from './NavBar';


function Dashboard(){
    return(
        <body className="alt-menu sidebar-noneoverflow">
            {/* BEGIN LOADER */}

                <Loader/>

            {/* END LOADER */}

            {/* BEGIN NAVBAR  */}
            
                <NavBar />

            {/* END NAVBAR */}

                {/* BEGIN MAIN CONTAINER */}
                    <Main />
                {/* END MAIN CONTAINER */}
        </body>
    )
}

export default Dashboard;