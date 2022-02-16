import React from "react";
import AuthContainer from "./AuthContainer";
import login_slide from "../../../assets/general-assets/onboarding/images/login-slide.svg";
import { Formik } from 'formik';
import * as yup from "yup";
import './index.scss';
import { Link } from "react-router-dom";

const schema = yup.object({
    // username: yup.string().required('Please Enter a username'),
    email: yup
      .string()
      .email()
      .required(<div className="red">Please enter your email !"</div>),
    // confirmEmail: yup
    //   .string()
    //   .email()
    //   .required()
    //   .oneOf([yup.ref("email"), null], "Emails must match"),
    password: yup
      .string()
      .required(<div className="red">Please enter your password !</div>)
      .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character"
      ),
    // confirmPassword: yup
    //   .string()
    //   .required()
    //   .oneOf([yup.ref("password"), null], "Passwords must match")
  });

export let login;
login = (
    <div className="wrapper">
    <Formik
       initialValues={
           { email: '', 
            password: '' 
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
       }) => (<form onSubmit={handleSubmit}  id="wizard">
                <section>
                    <div className="inner">
						<div className="image-hold">
							<img src={login_slide} alt="" />
						</div>
						<div className="form-content" >
							<p>Sign In</p>
							<div className="form-group">
                                <label htmlFor="email_">Username</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={values.email}
                                    className="form-control" 
                                    id="email_" 
                                    placeholder="work email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className="alart">
                                    {errors.email && touched.email && errors.email}
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="row password-label">
                                    <label htmlFor="password_">Password</label>
                                    <label htmlFor="password_">Forgot password? {" "}
                                    <a className="resetpassword" href="/reset-password">Reset</a></label>
                                </label>
                                <input 
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-control" 
                                    id="password_" 
                                />
                                <div className="alart">
                                    {errors.password && touched.password && errors.password}
                                </div>
                            </div>
							<p className="login-p">
                                Don't have an account with Kardinal? 
                                <a href="/register">
                                    <b>Create an account</b>
                                </a> 
                            </p>
                                <Link to={"/dashboard"}>
                                <button
                                    
                                    disabled={isSubmitting} 
                                    className="btn btn-primary btn-login">
                                    Login
                                </button>
                                </Link>
						</div>
					</div>
                </section>
            </form>)}
        </Formik>
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