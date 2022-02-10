import React from "react";
import AuthContainer from "./AuthContainer";
import login_slide from "../../../assets/general-assets/onboarding/images/login-slide.svg";
import './index.scss';

export let login;
login = (
    <div className="wrapper">
            <form id="wizard">
        		{/* <!-- SECTION 1 --> */}
                {/* <h2></h2> */}
                <section>
                    <div className="inner">
						<div className="image-holder">
							<img src={login_slide} alt="" />
						</div>
						<div className="form-content" >
							{/* <!--<div className="form-header">-->
							<!--	<h3>Registration</h3>-->
							<!--</div>--> */}
							<p>Sign In</p>
							<div className="form-group">
                                <label for="email_">Username</label>
                                <input type="text" className="form-control" id="email_" placeholder="work email" />
                            </div>
                            <div className="form-group">
                                <label for="password_">Password</label>
                                <input type="password" className="form-control" id="password_" />
                            </div>
							<p className="login-p">Don't have an account with Kardinal? <a href="/register"><b>Create an account</b></a> </p>
						    <div className="form-group btn-login-cover">
                                <button className="btn btn-primary btn-login">Login</button>
                            </div>
						</div>
					</div>
                </section>
            </form>
		</div>
)
function Login(){
    return(
        <>
            <AuthContainer data={login}/>
        </>
    )
}

export default Login;