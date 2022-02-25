import React from 'react';

export default function CompanyProfile(){
    return(
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
    )
}