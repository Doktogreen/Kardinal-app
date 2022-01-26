import React from "react";
import AuthContainer from "./AuthContainer";

export let login;
login = (
    <div className="form-container outer " >
            <div className="form-form">
                <div className="form-form-wrap">
                    <div className="form-container">
                        <div className="form-content">
                            <h1 className="">Sign In</h1>
                            <p className="signup-link register">Not Register ? <a href="/register">Create an account</a></p>
                            <form className="text-left">
                                <div className="form">
                                    <div id="username-field" className="field-wrapper input">
                                        <label for="username">Username</label>
                                        <input id="username" name="username" type="text" className="form-control" placeholder="Username" />
                                    </div>
                                    <div id="password-field" className="field-wrapper input">
                                        <label for="password">Password</label>
                                        <input id="password" name="password" type="password" className="form-control" placeholder="Password" />
                                        <a href="auth_pass_recovery_boxed.html" className="forgot-pass-link d-flex justify-content-end">Forgot Password?</a>
                                    </div>
                                    <div className="d-sm-flex justify-content-between">
                                        <div className="field-wrapper">
                                            <a href="/dashboard" className="btn btn-primary" value="">Log In</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>                    
                    </div>
                </div>
            </div>
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