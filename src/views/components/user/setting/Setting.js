import React from "react";

function Setting(){
    return(
        <div className="main-container" id="container">
            <div className="overlay"></div>
            <div className="search-overlay"></div>
            {/* <!--  BEGIN CONTENT AREA  --> */}
            <div id="content" className="main-content">
            <div className="layout-px-spacing">
                <div className="page-header">
                    <div className="page-title">
                        <h3>Settings</h3>
                    </div>
                </div>
                <div className="row layout-spacing">
                    <div className="col-lg-12">
                        <div className="statbox widget box-shadow widget-chart-three" style={{padding: "0px 20px"}}> 
                            <div className="widget-heading" style={{padding: "20px 0px"}}>
                                <div>
                                    <h5>Settings</h5>
                                </div>
                            </div>
                            <div className="widget-content widget-content-area border-top-tab">
                                <ul className="nav nav-tabs mb-3 mt-3" id="borderTop" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="border-top-security-tab" data-toggle="tab" style={{padding: "12px 100px"}} href="#border-top-security" role="tab" aria-controls="border-top-security" aria-selected="true">Security</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-top-company-tab" data-toggle="tab" style={{padding: "12px 100px"}} href="#border-top-company" role="tab" aria-controls="border-top-company" aria-selected="false">Company</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-top-travelers-tab" data-toggle="tab" style={{padding: "12px 100px"}} href="#border-top-travelers" role="tab" aria-controls="border-top-travelers" aria-selected="false">Travelers</a>
                                    </li>  
                                </ul>    
                                <div className="tab-content" id="borderTopContent">
                                    <div className="tab-pane fade show active" id="border-top-security" role="tabpanel" aria-labelledby="border-top-security-tab"> 
                                        <div className="row">  
                                            <div id="flRegistrationForm" className="col-lg-12 layout-spacing">
                                                <div className="statbox widget box-shadow">
                                                    <div className="widget-header">                                
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                                                <h4>...</h4>
                                                            </div>                                                                        
                                                        </div>
                                                    </div>
                                                    <div className="widget-content widget-content-area ">
                                                        <form>
                                                            <div className="row" tyle={{padding: "0px 20px"}}>
                                                                <div className="col-md-6">
                                                                    <h5>Change Password</h5>
                                                                    <p>Password must be 8 characters long</p>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group mb-4">
                                                                        <input type="password" className="form-control" id="cPassword" placeholder="Current Password *" />
                                                                    </div>
                                                                    <div className="form-group mb-4">
                                                                        <input type="password" className="form-control" id="nPassword" placeholder="New Password *" />   
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password *" />
                                                                        <small id="emailHelp2" className="form-text text-muted">Password must be 8 characters long</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3" style={{padding: "0 20px", textAlign: "right"}}>
                                                                <button type="submit" className="btn btn-primary mt-3">Change Password</button>
                                                            </div>  
                                                        </form>
                                                    </div>    
                                                </div>
                                            </div>
                                            <div className="col-lg-12 layout-spacing">
                                                <div className="statbox widget box-shadow">
                                                    <div className="widget-header">                                
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                                                <h4>...</h4>
                                                            </div>                                                                        
                                                        </div>
                                                    </div>
                                                    <div className="widget-content widget-content-area ">
                                                        <form>
                                                            <div className="row" style={{padding: "0 20px"}}>
                                                                <div className="col-md-6">
                                                                    <h5>Two-Factor authenication(2FA)</h5>
                                                                    <p>Decide your prefered method of receiving one time password(OTP)</p>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="n-chk mb-4">
                                                                        <label className="new-control new-radio new-radio-text">
                                                                            <input type="radio" className="new-control-input" name="custom-radio-4" />
                                                                            <span className="new-control-indicator"></span><span className="new-radio-content">Recieve OTP via email</span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="n-chk mb-4">
                                                                        <label className="new-control new-radio new-radio-text">
                                                                            <input type="radio" className="new-control-input" name="custom-radio-4" checked />
                                                                            <span className="new-control-indicator"></span><span className="new-radio-content">Recieve OTP via authenticator app</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>    
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="tab-pane fade" id="border-top-company" role="tabpanel" aria-labelledby="border-top-company-tab">
                                        <div className="row">
                                            <div id="flRegistrationForm" className="col-lg-12 layout-spacing">
                                                <div className="statbox widget box-shadow">
                                                    <div className="widget-header">                                
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                                                <h4>...</h4>
                                                            </div>                                                                        
                                                        </div>
                                                    </div>
                                                    <div className="widget-content widget-content-area ">
                                                        <form>
                                                            <div className="row mb-5" tyle={{padding: "0px 20px"}}>
                                                                <div className="col-md-6">
                                                                    <h5>Company Logo</h5>
                                                                    <p>Please upload a valid (500*500) PNG format of your logo</p>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="custom-file-container" data-upload-id="myFirstImage">
                                                                        <label className="custom-file-container__custom-file" >
                                                                            <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                                                                            <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                                                            <span className="custom-file-container__custom-file__custom-file-control"></span>
                                                                        </label>
                                                                        {/* <!--<div className="custom-file-container__image-preview"></div>--> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-5" tyle={{padding: "0px 20px"}}>
                                                                <div className="col-md-6">
                                                                    <h5>Business Name</h5>
                                                                    <p>You can change your name after your account has been created</p>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input type="text" className="form-control" id="businessName" placeholder="Business Name" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-5" tyle={{padding: "0px 20px"}}>
                                                                <div className="col-md-6">
                                                                    <h5>Company bio</h5>
                                                                    <p>Tell us a little about your business</p>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                                                        </textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="row mb-5" tyle={{padding: "0px 20px"}}>
                                                                <div className="col-md-6">
                                                                    <h5>Business Industry</h5>
                                                                    <p>The industry closest to the one in which your company operates</p>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <select className="form-control" id="exampleFormControlSelect2">
                                                                            <option>Textile</option>
                                                                            <option>Information Technology</option>
                                                                            <option>Media &amp; Finanace</option>
                                                                            <option>Civil Works</option>
                                                                            <option>Electrical</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-5" tyle={{padding: "0px 20px"}}>
                                                                <div className="col-md-6">
                                                                    <h5>Business address</h5>
                                                                    <p>This is where your business is located</p>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input type="text" className="form-control" id="businessAddress" placeholder="Business Address" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input type="text" className="form-control" id="stateName" placeholder="State" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input type="text" className="form-control" id="cityName" placeholder="City" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3" style={{padding: "0 20px", textAlign: "right"}}>
                                                                <button type="submit" className="btn btn-primary mt-3">Save Changes</button>
                                                            </div>
                                                        </form>
                                                    </div>    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="border-top-travelers" role="tabpanel" aria-labelledby="border-top-travelers-tab">
                                        <div className="row">
                                            <div className="col-lg-12 layout-spacing">
                                                <div className="statbox box-shadow">
                                                    <div className="widget-header">                                
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                                                <h4>...</h4>
                                                            </div>                                                                        
                                                        </div>
                                                    </div>
                                                    <div className="widget-content widget-content-area ">
                                                            <div className="row mb-5" tyle={{padding: "0px 20px"}}>
                                                                <div className="col-md-6">
                                                                    <h5>Travelers List</h5>
                                                                    <p>Click to view list of travellers</p>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            {/* <!--<p className="mb-4"><code>To view all</code></p>--> */}
                                                                            <a href="..." className="btn btn-primary mb-2">View all</a>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            {/* <!--<p className="mb-4"><code>To add new travlers</code></p>--> */}
                                                                            <button href="..." className="btn btn-outline-primary mb-2"  data-toggle="modal" data-target="#addNewTraveler">Add Traveler</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Add New Traveler Modal --> */}
                    <div className="modal fade" id="addNewTraveler" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">New Traveler</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group mb-4">
                                        <label for="firstName">First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label for="lastName">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label for="dateOfBirth">Date of birth</label>
                                        <input type="date" className="form-control" id="dateOfBirth" placeholder="First Name" />
                                    </div>   
                                </div>
                                <div className="modal-footer">
                                    <button className="btn" data-dismiss="modal"><i className="flaticon-cancel-12"></i> Cancel</button>
                                    <button type="button" className="btn btn-primary">Add </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!--  END CONTENT AREA  --> */}
        </div>
    )
}

export default Setting;