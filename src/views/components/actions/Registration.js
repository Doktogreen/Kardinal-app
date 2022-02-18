import React, { useState } from "react";
import AuthContainer from "./AuthContainer";
import onboarding from "../../../assets/general-assets/onboarding/images/slide-1.svg";
import onboarding_slide_2 from "../../../assets/general-assets/onboarding/images/slide-2.svg";
import onboarding_slide_3 from "../../../assets/general-assets/onboarding/images/slide-3.svg";
import onboarding_slide_4 from "../../../assets/general-assets/onboarding/images/slide-4.svg";
import onboarding_slide_5 from "../../../assets/general-assets/onboarding/images/slide-5.svg";
import { Formik } from 'formik';
import * as yup from "yup";
import './index.scss';
import { CodeConfirmation, EmailValidation } from ".";

function Onboarding(){
    const [page, setPage] = useState(1);
    const [sent, setSent] = useState(false);

    const decrement = ()=> {
        setPage(page - 1)
        if (page < 2){
            return setPage(5);
        };
        console.log(page)
    };
    const increment = (e)=> {
        e.preventDefault();
        setPage(page + 1);
        
        if (page > 5){
            return setPage(1);
        };
    };

    const codeSender = (e, email) => {
        e.preventDefault();
        let info = {
            isPage: page,
            workEmail: email,
            isSent: sent
        }
        EmailValidation(info);
    }

    const codeVerifyer = (e, code, email) => {
        e.preventDefault();
        let info = {
            isPage: page,
            workEmail: email,
            isCode: code,
            isSent: sent
        }
        CodeConfirmation(info);
    }

    const schema = yup.object({
        email: yup
          .string()
          .email()
          .required(<div className="red">Enter your email !"</div>),
        confirmCode: yup
          .number()
          .required(<div className="red">Enter your confirmation code !"</div>),
        firstName: yup
          .string()
          .required(<div className="red">Enter your first name !"</div>),
        lastName: yup
          .string()
          .required(<div className="red">Enter your last name !"</div>),
        phoneNumber: yup
          .number()
          .required(<div className="red">Enter your phone number !"</div>),
        password: yup
          .string()
          .required(<div className="red">Please enter your password !</div>)
          .matches(
            "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
            "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character"
          ),
        companyName: yup
          .string()
          .required(<div className="red">Enter your company's name !"</div>),
        // companyLoaction: yup
        //   .string()
        //   .companyLoaction()
        //   .required(<div style={{color: "red"}}>Enter your company location !"</div>),
        // role: yup
        //   .string()
        //   .role()
        //   .required(<div style={{color: "red"}}>Enter your role !"</div>),
        // companySize: yup
        //   .string()
        //   .companySize()
        //   .required(<div style={{color: "red"}}>Enter your company size !"</div>),
      });
    
    let register;
    register = (
    <>
        <div className="wrapper">
        <Formik
            initialValues={
                { email: '', 
                password: '',
                confirmCode: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                companyName: '',
                code: ''
                    }
                }
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({values, errors, touched, handleChange, handleBlur,handleSubmit, isSubmitting,
            }) => (<form onSubmit={handleSubmit} action="" id="wizard">
                <div className="content">
                {/* <!-- SECTION 1 --> */}
                    {/* <h2></h2> */}
                    <div className="steps clearfix">
                    <ul role="tablist" className="row">
                        <li role="tab" aria-disabled="false" className="first checked current" aria-selected="true">
                            <a id="wizard-t-0" className="row" href="#wizard-h-0" aria-controls="wizard-p-0">
                                <span className={page >= 1 ? "span-animate number" : "number"}></span>
                                <div className={page > 1 ? "div-animate number" : "number"}></div>  
                            </a>
                        </li>
                        <li role="tab" aria-disabled="false" className="done" aria-selected="false">
                            <a id="wizard-t-1" className="row" href="#wizard-h-1" aria-controls="wizard-p-1">
                                <span className={page >= 2 ? "span-animate number" : "number"}></span> 
                                <div className={page > 2 ? "div-animate number" : "number"}></div> 
                            </a>
                        </li>
                        <li role="tab" aria-disabled="false">
                            <a id="wizard-t-2" className="row" href="#wizard-h-2" aria-controls="wizard-p-2">
                                <span className={page >= 3 ? "span-animate number" : "number"}></span> 
                                <div className={page > 3 ? "div-animate number" : "number"}></div> 
                            </a>
                        </li>
                        <li role="tab" aria-disabled="false">
                            <a id="wizard-t-3" className="row" href="#wizard-h-3" aria-controls="wizard-p-3">
                                <span className={page >= 4 ? "span-animate number" : "number"}></span> 
                                <div className={page > 4 ? "div-animate number" : "number"}></div> 
                            </a>
                        </li>
                        <li role="tab" aria-disabled="false" className="last">
                            <a id="wizard-t-4" className="row" href="#wizard-h-4" aria-controls="wizard-p-4">
                                <span className={page === 5 ? "span-animate number" : "number"}></span> 
                            </a>
                        </li>
                    </ul>
                </div>
                    {page === 1 ? (<form onSubmit={e => codeSender(e, values.email)}>
                        <div className="inner">
                            <div className="image-hold">
                                <img src={onboarding} alt="" />
                            </div>
                            <div className="form-content" >
                                {/* <!--<div className="form-header">-->
                                <!--	<h3>Registration</h3>-->
                                <!--</div>--> */}
                                <p>Lets get started</p> 
                                <div className="input-group mb-3">
                                    <label htmlFor="email">
                                        Please put in your work email
                                    </label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Work email" 
                                        aria-label="Work email" 
                                        aria-describedby="basic-addon2" 
                                        type="email"
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div class="input-group-append">
                                        <button  className="btn btn-outline-secondary" type="submit">Send code</button>
                                    </div>
                                    <div className="alart">
                                        {errors.email && touched.email && errors.email}
                                    </div>
                                </div>
                                {sent ? (<div className="input-group mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Code" 
                                        aria-label="Recipient's username" 
                                        aria-describedby="basic-addon2"
                                        type="email"
                                        id="email"
                                        value={values.code}
                                        onChange={handleChange}
                                        onBlur={handleBlur} 
                                    
                                    />
                                    <div class="input-group-append">
                                        <button onClick={e => codeVerifyer(e, values.code, values.email)} className="btn btn-outline-secondary" type="submit">Verify</button>
                                    </div>
                                </div>): null}
                                <p style={{textAlign: "left", fontSize: "14px"}}>
                                    Already have an account with Kardinal? 
                                    <a href="/">
                                        <b>Log in instead</b>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </form>) : null}
                    {/* <!-- SECTION 2 --> */}
                    {/* <h2></h2> */}
                    {page === 2 ? (<section>
                        <div className="inner">
                            <div className="image-hold">
                                <img src={onboarding_slide_2} alt="" />
                            </div>
                            <div className="form-content">
                                {/* <!--<div className="form-header">-->
                                <!--	<h3>Registration</h3>-->
                                <!--</div>--> */}
                                <p>We have sent a confirmation code to test@gmail.com</p>
                                <div className="form-group">
                                    <label htmlFor="confirmCode">
                                        Input the six digit code received
                                    </label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        id="confirmCode" 
                                        placeholder="1234" 
                                        value={values.confirmCode}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div className="alart">
                                        {errors.confirmCode && touched.confirmCode && errors.confirmCode}
                                    </div>
                                </div>
                                <p style={{fontSize: "11px"}}>
                                    <a href="..">
                                        Click here
                                    </a> 
                                    to resend if you haven't received 
                                    any mail or check your spam folder
                                </p>
                            </div>
                        </div>
                    </section>) : null}
                    {/* <!-- SECTION 3 --> */}
                    {/* <h2></h2> */}
                    {page === 3 ? (<section>
                        <div className="inner">
                            <div className="image-hold">
                                <img src={onboarding_slide_3} alt="" />
                            </div>
                            <div className="form-content">
                                {/* <!--<div className="form-header">-->
                                <!--	<h3>Registration</h3>-->
                                <!--</div>--> */}
                                <p>Tell us about yourself</p>
                                <div className="row mb-2">
                                    <div className="col">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="First name" 
                                            value={values.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <div className="alart">
                                            {errors.firstName && touched.firstName && errors.firstName}
                                        </div>
                                    </div>
                                    <div className="col">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Last name" 
                                            value={values.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur} 
                                        />
                                        <div className="alart">
                                            {errors.lastName && touched.lastName && errors.lastName}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-2">
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        id="phone" 
                                        placeholder="Phone Number" 
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div className="alart">
                                        {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                                    </div>
                                </div>
                                <div className="form-group mb-2">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        placeholder="At least 8 characters" 
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div className="alart">
                                        {errors.password && touched.password && errors.password}
                                    </div>
                                </div>
                                <p style={{textAlign: "left", fontSize: "12px"}}>
                                    By signing up, you agree to our 
                                    <a href="https://gokardinal.com/" target="_blank" rel="noreferrer">
                                        Terms of Conditions and Privacy policy.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>) : null}
                    {/* <!-- SECTION 4 --> */}
                    {/*<h2></h2>*/}
                    {page === 4 ? (<section>
                        <div className="inner">
                            <div className="image-hold">
                                <img src={onboarding_slide_4} alt="" />
                            </div>
                            <div className="form-content">
                                {/* <!--<div className="form-header">-->
                                <!--	<h3>Registration</h3>-->
                                <!--</div>--> */}
                                <p>Tell us about your company</p>
                                <div className="form-group mb-2">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="formGroupExampleInput" 
                                        placeholder="Company Name" 
                                        value={values.companyName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div className="alart">
                                        {errors.companyName && touched.companyName && errors.companyName}
                                    </div>
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
                    </section>) : null}
                    {/* <!-- SECTION 5 --> */}
                    {/* <h2></h2> */}
                    {page === 5 ? (<section>
                        <div className="inner">
                            <div className="image-hold">
                                <img src={onboarding_slide_5} alt="" />
                            </div>
                            <div className="form-content">
                                {/* <!--<div className="form-header">-->
                                <!--	<h3>Registration</h3>-->
                                <!--</div>--> */}
                                <p>You are done 🎉!</p>
                                <p style={{textAlign: "left", fontSize: "12px", marginBottom: "5px"}}>Invite Someone</p>
                                <p style={{textAlign: "center", fontSize: "12px"}}>
                                    Don't be in the future alone, invite your friends from other businesses to join you
                                </p>
                                <ul className="nav nav-pills mb-3 mt-3 nav-fill" id="justify-pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="invite_by_email_tab" data-toggle="pill" 
                                            href="#invite_by_email" role="tab" aria-controls="justify-pills-home" aria-selected="true">
                                            Invite by Email
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="invite_by_link_tab" data-toggle="pill" 
                                            href="#invite_by_link" role="tab" aria-controls="justify-pills-profile" aria-selected="false">
                                            Invite by Link
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="justify-pills-tabContent">
                                    <div className="tab-pane fade show active" id="invite_by_email" role="tabpanel" aria-labelledby="invite_by_email_tab">
                                        <div className="form-group mb-2">
                                            <label htmlFor="invite_by_email_input" className="sr-only">
                                                Email addresses separated by comma
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="invite_by_email_input" 
                                                placeholder="Email addresses separated by comma" 
                                                value={values.inviteByEmail}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>     
                                    </div>
                                    <div className="tab-pane fade" id="invite_by_link" role="tabpanel" aria-labelledby="invite_by_link_tab">
                                        <div className="form-group mb-2">
                                            <label htmlFor="invite_by_link_input" className="sr-only">
                                                Share this link to your colleagues
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="invite_by_link_input" 
                                                placeholder="Link" 
                                                value={values.inviteByLink}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>) : null}
                    <div className="btn-cover">
                        <ul role="" className="row buttons" ariaLabel="Pagination">
                            {page > 1 ? (<li className="" onClick={decrement} ariaDisabled="false">
                                <a href="#previous" role="menuitem" className="btn btn-outline-primary mb-2">Previous</a>
                            </li>): null}
                            {page === 5 ? (<li ariaHidden="true">
                                <a href="/login" role="menuitem" className="btn btn-primary mb-2">Finish</a>
                            </li>): null}
                            {page < 1 || page === 5 ? null : (<li ariaHidden="false" onClick={e => increment(e, values.email)} ariaDisabled="false" className="">
                                <a href="#next" role="menuitem" className="btn btn-primary mb-2">Next</a>
                            </li>)}

                        </ul>
                    </div>
                </div>
            </form>)}
        </Formik>
        </div>
        {/* <!-- Add Guest Traveler Modal --> */}
    </>
);
    return(
        <>
            <AuthContainer data={register}/>
        </>
    )
}

export default Onboarding;