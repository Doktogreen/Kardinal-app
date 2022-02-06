import React from "react";

function AuthContainer(props){
    return(
        <body style={{backgroundColor: "#062863"}}>
        {/* <!-- BEGIN LOADER --> */}
        <div id="load_screen"> <div className="loader"> <div className="loader-content">
            <div className="spinner-grow align-self-center"></div>
        </div></div></div>
        {/* <!--  END LOADER --> */}
           {props.data} 
        </body>
    )
}

export default AuthContainer;