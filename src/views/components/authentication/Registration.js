import React from "react";

function Register(){
    return(
        <div className="form-container outer " >
            <div className="form-form">
                <div className="form-form-wrap">
                    <div className="form-container">
                        <div className="form-content">
                            <h1 className="">Register</h1>
                            <p className="signup-link register">Already have an account? <a href="auth_login.html">Log in</a></p>
                            <form className="text-left">
                                <div className="form">
                                    <div id="username-field" className="field-wrapper input">
                                        <label for="username">Username</label>
                                        <input id="username" name="username" type="text" className="form-control" placeholder="Username" />
                                    </div>
                                    <div id="jobrole-field" className="field-wrapper input">
                                        <label for="jobrole">Job Role</label>
                                        <input id="jobrole" name="jobrole" type="text" className="form-control" placeholder="Job Role" />
                                    </div>
                                    <div id="phonenumber-field" className="field-wrapper input">
                                        <label for="phonenumber">Phone Number</label>    
                                        <input id="phonenumber" name="phonenumber" type="number" className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div id="email-field" className="field-wrapper input">
                                        <label for="email">Email</label>   
                                        <input id="email" name="email" type="email" value="" className="form-control" placeholder="Email" />
                                    </div>
                                    <div id="password-field" className="field-wrapper input">
                                        <label for="password">Password</label>
                                        <input id="password" name="password" type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div id="confirmPassword-field" className="field-wrapper input">
                                        <label for="confirmPassword">Confirm Password</label> 
                                        <input id="confirmPassword" name="confirmPassword" type="password" className="form-control" placeholder="Confirm Password" />
                                    </div>
                                    <div id="optional-field" className="field-wrapper input">
                                        <label for="optinal">WOULD YOU REQUIRE CREDIT FACILITY</label><br />
                                        <label className="new-control new-radio radio-primary">
                                            <input type="radio" id="yes" className="new-control-input" name="custom-radio-1" value="yes" />
                                            <span className="new-control-indicator"></span>Yes
                                        </label>
                                        <label className="new-control new-radio radio-primary">
                                            <input type="radio"  id="no" className="new-control-input" name="custom-radio-1" />
                                            <span className="new-control-indicator"></span>No
                                        </label> 
                                        <div className="yes box" >
                                            <input type="text" className="form-control" id="credit_amount" value="Credit Amount" />  
                                            <input type="text" className="form-control" id="credit_period" value="Credit period" />
                                            <input type="text" className="form-control" id="estimated_travel" value="Estimated travel volume" />
                                            <input type="text" className="form-control" id="estiamted_annual_budget" value="Estimated annual travel budget" />
                                        </div>
                                    </div>
                                    <div className="field-wrapper terms_condition">
                                        <div className="n-chk">
                                            <label className="new-control new-checkbox checkbox-primary">
                                            <input type="checkbox" className="new-control-input" />
                                            <span className="new-control-indicator"></span><span>I agree to the <a href="javascript:void(0);">  terms and conditions </a></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-sm-flex justify-content-between">
                                        <div className="field-wrapper">
                                            <a href="user/dashboard.html" className="btn btn-primary" value="">CREATE ACCOUNT</a>
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
}

export default Register;