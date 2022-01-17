import React from "react";
import Login from "./Login";

function Auth(){
    return(
        <body class="form " style="background-color: #062863;">
        {/* <!-- BEGIN LOADER --> */}
        <div id="load_screen"> <div class="loader"> <div class="loader-content">
            <div class="spinner-grow align-self-center"></div>
        </div></div></div>
        {/* <!--  END LOADER --> */}
        <div class="container bb2">
            <a href=" index.html">
                <img src="assets/img/logo-kardinal-white.png" class="logg" alt="logo" />
            </a>
        </div>
            <Login />
        </body>
    )
}

export default Auth;