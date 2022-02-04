import React from "react";
import ReactApexChart from "react-apexcharts";
import { salesByCategory, totalConversations, totalOrders, totalRevenue, totalVisistors, uniqueVisitorsOptions1 } from '../../../../utilities/scripts';

function Reporting(){
    return(
        <div className="main-container" id="container">
        <div className="overlay"></div>
        <div className="search-overlay"></div>
        {/* <!--  BEGIN CONTENT AREA  --> */}
        <div id="content" className="main-content">
            <div className="layout-px-spacing">
                <div className="page-header">
                    <div className="page-title">
                        <h3>Reporting</h3>
                    </div>    
                </div>
                <div className="row analytics ">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12  layout-spacing">
                        <div className="widget widget-one" style={{height: "150px"}}>
                            <div className="w-chart" style={{display: "block"}}>
                                <div className="w-chart-section" style={{width: "100%"}}>
                                    <div className="w-detail">
                                        <p className="w-title">Total Revenue</p>
                                        <p className="w-stats">$423,964</p>
                                    </div>
                                    <div className="w-chart-render-one">
                                        <ReactApexChart 
                                            options={totalRevenue}
                                            series={totalRevenue.series}
                                            type="line"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12  layout-spacing">
                        <div className="widget widget-one" style={{height: "150px"}}>
                            <div className="w-chart" style={{display: "block"}}>
                                <div className="w-chart-section" style={{width: "100%"}}>
                                    <div className="w-detail">
                                        <p className="w-title">Total Orders</p>
                                        <p className="w-stats">423</p>
                                    </div>
                                     <div className="w-chart-render-one">
                                        <ReactApexChart 
                                            options={totalOrders}
                                            series={totalOrders.series}
                                            type="line"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12  layout-spacing">
                        <div className="widget widget-one" style={{height: "150px"}}>
                            <div className="w-chart" style={{display: "block"}}>
                                <div className="w-chart-section" style={{width: "100%"}}>
                                    <div className="w-detail">
                                        <p className="w-title">Total Visitors</p>
                                        <p className="w-stats">96.4K</p>
                                    </div>
                                    <div className="w-chart-render-one">
                                        <ReactApexChart 
                                            options={totalVisistors}
                                            series={totalVisistors.series}
                                            type="line"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12  layout-spacing">
                        <div className="widget widget-one" style={{height: "150px"}}>
                            <div className="w-chart" style={{display: "block"}}>
                                <div className="w-chart-section" style={{width: "100%"}}>
                                    <div className="w-detail">
                                        <p className="w-title">total Conversations</p>
                                        <p className="w-stats">7,929</p>
                                    </div>
                                    <div className="w-chart-render-one">
                                        <ReactApexChart 
                                            options={totalConversations}
                                            series={totalConversations.series}
                                            type="line"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row analytics">
                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-chart-three">
                            <div className="widget-heading">
                                <div className="">
                                    <h5 className="">Unique Visitors</h5>
                                </div>
                                <div className="dropdown  custom-dropdown">
                                    <a className="dropdown-toggle" href="..." role="button" id="dropdownMenuLink-1" dataToggle="dropdown" ariaHaspopup="true" ariaExpanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink-1">
                                        <a className="dropdown-item" href={{javascript:void(0)}}>View</a>
                                        <a className="dropdown-item" href={{javascript:void(0)}}>Update</a>
                                        <a className="dropdown-item" href={{javascript:void(0)}}>Download</a>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-content">
                            <div >
                                <ReactApexChart 
                                    options={uniqueVisitorsOptions1}
                                    series={uniqueVisitorsOptions1.series}
                                    type="bar"
                                    height={350}
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-chart-two">
                            <div className="widget-heading">
                                <h5 className="">Sales by Category</h5>
                            </div>
                            <div className="widget-content">
                            <ReactApexChart 
                                    options={salesByCategory}
                                    series={salesByCategory.series}
                                    type="donut"
                                    height={380}
                                />
                            </div>
                        </div>
                    </div>   
                </div>    
                <div className="row layout-spacing">
                    <div className="col-lg-12">
                        <div className="statbox widget box-shadow"  style={{padding: "20px"}}>
                            <div className="widget-header">
                                <form className="mt-3">
                                    <div className="form-row mb-4">
                                        <div className="form-group col-md-4">
                                            <label for="input"> Date From</label>
                                            <input type="date" className="form-control" id="inputf" placeholder="Select date" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="input">Date To</label>
                                            <input type="date" className="form-control" id="inputt" placeholder="Select date" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="input">Module</label>
                                            <select id="inputd" className="form-control">
                                                <option selected>All</option>
                                                <option value="01">1</option>
                                                <option value="02">2</option>
                                                <option value="03">3</option>
                                                <option value="04">4</option>
                                                <option value="05">5</option>
                                                <option value="06">6</option>
                                                <option value="07">7</option>
                                                <option value="08">8</option>
                                                <option value="09">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12" style={{textAlign: "right"}}>
                                            <a className="dot" href="..." target="_blank" rel="noreferrer">View Report</a>
                                        </div>
                                    </div>
                                </form> 
                            </div> 
                            <div>
                                <div className="dt-buttons" style={{textAlign:"right"}}> 
                                    <button className="dt-button1 buttons-copy buttons-html5 btn" tabindex="0" ariaControls="html5-extension"><span>Copy</span></button>
                                    <button className="dt-button1 buttons-csv buttons-html5 btn" tabindex="0" ariaControls="html5-extension"><span>CSV</span></button>
                                    <button className="dt-button1 buttons-excel buttons-html5 btn" tabindex="0" ariaControls="html5-extension"><span>Excel</span></button>
                                    <button className="dt-button1 buttons-print btn" tabindex="0" ariaControls="html5-extension"><span>Print</span></button>
                                </div>
                                <div className="table-responsive mb-4">
                                    <table className="table style-3  table-hover">
                                        <thead>
                                            <tr>
                                                <th className="checkbox-column text-center"> Depart </th>
                                                <th>SL NO.</th>
                                                <th>Service Type</th>
                                                <th>Customer ID</th>
                                                <th>Booking ID</th>
                                                <th>Flown Date</th>
                                                <th>Amount</th> 
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="checkbox-column text-center">12345 </td>
                                                <td>3401-Sales trip to London</td>
                                                <td>C112334</td>
                                                <td>BOOK3224 </td>
                                                <td>25 July 2021</td>
                                                <td>5000</td>   
                                            </tr>
                                            <tr>
                                                <td className="checkbox-column text-center">12345 </td>
                                                <td>3401-Sales trip to London</td>
                                                <td>C112334</td>
                                                <td>BOOK3224 </td>
                                                <td>25 July 2021</td>
                                                <td>5000</td>    
                                            </tr>
                                            <tr>
                                                <td className="checkbox-column text-center">12345 </td>
                                                <td>3401-Sales trip to London</td>
                                                <td>C112334</td>
                                                <td>BOOK3224 </td>
                                                <td>25 July 2021</td>
                                                <td>5000</td>  
                                            </tr>
                                            <tr>
                                                <td className="checkbox-column text-center">12345 </td>
                                                <td>3401-Sales trip to London</td>
                                                <td>C112334</td>
                                                <td>BOOK3224 </td>
                                                <td>25 July 2021</td>
                                                <td>5000</td>     
                                            </tr>
                                            <tr>
                                                <td className="checkbox-column text-center">12345 </td>
                                                <td>3401-Sales trip to London</td>
                                                <td>C112334</td>
                                                <td>BOOK3224 </td>
                                                <td>25 July 2021</td>
                                                <td>5000</td>    
                                            </tr>
                                            <tr>
                                                <td className="checkbox-column text-center">12345 </td>
                                                <td>3401-Sales trip to London</td>
                                                <td>C112334</td>
                                                <td>BOOK3224 </td>
                                                <td>25 July 2021</td>
                                                <td>5000</td>     
                                            </tr>                        
                                        </tbody>
                                    </table>
                                </div>
                            </div>          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Reporting;