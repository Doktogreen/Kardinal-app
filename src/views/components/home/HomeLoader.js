import React from "react";

function HomeLoader(){
    return(
        <>
        {/* ======= Start Preloader =======*/}
        <div className="preloader">
            <img className="preloader-image" width="60" src="../../assets/general-assets/img/icon.png" alt="preloader"/>
        </div> 
        {/* ======= End Preloader ======= */}
        </>
    )
}

export default HomeLoader;