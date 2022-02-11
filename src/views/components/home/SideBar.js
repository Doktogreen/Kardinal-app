import React from 'react';

function SideBar(props) {
    return(
        <aside id="left-sidebar" className="left-sidebar">
        <ul className="left-sidebar-nav" id="left-sidebar-nav">
        <li className="nav-items">
            <div className="header">
                <ul className='rows'>
                    <li className="get-started-wrapper">
                        <a href="/login" className="filled-btn bg-filled button-radius btn-bordered">
                              Login
                        </a>
                    </li>
                    <li className="get-started-wrapper">
                        <a href="/register" className="btn1" >
                            Sign Up
                        </a>
                    </li>
                    <li>
                    <li className="close-icon">
                        <span className='get-close-icon' aria-hidden="true">&times;</span>
                    </li>
                    </li>
                </ul>
            </div>
        </li>
          <li className="nav-items">
            <a className="nav-link collapsed navlicolap" data-bs-target="#components-nav" data-bs-toggle="collapse" href="...">
            <div>
              <i className="leftbar-bi ri-contacts-fill"></i><span className="nav-link-text">Solutions</span><i className="bi bi-chevron-down ms-auto"></i>
            </div>
            <span className="dd-trigger"><i className="fas fa-angle-down"></i></span>
            </a>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#left-sidebar-nav">
            <div class="row">
                    <div class="col-md-6">
                        <li>
                            <a href="travel.html">
                                <div class="d-inline-flex row">
                                    <div class="menu-icon-drop col-3">
                                        <img src={props.travel} alt="aaa" />
                                        {/* <!--<i class="fa fa-plane fa-2x"></i>--> */}
                                    </div>
                                    <p class="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>Travel</span><br />  Automate your expense, travel, and invoice management for improved business resilience.</p>
                                </div> 
                            </a>
                        </li> 
                    </div>
                    <div class="col-md-6">
                        <li>
                            <a href="k-care.html">
                                <div class="d-inline-flex row">
                                    <div class="menu-icon-drop col-3">
                                        <img src={props.kcare} alt="aaa" />
                                        {/* <!--<i class="fa fa-building fa-2x"></i>--> */}
                                    </div>
                                    <p class="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>K-Care </span><br /> Travel alerts with detailed information to keep you and your team up-to-date.</p>
                                </div> 
                            </a>
                        </li> 
                    </div>
                    <div class="col-md-6">
                        <li>
                            <a href="hotel.html">
                                <div class="d-inline-flex row">
                                    <div class="menu-icon-drop col-3">
                                        <img src={props.hotel} alt="aaa" />
                                        {/* <!--<i class="fa fa-plane fa-2x"></i>--> */}
                                    </div>
                                    <p class="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>Hotel/Accommodation</span><br />  Comfort rooms for all your business trip need.</p>
                                </div> 
                            </a>
                        </li> 
                    </div>
                    <div class="col-md-6">
                        <li>
                            <a href="car-rental.html">
                                <div class="d-inline-flex row">
                                    <div class="menu-icon-drop col-3">
                                        <img src={props.car} alt="aaa" />
                                        {/* <!--<i class="fa fa-car fa-2x"></i>--> */}
                                    </div>
                                    <p class="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>Car Rental</span><br />Corporate car solution to help you move faster</p>
                                </div> 
                            </a>
                        </li> 
                    </div>
                </div>
            </ul>
          </li>
          <li className="nav-items">
            <a className="nav-link collapsed navlicolap" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="...">
            <div>
              <i className="leftbar-bi ri-contacts-fill"></i><span className="nav-link-text">Resources</span><i className="bi bi-chevron-down ms-auto"></i>
            </div>
            <span className="dd-trigger"><i className="fas fa-angle-down"></i></span>
            </a>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#left-sidebar-nav">
            <div class="row">
                    <div class="col-md-6">
                        <li>
                            <a href="guide.html">
                                <div class="d-inline-flex row">
                                    <div class="menu-icon-drop col-3">
                                        <i class="fas fa-directions fa-2x"></i>
                                    </div>
                                    <p class="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>Guides</span><br /> Corporate travel jargon simplified for you.</p>
                                </div> 
                            </a>
                        </li> 
                    </div>
                    <div class="col-md-6">
                        <li>
                            <a href="webinar.html">
                                <div class="d-inline-flex row">
                                    <div class="menu-icon-drop col-3">
                                        <i class="fas fa-webcam fa-2x"></i>
                                    </div>
                                    <p class="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>Webinars</span><br /> Corporate Live Series that talks about business needs for today’s world.</p>
                                </div> 
                            </a>
                        </li> 
                    </div>
                    <div class="col-md-6">
                        <li>
                            <a href="https://gokardinal.medium.com/" target="_blank" rel="noreferrer">
                                <div class="d-inline-flex row">
                                    <div class="menu-icon-drop col-3">
                                        <i class="fas fa-blog fa-2x"></i>
                                    </div>
                                    <p class="drop-menu-new-p col-9"><span style={{fontSize: "12px", fontWeight: "500"}}>Blog</span><br /> The best online resource for business trip management.</p>
                                </div> 
                            </a>
                        </li> 
                    </div>
                </div>
            </ul>
          </li>
          {/* <!-- End Forms Nav --> */}
    
          <li className="nav-items">
            <a className="nav-link collapsed navlicolap" href="users-profile.html">
            <div><i className="leftbar-bi ri-contacts-fill"></i><span className="nav-link-text">Customers</span></div>
            </a>
          </li>
          <li className="nav-items">
            <a className="nav-link collapsed navlicolap" href="users-profile.html">
            <div><i className="leftbar-bi ri-contacts-fill"></i><span className="nav-link-text">Company</span></div>
            </a>
          </li>
          <li className="nav-items">
            <a className="nav-link collapsed navlicolap" href="users-profile.html">
            <div><i className="leftbar-bi ri-contacts-fill"></i><span className="nav-link-text">Contact</span></div>
            </a>
          </li>
          
        </ul>
    
      </aside>
    //   <!-- End left-Sidebar-->
    )
}

export default SideBar;