import React from "react";
import AuthContainer from "./AuthContainer";
import onboarding from "../../../assets/general-assets/onboarding/images/slide-1.svg";
import onboarding_slide_2 from "../../../assets/general-assets/onboarding/images/slide-2.svg";
import onboarding_slide_3 from "../../../assets/general-assets/onboarding/images/slide-3.svg";
import onboarding_slide_4 from "../../../assets/general-assets/onboarding/images/slide-4.svg";
import onboarding_slide_5 from "../../../assets/general-assets/onboarding/images/slide-5.svg";

export let register;
register = (
    <>
    <div className="wrapper">
        <form action="" id="wizard">
        	{/* <!-- SECTION 1 --> */}
                {/* <h2></h2> */}
                <section>
                    <div className="inner">
						<div className="image-holder">
							<img src={onboarding} alt="" />
						</div>
						<div className="form-content" >
							{/* <!--<div className="form-header">-->
							<!--	<h3>Registration</h3>-->
							<!--</div>--> */}
							<p>Lets get started</p>
							<div className="form-group">
                                <label for="email_">Please put in your work email</label>
                                <input type="email" className="form-control" id="email_" placeholder="work email" />
                            </div> 
							<p style={{textAlign: "left", fontSize: "14px"}}>Already have an account with Kardinal? <a href="login.html"><b>Log in instead</b></a> </p>
						</div>
					</div>
                </section>
				{/* <!-- SECTION 2 --> */}
                {/* <h2></h2> */}
                <section>
                    <div className="inner">
						<div className="image-holder">
							<img src={onboarding_slide_2} alt="" />
						</div>
						<div className="form-content">
							{/* <!--<div className="form-header">-->
							<!--	<h3>Registration</h3>-->
							<!--</div>--> */}
							<p>We have sent a confirmation code to test@gmail.com</p>
							<div className="form-group">
                                <label for="confirm_code">Input the six digit code received</label>
                                <input type="text" className="form-control" id="confirm_code" placeholder="1234" />
                            </div>
                            <p style={{fontSize: "11px"}}><a href="..">Click here</a> to resend if you haven't received any mail or check your spam folder</p>
						</div>
					</div>
                </section>
                {/* <!-- SECTION 3 --> */}
                {/* <h2></h2> */}
                <section>
                    <div className="inner">
						<div className="image-holder">
							<img src={onboarding_slide_3} alt="" />
						</div>
						<div className="form-content">
							{/* <!--<div className="form-header">-->
							<!--	<h3>Registration</h3>-->
							<!--</div>--> */}
							<p>Tell us about yourself</p>
							<div className="row mb-2">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name" />
                                </div>
                            </div>
                             <div className="form-group mb-2">
                                <input type="number" className="form-control" id="phone" placeholder="Phone Number" />
                            </div>
                             <div className="form-group mb-2">
                                <input type="password" className="form-control" id="password" placeholder="At least 8 characters" />
                            </div>
                            <p style={{textAlign: "left", fontSize: "12px"}}>By signing up, you agree to our <a href="https://gokardinal.com/" target="_blank" rel="noreferrer">Terms of Conditions and Privacy policy.</a></p>
						</div>
					</div>
                </section>
                {/* <!-- SECTION 4 --> */}
                {/* <h2></h2> */}
                <section>
                    <div className="inner">
						<div className="image-holder">
							<img src={onboarding_slide_4} alt="" />
						</div>
						<div className="form-content">
							{/* <!--<div className="form-header">-->
							<!--	<h3>Registration</h3>-->
							<!--</div>--> */}
							<p>Tell us about your company</p>
                            <div className="form-group mb-2">
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Company Name" />
                            </div>
                            {/* <!--<div className="input-group mb-2">-->
                            <!--  <input type="text" className="form-control" placeholder="company-name" aria-label="Company Name" aria-describedby="basic-addon2">-->
                            <!--  <div className="input-group-append">-->
                            <!--    <span className="input-group-text" id="basic-addon6">@gokardinal.com</span>-->
                            <!--  </div>-->
                            <!--</div>--> */}
                            <div className="form-group mb-2">
                                <select className="form-control" id="location">
                                    <option>Select your location</option>
                                    <option>Nigeria</option>
                                    <option>Ghana</option>
                                </select>
                            </div>
                            <div className="form-group mb-2">
                                <select className="form-control" id="role">
                                    <option>What is your role</option>
                                    <option>Business Owner</option>
                                    <option>Admin</option>
                                    <option>HR</option>
                                    <option>Finance</option>
                                    <option>Procurement</option>
                                    <option>Others</option>
                                </select>
                            </div> 
                            <div className="form-group mb-2">
                                <select className="form-control" id="company_size">
                                    <option>What is the size of your company?</option>
                                    <option>1-10</option>
                                    <option>11-50</option>
                                    <option>50-500</option>
                                    <option>500 </option>
                                </select>
                            </div>
                            <div className="form-group mb-2">
                            <select className="form-control" id="credit_facility" onchange="checkCreditFacility()">
                                <option value="">Would you require credit facility?</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>   
						</div>
					</div>
                </section>
                {/* <!-- SECTION 5 --> */}
                {/* <h2></h2> */}
                <section>
                    <div className="inner">
						<div className="image-holder">
							<img src={onboarding_slide_5} alt="" />
						</div>
						<div className="form-content">
							{/* <!--<div className="form-header">-->
							<!--	<h3>Registration</h3>-->
							<!--</div>--> */}
							<p>You are done 🎉!</p>
							<p style={{textAlign: "left", fontSize: "12px", marginBottom: "5px"}}>Invite Someone</p>
							<p style={{textAlign: "center", fontSize: "12px"}}>Don't be in the future alone, invite your friends from other businesses to join you</p>
                            <ul className="nav nav-pills mb-3 mt-3 nav-fill" id="justify-pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="invite_by_email_tab" data-toggle="pill" href="#invite_by_email" role="tab" aria-controls="justify-pills-home" aria-selected="true">Invite by Email</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="invite_by_link_tab" data-toggle="pill" href="#invite_by_link" role="tab" aria-controls="justify-pills-profile" aria-selected="false">Invite by Link</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="justify-pills-tabContent">
                                <div className="tab-pane fade show active" id="invite_by_email" role="tabpanel" aria-labelledby="invite_by_email_tab">
                                    <div className="form-group mb-2">
                                        <label for="invite_by_email_input" className="sr-only">Email addresses separated by comma</label>
                                        <input type="text" className="form-control" id="invite_by_email_input" placeholder="Email addresses separated by comma" />
                                    </div>     
                                </div>
                                <div className="tab-pane fade" id="invite_by_link" role="tabpanel" aria-labelledby="invite_by_link_tab">
                                    <div className="form-group mb-2">
                                        <label for="invite_by_link_input" className="sr-only">Share this link to your colleagues</label>
                                        <input type="text" className="form-control" id="invite_by_link_input" placeholder="Link" />
                                    </div>
                                </div>
                            </div>
						</div>
					</div>
                </section>
                <div className="actions clearfix">
                    <ul role="menu" aria-label="Pagination">
                        <li className="" ariaDisabled="false" style={{display: ""}}>
                            <a href="#previous" role="menuitem" className="btn btn-outline-primary mb-2">Previous</a>
                        </li>
                        <li aria-hidden="false" ariaDisabled="false" className="" style={{display: ""}}>
                            <a href="#next" role="menuitem" className="btn btn-primary mb-2 mr-2">Next</a>
                        </li>
                        <li aria-hidden="true" style={{display: ""}}>
                            <a href="#finish" role="menuitem" className="btn btn-primary mb-2 mr-2">Finish</a>
                        </li>
                    </ul>
                </div>
            </form>
		</div>
    {/* <!-- Add Guest Traveler Modal --> */}
    <div className="modal fade" id="addCreditFacilityModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Credit Facility</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="credit_amount">Credit Amount</label>
                                <select className="form-control" id="credit_amount">
                                    <option>1,000,000</option>
                                    <option>3,000,000</option>
                                    <option>5,000,000</option>
                                    <option> 5,000,000</option>
                                </select>
                            </div>
                            <div className="form-group col-md-12">
                                <label for="credit_period">Credit period</label>
                                <select className="form-control" id="credit_period">
                                    <option>7 days</option>
                                    <option>14 days</option>
                                    <option> 14 days</option>
                                </select>
                            </div>
                            <div className="form-group col-md-12">
                                <label for="inputl">Estimated travel monthly spend</label>
                                <input type="text" className="form-control" id="inputl" placeholder="" />
                            </div>
                            <div className="form-group col-md-12">
                                <label for="inputl">Estimated annual travel budget</label>
                                <input type="text" className="form-control" id="inputl" placeholder="" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="btn" data-dismiss="modal"><i className="flaticon-cancel-12"></i> Cancel</button>
                    <button type="button" className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
        
    </div>
    </>
    )
function Onboarding(){
    return(
        <>
        <AuthContainer data={register}/>
    </>
    )
}

export default Onboarding;