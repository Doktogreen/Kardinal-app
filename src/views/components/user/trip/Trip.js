import React from "react";

function Trip(){
    return(
        <div className="main-container" id="container">
            <div className="overlay"></div>
            <div className="search-overlay"></div>
                {/* <!--  BEGIN CONTENT AREA  --> */}
                <div id="content" className="main-content">
                    <div className="layout-px-spacing">
                        <div className="page-header">
                            <div className="page-title">
                                <h3>Trips</h3>
                            </div>   
                        </div>
                        <div className="col-lg-12 col-12 layout-spacing">
                            <div className="widget widget-content widget-content-area border-tab widget-account-invoice-one widget-chart-three"  style="padding: 0px 20px;">
                                <div className="widget-heading" style="padding: 20px 0px;">
                                    <div>
                                        <h5>Trips</h5>
                                    </div>
                                </div>     
                                <ul className="nav nav-tabs mt-3" id="border-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="border-travel-tab" data-toggle="tab" href="#border-travel" role="tab" aria-controls="border-travel" aria-selected="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-travel"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Travel</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-hotel-tab" data-toggle="tab" href="#border-hotel" role="tab" aria-controls="border-hotel" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Hotel</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-car-tab" data-toggle="tab" href="#border-car" role="tab" aria-controls="border-car" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Car</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="border-package-tab" data-toggle="tab" href="#border-package" role="tab" aria-controls="border-package" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Packages</a>
                                    </li>
                                </ul>
                                <div className="tab-content mb-4" id="border-tabsContent">
                                    <div className="tab-pane fade show active" id="border-travel" role="tabpanel" aria-labelledby="border-travel-tab">
                                        <div></div>
                                        <div className="form-row mb-4">
                                            <div className="form-group col-md-6">
                                                <label for="input">From</label>
                                                <input type="text" className="form-control" id="inputf" placeholder="From" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="input">To</label>
                                                <input type="text" className="form-control" id="inputt" placeholder="To" />
                                            </div>
                                        </div> 
                                        <div className="form-row mb-4">
                                        <div className="form-group col-md-4">
                                            <label for="input">Date</label>
                                                <select id="inputd" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option value="01">January</option>
                                                    <option value="02">February</option>
                                                    <option value="03">March</option>
                                                    <option value="04">April</option>
                                                    <option value="05">May</option>
                                                    <option value="06">June</option>
                                                    <option value="07">July</option>
                                                    <option value="08">August</option>
                                                    <option value="09">September</option>
                                                    <option value="10">October</option>
                                                    <option value="11">November</option>
                                                    <option value="12">December</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label for="input">Passenger</label>
                                                <input type="text" className="form-control" id="inputp" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label for="inputState">Economy</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-12 mt-3">
                                                <label className="new-control new-radio radio-primary">
                                                <input type="radio" className="new-control-input" name="custom-radio-1" selected />
                                                <span className="new-control-indicator"></span>Roundtrip
                                                </label>
                                                <label className="new-control new-radio radio-primary">
                                                <input type="radio" className="new-control-input" name="custom-radio-1" />
                                                <span className="new-control-indicator"></span>Oneway
                                                </label>
                                                <label className="new-control new-radio radio-primary">
                                                <input type="radio" className="new-control-input" name="custom-radio-1" />
                                                <span className="new-control-indicator"></span>Multicity
                                                </label>
                                                <label className="new-control new-checkbox checkbox-dark">
                                                <input type="checkbox" className="new-control-input"  />
                                                <span className="new-control-indicator"></span>Email Request
                                                </label>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <button type="submit" className="btn btn-primary mt-3" style="float: right;">Find Flights</button>
                                            </div>
                                        </div>  
                                        </div>
                                        <div className="tab-pane fade" id="border-hotel" role="tabpanel" aria-labelledby="border-hotel-tab">
                                            <div className="form-row mb-4">
                                                <div className="form-group col-md-6">
                                                    <label for="input">Search By</label>
                                                    <input type="text" className="form-control" id="inputf" placeholder="Search By Destination/Hotels" /> 
                                                </div>
                                                <div className="form-group col-md-3">
                                                    <label for="input">Check-in</label>
                                                    <input type="date" className="form-control" id="inputdd" placeholder="Check-in " />
                                                </div>
                                                <div className="form-group col-md-3">
                                                    <label for="input">Check-out</label>
                                                    <input type="date" className="form-control" id="inputdd" placeholder=" Check-out" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <button type="submit" className="btn btn-primary mt-3" style="float: right;">Find Hotels</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="border-car" role="tabpanel" aria-labelledby="border-car-tab">
                                            <form>
                                                <div className="form-row mb-4">
                                                    <div className="form-group col-md-6">
                                                        <label for="input">Pickup location</label>
                                                        <input type="text" className="form-control" id="pickupLocation" placeholder="Pickup location" />
                                                        <label className="new-control new-checkbox checkbox-dark mt-2">
                                                        <input type="checkbox" className="new-control-input" checked />
                                                        <span className="new-control-indicator"></span>Return car to same location
                                                        </label>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label for="input">Start Date</label>
                                                            <input type="date" className="form-control" id="startDate" />
                                                            <label className="new-control new-checkbox checkbox-dark mt-2">
                                                        <input type="checkbox" className="new-control-input" />
                                                        <span className="new-control-indicator"></span>Primary Driver is 25 or older
                                                        </label>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label for="input">End Date</label>
                                                            <input type="date" className="form-control" id="endDate" />
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="input">Pickup time</label>
                                                        <input type="time" className="form-control" id="inputf" placeholder="Pickup time" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="input">Drop off time</label>
                                                        <input type="time" className="form-control" id="inputf" placeholder=" Drop off time" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <button type="submit" className="btn btn-primary mt-3" style="float: right;">Find Cars</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tab-pane fade" id="border-package" role="tabpanel" aria-labelledby="border-package-tab">
                                            <form>
                                                <div className="form-row mb-4">
                                                    <div className="form-group col-md-6">
                                                        <label for="input">Pickup location</label>
                                                        <input type="text" className="form-control" id="inputf" placeholder="Pickup location" />
                                                        <label className="new-control new-checkbox checkbox-dark mt-2">
                                                        <input type="checkbox" className="new-control-input" checked />
                                                        <span className="new-control-indicator"></span>Return car to same location
                                                        </label>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="input">Rental dates</label>
                                                        <input type="date" className="form-control" id="inputf" placeholder="Pickup location" />
                                                        <label className="new-control new-checkbox checkbox-dark mt-2">
                                                        <input type="checkbox" className="new-control-input" />
                                                        <span className="new-control-indicator"></span>Primary Driver is 25 or older
                                                        </label>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="input">Pickup time</label>
                                                        <input type="time" className="form-control" id="inputf" placeholder="Pickup time" />
                                                        
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="input">Drop off time</label>
                                                        <input type="time" className="form-control" id="inputf" placeholder=" Drop off time" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <button type="submit" className="btn btn-primary mt-3" style="float: right;">Find Cars</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            <div className="">
                        
                             </div>
                        </div>
                    </div>

                </div>
                {/* <!--  END CONTENT AREA  --> */}

            </div>
    )
}