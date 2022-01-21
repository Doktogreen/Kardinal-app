import React from "react";
import loader from "../../../assets/general-assets/img/icon.png";

function HomeLoader(){
    return(
        <>
        {/* ======= Start Preloader =======*/}
        <div className="preloader">
            <img className="preloader-image" width="60" src={loader} alt="preloader"/>
        </div> 
        {/* ======= End Preloader ======= */}
        </>
    )
}

export default HomeLoader;