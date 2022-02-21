import React, { useState } from "react";
import AuthContainer from "./AuthContainer";
import { createBrowserHistory } from "history";
import login_slide from "../../../assets/general-assets/onboarding/images/login-slide.svg";
import { LoginService } from "."

function Login() {
    const [formErrors, setFormErrors] = useState({});
    const [page, setPage] = useState(1);
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const initialValues = {
        username: username,
        password: password
    };

    let history = createBrowserHistory()
    const LoginUser = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        };
        LoginService(data).then((res) => {
            res ? history.push('/dashboard') : setPage(page);
        });
        setIsLogin(true);
    };
    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/;
        if ( !values.email ) {
          errors.email = "Email is Required !"
        }else if ( !emailRegex.test(values.email) ){
            errors.password = `Invalid email !`
        };
        if ( !values.password ) {
          errors.password = "Password is Required"
        }else if ( !passwordRegex.test(values.password) ){
          errors.password = `Password must contain at 
          least 8 characters, 1 uppercase, 1 lowercase, 
          1 number and 1 special case character !`
        };
    };
    let login;
    login = (
        <div className="wrapper">
            <form onSubmit={e => LoginUser(e)}  id="wizard">
                <section>
                    <div className="inner">
                        <div className="image-hold">
                            <img src={login_slide} alt="" />
                        </div>
                        <div className="form-content" >
                            <p>Sign In</p>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input 
                                    type="username" 
                                    name="username"
                                    required
                                    value={username}
                                    className="form-control" 
                                    id="username" 
                                    placeholder="work username"
                                    onChange={e => setUsername(e.target.value)}
                                />
                                {/* <div className="alart">
                                    {formErrors.email}
                                </div> */}
                            </div>
                            <div className="form-group">
                                <label className="row password-label">
                                    <label htmlFor="password">Password</label>
                                    <label htmlFor="password_">Forgot password? {" "}
                                    <a className="resetpassword" href="/reset-password">Reset</a></label>
                                </label>
                                <input 
                                    type="password"
                                    name="password"
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="form-control" 
                                    id="password" 
                                />
                            </div>
                            <p className="login-p">
                                Don't have an account with Kardinal? 
                                <a href="/register">
                                    <b>Create an account</b>
                                </a> 
                            </p>
                            <button type="submit" 
                                className="btn btn-primary btn-login">
                                {isLogin ? 
                                <div class="spinner-border text-dark" role="status">
                                    <span className="sr-only login-sr">Loading...</span>
                                </div>: "Login"}
                            </button>
                    </div>
                </div>
            </section>
        </form>
    </div>
    )
    return(
        <>
            <AuthContainer data={login}/>
        </>
    )
}

export default Login;