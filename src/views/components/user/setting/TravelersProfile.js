import React from 'react';

export function TravelersModal(){
    return(
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
    )
}
export default function TravelersProfile(){
    return(
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
    )
}