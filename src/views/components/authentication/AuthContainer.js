import React from "react";
import kardinal_white_logo from "../../../assets/general-assets/img/logo-kardinal-white.png";

function AuthContainer(props){
    return(
        <body className="form " style={{backgroundColor: "#062863"}}>
        {/* <!-- BEGIN LOADER --> */}
        <div id="load_screen"> <div className="loader"> <div className="loader-content">
            <div className="spinner-grow align-self-center"></div>
        </div></div></div>
        {/* <!--  END LOADER --> */}
        <div className="container bb2">
            <a href=" index.html">
                <img src={kardinal_white_logo} className="logg" alt="logo" />
            </a>
        </div>
           {props.data} 
        </body>
    )
}

export default AuthContainer;